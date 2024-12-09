import * as vscode from 'vscode';
import * as gscParser from './gscParser';
import * as fields from '../defs/fields';
import * as constants from '../defs/constants';
import { defs } from '../defs/game';
import { waittillCompletions } from '../defs/waittills';
import { includesBase, includesBaseCall } from '../defs/includes';

let lastInsertedItem: string = "";
let pathFunc: Map<string, vscode.CompletionItem[]> = new Map();
let includeCompletion: vscode.CompletionItem[] = [];
let includeCallCompletion: vscode.CompletionItem[] = [];
let gameFunctionsName: string[] = [];

export function getGameFuncsName() {
	return gameFunctionsName;
}

export function addPathFuncCompletion(include: string, func: string) {
    if (!pathFunc.has(include)) pathFunc.set(include, []);
	pathFunc.get(include)?.push(new vscode.CompletionItem(include + "::" + func, vscode.CompletionItemKind.Function));
}

export function clearPathFuncCompletion(include: string) {
	pathFunc.delete(include);
}

export function addIncludeCompletion(include: string) {
	includeCompletion.push(new vscode.CompletionItem(include + ";", vscode.CompletionItemKind.File));
	includeCallCompletion.push(new vscode.CompletionItem(include + "::", vscode.CompletionItemKind.File));
}

export function removeIncludeCompletion(include: string) {
	includeCompletion = includeCompletion.filter(item => item.label.toString().toLowerCase() !== include + ";");
	includeCallCompletion = includeCallCompletion.filter(item => item.label.toString().toLowerCase() !== include + "::");
}

export function onInsertItem(event: vscode.TextDocumentChangeEvent) {
	const changes = event.contentChanges;
	if (changes.length > 0) {
		const change = changes[0];
		const document = event.document;
		const text = change.text;
		const changeStart = change.range.start;
		const targetText = (document.lineAt(changeStart.line).text.slice(0, changeStart.character).trim() + text).toLowerCase();

		let charCount = undefined;

		if (targetText.endsWith("color.picker")) return;
		else if (text === lastInsertedItem && targetText.endsWith("::" + text)) {
			const include = targetText.match(gscParser.PATH_PATTERN);
			if (include && targetText.includes('::' + include[0] + '::')) charCount = 2;
		}
		else if (constants.font_list.includes(text) && targetText.endsWith("font." + text)) charCount = 5;
		else if (constants.point_list.includes(text) && targetText.endsWith("point." + text)) charCount = 6;
		else if (constants.mod_list.includes(text) && targetText.endsWith("mod." + text)) charCount = 4;
		else if (constants.bind_list.includes(text) && targetText.endsWith("bind." + text)) charCount = 5;
		else if (Object.values(constants.textColor_map).some(color => color.iw5_Symbol === text) && targetText.endsWith("textcolor." + text)) charCount = 10;
		else if (Object.values(constants.color_map).some(color => color.rgb === text) && targetText.endsWith("color." + text)) charCount = 6;

		if (charCount) {
			const prefixRange = new vscode.Range(new vscode.Position(changeStart.line, changeStart.character - charCount), changeStart);
			const edit = new vscode.WorkspaceEdit();
			edit.delete(document.uri, prefixRange);
			vscode.workspace.applyEdit(edit);
		}
	}
}

export class CompletionItemProvider {
	private completions: vscode.CompletionItem[];

	constructor() {
		this.completions = defs;
		this.completions = this.completions.concat(waittillCompletions);
		this.completions = this.completions.concat(includesBaseCall);
		this.completions = this.completions.concat(constants.game);
		this.completions = this.completions.concat(constants.triggers);
		gameFunctionsName = defs.map(item => item.label.toString().toLowerCase());
	}

	async provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext): Promise<vscode.CompletionItem[]> {
		return new Promise<vscode.CompletionItem[]>(async (resolve, reject) => {
            const currentGscDocument = gscParser.getCurrentGscDocument();
			
			if (!currentGscDocument) {
				resolve([]);
				return;
			}

			if (currentGscDocument.isCommentsAtPosition(position)) {
				resolve([]);
				return;
			}

			const line = document.lineAt(position).text.toLowerCase();
			const linePrefix = line.substring(0, position.character).trim().toLowerCase();

			if (linePrefix.startsWith('#include ')) {
				resolve(includeCompletion.concat(includesBase));
				return;
			}

			if (context.triggerKind === vscode.CompletionTriggerKind.TriggerCharacter)
			{
				if (linePrefix.endsWith('player.')) resolve(fields.player_field_completions);
				else if (linePrefix.endsWith('level.')) resolve(fields.level_field_completions);
				else if (linePrefix.endsWith('font.')) resolve(constants.fonts);
				else if (linePrefix.endsWith('point.')) resolve(constants.points);
				else if (linePrefix.endsWith('mod.')) resolve(constants.mods);
				else if (linePrefix.endsWith('bind.')) resolve(constants.binds);
				else if (linePrefix.endsWith('textcolor.')) resolve(constants.textColors);
				else if (linePrefix.endsWith('color.')) resolve(constants.colors);
				else resolve(fields.self_field_completions);
				return;
			}

			const wordRange = document.getWordRangeAtPosition(position);
			const word = document.getText(wordRange);

			const tryGetFunc = gscParser.tryGetFuncInclude(document, wordRange, word);
			if (tryGetFunc) {
				if (tryGetFunc.type === gscParser.funcType.pathCall || tryGetFunc.type === gscParser.funcType.pathPointer) {
					const gscDocument = gscParser.gscDocuments.get(tryGetFunc.include);
					if (gscDocument) resolve(gscDocument.getFuncCompletions(true));
					else resolve([]);
					return;
				}
				if (tryGetFunc.type === gscParser.funcType.call) {
					resolve(currentGscDocument.getFuncCompletions());
					return;
				}
				if (tryGetFunc.type === gscParser.funcType.pointer) {
					resolve(currentGscDocument.getFuncCompletions().concat(getFuncCompletions(currentGscDocument)));
					return;
				}
			}

			let completions: vscode.CompletionItem[] = this.completions.concat(includeCallCompletion);
			completions = completions.concat(currentGscDocument.getScopeCompletions(position)).concat(currentGscDocument.getFuncCompletions());
			const text = document.getText();
			let match;
			const completions_str: string[] = completions.map(item => item.label.toString().toLowerCase());
			while ((match = gscParser.WORD_PATTERN.exec(text)) !== null) {
				const word = match[0].toLowerCase();
                if (completions_str.includes(word)) continue;
				const wordPosition = document.positionAt(match.index);
				if (wordPosition.isEqual(position)) continue;
                if (currentGscDocument.isCommentsAtPosition(wordPosition)) continue;
				completions_str.push(word);
				completions.push(new vscode.CompletionItem(match[0], vscode.CompletionItemKind.Text));
            }

			resolve(completions);
		});
	}

	resolveCompletionItem(item: vscode.CompletionItem, token: vscode.CancellationToken): vscode.ProviderResult<vscode.CompletionItem> {
        lastInsertedItem = item.label.toString()
        return item;
    }
}

function getFuncCompletions(currentGscDocument: gscParser.GSC_Document): vscode.CompletionItem[] {
	const funcCompletions: vscode.CompletionItem[] = [];
	const includes: string[] = currentGscDocument.includesList;

	for(const include of currentGscDocument.includesList) {
		const gscDocument = gscParser.gscDocuments.get(include);
		if (gscDocument) funcCompletions.push(...gscDocument.getFuncCompletions(true));
	}

	includes.push(currentGscDocument.include);

	const pathFuncFilter = Array.from(pathFunc.entries())
    .filter(([key]) => !includes.includes(key))
    .map(([, value]) => value).flat();
	
	return funcCompletions.concat(pathFuncFilter);
}
