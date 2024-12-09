import * as vscode from 'vscode';
import * as gscParser from './gscParser';

export class HoverProvider implements vscode.HoverProvider {
    async provideHover(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): Promise<vscode.Hover | undefined> {
            return new Promise<vscode.Hover | undefined>(async (resolve, reject) => {
                const currentGscDocument = gscParser.getCurrentGscDocument();
                if (!currentGscDocument) {
                    resolve(undefined);
                    return;
                }
                
                if (currentGscDocument.isCommentsAtPosition(position)) {
                    resolve(undefined);
                    return;
                }
                
                const wordRange = document.getWordRangeAtPosition(position);
                const word = document.getText(wordRange).toLowerCase();

                if (!word) {
                    resolve(undefined);
                    return;
                }

                const tryGetFunc = gscParser.tryGetFuncInclude(document, wordRange, word);
                if (tryGetFunc) {
                    if (tryGetFunc.type === gscParser.funcType.pathCall || tryGetFunc.type === gscParser.funcType.pathPointer) {
                        const gscDocument = gscParser.gscDocuments.get(tryGetFunc.include);
					    if (gscDocument) resolve(gscDocument.getFuncHover(word, true));
                        else resolve(undefined);
                        return;
                    }
                    resolve(currentGscDocument.getFuncHover(word));
                    return;
                }

                resolve(currentGscDocument.getHover(word, position));
                return;
        });
    }
}
