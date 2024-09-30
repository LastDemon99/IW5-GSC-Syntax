import * as vscode from 'vscode';
import { CompletionItemProvider } from './features/completionItemProvider';
import { DefinitionProvider } from './features/definitionProvider';
import { showUrlInputBox, downloadFilesFromGitHub } from './features/downloadScripts';
import { RenameProvider } from './features/renameProvider';
import { HoverProvider } from './features/hoverProvider';
import { FoldingRangeProvider } from './features/foldingRangeProvider';
import { addIncludeCompletion, removeIncludeCompletion } from './features/completionItemProvider';
import { addInclude, removeInclude, renameInclude } from './features/renameProvider';
import { IW5GscTreeDataProvider, getWebviewContent, IW5GscTreeItem, repositoryUrls } from './features/scriptsExplorer';
import { join } from 'path';
import { SCRIPTS_FOLDER } from './features/utility';

let currentPanel: vscode.WebviewPanel | undefined = undefined;
let currentUrl: string = '';

export async function activate(context: vscode.ExtensionContext) {
    console.log("IW5-GSC-Syntax: Init");

    const treeDataProvider = new IW5GscTreeDataProvider();
    vscode.window.registerTreeDataProvider('iw5-gsc-explorer', treeDataProvider);

    const openRepoDisposable = vscode.commands.registerCommand('iw5GscTreeView.openRepo', async (item: IW5GscTreeItem) => {
        if (currentPanel) {
            currentPanel.reveal(vscode.ViewColumn.One);
        } else {
            const webviewOptions = {
                enableScripts: true,
                localResourceRoots: [vscode.Uri.file(join(context.extensionPath, 'media'))]
            };

            currentPanel = vscode.window.createWebviewPanel(
                'iw5GscRepo',
                'Scripts Explorer',
                vscode.ViewColumn.One,
                webviewOptions
            );

            currentPanel.onDidDispose(() => {
                currentPanel = undefined;
            }, null, context.subscriptions);
        }

        try {
            if (currentPanel) {
                currentUrl = item.url;
                const webview = currentPanel.webview;
                webview.html = await getWebviewContent(currentUrl, webview, context);
                webview.onDidReceiveMessage(async (message) => {
                    console.log(message.command);
                    if (message.command === 'download') {
                        await downloadFilesFromGitHub(message.url, SCRIPTS_FOLDER);
                        webview.postMessage({ command: 'downloadComplete' });
                    }
                });
            }
        } catch (error) {
            console.error('Error al cargar el contenido del repositorio:', error);
            if (currentPanel) {
                currentPanel.webview.html = `<h1>Error al cargar el contenido del repositorio</h1><p>Por favor, verifica la URL o intenta nuevamente más tarde.</p>`;
            }
        }
    });

    const files = await vscode.workspace.findFiles('**/*.gsc');
    files.forEach((file) => {
        const filePath = file.fsPath;
        console.log(`File found: ${filePath}`);
        addIncludeCompletion(filePath);
        addInclude(filePath);
    });

    const createFiles = vscode.workspace.onDidCreateFiles((event) => {
        event.files.forEach((file) => {
            const filePath = file.fsPath;
            console.log(`File created: ${filePath}`);
            addIncludeCompletion(filePath);
            addInclude(filePath);
        });
    });

    const deleteFiles = vscode.workspace.onDidDeleteFiles((event) => {
        event.files.forEach((file) => {
            const filePath = file.fsPath;
            console.log(`File deleted: ${filePath}`);
            removeIncludeCompletion(filePath);
            removeInclude(filePath);
        });
    });

    const renameFiles = vscode.workspace.onDidRenameFiles((event) => {
        event.files.forEach(async (file) => {
            const oldPath = file.oldUri.fsPath;
            const newPath = file.newUri.fsPath;
            console.log(`File renamed from ${oldPath} to ${newPath}`);
            renameInclude(oldPath, newPath);
        });
    });

    const completionItemProvider = vscode.languages.registerCompletionItemProvider("gsc",
        new CompletionItemProvider(), '.');

    const definitionProvider = vscode.languages.registerDefinitionProvider("gsc",
        new DefinitionProvider());

    const renameProvider = vscode.languages.registerRenameProvider("gsc", 
        new RenameProvider());

    const downloadCommand = vscode.commands.registerCommand('iw5.scripts.download', async () => {
        await showUrlInputBox();
    });

    const scriptsFolderCommand = vscode.commands.registerCommand('iw5.scripts.open', async () => {
        const scriptsFolder = join(process.env.LOCALAPPDATA || '', 'Plutonium', 'storage', 'iw5', 'scripts');
        console.log(vscode.Uri.file(scriptsFolder));
        await vscode.commands.executeCommand('revealFileInOS', vscode.Uri.file(scriptsFolder));
    });

    const scriptsExplorerCommand = vscode.commands.registerCommand('iw5.scripts.explorer', async () => {
        for (const data of repositoryUrls) {
            for (const url of data.repoUrls) {
                await context.globalState.update(url, undefined);
            }
        }
        if (currentPanel) currentPanel.webview.html = await getWebviewContent(currentUrl, currentPanel.webview, context);
    });

    const foldingProvider = vscode.languages.registerFoldingRangeProvider('gsc', 
        new FoldingRangeProvider());

    const hoverProvider = vscode.languages.registerHoverProvider('gsc', 
        new HoverProvider());

    context.subscriptions.push(
        openRepoDisposable,
        createFiles,
        deleteFiles,
        renameFiles,
        completionItemProvider,
        definitionProvider,
        renameProvider,
        hoverProvider,
        foldingProvider,
        downloadCommand,
        scriptsFolderCommand,
        scriptsExplorerCommand
    );
}

export function deactivate() {
    console.log("IW5-GSC-Syntax: Exit");
}
