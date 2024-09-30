import * as vscode from 'vscode';
import * as utility from './utility';
import * as path from 'path';

let allIncludes: string[] = [];

export function addInclude(filePath: string) {
    allIncludes.push(utility.pathToInclude(filePath));
}

export function removeInclude(filePath: string) {
    filePath = utility.pathToInclude(filePath);
    allIncludes = allIncludes.filter(path => path !== filePath);
}

export class RenameProvider implements vscode.RenameProvider {
    async provideRenameEdits(document: vscode.TextDocument, position: vscode.Position, newName: string, token: vscode.CancellationToken): Promise<vscode.WorkspaceEdit> {
        const wordRange = document.getWordRangeAtPosition(position);
        const word = document.getText(wordRange);
        const workspaceEdit = new vscode.WorkspaceEdit();

        if (!word || word === "") return workspaceEdit;

        const text = utility.getDocumentText(document);
        if (utility.isCommentAtPosition(text, document, position)) return workspaceEdit;

        const line = utility.getDocumentLine(document, position);        
        if (!utility.isFunctionAtPosition(line, position, word)) {
            const functionScope = utility.tryGetFuncScopeLocation(text, position);
            if (functionScope) renameVariables(text, functionScope, word, newName, document.uri);
            return workspaceEdit;
        }
        if (utility.isWordStatement(word)) return workspaceEdit;

        const currentInclude = utility.pathToInclude(document.uri.fsPath);

        let includeTarget: string | undefined = utility.tryGetFuncIncludeCall(word, text, document, position);
        if (!includeTarget) {
            const funcDeclaration = utility.tryGetFuncDefLocation(word, text, document);
            if (funcDeclaration) includeTarget = currentInclude;
            else {
                const includes = utility.getIncludes(text);
                for (const include of includes) {
                    const includeDocument = await vscode.workspace.openTextDocument(utility.includeToUri(include));
                    const declaration = utility.tryGetFuncDefLocation(word, includeDocument.getText(), includeDocument);
                    if (declaration) includeTarget = include;
                }
            }
        }

        if (!includeTarget) return workspaceEdit;

        renameFuncsInDocument(text, document, includeTarget, word, newName, workspaceEdit);

        const includeDocument = await vscode.workspace.openTextDocument(utility.includeToUri(includeTarget));
        renameFuncsInDocument(includeDocument.getText(), includeDocument, includeTarget, word, newName, workspaceEdit);

        for (const include of allIncludes) {
            if ( include === currentInclude || include === includeTarget) continue;
            const includeDocument = await vscode.workspace.openTextDocument(utility.includeToUri(include));
            renameFuncsInDocument(includeDocument.getText(), includeDocument, includeTarget, word, newName, workspaceEdit);
        }
        
        return workspaceEdit;
    }
}

function renameFuncsInDocument(text: string, document: vscode.TextDocument, include: string, funcName: string, newName: string, workspaceEdit: vscode.WorkspaceEdit) {
    const commentRanges = utility.getCommentLinesRange(text);
    const funcPattern = new RegExp(`(?:(?:([a-zA-Z0-9_\\\\]*::)|::)?)(${funcName})(\\()?(\\))?`, 'gi');
    const hasInclude = utility.getIncludes(text).includes(include) || utility.pathToInclude(document.uri.fsPath) === include;
    
    for (let i = 0; i < document.lineCount; i++) {
        const line = document.lineAt(i).text;
        const lineStart = document.offsetAt(new vscode.Position(i, 0));
        const lineEnd = lineStart + line.length;

        if (commentRanges.some((range) => lineEnd > range.start && lineStart < range.end)) {
            continue;
        }

        let match;
        while ((match = funcPattern.exec(line)) !== null) {
            let matchPrefix: string | null = match[1];

            if (!hasInclude && (!matchPrefix || matchPrefix === "::")) continue;
            if ((matchPrefix && matchPrefix !== "::") && matchPrefix !== include + "::") continue;

            const matchWord = match[2];
            const start = match.index + (matchPrefix ? matchPrefix.length : 0);
            const end = start + matchWord.length;
            const range = new vscode.Range(new vscode.Position(i, start), new vscode.Position(i, end));
            workspaceEdit.replace(document.uri, range, newName);
        }
    }
}

function renameVariables(text: string, functionScope: vscode.Location, variableName: string, newName: string, uri: vscode.Uri): void {
    const blockStart = functionScope.range.start.line;
    const blockEnd = functionScope.range.end.line;
    const blockText = text.split('\n').slice(blockStart, blockEnd + 1).join('\n');
    const workspaceEdit = new vscode.WorkspaceEdit();

    let match;
    const argPattern = /^\s*\w+\s*\(([^)]*)\)/mi;
    match = argPattern.exec(blockText);
    if (match) {
        const args = match[1].split(',').map(arg => arg.trim()).filter(arg => arg.length > 0);
        if (args.includes(variableName)) {
            const lineIndex = blockText.substring(0, match.index).split('\n').length - 1;
            const colIndex = blockText.lastIndexOf(variableName, match.index);
            if (colIndex !== -1) {
                const range = new vscode.Range(
                    new vscode.Position(blockStart + lineIndex, colIndex),
                    new vscode.Position(blockStart + lineIndex, colIndex + variableName.length)
                );
                workspaceEdit.replace(uri, range, newName);
            }
        }
    }

    const variablePattern = new RegExp(`\\b${variableName}\\b`, 'gi');
    while ((match = variablePattern.exec(blockText)) !== null) {
        const variableIndex = match.index;
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

export async function renameInclude(oldPath: string, newPath: string) {
    const normalizedOldPath = path.normalize(oldPath);
    const normalizedNewPath = path.normalize(newPath);
    const oldInclude = utility.pathToInclude(normalizedOldPath).toLowerCase();
    
    if (!oldInclude.startsWith("scripts\\")) return;

    const newInclude = utility.pathToInclude(normalizedNewPath);

    if (utility.fileExists(normalizedNewPath) && normalizedNewPath.endsWith(utility.GSC_EXTENSION)) {
        await updateIncludePaths(oldInclude, newInclude);
        return;
    }

    if (utility.directoryExists(normalizedNewPath)) {
        await updateIncludesForDirectory(oldInclude, newInclude);
        return;
    }
}

async function updateIncludePaths(oldInclude: string, newInclude: string) {
    for (const include of allIncludes) {
        if (!utility.fileExists(utility.includeToPath(include))) continue;
        try {
            const uri = utility.includeToUri(include);
            const document = await vscode.workspace.openTextDocument(uri);
            const text = document.getText();
            const edit = new vscode.WorkspaceEdit();

            let match;
            const pathPattern = /([a-zA-Z0-9_]+(?:\\[a-zA-Z0-9_]+)+)(?::|;|$)/g;

            while ((match = pathPattern.exec(text)) !== null) {
                const pathMatch = match[0].replace(';', '').replace(':', '').toLowerCase();
                if (pathMatch !== oldInclude) continue;

                const matchStart = match.index;
                const matchEnd = matchStart + pathMatch.length;
                const startPos = document.positionAt(matchStart);
                const endPos = document.positionAt(matchEnd);
                edit.replace(uri, new vscode.Range(startPos, endPos), newInclude);
            }

            if (edit.size > 0) {
                await vscode.workspace.applyEdit(edit);
                await document.save();
            }
        } catch (error) {
            console.error(`Failed to process include: ${include}, Error: ${error}`);
        }
    }
}

async function updateIncludesForDirectory(oldInclude: string, newInclude: string) {
    for (const include of allIncludes) {
        if (!utility.fileExists(utility.includeToPath(include))) continue;
        try {
            const uri = utility.includeToUri(include)
            const document = await vscode.workspace.openTextDocument(uri);
            const text = document.getText();
            const edit = new vscode.WorkspaceEdit();

            let match;
            const pathPattern = /([a-zA-Z0-9_]+(?:\\[a-zA-Z0-9_]+)+)(?::|;|$)/g;

            while ((match = pathPattern.exec(text)) !== null) {
                const pathMatch = match[0].replace(';', '').replace(':', '').toLowerCase();
                if (!pathMatch.startsWith(oldInclude)) continue;

                const newPathMatch = pathMatch.replace(oldInclude, newInclude);
                const matchStart = match.index;
                const matchEnd = matchStart + pathMatch.length;
                const startPos = document.positionAt(matchStart);
                const endPos = document.positionAt(matchEnd);
                edit.replace(uri, new vscode.Range(startPos, endPos), newPathMatch);
            }

            if (edit.size > 0) {
                await vscode.workspace.applyEdit(edit);
                await document.save();
            }
        } catch (error) {
            console.error(`Failed to process include: ${include}, Error: ${error}`);
        }
    }
}
