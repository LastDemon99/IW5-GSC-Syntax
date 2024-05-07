import * as vscode from 'vscode';
import * as defs from '../defs/defs'
import * as fields from '../defs/fields'

import { waittills } from '../defs/waittills';
import { game } from '../defs/game';
import { common_scripts_utility } from '../defs/common_scripts/utility';
import { common_scripts__fx } from '../defs/common_scripts/_fx';
import { common_scripts__createfx } from '../defs/common_scripts/_createfx';
import { maps_mp__utility } from '../defs/maps/mp/_utility';
import { maps_mp__createfx } from '../defs/maps/mp/_createfx';
import { maps_mp_gametypes__hud_util } from '../defs/maps/mp/gametypes/_hud_util';
import { maps_mp_gametypes__class } from '../defs/maps/mp/gametypes/_class';
import { maps_mp_killstreaks__harrier } from '../defs/maps/mp/killstreaks/_harrier';

export class completionItemProvider {
	functions: vscode.CompletionItem[];
	playerFields: vscode.CompletionItem[];
	selfFields: vscode.CompletionItem[];
    levelFields: vscode.CompletionItem[];

	constructor() {
		this.functions = defs.defs;
		this.functions = this.functions.concat(defs.gsc_functions);
		this.functions = this.functions.concat(this.createCompletionItems(game, false));
		this.functions = this.functions.concat(this.createCompletionItems(waittills, false));
		this.playerFields = this.createCompletionItems(fields.player);
		this.selfFields = this.createCompletionItems(fields.self);
        this.levelFields = this.createCompletionItems(fields.level);
	}

	createCompletionItems(items: string[], isField: boolean = true): vscode.CompletionItem[] {
        return items.map(items => {
			if (isField) return new vscode.CompletionItem(items, vscode.CompletionItemKind.Field);
			else return new vscode.CompletionItem(items, vscode.CompletionItemKind.Function);
        });
    }

	provideCompletionItems(document: vscode.TextDocument, position: vscode.Position,
							token: vscode.CancellationToken, context: vscode.CompletionContext): Thenable<vscode.CompletionItem[]> {
			return new Promise<vscode.CompletionItem[]>((resolve, reject) => {

			if (document.languageId !== 'gsc') {
				reject();
				return;
			}

			if (context.triggerKind === vscode.CompletionTriggerKind.TriggerCharacter)
			{
				let linePrefix = document.lineAt(position).text.substring(0, position.character);
				if (linePrefix.endsWith('player.')) resolve(this.playerFields);
				else if (linePrefix.endsWith('level.')) resolve(this.levelFields);
				else resolve(this.selfFields);
				return;
			}

			var funcs = this.functions;
			const text = document.getText();

			if (text.includes("#include common_scripts\\utility;"))
				funcs = funcs.concat(common_scripts_utility);
			if (text.includes("#include common_scripts\\_fx;"))
				funcs = funcs.concat(common_scripts__fx);
			if (text.includes("#include common_scripts\\_createfx;"))
				funcs = funcs.concat(common_scripts__createfx);
			if (text.includes("#include maps\\mp\\_utility;"))
				funcs = funcs.concat(maps_mp__utility);
			if (text.includes("#include maps\\mp\\_createfx;"))
				funcs = funcs.concat(maps_mp__createfx);
			if (text.includes("#include maps\\mp\\gametypes\\_hud_util;"))
				funcs = funcs.concat(maps_mp_gametypes__hud_util);
			if (text.includes("#include maps\\mp\\gametypes\\_class;"))
				funcs = funcs.concat(maps_mp_gametypes__class);
			if (text.includes("#include maps\\mp\\killstreaks\\_harrier;"))
				funcs = funcs.concat(maps_mp_killstreaks__harrier);
			resolve(funcs);
		});
	}
}