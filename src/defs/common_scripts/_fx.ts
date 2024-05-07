import { CompletionItem } from 'vscode';
import { CompletionItemKind } from 'vscode';

export var common_scripts__fx = new Array<CompletionItem>();
var tmpDef;

tmpDef = new CompletionItem("Initfx");
tmpDef.detail = "Initfx()";
tmpDef.kind = CompletionItemKind.Function;
common_scripts__fx.push(tmpDef);

tmpDef = new CompletionItem("Print_org");
tmpDef.detail = "Print_org( fxcommand, fxId, fxPos, waittime )";
tmpDef.kind = CompletionItemKind.Function;
common_scripts__fx.push(tmpDef);

tmpDef = new CompletionItem("Oneshotfx");
tmpDef.detail = "Oneshotfx( fxId, fxPos, waittime, fxPos2 )";
tmpDef.kind = CompletionItemKind.Function;
common_scripts__fx.push(tmpDef);

tmpDef = new CompletionItem("Exploderfx");
tmpDef.detail = "Exploderfx( num, fxId, fxPos, waittime, fxPos2, fireFx, fireFxDelay, fireFxSound, fxSound, fxQuake, fxDamage, soundalias, repeat, delay_min, delay_max, damage_radius, fireFxTimeout, exploder_group )";
tmpDef.kind = CompletionItemKind.Function;
common_scripts__fx.push(tmpDef);

tmpDef = new CompletionItem("Loopfxrotate");
tmpDef.detail = "Loopfxrotate(fxId, fxPos, waittime, angle, fxStart, fxStop, timeout)";
tmpDef.kind = CompletionItemKind.Function;
common_scripts__fx.push(tmpDef);

tmpDef = new CompletionItem("Loopfx");
tmpDef.detail = "Loopfx( fxId, fxPos, waittime, fxPos2, fxStart, fxStop, timeout )";
tmpDef.kind = CompletionItemKind.Function;
common_scripts__fx.push(tmpDef);

tmpDef = new CompletionItem("Loopfx");
tmpDef.detail = "Loopfx(fxId, fxPos, waittime, fxPos2, fxStart, fxStop, timeout)";
tmpDef.kind = CompletionItemKind.Function;
common_scripts__fx.push(tmpDef);

tmpDef = new CompletionItem("Create_looper");
tmpDef.detail = "Create_looper()";
tmpDef.kind = CompletionItemKind.Function;
common_scripts__fx.push(tmpDef);

tmpDef = new CompletionItem("Create_loopsound");
tmpDef.detail = "Create_loopsound()";
tmpDef.kind = CompletionItemKind.Function;
common_scripts__fx.push(tmpDef);

tmpDef = new CompletionItem("Create_interval_sound");
tmpDef.detail = "Create_interval_sound()";
tmpDef.kind = CompletionItemKind.Function;
common_scripts__fx.push(tmpDef);

tmpDef = new CompletionItem("Loopfxthread");
tmpDef.detail = "Loopfxthread()";
tmpDef.kind = CompletionItemKind.Function;
common_scripts__fx.push(tmpDef);

tmpDef = new CompletionItem("Loopfxchangeid");
tmpDef.detail = "Loopfxchangeid( ent )";
tmpDef.kind = CompletionItemKind.Function;
common_scripts__fx.push(tmpDef);

tmpDef = new CompletionItem("Loopfxchangeorg");
tmpDef.detail = "Loopfxchangeorg( ent )";
tmpDef.kind = CompletionItemKind.Function;
common_scripts__fx.push(tmpDef);

tmpDef = new CompletionItem("Loopfxchangedelay");
tmpDef.detail = "Loopfxchangedelay( ent )";
tmpDef.kind = CompletionItemKind.Function;
common_scripts__fx.push(tmpDef);

tmpDef = new CompletionItem("Loopfxdeletion");
tmpDef.detail = "Loopfxdeletion( ent )";
tmpDef.kind = CompletionItemKind.Function;
common_scripts__fx.push(tmpDef);

tmpDef = new CompletionItem("Loopfxstop");
tmpDef.detail = "Loopfxstop( timeout )";
tmpDef.kind = CompletionItemKind.Function;
common_scripts__fx.push(tmpDef);

tmpDef = new CompletionItem("Loopsound");
tmpDef.detail = "Loopsound( sound, Pos, waittime )";
tmpDef.kind = CompletionItemKind.Function;
common_scripts__fx.push(tmpDef);

tmpDef = new CompletionItem("Loopsoundthread");
tmpDef.detail = "Loopsoundthread( sound, pos, waittime )";
tmpDef.kind = CompletionItemKind.Function;
common_scripts__fx.push(tmpDef);

tmpDef = new CompletionItem("Gunfireloopfx");
tmpDef.detail = "Gunfireloopfx( fxId, fxPos, shotsMin, shotsMax, shotdelayMin, shotdelayMax, betweenSetsMin, betweenSetsMax )";
tmpDef.kind = CompletionItemKind.Function;
common_scripts__fx.push(tmpDef);

tmpDef = new CompletionItem("Gunfireloopfxthread");
tmpDef.detail = "Gunfireloopfxthread( fxId, fxPos, shotsMin, shotsMax, shotdelayMin, shotdelayMax, betweenSetsMin, betweenSetsMax )";
tmpDef.kind = CompletionItemKind.Function;
common_scripts__fx.push(tmpDef);

tmpDef = new CompletionItem("Gunfireloopfxvec");
tmpDef.detail = "Gunfireloopfxvec( fxId, fxPos, fxPos2, shotsMin, shotsMax, shotdelayMin, shotdelayMax, betweenSetsMin, betweenSetsMax )";
tmpDef.kind = CompletionItemKind.Function;
common_scripts__fx.push(tmpDef);

tmpDef = new CompletionItem("Gunfireloopfxvecthread");
tmpDef.detail = "Gunfireloopfxvecthread( fxId, fxPos, fxPos2, shotsMin, shotsMax, shotdelayMin, shotdelayMax, betweenSetsMin, betweenSetsMax )";
tmpDef.kind = CompletionItemKind.Function;
common_scripts__fx.push(tmpDef);

tmpDef = new CompletionItem("Setfireloopmod");
tmpDef.detail = "Setfireloopmod( value )";
tmpDef.kind = CompletionItemKind.Function;
common_scripts__fx.push(tmpDef);

tmpDef = new CompletionItem("Setup_fx");
tmpDef.detail = "Setup_fx()";
tmpDef.kind = CompletionItemKind.Function;
common_scripts__fx.push(tmpDef);

tmpDef = new CompletionItem("Burnville_paratrooper_hack");
tmpDef.detail = "Burnville_paratrooper_hack()";
tmpDef.kind = CompletionItemKind.Function;
common_scripts__fx.push(tmpDef);

tmpDef = new CompletionItem("Burnville_paratrooper_hack_loop");
tmpDef.detail = "Burnville_paratrooper_hack_loop( normal, origin, id )";
tmpDef.kind = CompletionItemKind.Function;
common_scripts__fx.push(tmpDef);

tmpDef = new CompletionItem("Create_triggerfx");
tmpDef.detail = "Create_triggerfx()";
tmpDef.kind = CompletionItemKind.Function;
common_scripts__fx.push(tmpDef);

tmpDef = new CompletionItem("Verify_effects_assignment");
tmpDef.detail = "Verify_effects_assignment( effectID )";
tmpDef.kind = CompletionItemKind.Function;
common_scripts__fx.push(tmpDef);

tmpDef = new CompletionItem("Verify_effects_assignment_print");
tmpDef.detail = "Verify_effects_assignment_print( effectID )";
tmpDef.kind = CompletionItemKind.Function;
common_scripts__fx.push(tmpDef);

tmpDef = new CompletionItem("Oneshotfxthread");
tmpDef.detail = "Oneshotfxthread()";
tmpDef.kind = CompletionItemKind.Function;
common_scripts__fx.push(tmpDef);