import * as vscode from 'vscode';

const tokenTypes = new Map<string, number>();
const tokenModifiers = new Map<string, number>();

const tokenTypesLegend = ['variable', 'function'];
const tokenModifiersLegend = ['declaration', 'usage'];

tokenTypesLegend.forEach((tokenType, index) => tokenTypes.set(tokenType, index));
tokenModifiersLegend.forEach((tokenModifier, index) => tokenModifiers.set(tokenModifier, index));

export const legend = new vscode.SemanticTokensLegend(tokenTypesLegend, tokenModifiersLegend);

export class semanticTokensProvider implements vscode.DocumentSemanticTokensProvider {
    provideDocumentSemanticTokens(document: vscode.TextDocument): vscode.ProviderResult<vscode.SemanticTokens> {
        const builder = new vscode.SemanticTokensBuilder(legend);

        let inFunction = false;
        var variables = new Array<string>();

        for (let i = 0; i < document.lineCount; i++) {
            const line = document.lineAt(i);
            const text = line.text;

            if (text.startsWith("{"))  inFunction = true;
            if (inFunction) 
            {
                if (text.startsWith("}")) 
                {
                    variables = new Array<string>();
                    inFunction = false;
                }
                else this.processFunctionBlock(builder, text, i, variables);
            }
        }
        
        return builder.build();
    }

    private processFunctionBlock(builder: vscode.SemanticTokensBuilder, line: string, lineIndex: number, variables: Array<string>) {        
        let match;
        
        variables.forEach((var_declaration) => {
            const regex = new RegExp(`(?<!")\\b(${var_declaration})\\b(?!")`, 'g');
            if ((match = regex.exec(line)) !== null)
                builder.push(lineIndex, match.index, (match[1]).length, this.getTokenTypeIndex('variable'), this.getTokenModifiers(['usage']));
        });

        let regex = /\b([a-zA-Z_]\w*)\b(?=\s*([-+*/%])?=)/g;
        while ((match = regex.exec(line)) !== null) {
            const variableName = match[1];
            variables.push(variableName);
            builder.push(lineIndex, match.index, variableName.length, this.getTokenTypeIndex('variable'), this.getTokenModifiers(['declaration']));
        }
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