import { Location, Hover, CompletionItem, CompletionItemKind, TextDocument, Range, Position, MarkdownString } from 'vscode';
import { GSC_Token } from '../utility';

export const MACRO_FUNCTION_PATTERN = /^\s*#define\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*\(([^\)]*)\)\s+(.*)$/i;
export const MACRO_KEY_VALUE_PATTERN = /^\s*#define\s+([a-zA-Z_][a-zA-Z0-9_]*)\s+(.*)$/i;
export const UNDEF_PATTERN = /^\s*#undef\s*\b([a-zA-Z_][a-zA-Z0-9_]*)/i;

export class GSC_Macros extends GSC_Token {
    public parse(line: string, lineNumber: number, document: TextDocument) {
        let match;
        if ((match = MACRO_FUNCTION_PATTERN.exec(line)) || (match = MACRO_KEY_VALUE_PATTERN.exec(line))) {
            const macroName = match[1];
            const macroNameLower = macroName.toLocaleLowerCase();
            const startIndex = match.index + match[0].indexOf(match[1]);
            const endIndex = startIndex + match[1].length;
            const macroRange = new Range(new Position(lineNumber, startIndex), new Position(lineNumber, endIndex));

            if (!this.definitions.has(macroNameLower)) {
                const markdownString = new MarkdownString();
                markdownString.appendCodeblock(line, 'gsc');
                this.pushCompletion(macroName, markdownString);
                this.definitions.set(macroNameLower, {location: new Location(document.uri, macroRange.start), hover: new Hover(markdownString), ranges: [macroRange]});
            }
        }

        if ((match = UNDEF_PATTERN.exec(line))) {
            const defineNameLower = match[1].toLocaleLowerCase();
            if (this.definitions.has(defineNameLower)) this.definitions.delete(defineNameLower);
        }
    }

    private pushCompletion(macroName: string, macroMarkdown: MarkdownString) {
        const completion = new CompletionItem(macroName, CompletionItemKind.Constant);
        completion.documentation = macroMarkdown;
        this.completions.push(completion);
    }
}
