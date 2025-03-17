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
        const PATTERN = /^\s*(\w+)\s*\(([^)]*)\)\s*(\/\/.*?)?\s*(?=\s*\{)/gm;
        while ((match = PATTERN.exec(text)) !== null) {
            // Calcula el índice exacto del keyword dentro del match
            const keywordIndex = match.index + match[0].indexOf(match[1]);
            const startPosition = document.positionAt(keywordIndex);
        
            // Busca la llave de apertura real, permitiendo espacios o saltos de línea
            const openBraceIndex = text.indexOf('{', match.index + match[0].length);
            let braceCount = 1;
            let lineIndex = openBraceIndex + 1;
            
            while (braceCount > 0 && lineIndex < text.length) {
                const char = text[lineIndex];
                if (char === '{') braceCount++;
                else if (char === '}') braceCount--;
                lineIndex++;
            }
            foldingRanges.push(new vscode.FoldingRange(
                startPosition.line,
                document.positionAt(lineIndex).line
            ));
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
