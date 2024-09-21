import * as vscode from 'vscode';
import * as utility from './utility';

export class DefinitionProvider implements vscode.DefinitionProvider {
    constructor() {
    }

    async provideDefinition(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): Promise<vscode.Definition | null> {
        const wordRange = document.getWordRangeAtPosition(position);
        const word = document.getText(wordRange);

        if (!word || word === "" || utility.isCommentAtPosition(document, position))
            return null;

        const text = document.getText();
        const line = document.lineAt(position.line).text;
        
        if (!utility.isFunctionAtPosition(line, position, word)) {
            const functionScope = utility.tryGetFunctionScope(text, position);
            if (functionScope) {
                const varDefinition = utility.tryGetVariableFromScope(text, functionScope, word, document.uri);
                if (varDefinition) return varDefinition;
            }
            return null;
        }

        // Search declaration in current file
        const funcDeclaration = utility.tryGetFunctionDeclarationLocation(word, text, document);
        if (funcDeclaration) return funcDeclaration;
        
        // Search declaration in call include path
        const callFromInclude = utility.tryGetIncludeCallPath(word, text, document, position);
        if (callFromInclude) {
            const includeDocument = await vscode.workspace.openTextDocument(utility.includePathToUri(callFromInclude.split('::')[0]));
            const declaration = utility.tryGetFunctionDeclarationLocation(word, includeDocument.getText(), includeDocument);
            if (declaration) return declaration;
        }

        // search declaration in all includes path
        const includes = utility.getIncludesFromDocument(document);
        for (const include of includes) {
            const includeDocument = await vscode.workspace.openTextDocument(utility.includePathToUri(include));
            const declaration = utility.tryGetFunctionDeclarationLocation(word, includeDocument.getText(), includeDocument);
            if (declaration) return declaration;
        }
        return null;
    }
}
