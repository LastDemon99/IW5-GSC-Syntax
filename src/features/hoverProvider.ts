import * as vscode from 'vscode';
import * as utility from './utility';

export class HoverProvider implements vscode.HoverProvider {
    async provideHover(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): Promise<vscode.Hover | null> {
            return new Promise<vscode.Hover | null>(async (resolve, reject) => {
                const range = document.getWordRangeAtPosition(position);
                const word = document.getText(range);

                if (!word || word === "") resolve(null);

                const text = utility.getDocumentText(document);
                if (utility.isCommentAtPosition(text, document, position)) resolve(null);

                // Search declaration in call include path
                const includeCall = utility.tryGetFuncIncludeCall(word, text, document, position);
                if (includeCall) {
                    const includeDocument = await vscode.workspace.openTextDocument(utility.includeToUri(includeCall));
                    const funcHover = getFunctionHover(includeDocument.getText(), word);
                    if (funcHover) {
                        resolve(funcHover);
                        return;
                    }
                }

                // Search declaration in current file
                const funcHover = getFunctionHover(text, word);
                if (funcHover) {
                    resolve(funcHover);
                    return;
                }

                // search declaration in all includes path
                const includes = utility.getIncludes(text);
                for (const include of includes) {
                    const includeDocument = await vscode.workspace.openTextDocument(utility.includeToUri(include));
                    const funcHover = getFunctionHover(includeDocument.getText(), word);
                    if (funcHover) {
                        resolve(funcHover);
                        return;
                    }
                }

                resolve(null);
        });
    }
}

function getFunctionHover(text: string, funcName: string): vscode.Hover | null {
    const lines = text.split('\n');
    let match: RegExpExecArray | null;

    const functionPattern = new RegExp(`^${funcName}\\s*\\([^\\)]*\\)\\s*(//.*)?\\s*\\{`, 'gmi');
    while ((match = functionPattern.exec(text)) !== null) {
        const lineIndex = text.substring(0, match.index).split('\n').length - 1;
        let docString = '';

        for (let i = lineIndex - 1; i >= Math.max(0, lineIndex - 6); i--) {
            const line = lines[i].trim().toLowerCase();
            if (line.startsWith('///docstringbegin')) {
                for (let j = i + 1; j < lines.length && !lines[j].trim().startsWith('///docstringend'); j++) {
                    docString += lines[j].trim() + '\n';
                }
                break;
            }
        }

        if (docString) {
            const markdownString = new vscode.MarkdownString();
            const docLines = docString.split('\n');
            const detailLine = docLines.find(line => line.startsWith('detail:'));
            const summaryLine = docLines.find(line => line.startsWith('summary:'));

            if (detailLine) {
                markdownString.appendCodeblock(detailLine.replace('detail:', ''), 'typescript');
                markdownString.isTrusted = true;
            }
            if (summaryLine) {
                markdownString.appendMarkdown(summaryLine.replace('summary:', ''));
                markdownString.isTrusted = true;
            }

            if (markdownString.isTrusted)
                return new vscode.Hover(markdownString);
        }
    }
    return null;
}
