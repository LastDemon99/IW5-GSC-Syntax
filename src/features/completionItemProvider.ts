import * as vscode from 'vscode';
import * as utility from './utility';
import * as defs from '../defs/defs'
import * as fields from '../defs/fields'
import { waittills } from '../defs/waittills';
import { game } from '../defs/game';

let includeCompletion: vscode.CompletionItem[] = [];
let includeCallCompletion: vscode.CompletionItem[] = [];

export function addIncludePath(filePath: string) {
	const include = utility.filePathToIncludePath(filePath);
	includeCompletion.push(new vscode.CompletionItem(include + ";", vscode.CompletionItemKind.File));
	includeCallCompletion.push(new vscode.CompletionItem(include + "::", vscode.CompletionItemKind.File));
}

export function getAllIncludesPath(): string[] {
	const paths: string[] = [];
	includeCompletion.forEach(item => {
		paths.push(item.label.toString().replace(";", ""));
	});
	return paths;
}

export function removeIncludePath(filePath: string) {
	const include = utility.filePathToIncludePath(filePath);
	includeCompletion = includeCompletion.filter(item => item.label !== include + ";");
	includeCallCompletion = includeCallCompletion.filter(item => item.label !== include + "::");
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
			const line = document.lineAt(position).text;
			const linePrefix = line.substring(0, position.character).trim();

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

			const text = document.getText();
			const functionsCompletion: vscode.CompletionItem[] = getFunctionCompletionItems(text);

			const textBeforeCursor = line.substring(0, position.character);
			const pattern = /.*?([a-zA-Z0-9_]+(?:\\[a-zA-Z0-9_]+)*)::/;
			const match = pattern.exec(textBeforeCursor);

			if (match) {
				const includeDocument = await vscode.workspace.openTextDocument(utility.includePathToUri(match[1]));
				functionsCompletion.push(...getFunctionCompletionItems(includeDocument.getText()));
			}
			
			const currentBlock = getFunctionBlock(text, position);
			if (currentBlock) {
				functionsCompletion.push(...getFunctionArguments(currentBlock));
				functionsCompletion.push(...getVariablesFromBlock(currentBlock));
			}
			
			const includes = utility.getIncludesFromDocument(document);
			for (const include of includes) {
				const includeDocument = await vscode.workspace.openTextDocument(utility.includePathToUri(include));
				functionsCompletion.push(...getFunctionCompletionItems(includeDocument.getText()));
			}

			resolve(this.functions.concat(functionsCompletion).concat(includeCallCompletion));
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

function getFunctionBlock(text: string, position: vscode.Position): string {
	const functionPattern = new RegExp(`^(\\w+)\\s*\\(.*\\)\\s*\\{`, 'gm');

	let match;
	while ((match = functionPattern.exec(text)) !== null) {
		let openBraces = 1;
		let index = match.index + match[0].length;

		const startLine = text.substring(0, match.index).split('\n').length - 1;
		const startCol = match.index - text.lastIndexOf('\n', match.index) - 1;

		while (openBraces > 0 && index < text.length) {
			if (text[index] === '{') openBraces++;
			else if (text[index] === '}') openBraces--;
			index++;
		}

		const endLine = text.substring(0, index).split('\n').length - 1;
		const endCol = index - text.lastIndexOf('\n', index) - 1;

		if (
			(position.line > startLine || (position.line === startLine && position.character >= startCol)) &&
			(position.line < endLine || (position.line === endLine && position.character <= endCol))
		) {
			const functionBlock = text.substring(match.index, index);
			return functionBlock;
		}
	}
	return "";
}

function getFunctionArguments(block: string): vscode.CompletionItem[] {
    const argPattern = /^\s*\w+\s*\(([^)]*)\)/m;
    const completionItems: vscode.CompletionItem[] = [];
    const match = argPattern.exec(block);
    if (match) {
        const args = match[1].split(',').map(arg => arg.trim()).filter(arg => arg.length > 0);
        for (const arg of args) {
            const completionItem = new vscode.CompletionItem(arg, vscode.CompletionItemKind.Variable);
            completionItems.push(completionItem);
        }
    }
    return completionItems;
}

function getVariablesFromBlock(block: string): vscode.CompletionItem[] {
    const variablePattern = /([a-zA-Z_][a-zA-Z0-9]*)\s*=\s*[^;/]*;/gm;
    const completionItems: vscode.CompletionItem[] = [];
    let match;
    while ((match = variablePattern.exec(block)) !== null) {
        const variableName = match[1];
        const completionItem = new vscode.CompletionItem(variableName, vscode.CompletionItemKind.Variable);
        completionItems.push(completionItem);
    }
    return completionItems;
}
