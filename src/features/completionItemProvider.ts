import * as vscode from 'vscode';
import { defs } from '../defs/defs';
import { gsc_functions } from '../defs/defs';
import { common_scripts_utility_defs } from '../defs/common_scripts_utility';

// Provides function completion
export class completionItemProvider {
	functions: vscode.CompletionItem[];

	// Generate completion items for the hardcoded functions
	constructor(extensionPath: string) {
		this.functions = new Array<vscode.CompletionItem>();
	}

	provideCompletionItems(document: vscode.TextDocument,
		position: vscode.Position,
		token: vscode.CancellationToken,
		context: vscode.CompletionContext): Thenable<vscode.CompletionItem[]> | vscode.CompletionItem[] {

		var functions = gsc_functions;
			
		// On auto completion check if include gsc modules to generate function completion
		const text = document.getText();
		if (text.includes("#include common_scripts\\utility;"))
			functions = functions.concat(common_scripts_utility_defs);
		
		return defs.concat(functions);
	}
}