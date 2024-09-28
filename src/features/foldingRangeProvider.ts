import * as vscode from 'vscode';

export class FoldingRangeProvider implements vscode.FoldingRangeProvider {
    provideFoldingRanges(document: vscode.TextDocument, context: vscode.FoldingContext, token: vscode.CancellationToken): vscode.ProviderResult<vscode.FoldingRange[]> {
        const foldingRanges: vscode.FoldingRange[] = [];
        const startPattern = /^\/\/#region\b(.*)/;
        const endPattern = /^\/\/#endregion\b/;

        let startLine: number | null = null;
        for (let i = 0; i < document.lineCount; i++) {
            const line = document.lineAt(i).text.trim().toLowerCase();
            if (startPattern.test(line)) startLine = i;
            else if (startLine !== null && endPattern.test(line)) {
                foldingRanges.push(new vscode.FoldingRange(startLine, i));
            }
        }
        return foldingRanges;
    }
}
