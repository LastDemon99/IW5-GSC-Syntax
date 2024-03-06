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
        const lines = document.getText().split("\n");

        const find_var = /\b([a-zA-Z_]\w*)\b(?=\s*([-+*/%])?=)/g;
        let inFunction = false;
        let variables = new Array<RegExp>();

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            if (line.startsWith("{"))  inFunction = true;
            if (inFunction) 
            {
                if (line.startsWith("}")) 
                {
                    variables = new Array<RegExp>();
                    inFunction = false;
                }
                else this.processFunctionBlock(builder, line, i, variables, find_var);
            }
        }
        
        return builder.build();
    }

    private processFunctionBlock(builder: vscode.SemanticTokensBuilder, line: string, lineIndex: number, variables: Array<RegExp>, regex: RegExp) {        
        let match;
        
        variables.forEach((regex_var) => {
            if ((match = regex_var.exec(line)) !== null)
                builder.push(lineIndex, match.index, (match[1]).length, this.getTokenTypeIndex('variable'), this.getTokenModifiers(['usage']));
        });
        
        while ((match = regex.exec(line)) !== null) {
            const variableName = match[1];
            variables.push(new RegExp(`(?<!")\\b(${variableName})\\b(?!")`, 'g'));
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