import { Location, Position, Range, TextDocument, CompletionItem, CompletionItemKind, MarkdownString, Hover } from 'vscode';
import { afterWord, documentToInclude, isFunc, getStringRanges } from '../utility';
import { KEYWORDS } from '../defs/game';
import { GSC_Token, isInclude, beforeWord } from '../utility';
import { gscDocuments } from './documents';

export type GSC_Objects = Map<string, GSC_Objects>;
export const levelObject: GSC_Objects = new Map();

export const WORD_PATTERN = /(?=[a-zA-Z0-9_]*[a-zA-Z])([a-zA-Z0-9_]+(?:\\[a-zA-Z0-9_]+)*)/g;
const FIELDS_PATTERN = /(\w+(?:\.\w+)*)\s*=/g;
const ARRAY_KEY_PATTERN = /(?:\.(\w+))|\[\s*(?:"|')([^"']+)(?:"|')\s*\]/g;

export class GSC_Variables extends GSC_Token {
    public includesPointer: string[] = [];
    public gscObjects: GSC_Objects = new Map();

    public parse(document: TextDocument, commentRanges: Range[], text: string, funcOffset: number) {
        WORD_PATTERN.lastIndex = 0;
        ARRAY_KEY_PATTERN.lastIndex = 0;

        const stringRanges = getStringRanges(text);
        const markdowns: Map<string, MarkdownString> = new Map();
        
        let match;
        while ((match = WORD_PATTERN.exec(text)) !== null) {
            const wordStart = match.index;
            const word = match[0];
            const wordLower = word.toLowerCase();
            const wordPosition = document.positionAt(funcOffset + wordStart);
            const wordRange = new Range(wordPosition, wordPosition.translate(0, wordLower.length));

            if (this.isCommentsAtPosition(commentRanges, wordPosition)) continue;
            if (stringRanges.some(range => wordStart >= range.start && wordStart < range.end)) continue;

            if (isInclude(document, wordRange, word) && !this.includesPointer.includes(wordLower)) {
                this.includesPointer.push(wordLower);
                continue;
            }
            
            const macro = gscDocuments.macros.get(documentToInclude(document))?.definitions.get(wordLower);
            if (macro) {
                macro.ranges.push(wordRange);
                continue;
            }

            if (isFunc(document, wordRange)) continue;
            
            if (!KEYWORDS.includes(word) && !beforeWord(document, wordRange, ".", true)) {
                if (this.definitions.has(wordLower)) {
                    this.definitions.get(wordLower)?.ranges.push(wordRange);
                } 
                else {
                    this.definitions.set(wordLower, {
                        location: new Location(document.uri, wordPosition),
                        hover: undefined,
                        ranges: [wordRange]
                    });
                    this.completions.push(new CompletionItem(word, CompletionItemKind.Variable));
                }

                let varDetail;
                if (afterWord(document, wordRange, "=", true)) {
                    const lineText = document.lineAt(wordRange.end.line).text;
                    varDetail = document.getText(new Range(
                        new Position(wordRange.end.line, wordRange.start.character),
                        new Position(wordRange.end.line, lineText.length)
                    ));
                } 
                else if (!varDetail) varDetail = word;

                if (!markdowns.has(wordLower)) markdowns.set(wordLower, new MarkdownString());
                markdowns.get(wordLower)?.appendCodeblock(varDetail, 'gsc');
                const varUri = document.uri.with({fragment: `${wordPosition.line + 1},${wordPosition.character + 1}` });
                markdowns.get(wordLower)?.appendMarkdown(`[{ L: ${wordPosition.line + 1}, C: ${wordPosition.character + 1} }](${varUri})`);
            }
        }

        for (const [name, markdown] of markdowns) {
            const varDef = this.definitions.get(name);
            if (varDef) {
                this.definitions.set(name, {
                    location: varDef.location,
                    hover: new Hover(markdown),
                    ranges: varDef.ranges
                });
            }
        }

        this.parseObjectVars(text);
        this.parseArrays(text);
        this.parseFieldAccesses(text, document, commentRanges, stringRanges);
    }

    private parseObjectVars(text: string) {
        FIELDS_PATTERN.lastIndex = 0;
        let match;
        while ((match = FIELDS_PATTERN.exec(text)) !== null) {
            const fullPath = match[1];
            const pathParts = fullPath.split('.').map(i => i.toLowerCase());
            this.updateObjects(pathParts);
        }
    }    

    private parseArrays(text: string) {
        const tokens: string[] = [];
        const identifierMatch = text.match(/^\w+/);
        if (identifierMatch) tokens.push(identifierMatch[0]);
        let match;
        while ((match = ARRAY_KEY_PATTERN.exec(text)) !== null) {
            if (match[1]) tokens.push(match[1]);
            else if (match[2]) tokens.push(match[2]);
        }
        this.updateObjects(tokens);
    }

    private parseFieldAccesses(text: string, document: TextDocument, commentRanges: Range[], stringRanges: {start: number, end: number}[]) {
        const FIELD_ACCESS_PATTERN = /\b\w+\.\w+(?:\.\w+)*\b/g;
        FIELD_ACCESS_PATTERN.lastIndex = 0;
        let match;
        while ((match = FIELD_ACCESS_PATTERN.exec(text)) !== null) {
            const matchIndex = match.index;
            const wordPosition = document.positionAt(matchIndex);
            if (this.isCommentsAtPosition(commentRanges, wordPosition)) continue;
            if (stringRanges.some(range => matchIndex >= range.start && matchIndex < range.end)) continue;
            const fullPath = match[0];
            const pathParts = fullPath.split('.').map(i => i.toLowerCase());
            this.updateObjects(pathParts);
        }
    }
    
    private updateObjects(path: string[]): void {
        let current = path[0] === "level" || path[0] === "game" ? levelObject : this.gscObjects;
        for (const part of path) {
            if (!current.has(part)) current.set(part, new Map());
            current = current.get(part)!;
        }
    }
}
