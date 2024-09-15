import * as vscode from 'vscode';
import { CompletionItemProvider } from './features/completionItemProvider'
import { DefinitionProvider } from './features/definitionProvider'
import { showUrlInputBox } from './features/downloadScripts';
import { ScriptsWatcher } from './features/scriptsWatcher';

export function activate(context: vscode.ExtensionContext) {
	console.log("IW5-GSC-Syntax: Init");

	let filesWatcher: ScriptsWatcher;

	const activeEditor = vscode.window.activeTextEditor;
    if (activeEditor) {
		filesWatcher = ScriptsWatcher.getInstance();
		context.subscriptions.push({
			dispose() { filesWatcher.stopWatching(); }
		});
		filesWatcher.updateData(activeEditor.document);
	}

	const onChangeFileDisplay = vscode.window.onDidChangeVisibleTextEditors(editors => {
        editors.forEach(editor => { 
			const document = editor.document;
			if (document.languageId === 'gsc')filesWatcher.updateData(document); 
		});
    });

    const onChangeDocument = vscode.workspace.onDidChangeTextDocument((event: vscode.TextDocumentChangeEvent) => {
		const document = event.document;
        if (document.languageId === 'gsc') filesWatcher.updateData(event.document);
    });

	const completionItemProvider = vscode.languages.registerCompletionItemProvider("gsc",
		new CompletionItemProvider(), '.');

	const definitionProvider = vscode.languages.registerDefinitionProvider("gsc",
		new DefinitionProvider());

	const registerCommand = vscode.commands.registerCommand('extension.downloadFiles', async () => {
		await showUrlInputBox();
	});

	context.subscriptions.push(
		onChangeFileDisplay,
		onChangeDocument,
		completionItemProvider,
		definitionProvider,
		registerCommand);
}

export function deactivate() {
	console.log("IW5-GSC-Syntax: Exit");
}
