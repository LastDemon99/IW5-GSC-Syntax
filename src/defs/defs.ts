import { CompletionItem, CompletionItemKind, MarkdownString } from 'vscode';

export const defs: CompletionItem[] = [
    new CompletionItem("if", CompletionItemKind.Keyword),
    new CompletionItem("else", CompletionItemKind.Keyword),
    new CompletionItem("switch", CompletionItemKind.Keyword),
    new CompletionItem("case", CompletionItemKind.Keyword),
    new CompletionItem("while", CompletionItemKind.Keyword),
    new CompletionItem("for", CompletionItemKind.Keyword),
    new CompletionItem("foreach", CompletionItemKind.Keyword),
    new CompletionItem("return", CompletionItemKind.Keyword),
    new CompletionItem("break", CompletionItemKind.Keyword),
    new CompletionItem("continue", CompletionItemKind.Keyword),
    new CompletionItem("wait", CompletionItemKind.Function),
    new CompletionItem("waittill", CompletionItemKind.Function),
    new CompletionItem("notify", CompletionItemKind.Function),
    new CompletionItem("true", CompletionItemKind.Value),
    new CompletionItem("false", CompletionItemKind.Value),
    new CompletionItem("undefined", CompletionItemKind.Value),
    new CompletionItem("level", CompletionItemKind.Keyword),
    new CompletionItem("self", CompletionItemKind.Keyword),
    new CompletionItem("thread", CompletionItemKind.Keyword)
];

function createMarkdown(detail: string, desc: string): MarkdownString {
    const markdown = new MarkdownString();
    markdown.isTrusted = true;
    markdown.appendCodeblock(detail, 'typescript');
    markdown.appendMarkdown(desc);
    return markdown;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Functions declaration port from:: https://github.com/Slvr11/InfinityScript/blob/main/ScriptProcessor/GSCFunctions.cs //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let tmpDef: CompletionItem;

tmpDef = new CompletionItem("animHasNoteTrack");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("animHasNoteTrack(animation: <String>, noteTrackName: <String>): <Bool>",
    "Queries the given animation for a note track.");
defs.push(tmpDef);

tmpDef = new CompletionItem("getAngleDelta");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("getAngleDelta(animation: <String>, startTime?: <Float>, endTime?: <Float>): <Float>",
    "Gets the rotation difference in an Animation.\nReturns the rotation difference in the given animation.");
defs.push(tmpDef);

tmpDef = new CompletionItem("getAnimLength");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("getAnimLength(primitiveAnimation: <String>): <Float>",
    "Gets the length of an Animation.\nReturns the length of the given animation.");
defs.push(tmpDef);

tmpDef = new CompletionItem("getMoveDelta");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("getMoveDelta(animation: <String>, startTime?: <Float>, endTime?: <Float>): <Float>",
    "Gets the movement vector difference in an Animation.\nReturns the movement vector difference of the given animation.");
defs.push(tmpDef);

tmpDef = new CompletionItem("getNoteTrackTimes");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("getNoteTrackTimes(animation: <String>, noteTrackName: <String>): <Array>",
    "Gets an array of the times during an Animation that the given NoteTrack occurs.\nReturns an array containing the times where the NoteTrack occurs.");
defs.push(tmpDef);

tmpDef = new CompletionItem("getNumParts");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("getNumParts(model: <String>): <Int>",
    "Gets the number of bones in an xModel.\nReturns the amount of bones within an xModel.");
defs.push(tmpDef);

tmpDef = new CompletionItem("getPartName");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("getPartName(model: <String>, index: <Int>): <String>",
    "Gets the name of a part of a model.\nReturns the name of the indexth bone.");
defs.push(tmpDef);

tmpDef = new CompletionItem("getTagAngles");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> getTagAngles(tagName: <String>): <Vector>",
    "Gets the angles of a particular tag of this model.\nReturns the angle of the given tag");
defs.push(tmpDef);

tmpDef = new CompletionItem("getTagOrigin");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> getTagOrigin(tagName: <String>): <Vector>",
    "Gets the origin of a particular tag of this model.\nReturns the origin of the given tag");
defs.push(tmpDef);

tmpDef = new CompletionItem("scriptModelPlayAnim");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> scriptModelPlayAnim(animation: <String>): <Void>",
    "Plays an Animation on this entity");
defs.push(tmpDef);

tmpDef = new CompletionItem("scriptModelClearAnim");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> scriptModelClearAnim(): <Void>",
    "Clears this entity's current animation");
defs.push(tmpDef);

tmpDef = new CompletionItem("getCorpseAnim");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> getCorpseAnim(): <String>",
    "Gets the animation of a corpse\nReturns the name of the anim used by this corpse");
defs.push(tmpDef);

tmpDef = new CompletionItem("allClientsPrint");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("allClientsPrint(message: <String>): <Void>",
    "Prints the given string to all clients.");
defs.push(tmpDef);

tmpDef = new CompletionItem("allowSpectateTeam");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> allowSpectateTeam(team: <String>, canSpectate: <Bool>): <Void>",
    "Sets whether the player can spectate the given team.");
defs.push(tmpDef);

tmpDef = new CompletionItem("announcement");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("announcement(message: <String>): <Void>",
    "Sends an announcement to all clients.");
defs.push(tmpDef);

tmpDef = new CompletionItem("beginLocationSelection");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> beginLocationSelection(locationSelector: <String>): <Void>",
    "Causes the player to begin selecting a location. A map HUD element should be visible for them to see where they're selecting.");
defs.push(tmpDef);

tmpDef = new CompletionItem("beginLocationSelection");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> beginLocationSelection(locationSelector: <String>, directionality: <Bool>, selectorSize: <Int>): <Void>",
    "Causes the player to begin selecting a location. A map HUD element should be visible for them to see where they're selecting.");
defs.push(tmpDef);

tmpDef = new CompletionItem("clientAnnouncement");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> clientAnnouncement(message: <String>): <Void>",
    "Sends an announcement to a single client.");
defs.push(tmpDef);

tmpDef = new CompletionItem("clientPrint");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> clientPrint(message: <String>): <Void>",
    "Print a localized version of this string for a given client.");
defs.push(tmpDef);

tmpDef = new CompletionItem("clonePlayer");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> clonePlayer(duration?: <Int>): entity",
    "Clone the player's model for death animations.\nReturns the cloned player model as an Entity");
defs.push(tmpDef);

tmpDef = new CompletionItem("disableWeapons");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> disableWeapons(): <Void>",
    "Disable the player's weapon.");
defs.push(tmpDef);

tmpDef = new CompletionItem("dropItem");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> dropItem(itemName: <String>): entity",
    "Drop an item with the given item name.\nReturns the dropped item as an Entity");
defs.push(tmpDef);

tmpDef = new CompletionItem("enableWeapons");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> enableWeapons(): <Void>",
    "Enable the player's weapon.");
defs.push(tmpDef);

tmpDef = new CompletionItem("endLocationSelection");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> endLocationSelection(): <Void>",
    "Causes the player to leave location selection mode.");
defs.push(tmpDef);

tmpDef = new CompletionItem("getViewmodel");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> getViewmodel(): <String>",
    "Get the viewmodel name for the given player.\nReturns the model name of the given player's viewmodel");
defs.push(tmpDef);

tmpDef = new CompletionItem("isMantling");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> isMantling(): <Bool>",
    "Returns true if the player is mantling, false otherwise.\nReturns a bool of whether the player is mantling");
defs.push(tmpDef);

tmpDef = new CompletionItem("isOnLadder");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> isOnLadder(): <Bool>",
    "Returns true if the player is on a ladder, false otherwise.\nReturns a bool of whether the player is on a ladder or not");
defs.push(tmpDef);

tmpDef = new CompletionItem("isPlayerNumber");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> isPlayerNumber(number: <Int>): <Bool>",
    "Returns true if the given int is a valid client number.\nReturns a bool of whether the int is a valid client number or not");
defs.push(tmpDef);

tmpDef = new CompletionItem("isRagdoll");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> isRagdoll(): <Bool>",
    "Returns true if the entity is a ragdoll body, false otherwise.\nReturns a bool of whether the given entity is a ragdoll body or not");
defs.push(tmpDef);

tmpDef = new CompletionItem("isTalking");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> isTalking(): <Bool>",
    "Returns true if the player is talking via voice chat.\nReturns a bool of whether the given player is talking or not via voice chat");
defs.push(tmpDef);

tmpDef = new CompletionItem("kick");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> kick(): <Void>",
    "Kicks the specified player.");
defs.push(tmpDef);

tmpDef = new CompletionItem("makeDvarServerInfo");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("makeDvarServerInfo(dvar: <String>, value: <Parameter>): <Void>",
    "Flags a Dvar with the DVAR_CODINFO flag.");
defs.push(tmpDef);

tmpDef = new CompletionItem("sayAll");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> sayAll(message: <String>): <Void>",
    "Write a client chat message from this client to everybody.");
defs.push(tmpDef);

tmpDef = new CompletionItem("sayTeam");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> sayTeam(message: <String>): <Void>",
    "Write a client chat message from this client to everybody on their team.");
defs.push(tmpDef);

tmpDef = new CompletionItem("setRank");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> setRank(rank: <Int>, prestige?: <Int>): <Void>",
    "Sets the player's rank and prestige level.");
defs.push(tmpDef);

tmpDef = new CompletionItem("setSpawnWeapon");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> setSpawnWeapon(weapon: <String>): <Void>",
    "Sets the weapon that this player will spawn with.");
defs.push(tmpDef);

tmpDef = new CompletionItem("setTeamForTrigger");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("setTeamForTrigger(trigger: <Entity>, team: <String>): <Void>",
    "Set the team that this trigger will react to");
defs.push(tmpDef);

tmpDef = new CompletionItem("showScoreBoard");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> showScoreBoard(): <Void>",
    "Updates the scoreboard data on a given client.");
defs.push(tmpDef);

tmpDef = new CompletionItem("startRagdoll");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> startRagdoll(): <Void>",
    "Begin ragdoll physics for this entity. Does nothing if the entity is already a ragdoll.");
defs.push(tmpDef);

tmpDef = new CompletionItem("suicide");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> suicide(): <Void>",
    "Kills the player immediately as a suicide.");
defs.push(tmpDef);

tmpDef = new CompletionItem("updateDMScores");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> updateDMScores(): <Void>",
    "Updates the client's knowledge of scores for theirself and the (next) best player in the game. For use in Free-For-All.");
defs.push(tmpDef);

tmpDef = new CompletionItem("updateScores");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> updateScores(): <Void>",
    "Updates the client's knowledge of team scores.");
defs.push(tmpDef);

tmpDef = new CompletionItem("finishPlayerDamage");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> finishPlayerDamage(inflictor: <Entity>, attacker: <Entity>, damage: <Int>, damageFlags: <Int>, meansOfDeath: <String>, weapon: <String>, point: <Vector>, direction: <Vector>, hitLocation: <String>, offsetTime: <Float>): <Void>",
    "Does damage to the player");
defs.push(tmpDef);

tmpDef = new CompletionItem("glassRadiusDamage");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("glassRadiusDamage(origin: <Vector>, range: <Int>, maxDamage: <Int>, minDamage: <Int>, attacker?: <Entity>): <Void>",
    "TBD");
defs.push(tmpDef);

tmpDef = new CompletionItem("radiusDamage");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("radiusDamage(origin: <Vector>, range: <Int>, maxDamage: <Int>, minDamage: <Int>, attacker?: <Entity>, mod?: <String>, weapon?: <String>): <Void>",
    "Does damage to all damageable objects within a given radius. The amount of damage is linear according to how close the object is to the radius.");
defs.push(tmpDef);

tmpDef = new CompletionItem("radiusDamage");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> radiusDamage(origin: <Vector>, range: <Int>, maxDamage: <Int>, minDamage: <Int>, attacker: <Entity>, meansOfDeath: <String>, weapon: <String>): <Void>",
    "Does damage to all damageable objects within a given radius from this entity. The amount of damage is linear according to how close the object is to the radius.");
defs.push(tmpDef);

tmpDef = new CompletionItem("setCanDamage");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> setCanDamage(canDamage: <Bool>): <Void>",
    "Set the 'candamage' flag for this entity. This means that it can respond to notifies from bullets and grenade hits.");
defs.push(tmpDef);

tmpDef = new CompletionItem("setCanRadiusDamage");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> setCanRadiusDamage(canDamage: <Bool>): <Void>",
    "Set the 'canradiusdamage' flag for this entity. This means that it can respond to notifies from explosions and radius damages.");
defs.push(tmpDef);

tmpDef = new CompletionItem("setPlayerIgnoreRadiusDamage");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("setPlayerIgnoreRadiusDamage(ignoreRadiusDamage: <Bool>): <Void>",
    "Sets whether the player should ignore radius damage or not");
defs.push(tmpDef);

tmpDef = new CompletionItem("isExplosiveDamageMOD");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("isExplosiveDamageMOD(mod: <String>): <Bool>",
    "Checks if the passed in means of death is an explosive damage\nReturns true if the given means of death is an explosive damage");
defs.push(tmpDef);

tmpDef = new CompletionItem("addTestClient");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("addTestClient(): entity",
    "Adds a test client to the map and returns a reference to that client.\nReturns the test client as an Entity");
defs.push(tmpDef);

tmpDef = new CompletionItem("assert");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("assert(value: <Bool>): <Void>",
    "Assert that the given statement is correct. The function will throw a script error if this is false.");
defs.push(tmpDef);

tmpDef = new CompletionItem("assertEx");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("assertEx(value: <Bool>, message: <String>): <Void>",
    "Assert that the gven statement is correct. The function will throw a script error if this is false, with the given message.");
defs.push(tmpDef);

tmpDef = new CompletionItem("assertMsg");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("assertMsg(message: <String>): <Void>",
    "Throws a script error with the given message.");
defs.push(tmpDef);

tmpDef = new CompletionItem("iPrintLn");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("iPrintLn(message: <String>): <Void>",
    "Write a line to the screen.");
defs.push(tmpDef);

tmpDef = new CompletionItem("iPrintLnBold");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("iPrintLnBold(message: <String>): <Void>",
    "Write a bold line to the screen.");
defs.push(tmpDef);

tmpDef = new CompletionItem("line");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("line(start: <Vector>, end: <Vector>, color?: <Vector>, depthTest?: <Bool>, duration?: <Int>): <Void>",
    "Draw a debug line on screen.");
defs.push(tmpDef);

tmpDef = new CompletionItem("print");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("print(message: <String>): <Void>",
    "Write to the console.");
defs.push(tmpDef);

tmpDef = new CompletionItem("print3d");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("print3d(origin: <Vector>, text: <String>, color: <Vector>, alpha?: <Float>, scale?: <Float>, duration?: <Int>): <Void>",
    "Draw 3d text on screen");
defs.push(tmpDef);

tmpDef = new CompletionItem("printLn");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("printLn(message: <String>): <Void>",
    "Write a line to the console.");
defs.push(tmpDef);

tmpDef = new CompletionItem("setPrintChannel");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("setPrintChannel(channel: <String>): <String>",
    "Set the current print channel.\nReturns the previous print channel");
defs.push(tmpDef);

tmpDef = new CompletionItem("noClip");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> noClip(): <Void>",
    "Enables or disables no clip for this player");
defs.push(tmpDef);

tmpDef = new CompletionItem("ufo");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> ufo(): <Void>",
    "Enables or disables ufo mode for this player");
defs.push(tmpDef);

tmpDef = new CompletionItem("getBuildVersion");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("getBuildVersion(): <Float>",
    "Gets the game's current build version\nReturns the game's current build version number");
defs.push(tmpDef);

tmpDef = new CompletionItem("getBuildNumber");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("getBuildNumber(): <Float>",
    "Gets the game's current build number\nReturns the game's current build number");
defs.push(tmpDef);

tmpDef = new CompletionItem("getSystemTime");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("getSystemTime(): <Int>",
    "Gets the host's system's current time\nReturns the host's system's current time");
defs.push(tmpDef);

tmpDef = new CompletionItem("createPrintChannel");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("createPrintChannel(channel: <String>): <Void>",
    "Opens a print channel.");
defs.push(tmpDef);

tmpDef = new CompletionItem("getDvar");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("getDvar(dvar: <String>): <String>",
    "Gets the value of a dvar as a string.\nReturns the value of the given dvar as a string");
defs.push(tmpDef);

tmpDef = new CompletionItem("getDvarFloat");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("getDvarFloat(dvar: <String>): <Float>",
    "Gets the value of a dvar as a float.\nReturns the value of the given dvar as a float");
defs.push(tmpDef);

tmpDef = new CompletionItem("getDvarInt");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("getDvarInt(dvar: <String>): <Int>",
    "Gets the value of a dvar as an integer.\nReturns the value of the given dvar as an int");
defs.push(tmpDef);

tmpDef = new CompletionItem("setDvar");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("setDvar(dvar: <String>, value: <Parameter>): <Void>",
    "Sets the value of a script dvar. Cannot set code dvars.");
defs.push(tmpDef);

tmpDef = new CompletionItem("setDynamicDvar");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("setDynamicDvar(dvar: <String>, value: <Parameter>): <Void>",
    "Sets a dynamic dvar");
defs.push(tmpDef);

tmpDef = new CompletionItem("setDvarIfUninitialized");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("setDvarIfUninitialized(dvar: <String>, value: <Parameter>): <Void>",
    "Sets a dvar, only if the dvar has not been created yet");
defs.push(tmpDef);

tmpDef = new CompletionItem("setDevDvar");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("setDevDvar(dvar: <String>, value: <Parameter>): <Void>",
    "Sets a developer dvar");
defs.push(tmpDef);

tmpDef = new CompletionItem("setDevDvarIfUninitialized");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("setDevDvarIfUninitialized(dvar: <String>, value: <Parameter>): <Void>",
    "Sets a dev dvar, only if the dvar has not been created yet");
defs.push(tmpDef);

tmpDef = new CompletionItem("getDvarVector");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("getDvarVector(dvar: <String>): <Vector>",
    "Gets a Dvar as a vector\nGets the dvar value as a Vector3");
defs.push(tmpDef);

tmpDef = new CompletionItem("loadFX");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("loadFX(effect: <String>): <Int>",
    "Load the given effect\nReturns the ID of the loaded effect");
defs.push(tmpDef);

tmpDef = new CompletionItem("visionSetNaked");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("visionSetNaked(vision: <String>, transitionTime?: <Int>): <Void>",
    "Sets the players' naked-eye vision. Optionally give a transition time from the current vision.");
defs.push(tmpDef);

tmpDef = new CompletionItem("visionSetNight");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("visionSetNight(vision: <String>, transitionTime?: <Int>): <Void>",
    "Sets the vision preset to use for players' night vision view.");
defs.push(tmpDef);

tmpDef = new CompletionItem("playFX");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("playFX(effect: <Int>, position: <Vector>, forward?: <Vector>, up?: <Vector>): entity",
    "Play this effect");
defs.push(tmpDef);

tmpDef = new CompletionItem("playFXOnTag");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("playFXOnTag(effect: <Int>, entity: <Entity>, tag: <String>): <Void>",
    "Play this effect on the entity and tag.");
defs.push(tmpDef);

tmpDef = new CompletionItem("stopFXOnTag");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("stopFXOnTag(effect: <Int>, entity: <Entity>, tag: <String>): <Void>",
    "Stop this effect on the entity and tag.");
defs.push(tmpDef);

tmpDef = new CompletionItem("playFXOnTagForClients");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("playFXOnTagForClients(effect: <Int>, entity: <Entity>, tag: <String>, client: <Entity>): <Void>",
    "Play this effect on the entity and tag for a specific client.");
defs.push(tmpDef);

tmpDef = new CompletionItem("visionSetMissileCam");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("visionSetMissileCam(vision: <String>, fade?: <Float>): <Void>",
    "Sets the vision preset for players while they are controlling a missile");
defs.push(tmpDef);

tmpDef = new CompletionItem("visionSetThermal");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("visionSetThermal(vision: <String>, fade?: <Float>): <Void>",
    "Sets the vision preset for players while they are scoped into a thermal scope");
defs.push(tmpDef);

tmpDef = new CompletionItem("visionSetPain");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("visionSetPain(vision: <String>, fade?: <Float>): <Void>",
    "Sets the vision preset for players while they are in pain/near death");
defs.push(tmpDef);

tmpDef = new CompletionItem("setBlurForPlayer");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> setBlurForPlayer(blur: <Float>, time: <Float>): <Void>",
    "Sets the players' naked-eye vision. Optionally give a transition time from the current vision.");
defs.push(tmpDef);

tmpDef = new CompletionItem("playLoopedFX");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("playLoopedFX(effect: <Int>, time: <Float>, origin: <Vector>, offset?: <Int>, forward?: <Vector>, up?: <Vector>): entity",
    "Plays an effect and loops it at the given origin for the given time value");
defs.push(tmpDef);

tmpDef = new CompletionItem("spawnFX");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("spawnFX(effect: <Int>, position: <Vector>, forward?: <Vector>, up?: <Vector>): entity",
    "Create an effect entity that can be re-triggered efficiently at arbitrary intervals. This doesn't play the effect. Use delete to free it when done.\nReturns the spawned effect as an Entity");
defs.push(tmpDef);

tmpDef = new CompletionItem("triggerFX");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("triggerFX(effect: <Entity>): <Void>",
    "Replays the effect associated with the effect entity. This does not kill any existing effects.");
defs.push(tmpDef);

tmpDef = new CompletionItem("triggerFX");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("triggerFX(effect: <Entity>, when: <Float>): <Void>",
    "Replays the effect associated with the effect entity. This does not kill any existing effects.");
defs.push(tmpDef);

tmpDef = new CompletionItem("delete");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> delete(): <Void>",
    "Deletes an entity");
defs.push(tmpDef);

tmpDef = new CompletionItem("detonate");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> detonate(newAttacker?: <Entity>): <Void>",
    "Causes a grenade to explode. Must be called on a grenade.");
defs.push(tmpDef);

tmpDef = new CompletionItem("disableAimAssist");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> disableAimAssist(): <Void>",
    "Disables aim assist on an entity. The entity must have a brush model.");
defs.push(tmpDef);

tmpDef = new CompletionItem("enableAimAssist");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> enableAimAssist(): <Void>",
    "Enables aim assist on an entity. The entity must have a brush model.");
defs.push(tmpDef);

tmpDef = new CompletionItem("getEnt");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("getEnt(name: <String>, key: <String>): entity",
    "Looks up an entity by key and name\nReturns the entity found with the given key and name if any");
defs.push(tmpDef);

tmpDef = new CompletionItem("getEntArray");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("getEntArray(name?: <String>, key?: <String>): entity",
    "Gets an array of entities that have the given key, name pair\nReturns the entities found with the given key and name in a Array");
defs.push(tmpDef);

tmpDef = new CompletionItem("getEntByNum");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("getEntByNum(entNum: <Int>): entity",
    "Gets an entity from its entity number\nReturns the entity of the given entity number");
defs.push(tmpDef);

tmpDef = new CompletionItem("getEntityNumber");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> getEntityNumber(): <Int>",
    "Get the entity number of this entity\nReturns the entity number of the given entity");
defs.push(tmpDef);

tmpDef = new CompletionItem("getNormalHealth");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> getNormalHealth(): <Int>",
    "Gets the normal health of this entity\nReturns the normal health value of this entity");
defs.push(tmpDef);

tmpDef = new CompletionItem("getOrigin");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> getOrigin(): <Vector>",
    "Gets the origin of an entity\nReturns the origin of the given entity");
defs.push(tmpDef);

tmpDef = new CompletionItem("hide");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> hide(): <Void>",
    "Hides a visible entity");
defs.push(tmpDef);

tmpDef = new CompletionItem("hidePart");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> hidePart(tag: <String>, model?: <String>): <Void>",
    "Hide part of an entity");
defs.push(tmpDef);

tmpDef = new CompletionItem("isTouching");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> ent IsTouching(entity: <Entity>): <Bool>",
    "Checks whether the entity is touching the passed in entity or trigger\nReturns true if the entity is touching the passed in entity/trigger");
defs.push(tmpDef);

tmpDef = new CompletionItem("laserOff");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> laserOff(): <Void>",
    "Turns off entity's laser sight");
defs.push(tmpDef);

tmpDef = new CompletionItem("laserOn");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> laserOn(): <Void>",
    "Turns on entity's laser sight");
defs.push(tmpDef);

tmpDef = new CompletionItem("linkTo");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> ent LinkTo(entity: <Entity>, tag?: <String>, originOffset?: <Vector>, anglesOffset?: <Vector>): <Void>",
    "Attaches one entity to another");
defs.push(tmpDef);

tmpDef = new CompletionItem("localToWorldCoords");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> localToWorldCoords(localCoord: <Vector>): <Void>",
    "Transform the given local coordinate point to a world coordinate point");
defs.push(tmpDef);

tmpDef = new CompletionItem("setContents");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> setContents(contents: <Int>): <Int>",
    "Sets the contents of an entity\nReturns the old contents of the entity");
defs.push(tmpDef);

tmpDef = new CompletionItem("setCursorHint");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> setCursorHint(hint: <String>): <Void>",
    "Sets a visible cursor near an objective");
defs.push(tmpDef);

tmpDef = new CompletionItem("setHintString");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> setHintString(hint: <String>): <Void>",
    "Sets the hint string for a usable entity");
defs.push(tmpDef);

tmpDef = new CompletionItem("setModel");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> setModel(model: <String>): <Void>",
    "Sets the model of the entity to the given model name");
defs.push(tmpDef);

tmpDef = new CompletionItem("setNormalHealth");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> setNormalHealth(health: <Int>): <Void>",
    "Sets the normal health of this entity");
defs.push(tmpDef);

tmpDef = new CompletionItem("show");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> show(): <Void>",
    "Shows a hidden entity");
defs.push(tmpDef);

tmpDef = new CompletionItem("showAllParts");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> showAllParts(): <Void>",
    "Show all parts of an entity");
defs.push(tmpDef);

tmpDef = new CompletionItem("showPart");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> showPart(tag: <String>, model?: <String>): <Void>",
    "Show part of an entity");
defs.push(tmpDef);

tmpDef = new CompletionItem("showToPlayer");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> showToPlayer(player: <Entity>): <Void>",
    "Show the entity to a given client");
defs.push(tmpDef);

tmpDef = new CompletionItem("unlink");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> unlink(): <Void>",
    "Unlinks a linked entity from another entity");
defs.push(tmpDef);

tmpDef = new CompletionItem("useBy");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> useBy(player: <Entity>): <Void>",
    "Uses the entity with the passed in entity as the activator");
defs.push(tmpDef);

tmpDef = new CompletionItem("useTriggerRequireLookAt");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> useTriggerRequireLookAt(): <Void>",
    "Modifies the use trigger so that it requires the user to be looking at it");
defs.push(tmpDef);

tmpDef = new CompletionItem("playFX");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> playFX(effect: <Int>, position: <Vector>, forward?: <Vector>, up?: <Vector>): <Void>",
    "Play an effect so that it is attached to this entity");
defs.push(tmpDef);

tmpDef = new CompletionItem("dropScavengerBag");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> dropScavengerBag(item: <String>): entity",
    "Creates a scavenger bag from this entity and drops it\nReturns a reference to the dropped scavenger bag an an Entity");
defs.push(tmpDef);

tmpDef = new CompletionItem("attach");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> attach(model: <String>, tag?: <String>, ignoreCollision?: <Bool>): <Void>",
    "Attaches a model to an entity");
defs.push(tmpDef);

tmpDef = new CompletionItem("detach");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> detach(model: <String>, tag?: <String>): <Void>",
    "Detaches a model to an entity");
defs.push(tmpDef);

tmpDef = new CompletionItem("detachAll");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> detachAll(): <Void>",
    "Detaches all attached model from an entity");
defs.push(tmpDef);

tmpDef = new CompletionItem("attachShieldModel");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> attachShieldModel(model: <String>, tag: <String>): <Void>",
    "Attaches the riot shield model to the given tag");
defs.push(tmpDef);

tmpDef = new CompletionItem("detachShieldModel");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> detachShieldModel(model: <String>, tag: <String>): <Void>",
    "Detaches the riot shield model from the given tag");
defs.push(tmpDef);

tmpDef = new CompletionItem("moveShieldModel");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> moveShieldModel(model: <String>, tag1: <String>, tag2: <String>): <Void>",
    "Moves the attached riot shield model from the first tag to the second tag");
defs.push(tmpDef);

tmpDef = new CompletionItem("getAttachSize");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> getAttachSize(): <Int>",
    "Gets the number of attached models for this entity\nReturns the number of attached models on the given entity");
defs.push(tmpDef);

tmpDef = new CompletionItem("getAttachModelName");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> getAttachModelName(index: <Int>): <String>",
    "Gets the name of the attached model at the given attachment slot");
defs.push(tmpDef);

tmpDef = new CompletionItem("getAttachTagName");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> getAttachTagName(index: <Int>): <String>",
    "TBD");
defs.push(tmpDef);

tmpDef = new CompletionItem("getAttachIgnoreCollision");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> getAttachIgnoreCollision(index: <Int>): <Bool>",
    "Hides all extra parts of this entity");
defs.push(tmpDef);

tmpDef = new CompletionItem("hidePart_AllInstances");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> hidePart_AllInstances(tag: <String>, model?: <String>): <Void>",
    "Attaches one entity to another at the tag by blending (TBD)");
defs.push(tmpDef);

tmpDef = new CompletionItem("hideAllParts");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> hideAllParts(): <Void>",
    "Attaches one entity to another at the tag by blending (TBD)");
defs.push(tmpDef);

tmpDef = new CompletionItem("linkToBlendToTag");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> ent LinkToBlendToTag(entity: <Entity>, tag: <String>): <Void>",
    "Checks if this entity is currently linked to another entity\nReturns true if this entity is linked to another entity");
defs.push(tmpDef);

tmpDef = new CompletionItem("linkToBlendToTag");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> ent LinkToBlendToTag(entity: <Entity>, tag: <String>, collide: <Bool>): <Void>",
    "Enables LinkTo() for an entity");
defs.push(tmpDef);

tmpDef = new CompletionItem("isLinked");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> isLinked(): <Bool>",
    "Turns on the laser for the alt view(TBD)");
defs.push(tmpDef);

tmpDef = new CompletionItem("enableLinkTo");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> enableLinkTo(): <Void>",
    "Turns off the laser for the alt view(TBD)");
defs.push(tmpDef);

tmpDef = new CompletionItem("laserAltViewOn");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> laserAltViewOn(): <Void>",
    "Makes this entity usable to players");
defs.push(tmpDef);

tmpDef = new CompletionItem("laserAltViewOff");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> laserAltViewOff(): <Void>",
    "Makes this entity unusable to players");
defs.push(tmpDef);

tmpDef = new CompletionItem("makeUsable");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> makeUsable(): <Void>",
    "Gets the velocity of this entity\nReturns the current velocity of this entity");
defs.push(tmpDef);

tmpDef = new CompletionItem("makeUnUsable");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> makeUnUsable(): <Void>",
    "Sets the target entity of a turret or missile");
defs.push(tmpDef);

tmpDef = new CompletionItem("getEntityVelocity");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> getEntityVelocity(): <Vector>",
    "Sets the target position of a turret or missile");
defs.push(tmpDef);

tmpDef = new CompletionItem("setTargetEnt");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> setTargetEnt(target: <Entity>): <Void>",
    "Clears the current target of this turret or missile");
defs.push(tmpDef);

tmpDef = new CompletionItem("setTargetPos");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> setTargetPos(target: <Vector>): <Void>",
    "Sets a missile to fly directly toward it's target");
defs.push(tmpDef);

tmpDef = new CompletionItem("clearTarget");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> clearTarget(): <Void>",
    "Sets a missile to fly up in an arc and then come back down to hit it's target on top");
defs.push(tmpDef);

tmpDef = new CompletionItem("setFlightModeDirect");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> setFlightModeDirect(): <Void>",
    "Gets the intensity of a light entity\nReturns the intensity of this light entity");
defs.push(tmpDef);

tmpDef = new CompletionItem("setFlightModeTop");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> setFlightModeTop(): <Void>",
    "Sets the intensity of a light entity");
defs.push(tmpDef);

tmpDef = new CompletionItem("getLightIntensity");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> getLightIntensity(): <Float>",
    "Attaches the player's camera to an entity");
defs.push(tmpDef);

tmpDef = new CompletionItem("setLightIntensity");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> setLightIntensity(intensity: <Float>): <Void>",
    "Attaches the player's camera to an entity");
defs.push(tmpDef);

tmpDef = new CompletionItem("cameraLinkTo");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> ent CameraLinkTo(entity: <Entity>, tag?: <String>): <Void>",
    "Unlink the player's camera from an entity");
defs.push(tmpDef);

tmpDef = new CompletionItem("cameraLinkTo");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> ent CameraLinkTo(entity: <Entity>, tag: <String>, originOffset: <Vector>, anglesOffset: <Vector>): <Void>",
    "Links this player's controls to an entity so that any player input is directed to the linked entity");
defs.push(tmpDef);

tmpDef = new CompletionItem("cameraUnlink");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> cameraUnlink(): <Void>",
    "Unlink the player's controls from an entity");
defs.push(tmpDef);

tmpDef = new CompletionItem("controlsLinkTo");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> ent ControlsLinkTo(entity: <Entity>): <Void>",
    "Makes a vehicle solid with capsule size");
defs.push(tmpDef);

tmpDef = new CompletionItem("controlsUnlink");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> controlsUnlink(): <Void>",
    "Makes a vehicle solid with sphere size");
defs.push(tmpDef);

tmpDef = new CompletionItem("makeVehicleSolidCapsule");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> makeVehicleSolidCapsule(xRadius: <Float>, zOffset: <Float>, zRadius: <Float>): <Void>",
    "Transfers any marks on this model to a new script_model(TBD)");
defs.push(tmpDef);

tmpDef = new CompletionItem("makeVehicleSolidSphere");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> makeVehicleSolidSphere(radius: <Float>, zOffset: <Float>): <Void>",
    "Clones the given brush model into this script model so it can be controlled by the script");
defs.push(tmpDef);

tmpDef = new CompletionItem("transferMarksToNewScriptModel");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> transferMarksToNewScriptModel(ent: <Entity>): <Void>",
    "Sets this entity to be usable by the given player");
defs.push(tmpDef);

tmpDef = new CompletionItem("cloneBrushModelToScriptModel");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> cloneBrushModelToScriptModel(brushModel: <Entity>): <Void>",
    "Sets this entity to be unusable by the given player");
defs.push(tmpDef);

tmpDef = new CompletionItem("enablePlayerUse");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> enablePlayerUse(player: <Entity>): <Void>",
    "Makes this entity into a scrambler so it will behave as a scrambler for the given player");
defs.push(tmpDef);

tmpDef = new CompletionItem("disablePlayerUse");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> disablePlayerUse(player: <Entity>): <Void>",
    "Makes this entity into a portable radar so it will behave as a partable radar for the given player");
defs.push(tmpDef);

tmpDef = new CompletionItem("makeScrambler");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> makeScrambler(owner: <Entity>): <Void>",
    "Makes this entity into a trophy so it will behave as a trophy system for the given player");
defs.push(tmpDef);

tmpDef = new CompletionItem("makePortableRadar");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> makePortableRadar(owner: <Entity>): <Void>",
    "Checks if this entity is a spawner or not\nReturns true if this entity is a spawner");
defs.push(tmpDef);

tmpDef = new CompletionItem("makeTrophySystem");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> makeTrophySystem(owner: <Entity>): <Void>",
    "Deletes a missile attractor or repulsor(TBD)");
defs.push(tmpDef);

tmpDef = new CompletionItem("isSpawner");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> isSpawner(): <Bool>",
    "Sets the default thermal body for players");
defs.push(tmpDef);

tmpDef = new CompletionItem("deleteAttractor");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("deleteAttractor(attractor: <Entity>): <Void>",
    "Gets the owner of a missile or explosive\nReturns the owner of the explosive");
defs.push(tmpDef);

tmpDef = new CompletionItem("setThermalBodyMaterial");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("setThermalBodyMaterial(body: <String>): <Void>",
    "Looks up an glass piece by name\nReturns the glass piece found with the given key and name if any");
defs.push(tmpDef);

tmpDef = new CompletionItem("getMissileOwner");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("getMissileOwner(explosive: <Entity>): entity",
    "Gets an array of glass pieces that have the given name\nReturns the glass pieces found with the given key and name in a Array");
defs.push(tmpDef);

tmpDef = new CompletionItem("getGlass");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("getGlass(name: <String>): entity",
    "Gets the origin of a piece of glass(TBD)\nReturns the origin of the glass piece");
defs.push(tmpDef);

tmpDef = new CompletionItem("getGlassArray");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("getGlassArray(name: <String>): entity",
    "Checks if the given glass entity is destroyed or not\nReturns true if the glass entity is destroyed");
defs.push(tmpDef);

tmpDef = new CompletionItem("getGlassOrigin");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("getGlassOrigin(glass: <Int>): <Vector>",
    "Shatters a glass entity");
defs.push(tmpDef);

tmpDef = new CompletionItem("isGlassDestroyed");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("isGlassDestroyed(glass: <Int>): <Bool>",
    "Deletes a glass entity");
defs.push(tmpDef);

tmpDef = new CompletionItem("destroyGlass");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("destroyGlass(glass: <Int>): <Void>",
    "Gets the channel count of an entity(TBD)");
defs.push(tmpDef);

tmpDef = new CompletionItem("deleteGlass");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("deleteGlass(glass: <Int>): <Void>",
    "Gets the channel name of an entity(TBD)");
defs.push(tmpDef);

tmpDef = new CompletionItem("getEntChannelsCount");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> getEntChannelsCount(): <Int>",
    "TBD");
defs.push(tmpDef);

tmpDef = new CompletionItem("getEntChannelName");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> getEntChannelName(): <String>",
    "Sets a helicopter's current damage state");
defs.push(tmpDef);

tmpDef = new CompletionItem("setScriptMoverInKillcam");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> mover SetScriptMoverInKillcam(type: <String>): <Void>",
    "Close a script-controlled file.\nReturns 1 if successful and -1 if unsuccessful");
defs.push(tmpDef);

tmpDef = new CompletionItem("setDamageState");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> setDamageState(state: <Int>): <Void>",
    "Get a specific argument number from the current line.");
defs.push(tmpDef);

tmpDef = new CompletionItem("closeFile");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("closeFile(fileNum: <Int>): <Int>",
    "Writes items out to a script-controlled file, inserting a comma in-between each one.");
defs.push(tmpDef);

tmpDef = new CompletionItem("fGetArg");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("fGetArg(fileNum: <Int>, arg: <Int>): <Void>",
    "Write text out to a script-controlled file.");
defs.push(tmpDef);

tmpDef = new CompletionItem("fPrintFields");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("fPrintFields(fileNum: <Int>, Parameter: <params>[]): <Void>",
    "Read the next line of comma separated value text from a script-controlled file.\nReturns the number of comma separated values in the line");
defs.push(tmpDef);

tmpDef = new CompletionItem("fPrintLn");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("fPrintLn(fileNum: <Int>, output: <String>): <Void>",
    "Set a hud element to transition in fontScale over time. Normally setting the fontScale of an element causes an immediate visual change.");
defs.push(tmpDef);

tmpDef = new CompletionItem("fReadLn");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("fReadLn(fileNum: <Int>): <Int>",
    "Clear the config strings for the unique text set after this string. This is intended for development use only.");
defs.push(tmpDef);

tmpDef = new CompletionItem("changeFontScaleOverTime");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> hud ChangeFontScaleOverTime(time: <Float>): <Void>",
    "Clear this waypoint from targetting an entity.");
defs.push(tmpDef);

tmpDef = new CompletionItem("clearAllTextAfterHudelem");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> hud ClearAllTextAfterHudelem(): <Void>",
    "Remove this Hud element altogether");
defs.push(tmpDef);

tmpDef = new CompletionItem("clearTargetEnt");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> hud ClearTargetEnt(): <Void>",
    "Set a hud element to transition in color (or alpha) over time. Normally setting the color (or alpha) of an element causes an immediate visual change. However, if the color (or alpha) gets set within <time> after calling fadeOverTime, then the hud element will transition to the new color over the remaining <time>.");
defs.push(tmpDef);

tmpDef = new CompletionItem("destroy");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> hud Destroy(): <Void>",
    "Test fade");
defs.push(tmpDef);

tmpDef = new CompletionItem("fadeOverTime");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> hud FadeOverTime(time: <Float>): <Void>",
    "Set a hud element to move over time.");
defs.push(tmpDef);

tmpDef = new CompletionItem("fadeOverTime2");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> hud FadeOverTime2(): <Void>",
    "Test move");
defs.push(tmpDef);

tmpDef = new CompletionItem("moveOverTime");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> hud MoveOverTime(time: <Float>): <Void>",
    "Create a new hud element for a particular client\nReturns a reference to the created hud element as a HudElem");
defs.push(tmpDef);

tmpDef = new CompletionItem("moveOverTime2");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> hud MoveOverTime2(): <Void>",
    "Create a new hud element\nReturns a reference to the created hud element as a HudElem");
defs.push(tmpDef);

tmpDef = new CompletionItem("newClientHudElem");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("newClientHudElem(client: <Entity>): hudelem",
    "Create a new hud element for a particular team\nReturns a reference to the created hud element as a HudElem");
defs.push(tmpDef);

tmpDef = new CompletionItem("newHudElem");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("newHudElem(): hudelem",
    "Create an obituary for a character");
defs.push(tmpDef);

tmpDef = new CompletionItem("newTeamHudElem");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("newTeamHudElem(team: <String>): hudelem",
    "Reset a HUD element to its default state.");
defs.push(tmpDef);

tmpDef = new CompletionItem("obituary");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("obituary(victim: <Entity>, attacker: <Entity>, weapon: <String>, meansOfDeath: <String>): <Void>",
    "Set a hud element to scale over time.");
defs.push(tmpDef);

tmpDef = new CompletionItem("reset");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> hud Reset(): <Void>",
    "Set a clock HUD element to count down over a time period.");
defs.push(tmpDef);

tmpDef = new CompletionItem("scaleOverTime");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> hud ScaleOverTime(time: <Float>, width: <Int>, height: <Int>): <Void>",
    "Set a clock HUD element to count up over a time period.");
defs.push(tmpDef);

tmpDef = new CompletionItem("setClock");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> hud SetClock(time: <Float>, totalTime: <Float>, material: <String>, width?: <Int>, height?: <Int>): <Void>",
    "Set the map name string");
defs.push(tmpDef);

tmpDef = new CompletionItem("setClockUp");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> hud SetClockUp(time: <Float>, totalTime: <Float>, material: <String>, width?: <Int>, height?: <Int>): <Void>",
    "Set the player name string for a HUD element");
defs.push(tmpDef);

tmpDef = new CompletionItem("setMapNameString");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> hud SetMapNameString(mapname: <String>): <Void>",
    "Set the hudelem string to display with a 'Pulse' effect.");
defs.push(tmpDef);

tmpDef = new CompletionItem("setPlayerNameString");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> hud SetPlayerNameString(player: <Entity>): <Void>",
    "Set the material for this Hud Element.");
defs.push(tmpDef);

tmpDef = new CompletionItem("setPulseFX");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> hud SetPulseFX(speed: <Int>, decayStart: <Int>, decayDuration: <Int>): <Void>",
    "Set the entity that this waypoint should target. In MP, entity should already be a broadcasting entity.");
defs.push(tmpDef);

tmpDef = new CompletionItem("setShader");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> hud SetShader(material: <String>, width?: <Int>, height?: <Int>): <Void>",
    "Set the timer HUD element to count down in tenths of a second.");
defs.push(tmpDef);

tmpDef = new CompletionItem("setTargetEnt");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> hud SetTargetEnt(entity: <Entity>): <Void>",
    "Set the timer HUD element to count up in tenths of a second.");
defs.push(tmpDef);

tmpDef = new CompletionItem("setTenthsTimer");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> hud SetTenthsTimer(time: <Float>): <Void>",
    "Set HUD text for this element");
defs.push(tmpDef);

tmpDef = new CompletionItem("setTenthsTimerUp");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> hud SetTenthsTimerUp(time: <Float>): <Void>",
    "Set the timer HUD element to count down.");
defs.push(tmpDef);

tmpDef = new CompletionItem("setText");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> hud SetText(text: <String>): <Void>",
    "Set the timer HUD element to count up.");
defs.push(tmpDef);

tmpDef = new CompletionItem("setTimer");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> hud SetTimer(time: <Float>): <Void>",
    "Set the value HUD element to a given value");
defs.push(tmpDef);

tmpDef = new CompletionItem("setTimerUp");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> hud SetTimerUp(time: <Float>): <Void>",
    "Sets a HUD element to be a waypoint.");
defs.push(tmpDef);

tmpDef = new CompletionItem("setValue");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> hud SetValue(value: <Int>): <Void>",
    "Sets a HUD element to be a waypoint.");
defs.push(tmpDef);

tmpDef = new CompletionItem("setWaypoint");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> hud SetWaypoint(constantSize: <Bool>): <Void>",
    "Sets a HUD element to be a waypoint.");
defs.push(tmpDef);

tmpDef = new CompletionItem("setWaypoint");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> hud SetWaypoint(constantSize: <Bool>, pinToScreenEdge: <Bool>): <Void>",
    "Sets a HUD element to be a waypoint.");
defs.push(tmpDef);

tmpDef = new CompletionItem("setWaypoint");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> hud SetWaypoint(constantSize: <Bool>, pinToScreenEdge: <Bool>, fadeOutPinnedIcon: <Bool>): <Void>",
    "Shows a splash notification to this player");
defs.push(tmpDef);

tmpDef = new CompletionItem("setWaypoint");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> hud SetWaypoint(constantSize: <Bool>, pinToScreenEdge: <Bool>, fadeOutPinnedIcon: <Bool>, is3D: <Bool>): <Void>",
    "Shows a splash notification to this player");
defs.push(tmpDef);

tmpDef = new CompletionItem("showHudSplash");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> showHudSplash(splash: <String>, slot: <Int>): <Void>",
    "Set the timer HUD element to a time and freezes it");
defs.push(tmpDef);

tmpDef = new CompletionItem("showHudSplash");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> showHudSplash(splash: <String>, slot: <Int>, optionalNum: <Int>): <Void>",
    "Set the timer HUD element to a time in tenths of a second and freezes it");
defs.push(tmpDef);

tmpDef = new CompletionItem("setTimerStatic");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> hud SetTimerStatic(time: <Float>): <Void>",
    "Sets a waypoint hud to rotate along the screen while it's offscreen(TBD)");
defs.push(tmpDef);

tmpDef = new CompletionItem("setTenthsTimerStatic");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> hud SetTenthsTimerStatic(time: <Float>): <Void>",
    "Sets a waypoint hud to have an arrow while offscreen(TBD)");
defs.push(tmpDef);

tmpDef = new CompletionItem("setWaypointEdgeStyle_RotatingIcon");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> hud SetWaypointEdgeStyle_RotatingIcon(): <Void>",
    "Sets a waypoint hud to only display if it is offscreen(TBD)");
defs.push(tmpDef);

tmpDef = new CompletionItem("setWaypointEdgeStyle_SecondaryArrow");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> hud SetWaypointEdgeStyle_SecondaryArrow(): <Void>",
    "Create an earthquake at the given point.");
defs.push(tmpDef);

tmpDef = new CompletionItem("setWaypointIconOffScreenOnly");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> hud SetWaypointIconOffScreenOnly(): <Void>",
    "Exits the current level.");
defs.push(tmpDef);

tmpDef = new CompletionItem("earthquake");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("earthquake(scale: <Float>, duration: <Float>, source: <Vector>, radius: <Int>): <Void>",
    "Gets the yaw value of North\nReturns the yaw value of North");
defs.push(tmpDef);

tmpDef = new CompletionItem("exitLevel");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("exitLevel(savePersistent: <Bool>): <Void>",
    "Gets the start time for the current round\nReturns the start time for the current round");
defs.push(tmpDef);

tmpDef = new CompletionItem("getNorthYaw");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("getNorthYaw(): <Float>",
    "Gets the level time in milliseconds from the start of the level\nReturns the level time in milliseconds from the start of the level");
defs.push(tmpDef);

tmpDef = new CompletionItem("getStartTime");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("getStartTime(): <Int>",
    "Checks if the game is a splitscreen game\nReturns true if the game is a splitscreen game");
defs.push(tmpDef);

tmpDef = new CompletionItem("getTime");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("getTime(): <Int>",
    "Checks if the string is a valid gametype\nReturns true if the string is a valid gametype");
defs.push(tmpDef);

tmpDef = new CompletionItem("isSplitScreen");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("isSplitScreen(): <Bool>",
    "Checks if the map with the given name exists on the server\nReturns true if the map with the given name exists on the server");
defs.push(tmpDef);

tmpDef = new CompletionItem("isValidGametype");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("isValidGametype(gametype: <String>): <Bool>",
    "Alters the way that the player name is updated, to prevent cheating by spectators altering their name to communicate with active players");
defs.push(tmpDef);

tmpDef = new CompletionItem("mapExists");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("mapExists(mapname: <String>): <Bool>",
    "Sets the time the current match will end");
defs.push(tmpDef);

tmpDef = new CompletionItem("setClientNameMode");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("setClientNameMode(mode: <String>): <Void>",
    "Set the center of the map (used by network code to optimize position data)");
defs.push(tmpDef);

tmpDef = new CompletionItem("setGameEndTime");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("setGameEndTime(time: <Int>): <Void>",
    "Sets the info for the satelite map on the compass");
defs.push(tmpDef);

tmpDef = new CompletionItem("setMapCenter");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("setMapCenter(center: <Vector>): <Void>",
    "Sets the player to be the winner");
defs.push(tmpDef);

tmpDef = new CompletionItem("setMiniMap");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("setMiniMap(material: <String>, upperLeftX: <Float>, upperLeftY: <Float>, lowerRightX: <Float>, lowerRightY: <Float>): <Void>",
    "Sets a team to be the winner");
defs.push(tmpDef);

tmpDef = new CompletionItem("setWinningPlayer");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("setWinningPlayer(player: <Entity>): <Void>",
    "Update all client names. Only works in 'manual_change' mode");
defs.push(tmpDef);

tmpDef = new CompletionItem("setWinningTeam");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("setWinningTeam(team: <String>): <Void>",
    "Gets the Entity number for the world\nReturns the entity number for the world");
defs.push(tmpDef);

tmpDef = new CompletionItem("updateClientNames");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("updateClientNames(): <Void>",
    "Sets the level's sunlight color");
defs.push(tmpDef);

tmpDef = new CompletionItem("worldEntNumber");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("worldEntNumber(): <Int>",
    "Resets the level's sunlight color to default");
defs.push(tmpDef);

tmpDef = new CompletionItem("setSunlight");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("setSunlight(rgb: <Vector>): <Void>",
    "Restarts the current game");
defs.push(tmpDef);

tmpDef = new CompletionItem("resetSunlight");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("resetSunlight(): <Void>",
    "Ends the current match(TBD)");
defs.push(tmpDef);

tmpDef = new CompletionItem("map_Restart");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("map_Restart(savePersistant: <Bool>): <Void>",
    "Ends the current party");
defs.push(tmpDef);

tmpDef = new CompletionItem("matchEnd");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("matchEnd(): <Void>",
    "Gets the minimum uav strength\nReturns the minimum value of uav strength");
defs.push(tmpDef);

tmpDef = new CompletionItem("endParty");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("endParty(): <Void>",
    "Gets the maximum uav strength\nReturns the maximum value of uav strength");
defs.push(tmpDef);

tmpDef = new CompletionItem("getUAVStrengthMin");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("getUAVStrengthMin(): <Int>",
    "Gets the neutral uav strength value\nReturns the neutral value of uav strength");
defs.push(tmpDef);

tmpDef = new CompletionItem("getUAVStrengthMax");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("getUAVStrengthMax(): <Int>",
    "Gets the uav strength level at which the radar will sweep for enemies in a fast speed\nReturns the value of uav strength that will sweep the radar fast");
defs.push(tmpDef);

tmpDef = new CompletionItem("getUAVStrengthLevelNeutral");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("getUAVStrengthLevelNeutral(): <Int>",
    "Gets the uav strength level at which the radar will show enemy direction\nReturns the value of uav strength that will show enemy direction");
defs.push(tmpDef);

tmpDef = new CompletionItem("getUAVStrengthLevelShowEnemyFastSweep");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("getUAVStrengthLevelShowEnemyFastSweep(): <Int>",
    "Sets a value for the current match's data");
defs.push(tmpDef);

tmpDef = new CompletionItem("getUAVStrengthLevelShowEnemyDirectional");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("getUAVStrengthLevelShowEnemyDirectional(): <Int>",
    "Gets a value of a field of the current match's data\nReturns the value of the given field in the current match's data");
defs.push(tmpDef);

tmpDef = new CompletionItem("setMatchData");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("setMatchData(Parameter: <params>[]): <Void>",
    "Send the current match data to all clients(TBD)");
defs.push(tmpDef);

tmpDef = new CompletionItem("getMatchData");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("getMatchData(Parameter: <params>[]): parameter",
    "Clears all match data fields to default");
defs.push(tmpDef);

tmpDef = new CompletionItem("sendMatchData");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("sendMatchData(): <Void>",
    "Sets the current match's matchdata definition file(TBD)");
defs.push(tmpDef);

tmpDef = new CompletionItem("clearMatchData");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("clearMatchData(): <Void>",
    "Sets up a client's ip in the match data(TBD)");
defs.push(tmpDef);

tmpDef = new CompletionItem("setMatchDataDef");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("setMatchDataDef(name: <String>): <Void>",
    "Sets the ID of the current match's matchdata(TBD)");
defs.push(tmpDef);

tmpDef = new CompletionItem("setMatchClientIP");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("setMatchClientIP(client: <Entity>, clientID: <Int>): <Void>",
    "Sets a field in the client's match");
defs.push(tmpDef);

tmpDef = new CompletionItem("setMatchDataID");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("setMatchDataID(): <Void>",
    "Gets a field in the client's match data");
defs.push(tmpDef);

tmpDef = new CompletionItem("setClientMatchData");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("setClientMatchData(Parameter: <params>[]): <Void>",
    "Sets a client's matchdata definition file");
defs.push(tmpDef);

tmpDef = new CompletionItem("getClientMatchData");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("getClientMatchData(Parameter: <params>[]): parameter",
    "Send a client's current match data to the server(TBD)");
defs.push(tmpDef);

tmpDef = new CompletionItem("setClientMatchDataDef");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("setClientMatchDataDef(name: <String>): <Void>",
    "Gets a rule value from the current match's rules\nReturns the value of the given rule");
defs.push(tmpDef);

tmpDef = new CompletionItem("sendClientMatchData");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("sendClientMatchData(): <Void>",
    "Checks if the server is using match rules data or not\nReturns true if the server is using match rules data");
defs.push(tmpDef);

tmpDef = new CompletionItem("getMatchRulesData");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("getMatchRulesData(rule: <String>, string: <params>[]): <String>",
    "Ends the current lobby");
defs.push(tmpDef);

tmpDef = new CompletionItem("isUsingMatchRulesData");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("isUsingMatchRulesData(): <Bool>",
    "Gets info from the basemaps.arena file\nReturns the value of the given variable located in the basemaps.arena file");
defs.push(tmpDef);

tmpDef = new CompletionItem("endLobby");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("endLobby(): <Void>",
    "Updates the skill value for two players(TBD)");
defs.push(tmpDef);

tmpDef = new CompletionItem("getMapCustom");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("getMapCustom(name: <String>): <String>",
    "Set the north yaw value");
defs.push(tmpDef);

tmpDef = new CompletionItem("updateSkill");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("updateSkill(attacker: <Entity>, defender: <Entity>, gametype: <String>, scalar: <Float>): <Void>",
    "Sets slow motion for the game, smoothing from startScale to endScale for lerpDuration time");
defs.push(tmpDef);

tmpDef = new CompletionItem("setNorthYaw");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("setNorthYaw(yaw: <Int>): <Void>",
    "Sets this world's exponential fog values");
defs.push(tmpDef);

tmpDef = new CompletionItem("setSlowMotion");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("setSlowMotion(startScale: <Float>, endScale: <Float>, lerpDuration: <Float>): <Void>",
    "Looks up a vehicle node with the given key, name pair\nReturns the vehicle node found with the given key and name if any");
defs.push(tmpDef);

tmpDef = new CompletionItem("setExpFog");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("setExpFog(startDist: <Float>, halfwayDist: <Float>, rgb: <Vector>, opacity: <Float>, transitionTime: <Float>, sunRGB: <Vector>, sunOpacity: <Float>, sunDirection: <Vector>, sunBeginFadeAngle: <Float>, sunEndFadeAngle: <Float>): <Void>",
    "Gets an array of vehicle nodes that have the given key, name pair\nReturns the vehicle nodes found with the given key and name in a Array");
defs.push(tmpDef);

tmpDef = new CompletionItem("getVehicleNode");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("getVehicleNode(name: <String>, key: <String>): entity",
    "Gets all of the vehicle nodes in the current level\nReturns all of the vehicle nodes found in the level in a Array");
defs.push(tmpDef);

tmpDef = new CompletionItem("getVehicleNodeArray");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("getVehicleNodeArray(name: <String>, key: <String>): entity",
    "Gets the current vehicle count of the level\nReturns the vehicle count of the level");
defs.push(tmpDef);

tmpDef = new CompletionItem("getAllVehicleNodes");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("getAllVehicleNodes(): entity",
    "Gets all of the current vehicle spawners within the level\nReturns all of the current vehicle spawners in the level in a Array");
defs.push(tmpDef);

tmpDef = new CompletionItem("getNumVehicles");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("getNumVehicles(): <Int>",
    "Gets all of the current vehicles within the level\nReturns all of the current vehicles in the level in a Array");
defs.push(tmpDef);

tmpDef = new CompletionItem("vehicle_GetSpawnerArray");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("vehicle_GetSpawnerArray(): entity",
    "Gets the current total count of the given world stat");
defs.push(tmpDef);

tmpDef = new CompletionItem("vehicle_GetArray");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("vehicle_GetArray(): entity",
    "Increments the given world stat by the given number");
defs.push(tmpDef);

tmpDef = new CompletionItem("getCounterTotal");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("getCounterTotal(stat: <String>): <Int>",
    "Calculates an angle corresponding to a particular cosine value\nReturns an angle corresponding to a particular cosine value");
defs.push(tmpDef);

tmpDef = new CompletionItem("incrementCounter");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("incrementCounter(stat: <String>, increment: <Int>): <Void>",
    "Calculates an angle corresponding to a particular sin value\nReturns an angle corresponding to a particular sin value");
defs.push(tmpDef);

tmpDef = new CompletionItem("aCos");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("aCos(cosValue: <Float>): <Float>",
    "Calculates an angle corresponding to a particular tangential value\nReturns an angle corresponding to a particular tangential value");
defs.push(tmpDef);

tmpDef = new CompletionItem("aSin");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("aSin(sinValue: <Float>): <Float>",
    "Calculates the cos of an angle\nReturns the cos of an angle");
defs.push(tmpDef);

tmpDef = new CompletionItem("aTan");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("aTan(tanValue: <Float>): <Float>",
    "Cast a floating point number or a string to an integer.\nReturns the newly casted float/string as an int");
defs.push(tmpDef);

tmpDef = new CompletionItem("cos");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("cos(angle: <Float>): <Float>",
    "Cast a string to a floating point number.\nReturns the newly casted string as a float");
defs.push(tmpDef);

tmpDef = new CompletionItem("int");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("int(value: <Float>): <Int>",
    "Calculates the point closest to a given point on a given line segment.\nReturns the point nearest the given point on the given line segment");
defs.push(tmpDef);

tmpDef = new CompletionItem("float");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("float(value: <String>): <Float>",
    "Randomize a floating point number that is above 0 and below the max number specified.\nReturns the randomized float more than 0 and less than the given max");
defs.push(tmpDef);

tmpDef = new CompletionItem("pointOnSegmentNearestToPoint");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("pointOnSegmentNearestToPoint(segmentA: <Vector>, segmentB: <Vector>, point: <Vector>): <Vector>",
    "Randomize a floating point number that is between the two ranges specified.\nReturns the randomized float between the given ranges");
defs.push(tmpDef);

tmpDef = new CompletionItem("randomFloat");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("randomFloat(max: <Float>): <Float>",
    "Randomize an int that is above 0 and max-1 inclusive.\nReturns the randomized int more than 0 and less than the given max");
defs.push(tmpDef);

tmpDef = new CompletionItem("randomFloatRange");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("randomFloatRange(min: <Float>, max: <Float>): <Float>",
    "Randomize an int that is between the given ranges.\nReturns the randomized int between the two given ranges");
defs.push(tmpDef);

tmpDef = new CompletionItem("randomInt");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("randomInt(max: <Int>): <Int>",
    "Calculates the sin of an angle\nReturns the sin of an angle");
defs.push(tmpDef);

tmpDef = new CompletionItem("randomIntRange");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("randomIntRange(min: <Int>, max: <Int>): <Int>",
    "Calculates the tan of an angle\nReturns the tan of an angle");
defs.push(tmpDef);

tmpDef = new CompletionItem("sin");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("sin(angle: <Float>): <Float>",
    "Calculates a vector perpendicular to the given line and pointing from the line to the given point.\nReturns a vector perpendicular to the given line and pointing from the line to the given point");
defs.push(tmpDef);

tmpDef = new CompletionItem("tan");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("tan(angle: <Float>): <Float>",
    "Calculates the absolute value of the given input\nReturns the absolute value of the given number");
defs.push(tmpDef);

tmpDef = new CompletionItem("vectorFromLineToPoint");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("vectorFromLineToPoint(segmentA: <Vector>, segmentB: <Vector>, point: <Vector>): <Vector>",
    "Returns the given number, where the given minimum is lowest possible return value\nReturns the given number that is above the minimum");
defs.push(tmpDef);

tmpDef = new CompletionItem("abs");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("abs(input: <Float>): <Float>",
    "Returns the given number, where the given maximum is highest possible return value\nReturns the given number that is below the maximum");
defs.push(tmpDef);

tmpDef = new CompletionItem("min");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("min(input: <Float>, minimum: <Float>): <Float>",
    "Gets the lowest possible value of the given number(TBD)\nReturns the lowest possible value of the given number");
defs.push(tmpDef);

tmpDef = new CompletionItem("max");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("max(input: <Float>, maximum: <Float>): <Float>",
    "Gets the highest possible value of the given number(TBD)\nReturns the highest possible value of the given number");
defs.push(tmpDef);

tmpDef = new CompletionItem("floor");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("floor(input: <Float>): <Float>",
    "Gets the exponent of the given number(TBD)\nReturns the exponent of the given number");
defs.push(tmpDef);

tmpDef = new CompletionItem("ceil");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("ceil(input: <Float>): <Float>",
    "Calculates the log of the given number(TBD)\nReturns the log of the given number");
defs.push(tmpDef);

tmpDef = new CompletionItem("exp");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("exp(input: <Float>): <Float>",
    "Calculates the square root of the given number(TBD)\nReturns the square root of the given number");
defs.push(tmpDef);

tmpDef = new CompletionItem("log");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("log(input: <Float>): <Float>",
    "Calculates the squared value of the given number(TBD)\nReturns the square of the given number");
defs.push(tmpDef);

tmpDef = new CompletionItem("sqrt");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("sqrt(input: <Float>): <Float>",
    "Clamps a given value inbetween the min and max\nReturns the given number within the maximum and minimum values");
defs.push(tmpDef);

tmpDef = new CompletionItem("squared");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("squared(input: <Float>): <Float>",
    "Clamps a given angle inbetween the min and max\nReturns the given angle within the maximum and minimum values");
defs.push(tmpDef);

tmpDef = new CompletionItem("clamp");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("clamp(input: <Float>, minimum: <Float>, maximum: <Float>): <Float>",
    "Clamps a given angle so that it is within 0 and 180 degrees(TBD)\nReturns the given angle within 0 and 180 degrees");
defs.push(tmpDef);

tmpDef = new CompletionItem("angleClamp");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("angleClamp(angle: <Vector>, minimum: <Float>, maximum: <Float>): <Vector>",
    "Opens a pop up menu over the current menu/screen");
defs.push(tmpDef);

tmpDef = new CompletionItem("angleClamp180");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("angleClamp180(angle: <Float>): <Vector>",
    "Opens a pop up menu over the current menu/screen, with no mouse control");
defs.push(tmpDef);

tmpDef = new CompletionItem("openPopUpMenu");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> openPopUpMenu(menu: <String>): <Void>",
    "Closes the specified pop up menu if it is currently open");
defs.push(tmpDef);

tmpDef = new CompletionItem("openPopUpMenuNoMouse");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> openPopUpMenuNoMouse(menu: <String>): <Void>",
    "Opens a menu over the current menu/screen");
defs.push(tmpDef);

tmpDef = new CompletionItem("closePopUpMenu");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> closePopUpMenu(menu: <String>): <Void>",
    "Closes the current player menu");
defs.push(tmpDef);

tmpDef = new CompletionItem("openMenu");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> openMenu(menu: <String>): <Void>",
    "Closes the in-game menu for this client");
defs.push(tmpDef);

tmpDef = new CompletionItem("closeMenu");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> closeMenu(menu: <String>): <Void>",
    "Fling this entity");
defs.push(tmpDef);

tmpDef = new CompletionItem("closeInGameMenu");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> closeInGameMenu(): <Void>",
    "Move this entity to the given point");
defs.push(tmpDef);

tmpDef = new CompletionItem("moveGravity");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> moveGravity(velocity: <Vector>, time: <Int>): <Void>",
    "Move this entity to the given point");
defs.push(tmpDef);

tmpDef = new CompletionItem("moveTo");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> moveTo(point: <Vector>, time: <Float>): <Void>",
    "Move this entity to the given point");
defs.push(tmpDef);

tmpDef = new CompletionItem("moveTo");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> moveTo(point: <Vector>, time: <Float>, accelTime: <Float>): <Void>",
    "Move this entity to the given world x value");
defs.push(tmpDef);

tmpDef = new CompletionItem("moveTo");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> moveTo(point: <Vector>, time: <Float>, accelTime: <Float>, decelTime: <Float>): <Void>",
    "Move this entity to the given world y value");
defs.push(tmpDef);

tmpDef = new CompletionItem("moveX");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> moveX(point: <Float>, time: <Float>, accelTime?: <Float>, decelTime?: <Float>): <Void>",
    "Move this entity to the given world z value");
defs.push(tmpDef);

tmpDef = new CompletionItem("moveY");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> moveY(point: <Float>, time: <Float>, accelTime?: <Float>, decelTime?: <Float>): <Void>",
    "Unsets the solid flag, so that this object is no longer collidable");
defs.push(tmpDef);

tmpDef = new CompletionItem("moveZ");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> moveZ(point: <Float>, time: <Float>, accelTime?: <Float>, decelTime?: <Float>): <Void>",
    "Permanently turn this entity into a client physics object with an initial force vector at the specified point");
defs.push(tmpDef);

tmpDef = new CompletionItem("notSolid");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> notSolid(): <Void>",
    "Permanently turn this entity into a server physics object with an initial force vector at the specified point");
defs.push(tmpDef);

tmpDef = new CompletionItem("physicsLaunchClient");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> physicsLaunchClient(point: <Vector>, force: <Vector>): <Void>",
    "Rotate this entity to the given pitch");
defs.push(tmpDef);

tmpDef = new CompletionItem("physicsLaunchServer");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> physicsLaunchServer(point: <Vector>, force: <Vector>): <Void>",
    "Rotate this entity to the given roll angle");
defs.push(tmpDef);

tmpDef = new CompletionItem("rotatePitch");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> rotatePitch(pitch: <Int>, time: <Float>, accelTime?: <Float>, decelTime?: <Float>): <Void>",
    "Rotate this entity to the given world rotation value");
defs.push(tmpDef);

tmpDef = new CompletionItem("rotateRoll");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> rotateRoll(roll: <Int>, time: <Float>, accelTime?: <Float>, decelTime?: <Float>): <Void>",
    "Rotate this entity at a particular velocity for a given time");
defs.push(tmpDef);

tmpDef = new CompletionItem("rotateTo");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> rotateTo(angles: <Vector>, time: <Float>, accelTime?: <Float>, decelTime?: <Float>): <Void>",
    "Rotate this entity to the given yaw");
defs.push(tmpDef);

tmpDef = new CompletionItem("rotateVelocity");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> rotateVelocity(velocity: <Vector>, time: <Float>, accelTime?: <Float>, decelTime?: <Float>): <Void>",
    "Sets the solid flag, so that this object is collidable");
defs.push(tmpDef);

tmpDef = new CompletionItem("rotateYaw");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> rotateYaw(yaw: <Int>, time: <Float>, accelTime?: <Float>, decelTime?: <Float>): <Void>",
    "Causes a script entity to vibrate, rotating around its origin, along a given vector direction");
defs.push(tmpDef);

tmpDef = new CompletionItem("solid");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> solid(): <Void>",
    "Moves this entity by sliding it(TBD)");
defs.push(tmpDef);

tmpDef = new CompletionItem("vibrate");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> vibrate(direction: <Vector>, amplitude: <Float>, period: <Float>, time: <Float>): <Void>",
    "Stops this entity from sliding");
defs.push(tmpDef);

tmpDef = new CompletionItem("moveSlide");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> moveSlide(point: <Vector>, time: <Float>, velocity: <Vector>): <Void>",
    "Add pitch in local space. Does not interpolate");
defs.push(tmpDef);

tmpDef = new CompletionItem("stopMoveSlide");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> stopMoveSlide(): <Void>",
    "Add yaw in local space. Does not interpolate");
defs.push(tmpDef);

tmpDef = new CompletionItem("addPitch");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> addPitch(pitch: <Int>): <Void>",
    "Add roll in local space. Does not interpolate");
defs.push(tmpDef);

tmpDef = new CompletionItem("addYaw");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> addYaw(yaw: <Int>): <Void>",
    "Launches this item");
defs.push(tmpDef);

tmpDef = new CompletionItem("addRoll");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> addRoll(roll: <Int>): <Void>",
    "Unknown effect");
defs.push(tmpDef);

tmpDef = new CompletionItem("physicsLaunchServerItem");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> physicsLaunchServerItem(point: <Vector>, force: <Vector>): <Void>",
    "Create a physics explosion in the shape of a sphere that will hit any physics objects withing the given radius");
defs.push(tmpDef);

tmpDef = new CompletionItem("transformMove");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("transformMove(position1: <Vector>, angles1: <Vector>, position2: <Vector>, angles2: <Vector>, entityPosition: <Vector>, entityAngles: <Vector>): entity",
    "Create a physics explosion in the shape of a cylinder that will hit any physics objects withing the given radius");
defs.push(tmpDef);

tmpDef = new CompletionItem("physicsExplosionSphere");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("physicsExplosionSphere(center: <Vector>, radius: <Int>, height: <Int>, force: <Int>): <Void>",
    "Imparts a 1-frame randomly-jittered impulse on physics objects in a radius.");
defs.push(tmpDef);

tmpDef = new CompletionItem("physicsExplosionCylinder");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("physicsExplosionCylinder(center: <Vector>, radius: <Int>, height: <Int>, force: <Int>): <Void>",
    "Jitters physics objects touching the ground. Jitter forces are calculated in such a way as to displace the object upwards some height between min and max displacement at each point of contact with the ground.");
defs.push(tmpDef);

tmpDef = new CompletionItem("physicsJolt");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("physicsJolt(center: <Vector>, outerRadius: <Int>, innerRadius: <Int>, force: <Int>): <Void>",
    "Adds a new objective");
defs.push(tmpDef);

tmpDef = new CompletionItem("physicsJitter");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("physicsJitter(center: <Vector>, outerRadius: <Int>, innerRadius: <Int>, minDisplacement: <Float>, maxDisplacement: <Float>): <Void>",
    "Set which objective(s) are currently being done. If none specified, there's no current objective. Current objectives that are not specified to still be current, are set to active.");
defs.push(tmpDef);

tmpDef = new CompletionItem("objective_Add");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("objective_Add(objectiveNumber: <Int>, state: <String>, position?: <Vector>, shader?: <String>): <Void>",
    "Removes an objective");
defs.push(tmpDef);

tmpDef = new CompletionItem("objective_Current");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("objective_Current(objectiveIndex: <Int>, int: <params>[]): <Void>",
    "Sets the compass icon for an objective");
defs.push(tmpDef);

tmpDef = new CompletionItem("objective_Delete");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("objective_Delete(objectiveNumber: <Int>): <Void>",
    "Sets the objective to get it's position from an entity");
defs.push(tmpDef);

tmpDef = new CompletionItem("objective_Icon");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("objective_Icon(objectiveNumber: <Int>, icon: <String>): <Void>",
    "Set the position of an objective, assumed to be the zeroth position");
defs.push(tmpDef);

tmpDef = new CompletionItem("objective_OnEntity");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("objective_OnEntity(objectiveNumber: <Int>, entity: <Entity>): <Void>",
    "Set the state of an objective");
defs.push(tmpDef);

tmpDef = new CompletionItem("objective_Position");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("objective_Position(objectiveNumber: <Int>, position: <Vector>): <Void>",
    "Sets the team that the objective is for. Allows having different objectives for each team");
defs.push(tmpDef);

tmpDef = new CompletionItem("objective_State");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("objective_State(objectiveNumber: <Int>, state: <String>): <Void>",
    "Flashes a player on their teammate's compasses");
defs.push(tmpDef);

tmpDef = new CompletionItem("objective_Team");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("objective_Team(objectiveNumber: <Int>, team: <String>): <Void>",
    "Sets the objective to get it's position from a player");
defs.push(tmpDef);

tmpDef = new CompletionItem("pingPlayer");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> pingPlayer(): <Void>",
    "Sets the objective to get it's position from a player for the player's team(TBD)");
defs.push(tmpDef);

tmpDef = new CompletionItem("objective_Player");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("objective_Player(objectiveNumber: <Int>, playerNumber: <Int>): <Void>",
    "Sets the objective to get it's position from a player for the enemy team(TBD)");
defs.push(tmpDef);

tmpDef = new CompletionItem("objective_PlayerTeam");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("objective_PlayerTeam(objectiveNumber: <Int>, playerNumber: <Int>): <Void>",
    "Check if the player is pressing the 'ads' button\nReturns true if the player is pressing the 'ads' button");
defs.push(tmpDef);

tmpDef = new CompletionItem("objective_PlayerEnemyTeam");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("objective_PlayerEnemyTeam(objectiveNumber: <Int>, playerNumber: <Int>): <Void>",
    "Sets whether the player can switch to ADS");
defs.push(tmpDef);

tmpDef = new CompletionItem("adsButtonPressed");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> adsButtonPressed(): <Bool>",
    "Sets whether the player can jump");
defs.push(tmpDef);

tmpDef = new CompletionItem("allowAds");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> allowAds(ads: <Bool>): <Void>",
    "Sets whether the player can sprint");
defs.push(tmpDef);

tmpDef = new CompletionItem("allowJump");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> allowJump(jump: <Bool>): <Void>",
    "Checks if the player has any ammo available for the weapon or any of it's alt-modes (grenade launcher, etc)\nReturns true if the player has any ammo available for the weapon or any of it's alt-modes");
defs.push(tmpDef);

tmpDef = new CompletionItem("allowSprint");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> allowSprint(sprint: <Bool>): <Void>",
    "Check if the player is pressing the 'attack' button\nReturns true if the player is pressing the 'attack' button");
defs.push(tmpDef);

tmpDef = new CompletionItem("anyAmmoForWeaponModes");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> anyAmmoForWeaponModes(weapon: <String>): <Bool>",
    "Check if the host is pressing the button/key\nReturns true if the host is pressing the button/key");
defs.push(tmpDef);

tmpDef = new CompletionItem("attackButtonPressed");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> attackButtonPressed(): <Bool>",
    "Removes all perks for a player");
defs.push(tmpDef);

tmpDef = new CompletionItem("buttonPressed");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> buttonPressed(key: <String>): <Bool>",
    "Deactivates the channel volumes for the player on the given priority level");
defs.push(tmpDef);

tmpDef = new CompletionItem("clearPerks");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> clearPerks(): <Void>",
    "Deactivates the sound reverbation for the player on the given priority level");
defs.push(tmpDef);

tmpDef = new CompletionItem("deactivateChannelVolumes");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> deactivateChannelVolumes(priority: <String>, fade: <Int>): <Void>",
    "Check if the player is pressing the 'frag' button\nReturns true if the player is pressing the 'frag' button");
defs.push(tmpDef);

tmpDef = new CompletionItem("deactivateReverb");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> deactivateReverb(priority: <String>, fade: <Int>): <Void>",
    "Blocks or unblocks control input from this player");
defs.push(tmpDef);

tmpDef = new CompletionItem("fragButtonPressed");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> fragButtonPressed(): <Bool>",
    "Gets the player's current off-hand weapon\nReturns the name of the player's current offhand weapon");
defs.push(tmpDef);

tmpDef = new CompletionItem("freezeControls");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> freezeControls(state: <Bool>): <Void>",
    "Gets the player's current weapon\nReturns the name of the player's current weapon");
defs.push(tmpDef);

tmpDef = new CompletionItem("getCurrentOffhand");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> getCurrentOffhand(): <String>",
    "Gets the amount of ammo left in the player's clip\nReturns the amount of ammo in the player's clip");
defs.push(tmpDef);

tmpDef = new CompletionItem("getCurrentWeapon");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> getCurrentWeapon(): <String>",
    "Gets the player's current ammunition amount as a fraction of the weapon's maximum ammunition\nReturns the player's current ammunition as a fraction of the weapon's maximum ammunition represented as a float");
defs.push(tmpDef);

tmpDef = new CompletionItem("getCurrentWeaponClipAmmo");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> getCurrentWeaponClipAmmo(): <Int>",
    "Gets the player's current ammunition amount as a fraction of the weapon's starting ammunition\nReturns the player's current ammunition as a fraction of the weapon's starting ammunition represented as a float");
defs.push(tmpDef);

tmpDef = new CompletionItem("getFractionMaxAmmo");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> getFractionMaxAmmo(weapon: <String>): <Float>",
    "Gets the player's normalized movement vector\nReturns (-1, 1) for X(forward) and Y(right) based on player's input");
defs.push(tmpDef);

tmpDef = new CompletionItem("getFractionStartAmmo");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> getFractionStartAmmo(weapon: <String>): <Float>",
    "Gets the player's camera's normalized movement vector\nReturns (-1, 1) for X(forward) and Y(right) based on player's input");
defs.push(tmpDef);

tmpDef = new CompletionItem("getNormalizedMovement");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> getNormalizedMovement(): <Vector>",
    "Gets the name that toggle is set to\nReturns the name (either 'smoke' or 'flash') of the player's secondary offhand class");
defs.push(tmpDef);

tmpDef = new CompletionItem("getNormalizedCameraMovement");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> getNormalizedCameraMovement(): <Vector>",
    "Gets the player's angles\nReturns the player's angles");
defs.push(tmpDef);

tmpDef = new CompletionItem("getOffhandSecondaryClass");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> getOffhandSecondaryClass(): <String>",
    "Gets the stance of the player. It only works for the player\nReturns the stance of the player. Possible return values are 'crouch', 'prone', and 'stand'");
defs.push(tmpDef);

tmpDef = new CompletionItem("getPlayerAngles");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> getPlayerAngles(): <Vector>",
    "Gets the player's cvelocity\nReturns the player's velocity");
defs.push(tmpDef);

tmpDef = new CompletionItem("getStance");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> getStance(): <String>",
    "Gets the amount of ammo left in the player's weapon's current clip\nReturns the amount of ammo left in the player's weapon's current clip");
defs.push(tmpDef);

tmpDef = new CompletionItem("getVelocity");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> getVelocity(): <Vector>",
    "Gets the ammunition stockpile for the given weapon\nReturns the amount of reserve ammo the player has for the given weapon");
defs.push(tmpDef);

tmpDef = new CompletionItem("getWeaponAmmoClip");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> getWeaponAmmoClip(weapon: <String>, clipSide?: <String>): <Int>",
    "Gets an array of all weapons that the player has. Includes any alt-mode weapons\nReturns an array of all the weapons that the player has, including alt-mode meapons");
defs.push(tmpDef);

tmpDef = new CompletionItem("getWeaponAmmoStock");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> getWeaponAmmoStock(weapon: <String>): <Int>",
    "Gets an array of all weapons that the player has. Includes any alt-mode, offhand, and exclusive weapons\nReturns an array of all the weapons that the player has");
defs.push(tmpDef);

tmpDef = new CompletionItem("getWeaponsList");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> getWeaponsList(): entity",
    "Gets an array of all primary weapons that the player has\nReturns an array of all the primary weapons that the player has");
defs.push(tmpDef);

tmpDef = new CompletionItem("getWeaponsListAll");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> getWeaponsListAll(): entity",
    "Gets an array of all offhand weapons that the player has\nReturns an array of all the offhand weapons that the player has");
defs.push(tmpDef);

tmpDef = new CompletionItem("getWeaponsListPrimaries");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> getWeaponsListPrimaries(): entity",
    "Gets an array of all item weapons that the player has\nReturns an array of all the item weapons that the player has");
defs.push(tmpDef);

tmpDef = new CompletionItem("getWeaponsListOffhands");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> getWeaponsListOffhands(): entity",
    "Gets an array of all exclusive weapons that the player has\nReturns an array of all the exclusive weapons that the player has");
defs.push(tmpDef);

tmpDef = new CompletionItem("getWeaponsListItems");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> getWeaponsListItems(): entity",
    "Sets the player's ammunition to the weapon's maximum ammunition");
defs.push(tmpDef);

tmpDef = new CompletionItem("getWeaponsListExclusives");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> getWeaponsListExclusives(): entity",
    "Sets the player's ammunition to the weapon's default starting ammunition");
defs.push(tmpDef);

tmpDef = new CompletionItem("giveMaxAmmo");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> giveMaxAmmo(weapon: <String>): <Void>",
    "Give the player a weapon");
defs.push(tmpDef);

tmpDef = new CompletionItem("giveStartAmmo");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> giveStartAmmo(weapon: <String>): <Void>",
    "Test if a player has a perk\nReturns true if the player has the perk");
defs.push(tmpDef);

tmpDef = new CompletionItem("giveWeapon");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> giveWeapon(weapon: <String>, index?: <Int>, akimbo?: <Bool>): <Void>",
    "Checks whether the player has the given weapon\nReturns true if the player has the given weapon");
defs.push(tmpDef);

tmpDef = new CompletionItem("hasPerk");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> hasPerk(perk: <String>): <Bool>",
    "Checks if the player is on the ground\nReturns true if the player is on ground");
defs.push(tmpDef);

tmpDef = new CompletionItem("hasWeapon");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> hasWeapon(weapon: <String>): <Bool>",
    "Check if the player is pressing the 'melee' button\nReturns true if the player is pressing the 'melee' button");
defs.push(tmpDef);

tmpDef = new CompletionItem("isOnGround");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> isOnGround(): <Bool>",
    "Whenever the console command processor encounters <command> for any reason, it will notify script with the string <notify> on the player entity. Additionally, it will pass the arguments to the notify as strings, where the first argument is the initiating command.");
defs.push(tmpDef);

tmpDef = new CompletionItem("meleeButtonPressed");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> meleeButtonPressed(): <Bool>",
    "Gets the player's weapon position fraction\nReturns the player's weapon position fraction");
defs.push(tmpDef);

tmpDef = new CompletionItem("notifyOnPlayerCommand");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> notifyOnPlayerCommand(notify: <String>, command: <String>): <Void>",
    "Attaches the player to an entity. Any entity rotation is added to the player's view, allow the player to look around. Rotating the parent entity/tag will not move the player's eye position, but only the player's view angles. Thus, the player's eye position is locked in place, always directly above the parent tag.");
defs.push(tmpDef);

tmpDef = new CompletionItem("playerAds");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> playerAds(): <Float>",
    "Attaches the player to an entity. No view movement is allowed. The player's eye position will remain fixed relative to the parent entity/tag. Thus, pitching and rolling will cause the player's eye position to move. (But the player entity always remains vertical)");
defs.push(tmpDef);

tmpDef = new CompletionItem("playerLinkTo");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> playerLinkTo(entity: <Entity>, tag: <String>, viewFraction?: <Float>, rightArc?: <Int>, leftArc?: <Int>, topArc?: <Int>, bottomArc?: <Int>, collide?: <Bool>): <Void>",
    "Attaches the player to an entity. Any entity rotation is added to the player's view, allow the player to look around. The player's eye position will remain fixed relative to the parent entity/tag. Thus, pitching and rolling will cause the player's eye position to move. (But the player entity always remains vertical)");
defs.push(tmpDef);

tmpDef = new CompletionItem("playerLinkToAbsolute");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> playerLinkToAbsolute(entity: <Entity>, tag?: <String>): <Void>",
    "Plays a sound locally to the player");
defs.push(tmpDef);

tmpDef = new CompletionItem("playerLinkToDelta");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> playerLinkToDelta(entity: <Entity>, tag: <String>, viewFraction?: <Float>, rightArc?: <Int>, leftArc?: <Int>, topArc?: <Int>, bottomArc?: <Int>, collide?: <Bool>): <Void>",
    "Resets the player spread value to the ones of the weapon in use");
defs.push(tmpDef);

tmpDef = new CompletionItem("playLocalSound");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> playLocalSound(sound: <String>): <Void>",
    "Check if the player is pressing the 'secondary offhand' button\nReturns true if the player is pressing the 'secondary offhand' button");
defs.push(tmpDef);

tmpDef = new CompletionItem("resetSpreadOverride");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> resetSpreadOverride(): <Void>",
    "Sets the option to perform when the player executes (for example) '+actionslot 1'");
defs.push(tmpDef);

tmpDef = new CompletionItem("secondaryOffhandButtonPressed");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> secondaryOffhandButtonPressed(): <Bool>",
    "Sets the channel volumes for the player (a way of fading volumes by type)");
defs.push(tmpDef);

tmpDef = new CompletionItem("setActionSlot");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> setActionSlot(slot: <Int>, option: <String>, weapon?: <String>): <Void>",
    "Set the values of a dvar which are specific to each client");
defs.push(tmpDef);

tmpDef = new CompletionItem("setChannelVolumes");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> setChannelVolumes(priority: <String>, shockName: <String>, fade?: <Float>): <Void>",
    "Set the values of a list of dvars which are specific to each client");
defs.push(tmpDef);

tmpDef = new CompletionItem("setClientDvar");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> setClientDvar(dvar: <String>, value: <Parameter>): <Void>",
    "Set the depth of field values for a player. If start >= end for near or far, depth of field is disabled for that region");
defs.push(tmpDef);

tmpDef = new CompletionItem("setClientDvars");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> setClientDvars(dvar: <String>, value: <Parameter>, Parameter: <params>[]): <Void>",
    "Scales player movement speed by this amount");
defs.push(tmpDef);

tmpDef = new CompletionItem("setDepthOfField");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> setDepthOfField(nearStart: <Int>, nearEnd: <Int>, farStart: <Int>, farEnd: <Int>, nearBlur: <Float>, farBlur: <Float>): <Void>",
    "Set whether the player can use smoke grenades or flashbangs");
defs.push(tmpDef);

tmpDef = new CompletionItem("setMoveSpeedScale");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> setMoveSpeedScale(scale: <Float>): <Void>",
    "Set the player's origin");
defs.push(tmpDef);

tmpDef = new CompletionItem("setOffhandSecondaryClass");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> setOffhandSecondaryClass(name: <String>): <Void>",
    "Give the specified perk");
defs.push(tmpDef);

tmpDef = new CompletionItem("setOrigin");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> setOrigin(origin: <Vector>): <Void>",
    "Set the player's angles");
defs.push(tmpDef);

tmpDef = new CompletionItem("setPerk");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> setPerk(perk: <String>, codePerk?: <Bool>, useSlot?: <Bool>): <Void>",
    "Set the sound reverbation for the player");
defs.push(tmpDef);

tmpDef = new CompletionItem("setPlayerAngles");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> setPlayerAngles(angles: <Vector>): <Void>",
    "Sets the player fixed spread value");
defs.push(tmpDef);

tmpDef = new CompletionItem("setReverb");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> setReverb(priority: <String>, roomType: <String>, dryLevel?: <Float>, wetLevel?: <Float>, fade?: <Float>): <Void>",
    "Set the player's velocity");
defs.push(tmpDef);

tmpDef = new CompletionItem("setSpreadOverride");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> setSpreadOverride(spread: <Int>): <Void>",
    "Set the player's current viewmodel");
defs.push(tmpDef);

tmpDef = new CompletionItem("setVelocity");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> setVelocity(velocity: <Vector>): <Void>",
    "Set the depth of field values for the player's viewmodel when at hip. If start >= end, depth of field is disabled");
defs.push(tmpDef);

tmpDef = new CompletionItem("setViewModel");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> setViewModel(viewmodel: <String>): <Void>",
    "Set the weapon clip ammunition for the given weapon");
defs.push(tmpDef);

tmpDef = new CompletionItem("setViewModelDepthOfField");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> setViewModelDepthOfField(start: <Float>, end: <Float>): <Void>",
    "Set the ammunition stockpile for the given weapon");
defs.push(tmpDef);

tmpDef = new CompletionItem("setWeaponAmmoClip");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> setWeaponAmmoClip(weapon: <String>, ammo: <Int>, clipSide?: <String>): <Void>",
    "Start a shell shock sequence for the player. The shell shock must be precached, otherwise calling this script will cause a script error");
defs.push(tmpDef);

tmpDef = new CompletionItem("setWeaponAmmoStock");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> setWeaponAmmoStock(weapon: <String>, ammo: <Int>): <Void>",
    "Stops all instances of a local soundalias running on a player");
defs.push(tmpDef);

tmpDef = new CompletionItem("shellShock");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> shellShock(shellshock: <String>, duration: <Float>, overrideCheat?: <Bool>): <Void>",
    "Stop a shell shock sequence for the player");
defs.push(tmpDef);

tmpDef = new CompletionItem("stopLocalSound");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> stopLocalSound(sound: <String>): <Void>",
    "Switch to the player's offhand weapon");
defs.push(tmpDef);

tmpDef = new CompletionItem("stopShellShock");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> stopShellShock(): <Void>",
    "Switch to a different weapon");
defs.push(tmpDef);

tmpDef = new CompletionItem("switchToOffhand");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> switchToOffhand(): <Void>",
    "Switch to a different weapon immediately, skipping any animations");
defs.push(tmpDef);

tmpDef = new CompletionItem("switchToWeapon");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> switchToWeapon(weapon: <String>): <Void>",
    "Remove all the weapons from the player");
defs.push(tmpDef);

tmpDef = new CompletionItem("switchToWeaponImmediate");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> switchToWeaponImmediate(weapon: <String>): <Void>",
    "Take a weapon from the player");
defs.push(tmpDef);

tmpDef = new CompletionItem("takeAllWeapons");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> takeAllWeapons(): <Void>",
    "Takes the specified perk from the player");
defs.push(tmpDef);

tmpDef = new CompletionItem("takeWeapon");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> takeWeapon(weapon: <String>): <Void>",
    "Check if the player is pressing the 'use' button\nReturns true if the player is pressing the 'use' button");
defs.push(tmpDef);

tmpDef = new CompletionItem("unSetPerk");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> unSetPerk(perk: <String>, useSlot?: <Bool>): <Void>",
    "Throw the screen around as if the player has been damaged");
defs.push(tmpDef);

tmpDef = new CompletionItem("useButtonPressed");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> useButtonPressed(): <Bool>",
    "Locks player's weapon onto an entity. Implies WeaponLockStart(), so this may be called to jump to a hard lock");
defs.push(tmpDef);

tmpDef = new CompletionItem("viewKick");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> viewKick(force: <Int>, source: <Vector>): <Void>",
    "Clear the player's weapon lock");
defs.push(tmpDef);

tmpDef = new CompletionItem("weaponLockFinalize");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> weaponLockFinalize(entity: <Entity>): <Void>",
    "When set true, the player will be unable to fire thair lockon weapon, and will recieve a hint print telling them that there is an obstruction");
defs.push(tmpDef);

tmpDef = new CompletionItem("weaponLockFree");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> weaponLockFree(): <Void>",
    "Begins player's weapon lockon sequence (hud effects, etc). Will clear any existing hard lock. Use WeaponLockFinalize(this Entity entity, ) to complete lock");
defs.push(tmpDef);

tmpDef = new CompletionItem("weaponLockNoClearance");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> weaponLockNoClearance(noClearance: <Bool>): <Void>",
    "When set true, the player will be unable to fire their lockon weapons, and will recieve a hint print telling them that they are too close");
defs.push(tmpDef);

tmpDef = new CompletionItem("weaponLockStart");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> weaponLockStart(): <Void>",
    "Gets the player's view height\nReturns the player's view height as a float");
defs.push(tmpDef);

tmpDef = new CompletionItem("weaponLockTargetTooClose");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> weaponLockTargetTooClose(tooClose: <Bool>): <Void>",
    "Gets the player's weapon that is in the primary slot\nReturns the name of the weapon in the player's primary slot");
defs.push(tmpDef);

tmpDef = new CompletionItem("getPlayerViewHeight");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> getPlayerViewHeight(): <Float>",
    "Checks if the player is currently holding a dual wield weapon\nReturns true if the player is holding a dual wield weapon");
defs.push(tmpDef);

tmpDef = new CompletionItem("getCurrentPrimaryWeapon");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> getCurrentPrimaryWeapon(): <String>",
    "Checks if the player is reloading\nReturns true if the player is reloading");
defs.push(tmpDef);

tmpDef = new CompletionItem("isDualWielding");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> isDualWielding(): <Bool>",
    "Checks if the player is in the process of switching weapons\nReturns true if the player is switching to another weapon");
defs.push(tmpDef);

tmpDef = new CompletionItem("isReloading");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> isReloading(): <Bool>",
    "Checks if the player is currently manning a turret\nReturns true if the player is manning a turret");
defs.push(tmpDef);

tmpDef = new CompletionItem("isSwitchingWeapon");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> isSwitchingWeapon(): <Bool>",
    "Gets the name that primary offhand toggle is set to\nReturns the name of the player's primary offhand class");
defs.push(tmpDef);

tmpDef = new CompletionItem("isUsingTurret");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> isUsingTurret(): <Bool>",
    "Sets the player's current primary offhand class");
defs.push(tmpDef);

tmpDef = new CompletionItem("getOffhandPrimaryClass");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> getOffhandPrimaryClass(): <String>",
    "Disables the use of offhand weapons (grenades, flashes)");
defs.push(tmpDef);

tmpDef = new CompletionItem("setOffhandPrimaryClass");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> setOffhandPrimaryClass(name: <String>): <Void>",
    "Enables the use of offhand weapons (grenades, flashes)");
defs.push(tmpDef);

tmpDef = new CompletionItem("disableOffhandWeapons");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> disableOffhandWeapons(): <Void>",
    "Disables weapon switching for the player");
defs.push(tmpDef);

tmpDef = new CompletionItem("enableOffhandWeapons");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> enableOffhandWeapons(): <Void>",
    "Enables weapon switching for the player");
defs.push(tmpDef);

tmpDef = new CompletionItem("disableWeaponSwitch");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> disableWeaponSwitch(): <Void>",
    "Makes the player unable to use things such as triggers, turrets, etc.");
defs.push(tmpDef);

tmpDef = new CompletionItem("enableWeaponSwitch");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> enableWeaponSwitch(): <Void>",
    "Makes the player able to use things such as triggers, turrets, etc.");
defs.push(tmpDef);

tmpDef = new CompletionItem("disableUsability");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> disableUsability(): <Void>",
    "TBD");
defs.push(tmpDef);

tmpDef = new CompletionItem("enableUsability");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> enableUsability(): <Void>",
    "TBD");
defs.push(tmpDef);

tmpDef = new CompletionItem("setWhizBySpreads");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> setWhizBySpreads(x: <Float>, y: <Float>, z: <Float>): <Void>",
    "TBD");
defs.push(tmpDef);

tmpDef = new CompletionItem("setWhizByRadii");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> setWhizByRadii(x: <Float>, y: <Float>, z: <Float>): <Void>",
    "Set the channel volume for the player(TBD)");
defs.push(tmpDef);

tmpDef = new CompletionItem("setVolMod");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> setVolMod(vol: <Float>, overrideVol: <Float>): <Void>",
    "Sets the movement scale that the player's crosshairs spread out/in while they are moving");
defs.push(tmpDef);

tmpDef = new CompletionItem("setChannelVolume");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> setChannelVolume(): <Void>",
    "Sets the scale of how much the player's screen gets thrown around when getting hurt");
defs.push(tmpDef);

tmpDef = new CompletionItem("setAimSpreadMovementScale");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> setAimSpreadMovementScale(scale: <Float>): <Void>",
    "Gets the scale of how much the player's screen gets thrown around when getting hurt\nReturns the scale value of how much the player's screen kicks when being hurt");
defs.push(tmpDef);

tmpDef = new CompletionItem("setViewKickScale");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> setViewKickScale(scale: <Float>): <Void>",
    "Checks whether the player can place a sentry in front of them as a valid position\nReturns 'result'(bool whether the player can place a sentry or not), 'origin'(The position of the placement, and 'angles'(The angles of the placement) all in an array");
defs.push(tmpDef);

tmpDef = new CompletionItem("getViewKickScale");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> getViewKickScale(): <Float>",
    "Checks whether the player can place a tank in front of them as a valid position\nReturns 'result'(bool whether the player can place a tank or not), 'origin'(The position of the placement, and 'angles'(The angles of the placement) all in an array");
defs.push(tmpDef);

tmpDef = new CompletionItem("canPlayerPlaceSentry");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> canPlayerPlaceSentry(): <Array>",
    "Sets the 'naked' vision for this player");
defs.push(tmpDef);

tmpDef = new CompletionItem("canPlayerPlaceTank");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> canPlayerPlaceTank(): <Array>",
    "Sets the visionset for this player when they have nightvision goggles equipped");
defs.push(tmpDef);

tmpDef = new CompletionItem("visionSetNakedForPlayer");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> visionSetNakedForPlayer(vision: <String>, fade?: <Float>): <Void>",
    "Sets the visionset for this player while they are controlling a missile");
defs.push(tmpDef);

tmpDef = new CompletionItem("visionSetNightForPlayer");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> visionSetNightForPlayer(vision: <String>, fade?: <Float>): <Void>",
    "Sets the visionset for this player when they are scoped into a thermal scope");
defs.push(tmpDef);

tmpDef = new CompletionItem("visionSetMissileCamForPlayer");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> visionSetMissileCamForPlayer(vision: <String>, fade?: <Float>): <Void>",
    "Sets the visionset for this player when they are in pain/near death");
defs.push(tmpDef);

tmpDef = new CompletionItem("visionSetThermalForPlayer");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> visionSetThermalForPlayer(vision: <String>, fade?: <Float>): <Void>",
    "Gets the weapon model of the player's current weapon\nReturns the model name of the player's current weapon");
defs.push(tmpDef);

tmpDef = new CompletionItem("visionSetPainForPlayer");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> visionSetPainForPlayer(vision: <String>, fade?: <Float>): <Void>",
    "Gets the weapon model of the player's knife\nReturns the model name of the player's current knife");
defs.push(tmpDef);

tmpDef = new CompletionItem("getPlayerWeaponModel");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> getPlayerWeaponModel(): <String>",
    "Updates the player's current player model according to their current loadout");
defs.push(tmpDef);

tmpDef = new CompletionItem("getPlayerKnifeModel");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> getPlayerKnifeModel(): <String>",
    "Checks if the player can mantle at their current location\nReturns true if the player can mantle");
defs.push(tmpDef);

tmpDef = new CompletionItem("updatePlayerModelWithWeapons");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> updatePlayerModelWithWeapons(): <Void>",
    "Forces the player to mantle in their current spot regardless if they can");
defs.push(tmpDef);

tmpDef = new CompletionItem("canMantle");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> canMantle(): <Bool>",
    "Turns on recoil scaling if off and sets the player's current recoil scaling factor");
defs.push(tmpDef);

tmpDef = new CompletionItem("forceMantle");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> forceMantle(): <Void>",
    "Turns off recoil scaling so that they use default values");
defs.push(tmpDef);

tmpDef = new CompletionItem("player_RecoilScaleOn");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> player_RecoilScaleOn(scale: <Int>): <Int>",
    "Syncs this player's vision with another player's");
defs.push(tmpDef);

tmpDef = new CompletionItem("player_RecoilScaleOff");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> player_RecoilScaleOff(): <Void>",
    "TBD");
defs.push(tmpDef);

tmpDef = new CompletionItem("visionSyncWithPlayer");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> visionSyncWithPlayer(player: <Entity>): <Void>",
    "Gets this player's GUID\nReturns the player's GUID");
defs.push(tmpDef);

tmpDef = new CompletionItem("setEnterTime");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> setEnterTime(): <Void>",
    "Gets this player's XUID\nReturns the player's XUID");
defs.push(tmpDef);

tmpDef = new CompletionItem("getGUID");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> getGUID(): <String>",
    "Checks if this player is the host of the current game\nReturns true if this player is the host of the current game");
defs.push(tmpDef);

tmpDef = new CompletionItem("getXUID");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> getXUID(): <String>",
    "Gets the player that this player is currently spectating\nReturns the player that this player is currently spectating");
defs.push(tmpDef);

tmpDef = new CompletionItem("isHost");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> isHost(): <Bool>",
    "TBD");
defs.push(tmpDef);

tmpDef = new CompletionItem("getSpectatingPlayer");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> getSpectatingPlayer(): entity",
    "Sets display slot info for this player, used for card splashes such as 'YOU KILLED', 'KILLED YOU','SPECTATING'");
defs.push(tmpDef);

tmpDef = new CompletionItem("predictStreamPos");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> predictStreamPos(origin: <Vector>, angles: <Vector>): <Void>",
    "Sets this player's playercard title");
defs.push(tmpDef);

tmpDef = new CompletionItem("setCardDisplaySlot");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> setCardDisplaySlot(player: <Entity>, slot: <Int>): <Void>",
    "Sets this player's playercard icon");
defs.push(tmpDef);

tmpDef = new CompletionItem("setCardTitle");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> setCardTitle(title: <String>): <Void>",
    "Sets this player's playercard nameplate(unused)");
defs.push(tmpDef);

tmpDef = new CompletionItem("setCardIcon");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> setCardIcon(icon: <String>): <Void>",
    "Revives this player if they are in last stand or final stand");
defs.push(tmpDef);

tmpDef = new CompletionItem("setCardNamePlate");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> setCardNamePlate(nameplate: <String>): <Void>",
    "Sets the default spectator starting position for this player");
defs.push(tmpDef);

tmpDef = new CompletionItem("lastStandRevive");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> lastStandRevive(): <Void>",
    "Gets the offset for the player's crosshair when in a third person view\nReturns the offset for the player's crosshair when in a third person view");
defs.push(tmpDef);

tmpDef = new CompletionItem("setSpectateDefaults");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> setSpectateDefaults(origin: <Vector>, angles: <Vector>): <Void>",
    "Disables weapon pickup for this player");
defs.push(tmpDef);

tmpDef = new CompletionItem("getThirdPersonCrosshairOffset");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> getThirdPersonCrosshairOffset(): <Float>",
    "Enables weapon pickup for this player");
defs.push(tmpDef);

tmpDef = new CompletionItem("disableWeaponPickup");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> disableWeaponPickup(): <Void>",
    "TBD");
defs.push(tmpDef);

tmpDef = new CompletionItem("enableWeaponPickup");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> enableWeaponPickup(): <Void>",
    "TBD");
defs.push(tmpDef);

tmpDef = new CompletionItem("playerLinkWeaponViewToDelta");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> playerLinkWeaponViewToDelta(entity?: <Entity>): <Void>",
    "Enables setting an offset to any linked entities on this entity(TBD)");
defs.push(tmpDef);

tmpDef = new CompletionItem("playerLinkToBlend");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> playerLinkToBlend(entity?: <Entity>): <Void>",
    "Disables setting an offset to any linked entities on this entity(TBD)");
defs.push(tmpDef);

tmpDef = new CompletionItem("playerLinkedOffsetEnable");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> playerLinkedOffsetEnable(): <Void>",
    "Sets the z_near value for this player's view when the camera is linked to another entity");
defs.push(tmpDef);

tmpDef = new CompletionItem("playerLinkedOffsetDisable");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> playerLinkedOffsetDisable(): <Void>",
    "TBD");
defs.push(tmpDef);

tmpDef = new CompletionItem("playerLinkedSetViewZNear");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> playerLinkedSetViewZNear(zNear: <Float>): <Void>",
    "TBD");
defs.push(tmpDef);

tmpDef = new CompletionItem("playerLinkedSetUseBaseAngleForViewClamp");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> playerLinkedSetUseBaseAngleForViewClamp(): <Void>",
    "TBD");
defs.push(tmpDef);

tmpDef = new CompletionItem("lerpViewAngleClamp");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> lerpViewAngleClamp(): <Void>",
    "Turns on thermal vision for this player");
defs.push(tmpDef);

tmpDef = new CompletionItem("setViewAngleResistance");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> setViewAngleResistance(): <Void>",
    "Turns off thermal vision for this player");
defs.push(tmpDef);

tmpDef = new CompletionItem("thermalVisionOn");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> thermalVisionOn(): <Void>",
    "Turns on player target indicators so that enemy players have a red box around them");
defs.push(tmpDef);

tmpDef = new CompletionItem("thermalVisionOff");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> thermalVisionOff(): <Void>",
    "Turns off player target indicators");
defs.push(tmpDef);

tmpDef = new CompletionItem("thermalVisionFOFOverlayOn");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> thermalVisionFOFOverlayOn(): <Void>",
    "Turns on autospot so that all player names are visible");
defs.push(tmpDef);

tmpDef = new CompletionItem("thermalVisionFOFOverlayOff");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> thermalVisionFOFOverlayOff(): <Void>",
    "Turns off autospot so that player names are only visible when looking at them");
defs.push(tmpDef);

tmpDef = new CompletionItem("autospotOverlayOn");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> autospotOverlayOn(): <Void>",
    "Set's a player's use hint and forces it to display. Use ForceUseHintOff() to remove it");
defs.push(tmpDef);

tmpDef = new CompletionItem("autospotOverlayOff");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> autospotOverlayOff(): <Void>",
    "Removes any use hints on the player's screen");
defs.push(tmpDef);

tmpDef = new CompletionItem("forceUseHintOn");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> forceUseHintOn(hint: <String>): <Void>",
    "Makes this entity a soft entity(TBD)");
defs.push(tmpDef);

tmpDef = new CompletionItem("forceUseHintOff");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> forceUseHintOff(): <Void>",
    "Makes this entity a hard entity");
defs.push(tmpDef);

tmpDef = new CompletionItem("makeSoft");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> makeSoft(): entity",
    "Sets a flag for this entity to tell the game that this entity will remain exactly as it is when this function is called. This will disable any script interactivity with this entity");
defs.push(tmpDef);

tmpDef = new CompletionItem("makeHard");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> makeHard(): entity",
    "Sets this player's stance. Valid stances are 'prone', 'crouch', and 'stand'");
defs.push(tmpDef);

tmpDef = new CompletionItem("willNeverChange");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> willNeverChange(): <Void>",
    "Stuns this player for the specified amount of time");
defs.push(tmpDef);

tmpDef = new CompletionItem("setStance");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> setStance(stance: <String>): <Void>",
    "Fades out any current shellshock for this player(TBD)");
defs.push(tmpDef);

tmpDef = new CompletionItem("stunPlayer");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> stunPlayer(time: <Float>): <Void>",
    "Sets the scale at which this player's vision blurs while moving");
defs.push(tmpDef);

tmpDef = new CompletionItem("fadeOutShellShock");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> fadeOutShellShock(): <Void>",
    "Sets the scale at which this player's vision blurs while looking around");
defs.push(tmpDef);

tmpDef = new CompletionItem("setMotionBlurMoveScale");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> setMotionBlurMoveScale(scale: <Float>): <Void>",
    "Sets the scale at which this player's vision blurs while zooming in");
defs.push(tmpDef);

tmpDef = new CompletionItem("setMotionBlurTurnScale");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> setMotionBlurTurnScale(scale: <Float>): <Void>",
    "Gets a setting value from this player\nReturns the player's value of the given setting");
defs.push(tmpDef);

tmpDef = new CompletionItem("setMotionBlurZoomScale");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> setMotionBlurZoomScale(scale: <Float>): <Void>",
    "Gets data from this player's local stats(TBD)\nReturns the player's local value of the given stat");
defs.push(tmpDef);

tmpDef = new CompletionItem("getPlayerSetting");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> getPlayerSetting(): <String>",
    "Sets a stat on this player's local stat file");
defs.push(tmpDef);

tmpDef = new CompletionItem("getLocalPlayerProfileData");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> getLocalPlayerProfileData(): <String>",
    "Enables sounds to be heard from the camera position if this player's camera is somewhere else");
defs.push(tmpDef);

tmpDef = new CompletionItem("setLocalPlayerProfileData");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> setLocalPlayerProfileData(): <Void>",
    "Disables sounds to be heard from the camera position if this player's camera is somewhere else");
defs.push(tmpDef);

tmpDef = new CompletionItem("remoteCameraSoundscapeOn");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> remoteCameraSoundscapeOn(): <Void>",
    "Jams this player's radar");
defs.push(tmpDef);

tmpDef = new CompletionItem("remoteCameraSoundscapeOff");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> remoteCameraSoundscapeOff(): <Void>",
    "Un-jams this player's radar");
defs.push(tmpDef);

tmpDef = new CompletionItem("radarJamOn");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> radarJamOn(): <Void>",
    "Sets whether this player is visible on heartbeat sensors or not");
defs.push(tmpDef);

tmpDef = new CompletionItem("radarJamOff");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> radarJamOff(): <Void>",
    "Gets whether this player is visible on heartbeat sensors or not\nReturns true if this player is visible on heartbeat sensors");
defs.push(tmpDef);

tmpDef = new CompletionItem("setMotionTrackerVisible");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> setMotionTrackerVisible(visible: <Bool>): <Void>",
    "Sets a water sheet over the player's screen as if they submerged under water");
defs.push(tmpDef);

tmpDef = new CompletionItem("getMotionTrackerVisible");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> getMotionTrackerVisible(): <Bool>",
    "Sets the weapon hud icon override for this player. This will override any icon in place of the player's current offhand and replace it with the given shader");
defs.push(tmpDef);

tmpDef = new CompletionItem("setWaterSheeting");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> setWaterSheeting(sheet: <Int>, duration: <Int>): <Void>",
    "Gets the current offhand weapon hud override icon this player has\nReturns the name of the shader that this player's offhand icon override is set to");
defs.push(tmpDef);

tmpDef = new CompletionItem("setWeaponHudIconOverride");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> setWeaponHudIconOverride(icon: <String>): <Void>",
    "Sets whether this player's screen is emp jammed");
defs.push(tmpDef);

tmpDef = new CompletionItem("getWeaponHudIconOverride");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> getWeaponHudIconOverride(): <String>",
    "Sets this player's exponential fog values");
defs.push(tmpDef);

tmpDef = new CompletionItem("setEMPJammed");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> setEMPJammed(jammed: <Bool>): <Void>",
    "Checks whether this player has the given item unlocked or not");
defs.push(tmpDef);

tmpDef = new CompletionItem("playerSetExpFog");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> playerSetExpFog(startDist: <Float>, halfwayDist: <Float>, RGB: <Vector>, transitionTime: <Float>): <Void>",
    "Gets stats from the player's playerdata\nReturns the value of the data field");
defs.push(tmpDef);

tmpDef = new CompletionItem("isItemUnlocked");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> isItemUnlocked(item: <String>): <Bool>",
    "Sets a data field in this player's playerdata");
defs.push(tmpDef);

tmpDef = new CompletionItem("getPlayerData");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> getPlayerData(Parameter: <params>[]): parameter",
    "Checks if this player is currently using online data while offline\nReturns true if the player is using online data while offline");
defs.push(tmpDef);

tmpDef = new CompletionItem("setPlayerData");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> setPlayerData(Parameter: <params>[]): <Void>",
    "Gets this player's time since the last game they player, in seconds\nReturns the player's amount of time since their last game");
defs.push(tmpDef);

tmpDef = new CompletionItem("isUsingOnlineDataOffline");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> isUsingOnlineDataOffline(): <Bool>",
    "TBD");
defs.push(tmpDef);

tmpDef = new CompletionItem("getRestedTime");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> getRestedTime(): <Int>",
    "Sends the current leaderboard stats to the player(TBD)");
defs.push(tmpDef);

tmpDef = new CompletionItem("send73Command");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> send73Command(): <Int>",
    "Forces this player to start their death animations, crediting the inflictor with a kill but not killing this player");
defs.push(tmpDef);

tmpDef = new CompletionItem("sendLeaderboards");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> sendLeaderboards(): <Void>",
    "Informs the game that this player is starting to ride an AC130");
defs.push(tmpDef);

tmpDef = new CompletionItem("playerForceDeathAnim");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> playerForceDeathAnim(inflictor: <Entity>, meansOfDeath: <String>, hitLoc: <String>, direction: <Vector>): <Void>",
    "Informs the game that this player has stopped riding an AC130");
defs.push(tmpDef);

tmpDef = new CompletionItem("startAC130");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> startAC130(): <Void>",
    "Checks if a player can spawn at this position\nReturns true if a player can spawn at this position");
defs.push(tmpDef);

tmpDef = new CompletionItem("stopAC130");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> stopAC130(): <Void>",
    "Write a line to this player's screen.");
defs.push(tmpDef);

tmpDef = new CompletionItem("canSpawn");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> canSpawn(origin: <Vector>): <Bool>",
    "Write a bold line to this player's screen.");
defs.push(tmpDef);

tmpDef = new CompletionItem("iPrintLn");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> iPrintLn(message: <String>): <Void>",
    "Hides a visible player");
defs.push(tmpDef);

tmpDef = new CompletionItem("iPrintLnBold");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> iPrintLnBold(message: <String>): <Void>",
    "Checks if the player is a splitscreen player\nReturns true if the player is a splitscreen player");
defs.push(tmpDef);

tmpDef = new CompletionItem("playerHide");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> playerHide(): <Void>",
    "Checks if the player is the primary splitscreen player\nReturns true if the player is the primary splitscreen player");
defs.push(tmpDef);

tmpDef = new CompletionItem("isSplitScreenPlayer");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> isSplitScreenPlayer(): <Bool>",
    "Updates values of the given leaderboard stat from the leaderboard tracker for this player");
defs.push(tmpDef);

tmpDef = new CompletionItem("isSplitScreenPlayerPrimary");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> isSplitScreenPlayerPrimary(): <Bool>",
    "Causes player models to be drawn as if they are seen in thermal mode");
defs.push(tmpDef);

tmpDef = new CompletionItem("trackerUpdate");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> trackerUpdate(stat: <String>, value: <Int>): <Void>",
    "Turns off drawing player models in thermal mode");
defs.push(tmpDef);

tmpDef = new CompletionItem("thermalDrawEnable");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> thermalDrawEnable(): <Void>",
    "Precache a head icon");
defs.push(tmpDef);

tmpDef = new CompletionItem("thermalDrawDisable");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> thermalDrawDisable(): <Void>",
    "Precaches a given item. It must be called before any wait statements in the level script");
defs.push(tmpDef);

tmpDef = new CompletionItem("preCacheHeadIcon");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("preCacheHeadIcon(headicon: <String>): <Void>",
    "Precaches a material to be used as an indicator during location selection on the map");
defs.push(tmpDef);

tmpDef = new CompletionItem("preCacheItem");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("preCacheItem(item: <String>): <Void>",
    "Precaches this menu");
defs.push(tmpDef);

tmpDef = new CompletionItem("preCacheLocationSelector");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("preCacheLocationSelector(material: <String>): <Void>",
    "Precaches the given model. It must be called before any wait statements in the level script");
defs.push(tmpDef);

tmpDef = new CompletionItem("preCacheMenu");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("preCacheMenu(menu: <String>): <Void>",
    "Precaches the given rumble. It must be called before any wait statements in the level script");
defs.push(tmpDef);

tmpDef = new CompletionItem("preCacheModel");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("preCacheModel(model: <String>): <Void>",
    "Precaches the given shader. It must be called before any wait statements in the level script");
defs.push(tmpDef);

tmpDef = new CompletionItem("preCacheRumble");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("preCacheRumble(rumble: <String>): <Void>",
    "Precaches the shellshock effect. It must be called before any wait statements in the level script");
defs.push(tmpDef);

tmpDef = new CompletionItem("preCacheShader");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("preCacheShader(material: <String>): <Void>",
    "Precaches a status icon");
defs.push(tmpDef);

tmpDef = new CompletionItem("preCacheShellShock");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("preCacheShellShock(shellshock: <String>): <Void>",
    "Precaches the given string. It must be called before any wait statements in the level script");
defs.push(tmpDef);

tmpDef = new CompletionItem("preCacheStatusIcon");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("preCacheStatusIcon(icon: <String>): <Void>",
    "Precaches the weapon info structure for a vehicle. It must be called before any wait statements in the level script");
defs.push(tmpDef);

tmpDef = new CompletionItem("preCacheString");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("preCacheString(text: <String>): <Void>",
    "Look up a row in a table and pull out a particular column from that row in an IString\nReturns the value pulled from the given row and column as an IString");
defs.push(tmpDef);

tmpDef = new CompletionItem("preCacheVehicle");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("preCacheVehicle(vehicle: <String>): <Void>",
    "Look up a row in a table and pull out a particular column from that row\nReturns the value pulled from the given row and column");
defs.push(tmpDef);

tmpDef = new CompletionItem("tableLookupIString");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("tableLookupIString(filename: <String>, column: <Int>, value: <Parameter>, columnReturn: <Int>): <String>",
    "Precaches a thermal effect for use on the specified tag");
defs.push(tmpDef);

tmpDef = new CompletionItem("tableLookup");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("tableLookup(filename: <String>, column: <Int>, value: <Parameter>, columnReturn: <Int>): <String>",
    "Precache a minimap icon");
defs.push(tmpDef);

tmpDef = new CompletionItem("preCacheFXTeamThermal");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("preCacheFXTeamThermal(effect: <Int>, tag: <String>): <Void>",
    "Precache an Animation");
defs.push(tmpDef);

tmpDef = new CompletionItem("preCacheMiniMapIcon");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("preCacheMiniMapIcon(icon: <String>): <Void>",
    "Precache a leaderboard definition");
defs.push(tmpDef);

tmpDef = new CompletionItem("preCacheMpAnim");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("preCacheMpAnim(anim: <String>): <Void>",
    "Look up a row and column in a table and pull out that particular value\nReturns the value pulled from the given row and column");
defs.push(tmpDef);

tmpDef = new CompletionItem("preCacheLeaderboards");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("preCacheLeaderboards(leaderboard: <String>): <Void>",
    "Look up a row and column in a table and pull out a particular value from that row in an IString\nReturns the value pulled from the given row and column as an IString");
defs.push(tmpDef);

tmpDef = new CompletionItem("tableLookupByRow");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("tableLookupByRow(filename: <String>, row: <Int>, column: <Int>): <String>",
    "Look up a column in a table and gets the row number of the given value\nReturns the row number pulled from the given column");
defs.push(tmpDef);

tmpDef = new CompletionItem("tableLookupIStringByRow");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("tableLookupIStringByRow(filename: <String>, row: <Int>, column: <Int>): <String>",
    "Precaches a weapon for turret use.");
defs.push(tmpDef);

tmpDef = new CompletionItem("tableLookupRowNum");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("tableLookupRowNum(filename: <String>, column: <Int>, value: <Parameter>): <Int>",
    "Plays a looping controller rumble on the given player");
defs.push(tmpDef);

tmpDef = new CompletionItem("preCacheTurret");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("preCacheTurret(weapon: <String>): <Void>",
    "Plays a looping rumble at a given position");
defs.push(tmpDef);

tmpDef = new CompletionItem("playRumbleLoopOnEntity");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> playRumbleLoopOnEntity(rumble: <String>): <Void>",
    "Plays a rumble on the given entity");
defs.push(tmpDef);

tmpDef = new CompletionItem("playRumbleLoopOnPosition");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("playRumbleLoopOnPosition(rumble: <String>, position: <Vector>): <Void>",
    "Plays a rumble at a given position");
defs.push(tmpDef);

tmpDef = new CompletionItem("playRumbleOnEntity");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> playRumbleOnEntity(rumble: <String>): <Void>",
    "Stops all of the current rumbles");
defs.push(tmpDef);

tmpDef = new CompletionItem("playRumbleOnPosition");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("playRumbleOnPosition(rumble: <String>, position: <Vector>): <Void>",
    "Quits the playing of a particular rumble on a player");
defs.push(tmpDef);

tmpDef = new CompletionItem("stopAllRumbles");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("stopAllRumbles(): <Void>",
    "Gets the position of the eye for an AI or player\nReturns the position of the eye for the given AI or Player");
defs.push(tmpDef);

tmpDef = new CompletionItem("stopRumble");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> stopRumble(rumble: <String>): <Void>",
    "Checks whether the entity is alive\nReturns true if the entity is alive");
defs.push(tmpDef);

tmpDef = new CompletionItem("getEye");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> getEye(): <Vector>",
    "Checks whether the entity is a player\nReturns true if the entity is a player");
defs.push(tmpDef);

tmpDef = new CompletionItem("isAlive");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("isAlive(entity: <Entity>): <Bool>",
    "Play the given piece of ambient sound");
defs.push(tmpDef);

tmpDef = new CompletionItem("isPlayer");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("isPlayer(entity: <Entity>): <Bool>",
    "Stop all ambient sounds (excluding the music track)");
defs.push(tmpDef);

tmpDef = new CompletionItem("ambientPlay");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("ambientPlay(ambient: <String>, fade?: <Float>): <Void>",
    "Play a sound as a loop");
defs.push(tmpDef);

tmpDef = new CompletionItem("ambientStop");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("ambientStop(fade?: <Float>): <Void>",
    "Play a sound alias as if coming from the entity");
defs.push(tmpDef);

tmpDef = new CompletionItem("playLoopSound");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> playLoopSound(sound: <String>): <Void>",
    "Play a sound alias as if coming from the entity, as a master sound");
defs.push(tmpDef);

tmpDef = new CompletionItem("playSound");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> playSound(sound: <String>): <Void>",
    "Play a sound alias as if coming from the entity, so that only one player can hear it");
defs.push(tmpDef);

tmpDef = new CompletionItem("playSoundAsMaster");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> playSoundAsMaster(sound: <String>): <Void>",
    "Play a sound alias as if coming from the entity, so that only one team can hear it");
defs.push(tmpDef);

tmpDef = new CompletionItem("playSoundToPlayer");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> playSoundToPlayer(sound: <String>, player: <Entity>): <Void>",
    "Checks if the sound alias exists\nReturns true if the sound alias exists");
defs.push(tmpDef);

tmpDef = new CompletionItem("playSoundToTeam");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> playSoundToTeam(sound: <String>, team: <String>, ignorePlayer?: <Entity>): <Void>",
    "Stop a looping sound");
defs.push(tmpDef);

tmpDef = new CompletionItem("soundExists");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("soundExists(alias: <String>): <Bool>",
    "Stop all sounds on an entity. You must have a wait between Stopstrings() and Delete() or the sound will not stop");
defs.push(tmpDef);

tmpDef = new CompletionItem("stopLoopSound");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> stopLoopSound(): <Void>",
    "Plays a string at a world position");
defs.push(tmpDef);

tmpDef = new CompletionItem("stopSound");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> stopSound(): <Void>",
    "Set the current ambience track for the ac130");
defs.push(tmpDef);

tmpDef = new CompletionItem("playSoundAtPos");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("playSoundAtPos(origin: <Vector>, sound: <String>): <Void>",
    "Spawns a loop sound at the given position(TBD)");
defs.push(tmpDef);

tmpDef = new CompletionItem("setAC130Ambience");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("setAC130Ambience(ambience: <String>): <Void>",
    "Raises a spawn point up to make sure it's not in the ground, then drops it back down onto the ground");
defs.push(tmpDef);

tmpDef = new CompletionItem("spawnLoopSound");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("spawnLoopSound(sound: <String>, origin: <Vector>): <Void>",
    "Checks if the passed in origin would telefrag a player if another player was spawned there\nReturns true if the passed in origin would telefrag a player if another player was spawned there");
defs.push(tmpDef);

tmpDef = new CompletionItem("placeSpawnPoint");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> placeSpawnPoint(): <Void>",
    "Spawns a new entity\nReturns a reference to the new entity");
defs.push(tmpDef);

tmpDef = new CompletionItem("positionWouldTelefrag");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("positionWouldTelefrag(position: <Vector>): <Bool>",
    "Spawns a new entity\nReturns a reference to the new entity");
defs.push(tmpDef);

tmpDef = new CompletionItem("spawn");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("spawn(classname: <String>, origin: <Vector>): entity",
    "Allocates a structure\nReturns a reference to the new structure as an Entity");
defs.push(tmpDef);

tmpDef = new CompletionItem("spawn");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("spawn(classname: <String>, origin: <Vector>, flags: <Int>, radius: <Int>, height: <Int>): entity",
    "Spawns a new turret\nReturns a reference to the new turret");
defs.push(tmpDef);

tmpDef = new CompletionItem("spawnStruct");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("spawnStruct(): entity",
    "Spawns a new vehicle\nReturns a reference to the new vehicle");
defs.push(tmpDef);

tmpDef = new CompletionItem("spawnTurret");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("spawnTurret(classname: <String>, origin: <Vector>, weapon: <String>): entity",
    "Spawns this player at the specified position as if they are respawning");
defs.push(tmpDef);

tmpDef = new CompletionItem("spawnVehicle");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("spawnVehicle(model: <String>, targetname: <String>, vehicleType: <String>, origin: <Vector>, angles: <Vector>, owner: <Entity>): entity",
    "Spawns a new plane entity\nReturns a reference to the new plane");
defs.push(tmpDef);

tmpDef = new CompletionItem("spawn");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> spawn(origin: <Vector>, angles: <Vector>): <Void>",
    "Spawns a new helicopter entity\nReturns a reference to the new helicopter");
defs.push(tmpDef);

tmpDef = new CompletionItem("spawnPlane");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("spawnPlane(owner: <Entity>, classname: <String>, origin: <Vector>, friendlyIcon: <String>, enemyIcon: <String>): entity",
    "Creates a missile attractor on an enttiy\nReturns a reference to the new attractor");
defs.push(tmpDef);

tmpDef = new CompletionItem("spawnHelicopter");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("spawnHelicopter(owner: <Entity>, pathStart: <Vector>, forward: <Vector>, vehicle: <String>, model: <String>): entity",
    "Creates a missile attractor on a world position\nReturns a reference to the new attractor");
defs.push(tmpDef);

tmpDef = new CompletionItem("createAttractorEnt");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("createAttractorEnt(entity: <Entity>, strength: <Int>, range: <Int>): entity",
    "Creates a missile repulsor on an entity\nReturns a reference to the new repulsor");
defs.push(tmpDef);

tmpDef = new CompletionItem("createAttractorOrigin");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("createAttractorOrigin(origin: <Vector>, strength: <Int>, range: <Int>): entity",
    "Creates a missile repulsor on a world position\nReturns a reference to the new repulsor");
defs.push(tmpDef);

tmpDef = new CompletionItem("createRepulsorEnt");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("createRepulsorEnt(entity: <Entity>, strength: <Int>, range: <Int>): entity",
    "Gets the substring of characters >= startIndex and endIndex. endIndex is optional\nReturns the substring of characters >= startIndex and endIndex");
defs.push(tmpDef);

tmpDef = new CompletionItem("createRepulsorOrigin");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("createRepulsorOrigin(origin: <Vector>, strength: <Int>, range: <Int>): entity",
    "Checks if subString is a substring of text. Case sensitive\nReturns true if the passed in subString is a substring of text");
defs.push(tmpDef);

tmpDef = new CompletionItem("getSubStr");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("getSubStr(text: <String>, startIndex: <Int>, endIndex?: <Int>): <String>",
    "Tokenizes 'text' by the delimiters 'delim'\nReturns the array of string tokens");
defs.push(tmpDef);

tmpDef = new CompletionItem("isSubStr");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("isSubStr(text: <String>, subString: <String>): <Bool>",
    "Converts the passed in string to a lower case string\nReturns the passed in string in lower case");
defs.push(tmpDef);

tmpDef = new CompletionItem("strTok");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("strTok(text: <String>, delim: <String>): <Array>",
    "Checks if endString is the ending string of text. Case sensitive\nReturns true if the passed in endString is the ending string of text");
defs.push(tmpDef);

tmpDef = new CompletionItem("toLower");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("toLower(text: <String>): <String>",
    "Compares two strings to see if they are the same\nReturns true if the two strings are equal");
defs.push(tmpDef);

tmpDef = new CompletionItem("isEndStr");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("isEndStr(text: <String>, endString: <String>): <Bool>",
    "Prints to the server log file");
defs.push(tmpDef);

tmpDef = new CompletionItem("striCmp");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("striCmp(str1: <String>, str2: <String>): <Bool>",
    "Writes a string to the server log file");
defs.push(tmpDef);

tmpDef = new CompletionItem("logPrint");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("logPrint(text: <String>): <Void>",
    "Writes a string to the server log file");
defs.push(tmpDef);

tmpDef = new CompletionItem("logString");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("logString(text: <String>): <Void>",
    "Resets the infinite loop check timer, to prevent an incorrect infinite loop error when a lot of script must be run");
defs.push(tmpDef);

tmpDef = new CompletionItem("logString_0");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("logString_0(text: <String>): <Void>",
    "Depricated function, does nothing");
defs.push(tmpDef);

tmpDef = new CompletionItem("resetTimeout");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("resetTimeout(): <Void>",
    "Gets the player's team as assigned by matchmaking\nReturns the player's assigned team. 0 = No Team, 1 = Axis, 2 = Allies, 3 = Spectator");
defs.push(tmpDef);

tmpDef = new CompletionItem("setArchive");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("setArchive(): <Void>",
    "Gets the number of players still alive on a given team\nReturns the number of players still alive on the given team");
defs.push(tmpDef);

tmpDef = new CompletionItem("getAssignedTeam");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("getAssignedTeam(player: <Entity>): <Int>",
    "Gets whether a team has radar or not\nReturns true if the given team has radar");
defs.push(tmpDef);

tmpDef = new CompletionItem("getTeamPlayersAlive");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("getTeamPlayersAlive(team: <String>): <Int>",
    "Get a team's score\nReturns the given team's score");
defs.push(tmpDef);

tmpDef = new CompletionItem("getTeamRadar");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("getTeamRadar(team: <String>): <Bool>",
    "Set whether a team has radar or not");
defs.push(tmpDef);

tmpDef = new CompletionItem("getTeamScore");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("getTeamScore(team: <String>): <Int>",
    "Set a team's score");
defs.push(tmpDef);

tmpDef = new CompletionItem("setTeamRadar");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("setTeamRadar(team: <String>, availability: <Bool>): <Void>",
    "Sets a player's current team rank");
defs.push(tmpDef);

tmpDef = new CompletionItem("setTeamScore");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("setTeamScore(team: <String>, score: <Int>): <Void>",
    "Sets a team's radar strength");
defs.push(tmpDef);

tmpDef = new CompletionItem("setPlayerTeamRank");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("setPlayerTeamRank(player: <Entity>, clientID: <Int>, rank: <Int>): <Void>",
    "Gets a team's radar strength\nReturns the team's radar strength");
defs.push(tmpDef);

tmpDef = new CompletionItem("setTeamRadarStrength");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("setTeamRadarStrength(team: <String>, strength: <Int>): <Void>",
    "Blocks a team's radar");
defs.push(tmpDef);

tmpDef = new CompletionItem("getTeamRadarStrength");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("getTeamRadarStrength(team: <String>): <Int>",
    "Unblocks a team's radar");
defs.push(tmpDef);

tmpDef = new CompletionItem("blockTeamRadar");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("blockTeamRadar(team: <String>): <Void>",
    "Checks if a team's radar is blocked\nReturns true if the team's radar is blocked");
defs.push(tmpDef);

tmpDef = new CompletionItem("unBlockTeamRadar");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("unBlockTeamRadar(team: <String>): <Void>",
    "Allows script to do a point trace with MASK_SHOT\nReturns hit position, hit entity, and hit surface normal in an array");
defs.push(tmpDef);

tmpDef = new CompletionItem("isTeamRadarBlocked");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("isTeamRadarBlocked(team: <String>): <Bool>",
    "Allows script to do a point trace with MASK_SHOT\nReturns true if trace complete, else returns false");
defs.push(tmpDef);

tmpDef = new CompletionItem("bulletTrace");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("bulletTrace(start: <Vector>, end: <Vector>, hitCharacters: <Bool>, ignore: <Entity>): <Array>",
    "Determines how much the entity can be damaged from the given position, using the same check that is used by grenades. Performs multiple damage traces and returns an approximation to how much of the entity is damageable from the given point (between 0 and 1). In SinglePlayer this will always be 1 if the entity is partially damageable.\nReturns the approximation of how much of the entity is damageable as a float");
defs.push(tmpDef);

tmpDef = new CompletionItem("bulletTracePassed");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("bulletTracePassed(start: <Vector>, end: <Vector>, hitCharacters: <Bool>, ignore?: <Entity>): <Bool>",
    "Physics trace, ignoring characters\nReturns the endpos vector of the trace");
defs.push(tmpDef);

tmpDef = new CompletionItem("damageConeTrace");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> damageConeTrace(origin: <Vector>, ignore?: <Entity>): <Float>",
    "Physics trace using player capsule size, ignoring characters\nReturns the endpos vector of the trace");
defs.push(tmpDef);

tmpDef = new CompletionItem("physicsTrace");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("physicsTrace(start: <Vector>, end: <Vector>): <Vector>",
    "Determines how much the entity can be seen from the given position, using the same check that is used by grenades. Performs multiple sight traces and returns an approximation to how much of the entity is visible from the given point (between 0 and 1). In SinglePlayer this will always be 1 if the entity is partially visible.\nReturns the approximation of how much of the entity is visible from the given position as a float");
defs.push(tmpDef);

tmpDef = new CompletionItem("playerPhysicsTrace");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("playerPhysicsTrace(start: <Vector>, end: <Vector>): <Vector>",
    "Allows script to do a point trace with MASK_OPAQUE_AI\nReturns true if trace complete, else returns false");
defs.push(tmpDef);

tmpDef = new CompletionItem("sightConeTrace");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> sightConeTrace(position: <Vector>, ignore?: <Entity>): <Float>",
    "Traces sight from a spawnpoint to a location to determine how much of the location can be seen from the given spawn\nReturns the value of how much the player can be seen from this spawn as a float");
defs.push(tmpDef);

tmpDef = new CompletionItem("sightTracePassed");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("sightTracePassed(start: <Vector>, end: <Vector>, hitCharacters: <Bool>, Entity: <params>[]): <Bool>",
    "Physics trace, ignoring characters\nReturns the hit normal of the trace");
defs.push(tmpDef);

tmpDef = new CompletionItem("spawnSightTrace");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("spawnSightTrace(spawnpoint: <Entity>, origin: <Vector>, end: <Vector>): <Float>",
    "Calculates an average normal out of the given normals\nReturns the average normal of the given normals");
defs.push(tmpDef);

tmpDef = new CompletionItem("physicsTraceNormal");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("physicsTraceNormal(start: <Vector>, end: <Vector>): parameter",
    "Checks if the given origin is within the player's reticle circle\nReturns true if the given origin is within the player's reticle circle, false otherwise");
defs.push(tmpDef);

tmpDef = new CompletionItem("averageNormal");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("averageNormal(normals: <Array>): <Float>",
    "Claim a single user trigger");
defs.push(tmpDef);

tmpDef = new CompletionItem("worldPointInReticle_Circle");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> worldPointInReticle_Circle(origin: <Vector>, width: <Int>, height: <Int>): <Bool>",
    "Release a single user trigger");
defs.push(tmpDef);

tmpDef = new CompletionItem("clientClaimTrigger");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> clientClaimTrigger(trigger: <Entity>): <Void>",
    "Release a currently claimed trigger");
defs.push(tmpDef);

tmpDef = new CompletionItem("clientReleaseTrigger");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> clientReleaseTrigger(trigger: <Entity>): <Void>",
    "Clears the current target for this turret");
defs.push(tmpDef);

tmpDef = new CompletionItem("releaseClaimedTrigger");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> releaseClaimedTrigger(): <Void>",
    "Gets the current target of this turret\nReturns the target entity of the turret");
defs.push(tmpDef);

tmpDef = new CompletionItem("clearTargetEntity");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> clearTargetEntity(): <Void>",
    "Checks whether this turret is firing. Must be called on a turret\nReturns true if this turret is firing");
defs.push(tmpDef);

tmpDef = new CompletionItem("getTurretTarget");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> getTurretTarget(): entity",
    "Restores the pitch of the turret when it drops to the ground. Recalculates based on current collision environment. Use this if you move a turret and need to reconfigure.");
defs.push(tmpDef);

tmpDef = new CompletionItem("isFiringTurret");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> isFiringTurret(): <Bool>",
    "Sets the spread of this turret when used by an AI");
defs.push(tmpDef);

tmpDef = new CompletionItem("restoreDefaultDropPitch");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> restoreDefaultDropPitch(): <Void>",
    "Set the amount that the turret can pivot down");
defs.push(tmpDef);

tmpDef = new CompletionItem("setAISpread");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> setAISpread(spread: <Float>): <Void>",
    "Sets the time that a turret takes to converge to it's target, on either the pitch or yaw planes");
defs.push(tmpDef);

tmpDef = new CompletionItem("setBottomArc");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> setBottomArc(angle: <Int>): <Void>",
    "Set the default drop pitch that the turret attempts to return to when it is not in use");
defs.push(tmpDef);

tmpDef = new CompletionItem("setConvergenceTime");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> setConvergenceTime(time: <Float>, type?: <String>): <Void>",
    "Set the amount that the turret can move to the left");
defs.push(tmpDef);

tmpDef = new CompletionItem("setDefaultDropPitch");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> setDefaultDropPitch(pitch: <Float>): <Void>",
    "Set the mode of a turret");
defs.push(tmpDef);

tmpDef = new CompletionItem("setLeftArc");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> setLeftArc(angle: <Int>): <Void>",
    "Set the spread of this turret when used by the player");
defs.push(tmpDef);

tmpDef = new CompletionItem("setMode");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> setMode(mode: <String>): <Void>",
    "Set the amount that the turret can move to the right");
defs.push(tmpDef);

tmpDef = new CompletionItem("setPlayerSpread");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> setPlayerSpread(spread: <Float>): <Void>",
    "Sets the time that a turret uses supressing fire after losing sight of an enemy");
defs.push(tmpDef);

tmpDef = new CompletionItem("setRightArc");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> setRightArc(angle: <Int>): <Void>",
    "Sets the target of this turret");
defs.push(tmpDef);

tmpDef = new CompletionItem("setSupressionTime");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> setSupressionTime(time: <Float>): <Void>",
    "Set the amount that the turret can pivot up");
defs.push(tmpDef);

tmpDef = new CompletionItem("setTargetEntity");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> setTargetEntity(target: <Entity>): <Void>",
    "Sets the team of a turret");
defs.push(tmpDef);

tmpDef = new CompletionItem("setTopArc");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> setTopArc(angle: <Int>): <Void>",
    "Shoots a turret");
defs.push(tmpDef);

tmpDef = new CompletionItem("setTurretTeam");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> setTurretTeam(team: <String>): <Void>",
    "Starts a turret firing");
defs.push(tmpDef);

tmpDef = new CompletionItem("shootTurret");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> shootTurret(): <Void>",
    "Stops a turret firing");
defs.push(tmpDef);

tmpDef = new CompletionItem("startFiring");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> startFiring(): <Void>",
    "Disable a turret's ability to fire");
defs.push(tmpDef);

tmpDef = new CompletionItem("stopFiring");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> stopFiring(): <Void>",
    "Enable a turret's ability to fire");
defs.push(tmpDef);

tmpDef = new CompletionItem("turretFireDisable");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> turretFireDisable(): <Void>",
    "Starts spinning the barrel of a turret");
defs.push(tmpDef);

tmpDef = new CompletionItem("turretFireEnable");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> turretFireEnable(): <Void>",
    "Stops spinning the barrel of a turret");
defs.push(tmpDef);

tmpDef = new CompletionItem("startBarrelSpin");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> startBarrelSpin(): <Void>",
    "Gets the rate at which this turret's barrel is spinning\nReturns the rate at which this turret's barrel is spinning");
defs.push(tmpDef);

tmpDef = new CompletionItem("stopBarrelSpin");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> stopBarrelSpin(): <Void>",
    "Sets this player to start controlling a turret. Any player input will be directed to the turret");
defs.push(tmpDef);

tmpDef = new CompletionItem("getBarrelSpinRate");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> getBarrelSpinRate(): <Float>",
    "Sets this player to no longer control a currently controlled turret");
defs.push(tmpDef);

tmpDef = new CompletionItem("remoteControlTurret");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> remoteControlTurret(turret: <Entity>): <Void>",
    "Gets the owner of this turret\nReturns the owner of this turret");
defs.push(tmpDef);

tmpDef = new CompletionItem("remoteControlTurretOff");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> remoteControlTurretOff(turret: <Entity>): <Void>",
    "Sets the owner of this sentry");
defs.push(tmpDef);

tmpDef = new CompletionItem("getTurretOwner");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> getTurretOwner(): entity",
    "Sets the passed in player as the carrier of this sentry. This will cause the sentry to lock to the player for placement");
defs.push(tmpDef);

tmpDef = new CompletionItem("setSentryOwner");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> setSentryOwner(owner: <Entity>): <Void>",
    "Sets whether this turret is visible on the minimap or not");
defs.push(tmpDef);

tmpDef = new CompletionItem("setSentryCarrier");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> setSentryCarrier(carrier: <Entity>): <Void>",
    "Snaps this turret to it's currently assigned target entity(TBD)");
defs.push(tmpDef);

tmpDef = new CompletionItem("setTurretMinimapVisible");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> setTurretMinimapVisible(visible: <Bool>): <Void>",
    "Sets the percent that a turret converges to it's target based on height(TBD)");
defs.push(tmpDef);

tmpDef = new CompletionItem("snapToTargetEntity");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> snapToTargetEntity(): <Void>",
    "Makes this turret solid so that players can collide with it");
defs.push(tmpDef);

tmpDef = new CompletionItem("setConvergenceHeightPercent");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> setConvergenceHeightPercent(percent: <Float>): <Void>",
    "Makes this turret operable by players or AI");
defs.push(tmpDef);

tmpDef = new CompletionItem("makeTurretSolid");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> makeTurretSolid(): <Void>",
    "Makes this turret inoperable");
defs.push(tmpDef);

tmpDef = new CompletionItem("makeTurretOperable");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> makeTurretOperable(): <Void>",
    "Sets the accuracy of this turret while using it(TBD)");
defs.push(tmpDef);

tmpDef = new CompletionItem("makeTurretInOperable");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> makeTurretInOperable(): <Void>",
    "Sets the delay on the auto rotation of this turret(TBD)");
defs.push(tmpDef);

tmpDef = new CompletionItem("setTurretAccuracy");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> setTurretAccuracy(accuracy: <Float>): <Void>",
    "Sets whether this turret should wait for it's mode to change or not(TBD)");
defs.push(tmpDef);

tmpDef = new CompletionItem("setAutoRotationDelay");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> setAutoRotationDelay(delay: <Float>): <Void>",
    "Sets this player to start controlling a vehicle. Any player input will be directed to the vehicle");
defs.push(tmpDef);

tmpDef = new CompletionItem("setTurretModeChangeWait");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> setTurretModeChangeWait(wait: <Bool>): <Void>",
    "Sets this player to stop controlling a vehicle");
defs.push(tmpDef);

tmpDef = new CompletionItem("remoteControlVehicle");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> remoteControlVehicle(vehicle: <Entity>): <Void>",
    "Checks if this player is firing a vehicle's turret\nReturns true if the player is firing a vehicle's turret");
defs.push(tmpDef);

tmpDef = new CompletionItem("remoteControlVehicleOff");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> remoteControlVehicleOff(vehicle: <Entity>): <Void>",
    "Sets this player to start controlling a vehicle and be able to fire the vehicle's attached turret");
defs.push(tmpDef);

tmpDef = new CompletionItem("isFiringVehicleTurret");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> isFiringVehicleTurret(): <Bool>",
    "Sets this player to stop controlling a vehicle and it's turret");
defs.push(tmpDef);

tmpDef = new CompletionItem("driveVehicleAndControlTurret");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> driveVehicleAndControlTurret(vehicle: <Entity>): <Void>",
    "Gets the current mode of this turret\nReturns this turret's current mode");
defs.push(tmpDef);

tmpDef = new CompletionItem("driveVehicleAndControlTurretOff");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> driveVehicleAndControlTurretOff(vehicle: <Entity>): <Void>",
    "Checks if the game can spawn another turret\nReturns true if the game can spawn another turret");
defs.push(tmpDef);

tmpDef = new CompletionItem("getMode");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> getMode(): <String>",
    "Checks whether this entity/variable is defined\nReturns true if this entity/variable is defined");
defs.push(tmpDef);

tmpDef = new CompletionItem("canSpawnTurret");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("canSpawnTurret(): <Bool>",
    "Checks whether this entity/variable is a string\nReturns true if this entity/variable is a string");
defs.push(tmpDef);

tmpDef = new CompletionItem("isDefined");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("isDefined(variable: <Parameter>): <Bool>",
    "Gets an Array consisting of the keys in the input array\nReturns an array consisting of the keys in the given array");
defs.push(tmpDef);

tmpDef = new CompletionItem("isString");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("isString(variable: <Parameter>): <Bool>",
    "Gets the first array keyin an array(TBD)\nReturns the first array key  in the array");
defs.push(tmpDef);

tmpDef = new CompletionItem("getArrayKeys");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("getArrayKeys(array: <Array>): <Array>",
    "Gets the next array key after the given index in an array(TBD)\nReturns the next array key after the given index in the array");
defs.push(tmpDef);

tmpDef = new CompletionItem("getFirstArrayKey");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("getFirstArrayKey(array: <Array>): <String>",
    "Sorts the given array in accordance to distance from the given position\nReturns the newly sorted array");
defs.push(tmpDef);

tmpDef = new CompletionItem("getNextArrayKey");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("getNextArrayKey(array: <Array>, index: <Int>): <String>",
    "Calculates the forward vector corresponding to a set of angles\nReturns the forward vector corresponding to a set of angles");
defs.push(tmpDef);

tmpDef = new CompletionItem("sortByDistance");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("sortByDistance(array: <Array>, position: <Vector>): <Array>",
    "Calculates the right vector corresponding to a set of angles\nReturns the right vector corresponding to a set of angles");
defs.push(tmpDef);

tmpDef = new CompletionItem("anglesToForward");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("anglesToForward(angles: <Vector>): <Vector>",
    "Calculates the up vector corresponding to a set of angles\nReturns the up vector corresponding to a set of angles");
defs.push(tmpDef);

tmpDef = new CompletionItem("anglesToRight");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("anglesToRight(angles: <Vector>): <Vector>",
    "Tests which of two points is the closest\nReturns true if pointA is closer to the reference than pointB");
defs.push(tmpDef);

tmpDef = new CompletionItem("anglesToUp");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("anglesToUp(angles: <Vector>): <Vector>",
    "Reorients anglesB to anglesA\nReturns anglesB reoriented by anglesA");
defs.push(tmpDef);

tmpDef = new CompletionItem("closer");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("closer(reference: <Vector>, pointA: <Vector>, pointB: <Vector>): <Bool>",
    "Calculates the distance between two points\nReturns the distance between the two points");
defs.push(tmpDef);

tmpDef = new CompletionItem("combineAngles");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("combineAngles(anglesA: <Vector>, anglesB: <Vector>): <Vector>",
    "Calculates the distance between two points, ignores height difference\nReturns the distance between the two points, ignoring height difference");
defs.push(tmpDef);

tmpDef = new CompletionItem("distance");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("distance(pointA: <Vector>, pointB: <Vector>): <Float>",
    "Calculates the squared distance between two points. This is cheaper than the actual distance as it doesn't involve a square root\nReturns the squared distance between the two points");
defs.push(tmpDef);

tmpDef = new CompletionItem("distance2D");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("distance2D(pointA: <Vector>, pointB: <Vector>): <Float>",
    "Calculates the length of the given vector\nReturns the length of the given vector");
defs.push(tmpDef);

tmpDef = new CompletionItem("distanceSquared");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("distanceSquared(pointA: <Vector>, pointB: <Vector>): <Float>",
    "Calculates the squared length for the given vector. This is cheaper than the actual vector length as it doesn't involve a square root\nReturns the squared length of the given vector");
defs.push(tmpDef);

tmpDef = new CompletionItem("length");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("length(vector: <Vector>): <Float>",
    "Calculates the dot product of two vectors\nReturns the dot product of the two vectors");
defs.push(tmpDef);

tmpDef = new CompletionItem("lengthSquared");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("lengthSquared(vector: <Vector>): <Float>",
    "Linear interpolates between two vectors\nReturns the current interpolated position at fraction");
defs.push(tmpDef);

tmpDef = new CompletionItem("vectorDot");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("vectorDot(pointA: <Vector>, pointB: <Vector>): <Float>",
    "Calculates a normalized copy of this vector\nReturns the normalized copy of the given vector");
defs.push(tmpDef);

tmpDef = new CompletionItem("vectorLerp");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("vectorLerp(from: <Vector>, to: <Vector>, fraction: <Float>): <Vector>",
    "Calculates a set of angles corresponding to the given vector\nReturns the angles corresponding to the given vector");
defs.push(tmpDef);

tmpDef = new CompletionItem("vectorNormalize");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("vectorNormalize(vector: <Vector>): <Vector>",
    "Calculates a yaw value corresponding to the given vector\nReturns the angles corresponding to the given vector");
defs.push(tmpDef);

tmpDef = new CompletionItem("vectorToAngles");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("vectorToAngles(vector: <Vector>): <Vector>",
    "Gets the closest point in bounds of the entity from the passed in position\nReturns the closest point in bounds from the given position");
defs.push(tmpDef);

tmpDef = new CompletionItem("vectorToYaw");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("vectorToYaw(vector: <Vector>): <Float>",
    "Gets the normal ground position of the given position\nReturns the ground position at the given coordinates");
defs.push(tmpDef);

tmpDef = new CompletionItem("getPointInBounds");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> getPointInBounds(point: <Vector>): <Vector>",
    "Calculates an average point out of the given points\nReturns the average point of the given points");
defs.push(tmpDef);

tmpDef = new CompletionItem("getGroundPosition");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("getGroundPosition(origin: <Vector>, radius: <Float>, traceDistance?: <Float>, traceHeight?: <Float>): <Vector>",
    "Disable grenade damage for damage triggers");
defs.push(tmpDef);

tmpDef = new CompletionItem("averagePoint");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("averagePoint(points: <Array>): <Vector>",
    "Enable grenade damage for damage triggers");
defs.push(tmpDef);

tmpDef = new CompletionItem("disableGrenadeTouchDamage");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> disableGrenadeTouchDamage(): <Void>",
    "Get the remaining ammo\nReturns the remaining ammo in the given weapon");
defs.push(tmpDef);

tmpDef = new CompletionItem("enableGrenadeTouchDamage");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> enableGrenadeTouchDamage(): <Void>",
    "Get the name of the weapon model used for the given weapon\nReturns the name of the weapon model used for the given weapon");
defs.push(tmpDef);

tmpDef = new CompletionItem("getAmmoCount");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> getAmmoCount(weapon: <String>): <Int>",
    "Get the names of the weapon's current hide tags.\nReturns the names of the weapon's current hide tags");
defs.push(tmpDef);

tmpDef = new CompletionItem("getWeaponModel");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("getWeaponModel(name?: <String>): <Int>",
    "Checks if the weapon is clip only\nReturns true if the weapon is clip only");
defs.push(tmpDef);

tmpDef = new CompletionItem("getWeaponHideTags");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("getWeaponHideTags(weapon: <String>, variant?: <Int>): <Int>",
    "Checks if the weapon has timed detonation (e.g. frag/smoke grenades)\nReturns true if the weapon has a timed detonation");
defs.push(tmpDef);

tmpDef = new CompletionItem("isWeaponClipOnly");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("isWeaponClipOnly(weapon: <String>): <Bool>",
    "Sets the ammo amount for a weapon item entity (lying on the ground)");
defs.push(tmpDef);

tmpDef = new CompletionItem("isWeaponDetonationTimed");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("isWeaponDetonationTimed(weapon: <String>): <Bool>",
    "Fire a 'magic bullet', from the source location towards the destination");
defs.push(tmpDef);

tmpDef = new CompletionItem("itemWeaponSetAmmo");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> itemWeaponSetAmmo(clipAmmo: <Int>, reserveAmmo: <Int>, altWeapon?: <Int>): <Void>",
    "Gets the name of the weapon this weapon has for its alternate mode. Subsequent alternate weapons can be retrieved by calling the function again with the new weapon names until it returns the original weapon.\nReturns the name of the weapon this weapon has for its alternate mode. Returns 'none' if there is no alt fire");
defs.push(tmpDef);

tmpDef = new CompletionItem("magicBullet");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("magicBullet(weapon: <String>, start: <Vector>, end: <Vector>, owner?: <Entity>): entity",
    "Gets the class of weapon that this weapon is, such as 'rifle', 'smg', 'spread', 'pistol', etc.\nReturns the class of weapon that the weapon is");
defs.push(tmpDef);

tmpDef = new CompletionItem("weaponAltWeaponName");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("weaponAltWeaponName(weapon: <String>): <String>",
    "Gets the weapon clip size for the given weapon\nReturns the weapon clip size of the given weapon");
defs.push(tmpDef);

tmpDef = new CompletionItem("weaponClass");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("weaponClass(weapon: <String>): <String>",
    "Get the weapon fire time for the given weapon\nReturns the weapon fire time for the given weapon");
defs.push(tmpDef);

tmpDef = new CompletionItem("weaponClipSize");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("weaponClipSize(weapon: <String>): <Int>",
    "Gets the way this weapon is stored, such as 'altmode', 'item', 'offhand', or 'primary'\nReturns the way this weapon is stored");
defs.push(tmpDef);

tmpDef = new CompletionItem("weaponFireTime");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("weaponFireTime(weapon: <String>): <Float>",
    "Get whether this weapon has a bolt action\nReturns true if the weapon has a bolt action");
defs.push(tmpDef);

tmpDef = new CompletionItem("weaponInventoryType");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("weaponInventoryType(weapon: <String>): <String>",
    "Get whether this weapon is semi automatic\nReturns true if the weapon is semi automatic");
defs.push(tmpDef);

tmpDef = new CompletionItem("weaponIsBoltAction");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("weaponIsBoltAction(weapon: <String>): <Bool>",
    "Gets the max amount of ammo this weapon is meant to hold. Stockpile only, not the clip\nReturns the max amount of ammo this weapon is meant to hold");
defs.push(tmpDef);

tmpDef = new CompletionItem("weaponIsSemiAutomatic");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("weaponIsSemiAutomatic(weapon: <String>): <Bool>",
    "Gets the amount of ammo this weapon is meant to start with when first given to a player\nReturns the amount of ammo this weapon is meant to start with when first given to a player");
defs.push(tmpDef);

tmpDef = new CompletionItem("weaponMaxAmmo");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("weaponMaxAmmo(weapon: <String>): <Int>",
    "Gets the type of weapon that this weapon is, such as 'bullet', 'projectile', or 'grenade'\nReturns the type of weapon that this weapon is");
defs.push(tmpDef);

tmpDef = new CompletionItem("weaponStartAmmo");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("weaponStartAmmo(weapon: <String>): <Int>",
    "TBD");
defs.push(tmpDef);

tmpDef = new CompletionItem("weaponType");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("weaponType(weapon: <String>): <String>",
    "Get the hide tags of the weapon model used for the given weapon(TBD)\nReturns the names of the hide tags of the weapon model used for the given weapon");
defs.push(tmpDef);

tmpDef = new CompletionItem("kC_RegWeaponForFxRemoval");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> kC_RegWeaponForFxRemoval(weapon: <String>): <Void>",
    "Get whether this weapon is fully automatic\nReturns true if the weapon is fully automatic");
defs.push(tmpDef);

tmpDef = new CompletionItem("getWeaponHideTags");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("getWeaponHideTags(weapon: <String>): <Array>",
    "Get whether this weapon inherits a perk(TBD)\nReturns true if the weapon has a perk");
defs.push(tmpDef);

tmpDef = new CompletionItem("weaponIsAuto");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("weaponIsAuto(weapon: <String>): <Bool>",
    "Gets the burst count of a weapon\nReturns the burst count of the weapon");
defs.push(tmpDef);

tmpDef = new CompletionItem("weaponInheritsPerks");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("weaponInheritsPerks(weapon: <String>): <Bool>",
    "Get whether this weapon has a thermal scope\nReturns true if the weapon has a thermal scope");
defs.push(tmpDef);

tmpDef = new CompletionItem("weaponBurstCount");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("weaponBurstCount(weapon: <String>): <Int>",
    "Get the name of the weapon's flash tag\nReturns the name of the weapon's flash tag");
defs.push(tmpDef);

tmpDef = new CompletionItem("weaponHasThermalScope");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("weaponHasThermalScope(weapon: <String>): <Bool>",
    "Attaches this vehicle to the given path");
defs.push(tmpDef);

tmpDef = new CompletionItem("getWeaponFlashTag");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("getWeaponFlashTag(weapon: <String>): <String>",
    "Clear the goal yaw for this direction");
defs.push(tmpDef);

tmpDef = new CompletionItem("attachPath");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> attachPath(node: <Entity>): <Void>",
    "Clear the entity the vehicle is orienting towards");
defs.push(tmpDef);

tmpDef = new CompletionItem("clearGoalYaw");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> clearGoalYaw(): <Void>",
    "Clear the target yaw direction for this vehicle");
defs.push(tmpDef);

tmpDef = new CompletionItem("clearLookAtEnt");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> clearLookAtEnt(): <Void>",
    "Clear the target for the vehicle turret");
defs.push(tmpDef);

tmpDef = new CompletionItem("clearTargetYaw");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> clearTargetYaw(): <Void>",
    "Fire the vehicle's weapon");
defs.push(tmpDef);

tmpDef = new CompletionItem("clearTurretTarget");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> clearTurretTarget(): <Void>",
    "Frees this vehicle instance");
defs.push(tmpDef);

tmpDef = new CompletionItem("fireWeapon");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> fireWeapon(barrelTag?: <String>, targetEnt?: <Entity>, targetOffset?: <Vector>): <Void>",
    "Gets the origin and angles if the vehicle were to be attached to the path. The origin and angles are returned as a ScriptArray of size 2. Origin is 1st and angles is 2nd.\nReturns the origin and angles if the vehicle were to be attached to the path.");
defs.push(tmpDef);

tmpDef = new CompletionItem("freeVehicle");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> freeVehicle(): <Void>",
    "Gets the goal speed in miles per hour\nReturns the goal speed in miles per hour");
defs.push(tmpDef);

tmpDef = new CompletionItem("getAttachPos");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> getAttachPos(node: <Entity>): entity",
    "Gets the current speed in inches per second\nReturns the current speed in inches per second");
defs.push(tmpDef);

tmpDef = new CompletionItem("getGoalSpeedMPH");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> getGoalSpeedMPH(): <Float>",
    "Gets the owner of this particular vehicle\nReturns the owner of this particualr vehicle");
defs.push(tmpDef);

tmpDef = new CompletionItem("getSpeed");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> getSpeed(): <Int>",
    "Gets the surface type of the given wheel\nReturns the surface type of the given wheel as a string");
defs.push(tmpDef);

tmpDef = new CompletionItem("getVehicleOwner");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> getVehicleOwner(): entity",
    "Query whether this vehicle's turret is ready for firing\nReturns true if this vehicle's turret is ready to fire, false otherwise.");
defs.push(tmpDef);

tmpDef = new CompletionItem("getWheelSurface");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> getWheelSurface(wheel: <String>): <String>",
    "Jolts this vehicle");
defs.push(tmpDef);

tmpDef = new CompletionItem("isTurretReady");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> isTurretReady(): <Bool>",
    "Sets the vehile to resume it's path speed");
defs.push(tmpDef);

tmpDef = new CompletionItem("joltBody");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> joltBody(joltPosition: <Vector>, intensity: <Float>, fraction?: <Float>, deceleration?: <Float>): <Void>",
    "Sets the acceleration for this vehicle");
defs.push(tmpDef);

tmpDef = new CompletionItem("resumeSpeed");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> resumeSpeed(acceleration: <Float>): <Void>",
    "Sets the speed at which air resistance maxes out");
defs.push(tmpDef);

tmpDef = new CompletionItem("setAcceleration");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> setAcceleration(acceleration: <Float>): <Void>",
    "Sets the deceleration for this vehicle");
defs.push(tmpDef);

tmpDef = new CompletionItem("setAirResistance");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> setAirResistance(maxResistanceSpeed: <Float>): <Void>",
    "Set the goal yaw direction for this vehicle.Goal yaw is ignored if vehicle doesn't stop at goal. Lookat entity has priority over goal yaw");
defs.push(tmpDef);

tmpDef = new CompletionItem("setDeceleration");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> setDeceleration(deceleration: <Float>): <Void>",
    "Set the hovering parameters");
defs.push(tmpDef);

tmpDef = new CompletionItem("setGoalYaw");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> setGoalYaw(yaw: <Float>): <Void>",
    "Set the jitter parameters. Set everything to 0 to stop jittering. Vehicle ignores jitter parameters when on ground");
defs.push(tmpDef);

tmpDef = new CompletionItem("setHoverParams");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> setHoverParams(radius: <Int>, speed: <Float>, accel: <Float>): <Void>",
    "Set the entity this vehicle will orient towards");
defs.push(tmpDef);

tmpDef = new CompletionItem("setJitterParams");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> setJitterParams(range: <Vector>, minPeriod: <Float>, maxPeriod: <Float>): <Void>",
    "Sets max pitch and roll angle for this vehicle.");
defs.push(tmpDef);

tmpDef = new CompletionItem("setLookAtEnt");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> setLookAtEnt(entity: <Entity>): <Void>",
    "Set distance near goal at which near_goal notification should be sent once.");
defs.push(tmpDef);

tmpDef = new CompletionItem("setMaxPitchRoll");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> setMaxPitchRoll(pitch: <Float>, roll: <Float>): <Void>",
    "Sets the speed and acceleration for this vehicle.");
defs.push(tmpDef);

tmpDef = new CompletionItem("setNearGoalNotifyDist");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> setNearGoalNotifyDist(dist: <Float>): <Void>",
    "Sets the speed and acceleration for this vehicle instantaneously. Direction will be toward the goal direction if there is a goal, otherwise the current direction.");
defs.push(tmpDef);

tmpDef = new CompletionItem("setSpeed");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> setSpeed(speed: <Int>, acceleration?: <Int>, deceleration?: <Int>): <Void>",
    "Sets a switch node for this vehicle");
defs.push(tmpDef);

tmpDef = new CompletionItem("setSpeedImmediate");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> setSpeedImmediate(speed: <Int>, acceleration?: <Int>, deceleration?: <Int>): <Void>",
    "Set the target yaw direction for this vehicle. Goal yaw has priority over target yaw.");
defs.push(tmpDef);

tmpDef = new CompletionItem("setSwitchNode");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> setSwitchNode(sourceNode: <Entity>, destNode: <Entity>): <Void>",
    "If this is higher, helicopters can make sharper turns to match goal positions better.");
defs.push(tmpDef);

tmpDef = new CompletionItem("setTargetYaw");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> setTargetYaw(yaw: <Float>): <Void>",
    "Set the target entity for this vehicle turret.");
defs.push(tmpDef);

tmpDef = new CompletionItem("setTurningAbility");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> setTurningAbility(ability: <Float>): <Void>",
    "Set the target position for this vehicle turret.");
defs.push(tmpDef);

tmpDef = new CompletionItem("setTurretTargetEnt");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> setTurretTargetEnt(target: <Entity>, offset?: <Vector>): <Void>",
    "Set the target position for this vehicle");
defs.push(tmpDef);

tmpDef = new CompletionItem("setTurretTargetVec");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> setTurretTargetVec(target: <Vector>): <Void>",
    "Set look at text for the vehicle");
defs.push(tmpDef);

tmpDef = new CompletionItem("setVehGoalPos");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> setVehGoalPos(goal: <Vector>, stopAtGoal: <Bool>): <Void>",
    "Set which team a vehicle is on");
defs.push(tmpDef);

tmpDef = new CompletionItem("setVehicleLookAtText");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> setVehicleLookAtText(text1: <String>, text2?: <String>): <Void>",
    "Set the vehicle's weapon");
defs.push(tmpDef);

tmpDef = new CompletionItem("setVehicleTeam");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> setVehicleTeam(team: <String>): <Void>",
    "Sets a the wait speed for for this vehicle in miles per hour.");
defs.push(tmpDef);

tmpDef = new CompletionItem("setVehWeapon");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> setVehWeapon(weapon: <String>): <Void>",
    "Sets the yaw speed for this vehicle");
defs.push(tmpDef);

tmpDef = new CompletionItem("setWaitSpeed");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> setWaitSpeed(speed: <Int>): <Void>",
    "Sets the yaw speed for this vehicle using a name. Possible names are 'instant', 'faster', 'fast', and 'slow'");
defs.push(tmpDef);

tmpDef = new CompletionItem("setYawSpeed");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> setYawSpeed(speed: <Int>, acceleration: <Int>, deceleration?: <Int>, overshootPercent?: <Float>): <Void>",
    "Starts the vehicle following this path");
defs.push(tmpDef);

tmpDef = new CompletionItem("setYawSpeedByName");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> setYawSpeedByName(name: <String>): <Void>",
    "Set a helicopter's AI(TBD)");
defs.push(tmpDef);

tmpDef = new CompletionItem("startPath");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> startPath(node: <Entity>): <Void>",
    "Checks whether a vehicle's turret can target a point\nReturns true if this vehicle's turret can get the point, false otherwise.");
defs.push(tmpDef);

tmpDef = new CompletionItem("heliSetAI");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> heliSetAI(): <Void>",
    "Sets a player to control a vehicle's turret");
defs.push(tmpDef);

tmpDef = new CompletionItem("canTurretGetTargetPoint");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> canTurretGetTargetPoint(target: <Vector>): <Bool>",
    "Sets a player to stop controlling a vehicle's turret");
defs.push(tmpDef);

tmpDef = new CompletionItem("vehicleTurretControlOn");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> vehicleTurretControlOn(player: <Entity>): <Void>",
    "Teleports a vehicle to a location");
defs.push(tmpDef);

tmpDef = new CompletionItem("vehicleTurretControlOff");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> vehicleTurretControlOff(player: <Entity>): <Void>",
    "Gets the current position of the vehicle on it's attach path(TBD)");
defs.push(tmpDef);

tmpDef = new CompletionItem("vehicle_Teleport");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> vehicle_Teleport(pos: <Vector>): <Void>",
    "Invokes damage on a vehicle");
defs.push(tmpDef);

tmpDef = new CompletionItem("getAttachPos");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> getAttachPos(): <Vector>",
    "Rotates the yaw of a vehicle");
defs.push(tmpDef);

tmpDef = new CompletionItem("vehicle_FinishDamage");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> vehicle_FinishDamage(inflictor: <Entity>, attacker: <Entity>, damage: <Int>, damageFlags: <Int>, meansOfDeath: <String>, weapon: <String>, point: <Vector>, dir: <Vector>, hitLoc: <String>, timeOffset: <Int>, modelIndex: <Int>, partName: <String>): <Void>",
    "Gets the current velocity of a vehicle\nReturns the current velocity of the vehicle as a Vector3");
defs.push(tmpDef);

tmpDef = new CompletionItem("rotateYaw");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> rotateYaw(yaw: <Int>, time: <Int>, acceleration: <Int>, deceleration: <Int>): <Void>",
    "Gets the current velocity of a vehicle's body\nReturns the current velocity of this vehicle's body as a Vector3");
defs.push(tmpDef);

tmpDef = new CompletionItem("vehicle_GetVelocity");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> vehicle_GetVelocity(): <Vector>",
    "Gets the current steering fraction of a vehicle\nReturns the current steering fraction of this vehicle as a float");
defs.push(tmpDef);

tmpDef = new CompletionItem("getBodyVelocity");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> getBodyVelocity(): <Vector>",
    "Gets the current throttle value of a vehicle\nReturns the current throttle value of this vehicle as a float");
defs.push(tmpDef);

tmpDef = new CompletionItem("getSteering");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> getSteering(): <Float>",
    "Turns the engine off in a vehicle");
defs.push(tmpDef);

tmpDef = new CompletionItem("getThrottle");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> getThrottle(): <Float>",
    "Turns the engine on in a vehicle");
defs.push(tmpDef);

tmpDef = new CompletionItem("turnEngineOff");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> turnEngineOff(): <Void>",
    "Initiates a vehicle to drive to a specified location at a specified speed");
defs.push(tmpDef);

tmpDef = new CompletionItem("turnEngineOn");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> turnEngineOn(): <Void>",
    "Spawns an actor from an actor spawner, if possible");
defs.push(tmpDef);

tmpDef = new CompletionItem("driveTo");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> driveTo(position: <Vector>, speed: <Float>): <Void>",
    "Checks if a vehicle is a physics-based vehicle\nReturns true if the given vehicle is a physics-based vehicle, false otherwise.");
defs.push(tmpDef);

tmpDef = new CompletionItem("doSpawn");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> doSpawn(targetName: <String>): <Void>",
    "Crashes a physics-based vehicle");
defs.push(tmpDef);

tmpDef = new CompletionItem("isPhysVeh");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> isPhysVeh(): <Bool>",
    "Launches a physics-based vehicle");
defs.push(tmpDef);

tmpDef = new CompletionItem("phys_Crash");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> phys_Crash(): <Void>",
    "Disables crashing for a physics-based vehicle");
defs.push(tmpDef);

tmpDef = new CompletionItem("phys_Launch");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> phys_Launch(): <Void>",
    "Enables crashing for a physics-based vehicle");
defs.push(tmpDef);

tmpDef = new CompletionItem("phys_DisableCrashing");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> phys_DisableCrashing(): <Void>",
    "Sets the speed of a physics-based vehicle");
defs.push(tmpDef);

tmpDef = new CompletionItem("phys_EnableCrashing");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> phys_EnableCrashing(): <Void>",
    "Sets the conveyer belt speed of a physics-based vehicle(TBD)");
defs.push(tmpDef);

tmpDef = new CompletionItem("phys_SetSpeed");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> phys_SetSpeed(speed: <Float>): <Void>",
    "Frees this helicopter instance");
defs.push(tmpDef);

tmpDef = new CompletionItem("phys_SetConveyerBelt");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> phys_SetConveyerBelt(speed: <Float>): <Void>",
    "Sets the conveyer belt speed of a physics-based vehicle(TBD)");
defs.push(tmpDef);

tmpDef = new CompletionItem("freeHelicopter");
tmpDef.kind = CompletionItemKind.Function;
tmpDef.documentation = createMarkdown("<Entity> freeHelicopter(): <Void>",
    "Frees this helicopter instance");
defs.push(tmpDef);
