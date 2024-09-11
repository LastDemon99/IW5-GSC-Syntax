import * as vscode from 'vscode';
import * as completion from './features/completionItemProvider'
import * as definition from './features/definitionProvider'

export function activate(context: vscode.ExtensionContext) {
	console.log("IW5-GSC-Syntax: Init");

	// Completion provider
	vscode.languages.registerCompletionItemProvider("gsc",
		new completion.completionItemProvider(), '.');

	vscode.languages.registerDefinitionProvider("gsc",
		new definition.definitionProvider());
}

export function deactivate() {
	console.log("IW5-GSC-Syntax: Exit");
}