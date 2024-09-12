import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';

export class definitionProvider implements vscode.DefinitionProvider {
    private libraryPath: string;
    private cache: Map<string, vscode.Location | null> = new Map();
    private fileTimestamps: Map<string, number> = new Map();
    private fileWatcher: vscode.FileSystemWatcher;

    constructor(libraryPath: string) {
        this.libraryPath = libraryPath;
        this.updateFileTimestamps();
        this.fileWatcher = vscode.workspace.createFileSystemWatcher(new vscode.RelativePattern(this.libraryPath, '**/*'));
        this.fileWatcher.onDidChange(() => this.checkForUpdates());
        this.fileWatcher.onDidCreate(() => this.checkForUpdates());
        this.fileWatcher.onDidDelete(() => this.checkForUpdates());
    }

    public provideDefinition(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): vscode.ProviderResult<vscode.Definition> {
        const wordRange = document.getWordRangeAtPosition(position);
        const word = document.getText(wordRange);

        const definition = this.findDefinitionInDocument(document, word);

        if (definition) {
            return new vscode.Location(document.uri, definition);
        }

        const libraryDefinition = this.findDefinitionInLibrary(word);
        if (libraryDefinition) {
            return libraryDefinition;
        }

        return null;
    }

    private findDefinitionInDocument(document: vscode.TextDocument, functionName: string): vscode.Position | null {
        const functionPattern = new RegExp(`^${functionName}\\s*\\(`);
        for (let i = 0; i < document.lineCount; i++) {
            const lineText = document.lineAt(i).text;

            if (functionPattern.test(lineText)) {
                return new vscode.Position(i, lineText.indexOf(functionName));
            }
        }

        return null;
    }

    private findDefinitionInLibrary(functionName: string): vscode.Location | null {
        if (this.cache.has(functionName)) {
            return this.cache.get(functionName) || null;
        }

        const result = this.searchDirectory(this.libraryPath, functionName);
        this.cache.set(functionName, result);

        return result;
    }

    private searchDirectory(dirPath: string, functionName: string): vscode.Location | null {
        const files = fs.readdirSync(dirPath);
        for (const file of files) {
            const filePath = path.join(dirPath, file);
            if (fs.lstatSync(filePath).isDirectory()) {
                const result = this.searchDirectory(filePath, functionName);
                if (result) {
                    return result;
                }
            } else if (fs.lstatSync(filePath).isFile() && path.extname(filePath) === '.gsc') {
                const content = fs.readFileSync(filePath, 'utf-8');
                const lines = content.split('\n');
                for (let i = 0; i < lines.length; i++) {
                    const lineText = lines[i];

                    const functionPattern = new RegExp(`^${functionName}\\s*\\(`);
                    if (functionPattern.test(lineText)) {
                        const uri = vscode.Uri.file(filePath);
                        return new vscode.Location(uri, new vscode.Position(i, lineText.indexOf(functionName)));
                    }
                }
            }
        }
        return null;
    }

    private updateFileTimestamps() {
        const updateFileTimestampsRecursively = (dirPath: string) => {
            const files = fs.readdirSync(dirPath);
            for (const file of files) {
                const filePath = path.join(dirPath, file);
                if (fs.lstatSync(filePath).isDirectory()) {
                    updateFileTimestampsRecursively(filePath);
                } else if (fs.lstatSync(filePath).isFile()) {
                    this.fileTimestamps.set(filePath, fs.statSync(filePath).mtimeMs);
                }
            }
        };
        updateFileTimestampsRecursively(this.libraryPath);
    }

    private checkForUpdates() {
        const checkUpdatesRecursively = (dirPath: string) => {
            const files = fs.readdirSync(dirPath);
            for (const file of files) {
                const filePath = path.join(dirPath, file);
                if (fs.lstatSync(filePath).isDirectory()) {
                    checkUpdatesRecursively(filePath);
                } else if (fs.lstatSync(filePath).isFile()) {
                    const currentTimestamp = fs.statSync(filePath).mtimeMs;
                    const cachedTimestamp = this.fileTimestamps.get(filePath);
                    if (cachedTimestamp === undefined || currentTimestamp > cachedTimestamp) {
                        this.cache.clear();
                        this.fileTimestamps.set(filePath, currentTimestamp);
                    }
                }
            }
        };
        checkUpdatesRecursively(this.libraryPath);
    }
}
