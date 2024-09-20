import * as vscode from 'vscode';
import * as utility from './utility';

export class DefinitionProvider implements vscode.DefinitionProvider {
    constructor() {
    }

    async provideDefinition(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): Promise<vscode.Definition | null> {
        const wordRange = document.getWordRangeAtPosition(position);
        const word = document.getText(wordRange);

        if (!word || word === "") {
            return null;
        }

        const line = document.lineAt(position.line).text;
        const functionPattern = new RegExp(`(?:([a-zA-Z0-9_\\\\]+::))?(${word})\\(`, 'g');

        let match;
        let isFunction = false;
        while ((match = functionPattern.exec(line)) !== null) {
            const matchPrefix = match[1];
            const matchWord = match[2];
            const start = match.index + (matchPrefix ? matchPrefix.length : 0);
            const end = start + matchWord.length;
            const matchRange = new vscode.Range(new vscode.Position(position.line, start), new vscode.Position(position.line, end));
            if (matchRange.contains(position)) isFunction = true;
        }

        if (!isFunction) return null;

        const text = document.getText();        
        const lineStart = text.indexOf(line);
        const lineEnd = lineStart + document.lineCount;

        const commentIndex = line.indexOf('//');
        let isComment = commentIndex !== -1 && commentIndex < lineStart;
        if (!isComment) isComment = utility.commentBlocksRange(text).some(range => lineEnd > range.start && lineStart < range.end)
        if (isComment) return null;

        const funcDeclaration = await getFunctionLocation(word, text, document, token);
        if (funcDeclaration) return funcDeclaration;
        
        const callFromInclude = utility.getIncludeCallFunction(word, text, document, position);
        if (!callFromInclude) {
            const includes = utility.getIncludes(document);
            for (const include of includes) {
                const includeDocument = await vscode.workspace.openTextDocument(utility.includePathToUri(include));
                const declaration = await getFunctionLocation(word, includeDocument.getText(), includeDocument, token);
                if (declaration) return declaration;
            }
        }
        else {
            const includeDocument = await vscode.workspace.openTextDocument(utility.includePathToUri(callFromInclude.split('::')[0]));
            const declaration = await getFunctionLocation(word, includeDocument.getText(), includeDocument, token);
            if (declaration) return declaration;
        }
        return null;
    }
}

async function getFunctionLocation(word: string, text: string, document: vscode.TextDocument, token: vscode.CancellationToken): Promise<vscode.Location | null> {
    if (token.isCancellationRequested) return null;
    const functionPattern = new RegExp(`^${word}\\s*\\(.*\\)\\s*\\{`, 'gm');
    let match: RegExpExecArray | null;
    while ((match = functionPattern.exec(text)) !== null) {
        const startPosition = document.positionAt(match.index);
        return new vscode.Location(document.uri, startPosition);
    }
    return null;
}
