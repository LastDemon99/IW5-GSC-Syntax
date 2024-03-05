import * as vscode from 'vscode';

const tokenTypes = new Map<string, number>();
const tokenModifiers = new Map<string, number>();

const tokenTypesLegend = ['variable'];
const tokenModifiersLegend = ['declaration', 'usage'];

tokenTypesLegend.forEach((tokenType, index) => tokenTypes.set(tokenType, index));
tokenModifiersLegend.forEach((tokenModifier, index) => tokenModifiers.set(tokenModifier, index));

export const legend = new vscode.SemanticTokensLegend(tokenTypesLegend, tokenModifiersLegend);

export class semanticTokensProvider implements vscode.DocumentSemanticTokensProvider {
    provideDocumentSemanticTokens(document: vscode.TextDocument): vscode.ProviderResult<vscode.SemanticTokens> {
        const builder = new vscode.SemanticTokensBuilder(legend);
        var variables = new Array<string>();
        
        for (let lineNumber = 0; lineNumber < document.lineCount; lineNumber++) {
            const line = document.lineAt(lineNumber);
            const text = line.text;

            variables.forEach((var_declaration) => {
                const regex = new RegExp(`(?<!")\\b(${var_declaration})\\b(?!")`, 'g');
                let match;
                if ((match = regex.exec(text)) !== null)
                {
                    const variableName = match[1];
                    builder.push(lineNumber, match.index, variableName.length, this.getTokenTypeIndex('variable'), this.getTokenModifiers(['usage']));
                }
            });

            const var_declaration = /\b([a-zA-Z_]\w*)\b(?=\s*([-+*/%])?=)/g;
            let match;
            while ((match = var_declaration.exec(text)) !== null) {
                const variableName = match[1];
                variables.push(variableName);
                builder.push(lineNumber, match.index, variableName.length, this.getTokenTypeIndex('variable'), this.getTokenModifiers(['declaration']));
            }
        }

        return builder.build();
    }

    private getTokenTypeIndex(tokenType: string): number {
        return tokenTypes.get(tokenType) ?? -1;
    }

    private getTokenModifiers(tokenModifiers: string[]): number {
        let result = 0;
        for (const modifier of tokenModifiers) {
            const index = tokenModifiersLegend.indexOf(modifier);
            if (index !== -1) {
                result = result | (1 << index);
            }
        }
        return result;
    }
}