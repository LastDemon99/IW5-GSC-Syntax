import * as vscode from 'vscode';
import * as gscParser from './gscParser';
import { getAllIncludes } from './scriptsWatcher'
import { isUndefined } from 'lodash';

const PATH_PATTERN = /([a-zA-Z0-9_]+(?:\\[a-zA-Z0-9_]+)+)(?::|;|$)/g;

export class RenameProvider implements vscode.RenameProvider {
    async provideRenameEdits(document: vscode.TextDocument, position: vscode.Position, newName: string, token: vscode.CancellationToken): Promise<vscode.WorkspaceEdit> {
        const currentGscDocument = gscParser.getCurrentGscDocument();
        if (!currentGscDocument || currentGscDocument.isCommentsAtPosition(position)) {
            return new vscode.WorkspaceEdit();
        }

        const wordRange = document.getWordRangeAtPosition(position);
        const word = document.getText(wordRange)?.toLowerCase();

        if (!word || !wordRange || gscParser.isInclude(document, wordRange, word)) {
            return new vscode.WorkspaceEdit();
        }

        const edit = new vscode.WorkspaceEdit();
        const text = document.getText();
        let match;

        if (!isUndefined(currentGscDocument.getVarToken(word, position))) {
            const scopeRange = currentGscDocument.getScopeRange(position);
            if (!scopeRange) return edit;
            while ((match = gscParser.WORD_PATTERN.exec(text)) !== null) {
                if (match[0].toLowerCase() !== word) continue;

                const targetPosition = document.positionAt(match.index);
                if (currentGscDocument.isCommentsAtPosition(targetPosition) || !scopeRange.contains(targetPosition)) continue;

                const targetRange = new vscode.Range(targetPosition, targetPosition.translate(0, word.length));
                if (scopeRange.start.isEqual(targetRange.start)) continue;

                edit.replace(document.uri, targetRange, newName);
            }
            return edit;
        }

        const gscToken = currentGscDocument.gscTokens.get(word);
        if (!gscToken) return new vscode.WorkspaceEdit();

        if (gscToken.type === gscParser.tokenType.macro) {
            while ((match = gscParser.WORD_PATTERN.exec(text)) !== null) {
                if (match[0].toLowerCase() !== word) continue;

                const position = document.positionAt(match.index);
                if (currentGscDocument.isCommentsAtPosition(position)) continue;
                
                const wordRange = new vscode.Range(position, position.translate(0, word.length));
                edit.replace(document.uri, wordRange, newName);
            }
            return edit;
        }

        const tryGetFunc = gscParser.tryGetFuncInclude(document, wordRange, word);
        if (tryGetFunc) {
            const includeCaptured = tryGetFunc.include === '' ? currentGscDocument.include : tryGetFunc.include;       
            const usingIncludes: string[] = [includeCaptured];
            const usingIncludesCall: string[] = [];

            for (const gscDocument of gscParser.gscDocuments.values()) {
                if (!gscDocument) continue;
                if (!usingIncludes.includes(gscDocument.include) && gscDocument.includesList.includes(includeCaptured)) usingIncludes.push(gscDocument.include);
                if (!usingIncludesCall.includes(gscDocument.include) && gscDocument.includesCallList.includes(includeCaptured)) usingIncludesCall.push(gscDocument.include);
            }

            // Using includes
            for (const include of usingIncludes) {
                const documentTarget = await vscode.workspace.openTextDocument(gscParser.includeToPath(include));
                const textTarget = documentTarget.getText();

                while ((match = gscParser.FUNC_PATTERN.exec(textTarget)) !== null) {
                    if (match[1].toLowerCase() !== word) continue;

                    const targetPosition = documentTarget.positionAt(match.index);
                    if (gscParser.isCommentsAtPosition(textTarget, documentTarget, targetPosition)) continue;

                    const targetRange = new vscode.Range(targetPosition, targetPosition.translate(0, word.length));
                    edit.replace(documentTarget.uri, targetRange, newName);
                }
            }

            // Using includes call
            for (const include of usingIncludesCall) {
                const documentTarget = await vscode.workspace.openTextDocument(gscParser.includeToPath(include));
                const textTarget = documentTarget.getText();

                while ((match = gscParser.FUNC_INCLUDE_CALL_PATTERN.exec(textTarget)) !== null) {
                    if (match[2]?.toLowerCase() !== word) continue;

                    const startOffset = match.index + match[0].indexOf(match[2]);
                    const endOffset = startOffset + match[2].length;

                    const targetPositionStart = documentTarget.positionAt(startOffset);
                    const targetPositionEnd = documentTarget.positionAt(endOffset);
                    
                    if (gscParser.isCommentsAtPosition(textTarget, documentTarget, targetPositionStart)) continue;

                    const targetRange = new vscode.Range(targetPositionStart, targetPositionEnd);
                    edit.replace(documentTarget.uri, targetRange, newName);
                }
            }
        }
        return edit;
    }
}

export async function renameInclude(oldPath: string, newPath: string) {
    console.log("IW5-GSC-Syntax: Rename process initiated");
    
    const oldInclude = gscParser.pathToInclude(oldPath, false);
    const newInclude = gscParser.pathToInclude(newPath, false);

    if (newPath.endsWith('.gsc')) {
        await updateIncludePaths(oldInclude, newInclude);
        return;
    }

    await updateIncludesForDirectory(oldInclude, newInclude);

    console.log("IW5-GSC-Syntax: Rename process completed");
}

async function updateIncludePaths(oldInclude: string, newInclude: string) {
    for (const include of getAllIncludes()) {
        try {
            const uri = vscode.Uri.file(gscParser.includeToPath(include));
            const document = await vscode.workspace.openTextDocument(uri);
            const text = document.getText();
            const edit = new vscode.WorkspaceEdit();

            let match;
            while ((match = PATH_PATTERN.exec(text)) !== null) {
                const pathMatch = match[0].replace(';', '').replace(':', '').toLowerCase();
                if (pathMatch !== oldInclude.toLowerCase()) continue;
                const matchStart = match.index;
                const startPos = document.positionAt(matchStart);
                const endPos = document.positionAt(matchStart + pathMatch.length);
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
    for (const include of getAllIncludes()) {
        try {
            const uri = vscode.Uri.file(gscParser.includeToPath(include));
            const document = await vscode.workspace.openTextDocument(uri);
            const text = document.getText();
            const edit = new vscode.WorkspaceEdit();

            let match;
            while ((match = PATH_PATTERN.exec(text)) !== null) {
                const pathMatch = match[0].replace(';', '').replace(':', '').toLowerCase();
                if (!pathMatch.startsWith(oldInclude.toLowerCase())) continue;
                const newPathMatch = pathMatch.replace(oldInclude, newInclude);
                const matchStart = match.index;
                const startPos = document.positionAt(matchStart);
                const endPos = document.positionAt(matchStart + pathMatch.length);
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
