import { CompletionItem } from 'vscode';
import { CompletionItemKind } from 'vscode';

export var defs = new Array<CompletionItem>();
export var maps_mp_gametypes__hud_util = new Array<CompletionItem>();
var tmpDef;

tmpDef = new CompletionItem("Setparent");
tmpDef.detail = "Setparent( element )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__hud_util.push(tmpDef);

tmpDef = new CompletionItem("Getparent");
tmpDef.detail = "Getparent()";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__hud_util.push(tmpDef);

tmpDef = new CompletionItem("Addchild");
tmpDef.detail = "Addchild( element )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__hud_util.push(tmpDef);

tmpDef = new CompletionItem("Removechild");
tmpDef.detail = "Removechild( element )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__hud_util.push(tmpDef);

tmpDef = new CompletionItem("Setpoint");
tmpDef.detail = "Setpoint( point, relativePoint, xOffset, yOffset, moveTime )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__hud_util.push(tmpDef);

tmpDef = new CompletionItem("Setpointbar");
tmpDef.detail = "Setpointbar( point, relativePoint, xOffset, yOffset )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__hud_util.push(tmpDef);

tmpDef = new CompletionItem("Updatebar");
tmpDef.detail = "Updatebar( barFrac, rateOfChange )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__hud_util.push(tmpDef);

tmpDef = new CompletionItem("Updatebarscale");
tmpDef.detail = "Updatebarscale( barFrac, rateOfChange )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__hud_util.push(tmpDef);

tmpDef = new CompletionItem("Createfontstring");
tmpDef.detail = "Createfontstring( font, fontScale )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__hud_util.push(tmpDef);

tmpDef = new CompletionItem("Createserverfontstring");
tmpDef.detail = "Createserverfontstring( font, fontScale, team )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__hud_util.push(tmpDef);

tmpDef = new CompletionItem("Createservertimer");
tmpDef.detail = "Createservertimer( font, fontScale, team )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__hud_util.push(tmpDef);

tmpDef = new CompletionItem("Createtimer");
tmpDef.detail = "Createtimer( font, fontScale )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__hud_util.push(tmpDef);

tmpDef = new CompletionItem("Createicon");
tmpDef.detail = "Createicon( shader, width, height )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__hud_util.push(tmpDef);

tmpDef = new CompletionItem("Createservericon");
tmpDef.detail = "Createservericon( shader, width, height, team )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__hud_util.push(tmpDef);

tmpDef = new CompletionItem("Createserverbar");
tmpDef.detail = "Createserverbar( color, width, height, flashFrac, team, selected )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__hud_util.push(tmpDef);

tmpDef = new CompletionItem("Createbar");
tmpDef.detail = "Createbar( color, width, height, flashFrac )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__hud_util.push(tmpDef);

tmpDef = new CompletionItem("Getcurrentfraction");
tmpDef.detail = "Getcurrentfraction()";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__hud_util.push(tmpDef);

tmpDef = new CompletionItem("Createprimaryprogressbar");
tmpDef.detail = "Createprimaryprogressbar( xOffset, yOffset )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__hud_util.push(tmpDef);

tmpDef = new CompletionItem("Createprimaryprogressbartext");
tmpDef.detail = "Createprimaryprogressbartext( xOffset, yOffset )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__hud_util.push(tmpDef);

tmpDef = new CompletionItem("Createteamprogressbar");
tmpDef.detail = "Createteamprogressbar( team )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__hud_util.push(tmpDef);

tmpDef = new CompletionItem("Createteamprogressbartext");
tmpDef.detail = "Createteamprogressbartext( team )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__hud_util.push(tmpDef);

tmpDef = new CompletionItem("Setflashfrac");
tmpDef.detail = "Setflashfrac( flashFrac )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__hud_util.push(tmpDef);

tmpDef = new CompletionItem("Hideelem");
tmpDef.detail = "Hideelem()";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__hud_util.push(tmpDef);

tmpDef = new CompletionItem("Showelem");
tmpDef.detail = "Showelem()";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__hud_util.push(tmpDef);

tmpDef = new CompletionItem("Flashthread");
tmpDef.detail = "Flashthread()";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__hud_util.push(tmpDef);

tmpDef = new CompletionItem("Destroyelem");
tmpDef.detail = "Destroyelem()";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__hud_util.push(tmpDef);

tmpDef = new CompletionItem("Seticonshader");
tmpDef.detail = "Seticonshader( shader )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__hud_util.push(tmpDef);

tmpDef = new CompletionItem("Geticonshader");
tmpDef.detail = "Geticonshader( shader )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__hud_util.push(tmpDef);

tmpDef = new CompletionItem("Seticonsize");
tmpDef.detail = "Seticonsize( width, height )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__hud_util.push(tmpDef);

tmpDef = new CompletionItem("Setwidth");
tmpDef.detail = "Setwidth( width )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__hud_util.push(tmpDef);

tmpDef = new CompletionItem("Setheight");
tmpDef.detail = "Setheight( height )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__hud_util.push(tmpDef);

tmpDef = new CompletionItem("Setsize");
tmpDef.detail = "Setsize( width, height )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__hud_util.push(tmpDef);

tmpDef = new CompletionItem("Updatechildren");
tmpDef.detail = "Updatechildren()";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__hud_util.push(tmpDef);

tmpDef = new CompletionItem("Transitionreset");
tmpDef.detail = "Transitionreset()";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__hud_util.push(tmpDef);

tmpDef = new CompletionItem("Transitionzoomin");
tmpDef.detail = "Transitionzoomin( duration )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__hud_util.push(tmpDef);

tmpDef = new CompletionItem("Transitionpulsefxin");
tmpDef.detail = "Transitionpulsefxin( inTime, duration )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__hud_util.push(tmpDef);

tmpDef = new CompletionItem("Transitionslidein");
tmpDef.detail = "Transitionslidein( duration, direction )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__hud_util.push(tmpDef);

tmpDef = new CompletionItem("Transitionslideout");
tmpDef.detail = "Transitionslideout( duration, direction )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__hud_util.push(tmpDef);

tmpDef = new CompletionItem("Transitionzoomout");
tmpDef.detail = "Transitionzoomout( duration )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__hud_util.push(tmpDef);

tmpDef = new CompletionItem("Transitionfadein");
tmpDef.detail = "Transitionfadein( duration )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__hud_util.push(tmpDef);

tmpDef = new CompletionItem("Transitionfadeout");
tmpDef.detail = "Transitionfadeout( duration )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__hud_util.push(tmpDef);

tmpDef = new CompletionItem("Getweeklyref");
tmpDef.detail = "Getweeklyref( chRef )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__hud_util.push(tmpDef);

tmpDef = new CompletionItem("Getdailyref");
tmpDef.detail = "Getdailyref( chRef )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__hud_util.push(tmpDef);

tmpDef = new CompletionItem("Ch_getprogress");
tmpDef.detail = "Ch_getprogress( refString )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__hud_util.push(tmpDef);

tmpDef = new CompletionItem("Ch_getstate");
tmpDef.detail = "Ch_getstate( refString )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__hud_util.push(tmpDef);

tmpDef = new CompletionItem("Ch_setprogress");
tmpDef.detail = "Ch_setprogress( refString, value )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__hud_util.push(tmpDef);

tmpDef = new CompletionItem("Ch_setstate");
tmpDef.detail = "Ch_setstate( refString, value )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__hud_util.push(tmpDef);

tmpDef = new CompletionItem("Ch_gettarget");
tmpDef.detail = "Ch_gettarget( refString, state )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__hud_util.push(tmpDef);