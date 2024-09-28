import * as vscode from 'vscode';
import * as utility from './utility';

export class DefinitionProvider implements vscode.DefinitionProvider {
    async provideDefinition(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): Promise<vscode.Definition | null> {
        const wordRange = document.getWordRangeAtPosition(position);
        const word = document.getText(wordRange).toLowerCase();

        if (!word || word === "") return null;

        const text = utility.getDocumentText(document);
        if (utility.isCommentAtPosition(text, document, position)) return null;

        const line = utility.getDocumentLine(document, position);
        
        const file = tryGetInclude(line, position, document.uri);
        if (file) return file;
        
        if (!utility.isFunctionAtPosition(line, position, word)) {
            const functionScope = utility.tryGetFuncScopeLocation(text, position);
            if (functionScope) {
                const varDefinition = tryGetVariablesLocation(text, functionScope, word, document.uri);
                if (varDefinition) return varDefinition;
            }
            return null;
        }
        if (utility.isWordStatement(word)) return null;

        // Search declaration in call include path
        const includeCall = utility.tryGetFuncIncludeCall(word, text, document, position);
        if (includeCall) {
            const includeDocument = await vscode.workspace.openTextDocument(utility.includeToUri(includeCall));
            const declaration = utility.tryGetFuncDefLocation(word, includeDocument.getText(), includeDocument);
            if (declaration) return declaration;
        }

        // Search declaration in current file
        const funcDeclaration = utility.tryGetFuncDefLocation(word, text, document);
        if (funcDeclaration) return funcDeclaration;

        // search declaration in all includes path
        const includes = utility.getIncludes(text);
        for (const include of includes) {
            const includeDocument = await vscode.workspace.openTextDocument(utility.includeToUri(include));
            const declaration = utility.tryGetFuncDefLocation(word, includeDocument.getText(), includeDocument);
            if (declaration) return declaration;
        }
        return null;
    }
}

function tryGetVariablesLocation(text: string, functionScope: vscode.Location, variableName: string, uri: vscode.Uri): vscode.Location | undefined {
    const blockStart = functionScope.range.start.line;
    const blockEnd = functionScope.range.end.line;
    const blockText = text.split('\n').slice(blockStart, blockEnd + 1).join('\n');

    let match;

    // search argument
    const argPattern = /^\s*\w+\s*\(([^)]*)\)/mi;
    match = argPattern.exec(blockText);
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
    const variablePattern = new RegExp(`\\b${variableName}\\b`, 'gi');
    while ((match = variablePattern.exec(blockText)) !== null) {
        const variableIndex = match.index;

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

function tryGetInclude(line: string, position: vscode.Position, uri: vscode.Uri): vscode.Location | undefined {
    let match;

    const pathPattern = /([a-zA-Z0-9_]+(?:\\[a-zA-Z0-9_]+)+)/g;
    while ((match = pathPattern.exec(line)) !== null) {
        const pathMatch = match[0];
        const matchStart = match.index;
        const matchEnd = matchStart + pathMatch.length;
        if (matchStart <= position.character && matchEnd >= position.character) {
            const filePath = utility.includeToPath(pathMatch);
            if (utility.fileExists(filePath))
                return new vscode.Location(vscode.Uri.file(filePath), new vscode.Range(position, position));
            return undefined;
        }
    }
    return undefined;
}
