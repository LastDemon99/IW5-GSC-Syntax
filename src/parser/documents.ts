import { Location, Position, Range, TextDocument, CompletionItem, CompletionItemKind, workspace } from 'vscode';
import { GSC_Functions } from './functions';
import { GSC_Macros } from './macros';
import { GSC_Variables } from './variables';
import { getCommentRanges, pathToInclude } from '../utility';

export const INCLUDE_PATTERN = /^\s*#include\s+([a-zA-Z0-9_]+(?:\\[a-zA-Z0-9_]+)*)\s*;\s*$/i;

export class GSC_Documents {
    public locations: Map<string, Location> = new Map();
    public macros: Map<string, GSC_Macros> = new Map();
    public functions: Map<string, GSC_Functions> = new Map();
    public includes: Map<string, string[]> = new Map();
    public includesPointer: Map<string, string[]> = new Map();
    public commentRanges: Map<string, Range[]> = new Map();
    public defineCompletions: CompletionItem[] = [];
    public pointerCompletions: CompletionItem[] = [];

    public parse(include: string, document: TextDocument) {
        const text = document.getText();
        const commentRanges = getCommentRanges(text, document);
        const macros: GSC_Macros = new GSC_Macros();
        const functions: GSC_Functions = new GSC_Functions();
        const includes = [];

        if (!this.locations.has(include)) {
            this.defineCompletions.push(new CompletionItem(include + ";", CompletionItemKind.File));
            this.pointerCompletions.push(new CompletionItem(include + "::", CompletionItemKind.File));
        }

        this.commentRanges.set(include, commentRanges);

        let match = undefined;
        for (let lineNumber = 0; lineNumber < document.lineCount; lineNumber++) {
            const line = document.lineAt(lineNumber).text;
            const lineRange = new Range(new Position(lineNumber, 0), new Position(lineNumber, line.length));            
            
            if (this.isCommentsAtPosition(include, lineRange.start)) continue;
            
            macros.parse(line, lineNumber, document);

            if ((match = INCLUDE_PATTERN.exec(line))) includes.push(match[1].trim().toLocaleLowerCase());
        }

        this.includes.set(include, includes);
        this.macros.set(include, macros);
        functions.parse(document, commentRanges, text);
        this.functions.set(include, functions);
        this.locations.set(include, new Location(document.uri, new Position(0, 0)));
        this.includesPointer.set(include, functions.includesPointer);
        this.commentRanges.set(include, commentRanges);
    }

    public delete(include: string) {
        this.locations.delete(include);
        this.macros.delete(include);
        this.functions.delete(include);
        this.includes.delete(include);
        this.includesPointer.delete(include);
        this.commentRanges.delete(include);
        this.defineCompletions = this.defineCompletions.filter(i => i.label.toString().toLowerCase() != include + ";");
        this.pointerCompletions = this.pointerCompletions.filter(i => i.label.toString().toLowerCase() != include + "::");
    }

    public isCommentsAtPosition(include: string, position: Position): boolean {
        const isComment = this.commentRanges.get(include)?.some(range => range.contains(position));
        return isComment ? isComment : false;
    }

    public getVariables(include: string, position: Position): GSC_Variables | undefined {
        const functions = gscDocuments.functions.get(include);
        const funcName = functions?.getFuncByPosition(position);
        return funcName ? functions?.variables.get(funcName) : undefined;
    }
}

export const gscDocuments: GSC_Documents = new GSC_Documents();

export async function createGscDocument(filePath: string) {
    const include = pathToInclude(filePath, true);
    const document = await workspace.openTextDocument(filePath);
    gscDocuments?.parse(include, document);
}

export async function deleteGscDocument(filePath: string) {
    const include = pathToInclude(filePath, true);
    gscDocuments.delete(include);
}
