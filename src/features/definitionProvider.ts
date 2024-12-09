import * as vscode from 'vscode';
import * as gscParser from './gscParser';

export class DefinitionProvider implements vscode.DefinitionProvider {
    async provideDefinition(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): Promise<vscode.Definition | undefined> {
        const currentGscDocument = gscParser.getCurrentGscDocument();
        if (!currentGscDocument) return undefined;		
        if (currentGscDocument.isCommentsAtPosition(position)) return undefined;
        
        const wordRange = document.getWordRangeAtPosition(position);
        const word = document.getText(wordRange).toLowerCase();

        if (!word) return undefined;

        const tryGetFunc = gscParser.tryGetFuncInclude(document, wordRange, word);
        if (tryGetFunc) {
            if (tryGetFunc.type === gscParser.funcType.pathCall || tryGetFunc.type === gscParser.funcType.pathPointer) {
                const gscDocument = gscParser.gscDocuments.get(tryGetFunc.include);
                if (gscDocument) return gscDocument.getFuncLocation(word, true);
            }
            return currentGscDocument.getFuncLocation(word);
        }

        return currentGscDocument.getLocation(word, position);
    }
}
