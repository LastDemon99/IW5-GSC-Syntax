import * as vscode from 'vscode';
import { completionItemProvider } from './features/completionItemProvider'
import { definitionProvider } from './features/definitionProvider'
import { showUrlInputBox } from './features/downloadScripts';
import { join } from 'path';

const scriptsPath = join(process.env.LOCALAPPDATA || '', 'Plutonium', 'storage', 'iw5', 'scripts');

export function activate(context: vscode.ExtensionContext) {
	console.log("IW5-GSC-Syntax: Init");

	vscode.commands.registerCommand('extension.downloadFiles', async () => {
        await showUrlInputBox(scriptsPath);
    });

	vscode.languages.registerCompletionItemProvider("gsc",
		new completionItemProvider(), '.');

	vscode.languages.registerDefinitionProvider("gsc",
		new definitionProvider(scriptsPath));
}

export function deactivate() {
	console.log("IW5-GSC-Syntax: Exit");
}