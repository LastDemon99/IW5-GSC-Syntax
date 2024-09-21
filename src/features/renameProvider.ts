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

        if (!word || word === "" || utility.isCommentAtPosition(document, position))
            return workspaceEdit;

        const text = document.getText();
        const line = document.lineAt(position.line).text;
        
        if (!utility.isFunctionAtPosition(line, position, word)) {
            const functionScope = utility.tryGetFunctionScope(text, position);
            if (!functionScope) return workspaceEdit;
            tryReplaceVariablesFromScope(text, functionScope, word, newName, document.uri);
            return workspaceEdit;
        }

        const callFromInclude = utility.tryGetIncludeCallPath(word, text, document, position);

        let mainInclude;

        // First rename the function in the file where it is declared
        if (callFromInclude) {
            mainInclude = callFromInclude.split('::')[0];
            const includeDocument = await vscode.workspace.openTextDocument(utility.includePathToUri(mainInclude));
            await renameFunction(includeDocument, mainInclude, word, newName, workspaceEdit);
        }
        else {
            if (utility.STATEMENTS.some(keyword => keyword === word)) return workspaceEdit;

            if (utility.tryGetFunctionDeclarationLocation(word, text, document)) {
                mainInclude = utility.filePathToIncludePath(document.uri.fsPath);
                await renameFunction(document, mainInclude, word, newName, workspaceEdit);
            }
            else {
                const includes = utility.getIncludesFromDocument(document);
                for (const include of includes) {
                    const includeDocument = await vscode.workspace.openTextDocument(utility.includePathToUri(include));
                    if (utility.tryGetFunctionDeclarationLocation(word, includeDocument.getText(), includeDocument)) {
                        mainInclude = include;
                        await renameFunction(includeDocument, mainInclude, word, newName, workspaceEdit);
                    }
                }
            }
        }

        if (!mainInclude) return workspaceEdit;        
        const filesPath: string[] = await getFilesPathUsingInclude(mainInclude);
        for (const path of filesPath) {
            const document = await vscode.workspace.openTextDocument(vscode.Uri.file(path));
            await renameFunction(document, mainInclude, word, newName, workspaceEdit);
        }

        return workspaceEdit;
    }
}

async function renameFunction(document: vscode.TextDocument, include: string, funcName: string, newName: string, workspaceEdit: vscode.WorkspaceEdit) {
    const text = document.getText();
    const commentRanges = utility.getCommentLinesRange(text);
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

async function getFilesPathUsingInclude(include: string) {
    const filesPath: string[] = [];
    for (const includeTarget of getAllIncludesPath()) {
        if (includeTarget !== include) {
            const filePath = utility.includePathToFilePath(includeTarget);
            const text = await utility.readFileAsync(filePath, 'utf8');
            const commentRanges = utility.getCommentLinesRange(text);
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

export function tryReplaceVariablesFromScope(text: string, functionScope: vscode.Location, variableName: string, newName: string, uri: vscode.Uri): void {
    const blockStart = functionScope.range.start.line;
    const blockEnd = functionScope.range.end.line;
    const blockText = text.split('\n').slice(blockStart, blockEnd + 1).join('\n');

    const workspaceEdit = new vscode.WorkspaceEdit();

    // search argument
    const argPattern = /^\s*\w+\s*\(([^)]*)\)/m;
    const match = argPattern.exec(blockText);
    if (match) {
        const args = match[1].split(',').map(arg => arg.trim()).filter(arg => arg.length > 0);
        if (args.includes(variableName)) {
            const lineIndex = blockText.substring(0, match.index).split('\n').length - 1;
            const colIndex = match.index - blockText.lastIndexOf('\n', match.index) - 1 + match[0].indexOf(variableName);

            const range = new vscode.Range(
                new vscode.Position(blockStart + lineIndex, colIndex),
                new vscode.Position(blockStart + lineIndex, colIndex + variableName.length)
            );

            workspaceEdit.replace(uri, range, newName);
        }
    }

    // search variable
    const variablePattern = new RegExp(`\\b${variableName}\\b`, 'g');
    let matchVar;
    while ((matchVar = variablePattern.exec(blockText)) !== null) {
        const variableIndex = matchVar.index;

        const lineIndex = blockText.substring(0, variableIndex).split('\n').length - 1;
        const colIndex = variableIndex - blockText.lastIndexOf('\n', variableIndex) - 1;

        const range = new vscode.Range(
            new vscode.Position(blockStart + lineIndex, colIndex),
            new vscode.Position(blockStart + lineIndex, colIndex + variableName.length)
        );

        workspaceEdit.replace(uri, range, newName);
    }

    vscode.workspace.applyEdit(workspaceEdit);
}
