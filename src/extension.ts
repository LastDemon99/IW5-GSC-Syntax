import * as vscode from 'vscode';
import { completionItemProvider } from  './features/completionItemProvider'
import { semanticTokensProvider, legend } from  './features/semanticTokenProvider'

export function activate(context: vscode.ExtensionContext) {
	console.log("IW5-GSC-Syntax: Init");

	// Completion provider
	vscode.languages.registerCompletionItemProvider("gsc",
		new completionItemProvider(context.extensionPath));

	// Semantic provider
	context.subscriptions.push(
		vscode.languages.registerDocumentSemanticTokensProvider("gsc",
		new semanticTokensProvider(), legend));
}

export function deactivate() {
	console.log("IW5-GSC-Syntax: Exit");
}