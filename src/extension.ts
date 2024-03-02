import * as vscode from 'vscode';
import * as completion from './features/completionItemProvider'

export function activate(context: vscode.ExtensionContext) {
	console.log("IW5-GSC-Syntax: Init");

	// Register the built-in function definitions
	vscode.languages.registerCompletionItemProvider("gsc",
		new completion.functionProvider(context.extensionPath));
}

export function deactivate() {
	console.log("IW5-GSC-Syntax: Exit");
}