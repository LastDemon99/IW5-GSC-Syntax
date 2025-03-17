import * as vscode from 'vscode';
import { isVariable, documentToInclude, PATH_PATTERN, tryGetFunction, beforeWord } from '../utility';
import { KEYWORDS, ENGINE_FUNCTIONS } from '../defs/game';
import { filesParsed } from './scriptsWatcher';
import { gscDocuments } from '../parser/documents';

export class HoverProvider implements vscode.HoverProvider {
    async provideHover(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): Promise<vscode.Hover | undefined> {
            return new Promise<vscode.Hover | undefined>(async (resolve, reject) => {
                const include = documentToInclude(document);
                
                if (!filesParsed || !gscDocuments.locations.has(include) || gscDocuments.isCommentsAtPosition(include, position)) {
                    return resolve(undefined);
                }

                const wordRange = document.getWordRangeAtPosition(position);
                const word = document.getText(wordRange).toLowerCase();
                const wordLower = word.toString();

                if (!word) return resolve(undefined);
                if (word.match(PATH_PATTERN)) return resolve(gscDocuments.functions.get(wordLower)?.hover);

                const trygetFunc = tryGetFunction(document, wordRange);
                if (trygetFunc) {
                    if (ENGINE_FUNCTIONS.includes(wordLower)) return undefined;

                    const macroHover = gscDocuments.macros.get(include)?.getHover(wordLower);
                    if (macroHover) return resolve(macroHover);

                    const funcInclude = trygetFunc.include === '' ? include : trygetFunc.include;
                    const funcHover = gscDocuments.functions.get(funcInclude)?.getHover(wordLower);
                    if (funcHover) return resolve(funcHover);
                    if (trygetFunc.include === '') {
                        const includes = gscDocuments.includes.get(include);
                        if (includes) {
                            for (const i of includes) {
                                const funcHover = gscDocuments.functions.get(i)?.getHover(wordLower);
                                if (funcHover) return resolve(funcHover);
                            }
                        }
                    }
                    return resolve(undefined);
                }

                if (isVariable(document, wordRange, word) && !beforeWord(document, wordRange, ".", true)) {
                    if (KEYWORDS.includes(wordLower)) return resolve(undefined);

                    const macroHover = gscDocuments.macros.get(include)?.getHover(wordLower);
                    if (macroHover) return resolve(macroHover);

                    const functions = gscDocuments.functions.get(include);
                    if (functions) {
                        const funcName = functions.getFuncByPosition(position);
                        if (funcName) {
                            const varHover = functions.variables.get(funcName)?.getHover(wordLower);
                            if (varHover) return resolve(varHover);
                        }
                    }
                }
                return resolve(undefined);
        });
    }
}
