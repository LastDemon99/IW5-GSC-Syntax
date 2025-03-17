import { Location, Position, Range, TextDocument, CompletionItem, CompletionItemKind, MarkdownString, Hover, Uri } from 'vscode';
import { GSC_Token, getDocString, documentToInclude } from '../utility';
import { GSC_Variables } from './variables';
import { ENGINE_FUNCTIONS } from '../defs/game';

export const FUNC_DEF_PATTERN = /^(\w+)\s*\(([^)]*)\)\s*(\/\/.*?)?\s*(?=\{)/gm;

export interface editRanges { uri: Uri; ranges: Range[] }

export class GSC_Functions extends GSC_Token {
    public hover: Hover = new Hover(new MarkdownString());
    public scopeRanges: Map<string, Range> = new Map();
    public editRanges: Map<string, editRanges> = new Map();
    public variables: Map<string, GSC_Variables> = new Map();

    public parse(document: TextDocument, commentRanges: Range[], text: string) {
        const include = documentToInclude(document);
        const funcDetails: string[] = [];

        let match;
        while ((match = FUNC_DEF_PATTERN.exec(text)) !== null) {
            const funcMatch = match;
            const funcName = funcMatch[1].trim();
            const funcNameLower = funcName.toLowerCase();
            const funcDetail = funcMatch[0].split('\n')[0];
            const funcPosition = document.positionAt(funcMatch.index);
    
            if (this.isCommentsAtPosition(commentRanges, funcPosition)) continue;
            if (ENGINE_FUNCTIONS.includes(funcNameLower)) continue;

            funcDetails.push(funcDetail);
            const markdown = getDocString(document, funcPosition.line, funcDetail, include);
            this.pushCompletion(funcName, markdown);
            this.parseVariables(funcNameLower, text, match, funcPosition, document, commentRanges);
            this.definitions.set(funcNameLower, {location: new Location(document.uri, funcPosition), hover: new Hover(markdown), ranges: []});
        }

        funcDetails.sort();
        this.hover = new Hover(new MarkdownString().appendCodeblock(funcDetails.filter(i => !i.trim().startsWith('_')).join('\n'), 'gsc'));
    }

    private pushCompletion(funcName: string, funcMarkdown: MarkdownString) {
        const completion = new CompletionItem(funcName, CompletionItemKind.Function);
        completion.documentation = funcMarkdown;
        this.completions.push(completion);
    }
    
    private parseVariables(funcNameLower: string, text: string, match: RegExpExecArray, funcPosition: Position, document: TextDocument, commentRanges: Range[]) {
        const headerStartIndex = match.index;
        const bodyStartIndex = text.indexOf('{', headerStartIndex);
        if (bodyStartIndex === -1) return;
        let braceCount = 0;
        let currentIndex = bodyStartIndex;
        while (currentIndex < text.length) {
            const char = text[currentIndex];
            if (char === '{') {
                braceCount++;
            } else if (char === '}') {
                braceCount--;
            }
            currentIndex++;
            if (braceCount === 0) break;
        }
        const funcScopeText = text.substring(headerStartIndex, currentIndex);
        const variables: GSC_Variables = new GSC_Variables();
        variables.parse(document, commentRanges, funcScopeText, headerStartIndex);
        this.variables.set(funcNameLower, variables);
        this.scopeRanges.set(funcNameLower, new Range(funcPosition, document.positionAt(currentIndex)));
    }

    public getFuncByPosition(position: Position): string | undefined {
        for (const [funcName, ranges] of this.scopeRanges) {
            if (ranges.contains(position)) return funcName;
        }
        return undefined;
    }

    public get includesPointer(): string[] {
        const includes: string[] = [];
        this.variables.forEach(i => includes.push(...i.includesPointer));
        return [...new Set(includes)];
    }
}
