import * as vscode from 'vscode';
import { FUNCTION_PATTERN } from './utility';

export class FoldingRangeProvider implements vscode.FoldingRangeProvider {
    provideFoldingRanges(document: vscode.TextDocument, context: vscode.FoldingContext, token: vscode.CancellationToken): vscode.ProviderResult<vscode.FoldingRange[]> {
        const foldingRanges: vscode.FoldingRange[] = [];
        
        // region fold (//#region ... //#endregion)
        const startPattern = /^\/\/#region\b(.*)/;
        const endPattern = /^\/\/#endregion\b/;
        let startLine: number | null = null;
        for (let i = 0; i < document.lineCount; i++) {
            const line = document.lineAt(i).text.trim().toLowerCase();
            if (startPattern.test(line)) {
                startLine = i;
            } else if (startLine !== null && endPattern.test(line)) {
                foldingRanges.push(new vscode.FoldingRange(startLine, i));
                startLine = null;
            }
        }

        // function fold ({ ... })
        const text = document.getText();
        let match;
        while ((match = FUNCTION_PATTERN.exec(text)) !== null) {
            let openBraces = 1;
            let index = match.index + match[0].length;
            const startLine = text.substring(0, match.index).split('\n').length - 1;
            while (openBraces > 0 && index < text.length) {
                if (text[index] === '{') openBraces++;
                else if (text[index] === '}') openBraces--;
                index++;
            }
            const endLine = text.substring(0, index).split('\n').length - 2;
            foldingRanges.push(new vscode.FoldingRange(startLine, endLine));
        }

        // multiline comment fold (/* ... */)
        const multilineCommentPattern = /\/\*[\s\S]*?\*\//g;
        while ((match = multilineCommentPattern.exec(text)) !== null) {
            const startLine = text.substring(0, match.index).split('\n').length - 1;
            const endLine = text.substring(0, match.index + match[0].length).split('\n').length - 1;
            if (endLine > startLine) {
                foldingRanges.push(new vscode.FoldingRange(startLine, endLine));
            }
        }

        return foldingRanges;
    }
}
