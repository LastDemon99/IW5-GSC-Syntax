import * as vscode from 'vscode';

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

        const text = document.getText();
        let match;

        // function fold ({ ... })
        const FUNC_PATTERN = /^(?!\b(?:if|for|foreach|while|switch)\b)(\w+)\s*\(([^)]*)\)\s*(\/\/.*?)?\s*(?=\{)/gm;
        while ((match = FUNC_PATTERN.exec(text)) !== null) {
            let braceCount = 1;
            let lineIndex = match.index + match[0].length + 1;
            const funcPosition = document.positionAt(match.index);
            while (braceCount > 0 && lineIndex < text.length) {
                const char = text[lineIndex];        
                if (char === '{') braceCount++;
                else if (char === '}') braceCount--;
                lineIndex++;
            }
            foldingRanges.push(new vscode.FoldingRange(funcPosition.line, document.positionAt(lineIndex).line));
        }

        // multiline comment fold (/* ... */)
        const multilineCommentPattern = /\/\*[\s\S]*?\*\//g;
        while ((match = multilineCommentPattern.exec(text)) !== null) {
            const startLine = document.positionAt(match.index).line;
            const endLine = document.positionAt(match.index + match[0].length).line;
            if (endLine > startLine) {
                foldingRanges.push(new vscode.FoldingRange(startLine, endLine));
            }
        }

        return foldingRanges;
    }
}
