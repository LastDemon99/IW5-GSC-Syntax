import { CompletionItem } from 'vscode';
import { CompletionItemKind } from 'vscode';

export var maps_mp_killstreaks__harrier = new Array<CompletionItem>();
var tmpDef;

tmpDef = new CompletionItem("Beginharrier");
tmpDef.detail = "Beginharrier( lifeId, startPoint, pos )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_killstreaks__harrier.push(tmpDef);

tmpDef = new CompletionItem("Getcorrectheight");
tmpDef.detail = "Getcorrectheight( x, y, rand )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_killstreaks__harrier.push(tmpDef);

tmpDef = new CompletionItem("Spawndefensiveharrier");
tmpDef.detail = "Spawndefensiveharrier( lifeId, owner, pathStart, pathGoal )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_killstreaks__harrier.push(tmpDef);

tmpDef = new CompletionItem("Defendlocation");
tmpDef.detail = "Defendlocation( harrier )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_killstreaks__harrier.push(tmpDef);

tmpDef = new CompletionItem("Closetogoalcheck");
tmpDef.detail = "Closetogoalcheck( pathGoal )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_killstreaks__harrier.push(tmpDef);

tmpDef = new CompletionItem("Engageground");
tmpDef.detail = "Engageground()";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_killstreaks__harrier.push(tmpDef);

tmpDef = new CompletionItem("Harrierleave");
tmpDef.detail = "Harrierleave()";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_killstreaks__harrier.push(tmpDef);

tmpDef = new CompletionItem("Harrierdelete");
tmpDef.detail = "Harrierdelete()";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_killstreaks__harrier.push(tmpDef);

tmpDef = new CompletionItem("Harriertimer");
tmpDef.detail = "Harriertimer()";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_killstreaks__harrier.push(tmpDef);

tmpDef = new CompletionItem("Randomharriermovement");
tmpDef.detail = "Randomharriermovement()";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_killstreaks__harrier.push(tmpDef);

tmpDef = new CompletionItem("Getnewpoint");
tmpDef.detail = "Getnewpoint( pos, targ )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_killstreaks__harrier.push(tmpDef);

tmpDef = new CompletionItem("Tracenewpoint");
tmpDef.detail = "Tracenewpoint(x,y,z)";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_killstreaks__harrier.push(tmpDef);

tmpDef = new CompletionItem("Tracegroundpoint");
tmpDef.detail = "Tracegroundpoint(x,y)";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_killstreaks__harrier.push(tmpDef);

tmpDef = new CompletionItem("Playharrierfx");
tmpDef.detail = "Playharrierfx()";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_killstreaks__harrier.push(tmpDef);

tmpDef = new CompletionItem("Stopharrierwingfx");
tmpDef.detail = "Stopharrierwingfx()";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_killstreaks__harrier.push(tmpDef);

tmpDef = new CompletionItem("Startharrierwingfx");
tmpDef.detail = "Startharrierwingfx()";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_killstreaks__harrier.push(tmpDef);

tmpDef = new CompletionItem("Getpathstart");
tmpDef.detail = "Getpathstart( coord )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_killstreaks__harrier.push(tmpDef);

tmpDef = new CompletionItem("Getpathend");
tmpDef.detail = "Getpathend()";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_killstreaks__harrier.push(tmpDef);

tmpDef = new CompletionItem("Fireontarget");
tmpDef.detail = "Fireontarget( facingTolerance, zOffset )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_killstreaks__harrier.push(tmpDef);

tmpDef = new CompletionItem("Isreadytofire");
tmpDef.detail = "Isreadytofire( tolerance )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_killstreaks__harrier.push(tmpDef);

tmpDef = new CompletionItem("Acquiregroundtarget");
tmpDef.detail = "Acquiregroundtarget( targets )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_killstreaks__harrier.push(tmpDef);

tmpDef = new CompletionItem("Backtodefendlocation");
tmpDef.detail = "Backtodefendlocation( forced )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_killstreaks__harrier.push(tmpDef);

tmpDef = new CompletionItem("Wouldcollide");
tmpDef.detail = "Wouldcollide( destination )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_killstreaks__harrier.push(tmpDef);

tmpDef = new CompletionItem("Watchtargetdeath");
tmpDef.detail = "Watchtargetdeath()";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_killstreaks__harrier.push(tmpDef);

tmpDef = new CompletionItem("Watchtargetlos");
tmpDef.detail = "Watchtargetlos( tolerance )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_killstreaks__harrier.push(tmpDef);

tmpDef = new CompletionItem("Breaktarget");
tmpDef.detail = "Breaktarget( noNewTarget )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_killstreaks__harrier.push(tmpDef);

tmpDef = new CompletionItem("Harriergettargets");
tmpDef.detail = "Harriergettargets()";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_killstreaks__harrier.push(tmpDef);

tmpDef = new CompletionItem("Istarget");
tmpDef.detail = "Istarget( potentialTarget )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_killstreaks__harrier.push(tmpDef);

tmpDef = new CompletionItem("Getbesttarget");
tmpDef.detail = "Getbesttarget( targets )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_killstreaks__harrier.push(tmpDef);

tmpDef = new CompletionItem("Firemissile");
tmpDef.detail = "Firemissile( missileTarget )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_killstreaks__harrier.push(tmpDef);

tmpDef = new CompletionItem("Checkforfriendlies");
tmpDef.detail = "Checkforfriendlies( missileTarget, radiusSize )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_killstreaks__harrier.push(tmpDef);

tmpDef = new CompletionItem("Callback_vehicledamage");
tmpDef.detail = "Callback_vehicledamage( inflictor, attacker, damage, dFlags, meansOfDeath, weapon, point, dir, hitLoc, timeOffset, modelIndex, partName )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_killstreaks__harrier.push(tmpDef);

tmpDef = new CompletionItem("Playdamageefx");
tmpDef.detail = "Playdamageefx()";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_killstreaks__harrier.push(tmpDef);

tmpDef = new CompletionItem("Harrierdestroyed");
tmpDef.detail = "Harrierdestroyed()";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_killstreaks__harrier.push(tmpDef);

tmpDef = new CompletionItem("Harrierexplode");
tmpDef.detail = "Harrierexplode()";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_killstreaks__harrier.push(tmpDef);

tmpDef = new CompletionItem("Harrierspin");
tmpDef.detail = "Harrierspin( speed )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_killstreaks__harrier.push(tmpDef);

tmpDef = new CompletionItem("Engagevehicle");
tmpDef.detail = "Engagevehicle( vehTarget )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_killstreaks__harrier.push(tmpDef);

tmpDef = new CompletionItem("Fireonvehicletarget");
tmpDef.detail = "Fireonvehicletarget()";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_killstreaks__harrier.push(tmpDef);

tmpDef = new CompletionItem("Acquirevehicletarget");
tmpDef.detail = "Acquirevehicletarget( vehTarget )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_killstreaks__harrier.push(tmpDef);

tmpDef = new CompletionItem("Watchvehtargetcrash");
tmpDef.detail = "Watchvehtargetcrash()";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_killstreaks__harrier.push(tmpDef);

tmpDef = new CompletionItem("Watchvehtargetdeath");
tmpDef.detail = "Watchvehtargetdeath()";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_killstreaks__harrier.push(tmpDef);

tmpDef = new CompletionItem("Breakvehtarget");
tmpDef.detail = "Breakvehtarget()";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_killstreaks__harrier.push(tmpDef);

tmpDef = new CompletionItem("Evasivemanuverone");
tmpDef.detail = "Evasivemanuverone()";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_killstreaks__harrier.push(tmpDef);

tmpDef = new CompletionItem("Drawline");
tmpDef.detail = "Drawline( start, end, timeSlice, color )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_killstreaks__harrier.push(tmpDef);

tmpDef = new CompletionItem("Addtohelilist");
tmpDef.detail = "Addtohelilist()";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_killstreaks__harrier.push(tmpDef);

tmpDef = new CompletionItem("Removefromhelilistondeath");
tmpDef.detail = "Removefromhelilistondeath()";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_killstreaks__harrier.push(tmpDef);