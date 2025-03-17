import * as vscode from 'vscode';
import { isVariable, documentToInclude, tryGetFunction, beforeWord, pathToInclude, includeToPath, getStringRanges } from '../utility';
import { KEYWORDS, ENGINE_FUNCTIONS } from '../defs/game';
import { filesParsed } from './scriptsWatcher';
import { gscDocuments } from '../parser/documents';
import { WORD_PATTERN } from '../parser/variables';

const PATH_PATTERN = /([a-zA-Z0-9_]+(?:\\[a-zA-Z0-9_]+)+)(?::|;|$)/g;

export class RenameProvider implements vscode.RenameProvider {
    async provideRenameEdits(document: vscode.TextDocument, position: vscode.Position, newName: string, token: vscode.CancellationToken): Promise<vscode.WorkspaceEdit> {
        const include = documentToInclude(document);
        const edit = new vscode.WorkspaceEdit();
                
        if (!filesParsed || !gscDocuments.locations.has(include) || gscDocuments.isCommentsAtPosition(include, position)) return edit;
        
        const wordRange = document.getWordRangeAtPosition(position);
        const word = document.getText(wordRange).toLowerCase();
        const wordLower = word.toString();

        if (!word) return edit;

        const includeLocation = gscDocuments.locations.get(wordLower);
        if (includeLocation) return edit;

        const trygetFunc = tryGetFunction(document, wordRange);
        if (trygetFunc) {
            if (ENGINE_FUNCTIONS.includes(wordLower)) return edit;

            const macroRanges = gscDocuments.macros.get(include)?.getRanges(wordLower);
            if (macroRanges) {
                macroRanges.forEach(range => edit.replace(document.uri, range, newName));
                return edit;
            }

            const funcInclude = trygetFunc.include === '' ? include : trygetFunc.include;
            for (const [iInclude, iLocation] of gscDocuments.locations) {
                const isIncluded = iInclude === funcInclude || gscDocuments.includes.get(iInclude)?.some(i => i === funcInclude);
                if (!(isIncluded || gscDocuments.includesPointer.get(iInclude)?.includes(funcInclude))) continue;

                const iDocument = await vscode.workspace.openTextDocument(iLocation.uri);
                const iText = iDocument.getText();
                const iEdit = new vscode.WorkspaceEdit();
                const iStringRanges = getStringRanges(iText);

                let match;
                while ((match = WORD_PATTERN.exec(iText)) !== null) {
                    const iWordStart = match.index;
                    const iWordLower = match[0].toLowerCase();
                    const iWordPosition = iDocument.positionAt(iWordStart);
                    const iWordRange = new vscode.Range(iWordPosition, iWordPosition.translate(0, iWordLower.length));

                    if (wordLower != iWordLower) continue;
                    if (gscDocuments.isCommentsAtPosition(iInclude, iWordPosition)) continue;
                    if (iStringRanges.some(range => iWordStart >= range.start && iWordStart < range.end)) continue;
                    
                    const iTrygetFunc = tryGetFunction(iDocument, iWordRange);
                    if (iTrygetFunc) {
                        if (iTrygetFunc.include === '' && isIncluded || iTrygetFunc.include === funcInclude) 
                            iEdit.replace(iLocation.uri, iWordRange, newName);
                    }
                }

                if (iEdit.size > 0) {
                    const success = await vscode.workspace.applyEdit(iEdit);
                    if (success) await iDocument.save();
                }
            }

            return edit;
        }

        if (isVariable(document, wordRange, word) && !beforeWord(document, wordRange, ".", true)) {
            if (KEYWORDS.includes(wordLower)) return edit;

            const macroRanges = gscDocuments.macros.get(include)?.getRanges(wordLower);
            if (macroRanges) {
                macroRanges.forEach(range => edit.replace(document.uri, range, newName));
                return edit;
            }

            const functions = gscDocuments.functions.get(include);
            if (!functions) return edit;

            const funcName = functions.getFuncByPosition(position);
            if (!funcName) return edit;

            const varRanges = functions.variables.get(funcName)?.getRanges(wordLower);
            if (varRanges) {
                varRanges.forEach(range => edit.replace(document.uri, range, newName));
                return edit;
            }
        }

        return edit;
    }
}

export async function renameInclude(oldPath: string, newPath: string) {
    console.log("IW5-GSC-Syntax: Rename process initiated");
    
    const oldInclude = pathToInclude(oldPath, false);
    const newInclude = pathToInclude(newPath, false);

    if (newPath.endsWith('.gsc')) {
        await updateIncludePaths(oldInclude, newInclude);
        return;
    }

    await updateIncludesForDirectory(oldInclude, newInclude);

    console.log("IW5-GSC-Syntax: Rename process completed");
}

async function updateIncludePaths(oldInclude: string, newInclude: string) {
    gscDocuments.delete(oldInclude);
    for (const [include, pointers] of gscDocuments.includesPointer) {
        if (!pointers.includes(oldInclude)) continue;
        try {
            const uri = vscode.Uri.file(includeToPath(include));
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
                const success = await vscode.workspace.applyEdit(edit);
                if (success) await document.save();
            }
        } catch (error) {
            console.error(`Failed to process include: ${include}, Error: ${error}`);
        }
    }
}

async function updateIncludesForDirectory(oldInclude: string, newInclude: string) {
    for (const include of gscDocuments.locations.keys()) {
        try {
            const uri = vscode.Uri.file(includeToPath(include));
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
                const success = await vscode.workspace.applyEdit(edit);
                if (success) await document.save();
            }
        } catch (error) {
            console.error(`Failed to process include: ${include}, Error: ${error}`);
        }
    }
}
