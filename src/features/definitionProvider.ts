import * as vscode from 'vscode';
import { ScriptsWatcher } from './scriptsWatcher';

export class DefinitionProvider implements vscode.DefinitionProvider {
    private scriptsWatcher: ScriptsWatcher;

    constructor() {
        this.scriptsWatcher = ScriptsWatcher.getInstance();
    }

    public provideDefinition(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): vscode.ProviderResult<vscode.Definition> {
        
        if (document.languageId !== 'gsc') {
            return null;
        }
        
        const wordRange = document.getWordRangeAtPosition(position);
        const word = document.getText(wordRange);
        
        const definitionData = this.scriptsWatcher.getDefinitionData();
        if (definitionData[word]) {
            const data = definitionData[word];
            return new vscode.Location(vscode.Uri.file(data.path), data.position);
        }

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
