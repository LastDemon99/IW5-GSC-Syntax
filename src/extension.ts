import * as vscode from 'vscode';
import { CompletionItemProvider, onInsertItem } from './features/completionItemProvider';
import { DefinitionProvider } from './features/definitionProvider';
import { RenameProvider } from './features/renameProvider';
import { HoverProvider } from './features/hoverProvider';
import { FoldingRangeProvider } from './features/foldingRangeProvider';
import { ScriptsWatcher, onRenameFile } from './features/scriptsWatcher';
import { ColorProvider, setColorDecoration } from './features/colorProvider';
import { GSC_MP_FOLDER } from './utility';

export async function activate(context: vscode.ExtensionContext) {
    console.log("IW5-GSC-Syntax: Init");

    const openRawFolder = vscode.commands.registerCommand('gsc.addRawFolder', async () => {
        const workspaceFolders = vscode.workspace.workspaceFolders || [];
        const alreadyAdded = workspaceFolders.some(folder => folder.uri.fsPath.toLowerCase() === GSC_MP_FOLDER);
        if (!alreadyAdded) vscode.workspace.updateWorkspaceFolders(workspaceFolders.length, 0, { uri: vscode.Uri.file(GSC_MP_FOLDER) });
    });

    const filesWatcher = new ScriptsWatcher(context);
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

    const colorProvider = vscode.languages.registerColorProvider('gsc', 
        new ColorProvider());

    const visibleEditors = vscode.window.visibleTextEditors;
    visibleEditors.forEach(editor => {
        if (editor.document.languageId === 'gsc') {
            setColorDecoration(editor);
            vscode.commands.executeCommand('gsc.addRawFolder');
        }
    });

    const onEdit = vscode.workspace.onDidChangeTextDocument((event) => {
        onInsertItem(event);
        vscode.window.visibleTextEditors.forEach(editor => {
            if (editor.document.languageId === 'gsc') setColorDecoration(editor);
        });
    });

    const onChangeEditor = vscode.window.onDidChangeActiveTextEditor((editor) => {
        if (editor && editor.document.languageId === 'gsc') setColorDecoration(editor);
    });

    context.subscriptions.push(
        openRawFolder,
        {dispose() { filesWatcher.stopWatching(); }},
        renameFiles,
        completionItemProvider,
        definitionProvider,
        renameProvider,
        hoverProvider,
        foldingProvider,
        colorProvider,
        onEdit,
        onChangeEditor
    );
}

export function deactivate() {
    console.log("IW5-GSC-Syntax: Exit");
}
