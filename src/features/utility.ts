import * as vscode from 'vscode';
import { join, relative, extname } from 'path';
import { accessSync, constants } from 'fs';

export const PLUTONIUM_FOLDER = join(process.env.LOCALAPPDATA || '', 'Plutonium', 'storage', 'iw5');
export const GSC_EXTENSION = '.gsc';
const STATEMENTS = ["if", "for", "foreach", "while", "switch"];

export const FUNCTION_PATTERN = /(\w+)\s*\([^)]*\)\s*(\/\/.*?)?\s*\{/gm;

export interface BasicRange {
    start: number,
    end: number
}

export function fileExists(filePath: string): boolean {
    try {
        accessSync(filePath, constants.F_OK);
        return true;
    } catch (error) {
        return false;
    }
}

export function directoryExists(directoryPath: string): boolean {
    try {
        accessSync(directoryPath, constants.R_OK);
        return true;
    } catch (error) {
        return false;
    }
}

export function isWordStatement(word: string): boolean {
    const wordLower = word.toLowerCase();
    return STATEMENTS.some(keyword => keyword === wordLower)
}

export function getDocumentLine(document: vscode.TextDocument, position: vscode.Position): string {
    return document.lineAt(position).text.toLowerCase();
}

export function getDocumentText(document: vscode.TextDocument): string {
    return document.getText().toLowerCase();
}

export function isGSCFile(filePath: string) {
    return extname(filePath) === GSC_EXTENSION;
}

export function includeToUri(include: string) {
    return vscode.Uri.file(includeToPath(include));
}

export function includeToPath(include: string) {
    return join(PLUTONIUM_FOLDER, include) + GSC_EXTENSION;
}

export function pathToInclude(filePath: string, checkExist: boolean = true): string | undefined {
    const include = relative(PLUTONIUM_FOLDER, filePath).replace(GSC_EXTENSION, "");
    return validateInclude(include, checkExist);
}

export function validateInclude(include: string, checkExist: boolean = true): string | undefined {
    include = include.trim().toLowerCase();
    if (checkExist) return fileExists(includeToPath(include)) ? include : undefined;
    return include;
}

export function getIncludes(text: string): string[] {
	const commentRanges = getCommentLinesRange(text);
    const pattern = new RegExp(/^\s*#include\s+([^\s;]+)/igm);
    const includes: string[] = [];

    let match;
    while ((match = pattern.exec(text)) !== null) {
        if (isCommentAtMatch(match, commentRanges)) continue;
        const include = match[1].trim().toLowerCase();

        if (!fileExists(includeToPath(include))) {
            console.log("Error: Include not exist", include);
            continue;
        }

        if (includes.includes(include)) {
            console.log("Error: Include ready defined", include);
            continue;
        }

        includes.push(include);
    }
    return includes;
}

export function getCommentLinesRange(text: string): BasicRange[] {
    const commentBlocks = /\/\*[\s\S]*?\*\/|\/\/[^\n]*/g;
    const ranges: BasicRange[] = [];
    let match;
    while ((match = commentBlocks.exec(text)) !== null) {
        ranges.push({
            start: match.index,
            end: match.index + match[0].length
        });
    }
    return ranges;
}

export function isCommentAtPosition(text: string, document: vscode.TextDocument, position: vscode.Position): boolean {
    const offset = document.offsetAt(position);
    const commentBlocks = /\/\*[\s\S]*?\*\/|\/\/[^\n]*/g;
    const commentRanges: BasicRange[] = [];
    let match;
    while ((match = commentBlocks.exec(text)) !== null) {
        if (match.index > offset) {
            break;
        }
        commentRanges.push({
            start: match.index,
            end: match.index + match[0].length
        });
    }

    for (const range of commentRanges) {
        if (offset >= range.start && offset < range.end) {
            return true;
        }
    }
    return false;
}

export function isCommentAtMatch(match: any, commentRanges: BasicRange[]): boolean {
    const start  = match.index;
    const end = start + match[0].length;
    return commentRanges.some((range) => start > range.start && end < range.end);
}

export function isFunctionAtPosition(line: string, position: vscode.Position, word: string): boolean | undefined {
    let match;

    const pattern1 = new RegExp(`(?:([a-zA-Z0-9_\\\\]+::)?)(${word})\\(`, 'gi');
    const pattern2 = new RegExp(`(?:([a-zA-Z0-9_\\\\]*::))(${word})`, 'gi');

    while ((match = pattern1.exec(line)) !== null) {
        const matchPrefix = match[1];
        const matchWord = match[2];
        const start = match.index + (matchPrefix ? matchPrefix.length : 0);
        const end = start + matchWord.length;
        const matchRange = new vscode.Range(new vscode.Position(position.line, start), new vscode.Position(position.line, end));
        if (matchRange.contains(position)) return true;
    }

    while ((match = pattern2.exec(line)) !== null) {
        const matchPrefix = match[1];
        const matchWord = match[2];
        const start = match.index + (matchPrefix ? matchPrefix.length : 0);
        const end = start + matchWord.length;
        const matchRange = new vscode.Range(new vscode.Position(position.line, start), new vscode.Position(position.line, end));
        if (matchRange.contains(position)) return true;
    }

    return false;
}

export function tryGetFuncIncludeCall(funcName: string, text: string, document: vscode.TextDocument, position: vscode.Position): string | undefined {
    let match;

    const safeFuncName = escapeRegExp(funcName);
    const pattern = new RegExp(`([a-zA-Z0-9_]+(?:\\\\[a-zA-Z0-9_]+)*)::${safeFuncName}(?:\\(.*\\))?`, 'gi');

    
    while ((match = pattern.exec(text)) !== null) {
        const matchStart = match.index;
        const matchStartPosition = document.positionAt(matchStart);
        const matchEndPosition = document.positionAt(matchStart + match[0].length);

        if (matchStartPosition.line === position.line && matchStartPosition.character <= position.character && matchEndPosition.character >= position.character) {
            if (match[1]) return validateInclude(match[1]);
        }
    }
    return undefined;
}

function escapeRegExp(text: string): string {
    return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export function tryGetFuncDefLocation(word: string, text: string, document: vscode.TextDocument): vscode.Location | null {
    const functionPattern = new RegExp(`^${word}\\s*\\([^\\)]*\\)\\s*(//.*)?\\s*\\{`, 'gmi');
    let match: RegExpExecArray | null;
    while ((match = functionPattern.exec(text)) !== null) {
        const startPosition = document.positionAt(match.index);
        return new vscode.Location(document.uri, startPosition);
    }
    return null;
}

export function tryGetFuncScopeRanges(text: string, position: vscode.Position): BasicRange | null {
    let match;
    while ((match = FUNCTION_PATTERN.exec(text)) !== null) {
        let openBraces = 1;
        let index = match.index + match[0].length;

        const startLine = text.substring(0, match.index).split('\n').length - 1;
        const startCol = match.index - text.lastIndexOf('\n', match.index) - 1;

        while (openBraces > 0 && index < text.length) {
            if (text[index] === '{') openBraces++;
            else if (text[index] === '}') openBraces--;
            index++;
        }

        const endLine = text.substring(0, index).split('\n').length - 1;
        const endCol = index - text.lastIndexOf('\n', index) - 1;

        if ((position.line > startLine || (position.line === startLine && position.character >= startCol)) && (position.line < endLine || (position.line === endLine && position.character <= endCol))) {
            return { start: startLine, end: endLine };
        }
    }
    return null;
}
