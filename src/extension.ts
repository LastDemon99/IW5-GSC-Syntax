import * as vscode from 'vscode';
import { CompletionItemProvider, onInsertItem } from './features/completionItemProvider';
import { DefinitionProvider } from './features/definitionProvider';
import { RenameProvider } from './features/renameProvider';
import { HoverProvider } from './features/hoverProvider';
import { FoldingRangeProvider } from './features/foldingRangeProvider';
import { ScriptsWatcher, onRenameFile } from './features/scriptsWatcher';
import { setActiveInclude, documentToInclude } from './features/gscParser';
import { ColorProvider, setColorDecoration } from './features/colorProvider';

export async function activate(context: vscode.ExtensionContext) {
    console.log("IW5-GSC-Syntax: Init");

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
            setActiveInclude(documentToInclude(editor.document));
            setColorDecoration(editor);
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
