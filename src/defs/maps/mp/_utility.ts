import { CompletionItem } from 'vscode';
import { CompletionItemKind } from 'vscode';

export var maps_mp__utility = new Array<CompletionItem>();
var tmpDef;

tmpDef = new CompletionItem("Exploder_sound");
tmpDef.detail = "Exploder_sound()";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("_beginlocationselection");
tmpDef.detail = "_beginlocationselection ( streakName, selectorType, directionality , size )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Stoplocationselection");
tmpDef.detail = "Stoplocationselection( disconnected, reason )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Endselectiononemp");
tmpDef.detail = "Endselectiononemp()";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Endselectiononaction");
tmpDef.detail = "Endselectiononaction( waitfor )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Endselectiononendgame");
tmpDef.detail = "Endselectiononendgame()";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Isattachment");
tmpDef.detail = "Isattachment( attachmentName )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Getattachmenttype");
tmpDef.detail = "Getattachmenttype( attachmentName )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Savemodel");
tmpDef.detail = "Savemodel()";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Loadmodel");
tmpDef.detail = "Loadmodel(info)";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Delaythread");
tmpDef.detail = "Delaythread( timer, func, param1, param2, param3, param4, param5 )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Delaythread_proc");
tmpDef.detail = "Delaythread_proc( func, timer, param1, param2, param3, param4, param5 )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Getplant");
tmpDef.detail = "Getplant()";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Orienttonormal");
tmpDef.detail = "Orienttonormal( normal )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Deleteplacedentity");
tmpDef.detail = "Deleteplacedentity( entity )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Playsoundonplayers");
tmpDef.detail = "Playsoundonplayers( sound, team, excludeList )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Sortlowermessages");
tmpDef.detail = "Sortlowermessages()";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Addlowermessage");
tmpDef.detail = "Addlowermessage( name, text, time, priority, showTimer, shouldFade, fadeToAlpha, fadeToAlphaTime, hideWhenInDemo )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Removelowermessage");
tmpDef.detail = "Removelowermessage( name )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Getlowermessage");
tmpDef.detail = "Getlowermessage()";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Setlowermessage");
tmpDef.detail = "Setlowermessage( name, text, time, priority, showTimer, shouldFade, fadeToAlpha, fadeToAlphaTime, hideWhenInDemo )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Updatelowermessage");
tmpDef.detail = "Updatelowermessage()";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Clearondeath");
tmpDef.detail = "Clearondeath( message )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Clearafterfade");
tmpDef.detail = "Clearafterfade( message )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Clearlowermessage");
tmpDef.detail = "Clearlowermessage( name )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Clearlowermessages");
tmpDef.detail = "Clearlowermessages()";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Printonteam");
tmpDef.detail = "Printonteam( printString, team )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Printboldonteam");
tmpDef.detail = "Printboldonteam( text, team )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Printboldonteamarg");
tmpDef.detail = "Printboldonteamarg( text, team, arg )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Printonteamarg");
tmpDef.detail = "Printonteamarg( text, team, arg )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Printonplayers");
tmpDef.detail = "Printonplayers( text, team )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Printandsoundoneveryone");
tmpDef.detail = "Printandsoundoneveryone( team, otherteam, printFriendly, printEnemy, soundFriendly, soundEnemy, printarg )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Printandsoundonteam");
tmpDef.detail = "Printandsoundonteam( team, printString, soundAlias )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Printandsoundonplayer");
tmpDef.detail = "Printandsoundonplayer( printString, soundAlias )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("_playlocalsound");
tmpDef.detail = "_playlocalsound( soundAlias )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Dvarintvalue");
tmpDef.detail = "Dvarintvalue( dVar, defVal, minVal, maxVal )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Dvarfloatvalue");
tmpDef.detail = "Dvarfloatvalue( dVar, defVal, minVal, maxVal )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Play_sound_on_tag");
tmpDef.detail = "Play_sound_on_tag( alias, tag )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Getotherteam");
tmpDef.detail = "Getotherteam( team )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Wait_endon");
tmpDef.detail = "Wait_endon( waitTime, endOnString, endonString2, endonString3 )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Initpersstat");
tmpDef.detail = "Initpersstat( dataName )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Getpersstat");
tmpDef.detail = "Getpersstat( dataName )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Incpersstat");
tmpDef.detail = "Incpersstat( dataName, increment )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Setpersstat");
tmpDef.detail = "Setpersstat( dataName, value )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Initplayerstat");
tmpDef.detail = "Initplayerstat( ref, defaultvalue )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Incplayerstat");
tmpDef.detail = "Incplayerstat( ref, increment )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Setplayerstat");
tmpDef.detail = "Setplayerstat( ref, value )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Getplayerstat");
tmpDef.detail = "Getplayerstat( ref )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Getplayerstattime");
tmpDef.detail = "Getplayerstattime( ref )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Setplayerstatifgreater");
tmpDef.detail = "Setplayerstatifgreater( ref, newvalue )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Setplayerstatiflower");
tmpDef.detail = "Setplayerstatiflower( ref, newvalue )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Updatepersratio");
tmpDef.detail = "Updatepersratio( ratio, num, denom )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Updatepersratiobuffered");
tmpDef.detail = "Updatepersratiobuffered( ratio, num, denom )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Waittillslowprocessallowed");
tmpDef.detail = "Waittillslowprocessallowed( allowLoop )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Waitfortimeornotify");
tmpDef.detail = "Waitfortimeornotify( time, notifyname )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Isexcluded");
tmpDef.detail = "Isexcluded( entity, entityList )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Leaderdialog");
tmpDef.detail = "Leaderdialog( dialog, team, group, excludeList )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Leaderdialogbothteams");
tmpDef.detail = "Leaderdialogbothteams( dialog1, team1, dialog2, team2, group, excludeList )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Leaderdialogonplayers");
tmpDef.detail = "Leaderdialogonplayers( dialog, players, group )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Leaderdialogonplayer");
tmpDef.detail = "Leaderdialogonplayer( dialog, group, groupOverride )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Playleaderdialogonplayer");
tmpDef.detail = "Playleaderdialogonplayer( dialog, team )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Updatemainmenu");
tmpDef.detail = "Updatemainmenu()";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Updateobjectivetext");
tmpDef.detail = "Updateobjectivetext()";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Setobjectivetext");
tmpDef.detail = "Setobjectivetext( team, text )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Setobjectivescoretext");
tmpDef.detail = "Setobjectivescoretext( team, text )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Setobjectivehinttext");
tmpDef.detail = "Setobjectivehinttext( team, text )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Getobjectivetext");
tmpDef.detail = "Getobjectivetext( team )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Getobjectivescoretext");
tmpDef.detail = "Getobjectivescoretext( team )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Getobjectivehinttext");
tmpDef.detail = "Getobjectivehinttext( team )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Gettimepassed");
tmpDef.detail = "Gettimepassed()";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Getsecondspassed");
tmpDef.detail = "Getsecondspassed()";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Getminutespassed");
tmpDef.detail = "Getminutespassed()";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Clearkillcamstate");
tmpDef.detail = "Clearkillcamstate()";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Isinkillcam");
tmpDef.detail = "Isinkillcam()";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Isvalidclass");
tmpDef.detail = "Isvalidclass( class )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Getvalueinrange");
tmpDef.detail = "Getvalueinrange( value, minValue, maxValue )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Waitfortimeornotifies");
tmpDef.detail = "Waitfortimeornotifies( desiredDelay )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Closemenus");
tmpDef.detail = "Closemenus()";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Logxpgains");
tmpDef.detail = "Logxpgains()";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Registerroundswitchdvar");
tmpDef.detail = "Registerroundswitchdvar( dvarString, defaultValue, minValue, maxValue )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Registerroundlimitdvar");
tmpDef.detail = "Registerroundlimitdvar( dvarString, defaultValue )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Registerwinlimitdvar");
tmpDef.detail = "Registerwinlimitdvar( dvarString, defaultValue )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Registerscorelimitdvar");
tmpDef.detail = "Registerscorelimitdvar( dvarString, defaultValue )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Registertimelimitdvar");
tmpDef.detail = "Registertimelimitdvar( dvarString, defaultValue )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Registerhalftimedvar");
tmpDef.detail = "Registerhalftimedvar( dvarString, defaultValue )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Registernumlivesdvar");
tmpDef.detail = "Registernumlivesdvar( dvarString, defaultValue )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Setovertimelimitdvar");
tmpDef.detail = "Setovertimelimitdvar( value )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Get_damageable_player");
tmpDef.detail = "Get_damageable_player( player, playerpos )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Get_damageable_sentry");
tmpDef.detail = "Get_damageable_sentry( sentry, sentryPos )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Get_damageable_grenade");
tmpDef.detail = "Get_damageable_grenade( grenade, entpos )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Get_damageable_mine");
tmpDef.detail = "Get_damageable_mine( mine, entpos )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Get_damageable_player_pos");
tmpDef.detail = "Get_damageable_player_pos( player )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Getstancecenter");
tmpDef.detail = "Getstancecenter()";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Get_damageable_grenade_pos");
tmpDef.detail = "Get_damageable_grenade_pos( grenade )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Getdvarvec");
tmpDef.detail = "Getdvarvec( dvarName )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Strip_suffix");
tmpDef.detail = "Strip_suffix( lookupString, stripString )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("_takeweaponsexcept");
tmpDef.detail = "_takeweaponsexcept( saveWeapon )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Savedata");
tmpDef.detail = "Savedata()";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Restoredata");
tmpDef.detail = "Restoredata()";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("_setactionslot");
tmpDef.detail = "_setactionslot( slotID, type, item )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Isfloat");
tmpDef.detail = "Isfloat( value )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Registerwatchdvarint");
tmpDef.detail = "Registerwatchdvarint( nameString, defaultValue )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Registerwatchdvarfloat");
tmpDef.detail = "Registerwatchdvarfloat( nameString, defaultValue )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Registerwatchdvar");
tmpDef.detail = "Registerwatchdvar( nameString, defaultValue )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Setoverridewatchdvar");
tmpDef.detail = "Setoverridewatchdvar( dvarString, value )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Getwatcheddvar");
tmpDef.detail = "Getwatcheddvar( dvarString )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Updatewatcheddvars");
tmpDef.detail = "Updatewatcheddvars()";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Isroundbased");
tmpDef.detail = "Isroundbased()";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Islastround");
tmpDef.detail = "Islastround()";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Wasonlyround");
tmpDef.detail = "Wasonlyround()";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Waslastround");
tmpDef.detail = "Waslastround()";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Hitroundlimit");
tmpDef.detail = "Hitroundlimit()";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Hitscorelimit");
tmpDef.detail = "Hitscorelimit()";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Hitwinlimit");
tmpDef.detail = "Hitwinlimit()";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Getscorelimit");
tmpDef.detail = "Getscorelimit()";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Getroundswon");
tmpDef.detail = "Getroundswon( team )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Isobjectivebased");
tmpDef.detail = "Isobjectivebased()";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Gettimelimit");
tmpDef.detail = "Gettimelimit()";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Gethalftime");
tmpDef.detail = "Gethalftime()";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Inovertime");
tmpDef.detail = "Inovertime()";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Gamehasstarted");
tmpDef.detail = "Gamehasstarted()";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Getaverageorigin");
tmpDef.detail = "Getaverageorigin( ent_array )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Getlivingplayers");
tmpDef.detail = "Getlivingplayers( team )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Setusingremote");
tmpDef.detail = "Setusingremote( remoteName )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Getremotename");
tmpDef.detail = "Getremotename()";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Freezecontrolswrapper");
tmpDef.detail = "Freezecontrolswrapper( frozen )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Clearusingremote");
tmpDef.detail = "Clearusingremote()";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Isusingremote");
tmpDef.detail = "Isusingremote()";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Queuecreate");
tmpDef.detail = "Queuecreate( queueName )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Queueadd");
tmpDef.detail = "Queueadd( queueName, entity )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Queueremovefirst");
tmpDef.detail = "Queueremovefirst( queueName )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("_giveweapon");
tmpDef.detail = "_giveweapon( weapon, variant, dualWieldOverRide )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("_hasperk");
tmpDef.detail = "_hasperk( perkName )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Giveperk");
tmpDef.detail = "Giveperk( perkName, useSlot )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("_setperk");
tmpDef.detail = "_setperk( perkName, useSlot )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("_setextraperks");
tmpDef.detail = "_setextraperks( perkName )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("_unsetperk");
tmpDef.detail = "_unsetperk( perkName )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("_unsetextraperks");
tmpDef.detail = "_unsetextraperks( perkName )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("_clearperks");
tmpDef.detail = "_clearperks()";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Quicksort");
tmpDef.detail = "Quicksort(array)";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Quicksortmid");
tmpDef.detail = "Quicksortmid(array, start, end)";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Swap");
tmpDef.detail = "Swap(array, index1, index2)";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("_suicide");
tmpDef.detail = "_suicide()";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Isreallyalive");
tmpDef.detail = "Isreallyalive( player )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Playdeathsound");
tmpDef.detail = "Playdeathsound()";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Rankingenabled");
tmpDef.detail = "Rankingenabled()";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Privatematch");
tmpDef.detail = "Privatematch()";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Matchmakinggame");
tmpDef.detail = "Matchmakinggame()";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Setaltsceneobj");
tmpDef.detail = "Setaltsceneobj( object, tagName, fov, forceLink )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Endsceneondeath");
tmpDef.detail = "Endsceneondeath( object )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Getgametypenumlives");
tmpDef.detail = "Getgametypenumlives()";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Givecombathigh");
tmpDef.detail = "Givecombathigh( combatHighName )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Arrayinsertion");
tmpDef.detail = "Arrayinsertion( array, item, index )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Getproperty");
tmpDef.detail = "Getproperty( dvar, defValue )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Getintproperty");
tmpDef.detail = "Getintproperty( dvar, defValue )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Getfloatproperty");
tmpDef.detail = "Getfloatproperty( dvar, defValue )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Statusmenu");
tmpDef.detail = "Statusmenu( duration )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Ischangingweapon");
tmpDef.detail = "Ischangingweapon()";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Killshouldaddtokillstreak");
tmpDef.detail = "Killshouldaddtokillstreak( weapon )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Streakshouldchain");
tmpDef.detail = "Streakshouldchain( streakName )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Isjuggernaut");
tmpDef.detail = "Isjuggernaut()";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Iskillstreakweapon");
tmpDef.detail = "Iskillstreakweapon( weapon )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Isenvironmentweapon");
tmpDef.detail = "Isenvironmentweapon( weapon )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Getweaponclass");
tmpDef.detail = "Getweaponclass( weapon )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Isdeathstreakweapon");
tmpDef.detail = "Isdeathstreakweapon( weapon )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Getbaseweaponname");
tmpDef.detail = "Getbaseweaponname( weaponName )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Fixakimbostring");
tmpDef.detail = "Fixakimbostring( weaponName, append )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Playsoundinspace");
tmpDef.detail = "Playsoundinspace( alias, origin )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Limitdecimalplaces");
tmpDef.detail = "Limitdecimalplaces( value, places )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Rounddecimalplaces");
tmpDef.detail = "Rounddecimalplaces( value, places, style )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Playerforclientid");
tmpDef.detail = "Playerforclientid( clientId )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Isrested");
tmpDef.detail = "Isrested()";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Stringtofloat");
tmpDef.detail = "Stringtofloat( stringVal )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Setselfusable");
tmpDef.detail = "Setselfusable(caller)";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Maketeamusable");
tmpDef.detail = "Maketeamusable( team )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("_updateteamusable");
tmpDef.detail = "_updateteamusable( team )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Makeenemyusable");
tmpDef.detail = "Makeenemyusable( owner )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("_updateenemyusable");
tmpDef.detail = "_updateenemyusable( owner )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Getnextlifeid");
tmpDef.detail = "Getnextlifeid()";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Initgameflags");
tmpDef.detail = "Initgameflags()";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Gameflaginit");
tmpDef.detail = "Gameflaginit( flagName, isEnabled )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Gameflag");
tmpDef.detail = "Gameflag( flagName )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Gameflagset");
tmpDef.detail = "Gameflagset( flagName )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Gameflagclear");
tmpDef.detail = "Gameflagclear( flagName )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Gameflagwait");
tmpDef.detail = "Gameflagwait( flagName )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Isprimarydamage");
tmpDef.detail = "Isprimarydamage( meansofdeath )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Isbulletdamage");
tmpDef.detail = "Isbulletdamage( meansofdeath )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Initlevelflags");
tmpDef.detail = "Initlevelflags()";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Levelflaginit");
tmpDef.detail = "Levelflaginit( flagName, isEnabled )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Levelflag");
tmpDef.detail = "Levelflag( flagName )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Levelflagset");
tmpDef.detail = "Levelflagset( flagName )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Levelflagclear");
tmpDef.detail = "Levelflagclear( flagName )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Levelflagwait");
tmpDef.detail = "Levelflagwait( flagName )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Levelflagwaitopen");
tmpDef.detail = "Levelflagwaitopen( flagName )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Getweaponattachments");
tmpDef.detail = "Getweaponattachments( weapon )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Isemped");
tmpDef.detail = "Isemped()";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Isairdenied");
tmpDef.detail = "Isairdenied()";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Isnuked");
tmpDef.detail = "Isnuked()";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Getplayerforguid");
tmpDef.detail = "Getplayerforguid( guid )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Teamplayercardsplash");
tmpDef.detail = "Teamplayercardsplash( splash, owner, team )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Iscacprimaryweapon");
tmpDef.detail = "Iscacprimaryweapon( weapName )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Iscacsecondaryweapon");
tmpDef.detail = "Iscacsecondaryweapon( weapName )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Getlastlivingplayer");
tmpDef.detail = "Getlastlivingplayer( team )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Getpotentiallivingplayers");
tmpDef.detail = "Getpotentiallivingplayers()";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Waittillrecoveredhealth");
tmpDef.detail = "Waittillrecoveredhealth( time, interval )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Attachmentmap");
tmpDef.detail = "Attachmentmap( attachmentName, weaponName )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Validateattachment");
tmpDef.detail = "Validateattachment( attachmentName )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("_objective_delete");
tmpDef.detail = "_objective_delete( objID )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Touchingbadtrigger");
tmpDef.detail = "Touchingbadtrigger()";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Setthirdpersondof");
tmpDef.detail = "Setthirdpersondof( isEnabled )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Killtrigger");
tmpDef.detail = "Killtrigger( pos, radius, height )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Findisfacing");
tmpDef.detail = "Findisfacing( ent1, ent2, tolerance )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Combinearrays");
tmpDef.detail = "Combinearrays( array1, array2 )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Setrecoilscale");
tmpDef.detail = "Setrecoilscale( scaler, scaleOverride )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Cleanarray");
tmpDef.detail = "Cleanarray( array )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Killtriggerdebug");
tmpDef.detail = "Killtriggerdebug( pos, radius, height )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Notusableforjoiningplayers");
tmpDef.detail = "Notusableforjoiningplayers( owner )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Isstrstart");
tmpDef.detail = "Isstrstart( string, subStr )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Validateusestreak");
tmpDef.detail = "Validateusestreak()";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Currentactivevehiclecount");
tmpDef.detail = "Currentactivevehiclecount( extra )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Maxvehiclesallowed");
tmpDef.detail = "Maxvehiclesallowed()";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Incrementfauxvehiclecount");
tmpDef.detail = "Incrementfauxvehiclecount()";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Decrementfauxvehiclecount");
tmpDef.detail = "Decrementfauxvehiclecount()";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Lightweightscalar");
tmpDef.detail = "Lightweightscalar()";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Allowteamchoice");
tmpDef.detail = "Allowteamchoice()";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Allowclasschoice");
tmpDef.detail = "Allowclasschoice()";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Isbuffunlockedforweapon");
tmpDef.detail = "Isbuffunlockedforweapon( buffRef, weaponRef )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Isbuffequippedonweapon");
tmpDef.detail = "Isbuffequippedonweapon( buffRef, weaponRef )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Setcommonrulesfrommatchrulesdata");
tmpDef.detail = "Setcommonrulesfrommatchrulesdata( skipFriendlyFire )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Reinitializematchrulesonmigration");
tmpDef.detail = "Reinitializematchrulesonmigration()";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Getmatchrulesspecialclass");
tmpDef.detail = "Getmatchrulesspecialclass( team, index )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);

tmpDef = new CompletionItem("Recipeclassapplyjuggernaut");
tmpDef.detail = "Recipeclassapplyjuggernaut()";
tmpDef.kind = CompletionItemKind.Function;
maps_mp__utility.push(tmpDef);