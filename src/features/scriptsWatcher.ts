import * as chokidar from 'chokidar';
import * as vscode from 'vscode';
import { renameInclude } from './renameProvider';
import { pathToInclude, documentToInclude, PLUTONIUM_FOLDER, GSC_MP_FOLDER } from '../utility';
import { gscDocuments, createGscDocument, deleteGscDocument } from '../parser/documents';
import { join, relative } from 'path';

let renameTimeout: ReturnType<typeof setTimeout> | undefined;
const EVENT_DELAY = 300;
let oldPath: string | undefined = undefined;
let newPath: string | undefined = undefined;

let addTimeout: ReturnType<typeof setTimeout> | undefined;
let filesAdded: string[] = [];

let allFilesAdded: boolean = false;
export let filesParsed: boolean = false;

export async function onRenameFile(event: vscode.FileRenameEvent) {
    oldPath = event.files[0].oldUri.fsPath;
    newPath = event.files[0].newUri.fsPath;
    console.log(`IW5-GSC-Syntax: Directory renamed from ${oldPath} to ${newPath}`);
}

export class ScriptsWatcher {
    private watcher: chokidar.FSWatcher | undefined;
    private context: vscode.ExtensionContext;

    constructor(context: vscode.ExtensionContext) {
        this.context = context;
    }

    public startWatching() {
        this.watcher = chokidar.watch([PLUTONIUM_FOLDER, GSC_MP_FOLDER], {
            persistent: true,
            usePolling: true,
            interval: 150,
            binaryInterval: 150
        });
        this.watcher
            .on('add', (path) => this.handleFileEvent(path, 'add'))
            .on('change', (path) => this.handleFileEvent(path, 'change'))
            .on('unlink', (path) => this.handleFileEvent(path, 'unlink'));
    }

    private handleFileEvent(filePath: string, event: string) {
        if (!filePath.endsWith('.gsc')) return;
        if (event === 'add') {
            if (!allFilesAdded) {
                filesAdded.push(filePath);
                filesAdded = filesAdded.sort((a, b) => {
                    const aIsStock = a.startsWith(GSC_MP_FOLDER);
                    const bIsStock = b.startsWith(GSC_MP_FOLDER);
                    if (aIsStock && !bIsStock) return -1;
                    if (!aIsStock && bIsStock) return 1;
                    return 0;
                });
                if (addTimeout) clearTimeout(addTimeout);
                addTimeout = setTimeout(async () => {
                    await this.handleAllFilesAdded();
                }, EVENT_DELAY);
            }
            else async () => { await createGscDocument(filePath); }
        } 
        else if (event === 'unlink') deleteGscDocument(pathToInclude(filePath, false));

        if (renameTimeout) clearTimeout(renameTimeout);

        renameTimeout = setTimeout(() => {
            if (oldPath && newPath) {
                renameInclude(oldPath, newPath);
                oldPath = undefined;
                newPath = undefined;
            }
        }, EVENT_DELAY);
    }

    private async handleAllFilesAdded() {
        if (filesAdded.length > 0) {
            allFilesAdded = true;

            console.log("IW5-GSC-Syntax: All files added, parsing files", filesAdded.length);

            await vscode.window.withProgress({
                location: vscode.ProgressLocation.Notification,
                title: "Parsing GSC Files...",
                cancellable: false
            }, async (progress, token) => {
                const filesAddedUpdated = [];
                for (const filePath of filesAdded) {
                    if (filePath.startsWith(GSC_MP_FOLDER) && filesAdded.includes(join(PLUTONIUM_FOLDER, relative(GSC_MP_FOLDER, filePath)))) continue;
                    filesAddedUpdated.push(filePath);
                }
                filesAdded = filesAddedUpdated;
                const totalIncludes = filesAdded.length;
                let completed = 0;        
                for (const filePath of filesAdded) {
                    if (filePath.startsWith(GSC_MP_FOLDER) && filesAdded.includes(join(PLUTONIUM_FOLDER, relative(GSC_MP_FOLDER, filePath)))) continue;
                    await createGscDocument(filePath);
                    completed++;
                    progress.report({ increment: (completed / totalIncludes) * 100, message: `Processing ${completed}/${totalIncludes}` });
                }
            });

            console.log("IW5-GSC-Syntax: All files parsed", filesAdded.length);
            filesParsed = true;

            const onEditDocument = vscode.workspace.onDidChangeTextDocument(event => {
                if (event.document.languageId === 'gsc') {
                    gscDocuments.parse(documentToInclude(event.document), event.document);
                }
            });

            const onChangeFileDisplay = vscode.window.onDidChangeVisibleTextEditors(editors => {
                editors.forEach(editor => { 
                    const document = editor.document;
                    if (document.languageId === 'gsc') {
                        gscDocuments.parse(documentToInclude(document), document);
                    }
                });
            });

            this.context.subscriptions.push(onEditDocument, onChangeFileDisplay);
            filesAdded = [];
            addTimeout = undefined;
        }
    }

    public stopWatching() {
        this.watcher?.close();
    }
}
