import * as chokidar from 'chokidar';
import * as utility from './utility';
import { addIncludeCompletion, removeIncludeCompletion } from './completionItemProvider';
import { addInclude, removeInclude, renameInclude } from './renameProvider';
import { FileRenameEvent } from 'vscode';

let renameTimeout: ReturnType<typeof setTimeout> | undefined;
const RENAME_DELAY = 500;
let oldPath: string | undefined = undefined;
let newPath: string | undefined = undefined;

export async function onRenameFile(event: FileRenameEvent) {
    oldPath = event.files[0].oldUri.fsPath;
    newPath = event.files[0].newUri.fsPath;
    console.log(`Directory renamed from ${oldPath} to ${newPath}`);
}

export class ScriptsWatcher {
    private watcher: chokidar.FSWatcher | undefined;

    public startWatching() {
        this.watcher = chokidar.watch(utility.PLUTONIUM_FOLDER, { 
            persistent: true,
            usePolling: true,
            interval: 100,
            binaryInterval: 300
        });
        this.watcher
            .on('add', (path) => this.handleFileEvent(path, 'add'))
            .on('change', (path) => this.handleFileEvent(path, 'change'))
            .on('unlink', (path) => this.handleFileEvent(path, 'unlink'));
    }

    private handleFileEvent(filePath: string, event: string) {
        if (!utility.isGSCFile(filePath)) return;

        if (event === 'add') {
            console.log("File added:", filePath);
            addIncludeCompletion(filePath);
            addInclude(filePath);
        } else if (event === 'unlink') {
            console.log("File removed:", filePath);
            removeIncludeCompletion(filePath);
            removeInclude(filePath);
        }

        if (renameTimeout) {
            clearTimeout(renameTimeout);
        }

        renameTimeout = setTimeout(() => {
            if (oldPath && newPath) {
                console.log("All files processed after watcher events, ready to rename includes");
                renameInclude(oldPath, newPath);
                oldPath = undefined;
                newPath = undefined;
            }
        }, RENAME_DELAY);
    }

    public stopWatching() {
        this.watcher?.close();
    }
}
