import * as chokidar from 'chokidar';
import { join, extname, relative } from 'path';
import { CompletionItem, CompletionItemKind, TextDocument } from 'vscode';
import { readFile } from 'fs';
import { Position} from 'vscode';

const PLUTONIUM_FOLDER = join(process.env.LOCALAPPDATA || '', 'Plutonium', 'storage', 'iw5');
const SCRIPTS_FOLDER = join(PLUTONIUM_FOLDER, 'scripts');
const GSC_EXTENSION = '.gsc';

interface FunctionData {
    name: string;
    position: Position;
    completion: CompletionItem;
    path: string;
}

export class ScriptsWatcher {
    private static instance: ScriptsWatcher;
    private watcher: chokidar.FSWatcher | undefined;
    private includedFiles: Record<string, FunctionData[]> = {};
    private pathCompletion: CompletionItem[] = [];

    private constructor() {
        this.startWatching();
    }

    public static getInstance(): ScriptsWatcher {
        if (!ScriptsWatcher.instance) {
            ScriptsWatcher.instance = new ScriptsWatcher();
        }
        return ScriptsWatcher.instance;
    }

    private startWatching() {
        this.watcher = chokidar.watch(SCRIPTS_FOLDER, { persistent: true });
        this.watcher
            .on('add', (path) => this.handleFileEvent(path, 'add'))
            .on('change', (path) => this.handleFileEvent(path, 'change'))
            .on('unlink', (path) => this.handleFileEvent(path, 'unlink'));
    }

    public stopWatching() {
        this.watcher?.close();
    }

    public getPathCompletion(): CompletionItem[] {
        return this.pathCompletion;
    }

    public getFunctionsCompletion(): CompletionItem[] {
        const completions: CompletionItem[] = [];
        Object.values(this.includedFiles).forEach(funcsData => {
            funcsData.forEach(funcData => {
                completions.push(funcData.completion)
            });
        });
        return completions
    }

    public getDefinitionData(): Record<string, FunctionData> {
        const data: Record<string, FunctionData> = {};
        for (const key in this.includedFiles) {
            if (this.includedFiles.hasOwnProperty(key)) {
                const funcsData = this.includedFiles[key];
                funcsData.forEach(funcData => {
                    data[funcData.name] = funcData;
                });
            }
        }
        return data;
    }

    private async handleFileEvent(filePath: string, event: string) {
        if (extname(filePath) !== GSC_EXTENSION) return;

        const relativePath = 'scripts\\' + relative(SCRIPTS_FOLDER, filePath).replace(GSC_EXTENSION, ';');

        if (event === 'add') {
            this.pathCompletion.push(new CompletionItem(relativePath, CompletionItemKind.File));
        } else if (event === 'unlink') {
            this.pathCompletion = this.pathCompletion.filter(item => item.label !== relativePath);
        }
    }

    public async updateData(document: TextDocument) {
        const currentIncludes: string[] = [];
        const text = document.getText();
        const commentRanges = CommentBlocksRange(text);
        const lines = text.split('\n');
        
        for (let i = 0; i < lines.length; i++) {
            const lineStart = text.indexOf(lines[i]);
            const lineEnd = lineStart + lines[i].length;            
            let inComment = false;

            for (const range of commentRanges) {
                if (lineEnd > range.start && lineStart < range.end) {
                    inComment = true;
                    break;
                }
            }

            if (!inComment) {
                const line = document.lineAt(i).text;
                const match = line.match(/^\s*#include\s+([^;]+)/);
                if (!match) continue;

                const path = match[1].trim();
                currentIncludes.push(path);
                if (!this.includedFiles[path])
                    this.setFunctionData(path);
            }
        }

        for (const key in this.includedFiles) {
            if (!currentIncludes.includes(key)) {
                delete this.includedFiles[key];
            }
        }
    }

    private setFunctionData(path: string) {
        const functionsData: FunctionData[] = [];
        const fullPath = join(PLUTONIUM_FOLDER, path) + GSC_EXTENSION;
        readFile(fullPath, 'utf8', (err, data) => {
            if (err) return;
            const functionPattern = /^\s*(\w+)\s*\(([^)]*)\)/gm;
            let match;
            
            while ((match = functionPattern.exec(data)) !== null) {
                const lines = data.substring(0, match.index).split('\n');
                const line = lines.length - 1;
                const character = lines[lines.length - 1].length;
                const func_name = match[1];

                const funcData: FunctionData = {
                    name: func_name,
                    position: new Position(line, character),
                    completion: new CompletionItem(func_name, CompletionItemKind.Function),
                    path: fullPath
                };
                functionsData.push(funcData);
            }
            this.includedFiles[path] = functionsData;
        });
    }
}

function CommentBlocksRange(text: string): { start: number, end: number }[] {
    const commentBlocks = /\/\*[\s\S]*?\*\//g;
    let match;
    const ranges: { start: number, end: number }[] = [];
    while ((match = commentBlocks.exec(text)) !== null) {
        ranges.push({
            start: match.index,
            end: match.index + match[0].length
        });
    }
    return ranges;
}
