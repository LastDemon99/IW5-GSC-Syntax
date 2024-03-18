import * as vscode from 'vscode';
import { defs } from '../defs/defs';
import { gsc_functions } from '../defs/defs';
import { common_scripts_utility } from '../defs/common_scripts/utility';
import { common_scripts__fx } from '../defs/common_scripts/_fx';
import { common_scripts__createfx } from '../defs/common_scripts/_createfx';
import { maps_mp__utility } from '../defs/maps/mp/_utility';
import { maps_mp__createfx } from '../defs/maps/mp/_createfx';
import { maps_mp_gametypes__hud_util } from '../defs/maps/mp/gametypes/_hud_util';
import { maps_mp_gametypes__class } from '../defs/maps/mp/gametypes/_class';
import { maps_mp_killstreaks__harrier } from '../defs/maps/mp/killstreaks/_harrier';

// Provides function completion
export class completionItemProvider {
	functions: vscode.CompletionItem[];

	// Generate completion items for the hardcoded functions
	constructor(extensionPath: string) {
		this.functions = new Array<vscode.CompletionItem>();
	}

	provideCompletionItems(document: vscode.TextDocument,
		position: vscode.Position,
		token: vscode.CancellationToken,
		context: vscode.CompletionContext): Thenable<vscode.CompletionItem[]> | vscode.CompletionItem[] {

		var functions = gsc_functions;
			
		// On auto completion check if include gsc modules to generate function completion
		const text = document.getText();
		if (text.includes("#include common_scripts\\utility;"))
			functions = functions.concat(common_scripts_utility);
		if (text.includes("#include common_scripts\\_fx;"))
			functions = functions.concat(common_scripts__fx);
		if (text.includes("#include common_scripts\\_createfx;"))
			functions = functions.concat(common_scripts__createfx);
		if (text.includes("#include maps\\mp\\_utility;"))
			functions = functions.concat(maps_mp__utility);
		if (text.includes("#include maps\\mp\\_createfx;"))
			functions = functions.concat(maps_mp__createfx);
		if (text.includes("#include maps\\mp\\gametypes\\_hud_util;"))
			functions = functions.concat(maps_mp_gametypes__hud_util);
		if (text.includes("#include maps\\mp\\gametypes\\_class;"))
			functions = functions.concat(maps_mp_gametypes__class);
		if (text.includes("#include maps\\mp\\killstreaks\\_harrier;"))
			functions = functions.concat(maps_mp_killstreaks__harrier);
		
		return defs.concat(functions);
	}
}