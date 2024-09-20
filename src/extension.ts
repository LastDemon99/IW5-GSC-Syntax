import { ExtensionContext, languages, commands } from 'vscode';
import { CompletionItemProvider } from './features/completionItemProvider'
import { DefinitionProvider } from './features/definitionProvider'
import { showUrlInputBox } from './features/downloadScripts';
import { RenameProvider } from './features/renameProvider';
import { ScriptsWatcher } from './features/scriptsWatcher';

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

	context.subscriptions.push(
		{dispose() { filesWatcher.stopWatching(); }},
		completionItemProvider,
		definitionProvider,
		renameProvider,
		downloadCommand);
}

export function deactivate() {
	console.log("IW5-GSC-Syntax: Exit");
}
