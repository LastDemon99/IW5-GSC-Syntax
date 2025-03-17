import * as vscode from 'vscode';
import * as constants from '../defs/constants';
import { player_field_completions } from '../defs/fields';
import { getPrevWordRange, beforeWord, documentToInclude, PATH_PATTERN, isInclude } from '../utility';
import { DEFS, DIRECTIVES } from '../defs/game';
import { waittillCompletions } from '../defs/waittills';
import { filesParsed } from './scriptsWatcher';
import { gscDocuments } from '../parser/documents';
import { levelObject } from '../parser/variables';

const COMPLETIONS: vscode.CompletionItem[] = DEFS;
COMPLETIONS.push(...waittillCompletions);
COMPLETIONS.push(...constants.game);
COMPLETIONS.push(...constants.triggers);

const OBJECTS_PATTERN = /(\w+(?:\.\w+)*)\.$/;

export class CompletionItemProvider {
	async provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext): Promise<vscode.CompletionItem[]> {
		return new Promise<vscode.CompletionItem[]>(async (resolve, reject) => {
            const include = documentToInclude(document);
							
			if (!filesParsed || !gscDocuments.locations.has(include) || gscDocuments.isCommentsAtPosition(include, position)) {
				return resolve([]);
			}

			const line = document.lineAt(position).text.toLowerCase();
			const linePrefix = line.substring(0, position.character).trim().toLowerCase();

			if (linePrefix.startsWith('#include ')) {
				return resolve(gscDocuments.defineCompletions);
			}

			if (linePrefix.startsWith('#undef ')) {
				const macros = gscDocuments.macros.get(include);
				return macros ? resolve(macros.completions) : resolve([]);
			}

			if (linePrefix.startsWith('#')) return resolve(DIRECTIVES);

			if (context.triggerKind === vscode.CompletionTriggerKind.TriggerCharacter && context.triggerCharacter === '.')
			{
				const tryGetPrevWordRange = document.getWordRangeAtPosition(position.translate(0, -2));
				if (!tryGetPrevWordRange) return resolve([]);
				const prevWord = document.getText(tryGetPrevWordRange).toLowerCase();
				if (prevWord === 'player') return resolve(player_field_completions);
				else if (prevWord === 'font') return resolve(constants.fonts);
				else if (prevWord === 'point') return resolve(constants.points);
				else if (prevWord === 'mod') return resolve(constants.mods);
				else if (prevWord === 'bind') return resolve(constants.binds);
				else if (prevWord === 'textcolor') return resolve(constants.textColors);
				else if (prevWord === 'color') return resolve(constants.colors);
			}

			const match = OBJECTS_PATTERN.exec(linePrefix);
			if (match) {
				const pathParts = match[1].split('.');
				let current = pathParts[0] === 'level' ? levelObject : gscDocuments.getVariables(include, position)?.gscObjects;
				if (!current) return resolve([]);
				for (const part of pathParts) {
					current = current.get(part);
					if (!current) return resolve([]);
				}
				const keys = Array.from(current.keys());
				return resolve(keys.map(key => { return new vscode.CompletionItem({label: key, description: `<Any>`}, vscode.CompletionItemKind.Field); }));
			}

			const tryGetPrevWordRange = getPrevWordRange(document, position);
			if (tryGetPrevWordRange) {
				const prevWord = document.getText(tryGetPrevWordRange).toLowerCase();
				if (isInclude(document, tryGetPrevWordRange, prevWord)) {
					let completions: vscode.CompletionItem[] = [];
					if (gscDocuments.locations.has(prevWord)) {
						const functions = gscDocuments.functions.get(prevWord)?.completions;
						if (functions) completions = functions;
					}
					return resolve(completions);
				}
			}

			if (beforeWord(document, position, "::", true)) {
				const functions = gscDocuments.functions.get(include)?.completions;
				return functions ? resolve(functions) : resolve([]);
			}

			let doc_completions: vscode.CompletionItem[] = COMPLETIONS;

			const macros = gscDocuments.macros.get(include);
			const functions = gscDocuments.functions.get(include);
			if (!macros || !functions) return resolve([]);

			doc_completions = doc_completions.concat(gscDocuments.pointerCompletions);
			doc_completions = doc_completions.concat(macros.completions);
			doc_completions = doc_completions.concat(functions.completions);

			const includes = gscDocuments.includes.get(include);
			if (includes) {
				for (const i of includes) {
					const includeCompletion = gscDocuments.functions.get(i)?.completions;
					if (includeCompletion) doc_completions = doc_completions.concat(includeCompletion);
				}
			}

			const varsCompletions = gscDocuments.getVariables(include, position)?.completions;
			if (varsCompletions) doc_completions = doc_completions.concat(varsCompletions);

			return resolve(doc_completions);
		});
	}

	resolveCompletionItem(item: vscode.CompletionItem, token: vscode.CancellationToken): vscode.ProviderResult<vscode.CompletionItem> {
		lastInsertedItem = item.insertText instanceof vscode.SnippetString ? item.insertText.value : item.insertText ? item.insertText.toString() : item.label.toString();
        return item;
    }
}

let lastInsertedItem: string = "";

export function onInsertItem(event: vscode.TextDocumentChangeEvent) {
	const changes = event.contentChanges;
	if (changes.length > 0) {
		const change = changes[0];
		const text = change.text;
		if (text !== lastInsertedItem) return;

		const document = event.document;
		const include = text.match(PATH_PATTERN);
		if (include && beforeWord(document, change.range.start, "::")) {
			const edit = new vscode.WorkspaceEdit();
			edit.delete(document.uri, new vscode.Range(change.range.start.translate(0, -2), change.range.start));
			vscode.workspace.applyEdit(edit);
			lastInsertedItem = "";
			return;
		}

		const prevRange = getPrevWordRange(document, change.range);
		if (!prevRange) return;

		const prevWord = document.getText(prevRange).toLowerCase();
		const triggers: string[] = ['font', 'point', 'mod', 'bind', 'textcolor', 'color'];

		if (prevWord === 'color' && text === 'picker') return;
		
		if (triggers.includes(prevWord)) {
			//console.log(document.getText(new vscode.Range(prevRange.start, prevRange.end.translate(0, 1))));
			const edit = new vscode.WorkspaceEdit();
			edit.delete(document.uri, new vscode.Range(prevRange.start, prevRange.end.translate(0, 1)));
			vscode.workspace.applyEdit(edit);
		}
		lastInsertedItem = "";
	}
}
