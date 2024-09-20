import * as vscode from 'vscode';
import { join, relative, extname } from 'path';
import { promisify } from 'util';
import { readFile } from 'fs';

export const readFileAsync = promisify(readFile);

export const PLUTONIUM_FOLDER = join(process.env.LOCALAPPDATA || '', 'Plutonium', 'storage', 'iw5');
export const SCRIPTS_FOLDER = join(PLUTONIUM_FOLDER, 'scripts');
export const GSC_EXTENSION = '.gsc';
export const STATEMENTS = ["if", "foreach", "while", "switch", "wait", "waittill", "waittillframeend", "endon", "notify"];

interface Range {
    start: number,
    end: number
}

export function isGSCFile(filePath: string) {
    return extname(filePath) === GSC_EXTENSION;
}

export function includePathToUri(include: string) {
    return  vscode.Uri.file(includePathToFilePath(include));
}

export function includePathToFilePath(include: string) {
    return join(PLUTONIUM_FOLDER, include) + GSC_EXTENSION;
}

export function filePathToIncludePath(filePath: string): string {
    return 'scripts\\' + relative(SCRIPTS_FOLDER, filePath).replace(GSC_EXTENSION, "");
}

export function commentBlocksRange(text: string): Range[] {
    const commentBlocks = /\/\*[\s\S]*?\*\//g;
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

export function getIncludes(document: vscode.TextDocument): string[] { 
    const elements: string[] = [];
    const text = document.getText(); 
	const commentRanges = commentBlocksRange(text);
	const lines = text.split('\n');  
	
	for (let i = 0; i < lines.length; i++) { 
		const lineStart = text.indexOf(lines[i]);  
		const lineEnd = lineStart + lines[i].length;
		if (commentRanges.some(range => lineEnd > range.start && lineStart < range.end)) 
			continue;

		const match = lines[i].match(/^\s*#include\s+([^;]+)/);  
		if (!match) continue;

		elements.push(match[1].trim());  
	} 
    return [...new Set(elements)];
}

export function getIncludeCallFunction(funcName: string, text: string, document: vscode.TextDocument, position: vscode.Position): string | undefined {
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