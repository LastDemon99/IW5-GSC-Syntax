import { CompletionItem, CompletionItemKind } from 'vscode';

export var defs = new Array<CompletionItem>();
export var gsc_functions = new Array<CompletionItem>();
var tmpDef;

tmpDef = new CompletionItem("if");
tmpDef.kind = CompletionItemKind.Keyword;
defs.push(tmpDef);

tmpDef = new CompletionItem("else");
tmpDef.kind = CompletionItemKind.Keyword;
defs.push(tmpDef);

tmpDef = new CompletionItem("switch");
tmpDef.kind = CompletionItemKind.Keyword;
defs.push(tmpDef);

tmpDef = new CompletionItem("case");
tmpDef.kind = CompletionItemKind.Keyword;
defs.push(tmpDef);

tmpDef = new CompletionItem("while");
tmpDef.kind = CompletionItemKind.Keyword;
defs.push(tmpDef);

tmpDef = new CompletionItem("for");
tmpDef.kind = CompletionItemKind.Keyword;
defs.push(tmpDef);

tmpDef = new CompletionItem("foreach");
tmpDef.kind = CompletionItemKind.Keyword;
defs.push(tmpDef);

tmpDef = new CompletionItem("return");
tmpDef.kind = CompletionItemKind.Keyword;
defs.push(tmpDef);

tmpDef = new CompletionItem("break");
tmpDef.kind = CompletionItemKind.Keyword;
defs.push(tmpDef);

tmpDef = new CompletionItem("continue");
tmpDef.kind = CompletionItemKind.Keyword;
defs.push(tmpDef);

tmpDef = new CompletionItem("Wait");
tmpDef.kind = CompletionItemKind.Function;
defs.push(tmpDef);

tmpDef = new CompletionItem("Waittill");
tmpDef.kind = CompletionItemKind.Function;
defs.push(tmpDef);

tmpDef = new CompletionItem("true");
tmpDef.kind = CompletionItemKind.Value;
defs.push(tmpDef);

tmpDef = new CompletionItem("false");
tmpDef.kind = CompletionItemKind.Value;
defs.push(tmpDef);

tmpDef = new CompletionItem("undefined");
tmpDef.kind = CompletionItemKind.Value;
defs.push(tmpDef);

tmpDef = new CompletionItem("player");
tmpDef.kind = CompletionItemKind.Keyword;
defs.push(tmpDef);

tmpDef = new CompletionItem("level");
tmpDef.kind = CompletionItemKind.Keyword;
defs.push(tmpDef);

tmpDef = new CompletionItem("self");
tmpDef.kind = CompletionItemKind.Keyword;
defs.push(tmpDef);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Functions declaration port from:: https://github.com/Slvr11/InfinityScript/blob/main/ScriptProcessor/GSCFunctions.cs //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


tmpDef = new CompletionItem("animHasNoteTrack");
tmpDef.detail = "AnimHasNoteTrack(<string>: animation, <string>: noteTrackName): bool";
tmpDef.documentation = "Queries the given animation for a note track.";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getAngleDelta");
tmpDef.detail = "GetAngleDelta(<string>: animation, <float>: startTime?, <float>: endTime?): float";
tmpDef.documentation = "Gets the rotation difference in an Animation.\nReturns the rotation difference in the given animation.";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getAnimLength");
tmpDef.detail = "GetAnimLength(<string>: primitiveAnimation): float";
tmpDef.documentation = "Gets the length of an Animation.\nReturns the length of the given animation.";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getMoveDelta");
tmpDef.detail = "GetMoveDelta(<string>: animation, <float>: startTime?, <float>: endTime?): float";
tmpDef.documentation = "Gets the movement vector difference in an Animation.\nReturns the movement vector difference of the given animation.";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getNoteTrackTimes");
tmpDef.detail = "GetNoteTrackTimes(<string>: animation, <string>: noteTrackName): array";
tmpDef.documentation = "Gets an array of the times during an Animation that the given NoteTrack occurs.\nReturns an array containing the times where the NoteTrack occurs.";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getNumParts");
tmpDef.detail = "GetNumParts(<string>: model): int";
tmpDef.documentation = "Gets the number of bones in an xModel.\nReturns the amount of bones within an xModel.";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getPartName");
tmpDef.detail = "GetPartName(<string>: model, <int>: index): string";
tmpDef.documentation = "Gets the name of a part of a model.\nReturns the name of the indexth bone.";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getTagAngles");
tmpDef.detail = "<entity> Entity GetTagAngles(<string>: tagName): vector3";
tmpDef.documentation = "Gets the angles of a particular tag of this model.\nReturns the angle of the given tag";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getTagOrigin");
tmpDef.detail = "<entity> Entity GetTagOrigin(<string>: tagName): vector3";
tmpDef.documentation = "Gets the origin of a particular tag of this model.\nReturns the origin of the given tag";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("scriptModelPlayAnim");
tmpDef.detail = "<entity> Entity ScriptModelPlayAnim(<string>: animation): void";
tmpDef.documentation = "Plays an Animation on this entity";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("scriptModelClearAnim");
tmpDef.detail = "<entity> Entity ScriptModelClearAnim(): void";
tmpDef.documentation = "Clears this entity's current animation";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getCorpseAnim");
tmpDef.detail = "<entity> Entity GetCorpseAnim(): string";
tmpDef.documentation = "Gets the animation of a corpse\nReturns the name of the anim used by this corpse";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("allClientsPrint");
tmpDef.detail = "AllClientsPrint(<string>: message): void";
tmpDef.documentation = "Prints the given string to all clients.";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("allowSpectateTeam");
tmpDef.detail = "<entity> Entref AllowSpectateTeam(<string>: team, <bool>: canSpectate): void";
tmpDef.documentation = "Sets whether the player can spectate the given team.";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("announcement");
tmpDef.detail = "Announcement(<string>: message): void";
tmpDef.documentation = "Sends an announcement to all clients.";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("beginLocationSelection");
tmpDef.detail = "<entity> Entref BeginLocationSelection(<string>: locationSelector): void";
tmpDef.documentation = "Causes the player to begin selecting a location. A map HUD element should be visible for them to see where they're selecting.";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("beginLocationSelection");
tmpDef.detail = "<entity> Entref BeginLocationSelection(<string>: locationSelector, <bool>: directionality, <int>: selectorSize): void";
tmpDef.documentation = "Causes the player to begin selecting a location. A map HUD element should be visible for them to see where they're selecting.";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("clientAnnouncement");
tmpDef.detail = "<entity> Entref ClientAnnouncement(<string>: message): void";
tmpDef.documentation = "Sends an announcement to a single client.";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("clientPrint");
tmpDef.detail = "<entity> Entref ClientPrint(<string>: message): void";
tmpDef.documentation = "Print a localized version of this string for a given client.";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("clonePlayer");
tmpDef.detail = "<entity> Entref ClonePlayer(<int>: duration?): entity";
tmpDef.documentation = "Clone the player's model for death animations.\nReturns the cloned player model as an Entity";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("disableWeapons");
tmpDef.detail = "<entity> Entref DisableWeapons(): void";
tmpDef.documentation = "Disable the player's weapon.";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("dropItem");
tmpDef.detail = "<entity> Entref DropItem(<string>: itemName): entity";
tmpDef.documentation = "Drop an item with the given item name.\nReturns the dropped item as an Entity";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("enableWeapons");
tmpDef.detail = "<entity> Entref EnableWeapons(): void";
tmpDef.documentation = "Enable the player's weapon.";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("endLocationSelection");
tmpDef.detail = "<entity> Entref EndLocationSelection(): void";
tmpDef.documentation = "Causes the player to leave location selection mode.";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getViewmodel");
tmpDef.detail = "<entity> Entref GetViewmodel(): string";
tmpDef.documentation = "Get the viewmodel name for the given player.\nReturns the model name of the given player's viewmodel";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("isMantling");
tmpDef.detail = "<entity> Entref IsMantling(): bool";
tmpDef.documentation = "Returns true if the player is mantling, false otherwise.\nReturns a bool of whether the player is mantling";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("isOnLadder");
tmpDef.detail = "<entity> Entref IsOnLadder(): bool";
tmpDef.documentation = "Returns true if the player is on a ladder, false otherwise.\nReturns a bool of whether the player is on a ladder or not";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("isPlayerNumber");
tmpDef.detail = "<entity> Entity IsPlayerNumber(<int>: number): bool";
tmpDef.documentation = "Returns true if the given int is a valid client number.\nReturns a bool of whether the int is a valid client number or not";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("isRagdoll");
tmpDef.detail = "<entity> Entref IsRagdoll(): bool";
tmpDef.documentation = "Returns true if the entity is a ragdoll body, false otherwise.\nReturns a bool of whether the given entity is a ragdoll body or not";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("isTalking");
tmpDef.detail = "<entity> Entref IsTalking(): bool";
tmpDef.documentation = "Returns true if the player is talking via voice chat.\nReturns a bool of whether the given player is talking or not via voice chat";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("kick");
tmpDef.detail = "<entity> Entref Kick(): void";
tmpDef.documentation = "Kicks the specified player.";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("makeDvarServerInfo");
tmpDef.detail = "MakeDvarServerInfo(<string>: dvar, <Parameter>: value): void";
tmpDef.documentation = "Flags a Dvar with the DVAR_CODINFO flag.";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("sayAll");
tmpDef.detail = "<entity> Entref SayAll(<string>: message): void";
tmpDef.documentation = "Write a client chat message from this client to everybody.";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("sayTeam");
tmpDef.detail = "<entity> Entref SayTeam(<string>: message): void";
tmpDef.documentation = "Write a client chat message from this client to everybody on their team.";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setRank");
tmpDef.detail = "<entity> Entref SetRank(<int>: rank, <int>: prestige?): void";
tmpDef.documentation = "Sets the player's rank and prestige level.";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setSpawnWeapon");
tmpDef.detail = "<entity> Entref SetSpawnWeapon(<string>: weapon): void";
tmpDef.documentation = "Sets the weapon that this player will spawn with.";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setTeamForTrigger");
tmpDef.detail = "SetTeamForTrigger(<Entity>: trigger, <string>: team): void";
tmpDef.documentation = "Set the team that this trigger will react to";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("showScoreBoard");
tmpDef.detail = "<entity> Entref ShowScoreBoard(): void";
tmpDef.documentation = "Updates the scoreboard data on a given client.";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("startRagdoll");
tmpDef.detail = "<entity> Entity StartRagdoll(): void";
tmpDef.documentation = "Begin ragdoll physics for this entity. Does nothing if the entity is already a ragdoll.";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("suicide");
tmpDef.detail = "<entity> Entref Suicide(): void";
tmpDef.documentation = "Kills the player immediately as a suicide.";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("updateDMScores");
tmpDef.detail = "<entity> Entref UpdateDMScores(): void";
tmpDef.documentation = "Updates the client's knowledge of scores for theirself and the (next) best player in the game. For use in Free-For-All.";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("updateScores");
tmpDef.detail = "<entity> Entref UpdateScores(): void";
tmpDef.documentation = "Updates the client's knowledge of team scores.";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("finishPlayerDamage");
tmpDef.detail = "<entity> Entref FinishPlayerDamage(<Entity>: inflictor, <Entity>: attacker, <int>: damage, <int>: damageFlags, <string>: meansOfDeath, <string>: weapon, <Vector3>: point, <Vector3>: direction, <string>: hitLocation, <float>: offsetTime): void";
tmpDef.documentation = "Does damage to the player";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("glassRadiusDamage");
tmpDef.detail = "GlassRadiusDamage(<Vector3>: origin, <int>: range, <int>: maxDamage, <int>: minDamage, <Entity>: attacker?): void";
tmpDef.documentation = "TBD";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("radiusDamage");
tmpDef.detail = "RadiusDamage(<Vector3>: origin, <int>: range, <int>: maxDamage, <int>: minDamage, <Entity>: attacker?, <string>: mod?, <string>: weapon?): void";
tmpDef.documentation = "Does damage to all damageable objects within a given radius. The amount of damage is linear according to how close the object is to the radius.";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("radiusDamage");
tmpDef.detail = "<entity> Entity RadiusDamage(<Vector3>: origin, <int>: range, <int>: maxDamage, <int>: minDamage, <Entity>: attacker, <string>: meansOfDeath, <string>: weapon): void";
tmpDef.documentation = "Does damage to all damageable objects within a given radius from this entity. The amount of damage is linear according to how close the object is to the radius.";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setCanDamage");
tmpDef.detail = "<entity> Entity SetCanDamage(<bool>: canDamage): void";
tmpDef.documentation = "Set the 'candamage' flag for this entity. This means that it can respond to notifies from bullets and grenade hits.";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setCanRadiusDamage");
tmpDef.detail = "<entity> Entity SetCanRadiusDamage(<bool>: canDamage): void";
tmpDef.documentation = "Set the 'canradiusdamage' flag for this entity. This means that it can respond to notifies from explosions and radius damages.";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setPlayerIgnoreRadiusDamage");
tmpDef.detail = "SetPlayerIgnoreRadiusDamage(<bool>: ignoreRadiusDamage): void";
tmpDef.documentation = "Sets whether the player should ignore radius damage or not";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("isExplosiveDamageMOD");
tmpDef.detail = "IsExplosiveDamageMOD(<string>: mod): bool";
tmpDef.documentation = "Checks if the passed in means of death is an explosive damage\nReturns true if the given means of death is an explosive damage";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("addTestClient");
tmpDef.detail = "AddTestClient(): entity";
tmpDef.documentation = "Adds a test client to the map and returns a reference to that client.\nReturns the test client as an Entity";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("assert");
tmpDef.detail = "Assert(<bool>: value): void";
tmpDef.documentation = "Assert that the given statement is correct. The function will throw a script error if this is false.";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("assertEx");
tmpDef.detail = "AssertEx(<bool>: value, <string>: message): void";
tmpDef.documentation = "Assert that the gven statement is correct. The function will throw a script error if this is false, with the given message.";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("assertMsg");
tmpDef.detail = "AssertMsg(<string>: message): void";
tmpDef.documentation = "Throws a script error with the given message.";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("iPrintLn");
tmpDef.detail = "IPrintLn(<string>: message): void";
tmpDef.documentation = "Write a line to the screen.";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("iPrintLnBold");
tmpDef.detail = "IPrintLnBold(<string>: message): void";
tmpDef.documentation = "Write a bold line to the screen.";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("line");
tmpDef.detail = "Line(<Vector3>: start, <Vector3>: end, <Vector3>: color?, <bool>: depthTest?, <int>: duration?): void";
tmpDef.documentation = "Draw a debug line on screen.";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("print");
tmpDef.detail = "Print(<string>: message): void";
tmpDef.documentation = "Write to the console.";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("print3d");
tmpDef.detail = "Print3d(<Vector3>: origin, <string>: text, <Vector3>: color, <float>: alpha?, <float>: scale?, <int>: duration?): void";
tmpDef.documentation = "Draw 3d text on screen";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("printLn");
tmpDef.detail = "PrintLn(<string>: message): void";
tmpDef.documentation = "Write a line to the console.";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setPrintChannel");
tmpDef.detail = "SetPrintChannel(<string>: channel): string";
tmpDef.documentation = "Set the current print channel.\nReturns the previous print channel";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("noClip");
tmpDef.detail = "<entity> Entity NoClip(): void";
tmpDef.documentation = "Enables or disables no clip for this player";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("ufo");
tmpDef.detail = "<entity> Entity Ufo(): void";
tmpDef.documentation = "Enables or disables ufo mode for this player";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getBuildVersion");
tmpDef.detail = "GetBuildVersion(): float";
tmpDef.documentation = "Gets the game's current build version\nReturns the game's current build version number";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getBuildNumber");
tmpDef.detail = "GetBuildNumber(): float";
tmpDef.documentation = "Gets the game's current build number\nReturns the game's current build number";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getSystemTime");
tmpDef.detail = "GetSystemTime(): int";
tmpDef.documentation = "Gets the host's system's current time\nReturns the host's system's current time";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("createPrintChannel");
tmpDef.detail = "CreatePrintChannel(<string>: channel): void";
tmpDef.documentation = "Opens a print channel.";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getDvar");
tmpDef.detail = "GetDvar(<string>: dvar): string";
tmpDef.documentation = "Gets the value of a dvar as a string.\nReturns the value of the given dvar as a string";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getDvarFloat");
tmpDef.detail = "GetDvarFloat(<string>: dvar): float";
tmpDef.documentation = "Gets the value of a dvar as a float.\nReturns the value of the given dvar as a float";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getDvarInt");
tmpDef.detail = "GetDvarInt(<string>: dvar): int";
tmpDef.documentation = "Gets the value of a dvar as an integer.\nReturns the value of the given dvar as an int";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setDvar");
tmpDef.detail = "SetDvar(<string>: dvar, <Parameter>: value): void";
tmpDef.documentation = "Sets the value of a script dvar. Cannot set code dvars.";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setDynamicDvar");
tmpDef.detail = "SetDynamicDvar(<string>: dvar, <Parameter>: value): void";
tmpDef.documentation = "Sets a dynamic dvar";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setDvarIfUninitialized");
tmpDef.detail = "SetDvarIfUninitialized(<string>: dvar, <Parameter>: value): void";
tmpDef.documentation = "Sets a dvar, only if the dvar has not been created yet";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setDevDvar");
tmpDef.detail = "SetDevDvar(<string>: dvar, <Parameter>: value): void";
tmpDef.documentation = "Sets a developer dvar";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setDevDvarIfUninitialized");
tmpDef.detail = "SetDevDvarIfUninitialized(<string>: dvar, <Parameter>: value): void";
tmpDef.documentation = "Sets a dev dvar, only if the dvar has not been created yet";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getDvarVector");
tmpDef.detail = "GetDvarVector(<string>: dvar): vector3";
tmpDef.documentation = "Gets a Dvar as a vector\nGets the dvar value as a Vector3";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("loadFX");
tmpDef.detail = "LoadFX(<string>: effect): int";
tmpDef.documentation = "Load the given effect\nReturns the ID of the loaded effect";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("visionSetNaked");
tmpDef.detail = "VisionSetNaked(<string>: vision, <int>: transitionTime?): void";
tmpDef.documentation = "Sets the players' naked-eye vision. Optionally give a transition time from the current vision.";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("visionSetNight");
tmpDef.detail = "VisionSetNight(<string>: vision, <int>: transitionTime?): void";
tmpDef.documentation = "Sets the vision preset to use for players' night vision view.";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("playFX");
tmpDef.detail = "PlayFX(<int>: effect, <Vector3>: position, <Vector3>: forward?, <Vector3>: up?): entity";
tmpDef.documentation = "Play this effect";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("playFXOnTag");
tmpDef.detail = "PlayFXOnTag(<int>: effect, <Entity>: entity, <string>: tag): void";
tmpDef.documentation = "Play this effect on the entity and tag.";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("stopFXOnTag");
tmpDef.detail = "StopFXOnTag(<int>: effect, <Entity>: entity, <string>: tag): void";
tmpDef.documentation = "Stop this effect on the entity and tag.";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("playFXOnTagForClients");
tmpDef.detail = "PlayFXOnTagForClients(<int>: effect, <Entity>: entity, <string>: tag, <Entity>: client): void";
tmpDef.documentation = "Play this effect on the entity and tag for a specific client.";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("visionSetMissileCam");
tmpDef.detail = "VisionSetMissileCam(<string>: vision, <float>: fade?): void";
tmpDef.documentation = "Sets the vision preset for players while they are controlling a missile";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("visionSetThermal");
tmpDef.detail = "VisionSetThermal(<string>: vision, <float>: fade?): void";
tmpDef.documentation = "Sets the vision preset for players while they are scoped into a thermal scope";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("visionSetPain");
tmpDef.detail = "VisionSetPain(<string>: vision, <float>: fade?): void";
tmpDef.documentation = "Sets the vision preset for players while they are in pain/near death";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setBlurForPlayer");
tmpDef.detail = "<entity> Entity SetBlurForPlayer(<float>: blur, <float>: time): void";
tmpDef.documentation = "Sets the players' naked-eye vision. Optionally give a transition time from the current vision.";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("playLoopedFX");
tmpDef.detail = "PlayLoopedFX(<int>: effect, <float>: time, <Vector3>: origin, <int>: offset?, <Vector3>: forward?, <Vector3>: up?): entity";
tmpDef.documentation = "Plays an effect and loops it at the given origin for the given time value";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("spawnFX");
tmpDef.detail = "SpawnFX(<int>: effect, <Vector3>: position, <Vector3>: forward?, <Vector3>: up?): entity";
tmpDef.documentation = "Create an effect entity that can be re-triggered efficiently at arbitrary intervals. This doesn't play the effect. Use delete to free it when done.\nReturns the spawned effect as an Entity";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("triggerFX");
tmpDef.detail = "TriggerFX(<Entity>: effect): void";
tmpDef.documentation = "Replays the effect associated with the effect entity. This does not kill any existing effects.";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("triggerFX");
tmpDef.detail = "TriggerFX(<Entity>: effect, <float>: when): void";
tmpDef.documentation = "Replays the effect associated with the effect entity. This does not kill any existing effects.";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("delete");
tmpDef.detail = "<entity> Entity Delete(): void";
tmpDef.documentation = "Deletes an entity";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("detonate");
tmpDef.detail = "<entity> Entity Detonate(<Entity>: newAttacker?): void";
tmpDef.documentation = "Causes a grenade to explode. Must be called on a grenade.";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("disableAimAssist");
tmpDef.detail = "<entity> Entity DisableAimAssist(): void";
tmpDef.documentation = "Disables aim assist on an entity. The entity must have a brush model.";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("enableAimAssist");
tmpDef.detail = "<entity> Entity EnableAimAssist(): void";
tmpDef.documentation = "Enables aim assist on an entity. The entity must have a brush model.";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getEnt");
tmpDef.detail = "GetEnt(<string>: name, <string>: key): entity";
tmpDef.documentation = "Looks up an entity by key and name\nReturns the entity found with the given key and name if any";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getEntArray");
tmpDef.detail = "GetEntArray(<string>: name?, <string>: key?): entity";
tmpDef.documentation = "Gets an array of entities that have the given key, name pair\nReturns the entities found with the given key and name in a Array";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getEntByNum");
tmpDef.detail = "GetEntByNum(<int>: entNum): entity";
tmpDef.documentation = "Gets an entity from its entity number\nReturns the entity of the given entity number";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getEntityNumber");
tmpDef.detail = "<entity> Entity GetEntityNumber(): int";
tmpDef.documentation = "Get the entity number of this entity\nReturns the entity number of the given entity";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getNormalHealth");
tmpDef.detail = "<entity> Entity GetNormalHealth(): int";
tmpDef.documentation = "Gets the normal health of this entity\nReturns the normal health value of this entity";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getOrigin");
tmpDef.detail = "<entity> Entity GetOrigin(): vector3";
tmpDef.documentation = "Gets the origin of an entity\nReturns the origin of the given entity";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("hide");
tmpDef.detail = "<entity> Entity Hide(): void";
tmpDef.documentation = "Hides a visible entity";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("hidePart");
tmpDef.detail = "<entity> Entity HidePart(<string>: tag, <string>: model?): void";
tmpDef.documentation = "Hide part of an entity";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("isTouching");
tmpDef.detail = "<entity> Ent IsTouching(<Entity>: entity): bool";
tmpDef.documentation = "Checks whether the entity is touching the passed in entity or trigger\nReturns true if the entity is touching the passed in entity/trigger";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("laserOff");
tmpDef.detail = "<entity> Entity LaserOff(): void";
tmpDef.documentation = "Turns off entity's laser sight";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("laserOn");
tmpDef.detail = "<entity> Entity LaserOn(): void";
tmpDef.documentation = "Turns on entity's laser sight";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("linkTo");
tmpDef.detail = "<entity> Ent LinkTo(<Entity>: entity, <string>: tag?, <Vector3>: originOffset?, <Vector3>: anglesOffset?): void";
tmpDef.documentation = "Attaches one entity to another";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("localToWorldCoords");
tmpDef.detail = "<entity> Entity LocalToWorldCoords(<Vector3>: localCoord): void";
tmpDef.documentation = "Transform the given local coordinate point to a world coordinate point";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setContents");
tmpDef.detail = "<entity> Entity SetContents(<int>: contents): int";
tmpDef.documentation = "Sets the contents of an entity\nReturns the old contents of the entity";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setCursorHint");
tmpDef.detail = "<entity> Entity SetCursorHint(<string>: hint): void";
tmpDef.documentation = "Sets a visible cursor near an objective";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setHintString");
tmpDef.detail = "<entity> Entity SetHintString(<string>: hint): void";
tmpDef.documentation = "Sets the hint string for a usable entity";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setModel");
tmpDef.detail = "<entity> Entity SetModel(<string>: model): void";
tmpDef.documentation = "Sets the model of the entity to the given model name";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setNormalHealth");
tmpDef.detail = "<entity> Entity SetNormalHealth(<int>: health): void";
tmpDef.documentation = "Sets the normal health of this entity";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("show");
tmpDef.detail = "<entity> Entity Show(): void";
tmpDef.documentation = "Shows a hidden entity";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("showAllParts");
tmpDef.detail = "<entity> Entity ShowAllParts(): void";
tmpDef.documentation = "Show all parts of an entity";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("showPart");
tmpDef.detail = "<entity> Entity ShowPart(<string>: tag, <string>: model?): void";
tmpDef.documentation = "Show part of an entity";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("showToPlayer");
tmpDef.detail = "<entity> Entity ShowToPlayer(<Entity>: player): void";
tmpDef.documentation = "Show the entity to a given client";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("unlink");
tmpDef.detail = "<entity> Entity Unlink(): void";
tmpDef.documentation = "Unlinks a linked entity from another entity";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("useBy");
tmpDef.detail = "<entity> Entity UseBy(<Entity>: player): void";
tmpDef.documentation = "Uses the entity with the passed in entity as the activator";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("useTriggerRequireLookAt");
tmpDef.detail = "<entity> Entity UseTriggerRequireLookAt(): void";
tmpDef.documentation = "Modifies the use trigger so that it requires the user to be looking at it";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("playFX");
tmpDef.detail = "<entity> Entity PlayFX(<int>: effect, <Vector3>: position, <Vector3>: forward?, <Vector3>: up?): void";
tmpDef.documentation = "Play an effect so that it is attached to this entity";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("dropScavengerBag");
tmpDef.detail = "<entity> Entity DropScavengerBag(<string>: item): entity";
tmpDef.documentation = "Creates a scavenger bag from this entity and drops it\nReturns a reference to the dropped scavenger bag an an Entity";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("attach");
tmpDef.detail = "<entity> Entity Attach(<string>: model, <string>: tag?, <bool>: ignoreCollision?): void";
tmpDef.documentation = "Attaches a model to an entity";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("detach");
tmpDef.detail = "<entity> Entity Detach(<string>: model, <string>: tag?): void";
tmpDef.documentation = "Detaches a model to an entity";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("detachAll");
tmpDef.detail = "<entity> Entity DetachAll(): void";
tmpDef.documentation = "Detaches all attached model from an entity";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("attachShieldModel");
tmpDef.detail = "<entity> Entity AttachShieldModel(<string>: model, <string>: tag): void";
tmpDef.documentation = "Attaches the riot shield model to the given tag";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("detachShieldModel");
tmpDef.detail = "<entity> Entity DetachShieldModel(<string>: model, <string>: tag): void";
tmpDef.documentation = "Detaches the riot shield model from the given tag";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("moveShieldModel");
tmpDef.detail = "<entity> Entity MoveShieldModel(<string>: model, <string>: tag1, <string>: tag2): void";
tmpDef.documentation = "Moves the attached riot shield model from the first tag to the second tag";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getAttachSize");
tmpDef.detail = "<entity> Entity GetAttachSize(): int";
tmpDef.documentation = "Gets the number of attached models for this entity\nReturns the number of attached models on the given entity";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getAttachModelName");
tmpDef.detail = "<entity> Entity GetAttachModelName(<int>: index): string";
tmpDef.documentation = "Gets the name of the attached model at the given attachment slot";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getAttachTagName");
tmpDef.detail = "<entity> Entity GetAttachTagName(<int>: index): string";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getAttachIgnoreCollision");
tmpDef.detail = "<entity> Entity GetAttachIgnoreCollision(<int>: index): bool";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("hidePart_AllInstances");
tmpDef.detail = "<entity> Entity HidePart_AllInstances(<string>: tag, <string>: model?): void";
tmpDef.documentation = "TBD";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("hideAllParts");
tmpDef.detail = "<entity> Entity HideAllParts(): void";
tmpDef.documentation = "Hides all extra parts of this entity";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("linkToBlendToTag");
tmpDef.detail = "<entity> Ent LinkToBlendToTag(<Entity>: entity, <string>: tag): void";
tmpDef.documentation = "Attaches one entity to another at the tag by blending (TBD)";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("linkToBlendToTag");
tmpDef.detail = "<entity> Ent LinkToBlendToTag(<Entity>: entity, <string>: tag, <bool>: collide): void";
tmpDef.documentation = "Attaches one entity to another at the tag by blending (TBD)";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("isLinked");
tmpDef.detail = "<entity> Entity IsLinked(): bool";
tmpDef.documentation = "Checks if this entity is currently linked to another entity\nReturns true if this entity is linked to another entity";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("enableLinkTo");
tmpDef.detail = "<entity> Entity EnableLinkTo(): void";
tmpDef.documentation = "Enables LinkTo() for an entity";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("laserAltViewOn");
tmpDef.detail = "<entity> Entity LaserAltViewOn(): void";
tmpDef.documentation = "Turns on the laser for the alt view(TBD)";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("laserAltViewOff");
tmpDef.detail = "<entity> Entity LaserAltViewOff(): void";
tmpDef.documentation = "Turns off the laser for the alt view(TBD)";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("makeUsable");
tmpDef.detail = "<entity> Entity MakeUsable(): void";
tmpDef.documentation = "Makes this entity usable to players";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("makeUnUsable");
tmpDef.detail = "<entity> Entity MakeUnUsable(): void";
tmpDef.documentation = "Makes this entity unusable to players";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getEntityVelocity");
tmpDef.detail = "<entity> Entity GetEntityVelocity(): vector3";
tmpDef.documentation = "Gets the velocity of this entity\nReturns the current velocity of this entity";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setTargetEnt");
tmpDef.detail = "<entity> Entity SetTargetEnt(<Entity>: target): void";
tmpDef.documentation = "Sets the target entity of a turret or missile";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setTargetPos");
tmpDef.detail = "<entity> Entity SetTargetPos(<Vector3>: target): void";
tmpDef.documentation = "Sets the target position of a turret or missile";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("clearTarget");
tmpDef.detail = "<entity> Entity ClearTarget(): void";
tmpDef.documentation = "Clears the current target of this turret or missile";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setFlightModeDirect");
tmpDef.detail = "<entity> Entity SetFlightModeDirect(): void";
tmpDef.documentation = "Sets a missile to fly directly toward it's target";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setFlightModeTop");
tmpDef.detail = "<entity> Entity SetFlightModeTop(): void";
tmpDef.documentation = "Sets a missile to fly up in an arc and then come back down to hit it's target on top";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getLightIntensity");
tmpDef.detail = "<entity> Entity GetLightIntensity(): float";
tmpDef.documentation = "Gets the intensity of a light entity\nReturns the intensity of this light entity";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setLightIntensity");
tmpDef.detail = "<entity> Entity SetLightIntensity(<float>: intensity): void";
tmpDef.documentation = "Sets the intensity of a light entity";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("cameraLinkTo");
tmpDef.detail = "<entity> Ent CameraLinkTo(<Entity>: entity, <string>: tag?): void";
tmpDef.documentation = "Attaches the player's camera to an entity";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("cameraLinkTo");
tmpDef.detail = "<entity> Ent CameraLinkTo(<Entity>: entity, <string>: tag, <Vector3>: originOffset, <Vector3>: anglesOffset): void";
tmpDef.documentation = "Attaches the player's camera to an entity";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("cameraUnlink");
tmpDef.detail = "<entity> Entity CameraUnlink(): void";
tmpDef.documentation = "Unlink the player's camera from an entity";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("controlsLinkTo");
tmpDef.detail = "<entity> Ent ControlsLinkTo(<Entity>: entity): void";
tmpDef.documentation = "Links this player's controls to an entity so that any player input is directed to the linked entity";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("controlsUnlink");
tmpDef.detail = "<entity> Entity ControlsUnlink(): void";
tmpDef.documentation = "Unlink the player's controls from an entity";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("makeVehicleSolidCapsule");
tmpDef.detail = "<entity> Entity MakeVehicleSolidCapsule(<float>: xRadius, <float>: zOffset, <float>: zRadius): void";
tmpDef.documentation = "Makes a vehicle solid with capsule size";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("makeVehicleSolidSphere");
tmpDef.detail = "<entity> Entity MakeVehicleSolidSphere(<float>: radius, <float>: zOffset): void";
tmpDef.documentation = "Makes a vehicle solid with sphere size";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("transferMarksToNewScriptModel");
tmpDef.detail = "<entity> Entity TransferMarksToNewScriptModel(<Entity>: ent): void";
tmpDef.documentation = "Transfers any marks on this model to a new script_model(TBD)";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("cloneBrushModelToScriptModel");
tmpDef.detail = "<entity> Entity CloneBrushModelToScriptModel(<Entity>: brushModel): void";
tmpDef.documentation = "Clones the given brush model into this script model so it can be controlled by the script";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("enablePlayerUse");
tmpDef.detail = "<entity> Entity EnablePlayerUse(<Entity>: player): void";
tmpDef.documentation = "Sets this entity to be usable by the given player";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("disablePlayerUse");
tmpDef.detail = "<entity> Entity DisablePlayerUse(<Entity>: player): void";
tmpDef.documentation = "Sets this entity to be unusable by the given player";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("makeScrambler");
tmpDef.detail = "<entity> Entity MakeScrambler(<Entity>: owner): void";
tmpDef.documentation = "Makes this entity into a scrambler so it will behave as a scrambler for the given player";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("makePortableRadar");
tmpDef.detail = "<entity> Entity MakePortableRadar(<Entity>: owner): void";
tmpDef.documentation = "Makes this entity into a portable radar so it will behave as a partable radar for the given player";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("makeTrophySystem");
tmpDef.detail = "<entity> Entity MakeTrophySystem(<Entity>: owner): void";
tmpDef.documentation = "Makes this entity into a trophy so it will behave as a trophy system for the given player";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("isSpawner");
tmpDef.detail = "<entity> Entity IsSpawner(): bool";
tmpDef.documentation = "Checks if this entity is a spawner or not\nReturns true if this entity is a spawner";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("deleteAttractor");
tmpDef.detail = "DeleteAttractor(<Entity>: attractor): void";
tmpDef.documentation = "Deletes a missile attractor or repulsor(TBD)";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setThermalBodyMaterial");
tmpDef.detail = "SetThermalBodyMaterial(<string>: body): void";
tmpDef.documentation = "Sets the default thermal body for players";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getMissileOwner");
tmpDef.detail = "GetMissileOwner(<Entity>: explosive): entity";
tmpDef.documentation = "Gets the owner of a missile or explosive\nReturns the owner of the explosive";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getGlass");
tmpDef.detail = "GetGlass(<string>: name): entity";
tmpDef.documentation = "Looks up an glass piece by name\nReturns the glass piece found with the given key and name if any";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getGlassArray");
tmpDef.detail = "GetGlassArray(<string>: name): entity";
tmpDef.documentation = "Gets an array of glass pieces that have the given name\nReturns the glass pieces found with the given key and name in a Array";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getGlassOrigin");
tmpDef.detail = "GetGlassOrigin(<int>: glass): vector3";
tmpDef.documentation = "Gets the origin of a piece of glass(TBD)\nReturns the origin of the glass piece";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("isGlassDestroyed");
tmpDef.detail = "IsGlassDestroyed(<int>: glass): bool";
tmpDef.documentation = "Checks if the given glass entity is destroyed or not\nReturns true if the glass entity is destroyed";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("destroyGlass");
tmpDef.detail = "DestroyGlass(<int>: glass): void";
tmpDef.documentation = "Shatters a glass entity";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("deleteGlass");
tmpDef.detail = "DeleteGlass(<int>: glass): void";
tmpDef.documentation = "Deletes a glass entity";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getEntChannelsCount");
tmpDef.detail = "<entity> Entity GetEntChannelsCount(): int";
tmpDef.documentation = "Gets the channel count of an entity(TBD)";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getEntChannelName");
tmpDef.detail = "<entity> Entity GetEntChannelName(): string";
tmpDef.documentation = "Gets the channel name of an entity(TBD)";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setScriptMoverInKillcam");
tmpDef.detail = "<entity> Mover SetScriptMoverInKillcam(<string>: type): void";
tmpDef.documentation = "TBD";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setDamageState");
tmpDef.detail = "<entity> Entity SetDamageState(<int>: state): void";
tmpDef.documentation = "Sets a helicopter's current damage state";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("closeFile");
tmpDef.detail = "CloseFile(<int>: fileNum): int";
tmpDef.documentation = "Close a script-controlled file.\nReturns 1 if successful and -1 if unsuccessful";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("fGetArg");
tmpDef.detail = "FGetArg(<int>: fileNum, <int>: arg): void";
tmpDef.documentation = "Get a specific argument number from the current line.";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("fPrintFields");
tmpDef.detail = "FPrintFields(<int>: fileNum, <params>: Parameter[]): void";
tmpDef.documentation = "Writes items out to a script-controlled file, inserting a comma in-between each one.";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("fPrintLn");
tmpDef.detail = "FPrintLn(<int>: fileNum, <string>: output): void";
tmpDef.documentation = "Write text out to a script-controlled file.";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("fReadLn");
tmpDef.detail = "FReadLn(<int>: fileNum): int";
tmpDef.documentation = "Read the next line of comma separated value text from a script-controlled file.\nReturns the number of comma separated values in the line";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("changeFontScaleOverTime");
tmpDef.detail = "<entity> Hud ChangeFontScaleOverTime(<float>: time): void";
tmpDef.documentation = "Set a hud element to transition in fontScale over time. Normally setting the fontScale of an element causes an immediate visual change.";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("clearAllTextAfterHudelem");
tmpDef.detail = "<entity> Hud ClearAllTextAfterHudelem(): void";
tmpDef.documentation = "Clear the config strings for the unique text set after this string. This is intended for development use only.";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("clearTargetEnt");
tmpDef.detail = "<entity> Hud ClearTargetEnt(): void";
tmpDef.documentation = "Clear this waypoint from targetting an entity.";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("destroy");
tmpDef.detail = "<entity> Hud Destroy(): void";
tmpDef.documentation = "Remove this Hud element altogether";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("fadeOverTime");
tmpDef.detail = "<entity> Hud FadeOverTime(<float>: time): void";
tmpDef.documentation = "Set a hud element to transition in color (or alpha) over time. Normally setting the color (or alpha) of an element causes an immediate visual change. However, if the color (or alpha) gets set within <time> after calling fadeOverTime, then the hud element will transition to the new color over the remaining <time>.";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("fadeOverTime2");
tmpDef.detail = "<entity> Hud FadeOverTime2(): void";
tmpDef.documentation = "Test fade";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("moveOverTime");
tmpDef.detail = "<entity> Hud MoveOverTime(<float>: time): void";
tmpDef.documentation = "Set a hud element to move over time.";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("moveOverTime2");
tmpDef.detail = "<entity> Hud MoveOverTime2(): void";
tmpDef.documentation = "Test move";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("newClientHudElem");
tmpDef.detail = "NewClientHudElem(<Entity>: client): hudelem";
tmpDef.documentation = "Create a new hud element for a particular client\nReturns a reference to the created hud element as a HudElem";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("newHudElem");
tmpDef.detail = "NewHudElem(): hudelem";
tmpDef.documentation = "Create a new hud element\nReturns a reference to the created hud element as a HudElem";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("newTeamHudElem");
tmpDef.detail = "NewTeamHudElem(<string>: team): hudelem";
tmpDef.documentation = "Create a new hud element for a particular team\nReturns a reference to the created hud element as a HudElem";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("obituary");
tmpDef.detail = "Obituary(<Entity>: victim, <Entity>: attacker, <string>: weapon, <string>: meansOfDeath): void";
tmpDef.documentation = "Create an obituary for a character";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("reset");
tmpDef.detail = "<entity> Hud Reset(): void";
tmpDef.documentation = "Reset a HUD element to its default state.";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("scaleOverTime");
tmpDef.detail = "<entity> Hud ScaleOverTime(<float>: time, <int>: width, <int>: height): void";
tmpDef.documentation = "Set a hud element to scale over time.";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setClock");
tmpDef.detail = "<entity> Hud SetClock(<float>: time, <float>: totalTime, <string>: material, <int>: width?, <int>: height?): void";
tmpDef.documentation = "Set a clock HUD element to count down over a time period.";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setClockUp");
tmpDef.detail = "<entity> Hud SetClockUp(<float>: time, <float>: totalTime, <string>: material, <int>: width?, <int>: height?): void";
tmpDef.documentation = "Set a clock HUD element to count up over a time period.";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setMapNameString");
tmpDef.detail = "<entity> Hud SetMapNameString(<string>: mapname): void";
tmpDef.documentation = "Set the map name string";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setPlayerNameString");
tmpDef.detail = "<entity> Hud SetPlayerNameString(<Entity>: player): void";
tmpDef.documentation = "Set the player name string for a HUD element";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setPulseFX");
tmpDef.detail = "<entity> Hud SetPulseFX(<int>: speed, <int>: decayStart, <int>: decayDuration): void";
tmpDef.documentation = "Set the hudelem string to display with a 'Pulse' effect.";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setShader");
tmpDef.detail = "<entity> Hud SetShader(<string>: material, <int>: width?, <int>: height?): void";
tmpDef.documentation = "Set the material for this Hud Element.";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setTargetEnt");
tmpDef.detail = "<entity> Hud SetTargetEnt(<Entity>: entity): void";
tmpDef.documentation = "Set the entity that this waypoint should target. In MP, entity should already be a broadcasting entity.";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setTenthsTimer");
tmpDef.detail = "<entity> Hud SetTenthsTimer(<float>: time): void";
tmpDef.documentation = "Set the timer HUD element to count down in tenths of a second.";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setTenthsTimerUp");
tmpDef.detail = "<entity> Hud SetTenthsTimerUp(<float>: time): void";
tmpDef.documentation = "Set the timer HUD element to count up in tenths of a second.";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setText");
tmpDef.detail = "<entity> Hud SetText(<string>: text): void";
tmpDef.documentation = "Set HUD text for this element";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setTimer");
tmpDef.detail = "<entity> Hud SetTimer(<float>: time): void";
tmpDef.documentation = "Set the timer HUD element to count down.";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setTimerUp");
tmpDef.detail = "<entity> Hud SetTimerUp(<float>: time): void";
tmpDef.documentation = "Set the timer HUD element to count up.";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setValue");
tmpDef.detail = "<entity> Hud SetValue(<int>: value): void";
tmpDef.documentation = "Set the value HUD element to a given value";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setWaypoint");
tmpDef.detail = "<entity> Hud SetWaypoint(<bool>: constantSize): void";
tmpDef.documentation = "Sets a HUD element to be a waypoint.";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setWaypoint");
tmpDef.detail = "<entity> Hud SetWaypoint(<bool>: constantSize, <bool>: pinToScreenEdge): void";
tmpDef.documentation = "Sets a HUD element to be a waypoint.";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setWaypoint");
tmpDef.detail = "<entity> Hud SetWaypoint(<bool>: constantSize, <bool>: pinToScreenEdge, <bool>: fadeOutPinnedIcon): void";
tmpDef.documentation = "Sets a HUD element to be a waypoint.";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setWaypoint");
tmpDef.detail = "<entity> Hud SetWaypoint(<bool>: constantSize, <bool>: pinToScreenEdge, <bool>: fadeOutPinnedIcon, <bool>: is3D): void";
tmpDef.documentation = "Sets a HUD element to be a waypoint.";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("showHudSplash");
tmpDef.detail = "<entity> Entity ShowHudSplash(<string>: splash, <int>: slot): void";
tmpDef.documentation = "Shows a splash notification to this player";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("showHudSplash");
tmpDef.detail = "<entity> Entity ShowHudSplash(<string>: splash, <int>: slot, <int>: optionalNum): void";
tmpDef.documentation = "Shows a splash notification to this player";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setTimerStatic");
tmpDef.detail = "<entity> Hud SetTimerStatic(<float>: time): void";
tmpDef.documentation = "Set the timer HUD element to a time and freezes it";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setTenthsTimerStatic");
tmpDef.detail = "<entity> Hud SetTenthsTimerStatic(<float>: time): void";
tmpDef.documentation = "Set the timer HUD element to a time in tenths of a second and freezes it";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setWaypointEdgeStyle_RotatingIcon");
tmpDef.detail = "<entity> Hud SetWaypointEdgeStyle_RotatingIcon(): void";
tmpDef.documentation = "Sets a waypoint hud to rotate along the screen while it's offscreen(TBD)";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setWaypointEdgeStyle_SecondaryArrow");
tmpDef.detail = "<entity> Hud SetWaypointEdgeStyle_SecondaryArrow(): void";
tmpDef.documentation = "Sets a waypoint hud to have an arrow while offscreen(TBD)";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setWaypointIconOffScreenOnly");
tmpDef.detail = "<entity> Hud SetWaypointIconOffScreenOnly(): void";
tmpDef.documentation = "Sets a waypoint hud to only display if it is offscreen(TBD)";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("earthquake");
tmpDef.detail = "Earthquake(<float>: scale, <float>: duration, <Vector3>: source, <int>: radius): void";
tmpDef.documentation = "Create an earthquake at the given point.";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("exitLevel");
tmpDef.detail = "ExitLevel(<bool>: savePersistent): void";
tmpDef.documentation = "Exits the current level.";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getNorthYaw");
tmpDef.detail = "GetNorthYaw(): float";
tmpDef.documentation = "Gets the yaw value of North\nReturns the yaw value of North";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getStartTime");
tmpDef.detail = "GetStartTime(): int";
tmpDef.documentation = "Gets the start time for the current round\nReturns the start time for the current round";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getTime");
tmpDef.detail = "GetTime(): int";
tmpDef.documentation = "Gets the level time in milliseconds from the start of the level\nReturns the level time in milliseconds from the start of the level";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("isSplitScreen");
tmpDef.detail = "IsSplitScreen(): bool";
tmpDef.documentation = "Checks if the game is a splitscreen game\nReturns true if the game is a splitscreen game";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("isValidGametype");
tmpDef.detail = "IsValidGametype(<string>: gametype): bool";
tmpDef.documentation = "Checks if the string is a valid gametype\nReturns true if the string is a valid gametype";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("mapExists");
tmpDef.detail = "MapExists(<string>: mapname): bool";
tmpDef.documentation = "Checks if the map with the given name exists on the server\nReturns true if the map with the given name exists on the server";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setClientNameMode");
tmpDef.detail = "SetClientNameMode(<string>: mode): void";
tmpDef.documentation = "Alters the way that the player name is updated, to prevent cheating by spectators altering their name to communicate with active players";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setGameEndTime");
tmpDef.detail = "SetGameEndTime(<int>: time): void";
tmpDef.documentation = "Sets the time the current match will end";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setMapCenter");
tmpDef.detail = "SetMapCenter(<Vector3>: center): void";
tmpDef.documentation = "Set the center of the map (used by network code to optimize position data)";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setMiniMap");
tmpDef.detail = "SetMiniMap(<string>: material, <float>: upperLeftX, <float>: upperLeftY, <float>: lowerRightX, <float>: lowerRightY): void";
tmpDef.documentation = "Sets the info for the satelite map on the compass";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setWinningPlayer");
tmpDef.detail = "SetWinningPlayer(<Entity>: player): void";
tmpDef.documentation = "Sets the player to be the winner";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setWinningTeam");
tmpDef.detail = "SetWinningTeam(<string>: team): void";
tmpDef.documentation = "Sets a team to be the winner";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("updateClientNames");
tmpDef.detail = "UpdateClientNames(): void";
tmpDef.documentation = "Update all client names. Only works in 'manual_change' mode";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("worldEntNumber");
tmpDef.detail = "WorldEntNumber(): int";
tmpDef.documentation = "Gets the Entity number for the world\nReturns the entity number for the world";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setSunlight");
tmpDef.detail = "SetSunlight(<Vector3>: rgb): void";
tmpDef.documentation = "Sets the level's sunlight color";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("resetSunlight");
tmpDef.detail = "ResetSunlight(): void";
tmpDef.documentation = "Resets the level's sunlight color to default";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("map_Restart");
tmpDef.detail = "Map_Restart(<bool>: savePersistant): void";
tmpDef.documentation = "Restarts the current game";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("matchEnd");
tmpDef.detail = "MatchEnd(): void";
tmpDef.documentation = "Ends the current match(TBD)";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("endParty");
tmpDef.detail = "EndParty(): void";
tmpDef.documentation = "Ends the current party";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getUAVStrengthMin");
tmpDef.detail = "GetUAVStrengthMin(): int";
tmpDef.documentation = "Gets the minimum uav strength\nReturns the minimum value of uav strength";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getUAVStrengthMax");
tmpDef.detail = "GetUAVStrengthMax(): int";
tmpDef.documentation = "Gets the maximum uav strength\nReturns the maximum value of uav strength";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getUAVStrengthLevelNeutral");
tmpDef.detail = "GetUAVStrengthLevelNeutral(): int";
tmpDef.documentation = "Gets the neutral uav strength value\nReturns the neutral value of uav strength";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getUAVStrengthLevelShowEnemyFastSweep");
tmpDef.detail = "GetUAVStrengthLevelShowEnemyFastSweep(): int";
tmpDef.documentation = "Gets the uav strength level at which the radar will sweep for enemies in a fast speed\nReturns the value of uav strength that will sweep the radar fast";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getUAVStrengthLevelShowEnemyDirectional");
tmpDef.detail = "GetUAVStrengthLevelShowEnemyDirectional(): int";
tmpDef.documentation = "Gets the uav strength level at which the radar will show enemy direction\nReturns the value of uav strength that will show enemy direction";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setMatchData");
tmpDef.detail = "SetMatchData(<params>: Parameter[]): void";
tmpDef.documentation = "Sets a value for the current match's data";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getMatchData");
tmpDef.detail = "GetMatchData(<params>: Parameter[]): parameter";
tmpDef.documentation = "Gets a value of a field of the current match's data\nReturns the value of the given field in the current match's data";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("sendMatchData");
tmpDef.detail = "SendMatchData(): void";
tmpDef.documentation = "Send the current match data to all clients(TBD)";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("clearMatchData");
tmpDef.detail = "ClearMatchData(): void";
tmpDef.documentation = "Clears all match data fields to default";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setMatchDataDef");
tmpDef.detail = "SetMatchDataDef(<string>: name): void";
tmpDef.documentation = "Sets the current match's matchdata definition file(TBD)";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setMatchClientIP");
tmpDef.detail = "SetMatchClientIP(<Entity>: client, <int>: clientID): void";
tmpDef.documentation = "Sets up a client's ip in the match data(TBD)";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setMatchDataID");
tmpDef.detail = "SetMatchDataID(): void";
tmpDef.documentation = "Sets the ID of the current match's matchdata(TBD)";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setClientMatchData");
tmpDef.detail = "SetClientMatchData(<params>: Parameter[]): void";
tmpDef.documentation = "Sets a field in the client's match";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getClientMatchData");
tmpDef.detail = "GetClientMatchData(<params>: Parameter[]): parameter";
tmpDef.documentation = "Gets a field in the client's match data";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setClientMatchDataDef");
tmpDef.detail = "SetClientMatchDataDef(<string>: name): void";
tmpDef.documentation = "Sets a client's matchdata definition file";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("sendClientMatchData");
tmpDef.detail = "SendClientMatchData(): void";
tmpDef.documentation = "Send a client's current match data to the server(TBD)";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getMatchRulesData");
tmpDef.detail = "GetMatchRulesData(<string>: rule, <params>: string[]): string";
tmpDef.documentation = "Gets a rule value from the current match's rules\nReturns the value of the given rule";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("isUsingMatchRulesData");
tmpDef.detail = "IsUsingMatchRulesData(): bool";
tmpDef.documentation = "Checks if the server is using match rules data or not\nReturns true if the server is using match rules data";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("endLobby");
tmpDef.detail = "EndLobby(): void";
tmpDef.documentation = "Ends the current lobby";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getMapCustom");
tmpDef.detail = "GetMapCustom(<string>: name): string";
tmpDef.documentation = "Gets info from the basemaps.arena file\nReturns the value of the given variable located in the basemaps.arena file";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("updateSkill");
tmpDef.detail = "UpdateSkill(<Entity>: attacker, <Entity>: defender, <string>: gametype, <float>: scalar): void";
tmpDef.documentation = "Updates the skill value for two players(TBD)";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setNorthYaw");
tmpDef.detail = "SetNorthYaw(<int>: yaw): void";
tmpDef.documentation = "Set the north yaw value";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setSlowMotion");
tmpDef.detail = "SetSlowMotion(<float>: startScale, <float>: endScale, <float>: lerpDuration): void";
tmpDef.documentation = "Sets slow motion for the game, smoothing from startScale to endScale for lerpDuration time";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setExpFog");
tmpDef.detail = "SetExpFog(<float>: startDist, <float>: halfwayDist, <Vector3>: rgb, <float>: opacity, <float>: transitionTime, <Vector3>: sunRGB, <float>: sunOpacity, <Vector3>: sunDirection, <float>: sunBeginFadeAngle, <float>: sunEndFadeAngle): void";
tmpDef.documentation = "Sets this world's exponential fog values";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getVehicleNode");
tmpDef.detail = "GetVehicleNode(<string>: name, <string>: key): entity";
tmpDef.documentation = "Looks up a vehicle node with the given key, name pair\nReturns the vehicle node found with the given key and name if any";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getVehicleNodeArray");
tmpDef.detail = "GetVehicleNodeArray(<string>: name, <string>: key): entity";
tmpDef.documentation = "Gets an array of vehicle nodes that have the given key, name pair\nReturns the vehicle nodes found with the given key and name in a Array";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getAllVehicleNodes");
tmpDef.detail = "GetAllVehicleNodes(): entity";
tmpDef.documentation = "Gets all of the vehicle nodes in the current level\nReturns all of the vehicle nodes found in the level in a Array";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getNumVehicles");
tmpDef.detail = "GetNumVehicles(): int";
tmpDef.documentation = "Gets the current vehicle count of the level\nReturns the vehicle count of the level";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("vehicle_GetSpawnerArray");
tmpDef.detail = "Vehicle_GetSpawnerArray(): entity";
tmpDef.documentation = "Gets all of the current vehicle spawners within the level\nReturns all of the current vehicle spawners in the level in a Array";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("vehicle_GetArray");
tmpDef.detail = "Vehicle_GetArray(): entity";
tmpDef.documentation = "Gets all of the current vehicles within the level\nReturns all of the current vehicles in the level in a Array";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getCounterTotal");
tmpDef.detail = "GetCounterTotal(<string>: stat): int";
tmpDef.documentation = "Gets the current total count of the given world stat";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("incrementCounter");
tmpDef.detail = "IncrementCounter(<string>: stat, <int>: increment): void";
tmpDef.documentation = "Increments the given world stat by the given number";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("aCos");
tmpDef.detail = "ACos(<float>: cosValue): float";
tmpDef.documentation = "Calculates an angle corresponding to a particular cosine value\nReturns an angle corresponding to a particular cosine value";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("aSin");
tmpDef.detail = "ASin(<float>: sinValue): float";
tmpDef.documentation = "Calculates an angle corresponding to a particular sin value\nReturns an angle corresponding to a particular sin value";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("aTan");
tmpDef.detail = "ATan(<float>: tanValue): float";
tmpDef.documentation = "Calculates an angle corresponding to a particular tangential value\nReturns an angle corresponding to a particular tangential value";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("cos");
tmpDef.detail = "Cos(<float>: angle): float";
tmpDef.documentation = "Calculates the cos of an angle\nReturns the cos of an angle";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("int");
tmpDef.detail = "Int(<float>: value): int";
tmpDef.documentation = "Cast a floating point number or a string to an integer.\nReturns the newly casted float/string as an int";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("float");
tmpDef.detail = "Float(<string>: value): float";
tmpDef.documentation = "Cast a string to a floating point number.\nReturns the newly casted string as a float";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("pointOnSegmentNearestToPoint");
tmpDef.detail = "PointOnSegmentNearestToPoint(<Vector3>: segmentA, <Vector3>: segmentB, <Vector3>: point): vector3";
tmpDef.documentation = "Calculates the point closest to a given point on a given line segment.\nReturns the point nearest the given point on the given line segment";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("randomFloat");
tmpDef.detail = "RandomFloat(<float>: max): float";
tmpDef.documentation = "Randomize a floating point number that is above 0 and below the max number specified.\nReturns the randomized float more than 0 and less than the given max";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("randomFloatRange");
tmpDef.detail = "RandomFloatRange(<float>: min, <float>: max): float";
tmpDef.documentation = "Randomize a floating point number that is between the two ranges specified.\nReturns the randomized float between the given ranges";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("randomInt");
tmpDef.detail = "RandomInt(<int>: max): int";
tmpDef.documentation = "Randomize an int that is above 0 and max-1 inclusive.\nReturns the randomized int more than 0 and less than the given max";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("randomIntRange");
tmpDef.detail = "RandomIntRange(<int>: min, <int>: max): int";
tmpDef.documentation = "Randomize an int that is between the given ranges.\nReturns the randomized int between the two given ranges";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("sin");
tmpDef.detail = "Sin(<float>: angle): float";
tmpDef.documentation = "Calculates the sin of an angle\nReturns the sin of an angle";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("tan");
tmpDef.detail = "Tan(<float>: angle): float";
tmpDef.documentation = "Calculates the tan of an angle\nReturns the tan of an angle";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("vectorFromLineToPoint");
tmpDef.detail = "VectorFromLineToPoint(<Vector3>: segmentA, <Vector3>: segmentB, <Vector3>: point): vector3";
tmpDef.documentation = "Calculates a vector perpendicular to the given line and pointing from the line to the given point.\nReturns a vector perpendicular to the given line and pointing from the line to the given point";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("abs");
tmpDef.detail = "Abs(<float>: input): float";
tmpDef.documentation = "Calculates the absolute value of the given input\nReturns the absolute value of the given number";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("min");
tmpDef.detail = "Min(<float>: input, <float>: minimum): float";
tmpDef.documentation = "Returns the given number, where the given minimum is lowest possible return value\nReturns the given number that is above the minimum";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("max");
tmpDef.detail = "Max(<float>: input, <float>: maximum): float";
tmpDef.documentation = "Returns the given number, where the given maximum is highest possible return value\nReturns the given number that is below the maximum";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("floor");
tmpDef.detail = "Floor(<float>: input): float";
tmpDef.documentation = "Gets the lowest possible value of the given number(TBD)\nReturns the lowest possible value of the given number";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("ceil");
tmpDef.detail = "Ceil(<float>: input): float";
tmpDef.documentation = "Gets the highest possible value of the given number(TBD)\nReturns the highest possible value of the given number";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("exp");
tmpDef.detail = "Exp(<float>: input): float";
tmpDef.documentation = "Gets the exponent of the given number(TBD)\nReturns the exponent of the given number";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("log");
tmpDef.detail = "Log(<float>: input): float";
tmpDef.documentation = "Calculates the log of the given number(TBD)\nReturns the log of the given number";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("sqrt");
tmpDef.detail = "Sqrt(<float>: input): float";
tmpDef.documentation = "Calculates the square root of the given number(TBD)\nReturns the square root of the given number";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("squared");
tmpDef.detail = "Squared(<float>: input): float";
tmpDef.documentation = "Calculates the squared value of the given number(TBD)\nReturns the square of the given number";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("clamp");
tmpDef.detail = "Clamp(<float>: input, <float>: minimum, <float>: maximum): float";
tmpDef.documentation = "Clamps a given value inbetween the min and max\nReturns the given number within the maximum and minimum values";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("angleClamp");
tmpDef.detail = "AngleClamp(<Vector3>: angle, <float>: minimum, <float>: maximum): vector3";
tmpDef.documentation = "Clamps a given angle inbetween the min and max\nReturns the given angle within the maximum and minimum values";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("angleClamp180");
tmpDef.detail = "AngleClamp180(<float>: angle): vector3";
tmpDef.documentation = "Clamps a given angle so that it is within 0 and 180 degrees(TBD)\nReturns the given angle within 0 and 180 degrees";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("openPopUpMenu");
tmpDef.detail = "<entity> Entity OpenPopUpMenu(<string>: menu): void";
tmpDef.documentation = "Opens a pop up menu over the current menu/screen";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("openPopUpMenuNoMouse");
tmpDef.detail = "<entity> Entity OpenPopUpMenuNoMouse(<string>: menu): void";
tmpDef.documentation = "Opens a pop up menu over the current menu/screen, with no mouse control";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("closePopUpMenu");
tmpDef.detail = "<entity> Entity ClosePopUpMenu(<string>: menu): void";
tmpDef.documentation = "Closes the specified pop up menu if it is currently open";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("openMenu");
tmpDef.detail = "<entity> Entity OpenMenu(<string>: menu): void";
tmpDef.documentation = "Opens a menu over the current menu/screen";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("closeMenu");
tmpDef.detail = "<entity> Entity CloseMenu(<string>: menu): void";
tmpDef.documentation = "Closes the current player menu";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("closeInGameMenu");
tmpDef.detail = "<entity> Entity CloseInGameMenu(): void";
tmpDef.documentation = "Closes the in-game menu for this client";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("moveGravity");
tmpDef.detail = "<entity> Entity MoveGravity(<Vector3>: velocity, <int>: time): void";
tmpDef.documentation = "Fling this entity";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("moveTo");
tmpDef.detail = "<entity> Entity MoveTo(<Vector3>: point, <float>: time): void";
tmpDef.documentation = "Move this entity to the given point";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("moveTo");
tmpDef.detail = "<entity> Entity MoveTo(<Vector3>: point, <float>: time, <float>: accelTime): void";
tmpDef.documentation = "Move this entity to the given point";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("moveTo");
tmpDef.detail = "<entity> Entity MoveTo(<Vector3>: point, <float>: time, <float>: accelTime, <float>: decelTime): void";
tmpDef.documentation = "Move this entity to the given point";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("moveX");
tmpDef.detail = "<entity> Entity MoveX(<float>: point, <float>: time, <float>: accelTime?, <float>: decelTime?): void";
tmpDef.documentation = "Move this entity to the given world x value";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("moveY");
tmpDef.detail = "<entity> Entity MoveY(<float>: point, <float>: time, <float>: accelTime?, <float>: decelTime?): void";
tmpDef.documentation = "Move this entity to the given world y value";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("moveZ");
tmpDef.detail = "<entity> Entity MoveZ(<float>: point, <float>: time, <float>: accelTime?, <float>: decelTime?): void";
tmpDef.documentation = "Move this entity to the given world z value";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("notSolid");
tmpDef.detail = "<entity> Entity NotSolid(): void";
tmpDef.documentation = "Unsets the solid flag, so that this object is no longer collidable";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("physicsLaunchClient");
tmpDef.detail = "<entity> Entity PhysicsLaunchClient(<Vector3>: point, <Vector3>: force): void";
tmpDef.documentation = "Permanently turn this entity into a client physics object with an initial force vector at the specified point";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("physicsLaunchServer");
tmpDef.detail = "<entity> Entity PhysicsLaunchServer(<Vector3>: point, <Vector3>: force): void";
tmpDef.documentation = "Permanently turn this entity into a server physics object with an initial force vector at the specified point";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("rotatePitch");
tmpDef.detail = "<entity> Entity RotatePitch(<int>: pitch, <float>: time, <float>: accelTime?, <float>: decelTime?): void";
tmpDef.documentation = "Rotate this entity to the given pitch";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("rotateRoll");
tmpDef.detail = "<entity> Entity RotateRoll(<int>: roll, <float>: time, <float>: accelTime?, <float>: decelTime?): void";
tmpDef.documentation = "Rotate this entity to the given roll angle";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("rotateTo");
tmpDef.detail = "<entity> Entity RotateTo(<Vector3>: angles, <float>: time, <float>: accelTime?, <float>: decelTime?): void";
tmpDef.documentation = "Rotate this entity to the given world rotation value";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("rotateVelocity");
tmpDef.detail = "<entity> Entity RotateVelocity(<Vector3>: velocity, <float>: time, <float>: accelTime?, <float>: decelTime?): void";
tmpDef.documentation = "Rotate this entity at a particular velocity for a given time";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("rotateYaw");
tmpDef.detail = "<entity> Entity RotateYaw(<int>: yaw, <float>: time, <float>: accelTime?, <float>: decelTime?): void";
tmpDef.documentation = "Rotate this entity to the given yaw";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("solid");
tmpDef.detail = "<entity> Entity Solid(): void";
tmpDef.documentation = "Sets the solid flag, so that this object is collidable";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("vibrate");
tmpDef.detail = "<entity> Entity Vibrate(<Vector3>: direction, <float>: amplitude, <float>: period, <float>: time): void";
tmpDef.documentation = "Causes a script entity to vibrate, rotating around its origin, along a given vector direction";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("moveSlide");
tmpDef.detail = "<entity> Entity MoveSlide(<Vector3>: point, <float>: time, <Vector3>: velocity): void";
tmpDef.documentation = "Moves this entity by sliding it(TBD)";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("stopMoveSlide");
tmpDef.detail = "<entity> Entity StopMoveSlide(): void";
tmpDef.documentation = "Stops this entity from sliding";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("addPitch");
tmpDef.detail = "<entity> Entity AddPitch(<int>: pitch): void";
tmpDef.documentation = "Add pitch in local space. Does not interpolate";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("addYaw");
tmpDef.detail = "<entity> Entity AddYaw(<int>: yaw): void";
tmpDef.documentation = "Add yaw in local space. Does not interpolate";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("addRoll");
tmpDef.detail = "<entity> Entity AddRoll(<int>: roll): void";
tmpDef.documentation = "Add roll in local space. Does not interpolate";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("physicsLaunchServerItem");
tmpDef.detail = "<entity> Entity PhysicsLaunchServerItem(<Vector3>: point, <Vector3>: force): void";
tmpDef.documentation = "Launches this item";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("transformMove");
tmpDef.detail = "TransformMove(<Vector3>: position1, <Vector3>: angles1, <Vector3>: position2, <Vector3>: angles2, <Vector3>: entityPosition, <Vector3>: entityAngles): entity";
tmpDef.documentation = "Unknown effect";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("physicsExplosionSphere");
tmpDef.detail = "PhysicsExplosionSphere(<Vector3>: center, <int>: radius, <int>: height, <int>: force): void";
tmpDef.documentation = "Create a physics explosion in the shape of a sphere that will hit any physics objects withing the given radius";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("physicsExplosionCylinder");
tmpDef.detail = "PhysicsExplosionCylinder(<Vector3>: center, <int>: radius, <int>: height, <int>: force): void";
tmpDef.documentation = "Create a physics explosion in the shape of a cylinder that will hit any physics objects withing the given radius";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("physicsJolt");
tmpDef.detail = "PhysicsJolt(<Vector3>: center, <int>: outerRadius, <int>: innerRadius, <int>: force): void";
tmpDef.documentation = "Imparts a 1-frame randomly-jittered impulse on physics objects in a radius.";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("physicsJitter");
tmpDef.detail = "PhysicsJitter(<Vector3>: center, <int>: outerRadius, <int>: innerRadius, <float>: minDisplacement, <float>: maxDisplacement): void";
tmpDef.documentation = "Jitters physics objects touching the ground. Jitter forces are calculated in such a way as to displace the object upwards some height between min and max displacement at each point of contact with the ground.";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("objective_Add");
tmpDef.detail = "Objective_Add(<int>: objectiveNumber, <string>: state, <Vector3>: position?, <string>: shader?): void";
tmpDef.documentation = "Adds a new objective";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("objective_Current");
tmpDef.detail = "Objective_Current(<int>: objectiveIndex, <params>: int[]): void";
tmpDef.documentation = "Set which objective(s) are currently being done. If none specified, there's no current objective. Current objectives that are not specified to still be current, are set to active.";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("objective_Delete");
tmpDef.detail = "Objective_Delete(<int>: objectiveNumber): void";
tmpDef.documentation = "Removes an objective";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("objective_Icon");
tmpDef.detail = "Objective_Icon(<int>: objectiveNumber, <string>: icon): void";
tmpDef.documentation = "Sets the compass icon for an objective";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("objective_OnEntity");
tmpDef.detail = "Objective_OnEntity(<int>: objectiveNumber, <Entity>: entity): void";
tmpDef.documentation = "Sets the objective to get it's position from an entity";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("objective_Position");
tmpDef.detail = "Objective_Position(<int>: objectiveNumber, <Vector3>: position): void";
tmpDef.documentation = "Set the position of an objective, assumed to be the zeroth position";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("objective_State");
tmpDef.detail = "Objective_State(<int>: objectiveNumber, <string>: state): void";
tmpDef.documentation = "Set the state of an objective";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("objective_Team");
tmpDef.detail = "Objective_Team(<int>: objectiveNumber, <string>: team): void";
tmpDef.documentation = "Sets the team that the objective is for. Allows having different objectives for each team";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("pingPlayer");
tmpDef.detail = "<entity> Player PingPlayer(): void";
tmpDef.documentation = "Flashes a player on their teammate's compasses";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("objective_Player");
tmpDef.detail = "Objective_Player(<int>: objectiveNumber, <int>: playerNumber): void";
tmpDef.documentation = "Sets the objective to get it's position from a player";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("objective_PlayerTeam");
tmpDef.detail = "Objective_PlayerTeam(<int>: objectiveNumber, <int>: playerNumber): void";
tmpDef.documentation = "Sets the objective to get it's position from a player for the player's team(TBD)";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("objective_PlayerEnemyTeam");
tmpDef.detail = "Objective_PlayerEnemyTeam(<int>: objectiveNumber, <int>: playerNumber): void";
tmpDef.documentation = "Sets the objective to get it's position from a player for the enemy team(TBD)";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("adsButtonPressed");
tmpDef.detail = "<entity> Entity AdsButtonPressed(): bool";
tmpDef.documentation = "Check if the player is pressing the 'ads' button\nReturns true if the player is pressing the 'ads' button";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("allowAds");
tmpDef.detail = "<entity> Entity AllowAds(<bool>: ads): void";
tmpDef.documentation = "Sets whether the player can switch to ADS";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("allowJump");
tmpDef.detail = "<entity> Entity AllowJump(<bool>: jump): void";
tmpDef.documentation = "Sets whether the player can jump";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("allowSprint");
tmpDef.detail = "<entity> Entity AllowSprint(<bool>: sprint): void";
tmpDef.documentation = "Sets whether the player can sprint";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("anyAmmoForWeaponModes");
tmpDef.detail = "<entity> Entity AnyAmmoForWeaponModes(<string>: weapon): bool";
tmpDef.documentation = "Checks if the player has any ammo available for the weapon or any of it's alt-modes (grenade launcher, etc)\nReturns true if the player has any ammo available for the weapon or any of it's alt-modes";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("attackButtonPressed");
tmpDef.detail = "<entity> Entity AttackButtonPressed(): bool";
tmpDef.documentation = "Check if the player is pressing the 'attack' button\nReturns true if the player is pressing the 'attack' button";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("buttonPressed");
tmpDef.detail = "<entity> Entity ButtonPressed(<string>: key): bool";
tmpDef.documentation = "Check if the host is pressing the button/key\nReturns true if the host is pressing the button/key";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("clearPerks");
tmpDef.detail = "<entity> Entity ClearPerks(): void";
tmpDef.documentation = "Removes all perks for a player";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("deactivateChannelVolumes");
tmpDef.detail = "<entity> Entity DeactivateChannelVolumes(<string>: priority, <int>: fade): void";
tmpDef.documentation = "Deactivates the channel volumes for the player on the given priority level";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("deactivateReverb");
tmpDef.detail = "<entity> Entity DeactivateReverb(<string>: priority, <int>: fade): void";
tmpDef.documentation = "Deactivates the sound reverbation for the player on the given priority level";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("fragButtonPressed");
tmpDef.detail = "<entity> Entity FragButtonPressed(): bool";
tmpDef.documentation = "Check if the player is pressing the 'frag' button\nReturns true if the player is pressing the 'frag' button";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("freezeControls");
tmpDef.detail = "<entity> Entity FreezeControls(<bool>: state): void";
tmpDef.documentation = "Blocks or unblocks control input from this player";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getCurrentOffhand");
tmpDef.detail = "<entity> Entity GetCurrentOffhand(): string";
tmpDef.documentation = "Gets the player's current off-hand weapon\nReturns the name of the player's current offhand weapon";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getCurrentWeapon");
tmpDef.detail = "<entity> Entity GetCurrentWeapon(): string";
tmpDef.documentation = "Gets the player's current weapon\nReturns the name of the player's current weapon";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getCurrentWeaponClipAmmo");
tmpDef.detail = "<entity> Entity GetCurrentWeaponClipAmmo(): int";
tmpDef.documentation = "Gets the amount of ammo left in the player's clip\nReturns the amount of ammo in the player's clip";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getFractionMaxAmmo");
tmpDef.detail = "<entity> Entity GetFractionMaxAmmo(<string>: weapon): float";
tmpDef.documentation = "Gets the player's current ammunition amount as a fraction of the weapon's maximum ammunition\nReturns the player's current ammunition as a fraction of the weapon's maximum ammunition represented as a float";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getFractionStartAmmo");
tmpDef.detail = "<entity> Entity GetFractionStartAmmo(<string>: weapon): float";
tmpDef.documentation = "Gets the player's current ammunition amount as a fraction of the weapon's starting ammunition\nReturns the player's current ammunition as a fraction of the weapon's starting ammunition represented as a float";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getNormalizedMovement");
tmpDef.detail = "<entity> Entity GetNormalizedMovement(): vector3";
tmpDef.documentation = "Gets the player's normalized movement vector\nReturns (-1, 1) for X(forward) and Y(right) based on player's input";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getNormalizedCameraMovement");
tmpDef.detail = "<entity> Entity GetNormalizedCameraMovement(): vector3";
tmpDef.documentation = "Gets the player's camera's normalized movement vector\nReturns (-1, 1) for X(forward) and Y(right) based on player's input";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getOffhandSecondaryClass");
tmpDef.detail = "<entity> Entity GetOffhandSecondaryClass(): string";
tmpDef.documentation = "Gets the name that toggle is set to\nReturns the name (either 'smoke' or 'flash') of the player's secondary offhand class";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getPlayerAngles");
tmpDef.detail = "<entity> Entity GetPlayerAngles(): vector3";
tmpDef.documentation = "Gets the player's angles\nReturns the player's angles";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getStance");
tmpDef.detail = "<entity> Entity GetStance(): string";
tmpDef.documentation = "Gets the stance of the player. It only works for the player\nReturns the stance of the player. Possible return values are 'crouch', 'prone', and 'stand'";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getVelocity");
tmpDef.detail = "<entity> Entity GetVelocity(): vector3";
tmpDef.documentation = "Gets the player's cvelocity\nReturns the player's velocity";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getWeaponAmmoClip");
tmpDef.detail = "<entity> Entity GetWeaponAmmoClip(<string>: weapon, <string>: clipSide?): int";
tmpDef.documentation = "Gets the amount of ammo left in the player's weapon's current clip\nReturns the amount of ammo left in the player's weapon's current clip";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getWeaponAmmoStock");
tmpDef.detail = "<entity> Entity GetWeaponAmmoStock(<string>: weapon): int";
tmpDef.documentation = "Gets the ammunition stockpile for the given weapon\nReturns the amount of reserve ammo the player has for the given weapon";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getWeaponsList");
tmpDef.detail = "<entity> Entity GetWeaponsList(): entity";
tmpDef.documentation = "Gets an array of all weapons that the player has. Includes any alt-mode weapons\nReturns an array of all the weapons that the player has, including alt-mode meapons";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getWeaponsListAll");
tmpDef.detail = "<entity> Entity GetWeaponsListAll(): entity";
tmpDef.documentation = "Gets an array of all weapons that the player has. Includes any alt-mode, offhand, and exclusive weapons\nReturns an array of all the weapons that the player has";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getWeaponsListPrimaries");
tmpDef.detail = "<entity> Entity GetWeaponsListPrimaries(): entity";
tmpDef.documentation = "Gets an array of all primary weapons that the player has\nReturns an array of all the primary weapons that the player has";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getWeaponsListOffhands");
tmpDef.detail = "<entity> Entity GetWeaponsListOffhands(): entity";
tmpDef.documentation = "Gets an array of all offhand weapons that the player has\nReturns an array of all the offhand weapons that the player has";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getWeaponsListItems");
tmpDef.detail = "<entity> Entity GetWeaponsListItems(): entity";
tmpDef.documentation = "Gets an array of all item weapons that the player has\nReturns an array of all the item weapons that the player has";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getWeaponsListExclusives");
tmpDef.detail = "<entity> Entity GetWeaponsListExclusives(): entity";
tmpDef.documentation = "Gets an array of all exclusive weapons that the player has\nReturns an array of all the exclusive weapons that the player has";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("giveMaxAmmo");
tmpDef.detail = "<entity> Entity GiveMaxAmmo(<string>: weapon): void";
tmpDef.documentation = "Sets the player's ammunition to the weapon's maximum ammunition";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("giveStartAmmo");
tmpDef.detail = "<entity> Entity GiveStartAmmo(<string>: weapon): void";
tmpDef.documentation = "Sets the player's ammunition to the weapon's default starting ammunition";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("giveWeapon");
tmpDef.detail = "<entity> Entity GiveWeapon(<string>: weapon, <int>: index?, <bool>: akimbo?): void";
tmpDef.documentation = "Give the player a weapon";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("hasPerk");
tmpDef.detail = "<entity> Entity HasPerk(<string>: perk): bool";
tmpDef.documentation = "Test if a player has a perk\nReturns true if the player has the perk";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("hasWeapon");
tmpDef.detail = "<entity> Entity HasWeapon(<string>: weapon): bool";
tmpDef.documentation = "Checks whether the player has the given weapon\nReturns true if the player has the given weapon";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("isOnGround");
tmpDef.detail = "<entity> Entity IsOnGround(): bool";
tmpDef.documentation = "Checks if the player is on the ground\nReturns true if the player is on ground";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("meleeButtonPressed");
tmpDef.detail = "<entity> Entity MeleeButtonPressed(): bool";
tmpDef.documentation = "Check if the player is pressing the 'melee' button\nReturns true if the player is pressing the 'melee' button";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("notifyOnPlayerCommand");
tmpDef.detail = "<entity> Entity NotifyOnPlayerCommand(<string>: notify, <string>: command): void";
tmpDef.documentation = "Whenever the console command processor encounters <command> for any reason, it will notify script with the string <notify> on the player entity. Additionally, it will pass the arguments to the notify as strings, where the first argument is the initiating command.";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("playerAds");
tmpDef.detail = "<entity> Entity PlayerAds(): float";
tmpDef.documentation = "Gets the player's weapon position fraction\nReturns the player's weapon position fraction";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("playerLinkTo");
tmpDef.detail = "<entity> Player PlayerLinkTo(<Entity>: entity, <string>: tag, <float>: viewFraction?, <int>: rightArc?, <int>: leftArc?, <int>: topArc?, <int>: bottomArc?, <bool>: collide?): void";
tmpDef.documentation = "Attaches the player to an entity. Any entity rotation is added to the player's view, allow the player to look around. Rotating the parent entity/tag will not move the player's eye position, but only the player's view angles. Thus, the player's eye position is locked in place, always directly above the parent tag.";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("playerLinkToAbsolute");
tmpDef.detail = "<entity> Player PlayerLinkToAbsolute(<Entity>: entity, <string>: tag?): void";
tmpDef.documentation = "Attaches the player to an entity. No view movement is allowed. The player's eye position will remain fixed relative to the parent entity/tag. Thus, pitching and rolling will cause the player's eye position to move. (But the player entity always remains vertical)";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("playerLinkToDelta");
tmpDef.detail = "<entity> Player PlayerLinkToDelta(<Entity>: entity, <string>: tag, <float>: viewFraction?, <int>: rightArc?, <int>: leftArc?, <int>: topArc?, <int>: bottomArc?, <bool>: collide?): void";
tmpDef.documentation = "Attaches the player to an entity. Any entity rotation is added to the player's view, allow the player to look around. The player's eye position will remain fixed relative to the parent entity/tag. Thus, pitching and rolling will cause the player's eye position to move. (But the player entity always remains vertical)";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("playLocalSound");
tmpDef.detail = "<entity> Entity PlayLocalSound(<string>: sound): void";
tmpDef.documentation = "Plays a sound locally to the player";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("resetSpreadOverride");
tmpDef.detail = "<entity> Entity ResetSpreadOverride(): void";
tmpDef.documentation = "Resets the player spread value to the ones of the weapon in use";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("secondaryOffhandButtonPressed");
tmpDef.detail = "<entity> Entity SecondaryOffhandButtonPressed(): bool";
tmpDef.documentation = "Check if the player is pressing the 'secondary offhand' button\nReturns true if the player is pressing the 'secondary offhand' button";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setActionSlot");
tmpDef.detail = "<entity> Entity SetActionSlot(<int>: slot, <string>: option, <string>: weapon?): void";
tmpDef.documentation = "Sets the option to perform when the player executes (for example) '+actionslot 1'";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setChannelVolumes");
tmpDef.detail = "<entity> Entity SetChannelVolumes(<string>: priority, <string>: shockName, <float>: fade?): void";
tmpDef.documentation = "Sets the channel volumes for the player (a way of fading volumes by type)";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setClientDvar");
tmpDef.detail = "<entity> Entity SetClientDvar(<string>: dvar, <Parameter>: value): void";
tmpDef.documentation = "Set the values of a dvar which are specific to each client";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setClientDvars");
tmpDef.detail = "<entity> Entity SetClientDvars(<string>: dvar, <Parameter>: value, <params>: Parameter[]): void";
tmpDef.documentation = "Set the values of a list of dvars which are specific to each client";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setDepthOfField");
tmpDef.detail = "<entity> Entity SetDepthOfField(<int>: nearStart, <int>: nearEnd, <int>: farStart, <int>: farEnd, <float>: nearBlur, <float>: farBlur): void";
tmpDef.documentation = "Set the depth of field values for a player. If start >= end for near or far, depth of field is disabled for that region";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setMoveSpeedScale");
tmpDef.detail = "<entity> Entity SetMoveSpeedScale(<float>: scale): void";
tmpDef.documentation = "Scales player movement speed by this amount";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setOffhandSecondaryClass");
tmpDef.detail = "<entity> Entity SetOffhandSecondaryClass(<string>: name): void";
tmpDef.documentation = "Set whether the player can use smoke grenades or flashbangs";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setOrigin");
tmpDef.detail = "<entity> Entity SetOrigin(<Vector3>: origin): void";
tmpDef.documentation = "Set the player's origin";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setPerk");
tmpDef.detail = "<entity> Entity SetPerk(<string>: perk, <bool>: codePerk?, <bool>: useSlot?): void";
tmpDef.documentation = "Give the specified perk";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setPlayerAngles");
tmpDef.detail = "<entity> Entity SetPlayerAngles(<Vector3>: angles): void";
tmpDef.documentation = "Set the player's angles";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setReverb");
tmpDef.detail = "<entity> Entity SetReverb(<string>: priority, <string>: roomType, <float>: dryLevel?, <float>: wetLevel?, <float>: fade?): void";
tmpDef.documentation = "Set the sound reverbation for the player";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setSpreadOverride");
tmpDef.detail = "<entity> Entity SetSpreadOverride(<int>: spread): void";
tmpDef.documentation = "Sets the player fixed spread value";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setVelocity");
tmpDef.detail = "<entity> Entity SetVelocity(<Vector3>: velocity): void";
tmpDef.documentation = "Set the player's velocity";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setViewModel");
tmpDef.detail = "<entity> Entity SetViewModel(<string>: viewmodel): void";
tmpDef.documentation = "Set the player's current viewmodel";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setViewModelDepthOfField");
tmpDef.detail = "<entity> Entity SetViewModelDepthOfField(<float>: start, <float>: end): void";
tmpDef.documentation = "Set the depth of field values for the player's viewmodel when at hip. If start >= end, depth of field is disabled";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setWeaponAmmoClip");
tmpDef.detail = "<entity> Entity SetWeaponAmmoClip(<string>: weapon, <int>: ammo, <string>: clipSide?): void";
tmpDef.documentation = "Set the weapon clip ammunition for the given weapon";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setWeaponAmmoStock");
tmpDef.detail = "<entity> Entity SetWeaponAmmoStock(<string>: weapon, <int>: ammo): void";
tmpDef.documentation = "Set the ammunition stockpile for the given weapon";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("shellShock");
tmpDef.detail = "<entity> Entity ShellShock(<string>: shellshock, <float>: duration, <bool>: overrideCheat?): void";
tmpDef.documentation = "Start a shell shock sequence for the player. The shell shock must be precached, otherwise calling this script will cause a script error";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("stopLocalSound");
tmpDef.detail = "<entity> Entity StopLocalSound(<string>: sound): void";
tmpDef.documentation = "Stops all instances of a local soundalias running on a player";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("stopShellShock");
tmpDef.detail = "<entity> Entity StopShellShock(): void";
tmpDef.documentation = "Stop a shell shock sequence for the player";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("switchToOffhand");
tmpDef.detail = "<entity> Entity SwitchToOffhand(): void";
tmpDef.documentation = "Switch to the player's offhand weapon";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("switchToWeapon");
tmpDef.detail = "<entity> Entity SwitchToWeapon(<string>: weapon): void";
tmpDef.documentation = "Switch to a different weapon";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("switchToWeaponImmediate");
tmpDef.detail = "<entity> Entity SwitchToWeaponImmediate(<string>: weapon): void";
tmpDef.documentation = "Switch to a different weapon immediately, skipping any animations";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("takeAllWeapons");
tmpDef.detail = "<entity> Entity TakeAllWeapons(): void";
tmpDef.documentation = "Remove all the weapons from the player";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("takeWeapon");
tmpDef.detail = "<entity> Entity TakeWeapon(<string>: weapon): void";
tmpDef.documentation = "Take a weapon from the player";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("unSetPerk");
tmpDef.detail = "<entity> Entity UnSetPerk(<string>: perk, <bool>: useSlot?): void";
tmpDef.documentation = "Takes the specified perk from the player";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("useButtonPressed");
tmpDef.detail = "<entity> Entity UseButtonPressed(): bool";
tmpDef.documentation = "Check if the player is pressing the 'use' button\nReturns true if the player is pressing the 'use' button";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("viewKick");
tmpDef.detail = "<entity> Entity ViewKick(<int>: force, <Vector3>: source): void";
tmpDef.documentation = "Throw the screen around as if the player has been damaged";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("weaponLockFinalize");
tmpDef.detail = "<entity> Player WeaponLockFinalize(<Entity>: entity): void";
tmpDef.documentation = "Locks player's weapon onto an entity. Implies WeaponLockStart(), so this may be called to jump to a hard lock";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("weaponLockFree");
tmpDef.detail = "<entity> Entity WeaponLockFree(): void";
tmpDef.documentation = "Clear the player's weapon lock";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("weaponLockNoClearance");
tmpDef.detail = "<entity> Entity WeaponLockNoClearance(<bool>: noClearance): void";
tmpDef.documentation = "When set true, the player will be unable to fire thair lockon weapon, and will recieve a hint print telling them that there is an obstruction";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("weaponLockStart");
tmpDef.detail = "<entity> Entity WeaponLockStart(): void";
tmpDef.documentation = "Begins player's weapon lockon sequence (hud effects, etc). Will clear any existing hard lock. Use WeaponLockFinalize(this Entity entity, ) to complete lock";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("weaponLockTargetTooClose");
tmpDef.detail = "<entity> Entity WeaponLockTargetTooClose(<bool>: tooClose): void";
tmpDef.documentation = "When set true, the player will be unable to fire their lockon weapons, and will recieve a hint print telling them that they are too close";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getPlayerViewHeight");
tmpDef.detail = "<entity> Entity GetPlayerViewHeight(): float";
tmpDef.documentation = "Gets the player's view height\nReturns the player's view height as a float";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getCurrentPrimaryWeapon");
tmpDef.detail = "<entity> Entity GetCurrentPrimaryWeapon(): string";
tmpDef.documentation = "Gets the player's weapon that is in the primary slot\nReturns the name of the weapon in the player's primary slot";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("isDualWielding");
tmpDef.detail = "<entity> Entity IsDualWielding(): bool";
tmpDef.documentation = "Checks if the player is currently holding a dual wield weapon\nReturns true if the player is holding a dual wield weapon";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("isReloading");
tmpDef.detail = "<entity> Entity IsReloading(): bool";
tmpDef.documentation = "Checks if the player is reloading\nReturns true if the player is reloading";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("isSwitchingWeapon");
tmpDef.detail = "<entity> Entity IsSwitchingWeapon(): bool";
tmpDef.documentation = "Checks if the player is in the process of switching weapons\nReturns true if the player is switching to another weapon";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("isUsingTurret");
tmpDef.detail = "<entity> Entity IsUsingTurret(): bool";
tmpDef.documentation = "Checks if the player is currently manning a turret\nReturns true if the player is manning a turret";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getOffhandPrimaryClass");
tmpDef.detail = "<entity> Entity GetOffhandPrimaryClass(): string";
tmpDef.documentation = "Gets the name that primary offhand toggle is set to\nReturns the name of the player's primary offhand class";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setOffhandPrimaryClass");
tmpDef.detail = "<entity> Entity SetOffhandPrimaryClass(<string>: name): void";
tmpDef.documentation = "Sets the player's current primary offhand class";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("disableOffhandWeapons");
tmpDef.detail = "<entity> Entity DisableOffhandWeapons(): void";
tmpDef.documentation = "Disables the use of offhand weapons (grenades, flashes)";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("enableOffhandWeapons");
tmpDef.detail = "<entity> Entity EnableOffhandWeapons(): void";
tmpDef.documentation = "Enables the use of offhand weapons (grenades, flashes)";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("disableWeaponSwitch");
tmpDef.detail = "<entity> Entity DisableWeaponSwitch(): void";
tmpDef.documentation = "Disables weapon switching for the player";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("enableWeaponSwitch");
tmpDef.detail = "<entity> Entity EnableWeaponSwitch(): void";
tmpDef.documentation = "Enables weapon switching for the player";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("disableUsability");
tmpDef.detail = "<entity> Entity DisableUsability(): void";
tmpDef.documentation = "Makes the player unable to use things such as triggers, turrets, etc.";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("enableUsability");
tmpDef.detail = "<entity> Entity EnableUsability(): void";
tmpDef.documentation = "Makes the player able to use things such as triggers, turrets, etc.";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setWhizBySpreads");
tmpDef.detail = "<entity> Entity SetWhizBySpreads(<float>: x, <float>: y, <float>: z): void";
tmpDef.documentation = "TBD";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setWhizByRadii");
tmpDef.detail = "<entity> Entity SetWhizByRadii(<float>: x, <float>: y, <float>: z): void";
tmpDef.documentation = "TBD";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setVolMod");
tmpDef.detail = "<entity> Entity SetVolMod(<float>: vol, <float>: overrideVol): void";
tmpDef.documentation = "TBD";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setChannelVolume");
tmpDef.detail = "<entity> Entity SetChannelVolume(): void";
tmpDef.documentation = "Set the channel volume for the player(TBD)";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setAimSpreadMovementScale");
tmpDef.detail = "<entity> Entity SetAimSpreadMovementScale(<float>: scale): void";
tmpDef.documentation = "Sets the movement scale that the player's crosshairs spread out/in while they are moving";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setViewKickScale");
tmpDef.detail = "<entity> Entity SetViewKickScale(<float>: scale): void";
tmpDef.documentation = "Sets the scale of how much the player's screen gets thrown around when getting hurt";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getViewKickScale");
tmpDef.detail = "<entity> Entity GetViewKickScale(): float";
tmpDef.documentation = "Gets the scale of how much the player's screen gets thrown around when getting hurt\nReturns the scale value of how much the player's screen kicks when being hurt";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("canPlayerPlaceSentry");
tmpDef.detail = "<entity> Entity CanPlayerPlaceSentry(): array";
tmpDef.documentation = "Checks whether the player can place a sentry in front of them as a valid position\nReturns 'result'(bool whether the player can place a sentry or not), 'origin'(The position of the placement, and 'angles'(The angles of the placement) all in an array";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("canPlayerPlaceTank");
tmpDef.detail = "<entity> Entity CanPlayerPlaceTank(): array";
tmpDef.documentation = "Checks whether the player can place a tank in front of them as a valid position\nReturns 'result'(bool whether the player can place a tank or not), 'origin'(The position of the placement, and 'angles'(The angles of the placement) all in an array";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("visionSetNakedForPlayer");
tmpDef.detail = "<entity> Entity VisionSetNakedForPlayer(<string>: vision, <float>: fade?): void";
tmpDef.documentation = "Sets the 'naked' vision for this player";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("visionSetNightForPlayer");
tmpDef.detail = "<entity> Entity VisionSetNightForPlayer(<string>: vision, <float>: fade?): void";
tmpDef.documentation = "Sets the visionset for this player when they have nightvision goggles equipped";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("visionSetMissileCamForPlayer");
tmpDef.detail = "<entity> Entity VisionSetMissileCamForPlayer(<string>: vision, <float>: fade?): void";
tmpDef.documentation = "Sets the visionset for this player while they are controlling a missile";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("visionSetThermalForPlayer");
tmpDef.detail = "<entity> Entity VisionSetThermalForPlayer(<string>: vision, <float>: fade?): void";
tmpDef.documentation = "Sets the visionset for this player when they are scoped into a thermal scope";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("visionSetPainForPlayer");
tmpDef.detail = "<entity> Entity VisionSetPainForPlayer(<string>: vision, <float>: fade?): void";
tmpDef.documentation = "Sets the visionset for this player when they are in pain/near death";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getPlayerWeaponModel");
tmpDef.detail = "<entity> Entity GetPlayerWeaponModel(): string";
tmpDef.documentation = "Gets the weapon model of the player's current weapon\nReturns the model name of the player's current weapon";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getPlayerKnifeModel");
tmpDef.detail = "<entity> Entity GetPlayerKnifeModel(): string";
tmpDef.documentation = "Gets the weapon model of the player's knife\nReturns the model name of the player's current knife";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("updatePlayerModelWithWeapons");
tmpDef.detail = "<entity> Entity UpdatePlayerModelWithWeapons(): void";
tmpDef.documentation = "Updates the player's current player model according to their current loadout";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("canMantle");
tmpDef.detail = "<entity> Entity CanMantle(): bool";
tmpDef.documentation = "Checks if the player can mantle at their current location\nReturns true if the player can mantle";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("forceMantle");
tmpDef.detail = "<entity> Entity ForceMantle(): void";
tmpDef.documentation = "Forces the player to mantle in their current spot regardless if they can";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("player_RecoilScaleOn");
tmpDef.detail = "<entity> Entity Player_RecoilScaleOn(<int>: scale): int";
tmpDef.documentation = "Turns on recoil scaling if off and sets the player's current recoil scaling factor";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("player_RecoilScaleOff");
tmpDef.detail = "<entity> Entity Player_RecoilScaleOff(): void";
tmpDef.documentation = "Turns off recoil scaling so that they use default values";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("visionSyncWithPlayer");
tmpDef.detail = "<entity> Entity VisionSyncWithPlayer(<Entity>: player): void";
tmpDef.documentation = "Syncs this player's vision with another player's";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setEnterTime");
tmpDef.detail = "<entity> Entity SetEnterTime(): void";
tmpDef.documentation = "TBD";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getGUID");
tmpDef.detail = "<entity> Entity GetGUID(): string";
tmpDef.documentation = "Gets this player's GUID\nReturns the player's GUID";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getXUID");
tmpDef.detail = "<entity> Entity GetXUID(): string";
tmpDef.documentation = "Gets this player's XUID\nReturns the player's XUID";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("isHost");
tmpDef.detail = "<entity> Entity IsHost(): bool";
tmpDef.documentation = "Checks if this player is the host of the current game\nReturns true if this player is the host of the current game";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getSpectatingPlayer");
tmpDef.detail = "<entity> Entity GetSpectatingPlayer(): entity";
tmpDef.documentation = "Gets the player that this player is currently spectating\nReturns the player that this player is currently spectating";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("predictStreamPos");
tmpDef.detail = "<entity> Entity PredictStreamPos(<Vector3>: origin, <Vector3>: angles): void";
tmpDef.documentation = "TBD";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setCardDisplaySlot");
tmpDef.detail = "<entity> Entity SetCardDisplaySlot(<Entity>: player, <int>: slot): void";
tmpDef.documentation = "Sets display slot info for this player, used for card splashes such as 'YOU KILLED', 'KILLED YOU','SPECTATING'";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setCardTitle");
tmpDef.detail = "<entity> Entity SetCardTitle(<string>: title): void";
tmpDef.documentation = "Sets this player's playercard title";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setCardIcon");
tmpDef.detail = "<entity> Entity SetCardIcon(<string>: icon): void";
tmpDef.documentation = "Sets this player's playercard icon";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setCardNamePlate");
tmpDef.detail = "<entity> Entity SetCardNamePlate(<string>: nameplate): void";
tmpDef.documentation = "Sets this player's playercard nameplate(unused)";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("lastStandRevive");
tmpDef.detail = "<entity> Entity LastStandRevive(): void";
tmpDef.documentation = "Revives this player if they are in last stand or final stand";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setSpectateDefaults");
tmpDef.detail = "<entity> Entity SetSpectateDefaults(<Vector3>: origin, <Vector3>: angles): void";
tmpDef.documentation = "Sets the default spectator starting position for this player";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getThirdPersonCrosshairOffset");
tmpDef.detail = "<entity> Entity GetThirdPersonCrosshairOffset(): float";
tmpDef.documentation = "Gets the offset for the player's crosshair when in a third person view\nReturns the offset for the player's crosshair when in a third person view";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("disableWeaponPickup");
tmpDef.detail = "<entity> Entity DisableWeaponPickup(): void";
tmpDef.documentation = "Disables weapon pickup for this player";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("enableWeaponPickup");
tmpDef.detail = "<entity> Entity EnableWeaponPickup(): void";
tmpDef.documentation = "Enables weapon pickup for this player";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("playerLinkWeaponViewToDelta");
tmpDef.detail = "<entity> Player PlayerLinkWeaponViewToDelta(<Entity>: entity?): void";
tmpDef.documentation = "TBD";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("playerLinkToBlend");
tmpDef.detail = "<entity> Player PlayerLinkToBlend(<Entity>: entity?): void";
tmpDef.documentation = "TBD";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("playerLinkedOffsetEnable");
tmpDef.detail = "<entity> Entity PlayerLinkedOffsetEnable(): void";
tmpDef.documentation = "Enables setting an offset to any linked entities on this entity(TBD)";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("playerLinkedOffsetDisable");
tmpDef.detail = "<entity> Entity PlayerLinkedOffsetDisable(): void";
tmpDef.documentation = "Disables setting an offset to any linked entities on this entity(TBD)";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("playerLinkedSetViewZNear");
tmpDef.detail = "<entity> Entity PlayerLinkedSetViewZNear(<float>: zNear): void";
tmpDef.documentation = "Sets the z_near value for this player's view when the camera is linked to another entity";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("playerLinkedSetUseBaseAngleForViewClamp");
tmpDef.detail = "<entity> Entity PlayerLinkedSetUseBaseAngleForViewClamp(): void";
tmpDef.documentation = "TBD";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("lerpViewAngleClamp");
tmpDef.detail = "<entity> Entity LerpViewAngleClamp(): void";
tmpDef.documentation = "TBD";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setViewAngleResistance");
tmpDef.detail = "<entity> Entity SetViewAngleResistance(): void";
tmpDef.documentation = "TBD";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("thermalVisionOn");
tmpDef.detail = "<entity> Entity ThermalVisionOn(): void";
tmpDef.documentation = "Turns on thermal vision for this player";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("thermalVisionOff");
tmpDef.detail = "<entity> Entity ThermalVisionOff(): void";
tmpDef.documentation = "Turns off thermal vision for this player";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("thermalVisionFOFOverlayOn");
tmpDef.detail = "<entity> Entity ThermalVisionFOFOverlayOn(): void";
tmpDef.documentation = "Turns on player target indicators so that enemy players have a red box around them";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("thermalVisionFOFOverlayOff");
tmpDef.detail = "<entity> Entity ThermalVisionFOFOverlayOff(): void";
tmpDef.documentation = "Turns off player target indicators";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("autospotOverlayOn");
tmpDef.detail = "<entity> Entity AutospotOverlayOn(): void";
tmpDef.documentation = "Turns on autospot so that all player names are visible";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("autospotOverlayOff");
tmpDef.detail = "<entity> Entity AutospotOverlayOff(): void";
tmpDef.documentation = "Turns off autospot so that player names are only visible when looking at them";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("forceUseHintOn");
tmpDef.detail = "<entity> Entity ForceUseHintOn(<string>: hint): void";
tmpDef.documentation = "Set's a player's use hint and forces it to display. Use ForceUseHintOff() to remove it";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("forceUseHintOff");
tmpDef.detail = "<entity> Entity ForceUseHintOff(): void";
tmpDef.documentation = "Removes any use hints on the player's screen";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("makeSoft");
tmpDef.detail = "<entity> Entity MakeSoft(): entity";
tmpDef.documentation = "Makes this entity a soft entity(TBD)";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("makeHard");
tmpDef.detail = "<entity> Entity MakeHard(): entity";
tmpDef.documentation = "Makes this entity a hard entity";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("willNeverChange");
tmpDef.detail = "<entity> Entity WillNeverChange(): void";
tmpDef.documentation = "Sets a flag for this entity to tell the game that this entity will remain exactly as it is when this function is called. This will disable any script interactivity with this entity";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setStance");
tmpDef.detail = "<entity> Entity SetStance(<string>: stance): void";
tmpDef.documentation = "Sets this player's stance. Valid stances are 'prone', 'crouch', and 'stand'";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("stunPlayer");
tmpDef.detail = "<entity> Entity StunPlayer(<float>: time): void";
tmpDef.documentation = "Stuns this player for the specified amount of time";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("fadeOutShellShock");
tmpDef.detail = "<entity> Entity FadeOutShellShock(): void";
tmpDef.documentation = "Fades out any current shellshock for this player(TBD)";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setMotionBlurMoveScale");
tmpDef.detail = "<entity> Entity SetMotionBlurMoveScale(<float>: scale): void";
tmpDef.documentation = "Sets the scale at which this player's vision blurs while moving";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setMotionBlurTurnScale");
tmpDef.detail = "<entity> Entity SetMotionBlurTurnScale(<float>: scale): void";
tmpDef.documentation = "Sets the scale at which this player's vision blurs while looking around";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setMotionBlurZoomScale");
tmpDef.detail = "<entity> Entity SetMotionBlurZoomScale(<float>: scale): void";
tmpDef.documentation = "Sets the scale at which this player's vision blurs while zooming in";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getPlayerSetting");
tmpDef.detail = "<entity> Entity GetPlayerSetting(): string";
tmpDef.documentation = "Gets a setting value from this player\nReturns the player's value of the given setting";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getLocalPlayerProfileData");
tmpDef.detail = "<entity> Entity GetLocalPlayerProfileData(): string";
tmpDef.documentation = "Gets data from this player's local stats(TBD)\nReturns the player's local value of the given stat";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setLocalPlayerProfileData");
tmpDef.detail = "<entity> Entity SetLocalPlayerProfileData(): void";
tmpDef.documentation = "Sets a stat on this player's local stat file";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("remoteCameraSoundscapeOn");
tmpDef.detail = "<entity> Entity RemoteCameraSoundscapeOn(): void";
tmpDef.documentation = "Enables sounds to be heard from the camera position if this player's camera is somewhere else";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("remoteCameraSoundscapeOff");
tmpDef.detail = "<entity> Entity RemoteCameraSoundscapeOff(): void";
tmpDef.documentation = "Disables sounds to be heard from the camera position if this player's camera is somewhere else";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("radarJamOn");
tmpDef.detail = "<entity> Entity RadarJamOn(): void";
tmpDef.documentation = "Jams this player's radar";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("radarJamOff");
tmpDef.detail = "<entity> Entity RadarJamOff(): void";
tmpDef.documentation = "Un-jams this player's radar";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setMotionTrackerVisible");
tmpDef.detail = "<entity> Entity SetMotionTrackerVisible(<bool>: visible): void";
tmpDef.documentation = "Sets whether this player is visible on heartbeat sensors or not";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getMotionTrackerVisible");
tmpDef.detail = "<entity> Entity GetMotionTrackerVisible(): bool";
tmpDef.documentation = "Gets whether this player is visible on heartbeat sensors or not\nReturns true if this player is visible on heartbeat sensors";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setWaterSheeting");
tmpDef.detail = "<entity> Entity SetWaterSheeting(<int>: sheet, <int>: duration): void";
tmpDef.documentation = "Sets a water sheet over the player's screen as if they submerged under water";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setWeaponHudIconOverride");
tmpDef.detail = "<entity> Entity SetWeaponHudIconOverride(<string>: icon): void";
tmpDef.documentation = "Sets the weapon hud icon override for this player. This will override any icon in place of the player's current offhand and replace it with the given shader";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getWeaponHudIconOverride");
tmpDef.detail = "<entity> Entity GetWeaponHudIconOverride(): string";
tmpDef.documentation = "Gets the current offhand weapon hud override icon this player has\nReturns the name of the shader that this player's offhand icon override is set to";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setEMPJammed");
tmpDef.detail = "<entity> Entity SetEMPJammed(<bool>: jammed): void";
tmpDef.documentation = "Sets whether this player's screen is emp jammed";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("playerSetExpFog");
tmpDef.detail = "<entity> Entity PlayerSetExpFog(<float>: startDist, <float>: halfwayDist, <Vector3>: RGB, <float>: transitionTime): void";
tmpDef.documentation = "Sets this player's exponential fog values";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("isItemUnlocked");
tmpDef.detail = "<entity> Entity IsItemUnlocked(<string>: item): bool";
tmpDef.documentation = "Checks whether this player has the given item unlocked or not";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getPlayerData");
tmpDef.detail = "<entity> Entity GetPlayerData(<params>: Parameter[]): parameter";
tmpDef.documentation = "Gets stats from the player's playerdata\nReturns the value of the data field";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setPlayerData");
tmpDef.detail = "<entity> Entity SetPlayerData(<params>: Parameter[]): void";
tmpDef.documentation = "Sets a data field in this player's playerdata";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("isUsingOnlineDataOffline");
tmpDef.detail = "<entity> Entity IsUsingOnlineDataOffline(): bool";
tmpDef.documentation = "Checks if this player is currently using online data while offline\nReturns true if the player is using online data while offline";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getRestedTime");
tmpDef.detail = "<entity> Entity GetRestedTime(): int";
tmpDef.documentation = "Gets this player's time since the last game they player, in seconds\nReturns the player's amount of time since their last game";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("send73Command");
tmpDef.detail = "<entity> Entity Send73Command(): int";
tmpDef.documentation = "TBD";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("sendLeaderboards");
tmpDef.detail = "<entity> Entity SendLeaderboards(): void";
tmpDef.documentation = "Sends the current leaderboard stats to the player(TBD)";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("playerForceDeathAnim");
tmpDef.detail = "<entity> Entity PlayerForceDeathAnim(<Entity>: inflictor, <string>: meansOfDeath, <string>: hitLoc, <Vector3>: direction): void";
tmpDef.documentation = "Forces this player to start their death animations, crediting the inflictor with a kill but not killing this player";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("startAC130");
tmpDef.detail = "<entity> Entity StartAC130(): void";
tmpDef.documentation = "Informs the game that this player is starting to ride an AC130";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("stopAC130");
tmpDef.detail = "<entity> Entity StopAC130(): void";
tmpDef.documentation = "Informs the game that this player has stopped riding an AC130";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("canSpawn");
tmpDef.detail = "<entity> Entity CanSpawn(<Vector3>: origin): bool";
tmpDef.documentation = "Checks if a player can spawn at this position\nReturns true if a player can spawn at this position";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("iPrintLn");
tmpDef.detail = "<entity> Entity IPrintLn(<string>: message): void";
tmpDef.documentation = "Write a line to this player's screen.";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("iPrintLnBold");
tmpDef.detail = "<entity> Entity IPrintLnBold(<string>: message): void";
tmpDef.documentation = "Write a bold line to this player's screen.";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("playerHide");
tmpDef.detail = "<entity> Entity PlayerHide(): void";
tmpDef.documentation = "Hides a visible player";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("isSplitScreenPlayer");
tmpDef.detail = "<entity> Entity IsSplitScreenPlayer(): bool";
tmpDef.documentation = "Checks if the player is a splitscreen player\nReturns true if the player is a splitscreen player";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("isSplitScreenPlayerPrimary");
tmpDef.detail = "<entity> Entity IsSplitScreenPlayerPrimary(): bool";
tmpDef.documentation = "Checks if the player is the primary splitscreen player\nReturns true if the player is the primary splitscreen player";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("trackerUpdate");
tmpDef.detail = "<entity> Entity TrackerUpdate(<string>: stat, <int>: value): void";
tmpDef.documentation = "Updates values of the given leaderboard stat from the leaderboard tracker for this player";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("thermalDrawEnable");
tmpDef.detail = "<entity> Entity ThermalDrawEnable(): void";
tmpDef.documentation = "Causes player models to be drawn as if they are seen in thermal mode";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("thermalDrawDisable");
tmpDef.detail = "<entity> Entity ThermalDrawDisable(): void";
tmpDef.documentation = "Turns off drawing player models in thermal mode";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("preCacheHeadIcon");
tmpDef.detail = "PreCacheHeadIcon(<string>: headicon): void";
tmpDef.documentation = "Precache a head icon";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("preCacheItem");
tmpDef.detail = "PreCacheItem(<string>: item): void";
tmpDef.documentation = "Precaches a given item. It must be called before any wait statements in the level script";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("preCacheLocationSelector");
tmpDef.detail = "PreCacheLocationSelector(<string>: material): void";
tmpDef.documentation = "Precaches a material to be used as an indicator during location selection on the map";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("preCacheMenu");
tmpDef.detail = "PreCacheMenu(<string>: menu): void";
tmpDef.documentation = "Precaches this menu";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("preCacheModel");
tmpDef.detail = "PreCacheModel(<string>: model): void";
tmpDef.documentation = "Precaches the given model. It must be called before any wait statements in the level script";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("preCacheRumble");
tmpDef.detail = "PreCacheRumble(<string>: rumble): void";
tmpDef.documentation = "Precaches the given rumble. It must be called before any wait statements in the level script";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("preCacheShader");
tmpDef.detail = "PreCacheShader(<string>: material): void";
tmpDef.documentation = "Precaches the given shader. It must be called before any wait statements in the level script";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("preCacheShellShock");
tmpDef.detail = "PreCacheShellShock(<string>: shellshock): void";
tmpDef.documentation = "Precaches the shellshock effect. It must be called before any wait statements in the level script";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("preCacheStatusIcon");
tmpDef.detail = "PreCacheStatusIcon(<string>: icon): void";
tmpDef.documentation = "Precaches a status icon";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("preCacheString");
tmpDef.detail = "PreCacheString(<string>: text): void";
tmpDef.documentation = "Precaches the given string. It must be called before any wait statements in the level script";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("preCacheVehicle");
tmpDef.detail = "PreCacheVehicle(<string>: vehicle): void";
tmpDef.documentation = "Precaches the weapon info structure for a vehicle. It must be called before any wait statements in the level script";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("tableLookupIString");
tmpDef.detail = "TableLookupIString(<string>: filename, <int>: column, <Parameter>: value, <int>: columnReturn): string";
tmpDef.documentation = "Look up a row in a table and pull out a particular column from that row in an IString\nReturns the value pulled from the given row and column as an IString";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("tableLookup");
tmpDef.detail = "TableLookup(<string>: filename, <int>: column, <Parameter>: value, <int>: columnReturn): string";
tmpDef.documentation = "Look up a row in a table and pull out a particular column from that row\nReturns the value pulled from the given row and column";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("preCacheFXTeamThermal");
tmpDef.detail = "PreCacheFXTeamThermal(<int>: effect, <string>: tag): void";
tmpDef.documentation = "Precaches a thermal effect for use on the specified tag";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("preCacheMiniMapIcon");
tmpDef.detail = "PreCacheMiniMapIcon(<string>: icon): void";
tmpDef.documentation = "Precache a minimap icon";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("preCacheMpAnim");
tmpDef.detail = "PreCacheMpAnim(<string>: anim): void";
tmpDef.documentation = "Precache an Animation";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("preCacheLeaderboards");
tmpDef.detail = "PreCacheLeaderboards(<string>: leaderboard): void";
tmpDef.documentation = "Precache a leaderboard definition";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("tableLookupByRow");
tmpDef.detail = "TableLookupByRow(<string>: filename, <int>: row, <int>: column): string";
tmpDef.documentation = "Look up a row and column in a table and pull out that particular value\nReturns the value pulled from the given row and column";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("tableLookupIStringByRow");
tmpDef.detail = "TableLookupIStringByRow(<string>: filename, <int>: row, <int>: column): string";
tmpDef.documentation = "Look up a row and column in a table and pull out a particular value from that row in an IString\nReturns the value pulled from the given row and column as an IString";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("tableLookupRowNum");
tmpDef.detail = "TableLookupRowNum(<string>: filename, <int>: column, <Parameter>: value): int";
tmpDef.documentation = "Look up a column in a table and gets the row number of the given value\nReturns the row number pulled from the given column";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("preCacheTurret");
tmpDef.detail = "PreCacheTurret(<string>: weapon): void";
tmpDef.documentation = "Precaches a weapon for turret use.";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("playRumbleLoopOnEntity");
tmpDef.detail = "<entity> Entity PlayRumbleLoopOnEntity(<string>: rumble): void";
tmpDef.documentation = "Plays a looping controller rumble on the given player";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("playRumbleLoopOnPosition");
tmpDef.detail = "PlayRumbleLoopOnPosition(<string>: rumble, <Vector3>: position): void";
tmpDef.documentation = "Plays a looping rumble at a given position";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("playRumbleOnEntity");
tmpDef.detail = "<entity> Entity PlayRumbleOnEntity(<string>: rumble): void";
tmpDef.documentation = "Plays a rumble on the given entity";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("playRumbleOnPosition");
tmpDef.detail = "PlayRumbleOnPosition(<string>: rumble, <Vector3>: position): void";
tmpDef.documentation = "Plays a rumble at a given position";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("stopAllRumbles");
tmpDef.detail = "StopAllRumbles(): void";
tmpDef.documentation = "Stops all of the current rumbles";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("stopRumble");
tmpDef.detail = "<entity> Entity StopRumble(<string>: rumble): void";
tmpDef.documentation = "Quits the playing of a particular rumble on a player";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getEye");
tmpDef.detail = "<entity> Entity GetEye(): vector3";
tmpDef.documentation = "Gets the position of the eye for an AI or player\nReturns the position of the eye for the given AI or Player";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("isAlive");
tmpDef.detail = "IsAlive(<Entity>: entity): bool";
tmpDef.documentation = "Checks whether the entity is alive\nReturns true if the entity is alive";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("isPlayer");
tmpDef.detail = "IsPlayer(<Entity>: entity): bool";
tmpDef.documentation = "Checks whether the entity is a player\nReturns true if the entity is a player";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("ambientPlay");
tmpDef.detail = "AmbientPlay(<string>: ambient, <float>: fade?): void";
tmpDef.documentation = "Play the given piece of ambient sound";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("ambientStop");
tmpDef.detail = "AmbientStop(<float>: fade?): void";
tmpDef.documentation = "Stop all ambient sounds (excluding the music track)";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("playLoopSound");
tmpDef.detail = "<entity> Entity PlayLoopSound(<string>: sound): void";
tmpDef.documentation = "Play a sound as a loop";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("playSound");
tmpDef.detail = "<entity> Entity PlaySound(<string>: sound): void";
tmpDef.documentation = "Play a sound alias as if coming from the entity";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("playSoundAsMaster");
tmpDef.detail = "<entity> Entity PlaySoundAsMaster(<string>: sound): void";
tmpDef.documentation = "Play a sound alias as if coming from the entity, as a master sound";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("playSoundToPlayer");
tmpDef.detail = "<entity> Entity PlaySoundToPlayer(<string>: sound, <Entity>: player): void";
tmpDef.documentation = "Play a sound alias as if coming from the entity, so that only one player can hear it";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("playSoundToTeam");
tmpDef.detail = "<entity> Entity PlaySoundToTeam(<string>: sound, <string>: team, <Entity>: ignorePlayer?): void";
tmpDef.documentation = "Play a sound alias as if coming from the entity, so that only one team can hear it";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("soundExists");
tmpDef.detail = "SoundExists(<string>: alias): bool";
tmpDef.documentation = "Checks if the sound alias exists\nReturns true if the sound alias exists";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("stopLoopSound");
tmpDef.detail = "<entity> Entity StopLoopSound(): void";
tmpDef.documentation = "Stop a looping sound";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("stopSound");
tmpDef.detail = "<entity> Entity StopSound(): void";
tmpDef.documentation = "Stop all sounds on an entity. You must have a wait between Stopstrings() and Delete() or the sound will not stop";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("playSoundAtPos");
tmpDef.detail = "PlaySoundAtPos(<Vector3>: origin, <string>: sound): void";
tmpDef.documentation = "Plays a string at a world position";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setAC130Ambience");
tmpDef.detail = "SetAC130Ambience(<string>: ambience): void";
tmpDef.documentation = "Set the current ambience track for the ac130";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("spawnLoopSound");
tmpDef.detail = "SpawnLoopSound(<string>: sound, <Vector3>: origin): void";
tmpDef.documentation = "Spawns a loop sound at the given position(TBD)";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("placeSpawnPoint");
tmpDef.detail = "<entity> Entity PlaceSpawnPoint(): void";
tmpDef.documentation = "Raises a spawn point up to make sure it's not in the ground, then drops it back down onto the ground";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("positionWouldTelefrag");
tmpDef.detail = "PositionWouldTelefrag(<Vector3>: position): bool";
tmpDef.documentation = "Checks if the passed in origin would telefrag a player if another player was spawned there\nReturns true if the passed in origin would telefrag a player if another player was spawned there";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("spawn");
tmpDef.detail = "Spawn(<string>: classname, <Vector3>: origin): entity";
tmpDef.documentation = "Spawns a new entity\nReturns a reference to the new entity";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("spawn");
tmpDef.detail = "Spawn(<string>: classname, <Vector3>: origin, <int>: flags, <int>: radius, <int>: height): entity";
tmpDef.documentation = "Spawns a new entity\nReturns a reference to the new entity";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("spawnStruct");
tmpDef.detail = "SpawnStruct(): entity";
tmpDef.documentation = "Allocates a structure\nReturns a reference to the new structure as an Entity";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("spawnTurret");
tmpDef.detail = "SpawnTurret(<string>: classname, <Vector3>: origin, <string>: weapon): entity";
tmpDef.documentation = "Spawns a new turret\nReturns a reference to the new turret";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("spawnVehicle");
tmpDef.detail = "SpawnVehicle(<string>: model, <string>: targetname, <string>: vehicleType, <Vector3>: origin, <Vector3>: angles, <Entity>: owner): entity";
tmpDef.documentation = "Spawns a new vehicle\nReturns a reference to the new vehicle";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("spawn");
tmpDef.detail = "<entity> Entity Spawn(<Vector3>: origin, <Vector3>: angles): void";
tmpDef.documentation = "Spawns this player at the specified position as if they are respawning";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("spawnPlane");
tmpDef.detail = "SpawnPlane(<Entity>: owner, <string>: classname, <Vector3>: origin, <string>: friendlyIcon, <string>: enemyIcon): entity";
tmpDef.documentation = "Spawns a new plane entity\nReturns a reference to the new plane";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("spawnHelicopter");
tmpDef.detail = "SpawnHelicopter(<Entity>: owner, <Vector3>: pathStart, <Vector3>: forward, <string>: vehicle, <string>: model): entity";
tmpDef.documentation = "Spawns a new helicopter entity\nReturns a reference to the new helicopter";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("createAttractorEnt");
tmpDef.detail = "CreateAttractorEnt(<Entity>: entity, <int>: strength, <int>: range): entity";
tmpDef.documentation = "Creates a missile attractor on an enttiy\nReturns a reference to the new attractor";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("createAttractorOrigin");
tmpDef.detail = "CreateAttractorOrigin(<Vector3>: origin, <int>: strength, <int>: range): entity";
tmpDef.documentation = "Creates a missile attractor on a world position\nReturns a reference to the new attractor";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("createRepulsorEnt");
tmpDef.detail = "CreateRepulsorEnt(<Entity>: entity, <int>: strength, <int>: range): entity";
tmpDef.documentation = "Creates a missile repulsor on an entity\nReturns a reference to the new repulsor";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("createRepulsorOrigin");
tmpDef.detail = "CreateRepulsorOrigin(<Vector3>: origin, <int>: strength, <int>: range): entity";
tmpDef.documentation = "Creates a missile repulsor on a world position\nReturns a reference to the new repulsor";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getSubStr");
tmpDef.detail = "GetSubStr(<string>: text, <int>: startIndex, <int>: endIndex?): string";
tmpDef.documentation = "Gets the substring of characters >= startIndex and endIndex. endIndex is optional\nReturns the substring of characters >= startIndex and endIndex";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("isSubStr");
tmpDef.detail = "IsSubStr(<string>: text, <string>: subString): bool";
tmpDef.documentation = "Checks if subString is a substring of text. Case sensitive\nReturns true if the passed in subString is a substring of text";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("strTok");
tmpDef.detail = "StrTok(<string>: text, <string>: delim): array";
tmpDef.documentation = "Tokenizes 'text' by the delimiters 'delim'\nReturns the array of string tokens";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("toLower");
tmpDef.detail = "ToLower(<string>: text): string";
tmpDef.documentation = "Converts the passed in string to a lower case string\nReturns the passed in string in lower case";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("isEndStr");
tmpDef.detail = "IsEndStr(<string>: text, <string>: endString): bool";
tmpDef.documentation = "Checks if endString is the ending string of text. Case sensitive\nReturns true if the passed in endString is the ending string of text";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("striCmp");
tmpDef.detail = "StriCmp(<string>: str1, <string>: str2): bool";
tmpDef.documentation = "Compares two strings to see if they are the same\nReturns true if the two strings are equal";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("logPrint");
tmpDef.detail = "LogPrint(<string>: text): void";
tmpDef.documentation = "Prints to the server log file";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("logString");
tmpDef.detail = "LogString(<string>: text): void";
tmpDef.documentation = "Writes a string to the server log file";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("logString_0");
tmpDef.detail = "LogString_0(<string>: text): void";
tmpDef.documentation = "Writes a string to the server log file";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("resetTimeout");
tmpDef.detail = "ResetTimeout(): void";
tmpDef.documentation = "Resets the infinite loop check timer, to prevent an incorrect infinite loop error when a lot of script must be run";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setArchive");
tmpDef.detail = "SetArchive(): void";
tmpDef.documentation = "Depricated function, does nothing";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getAssignedTeam");
tmpDef.detail = "GetAssignedTeam(<Entity>: player): int";
tmpDef.documentation = "Gets the player's team as assigned by matchmaking\nReturns the player's assigned team. 0 = No Team, 1 = Axis, 2 = Allies, 3 = Spectator";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getTeamPlayersAlive");
tmpDef.detail = "GetTeamPlayersAlive(<string>: team): int";
tmpDef.documentation = "Gets the number of players still alive on a given team\nReturns the number of players still alive on the given team";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getTeamRadar");
tmpDef.detail = "GetTeamRadar(<string>: team): bool";
tmpDef.documentation = "Gets whether a team has radar or not\nReturns true if the given team has radar";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getTeamScore");
tmpDef.detail = "GetTeamScore(<string>: team): int";
tmpDef.documentation = "Get a team's score\nReturns the given team's score";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setTeamRadar");
tmpDef.detail = "SetTeamRadar(<string>: team, <bool>: availability): void";
tmpDef.documentation = "Set whether a team has radar or not";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setTeamScore");
tmpDef.detail = "SetTeamScore(<string>: team, <int>: score): void";
tmpDef.documentation = "Set a team's score";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setPlayerTeamRank");
tmpDef.detail = "SetPlayerTeamRank(<Entity>: player, <int>: clientID, <int>: rank): void";
tmpDef.documentation = "Sets a player's current team rank";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setTeamRadarStrength");
tmpDef.detail = "SetTeamRadarStrength(<string>: team, <int>: strength): void";
tmpDef.documentation = "Sets a team's radar strength";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getTeamRadarStrength");
tmpDef.detail = "GetTeamRadarStrength(<string>: team): int";
tmpDef.documentation = "Gets a team's radar strength\nReturns the team's radar strength";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("blockTeamRadar");
tmpDef.detail = "BlockTeamRadar(<string>: team): void";
tmpDef.documentation = "Blocks a team's radar";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("unBlockTeamRadar");
tmpDef.detail = "UnBlockTeamRadar(<string>: team): void";
tmpDef.documentation = "Unblocks a team's radar";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("isTeamRadarBlocked");
tmpDef.detail = "IsTeamRadarBlocked(<string>: team): bool";
tmpDef.documentation = "Checks if a team's radar is blocked\nReturns true if the team's radar is blocked";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("bulletTrace");
tmpDef.detail = "BulletTrace(<Vector3>: start, <Vector3>: end, <bool>: hitCharacters, <Entity>: ignore): array";
tmpDef.documentation = "Allows script to do a point trace with MASK_SHOT\nReturns hit position, hit entity, and hit surface normal in an array";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("bulletTracePassed");
tmpDef.detail = "BulletTracePassed(<Vector3>: start, <Vector3>: end, <bool>: hitCharacters, <Entity>: ignore?): bool";
tmpDef.documentation = "Allows script to do a point trace with MASK_SHOT\nReturns true if trace complete, else returns false";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("damageConeTrace");
tmpDef.detail = "<entity> Entity DamageConeTrace(<Vector3>: origin, <Entity>: ignore?): float";
tmpDef.documentation = "Determines how much the entity can be damaged from the given position, using the same check that is used by grenades. Performs multiple damage traces and returns an approximation to how much of the entity is damageable from the given point (between 0 and 1). In SinglePlayer this will always be 1 if the entity is partially damageable.\nReturns the approximation of how much of the entity is damageable as a float";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("physicsTrace");
tmpDef.detail = "PhysicsTrace(<Vector3>: start, <Vector3>: end): vector3";
tmpDef.documentation = "Physics trace, ignoring characters\nReturns the endpos vector of the trace";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("playerPhysicsTrace");
tmpDef.detail = "PlayerPhysicsTrace(<Vector3>: start, <Vector3>: end): vector3";
tmpDef.documentation = "Physics trace using player capsule size, ignoring characters\nReturns the endpos vector of the trace";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("sightConeTrace");
tmpDef.detail = "<entity> Entity SightConeTrace(<Vector3>: position, <Entity>: ignore?): float";
tmpDef.documentation = "Determines how much the entity can be seen from the given position, using the same check that is used by grenades. Performs multiple sight traces and returns an approximation to how much of the entity is visible from the given point (between 0 and 1). In SinglePlayer this will always be 1 if the entity is partially visible.\nReturns the approximation of how much of the entity is visible from the given position as a float";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("sightTracePassed");
tmpDef.detail = "SightTracePassed(<Vector3>: start, <Vector3>: end, <bool>: hitCharacters, <params>: Entity[]): bool";
tmpDef.documentation = "Allows script to do a point trace with MASK_OPAQUE_AI\nReturns true if trace complete, else returns false";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("spawnSightTrace");
tmpDef.detail = "SpawnSightTrace(<Entity>: spawnpoint, <Vector3>: origin, <Vector3>: end): float";
tmpDef.documentation = "Traces sight from a spawnpoint to a location to determine how much of the location can be seen from the given spawn\nReturns the value of how much the player can be seen from this spawn as a float";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("physicsTraceNormal");
tmpDef.detail = "PhysicsTraceNormal(<Vector3>: start, <Vector3>: end): parameter";
tmpDef.documentation = "Physics trace, ignoring characters\nReturns the hit normal of the trace";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("averageNormal");
tmpDef.detail = "AverageNormal(<Array>: normals): float";
tmpDef.documentation = "Calculates an average normal out of the given normals\nReturns the average normal of the given normals";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("worldPointInReticle_Circle");
tmpDef.detail = "<entity> Entity WorldPointInReticle_Circle(<Vector3>: origin, <int>: width, <int>: height): bool";
tmpDef.documentation = "Checks if the given origin is within the player's reticle circle\nReturns true if the given origin is within the player's reticle circle, false otherwise";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("clientClaimTrigger");
tmpDef.detail = "<entity> Entity ClientClaimTrigger(<Entity>: trigger): void";
tmpDef.documentation = "Claim a single user trigger";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("clientReleaseTrigger");
tmpDef.detail = "<entity> Entity ClientReleaseTrigger(<Entity>: trigger): void";
tmpDef.documentation = "Release a single user trigger";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("releaseClaimedTrigger");
tmpDef.detail = "<entity> Entity ReleaseClaimedTrigger(): void";
tmpDef.documentation = "Release a currently claimed trigger";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("clearTargetEntity");
tmpDef.detail = "<entity> Entity ClearTargetEntity(): void";
tmpDef.documentation = "Clears the current target for this turret";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getTurretTarget");
tmpDef.detail = "<entity> Entity GetTurretTarget(): entity";
tmpDef.documentation = "Gets the current target of this turret\nReturns the target entity of the turret";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("isFiringTurret");
tmpDef.detail = "<entity> Entity IsFiringTurret(): bool";
tmpDef.documentation = "Checks whether this turret is firing. Must be called on a turret\nReturns true if this turret is firing";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("restoreDefaultDropPitch");
tmpDef.detail = "<entity> Entity RestoreDefaultDropPitch(): void";
tmpDef.documentation = "Restores the pitch of the turret when it drops to the ground. Recalculates based on current collision environment. Use this if you move a turret and need to reconfigure.";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setAISpread");
tmpDef.detail = "<entity> Entity SetAISpread(<float>: spread): void";
tmpDef.documentation = "Sets the spread of this turret when used by an AI";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setBottomArc");
tmpDef.detail = "<entity> Entity SetBottomArc(<int>: angle): void";
tmpDef.documentation = "Set the amount that the turret can pivot down";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setConvergenceTime");
tmpDef.detail = "<entity> Entity SetConvergenceTime(<float>: time, <string>: type?): void";
tmpDef.documentation = "Sets the time that a turret takes to converge to it's target, on either the pitch or yaw planes";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setDefaultDropPitch");
tmpDef.detail = "<entity> Entity SetDefaultDropPitch(<float>: pitch): void";
tmpDef.documentation = "Set the default drop pitch that the turret attempts to return to when it is not in use";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setLeftArc");
tmpDef.detail = "<entity> Entity SetLeftArc(<int>: angle): void";
tmpDef.documentation = "Set the amount that the turret can move to the left";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setMode");
tmpDef.detail = "<entity> Entity SetMode(<string>: mode): void";
tmpDef.documentation = "Set the mode of a turret";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setPlayerSpread");
tmpDef.detail = "<entity> Entity SetPlayerSpread(<float>: spread): void";
tmpDef.documentation = "Set the spread of this turret when used by the player";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setRightArc");
tmpDef.detail = "<entity> Entity SetRightArc(<int>: angle): void";
tmpDef.documentation = "Set the amount that the turret can move to the right";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setSupressionTime");
tmpDef.detail = "<entity> Entity SetSupressionTime(<float>: time): void";
tmpDef.documentation = "Sets the time that a turret uses supressing fire after losing sight of an enemy";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setTargetEntity");
tmpDef.detail = "<entity> Entity SetTargetEntity(<Entity>: target): void";
tmpDef.documentation = "Sets the target of this turret";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setTopArc");
tmpDef.detail = "<entity> Entity SetTopArc(<int>: angle): void";
tmpDef.documentation = "Set the amount that the turret can pivot up";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setTurretTeam");
tmpDef.detail = "<entity> Entity SetTurretTeam(<string>: team): void";
tmpDef.documentation = "Sets the team of a turret";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("shootTurret");
tmpDef.detail = "<entity> Entity ShootTurret(): void";
tmpDef.documentation = "Shoots a turret";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("startFiring");
tmpDef.detail = "<entity> Entity StartFiring(): void";
tmpDef.documentation = "Starts a turret firing";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("stopFiring");
tmpDef.detail = "<entity> Entity StopFiring(): void";
tmpDef.documentation = "Stops a turret firing";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("turretFireDisable");
tmpDef.detail = "<entity> Entity TurretFireDisable(): void";
tmpDef.documentation = "Disable a turret's ability to fire";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("turretFireEnable");
tmpDef.detail = "<entity> Entity TurretFireEnable(): void";
tmpDef.documentation = "Enable a turret's ability to fire";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("startBarrelSpin");
tmpDef.detail = "<entity> Entity StartBarrelSpin(): void";
tmpDef.documentation = "Starts spinning the barrel of a turret";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("stopBarrelSpin");
tmpDef.detail = "<entity> Entity StopBarrelSpin(): void";
tmpDef.documentation = "Stops spinning the barrel of a turret";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getBarrelSpinRate");
tmpDef.detail = "<entity> Entity GetBarrelSpinRate(): float";
tmpDef.documentation = "Gets the rate at which this turret's barrel is spinning\nReturns the rate at which this turret's barrel is spinning";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("remoteControlTurret");
tmpDef.detail = "<entity> Entity RemoteControlTurret(<Entity>: turret): void";
tmpDef.documentation = "Sets this player to start controlling a turret. Any player input will be directed to the turret";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("remoteControlTurretOff");
tmpDef.detail = "<entity> Entity RemoteControlTurretOff(<Entity>: turret): void";
tmpDef.documentation = "Sets this player to no longer control a currently controlled turret";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getTurretOwner");
tmpDef.detail = "<entity> Entity GetTurretOwner(): entity";
tmpDef.documentation = "Gets the owner of this turret\nReturns the owner of this turret";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setSentryOwner");
tmpDef.detail = "<entity> Entity SetSentryOwner(<Entity>: owner): void";
tmpDef.documentation = "Sets the owner of this sentry";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setSentryCarrier");
tmpDef.detail = "<entity> Entity SetSentryCarrier(<Entity>: carrier): void";
tmpDef.documentation = "Sets the passed in player as the carrier of this sentry. This will cause the sentry to lock to the player for placement";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setTurretMinimapVisible");
tmpDef.detail = "<entity> Entity SetTurretMinimapVisible(<bool>: visible): void";
tmpDef.documentation = "Sets whether this turret is visible on the minimap or not";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("snapToTargetEntity");
tmpDef.detail = "<entity> Entity SnapToTargetEntity(): void";
tmpDef.documentation = "Snaps this turret to it's currently assigned target entity(TBD)";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setConvergenceHeightPercent");
tmpDef.detail = "<entity> Entity SetConvergenceHeightPercent(<float>: percent): void";
tmpDef.documentation = "Sets the percent that a turret converges to it's target based on height(TBD)";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("makeTurretSolid");
tmpDef.detail = "<entity> Entity MakeTurretSolid(): void";
tmpDef.documentation = "Makes this turret solid so that players can collide with it";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("makeTurretOperable");
tmpDef.detail = "<entity> Entity MakeTurretOperable(): void";
tmpDef.documentation = "Makes this turret operable by players or AI";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("makeTurretInOperable");
tmpDef.detail = "<entity> Entity MakeTurretInOperable(): void";
tmpDef.documentation = "Makes this turret inoperable";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setTurretAccuracy");
tmpDef.detail = "<entity> Entity SetTurretAccuracy(<float>: accuracy): void";
tmpDef.documentation = "Sets the accuracy of this turret while using it(TBD)";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setAutoRotationDelay");
tmpDef.detail = "<entity> Entity SetAutoRotationDelay(<float>: delay): void";
tmpDef.documentation = "Sets the delay on the auto rotation of this turret(TBD)";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setTurretModeChangeWait");
tmpDef.detail = "<entity> Entity SetTurretModeChangeWait(<bool>: wait): void";
tmpDef.documentation = "Sets whether this turret should wait for it's mode to change or not(TBD)";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("remoteControlVehicle");
tmpDef.detail = "<entity> Entity RemoteControlVehicle(<Entity>: vehicle): void";
tmpDef.documentation = "Sets this player to start controlling a vehicle. Any player input will be directed to the vehicle";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("remoteControlVehicleOff");
tmpDef.detail = "<entity> Entity RemoteControlVehicleOff(<Entity>: vehicle): void";
tmpDef.documentation = "Sets this player to stop controlling a vehicle";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("isFiringVehicleTurret");
tmpDef.detail = "<entity> Entity IsFiringVehicleTurret(): bool";
tmpDef.documentation = "Checks if this player is firing a vehicle's turret\nReturns true if the player is firing a vehicle's turret";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("driveVehicleAndControlTurret");
tmpDef.detail = "<entity> Entity DriveVehicleAndControlTurret(<Entity>: vehicle): void";
tmpDef.documentation = "Sets this player to start controlling a vehicle and be able to fire the vehicle's attached turret";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("driveVehicleAndControlTurretOff");
tmpDef.detail = "<entity> Entity DriveVehicleAndControlTurretOff(<Entity>: vehicle): void";
tmpDef.documentation = "Sets this player to stop controlling a vehicle and it's turret";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getMode");
tmpDef.detail = "<entity> Entity GetMode(): string";
tmpDef.documentation = "Gets the current mode of this turret\nReturns this turret's current mode";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("canSpawnTurret");
tmpDef.detail = "CanSpawnTurret(): bool";
tmpDef.documentation = "Checks if the game can spawn another turret\nReturns true if the game can spawn another turret";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("isDefined");
tmpDef.detail = "IsDefined(<Parameter>: variable): bool";
tmpDef.documentation = "Checks whether this entity/variable is defined\nReturns true if this entity/variable is defined";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("isString");
tmpDef.detail = "IsString(<Parameter>: variable): bool";
tmpDef.documentation = "Checks whether this entity/variable is a string\nReturns true if this entity/variable is a string";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getArrayKeys");
tmpDef.detail = "GetArrayKeys(<Array>: array): array";
tmpDef.documentation = "Gets an Array consisting of the keys in the input array\nReturns an array consisting of the keys in the given array";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getFirstArrayKey");
tmpDef.detail = "GetFirstArrayKey(<Array>: array): string";
tmpDef.documentation = "Gets the first array keyin an array(TBD)\nReturns the first array key  in the array";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getNextArrayKey");
tmpDef.detail = "GetNextArrayKey(<Array>: array, <int>: index): string";
tmpDef.documentation = "Gets the next array key after the given index in an array(TBD)\nReturns the next array key after the given index in the array";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("sortByDistance");
tmpDef.detail = "SortByDistance(<Array>: array, <Vector3>: position): array";
tmpDef.documentation = "Sorts the given array in accordance to distance from the given position\nReturns the newly sorted array";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("anglesToForward");
tmpDef.detail = "AnglesToForward(<Vector3>: angles): vector3";
tmpDef.documentation = "Calculates the forward vector corresponding to a set of angles\nReturns the forward vector corresponding to a set of angles";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("anglesToRight");
tmpDef.detail = "AnglesToRight(<Vector3>: angles): vector3";
tmpDef.documentation = "Calculates the right vector corresponding to a set of angles\nReturns the right vector corresponding to a set of angles";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("anglesToUp");
tmpDef.detail = "AnglesToUp(<Vector3>: angles): vector3";
tmpDef.documentation = "Calculates the up vector corresponding to a set of angles\nReturns the up vector corresponding to a set of angles";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("closer");
tmpDef.detail = "Closer(<Vector3>: reference, <Vector3>: pointA, <Vector3>: pointB): bool";
tmpDef.documentation = "Tests which of two points is the closest\nReturns true if pointA is closer to the reference than pointB";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("combineAngles");
tmpDef.detail = "CombineAngles(<Vector3>: anglesA, <Vector3>: anglesB): vector3";
tmpDef.documentation = "Reorients anglesB to anglesA\nReturns anglesB reoriented by anglesA";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("distance");
tmpDef.detail = "Distance(<Vector3>: pointA, <Vector3>: pointB): float";
tmpDef.documentation = "Calculates the distance between two points\nReturns the distance between the two points";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("distance2D");
tmpDef.detail = "Distance2D(<Vector3>: pointA, <Vector3>: pointB): float";
tmpDef.documentation = "Calculates the distance between two points, ignores height difference\nReturns the distance between the two points, ignoring height difference";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("distanceSquared");
tmpDef.detail = "DistanceSquared(<Vector3>: pointA, <Vector3>: pointB): float";
tmpDef.documentation = "Calculates the squared distance between two points. This is cheaper than the actual distance as it doesn't involve a square root\nReturns the squared distance between the two points";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("length");
tmpDef.detail = "Length(<Vector3>: vector): float";
tmpDef.documentation = "Calculates the length of the given vector\nReturns the length of the given vector";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("lengthSquared");
tmpDef.detail = "LengthSquared(<Vector3>: vector): float";
tmpDef.documentation = "Calculates the squared length for the given vector. This is cheaper than the actual vector length as it doesn't involve a square root\nReturns the squared length of the given vector";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("vectorDot");
tmpDef.detail = "VectorDot(<Vector3>: pointA, <Vector3>: pointB): float";
tmpDef.documentation = "Calculates the dot product of two vectors\nReturns the dot product of the two vectors";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("vectorLerp");
tmpDef.detail = "VectorLerp(<Vector3>: from, <Vector3>: to, <float>: fraction): vector3";
tmpDef.documentation = "Linear interpolates between two vectors\nReturns the current interpolated position at fraction";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("vectorNormalize");
tmpDef.detail = "VectorNormalize(<Vector3>: vector): vector3";
tmpDef.documentation = "Calculates a normalized copy of this vector\nReturns the normalized copy of the given vector";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("vectorToAngles");
tmpDef.detail = "VectorToAngles(<Vector3>: vector): vector3";
tmpDef.documentation = "Calculates a set of angles corresponding to the given vector\nReturns the angles corresponding to the given vector";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("vectorToYaw");
tmpDef.detail = "VectorToYaw(<Vector3>: vector): float";
tmpDef.documentation = "Calculates a yaw value corresponding to the given vector\nReturns the angles corresponding to the given vector";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getPointInBounds");
tmpDef.detail = "<entity> Entity GetPointInBounds(<Vector3>: point): vector3";
tmpDef.documentation = "Gets the closest point in bounds of the entity from the passed in position\nReturns the closest point in bounds from the given position";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getGroundPosition");
tmpDef.detail = "GetGroundPosition(<Vector3>: origin, <float>: radius, <float>: traceDistance?, <float>: traceHeight?): vector3";
tmpDef.documentation = "Gets the normal ground position of the given position\nReturns the ground position at the given coordinates";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("averagePoint");
tmpDef.detail = "AveragePoint(<Array>: points): vector3";
tmpDef.documentation = "Calculates an average point out of the given points\nReturns the average point of the given points";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("disableGrenadeTouchDamage");
tmpDef.detail = "<entity> Entity DisableGrenadeTouchDamage(): void";
tmpDef.documentation = "Disable grenade damage for damage triggers";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("enableGrenadeTouchDamage");
tmpDef.detail = "<entity> Entity EnableGrenadeTouchDamage(): void";
tmpDef.documentation = "Enable grenade damage for damage triggers";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getAmmoCount");
tmpDef.detail = "<entity> Entity GetAmmoCount(<string>: weapon): int";
tmpDef.documentation = "Get the remaining ammo\nReturns the remaining ammo in the given weapon";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getWeaponModel");
tmpDef.detail = "GetWeaponModel(<string>: name?): int";
tmpDef.documentation = "Get the name of the weapon model used for the given weapon\nReturns the name of the weapon model used for the given weapon";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getWeaponHideTags");
tmpDef.detail = "GetWeaponHideTags(<string>: weapon, <int>: variant?): int";
tmpDef.documentation = "Get the names of the weapon's current hide tags.\nReturns the names of the weapon's current hide tags";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("isWeaponClipOnly");
tmpDef.detail = "IsWeaponClipOnly(<string>: weapon): bool";
tmpDef.documentation = "Checks if the weapon is clip only\nReturns true if the weapon is clip only";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("isWeaponDetonationTimed");
tmpDef.detail = "IsWeaponDetonationTimed(<string>: weapon): bool";
tmpDef.documentation = "Checks if the weapon has timed detonation (e.g. frag/smoke grenades)\nReturns true if the weapon has a timed detonation";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("itemWeaponSetAmmo");
tmpDef.detail = "<entity> Entity ItemWeaponSetAmmo(<int>: clipAmmo, <int>: reserveAmmo, <int>: altWeapon?): void";
tmpDef.documentation = "Sets the ammo amount for a weapon item entity (lying on the ground)";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("magicBullet");
tmpDef.detail = "MagicBullet(<string>: weapon, <Vector3>: start, <Vector3>: end, <Entity>: owner?): entity";
tmpDef.documentation = "Fire a 'magic bullet', from the source location towards the destination";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("weaponAltWeaponName");
tmpDef.detail = "WeaponAltWeaponName(<string>: weapon): string";
tmpDef.documentation = "Gets the name of the weapon this weapon has for its alternate mode. Subsequent alternate weapons can be retrieved by calling the function again with the new weapon names until it returns the original weapon.\nReturns the name of the weapon this weapon has for its alternate mode. Returns 'none' if there is no alt fire";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("weaponClass");
tmpDef.detail = "WeaponClass(<string>: weapon): string";
tmpDef.documentation = "Gets the class of weapon that this weapon is, such as 'rifle', 'smg', 'spread', 'pistol', etc.\nReturns the class of weapon that the weapon is";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("weaponClipSize");
tmpDef.detail = "WeaponClipSize(<string>: weapon): int";
tmpDef.documentation = "Gets the weapon clip size for the given weapon\nReturns the weapon clip size of the given weapon";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("weaponFireTime");
tmpDef.detail = "WeaponFireTime(<string>: weapon): float";
tmpDef.documentation = "Get the weapon fire time for the given weapon\nReturns the weapon fire time for the given weapon";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("weaponInventoryType");
tmpDef.detail = "WeaponInventoryType(<string>: weapon): string";
tmpDef.documentation = "Gets the way this weapon is stored, such as 'altmode', 'item', 'offhand', or 'primary'\nReturns the way this weapon is stored";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("weaponIsBoltAction");
tmpDef.detail = "WeaponIsBoltAction(<string>: weapon): bool";
tmpDef.documentation = "Get whether this weapon has a bolt action\nReturns true if the weapon has a bolt action";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("weaponIsSemiAutomatic");
tmpDef.detail = "WeaponIsSemiAutomatic(<string>: weapon): bool";
tmpDef.documentation = "Get whether this weapon is semi automatic\nReturns true if the weapon is semi automatic";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("weaponMaxAmmo");
tmpDef.detail = "WeaponMaxAmmo(<string>: weapon): int";
tmpDef.documentation = "Gets the max amount of ammo this weapon is meant to hold. Stockpile only, not the clip\nReturns the max amount of ammo this weapon is meant to hold";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("weaponStartAmmo");
tmpDef.detail = "WeaponStartAmmo(<string>: weapon): int";
tmpDef.documentation = "Gets the amount of ammo this weapon is meant to start with when first given to a player\nReturns the amount of ammo this weapon is meant to start with when first given to a player";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("weaponType");
tmpDef.detail = "WeaponType(<string>: weapon): string";
tmpDef.documentation = "Gets the type of weapon that this weapon is, such as 'bullet', 'projectile', or 'grenade'\nReturns the type of weapon that this weapon is";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("kC_RegWeaponForFxRemoval");
tmpDef.detail = "<entity> Entity KC_RegWeaponForFxRemoval(<string>: weapon): void";
tmpDef.documentation = "TBD";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getWeaponHideTags");
tmpDef.detail = "GetWeaponHideTags(<string>: weapon): array";
tmpDef.documentation = "Get the hide tags of the weapon model used for the given weapon(TBD)\nReturns the names of the hide tags of the weapon model used for the given weapon";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("weaponIsAuto");
tmpDef.detail = "WeaponIsAuto(<string>: weapon): bool";
tmpDef.documentation = "Get whether this weapon is fully automatic\nReturns true if the weapon is fully automatic";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("weaponInheritsPerks");
tmpDef.detail = "WeaponInheritsPerks(<string>: weapon): bool";
tmpDef.documentation = "Get whether this weapon inherits a perk(TBD)\nReturns true if the weapon has a perk";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("weaponBurstCount");
tmpDef.detail = "WeaponBurstCount(<string>: weapon): int";
tmpDef.documentation = "Gets the burst count of a weapon\nReturns the burst count of the weapon";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("weaponHasThermalScope");
tmpDef.detail = "WeaponHasThermalScope(<string>: weapon): bool";
tmpDef.documentation = "Get whether this weapon has a thermal scope\nReturns true if the weapon has a thermal scope";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getWeaponFlashTag");
tmpDef.detail = "GetWeaponFlashTag(<string>: weapon): string";
tmpDef.documentation = "Get the name of the weapon's flash tag\nReturns the name of the weapon's flash tag";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("attachPath");
tmpDef.detail = "<entity> Vehicle AttachPath(<Entity>: node): void";
tmpDef.documentation = "Attaches this vehicle to the given path";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("clearGoalYaw");
tmpDef.detail = "<entity> Vehicle ClearGoalYaw(): void";
tmpDef.documentation = "Clear the goal yaw for this direction";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("clearLookAtEnt");
tmpDef.detail = "<entity> Vehicle ClearLookAtEnt(): void";
tmpDef.documentation = "Clear the entity the vehicle is orienting towards";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("clearTargetYaw");
tmpDef.detail = "<entity> Vehicle ClearTargetYaw(): void";
tmpDef.documentation = "Clear the target yaw direction for this vehicle";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("clearTurretTarget");
tmpDef.detail = "<entity> Vehicle ClearTurretTarget(): void";
tmpDef.documentation = "Clear the target for the vehicle turret";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("fireWeapon");
tmpDef.detail = "<entity> Vehicle FireWeapon(<string>: barrelTag?, <Entity>: targetEnt?, <Vector3>: targetOffset?): void";
tmpDef.documentation = "Fire the vehicle's weapon";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("freeVehicle");
tmpDef.detail = "<entity> Vehicle FreeVehicle(): void";
tmpDef.documentation = "Frees this vehicle instance";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getAttachPos");
tmpDef.detail = "<entity> Vehicle GetAttachPos(<Entity>: node): entity";
tmpDef.documentation = "Gets the origin and angles if the vehicle were to be attached to the path. The origin and angles are returned as a ScriptArray of size 2. Origin is 1st and angles is 2nd.\nReturns the origin and angles if the vehicle were to be attached to the path.";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getGoalSpeedMPH");
tmpDef.detail = "<entity> Vehicle GetGoalSpeedMPH(): float";
tmpDef.documentation = "Gets the goal speed in miles per hour\nReturns the goal speed in miles per hour";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getSpeed");
tmpDef.detail = "<entity> Vehicle GetSpeed(): int";
tmpDef.documentation = "Gets the current speed in inches per second\nReturns the current speed in inches per second";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getVehicleOwner");
tmpDef.detail = "<entity> Vehicle GetVehicleOwner(): entity";
tmpDef.documentation = "Gets the owner of this particular vehicle\nReturns the owner of this particualr vehicle";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getWheelSurface");
tmpDef.detail = "<entity> Vehicle GetWheelSurface(<string>: wheel): string";
tmpDef.documentation = "Gets the surface type of the given wheel\nReturns the surface type of the given wheel as a string";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("isTurretReady");
tmpDef.detail = "<entity> Vehicle IsTurretReady(): bool";
tmpDef.documentation = "Query whether this vehicle's turret is ready for firing\nReturns true if this vehicle's turret is ready to fire, false otherwise.";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("joltBody");
tmpDef.detail = "<entity> Vehicle JoltBody(<Vector3>: joltPosition, <float>: intensity, <float>: fraction?, <float>: deceleration?): void";
tmpDef.documentation = "Jolts this vehicle";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("resumeSpeed");
tmpDef.detail = "<entity> Vehicle ResumeSpeed(<float>: acceleration): void";
tmpDef.documentation = "Sets the vehile to resume it's path speed";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setAcceleration");
tmpDef.detail = "<entity> Vehicle SetAcceleration(<float>: acceleration): void";
tmpDef.documentation = "Sets the acceleration for this vehicle";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setAirResistance");
tmpDef.detail = "<entity> Vehicle SetAirResistance(<float>: maxResistanceSpeed): void";
tmpDef.documentation = "Sets the speed at which air resistance maxes out";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setDeceleration");
tmpDef.detail = "<entity> Vehicle SetDeceleration(<float>: deceleration): void";
tmpDef.documentation = "Sets the deceleration for this vehicle";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setGoalYaw");
tmpDef.detail = "<entity> Vehicle SetGoalYaw(<float>: yaw): void";
tmpDef.documentation = "Set the goal yaw direction for this vehicle.Goal yaw is ignored if vehicle doesn't stop at goal. Lookat entity has priority over goal yaw";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setHoverParams");
tmpDef.detail = "<entity> Vehicle SetHoverParams(<int>: radius, <float>: speed, <float>: accel): void";
tmpDef.documentation = "Set the hovering parameters";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setJitterParams");
tmpDef.detail = "<entity> Vehicle SetJitterParams(<Vector3>: range, <float>: minPeriod, <float>: maxPeriod): void";
tmpDef.documentation = "Set the jitter parameters. Set everything to 0 to stop jittering. Vehicle ignores jitter parameters when on ground";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setLookAtEnt");
tmpDef.detail = "<entity> Vehicle SetLookAtEnt(<Entity>: entity): void";
tmpDef.documentation = "Set the entity this vehicle will orient towards";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setMaxPitchRoll");
tmpDef.detail = "<entity> Vehicle SetMaxPitchRoll(<float>: pitch, <float>: roll): void";
tmpDef.documentation = "Sets max pitch and roll angle for this vehicle.";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setNearGoalNotifyDist");
tmpDef.detail = "<entity> Vehicle SetNearGoalNotifyDist(<float>: dist): void";
tmpDef.documentation = "Set distance near goal at which near_goal notification should be sent once.";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setSpeed");
tmpDef.detail = "<entity> Vehicle SetSpeed(<int>: speed, <int>: acceleration?, <int>: deceleration?): void";
tmpDef.documentation = "Sets the speed and acceleration for this vehicle.";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setSpeedImmediate");
tmpDef.detail = "<entity> Vehicle SetSpeedImmediate(<int>: speed, <int>: acceleration?, <int>: deceleration?): void";
tmpDef.documentation = "Sets the speed and acceleration for this vehicle instantaneously. Direction will be toward the goal direction if there is a goal, otherwise the current direction.";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setSwitchNode");
tmpDef.detail = "<entity> Vehicle SetSwitchNode(<Entity>: sourceNode, <Entity>: destNode): void";
tmpDef.documentation = "Sets a switch node for this vehicle";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setTargetYaw");
tmpDef.detail = "<entity> Vehicle SetTargetYaw(<float>: yaw): void";
tmpDef.documentation = "Set the target yaw direction for this vehicle. Goal yaw has priority over target yaw.";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setTurningAbility");
tmpDef.detail = "<entity> Vehicle SetTurningAbility(<float>: ability): void";
tmpDef.documentation = "If this is higher, helicopters can make sharper turns to match goal positions better.";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setTurretTargetEnt");
tmpDef.detail = "<entity> Vehicle SetTurretTargetEnt(<Entity>: target, <Vector3>: offset?): void";
tmpDef.documentation = "Set the target entity for this vehicle turret.";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setTurretTargetVec");
tmpDef.detail = "<entity> Vehicle SetTurretTargetVec(<Vector3>: target): void";
tmpDef.documentation = "Set the target position for this vehicle turret.";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setVehGoalPos");
tmpDef.detail = "<entity> Vehicle SetVehGoalPos(<Vector3>: goal, <bool>: stopAtGoal): void";
tmpDef.documentation = "Set the target position for this vehicle";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setVehicleLookAtText");
tmpDef.detail = "<entity> Vehicle SetVehicleLookAtText(<string>: text1, <string>: text2?): void";
tmpDef.documentation = "Set look at text for the vehicle";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setVehicleTeam");
tmpDef.detail = "<entity> Vehicle SetVehicleTeam(<string>: team): void";
tmpDef.documentation = "Set which team a vehicle is on";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setVehWeapon");
tmpDef.detail = "<entity> Vehicle SetVehWeapon(<string>: weapon): void";
tmpDef.documentation = "Set the vehicle's weapon";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setWaitSpeed");
tmpDef.detail = "<entity> Vehicle SetWaitSpeed(<int>: speed): void";
tmpDef.documentation = "Sets a the wait speed for for this vehicle in miles per hour.";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setYawSpeed");
tmpDef.detail = "<entity> Vehicle SetYawSpeed(<int>: speed, <int>: acceleration, <int>: deceleration?, <float>: overshootPercent?): void";
tmpDef.documentation = "Sets the yaw speed for this vehicle";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("setYawSpeedByName");
tmpDef.detail = "<entity> Vehicle SetYawSpeedByName(<string>: name): void";
tmpDef.documentation = "Sets the yaw speed for this vehicle using a name. Possible names are 'instant', 'faster', 'fast', and 'slow'";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("startPath");
tmpDef.detail = "<entity> Vehicle StartPath(<Entity>: node): void";
tmpDef.documentation = "Starts the vehicle following this path";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("heliSetAI");
tmpDef.detail = "<entity> Vehicle HeliSetAI(): void";
tmpDef.documentation = "Set a helicopter's AI(TBD)";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("canTurretGetTargetPoint");
tmpDef.detail = "<entity> Vehicle CanTurretGetTargetPoint(<Vector3>: target): bool";
tmpDef.documentation = "Checks whether a vehicle's turret can target a point\nReturns true if this vehicle's turret can get the point, false otherwise.";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("vehicleTurretControlOn");
tmpDef.detail = "<entity> Vehicle VehicleTurretControlOn(<Entity>: player): void";
tmpDef.documentation = "Sets a player to control a vehicle's turret";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("vehicleTurretControlOff");
tmpDef.detail = "<entity> Vehicle VehicleTurretControlOff(<Entity>: player): void";
tmpDef.documentation = "Sets a player to stop controlling a vehicle's turret";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("vehicle_Teleport");
tmpDef.detail = "<entity> Vehicle Vehicle_Teleport(<Vector3>: pos): void";
tmpDef.documentation = "Teleports a vehicle to a location";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getAttachPos");
tmpDef.detail = "<entity> Vehicle GetAttachPos(): vector3";
tmpDef.documentation = "Gets the current position of the vehicle on it's attach path(TBD)";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("vehicle_FinishDamage");
tmpDef.detail = "<entity> Vehicle Vehicle_FinishDamage(<Entity>: inflictor, <Entity>: attacker, <int>: damage, <int>: damageFlags, <string>: meansOfDeath, <string>: weapon, <Vector3>: point, <Vector3>: dir, <string>: hitLoc, <int>: timeOffset, <int>: modelIndex, <string>: partName): void";
tmpDef.documentation = "Invokes damage on a vehicle";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("rotateYaw");
tmpDef.detail = "<entity> Vehicle RotateYaw(<int>: yaw, <int>: time, <int>: acceleration, <int>: deceleration): void";
tmpDef.documentation = "Rotates the yaw of a vehicle";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("vehicle_GetVelocity");
tmpDef.detail = "<entity> Vehicle Vehicle_GetVelocity(): vector3";
tmpDef.documentation = "Gets the current velocity of a vehicle\nReturns the current velocity of the vehicle as a Vector3";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getBodyVelocity");
tmpDef.detail = "<entity> Vehicle GetBodyVelocity(): vector3";
tmpDef.documentation = "Gets the current velocity of a vehicle's body\nReturns the current velocity of this vehicle's body as a Vector3";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getSteering");
tmpDef.detail = "<entity> Vehicle GetSteering(): float";
tmpDef.documentation = "Gets the current steering fraction of a vehicle\nReturns the current steering fraction of this vehicle as a float";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("getThrottle");
tmpDef.detail = "<entity> Vehicle GetThrottle(): float";
tmpDef.documentation = "Gets the current throttle value of a vehicle\nReturns the current throttle value of this vehicle as a float";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("turnEngineOff");
tmpDef.detail = "<entity> Vehicle TurnEngineOff(): void";
tmpDef.documentation = "Turns the engine off in a vehicle";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("turnEngineOn");
tmpDef.detail = "<entity> Vehicle TurnEngineOn(): void";
tmpDef.documentation = "Turns the engine on in a vehicle";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("driveTo");
tmpDef.detail = "<entity> Vehicle DriveTo(<Vector3>: position, <float>: speed): void";
tmpDef.documentation = "Initiates a vehicle to drive to a specified location at a specified speed";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("doSpawn");
tmpDef.detail = "<entity> Vehicle DoSpawn(<string>: targetName): void";
tmpDef.documentation = "Spawns an actor from an actor spawner, if possible";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("isPhysVeh");
tmpDef.detail = "<entity> Vehicle IsPhysVeh(): bool";
tmpDef.documentation = "Checks if a vehicle is a physics-based vehicle\nReturns true if the given vehicle is a physics-based vehicle, false otherwise.";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("phys_Crash");
tmpDef.detail = "<entity> Vehicle Phys_Crash(): void";
tmpDef.documentation = "Crashes a physics-based vehicle";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("phys_Launch");
tmpDef.detail = "<entity> Vehicle Phys_Launch(): void";
tmpDef.documentation = "Launches a physics-based vehicle";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("phys_DisableCrashing");
tmpDef.detail = "<entity> Vehicle Phys_DisableCrashing(): void";
tmpDef.documentation = "Disables crashing for a physics-based vehicle";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("phys_EnableCrashing");
tmpDef.detail = "<entity> Vehicle Phys_EnableCrashing(): void";
tmpDef.documentation = "Enables crashing for a physics-based vehicle";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("phys_SetSpeed");
tmpDef.detail = "<entity> Vehicle Phys_SetSpeed(<float>: speed): void";
tmpDef.documentation = "Sets the speed of a physics-based vehicle";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("phys_SetConveyerBelt");
tmpDef.detail = "<entity> Vehicle Phys_SetConveyerBelt(<float>: speed): void";
tmpDef.documentation = "Sets the conveyer belt speed of a physics-based vehicle(TBD)";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);

tmpDef = new CompletionItem("freeHelicopter");
tmpDef.detail = "<entity> Vehicle FreeHelicopter(): void";
tmpDef.documentation = "Frees this helicopter instance";
tmpDef.kind = CompletionItemKind.Function;
gsc_functions.push(tmpDef);