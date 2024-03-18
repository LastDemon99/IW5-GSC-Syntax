import { CompletionItem } from 'vscode';
import { CompletionItemKind } from 'vscode';

export var defs = new Array<CompletionItem>();
export var maps_mp__createfx = new Array<CompletionItem>();
var tmpDef;

tmpDef = new CompletionItem("Createfx");
tmpDef.detail = "Createfx()";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__createfx.push(tmpDef);

tmpDef = new CompletionItem("Func_position_player_get");
tmpDef.detail = "Func_position_player_get( lastPlayerOrigin )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__createfx.push(tmpDef);

tmpDef = new CompletionItem("Callback_playerconnect");
tmpDef.detail = "Callback_playerconnect()";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__createfx.push(tmpDef);

tmpDef = new CompletionItem("Ufo_mode");
tmpDef.detail = "Ufo_mode()";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__createfx.push(tmpDef);