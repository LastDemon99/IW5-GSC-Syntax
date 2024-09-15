import * as vscode from 'vscode';
import { CompletionItemProvider } from './features/completionItemProvider'
import { DefinitionProvider } from './features/definitionProvider'
import { showUrlInputBox } from './features/downloadScripts';
import { ScriptsWatcher } from './features/scriptsWatcher';

export function activate(context: vscode.ExtensionContext) {
	console.log("IW5-GSC-Syntax: Init");

	const filesWatcher = ScriptsWatcher.getInstance();
	context.subscriptions.push({
        dispose() { filesWatcher.stopWatching(); }
    });

	vscode.workspace.onDidOpenTextDocument((document: vscode.TextDocument) => {
        if (document.languageId === 'gsc') filesWatcher.updateData(document);
    });

    vscode.workspace.onDidChangeTextDocument((event: vscode.TextDocumentChangeEvent) => {
		const document = event.document;
        if (document.languageId === 'gsc') filesWatcher.updateData(event.document);
    });

	vscode.commands.registerCommand('extension.downloadFiles', async () => {
        await showUrlInputBox();
    });

	vscode.languages.registerCompletionItemProvider("gsc",
		new CompletionItemProvider(), '.');

	vscode.languages.registerDefinitionProvider("gsc",
		new DefinitionProvider());
}

export function deactivate() {
	console.log("IW5-GSC-Syntax: Exit");
}
