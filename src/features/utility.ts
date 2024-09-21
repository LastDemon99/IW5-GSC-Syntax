import * as vscode from 'vscode';
import { join, relative, extname } from 'path';
import { promisify } from 'util';
import { readFile } from 'fs';

export const readFileAsync = promisify(readFile);

export const PLUTONIUM_FOLDER = join(process.env.LOCALAPPDATA || '', 'Plutonium', 'storage', 'iw5');
export const SCRIPTS_FOLDER = join(PLUTONIUM_FOLDER, 'scripts');
export const GSC_EXTENSION = '.gsc';
export const STATEMENTS = ["if", "foreach", "while", "switch", "wait", "waittill", "waittillframeend", "endon", "notify"];

export interface Range {
    start: number,
    end: number
}

export function isGSCFile(filePath: string) {
    return extname(filePath) === GSC_EXTENSION;
}

export function includePathToUri(include: string) {
    return vscode.Uri.file(includePathToFilePath(include));
}

export function includePathToFilePath(include: string) {
    return join(PLUTONIUM_FOLDER, include) + GSC_EXTENSION;
}

export function filePathToIncludePath(filePath: string): string {
    return 'scripts\\' + relative(SCRIPTS_FOLDER, filePath).replace(GSC_EXTENSION, "");
}

export function getIncludesFromDocument(document: vscode.TextDocument): string[] { 
    const elements: string[] = [];
    const text = document.getText(); 
	const commentRanges = getCommentLinesRange(text);
	const lines = text.split('\n');  
	
	for (let i = 0; i < lines.length; i++) { 
		const lineStart = text.indexOf(lines[i]);  
		const lineEnd = lineStart + lines[i].length;
		if (commentRanges.some(range => lineEnd > range.start && lineStart < range.end)) 
			continue;

		const match = lines[i].match(/^\s*#include\s+([^;]+)/);  
		if (!match) continue;

        const include = match[1].trim();
        if (include.startsWith("scripts\\")) elements.push(include);
	} 
    return [...new Set(elements)];
}

export function getCommentLinesRange(text: string): Range[] {
    const commentBlocks = /\/\*[\s\S]*?\*\/|\/\/.*/g;
    let match;
    const ranges: Range[] = [];
    while ((match = commentBlocks.exec(text)) !== null) {
        ranges.push({
            start: match.index,
            end: match.index + match[0].length
        });
    }
    return ranges;
}

export function isCommentAtPosition(document: vscode.TextDocument, position: vscode.Position): boolean {
    const text = document.getText();
    const commentRanges = getCommentLinesRange(text);
    const offset = document.offsetAt(position);

    for (const range of commentRanges) {
        if (offset >= range.start && offset < range.end) {
            return true;
        }
    }

    return false;
}

export function isFunctionAtPosition(line: string, position: vscode.Position, word: string): boolean | undefined {
    const functionPattern = new RegExp(`(?:([a-zA-Z0-9_\\\\]+::))?(${word})\\(`, 'g');
    let match;
    while ((match = functionPattern.exec(line)) !== null) {
        const matchPrefix = match[1];
        const matchWord = match[2];
        const start = match.index + (matchPrefix ? matchPrefix.length : 0);
        const end = start + matchWord.length;
        const matchRange = new vscode.Range(new vscode.Position(position.line, start), new vscode.Position(position.line, end));        
        if (matchRange.contains(position)) return true;
    }
    return false;
}

export function tryGetIncludeCallPath(funcName: string, text: string, document: vscode.TextDocument, position: vscode.Position): string | undefined {
    let match;

    const pattern = new RegExp(`([a-zA-Z0-9_]+(?:\\\\[a-zA-Z0-9_]+)*::)?${funcName}(?=\\()`, 'g');
    
    while ((match = pattern.exec(text)) !== null) {
        const matchStart = match.index;
        const matchStartPosition = document.positionAt(matchStart);
        const matchEndPosition = document.positionAt(matchStart + match[0].length);

        if (matchStartPosition.line === position.line && matchStartPosition.character <= position.character && matchEndPosition.character >= position.character) {
            if (!!match[1]) return match[0];
        }
    }
    return undefined;
}

export function tryGetFunctionDeclarationLocation(word: string, text: string, document: vscode.TextDocument): vscode.Location | null {
    const functionPattern = new RegExp(`^${word}\\s*\\(.*\\)\\s*\\{`, 'gm');
    let match: RegExpExecArray | null;
    while ((match = functionPattern.exec(text)) !== null) {
        const startPosition = document.positionAt(match.index);
        return new vscode.Location(document.uri, startPosition);
    }
    return null;
}

export function tryGetFunctionScope(text: string, position: vscode.Position): vscode.Location | null {
    const functionPattern = new RegExp(`^(\\w+)\\s*\\(.*\\)\\s*\\{`, 'gm');

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
            return new vscode.Location(vscode.Uri.file(''), new vscode.Range(start, end)); // Aquí puedes especificar la URI del archivo
        }
    }
    return null;
}

export function tryGetVariableFromScope(text: string, functionScope: vscode.Location, variableName: string, uri: vscode.Uri): vscode.Location | undefined {
    const blockStart = functionScope.range.start.line;
    const blockEnd = functionScope.range.end.line;
    const blockText = text.split('\n').slice(blockStart, blockEnd + 1).join('\n');

    // search argument
    const argPattern = /^\s*\w+\s*\(([^)]*)\)/m;
    const match = argPattern.exec(blockText);
    if (match) {
        const args = match[1].split(',').map(arg => arg.trim()).filter(arg => arg.length > 0);
        if (args.includes(variableName)) {
            const lineIndex = blockText.substring(0, match.index).split('\n').length - 1;
            const colIndex = match.index - blockText.lastIndexOf('\n', match.index) - 1 + match[0].indexOf(variableName);

            return new vscode.Location(
                uri,
                new vscode.Range(
                    new vscode.Position(blockStart + lineIndex, colIndex),
                    new vscode.Position(blockStart + lineIndex, colIndex + variableName.length)
                )
            );
        }
    }

    // search variable
    const variablePattern = new RegExp(`\\b${variableName}\\b`, 'g');
    let matchVar;
    while ((matchVar = variablePattern.exec(blockText)) !== null) {
        const variableIndex = matchVar.index;

        const lineIndex = blockText.substring(0, variableIndex).split('\n').length - 1;
        const colIndex = variableIndex - blockText.lastIndexOf('\n', variableIndex) - 1;

        return new vscode.Location(
            uri,
            new vscode.Range(
                new vscode.Position(blockStart + lineIndex, colIndex),
                new vscode.Position(blockStart + lineIndex, colIndex + variableName.length)
            )
        );
    }
    return undefined;
}
