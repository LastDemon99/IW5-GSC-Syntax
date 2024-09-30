import * as vscode from 'vscode';
import { join, relative, extname } from 'path';
import { accessSync, constants } from 'fs';

export const PLUTONIUM_FOLDER = join(process.env.LOCALAPPDATA || '', 'Plutonium', 'storage', 'iw5');
export const SCRIPTS_FOLDER = join(PLUTONIUM_FOLDER, 'scripts');
export const GSC_EXTENSION = '.gsc';
const STATEMENTS = ["if", "for", "foreach", "while", "switch"];
const DOWNLOAD_ALLOWED_EXTENSIONS = [GSC_EXTENSION, '.cfg', '.csv'];

export interface Range {
    start: number,
    end: number
}

export function isDownloadAllowedExtension(fileName: string): boolean {
    const ext = fileName.substring(fileName.lastIndexOf('.')).toLowerCase();
    return DOWNLOAD_ALLOWED_EXTENSIONS.includes(ext);
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

export function pathToInclude(filePath: string): string {
    return 'scripts\\' + relative(SCRIPTS_FOLDER, filePath).replace(GSC_EXTENSION, "");
}

export function validateInclude(include: string): string | undefined {
    include = include.trim().toLowerCase();
    return include.startsWith("scripts\\") ? include : undefined;
}

export function getIncludes(text: string): string[] {
	const commentRanges = getCommentLinesRange(text);
    const pattern = new RegExp(/^\s*#include\s+([^\s;]+)/igm);
    const includes: string[] = [];

    let match;
    while ((match = pattern.exec(text)) !== null) {
        if (isCommentAtMatch(match, commentRanges)) continue;
        const include = validateInclude(match[1]);    
        
        if (!include || !fileExists(includeToPath(include))) {
            console.log("Error: Include no existente", include);
            continue;
        }

        if (includes.includes(include)) {
            console.log("Error: Include ya definido", include);
            continue;
        }

        includes.push(include);
    }
    return includes;
}

export function getCommentLinesRange(text: string): Range[] {
    const commentBlocks = /\/\*[\s\S]*?\*\/|\/\/[^\n]*/g;
    const ranges: Range[] = [];
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
    const commentRanges: Range[] = [];
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

export function isCommentAtMatch(match: any, commentRanges: Range[]): boolean {
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

    const pattern = new RegExp(`([a-zA-Z0-9_]+(?:\\\\[a-zA-Z0-9_]+)*)::${funcName}(?:\\(.*\\))?`, 'gi');
    
    while ((match = pattern.exec(text)) !== null) {
        const matchStart = match.index;
        const matchStartPosition = document.positionAt(matchStart);
        const matchEndPosition = document.positionAt(matchStart + match[0].length);

        if (matchStartPosition.line === position.line && matchStartPosition.character <= position.character && matchEndPosition.character >= position.character) {
            if (match[1]) return match[1];
        }
    }
    return undefined;
}

export function tryGetFuncDefLocation(word: string, text: string, document: vscode.TextDocument): vscode.Location | null {
    const functionPattern = new RegExp(`^${word}\\s*\\(.*\\)\\s*\\{`, 'gmi');
    let match: RegExpExecArray | null;
    while ((match = functionPattern.exec(text)) !== null) {
        const startPosition = document.positionAt(match.index);
        return new vscode.Location(document.uri, startPosition);
    }
    return null;
}

export function tryGetFuncScopeLocation(text: string, position: vscode.Position): vscode.Location | null {
    const functionPattern = new RegExp(`^(\\w+)\\s*\\(.*\\)\\s*\\{`, 'gmi');

    let match;
    while ((match = functionPattern.exec(text)) !== null) {
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
            const start = new vscode.Position(startLine, startCol);
            const end = new vscode.Position(endLine, endCol);
            return new vscode.Location(vscode.Uri.file(''), new vscode.Range(start, end));
        }
    }
    return null;
}
