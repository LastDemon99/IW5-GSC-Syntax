import * as vscode from 'vscode';
import { completionItemProvider } from  './features/completionItemProvider'

export function activate(context: vscode.ExtensionContext) {
	console.log("IW5-GSC-Syntax: Init");

	// Completion provider
	vscode.languages.registerCompletionItemProvider("gsc",
		new completionItemProvider(context.extensionPath));
}

export function deactivate() {
	console.log("IW5-GSC-Syntax: Exit");
}