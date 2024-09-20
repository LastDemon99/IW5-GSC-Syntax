import * as vscode from 'vscode';
import * as utility from './utility';
import * as defs from '../defs/defs'
import * as fields from '../defs/fields'
import { waittills } from '../defs/waittills';
import { game } from '../defs/game';

let includeCompletion: vscode.CompletionItem[] = [];

export function addIncludePath(filePath: string) {
	const include = utility.filePathToIncludePath(filePath) + ";";
	includeCompletion.push(new vscode.CompletionItem(include, vscode.CompletionItemKind.File));
}

export function getAllIncludesPath(): string[] {
	const paths: string[] = [];
	includeCompletion.forEach(item => {
		paths.push(item.label.toString().replace(";", ""));
	});
	return paths;
}

export function removeIncludePath(filePath: string) {
	const include = utility.filePathToIncludePath(filePath) + ";";
	includeCompletion = includeCompletion.filter(item => item.label !== include);
}

export class CompletionItemProvider {
	private functions: vscode.CompletionItem[];
	private playerFields: vscode.CompletionItem[];
	private selfFields: vscode.CompletionItem[];
    private levelFields: vscode.CompletionItem[];

	constructor() {
		this.functions = defs.defs;
		this.functions = this.functions.concat(defs.gsc_functions);
		this.functions = this.functions.concat(this.createCompletionItems(game, false));
		this.functions = this.functions.concat(this.createCompletionItems(waittills, false));
		this.playerFields = this.createCompletionItems(fields.player);
		this.selfFields = this.createCompletionItems(fields.self);
        this.levelFields = this.createCompletionItems(fields.level);
	}

	async provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext): Promise<vscode.CompletionItem[]> {
		return new Promise<vscode.CompletionItem[]>(async (resolve, reject) => {
			const linePrefix = document.lineAt(position).text.substring(0, position.character).trim();

			if (linePrefix.startsWith('#include ')) {
				resolve(includeCompletion);
				return;
			}

			if (context.triggerKind === vscode.CompletionTriggerKind.TriggerCharacter)
			{
				if (linePrefix.endsWith('player.')) resolve(this.playerFields);
				else if (linePrefix.endsWith('level.')) resolve(this.levelFields);
				else resolve(this.selfFields);
				return;
			}

			const functions: vscode.CompletionItem[] = getFunctionCompletionItems(document.getText());
			const includes = utility.getIncludes(document);
			for (const include of includes) {
				const includeDocument = await vscode.workspace.openTextDocument(utility.includePathToUri(include));
				functions.push(...getFunctionCompletionItems(includeDocument.getText()));
			}
			
			resolve(this.functions.concat(functions));
		});
	}

	createCompletionItems(items: string[], isField: boolean = true): vscode.CompletionItem[] {
        return items.map(items => {
			if (isField) return new vscode.CompletionItem(items, vscode.CompletionItemKind.Field);
			else return new vscode.CompletionItem(items, vscode.CompletionItemKind.Function);
        });
 	}
}

function getFunctionCompletionItems(text: string): vscode.CompletionItem[] {
	const functionPattern = new RegExp(`^(\\w+)\\s*\\(.*\\)\\s*\\{`, 'gm');
	const completionItems: vscode.CompletionItem[] = [];
	let match: RegExpExecArray | null;
	while ((match = functionPattern.exec(text)) !== null) {
		const functionName = match[1];
		const completionItem = new vscode.CompletionItem(functionName, vscode.CompletionItemKind.Function);
		completionItems.push(completionItem);
	}
	return completionItems;
}
