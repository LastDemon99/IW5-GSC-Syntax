import * as vscode from 'vscode';
import * as defs from '../defs/defs'
import * as fields from '../defs/fields'
import { waittills } from '../defs/waittills';
import { game } from '../defs/game';
import { ScriptsWatcher } from './scriptsWatcher';

export class CompletionItemProvider {
	private functions: vscode.CompletionItem[];
	private playerFields: vscode.CompletionItem[];
	private selfFields: vscode.CompletionItem[];
    private levelFields: vscode.CompletionItem[];
	private scriptsWatcher: ScriptsWatcher;

	constructor() {
		this.functions = defs.defs;
		this.functions = this.functions.concat(defs.gsc_functions);
		this.functions = this.functions.concat(this.createCompletionItems(game, false));
		this.functions = this.functions.concat(this.createCompletionItems(waittills, false));
		this.playerFields = this.createCompletionItems(fields.player);
		this.selfFields = this.createCompletionItems(fields.self);
        this.levelFields = this.createCompletionItems(fields.level);
		this.scriptsWatcher = ScriptsWatcher.getInstance();
	}

	createCompletionItems(items: string[], isField: boolean = true): vscode.CompletionItem[] {
        return items.map(items => {
			if (isField) return new vscode.CompletionItem(items, vscode.CompletionItemKind.Field);
			else return new vscode.CompletionItem(items, vscode.CompletionItemKind.Function);
        });
    }

	provideCompletionItems(document: vscode.TextDocument, position: vscode.Position,
							token: vscode.CancellationToken, context: vscode.CompletionContext): Thenable<vscode.CompletionItem[]> {
			return new Promise<vscode.CompletionItem[]>((resolve, reject) => {

			if (document.languageId !== 'gsc') {
				reject();
				return;
			}

			const linePrefix = document.lineAt(position).text.substring(0, position.character);

			if (linePrefix.trim().startsWith('#include ')) {
				resolve(this.scriptsWatcher.getPathCompletion());
				return;
			}

			if (context.triggerKind === vscode.CompletionTriggerKind.TriggerCharacter)
			{
				if (linePrefix.endsWith('player.')) resolve(this.playerFields);
				else if (linePrefix.endsWith('level.')) resolve(this.levelFields);
				else resolve(this.selfFields);
				return;
			}
						
			resolve(this.functions.concat(this.scriptsWatcher.getFunctionsCompletion()));
		});
	}
}
