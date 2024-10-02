import * as vscode from 'vscode';
import * as utility from './utility';
import * as fields from '../defs/fields';
import { defs } from '../defs/defs';
import { waittillCompletions } from '../defs/waittills';
import { constantCompletions } from '../defs/gameConstant';
import { damageCompletions } from '../defs/modDamages';

let includeCompletion: vscode.CompletionItem[] = [];
let includeCallCompletion: vscode.CompletionItem[] = [];

export function addIncludeCompletion(filePath: string) {
	const include = utility.pathToInclude(filePath);
	if (!include) return;
	includeCompletion.push(new vscode.CompletionItem(include + ";", vscode.CompletionItemKind.File));
	includeCallCompletion.push(new vscode.CompletionItem(include + "::", vscode.CompletionItemKind.File));
}

export function removeIncludeCompletion(filePath: string) {
	const include = utility.pathToInclude(filePath, false);
	if (!include) return;
	includeCompletion = includeCompletion.filter(item => item.label !== include + ";");
	includeCallCompletion = includeCallCompletion.filter(item => item.label !== include + "::");
}

export class CompletionItemProvider {
	private functions: vscode.CompletionItem[];
	private playerFields: vscode.CompletionItem[] = [];
	private selfFields: vscode.CompletionItem[] = [];
    private levelFields: vscode.CompletionItem[] = [];

	constructor() {
		this.functions = defs;
		this.functions = this.functions.concat(damageCompletions);
		this.functions = this.functions.concat(waittillCompletions);
		this.functions = this.functions.concat(constantCompletions);
		fields.player.forEach(items => { this.playerFields.push(new vscode.CompletionItem(items, vscode.CompletionItemKind.Field)); });
		fields.self.forEach(items => { this.selfFields.push(new vscode.CompletionItem(items, vscode.CompletionItemKind.Field)); });
		fields.level.forEach(items => { this.levelFields.push(new vscode.CompletionItem(items, vscode.CompletionItemKind.Field)); });
	}

	async provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext): Promise<vscode.CompletionItem[]> {
		return new Promise<vscode.CompletionItem[]>(async (resolve, reject) => {
			try {
				const text = document.getText();
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

				const textBeforeCursor = line.substring(0, position.character);
				const includeCallPattern = /.*?([a-zA-Z0-9_]+(?:\\[a-zA-Z0-9_]+)*)::/i;
				const match = includeCallPattern.exec(textBeforeCursor);

				if (match) {
					const includeDocument = await vscode.workspace.openTextDocument(utility.includeToUri(match[1]));
					resolve(getFunctionCompletionItems(includeDocument.getText()));
					return;
				}

				let completions: vscode.CompletionItem[] = this.functions.concat(getFunctionCompletionItems(text, false));

				const includes = utility.getIncludes(text);
				for (const include of includes) {
					const includeDocument = await vscode.workspace.openTextDocument(utility.includeToUri(include));
					const includeFunctions = getFunctionCompletionItems(includeDocument.getText());
					completions = completions.concat(includeFunctions);
				}

				const functionScope = utility.tryGetFuncScopeRanges(text, position);
				if (functionScope) completions = completions.concat(getVariables(text, functionScope, position));	

				completions = completions.concat(provideDefineCompletions(document));

				resolve(completions.concat(includeCallCompletion));
			}
			catch (error) {
				resolve([]);
			}
		});
	}
}

function provideDefineCompletions(document: vscode.TextDocument): vscode.CompletionItem[] {
    const defines: vscode.CompletionItem[] = [];
    const defineRegex = /^#define\s+(\w+)\s+(.*)$/;

    for (let lineNumber = 0; lineNumber < document.lineCount; lineNumber++) {
        const lineText = document.lineAt(lineNumber).text;
        const match = defineRegex.exec(lineText);
        
        if (match) {
            const constantName = match[1];
            const constantValue = match[2].trim();
            const completionItem = new vscode.CompletionItem(constantName, vscode.CompletionItemKind.Constant);
			const markdownString = new vscode.MarkdownString();
			markdownString.appendCodeblock(`#define ${constantName} ${constantValue}`, 'gsc');
			completionItem.documentation = markdownString;
			markdownString.isTrusted = true;
            defines.push(completionItem);
        }
    }
    return defines;
}

function getFunctionCompletionItems(text: string, ignorePrivate: boolean = true): vscode.CompletionItem[] {
    const lines = text.split('\n');
    const completions: vscode.CompletionItem[] = [];
    let match: RegExpExecArray | null;

    while ((match = utility.FUNCTION_PATTERN.exec(text)) !== null) {
		const funcName = match[1];

		if (ignorePrivate && funcName.startsWith("_")) continue;

		const completionItem = new vscode.CompletionItem(funcName, vscode.CompletionItemKind.Function);
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

function getVariables(text: string, functionScope: utility.BasicRange, position: vscode.Position): vscode.CompletionItem[] {
     const blockText = text.split('\n').slice(functionScope.start, functionScope.end + 1).join('\n');
    const completions: vscode.CompletionItem[] = [];

    let match;

    const argPattern = /^\s*\w+\s*\(([^)]*)\)/mi;
    match = argPattern.exec(blockText);
    if (match) {
        const args = match[1].split(',').map(arg => arg.trim()).filter(arg => arg.length > 0);
        for (const arg of args) {
            completions.push(new vscode.CompletionItem(arg, vscode.CompletionItemKind.Variable));
        }
    }

    const variablePattern = /([a-zA-Z_][a-zA-Z0-9]*)\s*=\s*[^;/]*;/gmi;
    while ((match = variablePattern.exec(blockText)) !== null) {
        const matchIndex = match.index;
        const matchLine = blockText.substring(0, matchIndex).split('\n').length - 1;
        const matchCharacter = matchIndex - blockText.lastIndexOf('\n', matchIndex - 1) - 1;
        const variablePosition = new vscode.Position(functionScope.start + matchLine, matchCharacter);

        if (variablePosition.isBefore(position)) {
            completions.push(new vscode.CompletionItem(match[1], vscode.CompletionItemKind.Variable));
        }
    }

    const waittillPattern = /waittill\s*\(\s*["'][^"']+["']\s*,\s*([^);]*)\)/gmi;
    while ((match = waittillPattern.exec(blockText)) !== null) {
        const waittillArgs = match[1].split(',').map(arg => arg.trim()).filter(arg => arg.length > 0);

        const matchIndex = match.index;
        const matchLine = blockText.substring(0, matchIndex).split('\n').length - 1;
        const matchCharacter = matchIndex - blockText.lastIndexOf('\n', matchIndex - 1) - 1;
        const waittillPosition = new vscode.Position(functionScope.start + matchLine, matchCharacter);

        if (waittillPosition.isBefore(position)) {
            for (const arg of waittillArgs) {
                completions.push(new vscode.CompletionItem(arg, vscode.CompletionItemKind.Variable));
            }
        }
    }
    return completions;
}
