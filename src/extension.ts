import { ExtensionContext, languages, commands } from 'vscode';
import { CompletionItemProvider } from './features/completionItemProvider'
import { DefinitionProvider } from './features/definitionProvider'
import { showUrlInputBox } from './features/downloadScripts';
import { RenameProvider } from './features/renameProvider';
import { ScriptsWatcher } from './features/scriptsWatcher';
import { HoverProvider } from './features/hoverProvider';
import { FoldingRangeProvider } from './features/foldingRangeProvider';

export function activate(context: ExtensionContext) {
	console.log("IW5-GSC-Syntax: Init");

	const filesWatcher = new ScriptsWatcher();
	filesWatcher.startWatching();
	
	const completionItemProvider = languages.registerCompletionItemProvider("gsc",
		new CompletionItemProvider(), '.');

	const definitionProvider = languages.registerDefinitionProvider("gsc",
		new DefinitionProvider());

	const renameProvider = languages.registerRenameProvider("gsc", 
		new RenameProvider());

	const downloadCommand = commands.registerCommand('extension.downloadFiles', async () => {
		await showUrlInputBox();
	});

	const foldingProvider = languages.registerFoldingRangeProvider('gsc', 
		new FoldingRangeProvider());

	const hoverProvider = languages.registerHoverProvider('gsc', 
		new HoverProvider());

	context.subscriptions.push(
		{dispose() { filesWatcher.stopWatching(); }},
		completionItemProvider,
		definitionProvider,
		renameProvider,
		downloadCommand,
		hoverProvider,
		foldingProvider);
}

export function deactivate() {
	console.log("IW5-GSC-Syntax: Exit");
}
