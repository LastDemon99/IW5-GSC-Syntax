import * as vscode from 'vscode';
import * as utility from './utility';
import * as defs from '../defs/defs'
import * as fields from '../defs/fields'
import { waittills } from '../defs/waittills';
import { game } from '../defs/game';

let includeCompletion: vscode.CompletionItem[] = [];
let includeCallCompletion: vscode.CompletionItem[] = [];

export function addIncludeCompletion(filePath: string) {
	const include = utility.pathToInclude(filePath.toLowerCase());
	includeCompletion.push(new vscode.CompletionItem(include + ";", vscode.CompletionItemKind.File));
	includeCallCompletion.push(new vscode.CompletionItem(include + "::", vscode.CompletionItemKind.File));
}

export function removeIncludeCompletion(filePath: string) {
	const include = utility.pathToInclude(filePath);
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
			const text = utility.getDocumentText(document);
			if (utility.isCommentAtPosition(text, document, position)) {
				resolve([]);
				return;
			}

			const line = utility.getDocumentLine(document, position);
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

			const completions: vscode.CompletionItem[] = this.functions.concat(getFunctionCompletionItems(text));

			const textBeforeCursor = line.substring(0, position.character);
			const includeCallPattern = /.*?([a-zA-Z0-9_]+(?:\\[a-zA-Z0-9_]+)*)::/i;
			const match = includeCallPattern.exec(textBeforeCursor);

			if (match) {
				const includeDocument = await vscode.workspace.openTextDocument(utility.includeToUri(match[1]));
				resolve(getFunctionCompletionItems(includeDocument.getText()));
				return;
			}

			const functionScope = utility.tryGetFuncScopeLocation(text, position);
			if (functionScope) completions.push(...getVariables(text, functionScope));			
			
			const includes = utility.getIncludes(text);
			for (const include of includes) {
				const includeDocument = await vscode.workspace.openTextDocument(utility.includeToUri(include));
				completions.push(...getFunctionCompletionItems(includeDocument.getText()));
			}

			resolve(completions.concat(includeCallCompletion));
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
    const lines = text.split('\n');
    const functionPattern = new RegExp(`^(\\w+)\\s*\\(.*\\)\\s*\\{`, 'gmi');
    const completions: vscode.CompletionItem[] = [];
    let match: RegExpExecArray | null;

    while ((match = functionPattern.exec(text)) !== null) {
        const lineIndex = text.substring(0, match.index).split('\n').length - 1;
        let docString = '';

        for (let i = lineIndex - 1; i >= Math.max(0, lineIndex - 6); i--) {
            const line = lines[i].trim().toLowerCase();
            if (line.startsWith('///docstringbegin')) {
                for (let j = i + 1; j < lines.length && !lines[j].trim().startsWith('///docstringend'); j++) {
                    docString += lines[j].trim() + '\n';
                }
                break;
            }
        }

        const completionItem = new vscode.CompletionItem(match[1], vscode.CompletionItemKind.Function);
        if (docString) {
			const markdownString = new vscode.MarkdownString();
            const docLines = docString.split('\n');
            const detailLine = docLines.find(line => line.startsWith('detail:'));
            const summaryLine = docLines.find(line => line.startsWith('summary:'));

			if (detailLine) {
                markdownString.appendCodeblock(detailLine.replace('detail:', ''), 'typescript');
				markdownString.isTrusted = true;
            }
            if (summaryLine) {
                markdownString.appendMarkdown(summaryLine.replace('summary:', ''));
                markdownString.isTrusted = true;
            }

			if (markdownString.isTrusted)
            	completionItem.documentation = markdownString;
        }
        completions.push(completionItem);
    }
    return completions;
}

function getVariables(text: string, functionScope: vscode.Location): vscode.CompletionItem[] {
    const blockStart = functionScope.range.start.line;
    const blockEnd = functionScope.range.end.line;
    const blockText = text.split('\n').slice(blockStart, blockEnd + 1).join('\n');
	const completions: vscode.CompletionItem[] = [];

	let match;

    // search argument
    const argPattern = /^\s*\w+\s*\(([^)]*)\)/mi;
    match = argPattern.exec(blockText);
    if (match) {
        const args = match[1].split(',').map(arg => arg.trim()).filter(arg => arg.length > 0);
		for (const arg of args) {
			completions.push(new vscode.CompletionItem(arg, vscode.CompletionItemKind.Variable));
		}
    }

    // search variable
    const variablePattern = /([a-zA-Z_][a-zA-Z0-9]*)\s*=\s*[^;/]*;/gmi;
    while ((match = variablePattern.exec(blockText)) !== null) {
        completions.push(new vscode.CompletionItem(match[1], vscode.CompletionItemKind.Variable));
    }

    return completions;
}
