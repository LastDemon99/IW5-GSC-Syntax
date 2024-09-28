import * as chokidar from 'chokidar';
import * as utility from './utility';
import { addIncludeCompletion, removeIncludeCompletion } from './completionItemProvider';
import { addInclude, removeInclude } from './renameProvider';

export class ScriptsWatcher {
    private watcher: chokidar.FSWatcher | undefined;

    public startWatching() {
        this.watcher = chokidar.watch(utility.SCRIPTS_FOLDER, { persistent: true });
        this.watcher
            .on('add', (path) => this.handleFileEvent(path, 'add'))
            .on('change', (path) => this.handleFileEvent(path, 'change'))
            .on('unlink', (path) => this.handleFileEvent(path, 'unlink'));
    }

    private handleFileEvent(filePath: string, event: string) {
        if (!utility.isGSCFile(filePath)) return;
        if (event === 'add') {
            addIncludeCompletion(filePath);
            addInclude(filePath);
        }
        else if (event == "unlink") {
            removeIncludeCompletion(filePath);
            removeInclude(filePath);
        }
    }

    public stopWatching() {
        this.watcher?.close();
    }
}
