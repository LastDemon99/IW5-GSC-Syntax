import * as vscode from 'vscode';

export class definitionProvider implements vscode.DefinitionProvider {
    provideDefinition(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): vscode.ProviderResult<vscode.Definition> {
        
        const wordRange = document.getWordRangeAtPosition(position);
        const word = document.getText(wordRange);

        const definition = findDefinitionInDocument(document, word);

        if (definition) {
            return new vscode.Location(document.uri, definition);
        }

        return null;
    }
}

function findDefinitionInDocument(document: vscode.TextDocument, functionName: string): vscode.Position | null {
    const functionPattern = new RegExp(`^${functionName}\\s*\\(`);
    for (let i = 0; i < document.lineCount; i++) {
        const lineText = document.lineAt(i).text;

        if (functionPattern.test(lineText)) {
            return new vscode.Position(i, lineText.indexOf(functionName));
        }
    }

    return null;
}