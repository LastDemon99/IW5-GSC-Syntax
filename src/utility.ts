import * as vscode from 'vscode';
import { join, relative } from 'path';
import { accessSync, constants } from 'fs';
import { KEYWORDS } from './defs/game';

const GSC_EXTENSION = '.gsc';
export const PLUTONIUM_FOLDER = join(process.env.LOCALAPPDATA || '', 'Plutonium', 'storage', 'iw5').toLowerCase();
export const ZONETOOL_FOLDER = join(process.env.LOCALAPPDATA || '', 'Plutonium', 'storage', 'zonetool').toLowerCase();
export const GSC_MP_FOLDER = join(vscode.extensions.getExtension('LastDemon99.lb-iw5-gsc')!.extensionPath, 'rawFiles').toLowerCase();

export const PATH_PATTERN = /([a-zA-Z0-9_]+(?:\\[a-zA-Z0-9_]+)+)/g;

export interface tokenData { location: vscode.Location; hover: vscode.Hover | undefined; ranges: vscode.Range[] }

export enum funcType { call, pointer, pathCall, pathPointer };

export class GSC_Token {
    public definitions: Map<string, tokenData> = new Map();
    public completions: vscode.CompletionItem[] = [];

    public get list(): string[] {
        return Array.from(this.definitions.keys());
    }

    public getHover(word: string): vscode.Hover | undefined {
        return this.definitions.get(word)?.hover;
    }

    public getLocation(word: string): vscode.Location | undefined {
        return this.definitions.get(word)?.location;
    }

    public getRanges(word: string): vscode.Range[] | undefined {
        return this.definitions.get(word)?.ranges;
    }

    public isCommentsAtPosition(commentRanges: vscode.Range[], position: vscode.Position): boolean {
        return commentRanges.some(range => range.contains(position));
    } 
}

export function tryGetFunction(document: vscode.TextDocument, target: vscode.Range | vscode.Position | undefined): { include: string, type: funcType } | undefined {
    if (!target) return undefined;

    const word = document.getText(target instanceof vscode.Range ? target : document.getWordRangeAtPosition(target)).toLowerCase();
    if (KEYWORDS.includes(word)) return undefined;
    
    const trygetInclude = getPrevWord(document, target);
    if (trygetInclude && beforeWord(document, target, `${trygetInclude}::`, true)) {
        if (afterWord(document, target, "(", true)) return { include: trygetInclude.toLowerCase(), type: funcType.pathCall };
        else return { include: trygetInclude.toLowerCase(), type: funcType.pathPointer };
    }

    if (afterWord(document, target, "(", true)) return { include: '', type: funcType.call };
    if (beforeWord(document, target, "::", true)) return { include: '', type: funcType.pointer };
    return undefined;
}

export function isInclude(document: vscode.TextDocument, target: vscode.Range | vscode.Position | undefined, word: string | undefined): boolean {
    if (!target) return false;
    if (!word) word = document.getText(target instanceof vscode.Range ? target : document.getWordRangeAtPosition(target)).toLowerCase();
    if (PATH_PATTERN.test(word)) return true;
    return false;
}

export function isFunc(document: vscode.TextDocument, target: vscode.Range | vscode.Position | undefined): boolean {
    return tryGetFunction(document, target) !== undefined;
}

export function isVariable(document: vscode.TextDocument, target: vscode.Range | vscode.Position | undefined, word: string | undefined): boolean {
    if (!target) return false;
    if (!word) word = document.getText(target instanceof vscode.Range ? target : document.getWordRangeAtPosition(target)).toLowerCase();
    return !isInclude(document, target, word) && !isFunc(document, target) && !KEYWORDS.includes(word);
}

export function getNextWordRange(document: vscode.TextDocument, target: vscode.Range | vscode.Position): vscode.Range | undefined {
    const wordRange = target instanceof vscode.Range ? target : document.getWordRangeAtPosition(target);
    if (!wordRange) return undefined;

    let nextCharacter = wordRange.end.character;
    while (nextCharacter < document.lineAt(wordRange.start.line).text.length) {
        const nextWordRange = document.getWordRangeAtPosition(new vscode.Position(wordRange.start.line, nextCharacter));
        if (nextWordRange) return nextWordRange;
        nextCharacter++;
    }
    return undefined;
}

export function getNextWord(document: vscode.TextDocument, target: vscode.Range | vscode.Position): string | undefined {
    const nextRange = getNextWordRange(document, target);
    return nextRange ? document.getText(nextRange) : undefined;
}

export function getPrevWordRange(document: vscode.TextDocument, target: vscode.Range | vscode.Position): vscode.Range | undefined {
    const wordRange = target instanceof vscode.Range ? target : document.getWordRangeAtPosition(target);
    if (!wordRange) return undefined;

    let count = 1;
    let prevCharacter = wordRange.start.character - count;
    while(prevCharacter > 0) {
        const prevWordRange = document.getWordRangeAtPosition(new vscode.Position(wordRange.start.line, prevCharacter));
        if (prevWordRange) return prevWordRange;
        prevCharacter--;
    }
    return undefined;
}

export function getPrevWord(document: vscode.TextDocument, target: vscode.Range | vscode.Position): string | undefined {
    const prevRange = getPrevWordRange(document, target);
    return prevRange ? document.getText(prevRange) : undefined;
}

export function afterWord(document: vscode.TextDocument, target: vscode.Range | vscode.Position, wordTarget: string, trim: boolean = false): boolean {
    const wordRange = target instanceof vscode.Range ? target : document.getWordRangeAtPosition(target);
    if (!wordRange) return false;

    const line = wordRange.end.line;
    const lineText = document.lineAt(line).text;
    const startCharacter = wordRange.end.character;
    
    let textAfter = lineText.slice(startCharacter);
    if (trim) textAfter = textAfter.trim();
    else {
        if (startCharacter + wordTarget.length > lineText.length) return false;
        textAfter = textAfter.substr(0, wordTarget.length);
    }
    
    return textAfter.startsWith(wordTarget);
}
  
export function beforeWord(document: vscode.TextDocument, target: vscode.Range | vscode.Position | undefined, wordTarget: string, trim: boolean = false): boolean {
    if (!target) return false;
    const wordRange = target instanceof vscode.Range ? target : document.getWordRangeAtPosition(target);
    if (!wordRange) return false;

    const line = wordRange.end.line;
    const lineText = document.lineAt(line).text;
    const endCharacter = wordRange.start.character;

    if (trim) return lineText.slice(0, endCharacter).trim().endsWith(wordTarget);
    else {
        const startCharacter = endCharacter - wordTarget.length;
        if (startCharacter < 0) return false; 
        return document.getText(new vscode.Range(new vscode.Position(line, startCharacter), new vscode.Position(line, endCharacter))).endsWith(wordTarget);
    }
}

export function getDocString(document: vscode.TextDocument, funcStartLine: number, detail: string, include: string): vscode.MarkdownString {
    let docString = '';    
    for (let i = funcStartLine - 1; i >= Math.max(0, funcStartLine - 6); i--) {
        const line = document.lineAt(i).text.trim().toLowerCase();
        if (line.startsWith('///docstringbegin')) {
            for (let j = i + 1; j < document.lineCount && !document.lineAt(j).text.trim().startsWith('///docstringend'); j++) {
                docString += document.lineAt(j).text.trim() + '\n';
            }
            break;
        }
    }
    const markdown = new vscode.MarkdownString();
    if (docString) {
        const docLines = docString.split('\n');
        const detailLine = docLines.find(line => line.startsWith('detail:'));
        const summaryLine = docLines.find(line => line.startsWith('summary:'));
        if (detailLine) markdown.appendCodeblock(detailLine.replace('detail:', '').trimStart(), 'typescript');
        if (summaryLine) markdown.appendMarkdown(summaryLine.replace('summary:', '').trimStart());
    }
    else markdown.appendCodeblock(detail, 'gsc');
    markdown.appendCodeblock(`\n<File> ${include}.gsc`, 'typescript');
    markdown.isTrusted = true;
    return markdown;
}

export function fileExists(filePath: string): boolean {
    try {
        accessSync(filePath, constants.F_OK);
        return true;
    } catch (error) {
        return false;
    }
}

export function getCommentRanges(text: string, document: vscode.TextDocument): vscode.Range[] {
    const commentBlocks = /\/\*[\s\S]*?\*\/|\/\/[^\n]*/g;
    const commentRangesCache: vscode.Range[] = [];
    let match;
    while ((match = commentBlocks.exec(text)) !== null) {
        const startPos = document.positionAt(match.index);
        const endPos = document.positionAt(match.index + match[0].length);
        commentRangesCache.push(new vscode.Range(startPos, endPos));
    }
    return commentRangesCache;
}

export function isCommentsAtPosition(text: string, document: vscode.TextDocument, position: vscode.Position): boolean {
    return getCommentRanges(text, document).some(range => range.contains(position));
}

export function pathToInclude(filePath: string, lower: boolean = true): string {
    filePath = filePath.toLocaleLowerCase();
    let include = '';
    if (filePath.startsWith(PLUTONIUM_FOLDER)) include = relative(PLUTONIUM_FOLDER, filePath).replace(GSC_EXTENSION, "");
    else if (filePath.startsWith(GSC_MP_FOLDER)) include = relative(GSC_MP_FOLDER, filePath).replace(GSC_EXTENSION, "");
    else return filePath;
    return lower ? include.toLocaleLowerCase() : include;
}

export function documentToInclude(document: vscode.TextDocument): string {
    return pathToInclude(document.uri.fsPath);
}

export function includeToPath(include: string): string {
    include = include.toLowerCase();
    const plutoPath = join(PLUTONIUM_FOLDER, include) + GSC_EXTENSION;
    return fileExists(plutoPath) ? plutoPath : join(GSC_MP_FOLDER, include) + GSC_EXTENSION;
}

export function includeToUri(include: string): vscode.Uri {
    return vscode.Uri.file(includeToPath(include));
}

export function getStringRanges(text: string): { start: number; end: number }[] {
    const stringPattern = /"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'/g;
    let stringRanges: { start: number; end: number }[] = [];
    let match: RegExpExecArray | null;
    while ((match = stringPattern.exec(text)) !== null) {
        stringRanges.push({ start: match.index, end: stringPattern.lastIndex });
    }
    return stringRanges;
}