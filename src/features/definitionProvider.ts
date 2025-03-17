import * as vscode from 'vscode';
import { tryGetFunction, isVariable, documentToInclude, beforeWord } from '../utility';
import { KEYWORDS, ENGINE_FUNCTIONS } from '../defs/game';
import { filesParsed } from './scriptsWatcher';
import { gscDocuments } from '../parser/documents';

export class DefinitionProvider implements vscode.DefinitionProvider {
    async provideDefinition(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): Promise<vscode.Definition | undefined> {
        const include = documentToInclude(document);
        
        if (!filesParsed || !gscDocuments.locations.has(include) || gscDocuments.isCommentsAtPosition(include, position)) return undefined;
        
        const wordRange = document.getWordRangeAtPosition(position);
        const word = document.getText(wordRange).toLowerCase();
        const wordLower = word.toString();

        if (!word) return undefined;

        const includeLocation = gscDocuments.locations.get(wordLower);
        if (includeLocation) return includeLocation;

        const trygetFunc = tryGetFunction(document, wordRange);
        if (trygetFunc) {
            if (ENGINE_FUNCTIONS.includes(wordLower)) return undefined;

            const macroLocation = gscDocuments.macros.get(include)?.getLocation(wordLower);
            if (macroLocation) return macroLocation;

            const funcInclude = trygetFunc.include === '' ? include : trygetFunc.include;
            const funcLocation = gscDocuments.functions.get(funcInclude)?.getLocation(wordLower);
            if (funcLocation) return funcLocation;
            else if (trygetFunc.include === '') {
                const includes = gscDocuments.includes.get(include);
                if (includes) {
                    for (const i of includes) {
                        const funcLocation = gscDocuments.functions.get(i)?.getLocation(wordLower);
                        if (funcLocation) return funcLocation;
                    }
                }
            }
            return undefined;
        }

        if (isVariable(document, wordRange, word) && !beforeWord(document, wordRange, ".", true)) {
            if (KEYWORDS.includes(wordLower)) return undefined;

            const macroLocation = gscDocuments.macros.get(include)?.getLocation(wordLower);
            if (macroLocation) return macroLocation;

            const functions = gscDocuments.functions.get(include);
            if (!functions) return;

            const funcName = functions.getFuncByPosition(position);
            if (!funcName) return;

            const varLocation = functions.variables.get(funcName)?.getLocation(wordLower);
            if (varLocation) return varLocation;
        }

        return undefined;
    }
}
