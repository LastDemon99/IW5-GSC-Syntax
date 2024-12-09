import * as chokidar from 'chokidar';
import * as vscode from 'vscode';
import { addIncludeCompletion, removeIncludeCompletion } from './completionItemProvider';
import { renameInclude } from './renameProvider';
import * as gscParser from './gscParser';

let renameTimeout: ReturnType<typeof setTimeout> | undefined;
const EVENT_DELAY = 300;
let oldPath: string | undefined = undefined;
let newPath: string | undefined = undefined;

let addTimeout: ReturnType<typeof setTimeout> | undefined;
let addedFiles: string[] = [];
let allIncludes: string[] = [];

export function addInclude(filePath: string) {
    const include = gscParser.pathToInclude(filePath, false);
    allIncludes.push(include.toLowerCase());
    addIncludeCompletion(include);
}

export function removeInclude(filePath: string) {
    const include = gscParser.pathToInclude(filePath);
    allIncludes = allIncludes.filter(i => i !== include);
    gscParser.deleteGscDocument(include);
    removeIncludeCompletion(include);
}

export function getAllIncludes() {
    return allIncludes;
}

export async function onRenameFile(event: vscode.FileRenameEvent) {
    oldPath = event.files[0].oldUri.fsPath;
    newPath = event.files[0].newUri.fsPath;
    console.log(`IW5-GSC-Syntax: Directory renamed from ${oldPath} to ${newPath}`);
}

export class ScriptsWatcher {
    private watcher: chokidar.FSWatcher | undefined;
    private filesLoaded: boolean = false;
    private context: vscode.ExtensionContext;

    constructor(context: vscode.ExtensionContext) {
        this.context = context;
    }

    public startWatching() {
        this.watcher = chokidar.watch(gscParser.PLUTONIUM_FOLDER, {
            persistent: true,
            usePolling: true,
            interval: 50,
            binaryInterval: 50
        });
        this.watcher
            .on('add', (path) => this.handleFileEvent(path, 'add'))
            .on('change', (path) => this.handleFileEvent(path, 'change'))
            .on('unlink', (path) => this.handleFileEvent(path, 'unlink'));
    }

    private handleFileEvent(filePath: string, event: string) {
        if (!filePath.endsWith('.gsc')) return;

        if (event === 'add') {
            addInclude(filePath);
            if (!this.filesLoaded) {
                addedFiles.push(filePath);
                if (addTimeout) clearTimeout(addTimeout);
                addTimeout = setTimeout(async () => {
                    await this.handleAllFilesAdded();
                }, EVENT_DELAY);
            }
            else {
                const include = gscParser.pathToInclude(filePath, false);
                gscParser.createGscDocument(filePath, include);
            }
        } else if (event === 'unlink') {
            console.log("IW5-GSC-Syntax: File removed:", filePath);
            removeInclude(filePath);
        }

        if (renameTimeout) clearTimeout(renameTimeout);

        renameTimeout = setTimeout(() => {
            if (oldPath && newPath) {
                console.log("IW5-GSC-Syntax: All files processed after watcher events, ready to rename includes");
                renameInclude(oldPath, newPath);
                oldPath = undefined;
                newPath = undefined;
            }
        }, EVENT_DELAY);
    }

    private async handleAllFilesAdded() {
        if (addedFiles.length > 0) {
            this.filesLoaded = true;

            console.log("IW5-GSC-Syntax: All files added, processing additional logic");

            await vscode.window.withProgress({
                location: vscode.ProgressLocation.Notification,
                title: "Parsing GSC Files...",
                cancellable: false
            }, async (progress, token) => {
                const includes = getAllIncludes();
                const totalIncludes = includes.length;
                let completed = 0;
        
                for (const include of includes) {
                    await gscParser.createGscDocument(gscParser.includeToPath(include), include);
                    completed++;
                    progress.report({ increment: (completed / totalIncludes) * 100, message: `Processing ${completed}/${totalIncludes}` });
                }
            });

            const onEditDocument = vscode.workspace.onDidChangeTextDocument(event => {
                if (event.document.languageId === 'gsc') {
                    gscParser.updateGscDocument(event.document, gscParser.documentToInclude(event.document));
                }
            });

            const onChangeFileDisplay = vscode.window.onDidChangeVisibleTextEditors(editors => {
                editors.forEach(editor => { 
                    const document = editor.document;
                    if (document.languageId === 'gsc') {
                        gscParser.updateGscDocument(document, gscParser.documentToInclude(document));
                    }
                });
            });

            this.context.subscriptions.push(onEditDocument, onChangeFileDisplay);
            addedFiles = [];
            addTimeout = undefined;
        }
    }

    public stopWatching() {
        this.watcher?.close();
    }
}
