import * as vscode from 'vscode';

export class ColorProvider implements vscode.DocumentColorProvider {
    provideDocumentColors(document: vscode.TextDocument): vscode.ColorInformation[] {
        const colorInfos: vscode.ColorInformation[] = [];
        
        const text = document.getText();
        const regex = /\bcolor\.picker\b/g;
        let match;

        while ((match = regex.exec(text)) !== null) {
            const range = new vscode.Range(
                document.positionAt(match.index),
                document.positionAt(match.index + match[0].length)
            );
            colorInfos.push(new vscode.ColorInformation(range, new vscode.Color(0, 0, 0, 1)));
        }

        return colorInfos;
    }

    provideColorPresentations(color: vscode.Color): vscode.ColorPresentation[] {
        const red = Math.round(color.red * 255);
        const green = Math.round(color.green * 255);
        const blue = Math.round(color.blue * 255);
        const hex = `(${red}, ${green}, ${blue})`;
        return [new vscode.ColorPresentation(hex)];
    }
}

const colorDecorations: { [key: string]: vscode.TextEditorDecorationType } = {
    '^1': vscode.window.createTextEditorDecorationType({ color: '#BF4040' }),
    '^2': vscode.window.createTextEditorDecorationType({ color: '#40BF40' }),
    '^3': vscode.window.createTextEditorDecorationType({ color: '#FFFF00' }),
    '^4': vscode.window.createTextEditorDecorationType({ color: '#4040BF' }),
    '^5': vscode.window.createTextEditorDecorationType({ color: '#87CEFA' }),
    '^6': vscode.window.createTextEditorDecorationType({ color: '#800080' }),
    '^7': vscode.window.createTextEditorDecorationType({ color: '#FFFFFF' }),
    '^8': vscode.window.createTextEditorDecorationType({ color: '#BD815C' }),
    '^9': vscode.window.createTextEditorDecorationType({ color: '#808080' }),
    '^0': vscode.window.createTextEditorDecorationType({ color: '#000000' }),
    '^;': vscode.window.createTextEditorDecorationType({ color: '#0F4D92' }),
    '^:': vscode.window.createTextEditorDecorationType({ color: '#FFA500' })
};

export function setColorDecoration(editor: vscode.TextEditor) {
    const colorRegex = /(\^([0-9;:]))((?:(?!\^\d|^;$|^:)[^"]|"[^"]*")*)/g;
    const decorationsMap: { [key: string]: vscode.DecorationOptions[] } = {};

    Object.keys(colorDecorations).forEach(symbol => {
        editor.setDecorations(colorDecorations[symbol], []);
        decorationsMap[symbol] = [];
    });

    for (let i = 0; i < editor.document.lineCount; i++) {
        const line = editor.document.lineAt(i);
        let match: RegExpExecArray | null;

        while ((match = colorRegex.exec(line.text)) !== null) {
            const symbol = match[1];
            const text = match[3]?.replace(/(^"|"$)/g, '');

            if (text && colorDecorations[symbol]) {
                const startPos = new vscode.Position(i, match.index);
                const endPos = new vscode.Position(i, match.index + symbol.length + text.length);
                const decoration = { range: new vscode.Range(startPos, endPos) };
                decorationsMap[symbol].push(decoration);
            }
        }
    }
    
    Object.entries(decorationsMap).forEach(([symbol, decorations]) => {
        if (decorations.length > 0) {
            editor.setDecorations(colorDecorations[symbol], decorations);
        }
    });
}
