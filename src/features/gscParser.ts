import * as vscode from 'vscode';
import * as fs from 'fs/promises';
import { join, relative } from 'path';
import { accessSync, constants } from 'fs';
import { getGameFuncsName, clearPathFuncCompletion, addPathFuncCompletion } from './completionItemProvider';
import { includesBase_list } from '../defs/includes';
import { KEYWORDS } from '../defs/game';
import { getAllIncludes } from './scriptsWatcher';

export const gscDocuments: Map<string, GSC_Document> = new Map();

export enum funcType { call, pointer, pathCall, pathPointer };

let diagnosticCollection = vscode.languages.createDiagnosticCollection('gsc');
let diagnostics: vscode.Diagnostic[] = [];
let activeInclude: string = '';

export const PLUTONIUM_FOLDER = join(process.env.LOCALAPPDATA || '', 'Plutonium', 'storage', 'iw5');
const GSC_EXTENSION = '.gsc';

export const MACRO_KEY_VALUE_PATTERN = /^\s*#define\s+([a-zA-Z_][a-zA-Z0-9_]*)\s+(.*)$/i;
export const MACRO_FUNCTION_PATTERN = /^\s*#define\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*\(([^\)]*)\)\s+(.*)$/i;
const UNDEF_PATTERN = /^\s*#undef\s*\b([a-zA-Z_][a-zA-Z0-9_]*)/i;
export const INCLUDE_PATTERN = /^\s*#include\s+([a-zA-Z0-9_]+(?:\\[a-zA-Z0-9_]+)*)\s*;\s*$/i;
export const PATH_PATTERN = /([a-zA-Z0-9_]+(?:\\[a-zA-Z0-9_]+)+)/g;
export const FUNC_PATTERN = /\b(?!\b(?:if|for|foreach|while|switch|return|waittill|wait|notify|endon)\b)(\w+)\s*\(\)/g;
export const FUNC_DEF_PATTERN = /^(?!\b(?:if|for|foreach|while|switch)\b)(\w+)\s*\(([^)]*)\)\s*(\/\/.*?)?\s*(?=\{)/gm;
export const FUNC_INCLUDE_CALL_PATTERN = /.*?([a-zA-Z0-9_]+(?:\\[a-zA-Z0-9_]+)*)::\b([a-zA-Z_][a-zA-Z0-9_]*)?\s*(\()?/g;
export const WORD_PATTERN = /(?<!["'])\b[a-zA-Z_][a-zA-Z0-9_]*\b(?!["'])/g;
const VARIABLE_PATTERN = /([a-zA-Z_][a-zA-Z0-9_]*)\s*=\s*[^;]*;/gm;
const WAITTILL_PATTERN = /waittill\s*\(\s*["'][^"']+["']\s*,\s*([^);]*)\)/gmi

export enum tokenType { func, macro };
export interface gscSimpleToken { location: vscode.Location; completion: vscode.CompletionItem; hover: vscode.Hover; }
export interface gscToken extends gscSimpleToken { type: tokenType; ranges: vscode.Range; varTokens: Map<string, gscSimpleToken> | undefined; };

export async function createGscDocument(path: string, include: string) {
    if (gscDocuments.has(include)) return;
    const document = await vscode.workspace.openTextDocument(path);
    const gscDocument = new GSC_Document();
    gscDocuments.set(include, gscDocument);
    await gscDocument.parseDocument(document);
}

export function deleteGscDocument(include: string) {
    if (gscDocuments.has(include)) gscDocuments.delete(include);
}

export function updateGscDocument(document: vscode.TextDocument, include: string) {
    setActiveInclude(include);
    gscDocuments.get(include)?.parseDocument(document);
}

export function setActiveInclude(include: string) {
    activeInclude = include;
}

export function getActiveInclude(): string {
    return activeInclude;
}

export function getCurrentGscDocument(): GSC_Document | undefined {
    return gscDocuments.get(activeInclude);
}

export class GSC_Document {
    public timeStamp: number = 0;
    public include: string = '';
    public commentRanges: vscode.Range[] = [];
    public location: vscode.Location | undefined = undefined;
    public hover: vscode.Hover = new vscode.Hover(new vscode.MarkdownString());
    public gscTokens: Map<string, gscToken> = new Map();
    public includesList: string[] = [];
    public includesCallList: string[] = [];
    public funcsList: string[] = [];
    public text: string = '';

    public async parseDocument(document: vscode.TextDocument) {
        this.location = new vscode.Location(document.uri, new vscode.Position(0, 0));
        this.include = pathToInclude(document.uri.fsPath);
        clearPathFuncCompletion(this.include);
    
        this.text = document.getText();
    
        this.commentRanges = getCommentRanges(this.text, document);
        this.includesList = [];
        this.includesCallList = [];
        this.gscTokens.clear();
        let match;
    
        //#region PARSE_DIRECTIVES
        for (let lineNumber = 0; lineNumber < document.lineCount; lineNumber++) {
            const line = document.lineAt(lineNumber).text;
            const lineStartPos = new vscode.Position(lineNumber, 0);
            const lineEndPos = new vscode.Position(lineNumber, line.length);
    
            if (this.isCommentsAtPosition(lineStartPos))
                continue;
    
            const lineRange = new vscode.Range(lineStartPos, lineEndPos);
            
            if ((match = MACRO_FUNCTION_PATTERN.exec(line)) || (match = MACRO_KEY_VALUE_PATTERN.exec(line))) {
                const macroName = match[1];
                const macroNameLower = macroName.toLocaleLowerCase();
                const tryGetToken = this.gscTokens.get(macroNameLower);
                if (tryGetToken) {
                    if (tryGetToken.type === tokenType.macro) addDiagnostic(lineRange, `Macro '${macroName}' already defined.`, vscode.DiagnosticSeverity.Error);
                    else addDiagnostic(lineRange, `Macro '${macroName}' is conflicting with the name of a function'.`, vscode.DiagnosticSeverity.Error);
                    continue;
                }
                this.setMacroData(document, macroName, macroNameLower, lineStartPos, line);
                continue;
            }
    
            if ((match = UNDEF_PATTERN.exec(line))) {
                const defineNameLower = match[1].toLocaleLowerCase();
                if (this.gscTokens.get(defineNameLower)) this.gscTokens.delete(defineNameLower);
                else addDiagnostic(lineRange, `Undef '${match[1]}' cannot be applied to a non-existent macro.`, vscode.DiagnosticSeverity.Error);
                continue;
            }
    
            if ((match = INCLUDE_PATTERN.exec(line))) {
                const include = match[1].trim().toLowerCase();
    
                if (this.include === include) {
                    addDiagnostic(lineRange, `Include '${include}' cannot call itself.`, vscode.DiagnosticSeverity.Error);
                    continue;
                }
    
                if (this.includesList.includes(include)) {
                    addDiagnostic(lineRange, `Include '${include}' already defined.`, vscode.DiagnosticSeverity.Error);
                    continue;
                }
    
                const isGameInclude = includesBase_list.includes(include);
    
                if (!getAllIncludes().includes(include) &&  !isGameInclude) {
                    addDiagnostic(lineRange, `Include '${include}' non-existing.`, vscode.DiagnosticSeverity.Error);
                    continue;
                }
    
                if (isGameInclude) continue;
                this.includesList.push(include);
            }
        }
        //#endregion
        
        //#region PARSE_FUNCTIONS
        while ((match = FUNC_DEF_PATTERN.exec(this.text)) !== null) {
            const funcMatch = match;
            const funcName = funcMatch[1].trim();
            const funcNameLower = funcName.toLowerCase();
            const funcDetail = funcMatch[0].split('\n')[0];    
            const funcPosition = document.positionAt(funcMatch.index);
    
            if (this.isCommentsAtPosition(funcPosition))
                continue;

            const funcRange = new vscode.Range(funcPosition, funcPosition.translate(0, match[0].length));
            if (getGameFuncsName().includes(funcNameLower)) {
                addDiagnostic(funcRange, `Function name '${funcName}' is conflicting with a internal game functions.`, vscode.DiagnosticSeverity.Error);
                continue;
            }
    
            const tryGetToken = this.gscTokens.get(funcNameLower);
            if (tryGetToken) {
                const relatedInfo = createDiagnosticRelatedInfo(tryGetToken.location.uri, tryGetToken.location.range, ``);
                if (tryGetToken.type === tokenType.macro) addDiagnostic(funcRange, `Function '${funcName}' is conflicting with a macro.`, vscode.DiagnosticSeverity.Error, relatedInfo);
                else addDiagnostic(tryGetToken.location.range, `Function '${funcName}' is conflicting with other function.`, vscode.DiagnosticSeverity.Error);
                continue;
            }
    
            this.funcsList.push(funcDetail);
            const funcMarkdown = getDocString(document, funcPosition.line, funcDetail, this.include);
            const funcCompletion = new vscode.CompletionItem(funcName, vscode.CompletionItemKind.Function);
            funcCompletion.documentation = funcMarkdown;
            addPathFuncCompletion(this.include, funcName);
            
            const location = new vscode.Location(document.uri, funcPosition);
            const gscToken: gscToken = {
                type: tokenType.func,
                location: location,
                completion: funcCompletion,
                hover: new vscode.Hover(funcMarkdown),
                ranges: location.range,
                varTokens: new Map()
            };
    
            const varsTracker: Map<string, { position: vscode.Position, detail: string }[]> = new Map();
    
            // GET ARGS
            const funcArgsStr = funcDetail.substring(funcDetail.indexOf('(') + 1, funcDetail.indexOf(')'));
            this.setArgumentsData(gscToken, document, funcArgsStr, funcPosition.line, funcDetail, varsTracker);
    
            // GET TEXT BLOCK
            let funcScopeText = '{';
            let braceCount = 1;
            let lineIndex = match.index + match[0].length + 1;
            while (braceCount > 0 && lineIndex < this.text.length) {
                const char = this.text[lineIndex];        
                if (char === '{') braceCount++;
                else if (char === '}') braceCount--;        
                funcScopeText += char;
                lineIndex++;
            }
            gscToken.ranges = new vscode.Range(funcPosition, document.positionAt(lineIndex));

            // GET VARIABLES
            while ((match = VARIABLE_PATTERN.exec(funcScopeText)) !== null) {
                const varName = match[1];
                const varNameLower = varName.toLowerCase();
                const varMatchLine = funcScopeText.substring(0, match.index).split('\n').length - 1;
                const varMatchCharacter = match.index - funcScopeText.lastIndexOf('\n', match.index - 1) - 1;
                const varPosition = new vscode.Position(funcPosition.line + varMatchLine + (new RegExp(/\)\s*(?!\/\/.*)\{\s*$/gm).test(document.lineAt(funcPosition.line).text) ? 0 : 1), funcPosition.character + varMatchCharacter);
                this.setScopeData(gscToken, document, varName, varNameLower, match[0], varPosition, varsTracker);
            }
    
            // GET WAITTILL ARGS
            while ((match = WAITTILL_PATTERN.exec(funcScopeText)) !== null) {
                const waittillPosition = document.positionAt(funcMatch.index + match.index);
                const waittillArgs = match[0].substring(match[0].indexOf('(') + 1, match[0].indexOf(')'));
                this.setArgumentsData(gscToken, document, waittillArgs, waittillPosition.line, match[0], varsTracker);
            }

            // SET DETAILS TRACK
            const markdowns: Map<string, vscode.MarkdownString> = new Map();
            for (const [arg, definitions] of varsTracker) {
                const markdown = new vscode.MarkdownString();
                definitions.sort((a, b) => {
                    if (a.position.line === b.position.line) return a.position.character - b.position.character;
                    return a.position.line - b.position.line;
                });

                let firstDef = true;
                for (const definition of definitions) {
                    if (firstDef) {
                        markdown.appendMarkdown(definition.detail);
                        firstDef = false;
                        continue;
                    }
                    markdown.appendCodeblock(definition.detail, 'gsc');
                    const argPosition = definition.position;
                    const varUri = document.uri.with({fragment: `${argPosition.line + 1},${argPosition.character + 1}` });
                    markdown.appendMarkdown(`[{ L: ${argPosition.line + 1}, C: ${argPosition.character + 1} }](${varUri})`);
                }
                markdowns.set(arg, markdown);
            }
            gscToken.varTokens?.forEach((scopeToken, arg) => { 
                const markdown = markdowns.get(arg)
                if (markdown) scopeToken.hover = new vscode.Hover(markdown); 
            });
      
            // VALIDATE VARIABLES
            while ((match = WORD_PATTERN.exec(funcScopeText)) !== null) {
                const word = match[0].toLowerCase();
                const wordPosition = document.positionAt(funcMatch.index + match.index);
                const wordRange = new vscode.Range(funcPosition, funcPosition.translate(0, match[0].length));
                if (!isVariable(document, wordRange, word) || KEYWORDS.includes(word) || getGameFuncsName().includes(word)) continue;
                const scopeTokens = gscToken.varTokens;
                if (scopeTokens && scopeTokens.has(word)) {
                    const varTracked = varsTracker.get(word);
                    if (varTracked) {
                        varTracked.sort((a, b) => {
                            if (a.position.line === b.position.line) return a.position.character - b.position.character;
                            return a.position.line - b.position.line;
                        });
                        if (wordPosition.isAfterOrEqual(varTracked[0].position)) continue;
                    }
                }
                addDiagnostic(wordRange, `Variable '${word}' is not defined.`, vscode.DiagnosticSeverity.Warning);
            }
            this.gscTokens.set(funcNameLower, gscToken);
        }
        //#endregion

        // SET FUNCTIONS INCLUDE CALL
        while ((match = FUNC_INCLUDE_CALL_PATTERN.exec(this.text)) !== null) {
            const funcIncludePosition = document.positionAt(match.index);
            if (this.isCommentsAtPosition(funcIncludePosition)) continue;
            const funcInclude = match[1].trim();
            const funcIncludeLower = funcInclude.toLowerCase();
            
            if (this.includesCallList.includes(funcIncludeLower)) continue;

            const funcIncludeRange = new vscode.Range(funcIncludePosition, funcIncludePosition.translate(0, match[0].length));

            if (this.include === funcIncludeLower || this.includesList.includes(funcIncludeLower)) {
                addDiagnostic(funcIncludeRange, `Include call '${funcInclude}::' is not necessary, its include directive is already defined.`, vscode.DiagnosticSeverity.Information);
                continue;
            }

            const isGameInclude = includesBase_list.includes(funcIncludeLower);

            if (!getAllIncludes().includes(funcIncludeLower) &&  !isGameInclude) {
                addDiagnostic(funcIncludeRange, `Include '${funcInclude}' non-existing.`, vscode.DiagnosticSeverity.Error);
                continue;
            }

            if (isGameInclude) continue;
            this.includesCallList.push(funcIncludeLower);
        }

        const markdownString = new vscode.MarkdownString();
        markdownString.appendCodeblock(this.funcsList.filter(i => !i.startsWith('_')).sort().join('\n'), 'gsc');
        this.hover = new vscode.Hover(markdownString);
        const stats = await fs.stat(document.uri.fsPath);
        this.timeStamp = stats.mtimeMs;

        console.log(`IW5-GSC-Syntax: Document ${this.include} parsed`);
        diagnosticCollection.delete(document.uri);
        diagnosticCollection.set(document.uri, diagnostics);
    }

    public isCommentsAtPosition(position: vscode.Position): boolean {
        return this.commentRanges.some(range => range.contains(position));
    }

    private getFuncTokens(isPathCall: boolean = false): Map<string, gscToken> {
        let tokens: Map<string, gscToken> = new Map();
        for (const [name, token] of this.gscTokens) {
            if (isPathCall && name.startsWith('_')) continue;
            tokens.set(name, token);
        }
        if (isPathCall) return tokens;
        this.includesList.forEach(include => {
            const includeFuncsToken = gscDocuments.get(include)?.getFuncTokens(true);
            if (includeFuncsToken) tokens = new Map([...tokens, ...includeFuncsToken]);
        });
        return tokens;
    }

    public getVarToken(word: string, position: vscode.Position): gscSimpleToken | undefined {
        for (const [, token] of this.gscTokens) {
            if (!token.varTokens || !token.ranges.contains(position)) continue;
            for (const [arg, scopeToken] of token.varTokens) if (arg === word) return scopeToken;
        }
        return undefined;
    }

    public getFuncHover(word: string, isPathCall: boolean = false): vscode.Hover | undefined {
        return this.getFuncTokens(isPathCall).get(word)?.hover;
    }

    public getHover(word: string, position: vscode.Position): vscode.Hover | undefined {
        const token = this.gscTokens.get(word);
        if (token && token.type === tokenType.macro) return token.hover;
        const include = gscDocuments.get(word);
        if (include) return include.hover;
        return this.getVarToken(word, position)?.hover;
    }

    public getFuncLocation(word: string, isPathCall: boolean = false): vscode.Location | undefined {
        return this.getFuncTokens(isPathCall).get(word)?.location;
    }

    public getLocation(word: string, position: vscode.Position): vscode.Location | undefined {
        const token = this.gscTokens.get(word);
        if (token && token.type === tokenType.macro) return token.location;
        const include = gscDocuments.get(word);
        if (include) return include.location;
        return this.getVarToken(word, position)?.location;
    }

    public getFuncCompletions(isPathCall: boolean = false): vscode.CompletionItem[] {
        const funcsToken = this.getFuncTokens(isPathCall);
        if (funcsToken) return Array.from(funcsToken.values()).map(token => token.completion);
        return [];
    }

    public getScopeRange(position: vscode.Position): vscode.Range | undefined {
        for (const [, token] of this.gscTokens) {
            if (!token.varTokens || !token.ranges.contains(position)) continue;
            return token.ranges;
        }
        return undefined;
    }

    public getScopeTokens(position: vscode.Position): gscSimpleToken[] {
        const scopeTokens: gscSimpleToken[] = [];
        for (const [, token] of this.gscTokens) {
            if (!token.varTokens || !token.ranges.contains(position)) continue;
            for (const [, scopeToken] of token.varTokens) scopeTokens.push(scopeToken);
        }
        return scopeTokens;
    }

    public getScopeCompletions(position: vscode.Position): vscode.CompletionItem[] {
        return this.getScopeTokens(position).map(token => token.completion);
    }

    public getFuncsRanges(): vscode.Range[] {  
        return Array.from(this.gscTokens.values()).map(item => item.ranges);
    }

    private setMacroData(document: vscode.TextDocument, macroName: string, macroNameLower: string, startPos: vscode.Position, line: string) {
        const completion = new vscode.CompletionItem(macroName, vscode.CompletionItemKind.Constant);
        const markdownString = new vscode.MarkdownString();
        markdownString.appendCodeblock(line, 'gsc');
        completion.documentation = markdownString;
        this.gscTokens.set(macroNameLower, {
            type: tokenType.macro,
            location: new vscode.Location(document.uri, startPos),
            completion: completion,
            hover: new vscode.Hover(markdownString),
            ranges: new vscode.Range(startPos, new vscode.Position(0, 0)),
            varTokens: undefined
        });
    }
    
    private setScopeData(gscToken: gscToken, document: vscode.TextDocument, arg: string, argLower: string, detail: string, argPosition: vscode.Position, varsTracker: Map<string, { position: vscode.Position, detail: string }[]> = new Map()) {       
        if (!varsTracker.has(argLower)) varsTracker.set(argLower, [{ position: argPosition, detail: `@${arg} Definition` }]);        
        varsTracker.get(argLower)?.push({ position: argPosition, detail: detail });
        gscToken.varTokens?.set(argLower, {
            location: new vscode.Location(document.uri, argPosition),
            completion: new vscode.CompletionItem(arg, vscode.CompletionItemKind.Variable),
            hover: new vscode.Hover(new vscode.MarkdownString())
        });
    }
    
    private setArgumentsData(gscToken: gscToken, document: vscode.TextDocument, args: string, startLine: number, detail: string, varsTracker: Map<string, { position: vscode.Position, detail: string }[]>) {
        let args_context = '';
        const current_args: string[] = [];
        args.split(',').forEach((arg, i) => {
            const argTrimmed = arg.trim();
            if (argTrimmed === '' || argTrimmed.includes('"')) return;

            const argLower = argTrimmed.toLowerCase();
    
            args_context += args_context === '' ? arg : ',' + arg;
            const argPosition = new vscode.Position(startLine, detail.indexOf('(') + 1 + args_context.length - argTrimmed.length);
            const argRange = new vscode.Range(argPosition,  argPosition.translate(0, argTrimmed.length));
    
            if (current_args.includes(argLower)) {
                addDiagnostic(argRange, `Argument '${argTrimmed}' already defined`, vscode.DiagnosticSeverity.Error);
                return;
            }
    
            current_args.push(argLower);
            this.setScopeData(gscToken, document, argTrimmed, argLower, detail, argPosition, varsTracker);
        });
    } 
}

export function isInclude(document: vscode.TextDocument, wordRange: vscode.Range | undefined, word: string): boolean {
    if (!wordRange) return false;
    if (PATH_PATTERN.test(word)) return true;
    if (document.getText(new vscode.Range(new vscode.Position(wordRange.start.line, wordRange.end.character + 2), wordRange.end)) === '::') return true;
    return false;
}

export function isFunc(document: vscode.TextDocument, wordRange: vscode.Range | undefined, word: string): boolean {
    if (!wordRange) return false;

    if (document.getText(new vscode.Range(wordRange.start, new vscode.Position(wordRange.start.line, wordRange.end.character + 1))).toLowerCase() === `${word}(`)
        return true;
    
    const argPrevCharacter = wordRange.start.character - 2;
    if (argPrevCharacter > 0) {
        if (document.getText(new vscode.Range(new vscode.Position(wordRange.start.line, argPrevCharacter), wordRange.end)).toLowerCase() === `::${word}`)
            return true;
    }
    return false;
}

export function isVariable(document: vscode.TextDocument, wordRange: vscode.Range | undefined, word: string): boolean {
    return !isInclude(document, wordRange, word) && !isFunc(document, wordRange, word);
}

function createDiagnosticRelatedInfo(uri: vscode.Uri, range: vscode.Range, message: string): vscode.DiagnosticRelatedInformation {
    return new vscode.DiagnosticRelatedInformation(
        new vscode.Location(uri, range),
        message
    );
}

function addDiagnostic(range: vscode.Range, message: string, severity: vscode.DiagnosticSeverity, relatedInfo: vscode.DiagnosticRelatedInformation | undefined = undefined) { 
    const diagnostic = new vscode.Diagnostic(range, message, severity);
    if (relatedInfo) diagnostic.relatedInformation = [relatedInfo];
    diagnostic.source = 'gsc-syntax';
    // diagnostics.push(diagnostic);
}

function getDocString(document: vscode.TextDocument, funcStartLine: number, detail: string, include: string): vscode.MarkdownString {
    let docString = '';    
    for (let i = funcStartLine - 1; i >= Math.max(0, funcStartLine - 6); i--) {
        const line = document.lineAt(i).text.trim().toLowerCase();
        if (line.startsWith('///docstringbegin')) {
            for (let j = i + 1; j < document.lineCount && !document.lineAt(j).text.trim().startsWith('///docstringend'); j++) {
                docString += document.lineAt(j).text.trim() + '\n';
            }
            break;
        }
    }
    const markdown = new vscode.MarkdownString();
    if (docString) {
        const docLines = docString.split('\n');
        const detailLine = docLines.find(line => line.startsWith('detail:'));
        const summaryLine = docLines.find(line => line.startsWith('summary:'));
        if (detailLine) markdown.appendCodeblock(detailLine.replace('detail:', '').trimStart(), 'typescript');
        if (summaryLine) markdown.appendMarkdown(summaryLine.replace('summary:', '').trimStart());
    }
    else markdown.appendCodeblock(detail, 'gsc');
    markdown.appendCodeblock(`\n<File> ${include}.gsc`, 'typescript');
    markdown.isTrusted = true;
    return markdown;
}

export function documentToInclude(document: vscode.TextDocument): string {
    return pathToInclude(document.uri.fsPath);
}

export function includeToPath(include: string) {
    return join(PLUTONIUM_FOLDER, include) + GSC_EXTENSION;
}

export function fileExists(filePath: string): boolean {
    try {
        accessSync(filePath, constants.F_OK);
        return true;
    } catch (error) {
        return false;
    }
}

export function tryGetFuncInclude(document: vscode.TextDocument, wordRange: vscode.Range | undefined, word: string): { include: string, type: funcType } | undefined {
    if (!wordRange) return undefined;

    const keywords = ['if', 'for', 'foreach', 'while', 'switch', 'waittill', 'wait', 'notify', 'endon'];
    const textInRange = document.getText(wordRange).toLowerCase();
    if (keywords.includes(textInRange)) return undefined;

    const positionLine = wordRange.start.line;

    const prevCharacter = wordRange.start.character - 3;
    if (prevCharacter > 0) {
        const prevWordRange = document.getWordRangeAtPosition(new vscode.Position(positionLine, prevCharacter));
        if (prevWordRange) {
            const trygetInclude = document.getText(prevWordRange).toLowerCase();
            if (document.getText(new vscode.Range(prevWordRange.start, new vscode.Position(positionLine, wordRange.end.character + 1))).toLowerCase() === `${trygetInclude}::${word}(`)
                return { include: trygetInclude, type: funcType.pathCall };

            if (document.getText(new vscode.Range(prevWordRange.start, new vscode.Position(positionLine, wordRange.end.character))).toLowerCase() === `${trygetInclude}::${word}`)
                return { include: trygetInclude, type: funcType.pathPointer };
        }
    }

    if (document.getText(new vscode.Range(wordRange.start, new vscode.Position(positionLine, wordRange.end.character + 1))).toLowerCase() === `${word}(`) {
        return { include: '', type: funcType.call };
    }
    
    const argPrevCharacter = wordRange.start.character - 2;
    if (argPrevCharacter > 0) {
        if (document.getText(new vscode.Range(new vscode.Position(positionLine, argPrevCharacter), wordRange.end)).toLowerCase() === `::${word}`) {
            return { include: '', type: funcType.pointer };
        }
    }

    return undefined;
}

export function getCommentRanges(text: string, document: vscode.TextDocument): vscode.Range[] {
    const commentBlocks = /\/\*[\s\S]*?\*\/|\/\/[^\n]*/g;
    const commentRangesCache: vscode.Range[] = [];
    let match;
    while ((match = commentBlocks.exec(text)) !== null) {
        const startPos = document.positionAt(match.index);
        const endPos = document.positionAt(match.index + match[0].length);
        commentRangesCache.push(new vscode.Range(startPos, endPos));
    }
    return commentRangesCache;
}

export function isCommentsAtPosition(text: string, document: vscode.TextDocument, position: vscode.Position): boolean {
    return getCommentRanges(text, document).some(range => range.contains(position));
}

export function pathToInclude(filePath: string, lower: boolean = true): string {
    const include = relative(PLUTONIUM_FOLDER, filePath).replace(GSC_EXTENSION, "");
    return lower ? include.toLocaleLowerCase() : include;
}
