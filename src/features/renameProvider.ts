import * as vscode from 'vscode';
import * as utility from './utility';
import { getAllIncludesPath } from './completionItemProvider';

export class RenameProvider implements vscode.RenameProvider {
    constructor () {
    }

    async provideRenameEdits(document: vscode.TextDocument, position: vscode.Position, newName: string, token: vscode.CancellationToken): Promise<vscode.WorkspaceEdit> {
        const wordRange = document.getWordRangeAtPosition(position);
        const word = document.getText(wordRange);
        const workspaceEdit = new vscode.WorkspaceEdit();

        if (!word || word === "") {
            return workspaceEdit;
        }

        const text = document.getText();
        const line = document.lineAt(position.line).text;
        const lineStart = text.indexOf(line);
        const lineEnd = lineStart + document.lineCount;

        const commentIndex = line.indexOf('//');
        let isComment = commentIndex !== -1 && commentIndex < lineStart;
        if (!isComment) isComment = utility.commentBlocksRange(text).some(range => lineEnd > range.start && lineStart < range.end);
        
        if (isComment) return workspaceEdit;

        const callFromInclude = utility.getIncludeCallFunction(word, text, document, position);

        let mainInclude;

        if (!callFromInclude) {
            if (utility.STATEMENTS.some(keyword => keyword === word)) return workspaceEdit;

            if (hasFunctionDeclaration(text, word)) {
                mainInclude = utility.filePathToIncludePath(document.uri.fsPath);
                await renameFunction(document, mainInclude, word, newName, workspaceEdit);
            }
            else {
                const includes = utility.getIncludes(document);
                for (const include of includes) {
                    const includeDocument = await vscode.workspace.openTextDocument(utility.includePathToUri(include));
                    if (hasFunctionDeclaration(includeDocument.getText(), word)) {
                        mainInclude = include;
                        await renameFunction(includeDocument, mainInclude, word, newName, workspaceEdit);
                    }
                }
            }
        }
        else {
            mainInclude = callFromInclude.split('::')[0];
            const includeDocument = await vscode.workspace.openTextDocument(utility.includePathToUri(mainInclude));
            await renameFunction(includeDocument, mainInclude, word, newName, workspaceEdit);
        }

        if (!mainInclude) return workspaceEdit;
        
        const filesPath: string[] = await getFilesUsingInclude(mainInclude);
        for (const path of filesPath) {
            const document = await vscode.workspace.openTextDocument(vscode.Uri.file(path));
            await renameFunction(document, mainInclude, word, newName, workspaceEdit);
        }

        return workspaceEdit;
    }
}

async function renameFunction(document: vscode.TextDocument, include: string, funcName: string, newName: string, workspaceEdit: vscode.WorkspaceEdit) {
    const text = document.getText();
    const commentRanges = utility.commentBlocksRange(text);
    const pathFuncPattern = new RegExp(`(?:${include}::)?(${funcName})\\(`, 'g');

    for (let i = 0; i < document.lineCount; i++) {
        const line = document.lineAt(i).text;
        const lineStart = document.offsetAt(new vscode.Position(i, 0));
        const lineEnd = lineStart + line.length;
        const commentIndex = line.indexOf('//');

        if (commentIndex !== -1 && commentIndex < line.length) continue;
        if (commentRanges.some((range) => lineEnd > range.start && lineStart < range.end)) continue;

        let match;
        while ((match = pathFuncPattern.exec(line)) !== null) {
            const range = new vscode.Range(
                new vscode.Position(i, match.index),
                new vscode.Position(i, match.index + match[0].length - 1)
            );

            const hasPath = match[0].startsWith(`${include}::`);
            const newFuncName = hasPath ? `${match[1]}${newName}` : newName;

            workspaceEdit.replace(document.uri, range, newFuncName);
        }
    }
}

async function getFilesUsingInclude(include: string) {
    const filesPath: string[] = [];
    for (const includeTarget of getAllIncludesPath()) {
        if (includeTarget !== include) {
            const filePath = utility.includePathToFilePath(includeTarget);
            const text = await utility.readFileAsync(filePath, 'utf8');
            const commentRanges = utility.commentBlocksRange(text);
            const lines = text.split('\n');

            for (let i = 0; i < lines.length; i++) {
                const line = lines[i];
                const lineStart = text.indexOf(line);
                const lineEnd = lineStart + line.length;
                const commentIndex = line.indexOf('//');

                if (commentIndex !== -1 && commentIndex < line.length) continue;
                if (commentRanges.some((range) => lineEnd > range.start && lineStart < range.end)) continue;

                const match = line.match(/^\s*#include\s+([^;]+)/);
                if (match && match[1] == include) {
                    filesPath.push(filePath);
                    break;
                }
            }
        }
    }
    return filesPath;
}

function hasFunctionDeclaration(text: string, funcName: string): boolean {
    const escapedFuncName = funcName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const functionDeclarationPattern = new RegExp(`^\\s*${escapedFuncName}\\s*\\([^)]*\\)\\s*\\{`, 'gm');
    let match;

    while ((match = functionDeclarationPattern.exec(text)) !== null) {
        const start = match.index;
        const openBraces = [];
        let end = start + match[0].length;

        for (let i = end; i < text.length; i++) {
            if (text[i] === '{') openBraces.push('{');
            if (text[i] === '}') openBraces.pop();
            if (openBraces.length === 0) return true; 
        }
    }
    return false;
}
