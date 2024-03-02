import * as vscode from 'vscode';
import { game_defs } from '../defs/defs';
import { common_scripts_utility_defs } from '../defs/common_scripts_utility';

// Provides function completion
export class functionProvider {
	functions: vscode.CompletionItem[];

	// Generate completion items for the hardcoded functions
	constructor(extensionPath: string) {
		this.functions = new Array<vscode.CompletionItem>();
	}

	provideCompletionItems(document: vscode.TextDocument,
		position: vscode.Position,
		token: vscode.CancellationToken,
		context: vscode.CompletionContext): Thenable<vscode.CompletionItem[]> | vscode.CompletionItem[] {

		var defs = game_defs;
		const text = document.getText();
		
		// On auto completion check if include gsc modules to generate function completion
		if (text.includes("#include common_scripts\\utility;"))
			defs = game_defs.concat(common_scripts_utility_defs);

		this.functions = defs.map(idef => {
			const def = new vscode.CompletionItem(idef.name);
			def.detail = idef.decl;
			def.documentation = idef.desc;
			def.kind = vscode.CompletionItemKind.Function;
			return def;
		});	

		return this.functions;
	}
}