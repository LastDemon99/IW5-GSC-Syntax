import * as vscode from 'vscode';
import { CompletionItemProvider } from './features/completionItemProvider';
import { DefinitionProvider } from './features/definitionProvider';
import { RenameProvider } from './features/renameProvider';
import { HoverProvider } from './features/hoverProvider';
import { FoldingRangeProvider } from './features/foldingRangeProvider';
import { ScriptsWatcher, onRenameFile } from './features/scriptsWatcher';

export async function activate(context: vscode.ExtensionContext) {
    console.log("IW5-GSC-Syntax: Init");

    const filesWatcher = new ScriptsWatcher();
	filesWatcher.startWatching();

    const renameFiles = vscode.workspace.onDidRenameFiles(async (event) => {      
        await onRenameFile(event);
    });

    const completionItemProvider = vscode.languages.registerCompletionItemProvider("gsc",
        new CompletionItemProvider(), '.');

    const definitionProvider = vscode.languages.registerDefinitionProvider("gsc",
        new DefinitionProvider());

    const renameProvider = vscode.languages.registerRenameProvider("gsc", 
        new RenameProvider());

    const foldingProvider = vscode.languages.registerFoldingRangeProvider('gsc', 
        new FoldingRangeProvider());

    const hoverProvider = vscode.languages.registerHoverProvider('gsc', 
        new HoverProvider());

    context.subscriptions.push(
        {dispose() { filesWatcher.stopWatching(); }},
        renameFiles,
        completionItemProvider,
        definitionProvider,
        renameProvider,
        hoverProvider,
        foldingProvider
    );
}

export function deactivate() {
    console.log("IW5-GSC-Syntax: Exit");
}
