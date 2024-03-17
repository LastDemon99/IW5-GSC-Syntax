import { Def_Function } from './struct';

export var defs = new Array<Def_Function>();
export var gsc_functions = new Array<Def_Function>();
var tmpDef;

tmpDef = new Def_Function;
tmpDef.name = "if";
defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "else";
defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "switch";
defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "case";
defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "while";
defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "for";
defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "foreach";
defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "return";
defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "break";
defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "continue";
defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "wait";
defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "true";
defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "false";
defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "undefined";
defs.push(tmpDef);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Functions declaration port from:: https://github.com/Slvr11/InfinityScript/blob/main/ScriptProcessor/GSCFunctions.cs //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

tmpDef = new Def_Function;
tmpDef.name = "AnimHasNoteTrack";
tmpDef.decl = "AnimHasNoteTrack(<string>: animation, <string>: noteTrackName): bool";
tmpDef.desc = "Queries the given animation for a note track.";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetAngleDelta";
tmpDef.decl = "GetAngleDelta(<string>: animation, <float>: startTime?, <float>: endTime?): float";
tmpDef.desc = "Gets the rotation difference in an Animation.\nReturns the rotation difference in the given animation.";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetAnimLength";
tmpDef.decl = "GetAnimLength(<string>: primitiveAnimation): float";
tmpDef.desc = "Gets the length of an Animation.\nReturns the length of the given animation.";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetMoveDelta";
tmpDef.decl = "GetMoveDelta(<string>: animation, <float>: startTime?, <float>: endTime?): float";
tmpDef.desc = "Gets the movement vector difference in an Animation.\nReturns the movement vector difference of the given animation.";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetNoteTrackTimes";
tmpDef.decl = "GetNoteTrackTimes(<string>: animation, <string>: noteTrackName): array";
tmpDef.desc = "Gets an array of the times during an Animation that the given NoteTrack occurs.\nReturns an array containing the times where the NoteTrack occurs.";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetNumParts";
tmpDef.decl = "GetNumParts(<string>: model): int";
tmpDef.desc = "Gets the number of bones in an xModel.\nReturns the amount of bones within an xModel.";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetPartName";
tmpDef.decl = "GetPartName(<string>: model, <int>: index): string";
tmpDef.desc = "Gets the name of a part of a model.\nReturns the name of the indexth bone.";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetTagAngles";
tmpDef.decl = "<entity> Entity GetTagAngles(<string>: tagName): vector3";
tmpDef.desc = "Gets the angles of a particular tag of this model.\nReturns the angle of the given tag";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetTagOrigin";
tmpDef.decl = "<entity> Entity GetTagOrigin(<string>: tagName): vector3";
tmpDef.desc = "Gets the origin of a particular tag of this model.\nReturns the origin of the given tag";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "ScriptModelPlayAnim";
tmpDef.decl = "<entity> Entity ScriptModelPlayAnim(<string>: animation): void";
tmpDef.desc = "Plays an Animation on this entity";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "ScriptModelClearAnim";
tmpDef.decl = "<entity> Entity ScriptModelClearAnim(): void";
tmpDef.desc = "Clears this entity's current animation";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetCorpseAnim";
tmpDef.decl = "<entity> Entity GetCorpseAnim(): string";
tmpDef.desc = "Gets the animation of a corpse\nReturns the name of the anim used by this corpse";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "AllClientsPrint";
tmpDef.decl = "AllClientsPrint(<string>: message): void";
tmpDef.desc = "Prints the given string to all clients.";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "AllowSpectateTeam";
tmpDef.decl = "<entity> Entref AllowSpectateTeam(<string>: team, <bool>: canSpectate): void";
tmpDef.desc = "Sets whether the player can spectate the given team.";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "Announcement";
tmpDef.decl = "Announcement(<string>: message): void";
tmpDef.desc = "Sends an announcement to all clients.";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "BeginLocationSelection";
tmpDef.decl = "<entity> Entref BeginLocationSelection(<string>: locationSelector): void";
tmpDef.desc = "Causes the player to begin selecting a location. A map HUD element should be visible for them to see where they're selecting.";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "BeginLocationSelection";
tmpDef.decl = "<entity> Entref BeginLocationSelection(<string>: locationSelector, <bool>: directionality, <int>: selectorSize): void";
tmpDef.desc = "Causes the player to begin selecting a location. A map HUD element should be visible for them to see where they're selecting.";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "ClientAnnouncement";
tmpDef.decl = "<entity> Entref ClientAnnouncement(<string>: message): void";
tmpDef.desc = "Sends an announcement to a single client.";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "ClientPrint";
tmpDef.decl = "<entity> Entref ClientPrint(<string>: message): void";
tmpDef.desc = "Print a localized version of this string for a given client.";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "ClonePlayer";
tmpDef.decl = "<entity> Entref ClonePlayer(<int>: duration?): entity";
tmpDef.desc = "Clone the player's model for death animations.\nReturns the cloned player model as an Entity";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "DisableWeapons";
tmpDef.decl = "<entity> Entref DisableWeapons(): void";
tmpDef.desc = "Disable the player's weapon.";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "DropItem";
tmpDef.decl = "<entity> Entref DropItem(<string>: itemName): entity";
tmpDef.desc = "Drop an item with the given item name.\nReturns the dropped item as an Entity";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "EnableWeapons";
tmpDef.decl = "<entity> Entref EnableWeapons(): void";
tmpDef.desc = "Enable the player's weapon.";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "EndLocationSelection";
tmpDef.decl = "<entity> Entref EndLocationSelection(): void";
tmpDef.desc = "Causes the player to leave location selection mode.";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetViewmodel";
tmpDef.decl = "<entity> Entref GetViewmodel(): string";
tmpDef.desc = "Get the viewmodel name for the given player.\nReturns the model name of the given player's viewmodel";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "IsMantling";
tmpDef.decl = "<entity> Entref IsMantling(): bool";
tmpDef.desc = "Returns true if the player is mantling, false otherwise.\nReturns a bool of whether the player is mantling";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "IsOnLadder";
tmpDef.decl = "<entity> Entref IsOnLadder(): bool";
tmpDef.desc = "Returns true if the player is on a ladder, false otherwise.\nReturns a bool of whether the player is on a ladder or not";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "IsPlayerNumber";
tmpDef.decl = "<entity> Entity IsPlayerNumber(<int>: number): bool";
tmpDef.desc = "Returns true if the given int is a valid client number.\nReturns a bool of whether the int is a valid client number or not";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "IsRagdoll";
tmpDef.decl = "<entity> Entref IsRagdoll(): bool";
tmpDef.desc = "Returns true if the entity is a ragdoll body, false otherwise.\nReturns a bool of whether the given entity is a ragdoll body or not";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "IsTalking";
tmpDef.decl = "<entity> Entref IsTalking(): bool";
tmpDef.desc = "Returns true if the player is talking via voice chat.\nReturns a bool of whether the given player is talking or not via voice chat";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "Kick";
tmpDef.decl = "<entity> Entref Kick(): void";
tmpDef.desc = "Kicks the specified player.";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "MakeDvarServerInfo";
tmpDef.decl = "MakeDvarServerInfo(<string>: dvar, <Parameter>: value): void";
tmpDef.desc = "Flags a Dvar with the DVAR_CODINFO flag.";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SayAll";
tmpDef.decl = "<entity> Entref SayAll(<string>: message): void";
tmpDef.desc = "Write a client chat message from this client to everybody.";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SayTeam";
tmpDef.decl = "<entity> Entref SayTeam(<string>: message): void";
tmpDef.desc = "Write a client chat message from this client to everybody on their team.";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetRank";
tmpDef.decl = "<entity> Entref SetRank(<int>: rank, <int>: prestige?): void";
tmpDef.desc = "Sets the player's rank and prestige level.";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetSpawnWeapon";
tmpDef.decl = "<entity> Entref SetSpawnWeapon(<string>: weapon): void";
tmpDef.desc = "Sets the weapon that this player will spawn with.";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetTeamForTrigger";
tmpDef.decl = "SetTeamForTrigger(<Entity>: trigger, <string>: team): void";
tmpDef.desc = "Set the team that this trigger will react to";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "ShowScoreBoard";
tmpDef.decl = "<entity> Entref ShowScoreBoard(): void";
tmpDef.desc = "Updates the scoreboard data on a given client.";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "StartRagdoll";
tmpDef.decl = "<entity> Entity StartRagdoll(): void";
tmpDef.desc = "Begin ragdoll physics for this entity. Does nothing if the entity is already a ragdoll.";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "Suicide";
tmpDef.decl = "<entity> Entref Suicide(): void";
tmpDef.desc = "Kills the player immediately as a suicide.";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "UpdateDMScores";
tmpDef.decl = "<entity> Entref UpdateDMScores(): void";
tmpDef.desc = "Updates the client's knowledge of scores for theirself and the (next) best player in the game. For use in Free-For-All.";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "UpdateScores";
tmpDef.decl = "<entity> Entref UpdateScores(): void";
tmpDef.desc = "Updates the client's knowledge of team scores.";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "FinishPlayerDamage";
tmpDef.decl = "<entity> Entref FinishPlayerDamage(<Entity>: inflictor, <Entity>: attacker, <int>: damage, <int>: damageFlags, <string>: meansOfDeath, <string>: weapon, <Vector3>: point, <Vector3>: direction, <string>: hitLocation, <float>: offsetTime): void";
tmpDef.desc = "Does damage to the player";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GlassRadiusDamage";
tmpDef.decl = "GlassRadiusDamage(<Vector3>: origin, <int>: range, <int>: maxDamage, <int>: minDamage, <Entity>: attacker?): void";
tmpDef.desc = "TBD";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "RadiusDamage";
tmpDef.decl = "RadiusDamage(<Vector3>: origin, <int>: range, <int>: maxDamage, <int>: minDamage, <Entity>: attacker?, <string>: mod?, <string>: weapon?): void";
tmpDef.desc = "Does damage to all damageable objects within a given radius. The amount of damage is linear according to how close the object is to the radius.";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "RadiusDamage";
tmpDef.decl = "<entity> Entity RadiusDamage(<Vector3>: origin, <int>: range, <int>: maxDamage, <int>: minDamage, <Entity>: attacker, <string>: meansOfDeath, <string>: weapon): void";
tmpDef.desc = "Does damage to all damageable objects within a given radius from this entity. The amount of damage is linear according to how close the object is to the radius.";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetCanDamage";
tmpDef.decl = "<entity> Entity SetCanDamage(<bool>: canDamage): void";
tmpDef.desc = "Set the 'candamage' flag for this entity. This means that it can respond to notifies from bullets and grenade hits.";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetCanRadiusDamage";
tmpDef.decl = "<entity> Entity SetCanRadiusDamage(<bool>: canDamage): void";
tmpDef.desc = "Set the 'canradiusdamage' flag for this entity. This means that it can respond to notifies from explosions and radius damages.";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetPlayerIgnoreRadiusDamage";
tmpDef.decl = "SetPlayerIgnoreRadiusDamage(<bool>: ignoreRadiusDamage): void";
tmpDef.desc = "Sets whether the player should ignore radius damage or not";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "IsExplosiveDamageMOD";
tmpDef.decl = "IsExplosiveDamageMOD(<string>: mod): bool";
tmpDef.desc = "Checks if the passed in means of death is an explosive damage\nReturns true if the given means of death is an explosive damage";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "AddTestClient";
tmpDef.decl = "AddTestClient(): entity";
tmpDef.desc = "Adds a test client to the map and returns a reference to that client.\nReturns the test client as an Entity";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "Assert";
tmpDef.decl = "Assert(<bool>: value): void";
tmpDef.desc = "Assert that the given statement is correct. The function will throw a script error if this is false.";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "AssertEx";
tmpDef.decl = "AssertEx(<bool>: value, <string>: message): void";
tmpDef.desc = "Assert that the gven statement is correct. The function will throw a script error if this is false, with the given message.";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "AssertMsg";
tmpDef.decl = "AssertMsg(<string>: message): void";
tmpDef.desc = "Throws a script error with the given message.";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "IPrintLn";
tmpDef.decl = "IPrintLn(<string>: message): void";
tmpDef.desc = "Write a line to the screen.";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "IPrintLnBold";
tmpDef.decl = "IPrintLnBold(<string>: message): void";
tmpDef.desc = "Write a bold line to the screen.";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "Line";
tmpDef.decl = "Line(<Vector3>: start, <Vector3>: end, <Vector3>: color?, <bool>: depthTest?, <int>: duration?): void";
tmpDef.desc = "Draw a debug line on screen.";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "Print";
tmpDef.decl = "Print(<string>: message): void";
tmpDef.desc = "Write to the console.";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "Print3d";
tmpDef.decl = "Print3d(<Vector3>: origin, <string>: text, <Vector3>: color, <float>: alpha?, <float>: scale?, <int>: duration?): void";
tmpDef.desc = "Draw 3d text on screen";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "PrintLn";
tmpDef.decl = "PrintLn(<string>: message): void";
tmpDef.desc = "Write a line to the console.";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetPrintChannel";
tmpDef.decl = "SetPrintChannel(<string>: channel): string";
tmpDef.desc = "Set the current print channel.\nReturns the previous print channel";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "NoClip";
tmpDef.decl = "<entity> Entity NoClip(): void";
tmpDef.desc = "Enables or disables no clip for this player";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "Ufo";
tmpDef.decl = "<entity> Entity Ufo(): void";
tmpDef.desc = "Enables or disables ufo mode for this player";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetBuildVersion";
tmpDef.decl = "GetBuildVersion(): float";
tmpDef.desc = "Gets the game's current build version\nReturns the game's current build version number";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetBuildNumber";
tmpDef.decl = "GetBuildNumber(): float";
tmpDef.desc = "Gets the game's current build number\nReturns the game's current build number";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetSystemTime";
tmpDef.decl = "GetSystemTime(): int";
tmpDef.desc = "Gets the host's system's current time\nReturns the host's system's current time";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "CreatePrintChannel";
tmpDef.decl = "CreatePrintChannel(<string>: channel): void";
tmpDef.desc = "Opens a print channel.";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetDvar";
tmpDef.decl = "GetDvar(<string>: dvar): string";
tmpDef.desc = "Gets the value of a dvar as a string.\nReturns the value of the given dvar as a string";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetDvarFloat";
tmpDef.decl = "GetDvarFloat(<string>: dvar): float";
tmpDef.desc = "Gets the value of a dvar as a float.\nReturns the value of the given dvar as a float";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetDvarInt";
tmpDef.decl = "GetDvarInt(<string>: dvar): int";
tmpDef.desc = "Gets the value of a dvar as an integer.\nReturns the value of the given dvar as an int";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetDvar";
tmpDef.decl = "SetDvar(<string>: dvar, <Parameter>: value): void";
tmpDef.desc = "Sets the value of a script dvar. Cannot set code dvars.";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetDynamicDvar";
tmpDef.decl = "SetDynamicDvar(<string>: dvar, <Parameter>: value): void";
tmpDef.desc = "Sets a dynamic dvar";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetDvarIfUninitialized";
tmpDef.decl = "SetDvarIfUninitialized(<string>: dvar, <Parameter>: value): void";
tmpDef.desc = "Sets a dvar, only if the dvar has not been created yet";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetDevDvar";
tmpDef.decl = "SetDevDvar(<string>: dvar, <Parameter>: value): void";
tmpDef.desc = "Sets a developer dvar";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetDevDvarIfUninitialized";
tmpDef.decl = "SetDevDvarIfUninitialized(<string>: dvar, <Parameter>: value): void";
tmpDef.desc = "Sets a dev dvar, only if the dvar has not been created yet";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetDvarVector";
tmpDef.decl = "GetDvarVector(<string>: dvar): vector3";
tmpDef.desc = "Gets a Dvar as a vector\nGets the dvar value as a Vector3";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "LoadFX";
tmpDef.decl = "LoadFX(<string>: effect): int";
tmpDef.desc = "Load the given effect\nReturns the ID of the loaded effect";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "VisionSetNaked";
tmpDef.decl = "VisionSetNaked(<string>: vision, <int>: transitionTime?): void";
tmpDef.desc = "Sets the players' naked-eye vision. Optionally give a transition time from the current vision.";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "VisionSetNight";
tmpDef.decl = "VisionSetNight(<string>: vision, <int>: transitionTime?): void";
tmpDef.desc = "Sets the vision preset to use for players' night vision view.";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "PlayFX";
tmpDef.decl = "PlayFX(<int>: effect, <Vector3>: position, <Vector3>: forward?, <Vector3>: up?): entity";
tmpDef.desc = "Play this effect";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "PlayFXOnTag";
tmpDef.decl = "PlayFXOnTag(<int>: effect, <Entity>: entity, <string>: tag): void";
tmpDef.desc = "Play this effect on the entity and tag.";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "StopFXOnTag";
tmpDef.decl = "StopFXOnTag(<int>: effect, <Entity>: entity, <string>: tag): void";
tmpDef.desc = "Stop this effect on the entity and tag.";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "PlayFXOnTagForClients";
tmpDef.decl = "PlayFXOnTagForClients(<int>: effect, <Entity>: entity, <string>: tag, <Entity>: client): void";
tmpDef.desc = "Play this effect on the entity and tag for a specific client.";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "VisionSetMissileCam";
tmpDef.decl = "VisionSetMissileCam(<string>: vision, <float>: fade?): void";
tmpDef.desc = "Sets the vision preset for players while they are controlling a missile";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "VisionSetThermal";
tmpDef.decl = "VisionSetThermal(<string>: vision, <float>: fade?): void";
tmpDef.desc = "Sets the vision preset for players while they are scoped into a thermal scope";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "VisionSetPain";
tmpDef.decl = "VisionSetPain(<string>: vision, <float>: fade?): void";
tmpDef.desc = "Sets the vision preset for players while they are in pain/near death";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetBlurForPlayer";
tmpDef.decl = "<entity> Entity SetBlurForPlayer(<float>: blur, <float>: time): void";
tmpDef.desc = "Sets the players' naked-eye vision. Optionally give a transition time from the current vision.";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "PlayLoopedFX";
tmpDef.decl = "PlayLoopedFX(<int>: effect, <float>: time, <Vector3>: origin, <int>: offset?, <Vector3>: forward?, <Vector3>: up?): entity";
tmpDef.desc = "Plays an effect and loops it at the given origin for the given time value";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SpawnFX";
tmpDef.decl = "SpawnFX(<int>: effect, <Vector3>: position, <Vector3>: forward?, <Vector3>: up?): entity";
tmpDef.desc = "Create an effect entity that can be re-triggered efficiently at arbitrary intervals. This doesn't play the effect. Use delete to free it when done.\nReturns the spawned effect as an Entity";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "TriggerFX";
tmpDef.decl = "TriggerFX(<Entity>: effect): void";
tmpDef.desc = "Replays the effect associated with the effect entity. This does not kill any existing effects.";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "TriggerFX";
tmpDef.decl = "TriggerFX(<Entity>: effect, <float>: when): void";
tmpDef.desc = "Replays the effect associated with the effect entity. This does not kill any existing effects.";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "Delete";
tmpDef.decl = "<entity> Entity Delete(): void";
tmpDef.desc = "Deletes an entity";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "Detonate";
tmpDef.decl = "<entity> Entity Detonate(<Entity>: newAttacker?): void";
tmpDef.desc = "Causes a grenade to explode. Must be called on a grenade.";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "DisableAimAssist";
tmpDef.decl = "<entity> Entity DisableAimAssist(): void";
tmpDef.desc = "Disables aim assist on an entity. The entity must have a brush model.";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "EnableAimAssist";
tmpDef.decl = "<entity> Entity EnableAimAssist(): void";
tmpDef.desc = "Enables aim assist on an entity. The entity must have a brush model.";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetEnt";
tmpDef.decl = "GetEnt(<string>: name, <string>: key): entity";
tmpDef.desc = "Looks up an entity by key and name\nReturns the entity found with the given key and name if any";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetEntArray";
tmpDef.decl = "GetEntArray(<string>: name?, <string>: key?): entity";
tmpDef.desc = "Gets an array of entities that have the given key, name pair\nReturns the entities found with the given key and name in a Array";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetEntByNum";
tmpDef.decl = "GetEntByNum(<int>: entNum): entity";
tmpDef.desc = "Gets an entity from its entity number\nReturns the entity of the given entity number";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetEntityNumber";
tmpDef.decl = "<entity> Entity GetEntityNumber(): int";
tmpDef.desc = "Get the entity number of this entity\nReturns the entity number of the given entity";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetNormalHealth";
tmpDef.decl = "<entity> Entity GetNormalHealth(): int";
tmpDef.desc = "Gets the normal health of this entity\nReturns the normal health value of this entity";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetOrigin";
tmpDef.decl = "<entity> Entity GetOrigin(): vector3";
tmpDef.desc = "Gets the origin of an entity\nReturns the origin of the given entity";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "Hide";
tmpDef.decl = "<entity> Entity Hide(): void";
tmpDef.desc = "Hides a visible entity";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "HidePart";
tmpDef.decl = "<entity> Entity HidePart(<string>: tag, <string>: model?): void";
tmpDef.desc = "Hide part of an entity";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "IsTouching";
tmpDef.decl = "<entity> Ent IsTouching(<Entity>: entity): bool";
tmpDef.desc = "Checks whether the entity is touching the passed in entity or trigger\nReturns true if the entity is touching the passed in entity/trigger";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "LaserOff";
tmpDef.decl = "<entity> Entity LaserOff(): void";
tmpDef.desc = "Turns off entity's laser sight";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "LaserOn";
tmpDef.decl = "<entity> Entity LaserOn(): void";
tmpDef.desc = "Turns on entity's laser sight";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "LinkTo";
tmpDef.decl = "<entity> Ent LinkTo(<Entity>: entity, <string>: tag?, <Vector3>: originOffset?, <Vector3>: anglesOffset?): void";
tmpDef.desc = "Attaches one entity to another";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "LocalToWorldCoords";
tmpDef.decl = "<entity> Entity LocalToWorldCoords(<Vector3>: localCoord): void";
tmpDef.desc = "Transform the given local coordinate point to a world coordinate point";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetContents";
tmpDef.decl = "<entity> Entity SetContents(<int>: contents): int";
tmpDef.desc = "Sets the contents of an entity\nReturns the old contents of the entity";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetCursorHint";
tmpDef.decl = "<entity> Entity SetCursorHint(<string>: hint): void";
tmpDef.desc = "Sets a visible cursor near an objective";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetHintString";
tmpDef.decl = "<entity> Entity SetHintString(<string>: hint): void";
tmpDef.desc = "Sets the hint string for a usable entity";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetModel";
tmpDef.decl = "<entity> Entity SetModel(<string>: model): void";
tmpDef.desc = "Sets the model of the entity to the given model name";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetNormalHealth";
tmpDef.decl = "<entity> Entity SetNormalHealth(<int>: health): void";
tmpDef.desc = "Sets the normal health of this entity";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "Show";
tmpDef.decl = "<entity> Entity Show(): void";
tmpDef.desc = "Shows a hidden entity";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "ShowAllParts";
tmpDef.decl = "<entity> Entity ShowAllParts(): void";
tmpDef.desc = "Show all parts of an entity";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "ShowPart";
tmpDef.decl = "<entity> Entity ShowPart(<string>: tag, <string>: model?): void";
tmpDef.desc = "Show part of an entity";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "ShowToPlayer";
tmpDef.decl = "<entity> Entity ShowToPlayer(<Entity>: player): void";
tmpDef.desc = "Show the entity to a given client";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "Unlink";
tmpDef.decl = "<entity> Entity Unlink(): void";
tmpDef.desc = "Unlinks a linked entity from another entity";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "UseBy";
tmpDef.decl = "<entity> Entity UseBy(<Entity>: player): void";
tmpDef.desc = "Uses the entity with the passed in entity as the activator";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "UseTriggerRequireLookAt";
tmpDef.decl = "<entity> Entity UseTriggerRequireLookAt(): void";
tmpDef.desc = "Modifies the use trigger so that it requires the user to be looking at it";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "PlayFX";
tmpDef.decl = "<entity> Entity PlayFX(<int>: effect, <Vector3>: position, <Vector3>: forward?, <Vector3>: up?): void";
tmpDef.desc = "Play an effect so that it is attached to this entity";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "DropScavengerBag";
tmpDef.decl = "<entity> Entity DropScavengerBag(<string>: item): entity";
tmpDef.desc = "Creates a scavenger bag from this entity and drops it\nReturns a reference to the dropped scavenger bag an an Entity";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "Attach";
tmpDef.decl = "<entity> Entity Attach(<string>: model, <string>: tag?, <bool>: ignoreCollision?): void";
tmpDef.desc = "Attaches a model to an entity";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "Detach";
tmpDef.decl = "<entity> Entity Detach(<string>: model, <string>: tag?): void";
tmpDef.desc = "Detaches a model to an entity";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "DetachAll";
tmpDef.decl = "<entity> Entity DetachAll(): void";
tmpDef.desc = "Detaches all attached model from an entity";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "AttachShieldModel";
tmpDef.decl = "<entity> Entity AttachShieldModel(<string>: model, <string>: tag): void";
tmpDef.desc = "Attaches the riot shield model to the given tag";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "DetachShieldModel";
tmpDef.decl = "<entity> Entity DetachShieldModel(<string>: model, <string>: tag): void";
tmpDef.desc = "Detaches the riot shield model from the given tag";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "MoveShieldModel";
tmpDef.decl = "<entity> Entity MoveShieldModel(<string>: model, <string>: tag1, <string>: tag2): void";
tmpDef.desc = "Moves the attached riot shield model from the first tag to the second tag";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetAttachSize";
tmpDef.decl = "<entity> Entity GetAttachSize(): int";
tmpDef.desc = "Gets the number of attached models for this entity\nReturns the number of attached models on the given entity";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetAttachModelName";
tmpDef.decl = "<entity> Entity GetAttachModelName(<int>: index): string";
tmpDef.desc = "Gets the name of the attached model at the given attachment slot";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetAttachTagName";
tmpDef.decl = "<entity> Entity GetAttachTagName(<int>: index): string";
tmpDef.desc = "";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetAttachIgnoreCollision";
tmpDef.decl = "<entity> Entity GetAttachIgnoreCollision(<int>: index): bool";
tmpDef.desc = "";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "HidePart_AllInstances";
tmpDef.decl = "<entity> Entity HidePart_AllInstances(<string>: tag, <string>: model?): void";
tmpDef.desc = "TBD";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "HideAllParts";
tmpDef.decl = "<entity> Entity HideAllParts(): void";
tmpDef.desc = "Hides all extra parts of this entity";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "LinkToBlendToTag";
tmpDef.decl = "<entity> Ent LinkToBlendToTag(<Entity>: entity, <string>: tag): void";
tmpDef.desc = "Attaches one entity to another at the tag by blending (TBD)";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "LinkToBlendToTag";
tmpDef.decl = "<entity> Ent LinkToBlendToTag(<Entity>: entity, <string>: tag, <bool>: collide): void";
tmpDef.desc = "Attaches one entity to another at the tag by blending (TBD)";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "IsLinked";
tmpDef.decl = "<entity> Entity IsLinked(): bool";
tmpDef.desc = "Checks if this entity is currently linked to another entity\nReturns true if this entity is linked to another entity";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "EnableLinkTo";
tmpDef.decl = "<entity> Entity EnableLinkTo(): void";
tmpDef.desc = "Enables LinkTo() for an entity";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "LaserAltViewOn";
tmpDef.decl = "<entity> Entity LaserAltViewOn(): void";
tmpDef.desc = "Turns on the laser for the alt view(TBD)";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "LaserAltViewOff";
tmpDef.decl = "<entity> Entity LaserAltViewOff(): void";
tmpDef.desc = "Turns off the laser for the alt view(TBD)";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "MakeUsable";
tmpDef.decl = "<entity> Entity MakeUsable(): void";
tmpDef.desc = "Makes this entity usable to players";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "MakeUnUsable";
tmpDef.decl = "<entity> Entity MakeUnUsable(): void";
tmpDef.desc = "Makes this entity unusable to players";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetEntityVelocity";
tmpDef.decl = "<entity> Entity GetEntityVelocity(): vector3";
tmpDef.desc = "Gets the velocity of this entity\nReturns the current velocity of this entity";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetTargetEnt";
tmpDef.decl = "<entity> Entity SetTargetEnt(<Entity>: target): void";
tmpDef.desc = "Sets the target entity of a turret or missile";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetTargetPos";
tmpDef.decl = "<entity> Entity SetTargetPos(<Vector3>: target): void";
tmpDef.desc = "Sets the target position of a turret or missile";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "ClearTarget";
tmpDef.decl = "<entity> Entity ClearTarget(): void";
tmpDef.desc = "Clears the current target of this turret or missile";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetFlightModeDirect";
tmpDef.decl = "<entity> Entity SetFlightModeDirect(): void";
tmpDef.desc = "Sets a missile to fly directly toward it's target";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetFlightModeTop";
tmpDef.decl = "<entity> Entity SetFlightModeTop(): void";
tmpDef.desc = "Sets a missile to fly up in an arc and then come back down to hit it's target on top";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetLightIntensity";
tmpDef.decl = "<entity> Entity GetLightIntensity(): float";
tmpDef.desc = "Gets the intensity of a light entity\nReturns the intensity of this light entity";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetLightIntensity";
tmpDef.decl = "<entity> Entity SetLightIntensity(<float>: intensity): void";
tmpDef.desc = "Sets the intensity of a light entity";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "CameraLinkTo";
tmpDef.decl = "<entity> Ent CameraLinkTo(<Entity>: entity, <string>: tag?): void";
tmpDef.desc = "Attaches the player's camera to an entity";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "CameraLinkTo";
tmpDef.decl = "<entity> Ent CameraLinkTo(<Entity>: entity, <string>: tag, <Vector3>: originOffset, <Vector3>: anglesOffset): void";
tmpDef.desc = "Attaches the player's camera to an entity";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "CameraUnlink";
tmpDef.decl = "<entity> Entity CameraUnlink(): void";
tmpDef.desc = "Unlink the player's camera from an entity";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "ControlsLinkTo";
tmpDef.decl = "<entity> Ent ControlsLinkTo(<Entity>: entity): void";
tmpDef.desc = "Links this player's controls to an entity so that any player input is directed to the linked entity";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "ControlsUnlink";
tmpDef.decl = "<entity> Entity ControlsUnlink(): void";
tmpDef.desc = "Unlink the player's controls from an entity";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "MakeVehicleSolidCapsule";
tmpDef.decl = "<entity> Entity MakeVehicleSolidCapsule(<float>: xRadius, <float>: zOffset, <float>: zRadius): void";
tmpDef.desc = "Makes a vehicle solid with capsule size";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "MakeVehicleSolidSphere";
tmpDef.decl = "<entity> Entity MakeVehicleSolidSphere(<float>: radius, <float>: zOffset): void";
tmpDef.desc = "Makes a vehicle solid with sphere size";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "TransferMarksToNewScriptModel";
tmpDef.decl = "<entity> Entity TransferMarksToNewScriptModel(<Entity>: ent): void";
tmpDef.desc = "Transfers any marks on this model to a new script_model(TBD)";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "CloneBrushModelToScriptModel";
tmpDef.decl = "<entity> Entity CloneBrushModelToScriptModel(<Entity>: brushModel): void";
tmpDef.desc = "Clones the given brush model into this script model so it can be controlled by the script";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "EnablePlayerUse";
tmpDef.decl = "<entity> Entity EnablePlayerUse(<Entity>: player): void";
tmpDef.desc = "Sets this entity to be usable by the given player";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "DisablePlayerUse";
tmpDef.decl = "<entity> Entity DisablePlayerUse(<Entity>: player): void";
tmpDef.desc = "Sets this entity to be unusable by the given player";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "MakeScrambler";
tmpDef.decl = "<entity> Entity MakeScrambler(<Entity>: owner): void";
tmpDef.desc = "Makes this entity into a scrambler so it will behave as a scrambler for the given player";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "MakePortableRadar";
tmpDef.decl = "<entity> Entity MakePortableRadar(<Entity>: owner): void";
tmpDef.desc = "Makes this entity into a portable radar so it will behave as a partable radar for the given player";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "MakeTrophySystem";
tmpDef.decl = "<entity> Entity MakeTrophySystem(<Entity>: owner): void";
tmpDef.desc = "Makes this entity into a trophy so it will behave as a trophy system for the given player";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "IsSpawner";
tmpDef.decl = "<entity> Entity IsSpawner(): bool";
tmpDef.desc = "Checks if this entity is a spawner or not\nReturns true if this entity is a spawner";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "DeleteAttractor";
tmpDef.decl = "DeleteAttractor(<Entity>: attractor): void";
tmpDef.desc = "Deletes a missile attractor or repulsor(TBD)";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetThermalBodyMaterial";
tmpDef.decl = "SetThermalBodyMaterial(<string>: body): void";
tmpDef.desc = "Sets the default thermal body for players";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetMissileOwner";
tmpDef.decl = "GetMissileOwner(<Entity>: explosive): entity";
tmpDef.desc = "Gets the owner of a missile or explosive\nReturns the owner of the explosive";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetGlass";
tmpDef.decl = "GetGlass(<string>: name): entity";
tmpDef.desc = "Looks up an glass piece by name\nReturns the glass piece found with the given key and name if any";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetGlassArray";
tmpDef.decl = "GetGlassArray(<string>: name): entity";
tmpDef.desc = "Gets an array of glass pieces that have the given name\nReturns the glass pieces found with the given key and name in a Array";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetGlassOrigin";
tmpDef.decl = "GetGlassOrigin(<int>: glass): vector3";
tmpDef.desc = "Gets the origin of a piece of glass(TBD)\nReturns the origin of the glass piece";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "IsGlassDestroyed";
tmpDef.decl = "IsGlassDestroyed(<int>: glass): bool";
tmpDef.desc = "Checks if the given glass entity is destroyed or not\nReturns true if the glass entity is destroyed";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "DestroyGlass";
tmpDef.decl = "DestroyGlass(<int>: glass): void";
tmpDef.desc = "Shatters a glass entity";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "DeleteGlass";
tmpDef.decl = "DeleteGlass(<int>: glass): void";
tmpDef.desc = "Deletes a glass entity";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetEntChannelsCount";
tmpDef.decl = "<entity> Entity GetEntChannelsCount(): int";
tmpDef.desc = "Gets the channel count of an entity(TBD)";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetEntChannelName";
tmpDef.decl = "<entity> Entity GetEntChannelName(): string";
tmpDef.desc = "Gets the channel name of an entity(TBD)";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetScriptMoverInKillcam";
tmpDef.decl = "<entity> Mover SetScriptMoverInKillcam(<string>: type): void";
tmpDef.desc = "TBD";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetDamageState";
tmpDef.decl = "<entity> Entity SetDamageState(<int>: state): void";
tmpDef.desc = "Sets a helicopter's current damage state";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "CloseFile";
tmpDef.decl = "CloseFile(<int>: fileNum): int";
tmpDef.desc = "Close a script-controlled file.\nReturns 1 if successful and -1 if unsuccessful";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "FGetArg";
tmpDef.decl = "FGetArg(<int>: fileNum, <int>: arg): void";
tmpDef.desc = "Get a specific argument number from the current line.";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "FPrintFields";
tmpDef.decl = "FPrintFields(<int>: fileNum, <params>: Parameter[]): void";
tmpDef.desc = "Writes items out to a script-controlled file, inserting a comma in-between each one.";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "FPrintLn";
tmpDef.decl = "FPrintLn(<int>: fileNum, <string>: output): void";
tmpDef.desc = "Write text out to a script-controlled file.";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "FReadLn";
tmpDef.decl = "FReadLn(<int>: fileNum): int";
tmpDef.desc = "Read the next line of comma separated value text from a script-controlled file.\nReturns the number of comma separated values in the line";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "OpenFile";
tmpDef.decl = "OpenFile(<string>: filename, <string>: mode): int";
tmpDef.desc = "Open a file for reading, writing, or appending.\nReturns a file number if successful, otherwise returns -1";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "ChangeFontScaleOverTime";
tmpDef.decl = "<entity> Hud ChangeFontScaleOverTime(<float>: time): void";
tmpDef.desc = "Set a hud element to transition in fontScale over time. Normally setting the fontScale of an element causes an immediate visual change.";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "ClearAllTextAfterHudelem";
tmpDef.decl = "<entity> Hud ClearAllTextAfterHudelem(): void";
tmpDef.desc = "Clear the config strings for the unique text set after this string. This is intended for development use only.";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "ClearTargetEnt";
tmpDef.decl = "<entity> Hud ClearTargetEnt(): void";
tmpDef.desc = "Clear this waypoint from targetting an entity.";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "Destroy";
tmpDef.decl = "<entity> Hud Destroy(): void";
tmpDef.desc = "Remove this Hud element altogether";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "FadeOverTime";
tmpDef.decl = "<entity> Hud FadeOverTime(<float>: time): void";
tmpDef.desc = "Set a hud element to transition in color (or alpha) over time. Normally setting the color (or alpha) of an element causes an immediate visual change. However, if the color (or alpha) gets set within <time> after calling fadeOverTime, then the hud element will transition to the new color over the remaining <time>.";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "FadeOverTime2";
tmpDef.decl = "<entity> Hud FadeOverTime2(): void";
tmpDef.desc = "Test fade";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "MoveOverTime";
tmpDef.decl = "<entity> Hud MoveOverTime(<float>: time): void";
tmpDef.desc = "Set a hud element to move over time.";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "MoveOverTime2";
tmpDef.decl = "<entity> Hud MoveOverTime2(): void";
tmpDef.desc = "Test move";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "NewClientHudElem";
tmpDef.decl = "NewClientHudElem(<Entity>: client): hudelem";
tmpDef.desc = "Create a new hud element for a particular client\nReturns a reference to the created hud element as a HudElem";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "NewHudElem";
tmpDef.decl = "NewHudElem(): hudelem";
tmpDef.desc = "Create a new hud element\nReturns a reference to the created hud element as a HudElem";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "NewTeamHudElem";
tmpDef.decl = "NewTeamHudElem(<string>: team): hudelem";
tmpDef.desc = "Create a new hud element for a particular team\nReturns a reference to the created hud element as a HudElem";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "Obituary";
tmpDef.decl = "Obituary(<Entity>: victim, <Entity>: attacker, <string>: weapon, <string>: meansOfDeath): void";
tmpDef.desc = "Create an obituary for a character";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "Reset";
tmpDef.decl = "<entity> Hud Reset(): void";
tmpDef.desc = "Reset a HUD element to its default state.";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "ScaleOverTime";
tmpDef.decl = "<entity> Hud ScaleOverTime(<float>: time, <int>: width, <int>: height): void";
tmpDef.desc = "Set a hud element to scale over time.";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetClock";
tmpDef.decl = "<entity> Hud SetClock(<float>: time, <float>: totalTime, <string>: material, <int>: width?, <int>: height?): void";
tmpDef.desc = "Set a clock HUD element to count down over a time period.";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetClockUp";
tmpDef.decl = "<entity> Hud SetClockUp(<float>: time, <float>: totalTime, <string>: material, <int>: width?, <int>: height?): void";
tmpDef.desc = "Set a clock HUD element to count up over a time period.";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetMapNameString";
tmpDef.decl = "<entity> Hud SetMapNameString(<string>: mapname): void";
tmpDef.desc = "Set the map name string";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetPlayerNameString";
tmpDef.decl = "<entity> Hud SetPlayerNameString(<Entity>: player): void";
tmpDef.desc = "Set the player name string for a HUD element";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetPulseFX";
tmpDef.decl = "<entity> Hud SetPulseFX(<int>: speed, <int>: decayStart, <int>: decayDuration): void";
tmpDef.desc = "Set the hudelem string to display with a 'Pulse' effect.";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetShader";
tmpDef.decl = "<entity> Hud SetShader(<string>: material, <int>: width?, <int>: height?): void";
tmpDef.desc = "Set the material for this Hud Element.";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetTargetEnt";
tmpDef.decl = "<entity> Hud SetTargetEnt(<Entity>: entity): void";
tmpDef.desc = "Set the entity that this waypoint should target. In MP, entity should already be a broadcasting entity.";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetTenthsTimer";
tmpDef.decl = "<entity> Hud SetTenthsTimer(<float>: time): void";
tmpDef.desc = "Set the timer HUD element to count down in tenths of a second.";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetTenthsTimerUp";
tmpDef.decl = "<entity> Hud SetTenthsTimerUp(<float>: time): void";
tmpDef.desc = "Set the timer HUD element to count up in tenths of a second.";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetText";
tmpDef.decl = "<entity> Hud SetText(<string>: text): void";
tmpDef.desc = "Set HUD text for this element";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetTimer";
tmpDef.decl = "<entity> Hud SetTimer(<float>: time): void";
tmpDef.desc = "Set the timer HUD element to count down.";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetTimerUp";
tmpDef.decl = "<entity> Hud SetTimerUp(<float>: time): void";
tmpDef.desc = "Set the timer HUD element to count up.";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetValue";
tmpDef.decl = "<entity> Hud SetValue(<int>: value): void";
tmpDef.desc = "Set the value HUD element to a given value";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetWaypoint";
tmpDef.decl = "<entity> Hud SetWaypoint(<bool>: constantSize): void";
tmpDef.desc = "Sets a HUD element to be a waypoint.";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetWaypoint";
tmpDef.decl = "<entity> Hud SetWaypoint(<bool>: constantSize, <bool>: pinToScreenEdge): void";
tmpDef.desc = "Sets a HUD element to be a waypoint.";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetWaypoint";
tmpDef.decl = "<entity> Hud SetWaypoint(<bool>: constantSize, <bool>: pinToScreenEdge, <bool>: fadeOutPinnedIcon): void";
tmpDef.desc = "Sets a HUD element to be a waypoint.";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetWaypoint";
tmpDef.decl = "<entity> Hud SetWaypoint(<bool>: constantSize, <bool>: pinToScreenEdge, <bool>: fadeOutPinnedIcon, <bool>: is3D): void";
tmpDef.desc = "Sets a HUD element to be a waypoint.";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "ShowHudSplash";
tmpDef.decl = "<entity> Entity ShowHudSplash(<string>: splash, <int>: slot): void";
tmpDef.desc = "Shows a splash notification to this player";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "ShowHudSplash";
tmpDef.decl = "<entity> Entity ShowHudSplash(<string>: splash, <int>: slot, <int>: optionalNum): void";
tmpDef.desc = "Shows a splash notification to this player";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetTimerStatic";
tmpDef.decl = "<entity> Hud SetTimerStatic(<float>: time): void";
tmpDef.desc = "Set the timer HUD element to a time and freezes it";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetTenthsTimerStatic";
tmpDef.decl = "<entity> Hud SetTenthsTimerStatic(<float>: time): void";
tmpDef.desc = "Set the timer HUD element to a time in tenths of a second and freezes it";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetWaypointEdgeStyle_RotatingIcon";
tmpDef.decl = "<entity> Hud SetWaypointEdgeStyle_RotatingIcon(): void";
tmpDef.desc = "Sets a waypoint hud to rotate along the screen while it's offscreen(TBD)";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetWaypointEdgeStyle_SecondaryArrow";
tmpDef.decl = "<entity> Hud SetWaypointEdgeStyle_SecondaryArrow(): void";
tmpDef.desc = "Sets a waypoint hud to have an arrow while offscreen(TBD)";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetWaypointIconOffScreenOnly";
tmpDef.decl = "<entity> Hud SetWaypointIconOffScreenOnly(): void";
tmpDef.desc = "Sets a waypoint hud to only display if it is offscreen(TBD)";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "Earthquake";
tmpDef.decl = "Earthquake(<float>: scale, <float>: duration, <Vector3>: source, <int>: radius): void";
tmpDef.desc = "Create an earthquake at the given point.";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "ExitLevel";
tmpDef.decl = "ExitLevel(<bool>: savePersistent): void";
tmpDef.desc = "Exits the current level.";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetNorthYaw";
tmpDef.decl = "GetNorthYaw(): float";
tmpDef.desc = "Gets the yaw value of North\nReturns the yaw value of North";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetStartTime";
tmpDef.decl = "GetStartTime(): int";
tmpDef.desc = "Gets the start time for the current round\nReturns the start time for the current round";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetTime";
tmpDef.decl = "GetTime(): int";
tmpDef.desc = "Gets the level time in milliseconds from the start of the level\nReturns the level time in milliseconds from the start of the level";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "IsSplitScreen";
tmpDef.decl = "IsSplitScreen(): bool";
tmpDef.desc = "Checks if the game is a splitscreen game\nReturns true if the game is a splitscreen game";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "IsValidGametype";
tmpDef.decl = "IsValidGametype(<string>: gametype): bool";
tmpDef.desc = "Checks if the string is a valid gametype\nReturns true if the string is a valid gametype";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "MapExists";
tmpDef.decl = "MapExists(<string>: mapname): bool";
tmpDef.desc = "Checks if the map with the given name exists on the server\nReturns true if the map with the given name exists on the server";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetClientNameMode";
tmpDef.decl = "SetClientNameMode(<string>: mode): void";
tmpDef.desc = "Alters the way that the player name is updated, to prevent cheating by spectators altering their name to communicate with active players";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetGameEndTime";
tmpDef.decl = "SetGameEndTime(<int>: time): void";
tmpDef.desc = "Sets the time the current match will end";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetMapCenter";
tmpDef.decl = "SetMapCenter(<Vector3>: center): void";
tmpDef.desc = "Set the center of the map (used by network code to optimize position data)";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetMiniMap";
tmpDef.decl = "SetMiniMap(<string>: material, <float>: upperLeftX, <float>: upperLeftY, <float>: lowerRightX, <float>: lowerRightY): void";
tmpDef.desc = "Sets the info for the satelite map on the compass";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetWinningPlayer";
tmpDef.decl = "SetWinningPlayer(<Entity>: player): void";
tmpDef.desc = "Sets the player to be the winner";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetWinningTeam";
tmpDef.decl = "SetWinningTeam(<string>: team): void";
tmpDef.desc = "Sets a team to be the winner";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "UpdateClientNames";
tmpDef.decl = "UpdateClientNames(): void";
tmpDef.desc = "Update all client names. Only works in 'manual_change' mode";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "WorldEntNumber";
tmpDef.decl = "WorldEntNumber(): int";
tmpDef.desc = "Gets the Entity number for the world\nReturns the entity number for the world";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetSunlight";
tmpDef.decl = "SetSunlight(<Vector3>: rgb): void";
tmpDef.desc = "Sets the level's sunlight color";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "ResetSunlight";
tmpDef.decl = "ResetSunlight(): void";
tmpDef.desc = "Resets the level's sunlight color to default";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "Map_Restart";
tmpDef.decl = "Map_Restart(<bool>: savePersistant): void";
tmpDef.desc = "Restarts the current game";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "MatchEnd";
tmpDef.decl = "MatchEnd(): void";
tmpDef.desc = "Ends the current match(TBD)";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "EndParty";
tmpDef.decl = "EndParty(): void";
tmpDef.desc = "Ends the current party";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetUAVStrengthMin";
tmpDef.decl = "GetUAVStrengthMin(): int";
tmpDef.desc = "Gets the minimum uav strength\nReturns the minimum value of uav strength";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetUAVStrengthMax";
tmpDef.decl = "GetUAVStrengthMax(): int";
tmpDef.desc = "Gets the maximum uav strength\nReturns the maximum value of uav strength";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetUAVStrengthLevelNeutral";
tmpDef.decl = "GetUAVStrengthLevelNeutral(): int";
tmpDef.desc = "Gets the neutral uav strength value\nReturns the neutral value of uav strength";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetUAVStrengthLevelShowEnemyFastSweep";
tmpDef.decl = "GetUAVStrengthLevelShowEnemyFastSweep(): int";
tmpDef.desc = "Gets the uav strength level at which the radar will sweep for enemies in a fast speed\nReturns the value of uav strength that will sweep the radar fast";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetUAVStrengthLevelShowEnemyDirectional";
tmpDef.decl = "GetUAVStrengthLevelShowEnemyDirectional(): int";
tmpDef.desc = "Gets the uav strength level at which the radar will show enemy direction\nReturns the value of uav strength that will show enemy direction";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetMatchData";
tmpDef.decl = "SetMatchData(<params>: Parameter[]): void";
tmpDef.desc = "Sets a value for the current match's data";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetMatchData";
tmpDef.decl = "GetMatchData(<params>: Parameter[]): parameter";
tmpDef.desc = "Gets a value of a field of the current match's data\nReturns the value of the given field in the current match's data";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SendMatchData";
tmpDef.decl = "SendMatchData(): void";
tmpDef.desc = "Send the current match data to all clients(TBD)";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "ClearMatchData";
tmpDef.decl = "ClearMatchData(): void";
tmpDef.desc = "Clears all match data fields to default";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetMatchDataDef";
tmpDef.decl = "SetMatchDataDef(<string>: name): void";
tmpDef.desc = "Sets the current match's matchdata definition file(TBD)";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetMatchClientIP";
tmpDef.decl = "SetMatchClientIP(<Entity>: client, <int>: clientID): void";
tmpDef.desc = "Sets up a client's ip in the match data(TBD)";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetMatchDataID";
tmpDef.decl = "SetMatchDataID(): void";
tmpDef.desc = "Sets the ID of the current match's matchdata(TBD)";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetClientMatchData";
tmpDef.decl = "SetClientMatchData(<params>: Parameter[]): void";
tmpDef.desc = "Sets a field in the client's match";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetClientMatchData";
tmpDef.decl = "GetClientMatchData(<params>: Parameter[]): parameter";
tmpDef.desc = "Gets a field in the client's match data";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetClientMatchDataDef";
tmpDef.decl = "SetClientMatchDataDef(<string>: name): void";
tmpDef.desc = "Sets a client's matchdata definition file";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SendClientMatchData";
tmpDef.decl = "SendClientMatchData(): void";
tmpDef.desc = "Send a client's current match data to the server(TBD)";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetMatchRulesData";
tmpDef.decl = "GetMatchRulesData(<string>: rule, <params>: string[]): string";
tmpDef.desc = "Gets a rule value from the current match's rules\nReturns the value of the given rule";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "IsUsingMatchRulesData";
tmpDef.decl = "IsUsingMatchRulesData(): bool";
tmpDef.desc = "Checks if the server is using match rules data or not\nReturns true if the server is using match rules data";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "EndLobby";
tmpDef.decl = "EndLobby(): void";
tmpDef.desc = "Ends the current lobby";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetMapCustom";
tmpDef.decl = "GetMapCustom(<string>: name): string";
tmpDef.desc = "Gets info from the basemaps.arena file\nReturns the value of the given variable located in the basemaps.arena file";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "UpdateSkill";
tmpDef.decl = "UpdateSkill(<Entity>: attacker, <Entity>: defender, <string>: gametype, <float>: scalar): void";
tmpDef.desc = "Updates the skill value for two players(TBD)";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetNorthYaw";
tmpDef.decl = "SetNorthYaw(<int>: yaw): void";
tmpDef.desc = "Set the north yaw value";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetSlowMotion";
tmpDef.decl = "SetSlowMotion(<float>: startScale, <float>: endScale, <float>: lerpDuration): void";
tmpDef.desc = "Sets slow motion for the game, smoothing from startScale to endScale for lerpDuration time";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetExpFog";
tmpDef.decl = "SetExpFog(<float>: startDist, <float>: halfwayDist, <Vector3>: rgb, <float>: opacity, <float>: transitionTime, <Vector3>: sunRGB, <float>: sunOpacity, <Vector3>: sunDirection, <float>: sunBeginFadeAngle, <float>: sunEndFadeAngle): void";
tmpDef.desc = "Sets this world's exponential fog values";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetVehicleNode";
tmpDef.decl = "GetVehicleNode(<string>: name, <string>: key): entity";
tmpDef.desc = "Looks up a vehicle node with the given key, name pair\nReturns the vehicle node found with the given key and name if any";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetVehicleNodeArray";
tmpDef.decl = "GetVehicleNodeArray(<string>: name, <string>: key): entity";
tmpDef.desc = "Gets an array of vehicle nodes that have the given key, name pair\nReturns the vehicle nodes found with the given key and name in a Array";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetAllVehicleNodes";
tmpDef.decl = "GetAllVehicleNodes(): entity";
tmpDef.desc = "Gets all of the vehicle nodes in the current level\nReturns all of the vehicle nodes found in the level in a Array";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetNumVehicles";
tmpDef.decl = "GetNumVehicles(): int";
tmpDef.desc = "Gets the current vehicle count of the level\nReturns the vehicle count of the level";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "Vehicle_GetSpawnerArray";
tmpDef.decl = "Vehicle_GetSpawnerArray(): entity";
tmpDef.desc = "Gets all of the current vehicle spawners within the level\nReturns all of the current vehicle spawners in the level in a Array";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "Vehicle_GetArray";
tmpDef.decl = "Vehicle_GetArray(): entity";
tmpDef.desc = "Gets all of the current vehicles within the level\nReturns all of the current vehicles in the level in a Array";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetCounterTotal";
tmpDef.decl = "GetCounterTotal(<string>: stat): int";
tmpDef.desc = "Gets the current total count of the given world stat";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "IncrementCounter";
tmpDef.decl = "IncrementCounter(<string>: stat, <int>: increment): void";
tmpDef.desc = "Increments the given world stat by the given number";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "ACos";
tmpDef.decl = "ACos(<float>: cosValue): float";
tmpDef.desc = "Calculates an angle corresponding to a particular cosine value\nReturns an angle corresponding to a particular cosine value";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "ASin";
tmpDef.decl = "ASin(<float>: sinValue): float";
tmpDef.desc = "Calculates an angle corresponding to a particular sin value\nReturns an angle corresponding to a particular sin value";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "ATan";
tmpDef.decl = "ATan(<float>: tanValue): float";
tmpDef.desc = "Calculates an angle corresponding to a particular tangential value\nReturns an angle corresponding to a particular tangential value";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "Cos";
tmpDef.decl = "Cos(<float>: angle): float";
tmpDef.desc = "Calculates the cos of an angle\nReturns the cos of an angle";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "Int";
tmpDef.decl = "Int(<float>: value): int";
tmpDef.desc = "Cast a floating point number or a string to an integer.\nReturns the newly casted float/string as an int";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "Float";
tmpDef.decl = "Float(<string>: value): float";
tmpDef.desc = "Cast a string to a floating point number.\nReturns the newly casted string as a float";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "PointOnSegmentNearestToPoint";
tmpDef.decl = "PointOnSegmentNearestToPoint(<Vector3>: segmentA, <Vector3>: segmentB, <Vector3>: point): vector3";
tmpDef.desc = "Calculates the point closest to a given point on a given line segment.\nReturns the point nearest the given point on the given line segment";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "RandomFloat";
tmpDef.decl = "RandomFloat(<float>: max): float";
tmpDef.desc = "Randomize a floating point number that is above 0 and below the max number specified.\nReturns the randomized float more than 0 and less than the given max";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "RandomFloatRange";
tmpDef.decl = "RandomFloatRange(<float>: min, <float>: max): float";
tmpDef.desc = "Randomize a floating point number that is between the two ranges specified.\nReturns the randomized float between the given ranges";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "RandomInt";
tmpDef.decl = "RandomInt(<int>: max): int";
tmpDef.desc = "Randomize an int that is above 0 and max-1 inclusive.\nReturns the randomized int more than 0 and less than the given max";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "RandomIntRange";
tmpDef.decl = "RandomIntRange(<int>: min, <int>: max): int";
tmpDef.desc = "Randomize an int that is between the given ranges.\nReturns the randomized int between the two given ranges";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "Sin";
tmpDef.decl = "Sin(<float>: angle): float";
tmpDef.desc = "Calculates the sin of an angle\nReturns the sin of an angle";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "Tan";
tmpDef.decl = "Tan(<float>: angle): float";
tmpDef.desc = "Calculates the tan of an angle\nReturns the tan of an angle";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "VectorFromLineToPoint";
tmpDef.decl = "VectorFromLineToPoint(<Vector3>: segmentA, <Vector3>: segmentB, <Vector3>: point): vector3";
tmpDef.desc = "Calculates a vector perpendicular to the given line and pointing from the line to the given point.\nReturns a vector perpendicular to the given line and pointing from the line to the given point";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "Abs";
tmpDef.decl = "Abs(<float>: input): float";
tmpDef.desc = "Calculates the absolute value of the given input\nReturns the absolute value of the given number";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "Min";
tmpDef.decl = "Min(<float>: input, <float>: minimum): float";
tmpDef.desc = "Returns the given number, where the given minimum is lowest possible return value\nReturns the given number that is above the minimum";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "Max";
tmpDef.decl = "Max(<float>: input, <float>: maximum): float";
tmpDef.desc = "Returns the given number, where the given maximum is highest possible return value\nReturns the given number that is below the maximum";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "Floor";
tmpDef.decl = "Floor(<float>: input): float";
tmpDef.desc = "Gets the lowest possible value of the given number(TBD)\nReturns the lowest possible value of the given number";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "Ceil";
tmpDef.decl = "Ceil(<float>: input): float";
tmpDef.desc = "Gets the highest possible value of the given number(TBD)\nReturns the highest possible value of the given number";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "Exp";
tmpDef.decl = "Exp(<float>: input): float";
tmpDef.desc = "Gets the exponent of the given number(TBD)\nReturns the exponent of the given number";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "Log";
tmpDef.decl = "Log(<float>: input): float";
tmpDef.desc = "Calculates the log of the given number(TBD)\nReturns the log of the given number";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "Sqrt";
tmpDef.decl = "Sqrt(<float>: input): float";
tmpDef.desc = "Calculates the square root of the given number(TBD)\nReturns the square root of the given number";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "Squared";
tmpDef.decl = "Squared(<float>: input): float";
tmpDef.desc = "Calculates the squared value of the given number(TBD)\nReturns the square of the given number";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "Clamp";
tmpDef.decl = "Clamp(<float>: input, <float>: minimum, <float>: maximum): float";
tmpDef.desc = "Clamps a given value inbetween the min and max\nReturns the given number within the maximum and minimum values";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "AngleClamp";
tmpDef.decl = "AngleClamp(<Vector3>: angle, <float>: minimum, <float>: maximum): vector3";
tmpDef.desc = "Clamps a given angle inbetween the min and max\nReturns the given angle within the maximum and minimum values";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "AngleClamp180";
tmpDef.decl = "AngleClamp180(<float>: angle): vector3";
tmpDef.desc = "Clamps a given angle so that it is within 0 and 180 degrees(TBD)\nReturns the given angle within 0 and 180 degrees";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "OpenPopUpMenu";
tmpDef.decl = "<entity> Entity OpenPopUpMenu(<string>: menu): void";
tmpDef.desc = "Opens a pop up menu over the current menu/screen";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "OpenPopUpMenuNoMouse";
tmpDef.decl = "<entity> Entity OpenPopUpMenuNoMouse(<string>: menu): void";
tmpDef.desc = "Opens a pop up menu over the current menu/screen, with no mouse control";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "ClosePopUpMenu";
tmpDef.decl = "<entity> Entity ClosePopUpMenu(<string>: menu): void";
tmpDef.desc = "Closes the specified pop up menu if it is currently open";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "OpenMenu";
tmpDef.decl = "<entity> Entity OpenMenu(<string>: menu): void";
tmpDef.desc = "Opens a menu over the current menu/screen";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "CloseMenu";
tmpDef.decl = "<entity> Entity CloseMenu(<string>: menu): void";
tmpDef.desc = "Closes the current player menu";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "CloseInGameMenu";
tmpDef.decl = "<entity> Entity CloseInGameMenu(): void";
tmpDef.desc = "Closes the in-game menu for this client";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "MoveGravity";
tmpDef.decl = "<entity> Entity MoveGravity(<Vector3>: velocity, <int>: time): void";
tmpDef.desc = "Fling this entity";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "MoveTo";
tmpDef.decl = "<entity> Entity MoveTo(<Vector3>: point, <float>: time): void";
tmpDef.desc = "Move this entity to the given point";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "MoveTo";
tmpDef.decl = "<entity> Entity MoveTo(<Vector3>: point, <float>: time, <float>: accelTime): void";
tmpDef.desc = "Move this entity to the given point";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "MoveTo";
tmpDef.decl = "<entity> Entity MoveTo(<Vector3>: point, <float>: time, <float>: accelTime, <float>: decelTime): void";
tmpDef.desc = "Move this entity to the given point";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "MoveX";
tmpDef.decl = "<entity> Entity MoveX(<float>: point, <float>: time, <float>: accelTime?, <float>: decelTime?): void";
tmpDef.desc = "Move this entity to the given world x value";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "MoveY";
tmpDef.decl = "<entity> Entity MoveY(<float>: point, <float>: time, <float>: accelTime?, <float>: decelTime?): void";
tmpDef.desc = "Move this entity to the given world y value";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "MoveZ";
tmpDef.decl = "<entity> Entity MoveZ(<float>: point, <float>: time, <float>: accelTime?, <float>: decelTime?): void";
tmpDef.desc = "Move this entity to the given world z value";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "NotSolid";
tmpDef.decl = "<entity> Entity NotSolid(): void";
tmpDef.desc = "Unsets the solid flag, so that this object is no longer collidable";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "PhysicsLaunchClient";
tmpDef.decl = "<entity> Entity PhysicsLaunchClient(<Vector3>: point, <Vector3>: force): void";
tmpDef.desc = "Permanently turn this entity into a client physics object with an initial force vector at the specified point";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "PhysicsLaunchServer";
tmpDef.decl = "<entity> Entity PhysicsLaunchServer(<Vector3>: point, <Vector3>: force): void";
tmpDef.desc = "Permanently turn this entity into a server physics object with an initial force vector at the specified point";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "RotatePitch";
tmpDef.decl = "<entity> Entity RotatePitch(<int>: pitch, <float>: time, <float>: accelTime?, <float>: decelTime?): void";
tmpDef.desc = "Rotate this entity to the given pitch";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "RotateRoll";
tmpDef.decl = "<entity> Entity RotateRoll(<int>: roll, <float>: time, <float>: accelTime?, <float>: decelTime?): void";
tmpDef.desc = "Rotate this entity to the given roll angle";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "RotateTo";
tmpDef.decl = "<entity> Entity RotateTo(<Vector3>: angles, <float>: time, <float>: accelTime?, <float>: decelTime?): void";
tmpDef.desc = "Rotate this entity to the given world rotation value";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "RotateVelocity";
tmpDef.decl = "<entity> Entity RotateVelocity(<Vector3>: velocity, <float>: time, <float>: accelTime?, <float>: decelTime?): void";
tmpDef.desc = "Rotate this entity at a particular velocity for a given time";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "RotateYaw";
tmpDef.decl = "<entity> Entity RotateYaw(<int>: yaw, <float>: time, <float>: accelTime?, <float>: decelTime?): void";
tmpDef.desc = "Rotate this entity to the given yaw";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "Solid";
tmpDef.decl = "<entity> Entity Solid(): void";
tmpDef.desc = "Sets the solid flag, so that this object is collidable";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "Vibrate";
tmpDef.decl = "<entity> Entity Vibrate(<Vector3>: direction, <float>: amplitude, <float>: period, <float>: time): void";
tmpDef.desc = "Causes a script entity to vibrate, rotating around its origin, along a given vector direction";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "MoveSlide";
tmpDef.decl = "<entity> Entity MoveSlide(<Vector3>: point, <float>: time, <Vector3>: velocity): void";
tmpDef.desc = "Moves this entity by sliding it(TBD)";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "StopMoveSlide";
tmpDef.decl = "<entity> Entity StopMoveSlide(): void";
tmpDef.desc = "Stops this entity from sliding";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "AddPitch";
tmpDef.decl = "<entity> Entity AddPitch(<int>: pitch): void";
tmpDef.desc = "Add pitch in local space. Does not interpolate";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "AddYaw";
tmpDef.decl = "<entity> Entity AddYaw(<int>: yaw): void";
tmpDef.desc = "Add yaw in local space. Does not interpolate";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "AddRoll";
tmpDef.decl = "<entity> Entity AddRoll(<int>: roll): void";
tmpDef.desc = "Add roll in local space. Does not interpolate";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "PhysicsLaunchServerItem";
tmpDef.decl = "<entity> Entity PhysicsLaunchServerItem(<Vector3>: point, <Vector3>: force): void";
tmpDef.desc = "Launches this item";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "TransformMove";
tmpDef.decl = "TransformMove(<Vector3>: position1, <Vector3>: angles1, <Vector3>: position2, <Vector3>: angles2, <Vector3>: entityPosition, <Vector3>: entityAngles): entity";
tmpDef.desc = "Unknown effect";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "PhysicsExplosionSphere";
tmpDef.decl = "PhysicsExplosionSphere(<Vector3>: center, <int>: radius, <int>: height, <int>: force): void";
tmpDef.desc = "Create a physics explosion in the shape of a sphere that will hit any physics objects withing the given radius";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "PhysicsExplosionCylinder";
tmpDef.decl = "PhysicsExplosionCylinder(<Vector3>: center, <int>: radius, <int>: height, <int>: force): void";
tmpDef.desc = "Create a physics explosion in the shape of a cylinder that will hit any physics objects withing the given radius";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "PhysicsJolt";
tmpDef.decl = "PhysicsJolt(<Vector3>: center, <int>: outerRadius, <int>: innerRadius, <int>: force): void";
tmpDef.desc = "Imparts a 1-frame randomly-jittered impulse on physics objects in a radius.";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "PhysicsJitter";
tmpDef.decl = "PhysicsJitter(<Vector3>: center, <int>: outerRadius, <int>: innerRadius, <float>: minDisplacement, <float>: maxDisplacement): void";
tmpDef.desc = "Jitters physics objects touching the ground. Jitter forces are calculated in such a way as to displace the object upwards some height between min and max displacement at each point of contact with the ground.";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "Objective_Add";
tmpDef.decl = "Objective_Add(<int>: objectiveNumber, <string>: state, <Vector3>: position?, <string>: shader?): void";
tmpDef.desc = "Adds a new objective";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "Objective_Current";
tmpDef.decl = "Objective_Current(<int>: objectiveIndex, <params>: int[]): void";
tmpDef.desc = "Set which objective(s) are currently being done. If none specified, there's no current objective. Current objectives that are not specified to still be current, are set to active.";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "Objective_Delete";
tmpDef.decl = "Objective_Delete(<int>: objectiveNumber): void";
tmpDef.desc = "Removes an objective";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "Objective_Icon";
tmpDef.decl = "Objective_Icon(<int>: objectiveNumber, <string>: icon): void";
tmpDef.desc = "Sets the compass icon for an objective";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "Objective_OnEntity";
tmpDef.decl = "Objective_OnEntity(<int>: objectiveNumber, <Entity>: entity): void";
tmpDef.desc = "Sets the objective to get it's position from an entity";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "Objective_Position";
tmpDef.decl = "Objective_Position(<int>: objectiveNumber, <Vector3>: position): void";
tmpDef.desc = "Set the position of an objective, assumed to be the zeroth position";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "Objective_State";
tmpDef.decl = "Objective_State(<int>: objectiveNumber, <string>: state): void";
tmpDef.desc = "Set the state of an objective";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "Objective_Team";
tmpDef.decl = "Objective_Team(<int>: objectiveNumber, <string>: team): void";
tmpDef.desc = "Sets the team that the objective is for. Allows having different objectives for each team";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "PingPlayer";
tmpDef.decl = "<entity> Player PingPlayer(): void";
tmpDef.desc = "Flashes a player on their teammate's compasses";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "Objective_Player";
tmpDef.decl = "Objective_Player(<int>: objectiveNumber, <int>: playerNumber): void";
tmpDef.desc = "Sets the objective to get it's position from a player";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "Objective_PlayerTeam";
tmpDef.decl = "Objective_PlayerTeam(<int>: objectiveNumber, <int>: playerNumber): void";
tmpDef.desc = "Sets the objective to get it's position from a player for the player's team(TBD)";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "Objective_PlayerEnemyTeam";
tmpDef.decl = "Objective_PlayerEnemyTeam(<int>: objectiveNumber, <int>: playerNumber): void";
tmpDef.desc = "Sets the objective to get it's position from a player for the enemy team(TBD)";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "AdsButtonPressed";
tmpDef.decl = "<entity> Entity AdsButtonPressed(): bool";
tmpDef.desc = "Check if the player is pressing the 'ads' button\nReturns true if the player is pressing the 'ads' button";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "AllowAds";
tmpDef.decl = "<entity> Entity AllowAds(<bool>: ads): void";
tmpDef.desc = "Sets whether the player can switch to ADS";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "AllowJump";
tmpDef.decl = "<entity> Entity AllowJump(<bool>: jump): void";
tmpDef.desc = "Sets whether the player can jump";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "AllowSprint";
tmpDef.decl = "<entity> Entity AllowSprint(<bool>: sprint): void";
tmpDef.desc = "Sets whether the player can sprint";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "AnyAmmoForWeaponModes";
tmpDef.decl = "<entity> Entity AnyAmmoForWeaponModes(<string>: weapon): bool";
tmpDef.desc = "Checks if the player has any ammo available for the weapon or any of it's alt-modes (grenade launcher, etc)\nReturns true if the player has any ammo available for the weapon or any of it's alt-modes";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "AttackButtonPressed";
tmpDef.decl = "<entity> Entity AttackButtonPressed(): bool";
tmpDef.desc = "Check if the player is pressing the 'attack' button\nReturns true if the player is pressing the 'attack' button";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "ButtonPressed";
tmpDef.decl = "<entity> Entity ButtonPressed(<string>: key): bool";
tmpDef.desc = "Check if the host is pressing the button/key\nReturns true if the host is pressing the button/key";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "ClearPerks";
tmpDef.decl = "<entity> Entity ClearPerks(): void";
tmpDef.desc = "Removes all perks for a player";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "DeactivateChannelVolumes";
tmpDef.decl = "<entity> Entity DeactivateChannelVolumes(<string>: priority, <int>: fade): void";
tmpDef.desc = "Deactivates the channel volumes for the player on the given priority level";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "DeactivateReverb";
tmpDef.decl = "<entity> Entity DeactivateReverb(<string>: priority, <int>: fade): void";
tmpDef.desc = "Deactivates the sound reverbation for the player on the given priority level";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "FragButtonPressed";
tmpDef.decl = "<entity> Entity FragButtonPressed(): bool";
tmpDef.desc = "Check if the player is pressing the 'frag' button\nReturns true if the player is pressing the 'frag' button";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "FreezeControls";
tmpDef.decl = "<entity> Entity FreezeControls(<bool>: state): void";
tmpDef.desc = "Blocks or unblocks control input from this player";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetCurrentOffhand";
tmpDef.decl = "<entity> Entity GetCurrentOffhand(): string";
tmpDef.desc = "Gets the player's current off-hand weapon\nReturns the name of the player's current offhand weapon";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetCurrentWeapon";
tmpDef.decl = "<entity> Entity GetCurrentWeapon(): string";
tmpDef.desc = "Gets the player's current weapon\nReturns the name of the player's current weapon";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetCurrentWeaponClipAmmo";
tmpDef.decl = "<entity> Entity GetCurrentWeaponClipAmmo(): int";
tmpDef.desc = "Gets the amount of ammo left in the player's clip\nReturns the amount of ammo in the player's clip";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetFractionMaxAmmo";
tmpDef.decl = "<entity> Entity GetFractionMaxAmmo(<string>: weapon): float";
tmpDef.desc = "Gets the player's current ammunition amount as a fraction of the weapon's maximum ammunition\nReturns the player's current ammunition as a fraction of the weapon's maximum ammunition represented as a float";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetFractionStartAmmo";
tmpDef.decl = "<entity> Entity GetFractionStartAmmo(<string>: weapon): float";
tmpDef.desc = "Gets the player's current ammunition amount as a fraction of the weapon's starting ammunition\nReturns the player's current ammunition as a fraction of the weapon's starting ammunition represented as a float";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetNormalizedMovement";
tmpDef.decl = "<entity> Entity GetNormalizedMovement(): vector3";
tmpDef.desc = "Gets the player's normalized movement vector\nReturns (-1, 1) for X(forward) and Y(right) based on player's input";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetNormalizedCameraMovement";
tmpDef.decl = "<entity> Entity GetNormalizedCameraMovement(): vector3";
tmpDef.desc = "Gets the player's camera's normalized movement vector\nReturns (-1, 1) for X(forward) and Y(right) based on player's input";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetOffhandSecondaryClass";
tmpDef.decl = "<entity> Entity GetOffhandSecondaryClass(): string";
tmpDef.desc = "Gets the name that toggle is set to\nReturns the name (either 'smoke' or 'flash') of the player's secondary offhand class";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetPlayerAngles";
tmpDef.decl = "<entity> Entity GetPlayerAngles(): vector3";
tmpDef.desc = "Gets the player's angles\nReturns the player's angles";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetStance";
tmpDef.decl = "<entity> Entity GetStance(): string";
tmpDef.desc = "Gets the stance of the player. It only works for the player\nReturns the stance of the player. Possible return values are 'crouch', 'prone', and 'stand'";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetVelocity";
tmpDef.decl = "<entity> Entity GetVelocity(): vector3";
tmpDef.desc = "Gets the player's cvelocity\nReturns the player's velocity";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetWeaponAmmoClip";
tmpDef.decl = "<entity> Entity GetWeaponAmmoClip(<string>: weapon, <string>: clipSide?): int";
tmpDef.desc = "Gets the amount of ammo left in the player's weapon's current clip\nReturns the amount of ammo left in the player's weapon's current clip";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetWeaponAmmoStock";
tmpDef.decl = "<entity> Entity GetWeaponAmmoStock(<string>: weapon): int";
tmpDef.desc = "Gets the ammunition stockpile for the given weapon\nReturns the amount of reserve ammo the player has for the given weapon";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetWeaponsList";
tmpDef.decl = "<entity> Entity GetWeaponsList(): entity";
tmpDef.desc = "Gets an array of all weapons that the player has. Includes any alt-mode weapons\nReturns an array of all the weapons that the player has, including alt-mode meapons";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetWeaponsListAll";
tmpDef.decl = "<entity> Entity GetWeaponsListAll(): entity";
tmpDef.desc = "Gets an array of all weapons that the player has. Includes any alt-mode, offhand, and exclusive weapons\nReturns an array of all the weapons that the player has";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetWeaponsListPrimaries";
tmpDef.decl = "<entity> Entity GetWeaponsListPrimaries(): entity";
tmpDef.desc = "Gets an array of all primary weapons that the player has\nReturns an array of all the primary weapons that the player has";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetWeaponsListOffhands";
tmpDef.decl = "<entity> Entity GetWeaponsListOffhands(): entity";
tmpDef.desc = "Gets an array of all offhand weapons that the player has\nReturns an array of all the offhand weapons that the player has";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetWeaponsListItems";
tmpDef.decl = "<entity> Entity GetWeaponsListItems(): entity";
tmpDef.desc = "Gets an array of all item weapons that the player has\nReturns an array of all the item weapons that the player has";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetWeaponsListExclusives";
tmpDef.decl = "<entity> Entity GetWeaponsListExclusives(): entity";
tmpDef.desc = "Gets an array of all exclusive weapons that the player has\nReturns an array of all the exclusive weapons that the player has";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GiveMaxAmmo";
tmpDef.decl = "<entity> Entity GiveMaxAmmo(<string>: weapon): void";
tmpDef.desc = "Sets the player's ammunition to the weapon's maximum ammunition";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GiveStartAmmo";
tmpDef.decl = "<entity> Entity GiveStartAmmo(<string>: weapon): void";
tmpDef.desc = "Sets the player's ammunition to the weapon's default starting ammunition";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GiveWeapon";
tmpDef.decl = "<entity> Entity GiveWeapon(<string>: weapon, <int>: index?, <bool>: akimbo?): void";
tmpDef.desc = "Give the player a weapon";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "HasPerk";
tmpDef.decl = "<entity> Entity HasPerk(<string>: perk): bool";
tmpDef.desc = "Test if a player has a perk\nReturns true if the player has the perk";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "HasWeapon";
tmpDef.decl = "<entity> Entity HasWeapon(<string>: weapon): bool";
tmpDef.desc = "Checks whether the player has the given weapon\nReturns true if the player has the given weapon";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "IsOnGround";
tmpDef.decl = "<entity> Entity IsOnGround(): bool";
tmpDef.desc = "Checks if the player is on the ground\nReturns true if the player is on ground";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "MeleeButtonPressed";
tmpDef.decl = "<entity> Entity MeleeButtonPressed(): bool";
tmpDef.desc = "Check if the player is pressing the 'melee' button\nReturns true if the player is pressing the 'melee' button";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "NotifyOnPlayerCommand";
tmpDef.decl = "<entity> Entity NotifyOnPlayerCommand(<string>: notify, <string>: command): void";
tmpDef.desc = "Whenever the console command processor encounters <command> for any reason, it will notify script with the string <notify> on the player entity. Additionally, it will pass the arguments to the notify as strings, where the first argument is the initiating command.";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "PlayerAds";
tmpDef.decl = "<entity> Entity PlayerAds(): float";
tmpDef.desc = "Gets the player's weapon position fraction\nReturns the player's weapon position fraction";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "PlayerLinkTo";
tmpDef.decl = "<entity> Player PlayerLinkTo(<Entity>: entity, <string>: tag, <float>: viewFraction?, <int>: rightArc?, <int>: leftArc?, <int>: topArc?, <int>: bottomArc?, <bool>: collide?): void";
tmpDef.desc = "Attaches the player to an entity. Any entity rotation is added to the player's view, allow the player to look around. Rotating the parent entity/tag will not move the player's eye position, but only the player's view angles. Thus, the player's eye position is locked in place, always directly above the parent tag.";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "PlayerLinkToAbsolute";
tmpDef.decl = "<entity> Player PlayerLinkToAbsolute(<Entity>: entity, <string>: tag?): void";
tmpDef.desc = "Attaches the player to an entity. No view movement is allowed. The player's eye position will remain fixed relative to the parent entity/tag. Thus, pitching and rolling will cause the player's eye position to move. (But the player entity always remains vertical)";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "PlayerLinkToDelta";
tmpDef.decl = "<entity> Player PlayerLinkToDelta(<Entity>: entity, <string>: tag, <float>: viewFraction?, <int>: rightArc?, <int>: leftArc?, <int>: topArc?, <int>: bottomArc?, <bool>: collide?): void";
tmpDef.desc = "Attaches the player to an entity. Any entity rotation is added to the player's view, allow the player to look around. The player's eye position will remain fixed relative to the parent entity/tag. Thus, pitching and rolling will cause the player's eye position to move. (But the player entity always remains vertical)";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "PlayLocalSound";
tmpDef.decl = "<entity> Entity PlayLocalSound(<string>: sound): void";
tmpDef.desc = "Plays a sound locally to the player";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "ResetSpreadOverride";
tmpDef.decl = "<entity> Entity ResetSpreadOverride(): void";
tmpDef.desc = "Resets the player spread value to the ones of the weapon in use";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SecondaryOffhandButtonPressed";
tmpDef.decl = "<entity> Entity SecondaryOffhandButtonPressed(): bool";
tmpDef.desc = "Check if the player is pressing the 'secondary offhand' button\nReturns true if the player is pressing the 'secondary offhand' button";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetActionSlot";
tmpDef.decl = "<entity> Entity SetActionSlot(<int>: slot, <string>: option, <string>: weapon?): void";
tmpDef.desc = "Sets the option to perform when the player executes (for example) '+actionslot 1'";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetChannelVolumes";
tmpDef.decl = "<entity> Entity SetChannelVolumes(<string>: priority, <string>: shockName, <float>: fade?): void";
tmpDef.desc = "Sets the channel volumes for the player (a way of fading volumes by type)";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetClientDvar";
tmpDef.decl = "<entity> Entity SetClientDvar(<string>: dvar, <Parameter>: value): void";
tmpDef.desc = "Set the values of a dvar which are specific to each client";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetClientDvars";
tmpDef.decl = "<entity> Entity SetClientDvars(<string>: dvar, <Parameter>: value, <params>: Parameter[]): void";
tmpDef.desc = "Set the values of a list of dvars which are specific to each client";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetDepthOfField";
tmpDef.decl = "<entity> Entity SetDepthOfField(<int>: nearStart, <int>: nearEnd, <int>: farStart, <int>: farEnd, <float>: nearBlur, <float>: farBlur): void";
tmpDef.desc = "Set the depth of field values for a player. If start >= end for near or far, depth of field is disabled for that region";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetMoveSpeedScale";
tmpDef.decl = "<entity> Entity SetMoveSpeedScale(<float>: scale): void";
tmpDef.desc = "Scales player movement speed by this amount";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetOffhandSecondaryClass";
tmpDef.decl = "<entity> Entity SetOffhandSecondaryClass(<string>: name): void";
tmpDef.desc = "Set whether the player can use smoke grenades or flashbangs";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetOrigin";
tmpDef.decl = "<entity> Entity SetOrigin(<Vector3>: origin): void";
tmpDef.desc = "Set the player's origin";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetPerk";
tmpDef.decl = "<entity> Entity SetPerk(<string>: perk, <bool>: codePerk?, <bool>: useSlot?): void";
tmpDef.desc = "Give the specified perk";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetPlayerAngles";
tmpDef.decl = "<entity> Entity SetPlayerAngles(<Vector3>: angles): void";
tmpDef.desc = "Set the player's angles";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetReverb";
tmpDef.decl = "<entity> Entity SetReverb(<string>: priority, <string>: roomType, <float>: dryLevel?, <float>: wetLevel?, <float>: fade?): void";
tmpDef.desc = "Set the sound reverbation for the player";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetSpreadOverride";
tmpDef.decl = "<entity> Entity SetSpreadOverride(<int>: spread): void";
tmpDef.desc = "Sets the player fixed spread value";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetVelocity";
tmpDef.decl = "<entity> Entity SetVelocity(<Vector3>: velocity): void";
tmpDef.desc = "Set the player's velocity";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetViewModel";
tmpDef.decl = "<entity> Entity SetViewModel(<string>: viewmodel): void";
tmpDef.desc = "Set the player's current viewmodel";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetViewModelDepthOfField";
tmpDef.decl = "<entity> Entity SetViewModelDepthOfField(<float>: start, <float>: end): void";
tmpDef.desc = "Set the depth of field values for the player's viewmodel when at hip. If start >= end, depth of field is disabled";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetWeaponAmmoClip";
tmpDef.decl = "<entity> Entity SetWeaponAmmoClip(<string>: weapon, <int>: ammo, <string>: clipSide?): void";
tmpDef.desc = "Set the weapon clip ammunition for the given weapon";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetWeaponAmmoStock";
tmpDef.decl = "<entity> Entity SetWeaponAmmoStock(<string>: weapon, <int>: ammo): void";
tmpDef.desc = "Set the ammunition stockpile for the given weapon";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "ShellShock";
tmpDef.decl = "<entity> Entity ShellShock(<string>: shellshock, <float>: duration, <bool>: overrideCheat?): void";
tmpDef.desc = "Start a shell shock sequence for the player. The shell shock must be precached, otherwise calling this script will cause a script error";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "StopLocalSound";
tmpDef.decl = "<entity> Entity StopLocalSound(<string>: sound): void";
tmpDef.desc = "Stops all instances of a local soundalias running on a player";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "StopShellShock";
tmpDef.decl = "<entity> Entity StopShellShock(): void";
tmpDef.desc = "Stop a shell shock sequence for the player";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SwitchToOffhand";
tmpDef.decl = "<entity> Entity SwitchToOffhand(): void";
tmpDef.desc = "Switch to the player's offhand weapon";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SwitchToWeapon";
tmpDef.decl = "<entity> Entity SwitchToWeapon(<string>: weapon): void";
tmpDef.desc = "Switch to a different weapon";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SwitchToWeaponImmediate";
tmpDef.decl = "<entity> Entity SwitchToWeaponImmediate(<string>: weapon): void";
tmpDef.desc = "Switch to a different weapon immediately, skipping any animations";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "TakeAllWeapons";
tmpDef.decl = "<entity> Entity TakeAllWeapons(): void";
tmpDef.desc = "Remove all the weapons from the player";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "TakeWeapon";
tmpDef.decl = "<entity> Entity TakeWeapon(<string>: weapon): void";
tmpDef.desc = "Take a weapon from the player";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "UnSetPerk";
tmpDef.decl = "<entity> Entity UnSetPerk(<string>: perk, <bool>: useSlot?): void";
tmpDef.desc = "Takes the specified perk from the player";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "UseButtonPressed";
tmpDef.decl = "<entity> Entity UseButtonPressed(): bool";
tmpDef.desc = "Check if the player is pressing the 'use' button\nReturns true if the player is pressing the 'use' button";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "ViewKick";
tmpDef.decl = "<entity> Entity ViewKick(<int>: force, <Vector3>: source): void";
tmpDef.desc = "Throw the screen around as if the player has been damaged";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "WeaponLockFinalize";
tmpDef.decl = "<entity> Player WeaponLockFinalize(<Entity>: entity): void";
tmpDef.desc = "Locks player's weapon onto an entity. Implies WeaponLockStart(), so this may be called to jump to a hard lock";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "WeaponLockFree";
tmpDef.decl = "<entity> Entity WeaponLockFree(): void";
tmpDef.desc = "Clear the player's weapon lock";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "WeaponLockNoClearance";
tmpDef.decl = "<entity> Entity WeaponLockNoClearance(<bool>: noClearance): void";
tmpDef.desc = "When set true, the player will be unable to fire thair lockon weapon, and will recieve a hint print telling them that there is an obstruction";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "WeaponLockStart";
tmpDef.decl = "<entity> Entity WeaponLockStart(): void";
tmpDef.desc = "Begins player's weapon lockon sequence (hud effects, etc). Will clear any existing hard lock. Use WeaponLockFinalize(this Entity entity, ) to complete lock";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "WeaponLockTargetTooClose";
tmpDef.decl = "<entity> Entity WeaponLockTargetTooClose(<bool>: tooClose): void";
tmpDef.desc = "When set true, the player will be unable to fire their lockon weapons, and will recieve a hint print telling them that they are too close";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetPlayerViewHeight";
tmpDef.decl = "<entity> Entity GetPlayerViewHeight(): float";
tmpDef.desc = "Gets the player's view height\nReturns the player's view height as a float";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetCurrentPrimaryWeapon";
tmpDef.decl = "<entity> Entity GetCurrentPrimaryWeapon(): string";
tmpDef.desc = "Gets the player's weapon that is in the primary slot\nReturns the name of the weapon in the player's primary slot";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "IsDualWielding";
tmpDef.decl = "<entity> Entity IsDualWielding(): bool";
tmpDef.desc = "Checks if the player is currently holding a dual wield weapon\nReturns true if the player is holding a dual wield weapon";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "IsReloading";
tmpDef.decl = "<entity> Entity IsReloading(): bool";
tmpDef.desc = "Checks if the player is reloading\nReturns true if the player is reloading";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "IsSwitchingWeapon";
tmpDef.decl = "<entity> Entity IsSwitchingWeapon(): bool";
tmpDef.desc = "Checks if the player is in the process of switching weapons\nReturns true if the player is switching to another weapon";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "IsUsingTurret";
tmpDef.decl = "<entity> Entity IsUsingTurret(): bool";
tmpDef.desc = "Checks if the player is currently manning a turret\nReturns true if the player is manning a turret";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetOffhandPrimaryClass";
tmpDef.decl = "<entity> Entity GetOffhandPrimaryClass(): string";
tmpDef.desc = "Gets the name that primary offhand toggle is set to\nReturns the name of the player's primary offhand class";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetOffhandPrimaryClass";
tmpDef.decl = "<entity> Entity SetOffhandPrimaryClass(<string>: name): void";
tmpDef.desc = "Sets the player's current primary offhand class";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "DisableOffhandWeapons";
tmpDef.decl = "<entity> Entity DisableOffhandWeapons(): void";
tmpDef.desc = "Disables the use of offhand weapons (grenades, flashes)";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "EnableOffhandWeapons";
tmpDef.decl = "<entity> Entity EnableOffhandWeapons(): void";
tmpDef.desc = "Enables the use of offhand weapons (grenades, flashes)";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "DisableWeaponSwitch";
tmpDef.decl = "<entity> Entity DisableWeaponSwitch(): void";
tmpDef.desc = "Disables weapon switching for the player";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "EnableWeaponSwitch";
tmpDef.decl = "<entity> Entity EnableWeaponSwitch(): void";
tmpDef.desc = "Enables weapon switching for the player";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "DisableUsability";
tmpDef.decl = "<entity> Entity DisableUsability(): void";
tmpDef.desc = "Makes the player unable to use things such as triggers, turrets, etc.";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "EnableUsability";
tmpDef.decl = "<entity> Entity EnableUsability(): void";
tmpDef.desc = "Makes the player able to use things such as triggers, turrets, etc.";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetWhizBySpreads";
tmpDef.decl = "<entity> Entity SetWhizBySpreads(<float>: x, <float>: y, <float>: z): void";
tmpDef.desc = "TBD";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetWhizByRadii";
tmpDef.decl = "<entity> Entity SetWhizByRadii(<float>: x, <float>: y, <float>: z): void";
tmpDef.desc = "TBD";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetVolMod";
tmpDef.decl = "<entity> Entity SetVolMod(<float>: vol, <float>: overrideVol): void";
tmpDef.desc = "TBD";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetChannelVolume";
tmpDef.decl = "<entity> Entity SetChannelVolume(): void";
tmpDef.desc = "Set the channel volume for the player(TBD)";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetAimSpreadMovementScale";
tmpDef.decl = "<entity> Entity SetAimSpreadMovementScale(<float>: scale): void";
tmpDef.desc = "Sets the movement scale that the player's crosshairs spread out/in while they are moving";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetViewKickScale";
tmpDef.decl = "<entity> Entity SetViewKickScale(<float>: scale): void";
tmpDef.desc = "Sets the scale of how much the player's screen gets thrown around when getting hurt";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetViewKickScale";
tmpDef.decl = "<entity> Entity GetViewKickScale(): float";
tmpDef.desc = "Gets the scale of how much the player's screen gets thrown around when getting hurt\nReturns the scale value of how much the player's screen kicks when being hurt";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "CanPlayerPlaceSentry";
tmpDef.decl = "<entity> Entity CanPlayerPlaceSentry(): array";
tmpDef.desc = "Checks whether the player can place a sentry in front of them as a valid position\nReturns 'result'(bool whether the player can place a sentry or not), 'origin'(The position of the placement, and 'angles'(The angles of the placement) all in an array";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "CanPlayerPlaceTank";
tmpDef.decl = "<entity> Entity CanPlayerPlaceTank(): array";
tmpDef.desc = "Checks whether the player can place a tank in front of them as a valid position\nReturns 'result'(bool whether the player can place a tank or not), 'origin'(The position of the placement, and 'angles'(The angles of the placement) all in an array";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "VisionSetNakedForPlayer";
tmpDef.decl = "<entity> Entity VisionSetNakedForPlayer(<string>: vision, <float>: fade?): void";
tmpDef.desc = "Sets the 'naked' vision for this player";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "VisionSetNightForPlayer";
tmpDef.decl = "<entity> Entity VisionSetNightForPlayer(<string>: vision, <float>: fade?): void";
tmpDef.desc = "Sets the visionset for this player when they have nightvision goggles equipped";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "VisionSetMissileCamForPlayer";
tmpDef.decl = "<entity> Entity VisionSetMissileCamForPlayer(<string>: vision, <float>: fade?): void";
tmpDef.desc = "Sets the visionset for this player while they are controlling a missile";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "VisionSetThermalForPlayer";
tmpDef.decl = "<entity> Entity VisionSetThermalForPlayer(<string>: vision, <float>: fade?): void";
tmpDef.desc = "Sets the visionset for this player when they are scoped into a thermal scope";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "VisionSetPainForPlayer";
tmpDef.decl = "<entity> Entity VisionSetPainForPlayer(<string>: vision, <float>: fade?): void";
tmpDef.desc = "Sets the visionset for this player when they are in pain/near death";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetPlayerWeaponModel";
tmpDef.decl = "<entity> Entity GetPlayerWeaponModel(): string";
tmpDef.desc = "Gets the weapon model of the player's current weapon\nReturns the model name of the player's current weapon";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetPlayerKnifeModel";
tmpDef.decl = "<entity> Entity GetPlayerKnifeModel(): string";
tmpDef.desc = "Gets the weapon model of the player's knife\nReturns the model name of the player's current knife";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "UpdatePlayerModelWithWeapons";
tmpDef.decl = "<entity> Entity UpdatePlayerModelWithWeapons(): void";
tmpDef.desc = "Updates the player's current player model according to their current loadout";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "CanMantle";
tmpDef.decl = "<entity> Entity CanMantle(): bool";
tmpDef.desc = "Checks if the player can mantle at their current location\nReturns true if the player can mantle";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "ForceMantle";
tmpDef.decl = "<entity> Entity ForceMantle(): void";
tmpDef.desc = "Forces the player to mantle in their current spot regardless if they can";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "Player_RecoilScaleOn";
tmpDef.decl = "<entity> Entity Player_RecoilScaleOn(<int>: scale): int";
tmpDef.desc = "Turns on recoil scaling if off and sets the player's current recoil scaling factor";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "Player_RecoilScaleOff";
tmpDef.decl = "<entity> Entity Player_RecoilScaleOff(): void";
tmpDef.desc = "Turns off recoil scaling so that they use default values";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "VisionSyncWithPlayer";
tmpDef.decl = "<entity> Entity VisionSyncWithPlayer(<Entity>: player): void";
tmpDef.desc = "Syncs this player's vision with another player's";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetEnterTime";
tmpDef.decl = "<entity> Entity SetEnterTime(): void";
tmpDef.desc = "TBD";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetGUID";
tmpDef.decl = "<entity> Entity GetGUID(): string";
tmpDef.desc = "Gets this player's GUID\nReturns the player's GUID";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetXUID";
tmpDef.decl = "<entity> Entity GetXUID(): string";
tmpDef.desc = "Gets this player's XUID\nReturns the player's XUID";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "IsHost";
tmpDef.decl = "<entity> Entity IsHost(): bool";
tmpDef.desc = "Checks if this player is the host of the current game\nReturns true if this player is the host of the current game";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetSpectatingPlayer";
tmpDef.decl = "<entity> Entity GetSpectatingPlayer(): entity";
tmpDef.desc = "Gets the player that this player is currently spectating\nReturns the player that this player is currently spectating";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "PredictStreamPos";
tmpDef.decl = "<entity> Entity PredictStreamPos(<Vector3>: origin, <Vector3>: angles): void";
tmpDef.desc = "TBD";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetCardDisplaySlot";
tmpDef.decl = "<entity> Entity SetCardDisplaySlot(<Entity>: player, <int>: slot): void";
tmpDef.desc = "Sets display slot info for this player, used for card splashes such as 'YOU KILLED', 'KILLED YOU','SPECTATING'";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetCardTitle";
tmpDef.decl = "<entity> Entity SetCardTitle(<string>: title): void";
tmpDef.desc = "Sets this player's playercard title";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetCardIcon";
tmpDef.decl = "<entity> Entity SetCardIcon(<string>: icon): void";
tmpDef.desc = "Sets this player's playercard icon";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetCardNamePlate";
tmpDef.decl = "<entity> Entity SetCardNamePlate(<string>: nameplate): void";
tmpDef.desc = "Sets this player's playercard nameplate(unused)";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "LastStandRevive";
tmpDef.decl = "<entity> Entity LastStandRevive(): void";
tmpDef.desc = "Revives this player if they are in last stand or final stand";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetSpectateDefaults";
tmpDef.decl = "<entity> Entity SetSpectateDefaults(<Vector3>: origin, <Vector3>: angles): void";
tmpDef.desc = "Sets the default spectator starting position for this player";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetThirdPersonCrosshairOffset";
tmpDef.decl = "<entity> Entity GetThirdPersonCrosshairOffset(): float";
tmpDef.desc = "Gets the offset for the player's crosshair when in a third person view\nReturns the offset for the player's crosshair when in a third person view";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "DisableWeaponPickup";
tmpDef.decl = "<entity> Entity DisableWeaponPickup(): void";
tmpDef.desc = "Disables weapon pickup for this player";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "EnableWeaponPickup";
tmpDef.decl = "<entity> Entity EnableWeaponPickup(): void";
tmpDef.desc = "Enables weapon pickup for this player";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "PlayerLinkWeaponViewToDelta";
tmpDef.decl = "<entity> Player PlayerLinkWeaponViewToDelta(<Entity>: entity?): void";
tmpDef.desc = "TBD";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "PlayerLinkToBlend";
tmpDef.decl = "<entity> Player PlayerLinkToBlend(<Entity>: entity?): void";
tmpDef.desc = "TBD";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "PlayerLinkedOffsetEnable";
tmpDef.decl = "<entity> Entity PlayerLinkedOffsetEnable(): void";
tmpDef.desc = "Enables setting an offset to any linked entities on this entity(TBD)";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "PlayerLinkedOffsetDisable";
tmpDef.decl = "<entity> Entity PlayerLinkedOffsetDisable(): void";
tmpDef.desc = "Disables setting an offset to any linked entities on this entity(TBD)";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "PlayerLinkedSetViewZNear";
tmpDef.decl = "<entity> Entity PlayerLinkedSetViewZNear(<float>: zNear): void";
tmpDef.desc = "Sets the z_near value for this player's view when the camera is linked to another entity";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "PlayerLinkedSetUseBaseAngleForViewClamp";
tmpDef.decl = "<entity> Entity PlayerLinkedSetUseBaseAngleForViewClamp(): void";
tmpDef.desc = "TBD";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "LerpViewAngleClamp";
tmpDef.decl = "<entity> Entity LerpViewAngleClamp(): void";
tmpDef.desc = "TBD";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetViewAngleResistance";
tmpDef.decl = "<entity> Entity SetViewAngleResistance(): void";
tmpDef.desc = "TBD";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "ThermalVisionOn";
tmpDef.decl = "<entity> Entity ThermalVisionOn(): void";
tmpDef.desc = "Turns on thermal vision for this player";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "ThermalVisionOff";
tmpDef.decl = "<entity> Entity ThermalVisionOff(): void";
tmpDef.desc = "Turns off thermal vision for this player";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "ThermalVisionFOFOverlayOn";
tmpDef.decl = "<entity> Entity ThermalVisionFOFOverlayOn(): void";
tmpDef.desc = "Turns on player target indicators so that enemy players have a red box around them";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "ThermalVisionFOFOverlayOff";
tmpDef.decl = "<entity> Entity ThermalVisionFOFOverlayOff(): void";
tmpDef.desc = "Turns off player target indicators";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "AutospotOverlayOn";
tmpDef.decl = "<entity> Entity AutospotOverlayOn(): void";
tmpDef.desc = "Turns on autospot so that all player names are visible";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "AutospotOverlayOff";
tmpDef.decl = "<entity> Entity AutospotOverlayOff(): void";
tmpDef.desc = "Turns off autospot so that player names are only visible when looking at them";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "ForceUseHintOn";
tmpDef.decl = "<entity> Entity ForceUseHintOn(<string>: hint): void";
tmpDef.desc = "Set's a player's use hint and forces it to display. Use ForceUseHintOff() to remove it";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "ForceUseHintOff";
tmpDef.decl = "<entity> Entity ForceUseHintOff(): void";
tmpDef.desc = "Removes any use hints on the player's screen";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "MakeSoft";
tmpDef.decl = "<entity> Entity MakeSoft(): entity";
tmpDef.desc = "Makes this entity a soft entity(TBD)";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "MakeHard";
tmpDef.decl = "<entity> Entity MakeHard(): entity";
tmpDef.desc = "Makes this entity a hard entity";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "WillNeverChange";
tmpDef.decl = "<entity> Entity WillNeverChange(): void";
tmpDef.desc = "Sets a flag for this entity to tell the game that this entity will remain exactly as it is when this function is called. This will disable any script interactivity with this entity";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetStance";
tmpDef.decl = "<entity> Entity SetStance(<string>: stance): void";
tmpDef.desc = "Sets this player's stance. Valid stances are 'prone', 'crouch', and 'stand'";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "StunPlayer";
tmpDef.decl = "<entity> Entity StunPlayer(<float>: time): void";
tmpDef.desc = "Stuns this player for the specified amount of time";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "FadeOutShellShock";
tmpDef.decl = "<entity> Entity FadeOutShellShock(): void";
tmpDef.desc = "Fades out any current shellshock for this player(TBD)";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetMotionBlurMoveScale";
tmpDef.decl = "<entity> Entity SetMotionBlurMoveScale(<float>: scale): void";
tmpDef.desc = "Sets the scale at which this player's vision blurs while moving";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetMotionBlurTurnScale";
tmpDef.decl = "<entity> Entity SetMotionBlurTurnScale(<float>: scale): void";
tmpDef.desc = "Sets the scale at which this player's vision blurs while looking around";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetMotionBlurZoomScale";
tmpDef.decl = "<entity> Entity SetMotionBlurZoomScale(<float>: scale): void";
tmpDef.desc = "Sets the scale at which this player's vision blurs while zooming in";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetPlayerSetting";
tmpDef.decl = "<entity> Entity GetPlayerSetting(): string";
tmpDef.desc = "Gets a setting value from this player\nReturns the player's value of the given setting";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetLocalPlayerProfileData";
tmpDef.decl = "<entity> Entity GetLocalPlayerProfileData(): string";
tmpDef.desc = "Gets data from this player's local stats(TBD)\nReturns the player's local value of the given stat";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetLocalPlayerProfileData";
tmpDef.decl = "<entity> Entity SetLocalPlayerProfileData(): void";
tmpDef.desc = "Sets a stat on this player's local stat file";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "RemoteCameraSoundscapeOn";
tmpDef.decl = "<entity> Entity RemoteCameraSoundscapeOn(): void";
tmpDef.desc = "Enables sounds to be heard from the camera position if this player's camera is somewhere else";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "RemoteCameraSoundscapeOff";
tmpDef.decl = "<entity> Entity RemoteCameraSoundscapeOff(): void";
tmpDef.desc = "Disables sounds to be heard from the camera position if this player's camera is somewhere else";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "RadarJamOn";
tmpDef.decl = "<entity> Entity RadarJamOn(): void";
tmpDef.desc = "Jams this player's radar";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "RadarJamOff";
tmpDef.decl = "<entity> Entity RadarJamOff(): void";
tmpDef.desc = "Un-jams this player's radar";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetMotionTrackerVisible";
tmpDef.decl = "<entity> Entity SetMotionTrackerVisible(<bool>: visible): void";
tmpDef.desc = "Sets whether this player is visible on heartbeat sensors or not";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetMotionTrackerVisible";
tmpDef.decl = "<entity> Entity GetMotionTrackerVisible(): bool";
tmpDef.desc = "Gets whether this player is visible on heartbeat sensors or not\nReturns true if this player is visible on heartbeat sensors";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetWaterSheeting";
tmpDef.decl = "<entity> Entity SetWaterSheeting(<int>: sheet, <int>: duration): void";
tmpDef.desc = "Sets a water sheet over the player's screen as if they submerged under water";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetWeaponHudIconOverride";
tmpDef.decl = "<entity> Entity SetWeaponHudIconOverride(<string>: icon): void";
tmpDef.desc = "Sets the weapon hud icon override for this player. This will override any icon in place of the player's current offhand and replace it with the given shader";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetWeaponHudIconOverride";
tmpDef.decl = "<entity> Entity GetWeaponHudIconOverride(): string";
tmpDef.desc = "Gets the current offhand weapon hud override icon this player has\nReturns the name of the shader that this player's offhand icon override is set to";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetEMPJammed";
tmpDef.decl = "<entity> Entity SetEMPJammed(<bool>: jammed): void";
tmpDef.desc = "Sets whether this player's screen is emp jammed";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "PlayerSetExpFog";
tmpDef.decl = "<entity> Entity PlayerSetExpFog(<float>: startDist, <float>: halfwayDist, <Vector3>: RGB, <float>: transitionTime): void";
tmpDef.desc = "Sets this player's exponential fog values";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "IsItemUnlocked";
tmpDef.decl = "<entity> Entity IsItemUnlocked(<string>: item): bool";
tmpDef.desc = "Checks whether this player has the given item unlocked or not";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetPlayerData";
tmpDef.decl = "<entity> Entity GetPlayerData(<params>: Parameter[]): parameter";
tmpDef.desc = "Gets stats from the player's playerdata\nReturns the value of the data field";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetPlayerData";
tmpDef.decl = "<entity> Entity SetPlayerData(<params>: Parameter[]): void";
tmpDef.desc = "Sets a data field in this player's playerdata";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "IsUsingOnlineDataOffline";
tmpDef.decl = "<entity> Entity IsUsingOnlineDataOffline(): bool";
tmpDef.desc = "Checks if this player is currently using online data while offline\nReturns true if the player is using online data while offline";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetRestedTime";
tmpDef.decl = "<entity> Entity GetRestedTime(): int";
tmpDef.desc = "Gets this player's time since the last game they player, in seconds\nReturns the player's amount of time since their last game";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "Send73Command";
tmpDef.decl = "<entity> Entity Send73Command(): int";
tmpDef.desc = "TBD";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SendLeaderboards";
tmpDef.decl = "<entity> Entity SendLeaderboards(): void";
tmpDef.desc = "Sends the current leaderboard stats to the player(TBD)";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "PlayerForceDeathAnim";
tmpDef.decl = "<entity> Entity PlayerForceDeathAnim(<Entity>: inflictor, <string>: meansOfDeath, <string>: hitLoc, <Vector3>: direction): void";
tmpDef.desc = "Forces this player to start their death animations, crediting the inflictor with a kill but not killing this player";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "StartAC130";
tmpDef.decl = "<entity> Entity StartAC130(): void";
tmpDef.desc = "Informs the game that this player is starting to ride an AC130";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "StopAC130";
tmpDef.decl = "<entity> Entity StopAC130(): void";
tmpDef.desc = "Informs the game that this player has stopped riding an AC130";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "CanSpawn";
tmpDef.decl = "<entity> Entity CanSpawn(<Vector3>: origin): bool";
tmpDef.desc = "Checks if a player can spawn at this position\nReturns true if a player can spawn at this position";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "IPrintLn";
tmpDef.decl = "<entity> Entity IPrintLn(<string>: message): void";
tmpDef.desc = "Write a line to this player's screen.";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "IPrintLnBold";
tmpDef.decl = "<entity> Entity IPrintLnBold(<string>: message): void";
tmpDef.desc = "Write a bold line to this player's screen.";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "PlayerHide";
tmpDef.decl = "<entity> Entity PlayerHide(): void";
tmpDef.desc = "Hides a visible player";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "IsSplitScreenPlayer";
tmpDef.decl = "<entity> Entity IsSplitScreenPlayer(): bool";
tmpDef.desc = "Checks if the player is a splitscreen player\nReturns true if the player is a splitscreen player";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "IsSplitScreenPlayerPrimary";
tmpDef.decl = "<entity> Entity IsSplitScreenPlayerPrimary(): bool";
tmpDef.desc = "Checks if the player is the primary splitscreen player\nReturns true if the player is the primary splitscreen player";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "TrackerUpdate";
tmpDef.decl = "<entity> Entity TrackerUpdate(<string>: stat, <int>: value): void";
tmpDef.desc = "Updates values of the given leaderboard stat from the leaderboard tracker for this player";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "ThermalDrawEnable";
tmpDef.decl = "<entity> Entity ThermalDrawEnable(): void";
tmpDef.desc = "Causes player models to be drawn as if they are seen in thermal mode";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "ThermalDrawDisable";
tmpDef.decl = "<entity> Entity ThermalDrawDisable(): void";
tmpDef.desc = "Turns off drawing player models in thermal mode";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "PreCacheHeadIcon";
tmpDef.decl = "PreCacheHeadIcon(<string>: headicon): void";
tmpDef.desc = "Precache a head icon";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "PreCacheItem";
tmpDef.decl = "PreCacheItem(<string>: item): void";
tmpDef.desc = "Precaches a given item. It must be called before any wait statements in the level script";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "PreCacheLocationSelector";
tmpDef.decl = "PreCacheLocationSelector(<string>: material): void";
tmpDef.desc = "Precaches a material to be used as an indicator during location selection on the map";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "PreCacheMenu";
tmpDef.decl = "PreCacheMenu(<string>: menu): void";
tmpDef.desc = "Precaches this menu";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "PreCacheModel";
tmpDef.decl = "PreCacheModel(<string>: model): void";
tmpDef.desc = "Precaches the given model. It must be called before any wait statements in the level script";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "PreCacheRumble";
tmpDef.decl = "PreCacheRumble(<string>: rumble): void";
tmpDef.desc = "Precaches the given rumble. It must be called before any wait statements in the level script";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "PreCacheShader";
tmpDef.decl = "PreCacheShader(<string>: material): void";
tmpDef.desc = "Precaches the given shader. It must be called before any wait statements in the level script";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "PreCacheShellShock";
tmpDef.decl = "PreCacheShellShock(<string>: shellshock): void";
tmpDef.desc = "Precaches the shellshock effect. It must be called before any wait statements in the level script";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "PreCacheStatusIcon";
tmpDef.decl = "PreCacheStatusIcon(<string>: icon): void";
tmpDef.desc = "Precaches a status icon";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "PreCacheString";
tmpDef.decl = "PreCacheString(<string>: text): void";
tmpDef.desc = "Precaches the given string. It must be called before any wait statements in the level script";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "PreCacheVehicle";
tmpDef.decl = "PreCacheVehicle(<string>: vehicle): void";
tmpDef.desc = "Precaches the weapon info structure for a vehicle. It must be called before any wait statements in the level script";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "TableLookupIString";
tmpDef.decl = "TableLookupIString(<string>: filename, <int>: column, <Parameter>: value, <int>: columnReturn): string";
tmpDef.desc = "Look up a row in a table and pull out a particular column from that row in an IString\nReturns the value pulled from the given row and column as an IString";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "TableLookup";
tmpDef.decl = "TableLookup(<string>: filename, <int>: column, <Parameter>: value, <int>: columnReturn): string";
tmpDef.desc = "Look up a row in a table and pull out a particular column from that row\nReturns the value pulled from the given row and column";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "PreCacheFXTeamThermal";
tmpDef.decl = "PreCacheFXTeamThermal(<int>: effect, <string>: tag): void";
tmpDef.desc = "Precaches a thermal effect for use on the specified tag";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "PreCacheMiniMapIcon";
tmpDef.decl = "PreCacheMiniMapIcon(<string>: icon): void";
tmpDef.desc = "Precache a minimap icon";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "PreCacheMpAnim";
tmpDef.decl = "PreCacheMpAnim(<string>: anim): void";
tmpDef.desc = "Precache an Animation";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "PreCacheLeaderboards";
tmpDef.decl = "PreCacheLeaderboards(<string>: leaderboard): void";
tmpDef.desc = "Precache a leaderboard definition";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "TableLookupByRow";
tmpDef.decl = "TableLookupByRow(<string>: filename, <int>: row, <int>: column): string";
tmpDef.desc = "Look up a row and column in a table and pull out that particular value\nReturns the value pulled from the given row and column";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "TableLookupIStringByRow";
tmpDef.decl = "TableLookupIStringByRow(<string>: filename, <int>: row, <int>: column): string";
tmpDef.desc = "Look up a row and column in a table and pull out a particular value from that row in an IString\nReturns the value pulled from the given row and column as an IString";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "TableLookupRowNum";
tmpDef.decl = "TableLookupRowNum(<string>: filename, <int>: column, <Parameter>: value): int";
tmpDef.desc = "Look up a column in a table and gets the row number of the given value\nReturns the row number pulled from the given column";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "PreCacheTurret";
tmpDef.decl = "PreCacheTurret(<string>: weapon): void";
tmpDef.desc = "Precaches a weapon for turret use.";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "PlayRumbleLoopOnEntity";
tmpDef.decl = "<entity> Entity PlayRumbleLoopOnEntity(<string>: rumble): void";
tmpDef.desc = "Plays a looping controller rumble on the given player";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "PlayRumbleLoopOnPosition";
tmpDef.decl = "PlayRumbleLoopOnPosition(<string>: rumble, <Vector3>: position): void";
tmpDef.desc = "Plays a looping rumble at a given position";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "PlayRumbleOnEntity";
tmpDef.decl = "<entity> Entity PlayRumbleOnEntity(<string>: rumble): void";
tmpDef.desc = "Plays a rumble on the given entity";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "PlayRumbleOnPosition";
tmpDef.decl = "PlayRumbleOnPosition(<string>: rumble, <Vector3>: position): void";
tmpDef.desc = "Plays a rumble at a given position";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "StopAllRumbles";
tmpDef.decl = "StopAllRumbles(): void";
tmpDef.desc = "Stops all of the current rumbles";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "StopRumble";
tmpDef.decl = "<entity> Entity StopRumble(<string>: rumble): void";
tmpDef.desc = "Quits the playing of a particular rumble on a player";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetEye";
tmpDef.decl = "<entity> Entity GetEye(): vector3";
tmpDef.desc = "Gets the position of the eye for an AI or player\nReturns the position of the eye for the given AI or Player";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "IsAlive";
tmpDef.decl = "IsAlive(<Entity>: entity): bool";
tmpDef.desc = "Checks whether the entity is alive\nReturns true if the entity is alive";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "IsPlayer";
tmpDef.decl = "IsPlayer(<Entity>: entity): bool";
tmpDef.desc = "Checks whether the entity is a player\nReturns true if the entity is a player";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "AmbientPlay";
tmpDef.decl = "AmbientPlay(<string>: ambient, <float>: fade?): void";
tmpDef.desc = "Play the given piece of ambient sound";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "AmbientStop";
tmpDef.decl = "AmbientStop(<float>: fade?): void";
tmpDef.desc = "Stop all ambient sounds (excluding the music track)";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "PlayLoopSound";
tmpDef.decl = "<entity> Entity PlayLoopSound(<string>: sound): void";
tmpDef.desc = "Play a sound as a loop";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "PlaySound";
tmpDef.decl = "<entity> Entity PlaySound(<string>: sound): void";
tmpDef.desc = "Play a sound alias as if coming from the entity";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "PlaySoundAsMaster";
tmpDef.decl = "<entity> Entity PlaySoundAsMaster(<string>: sound): void";
tmpDef.desc = "Play a sound alias as if coming from the entity, as a master sound";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "PlaySoundToPlayer";
tmpDef.decl = "<entity> Entity PlaySoundToPlayer(<string>: sound, <Entity>: player): void";
tmpDef.desc = "Play a sound alias as if coming from the entity, so that only one player can hear it";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "PlaySoundToTeam";
tmpDef.decl = "<entity> Entity PlaySoundToTeam(<string>: sound, <string>: team, <Entity>: ignorePlayer?): void";
tmpDef.desc = "Play a sound alias as if coming from the entity, so that only one team can hear it";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SoundExists";
tmpDef.decl = "SoundExists(<string>: alias): bool";
tmpDef.desc = "Checks if the sound alias exists\nReturns true if the sound alias exists";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "StopLoopSound";
tmpDef.decl = "<entity> Entity StopLoopSound(): void";
tmpDef.desc = "Stop a looping sound";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "StopSound";
tmpDef.decl = "<entity> Entity StopSound(): void";
tmpDef.desc = "Stop all sounds on an entity. You must have a wait between Stopstrings() and Delete() or the sound will not stop";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "PlaySoundAtPos";
tmpDef.decl = "PlaySoundAtPos(<Vector3>: origin, <string>: sound): void";
tmpDef.desc = "Plays a string at a world position";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetAC130Ambience";
tmpDef.decl = "SetAC130Ambience(<string>: ambience): void";
tmpDef.desc = "Set the current ambience track for the ac130";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SpawnLoopSound";
tmpDef.decl = "SpawnLoopSound(<string>: sound, <Vector3>: origin): void";
tmpDef.desc = "Spawns a loop sound at the given position(TBD)";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "PlaceSpawnPoint";
tmpDef.decl = "<entity> Entity PlaceSpawnPoint(): void";
tmpDef.desc = "Raises a spawn point up to make sure it's not in the ground, then drops it back down onto the ground";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "PositionWouldTelefrag";
tmpDef.decl = "PositionWouldTelefrag(<Vector3>: position): bool";
tmpDef.desc = "Checks if the passed in origin would telefrag a player if another player was spawned there\nReturns true if the passed in origin would telefrag a player if another player was spawned there";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "Spawn";
tmpDef.decl = "Spawn(<string>: classname, <Vector3>: origin): entity";
tmpDef.desc = "Spawns a new entity\nReturns a reference to the new entity";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "Spawn";
tmpDef.decl = "Spawn(<string>: classname, <Vector3>: origin, <int>: flags, <int>: radius, <int>: height): entity";
tmpDef.desc = "Spawns a new entity\nReturns a reference to the new entity";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SpawnStruct";
tmpDef.decl = "SpawnStruct(): entity";
tmpDef.desc = "Allocates a structure\nReturns a reference to the new structure as an Entity";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SpawnTurret";
tmpDef.decl = "SpawnTurret(<string>: classname, <Vector3>: origin, <string>: weapon): entity";
tmpDef.desc = "Spawns a new turret\nReturns a reference to the new turret";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SpawnVehicle";
tmpDef.decl = "SpawnVehicle(<string>: model, <string>: targetname, <string>: vehicleType, <Vector3>: origin, <Vector3>: angles, <Entity>: owner): entity";
tmpDef.desc = "Spawns a new vehicle\nReturns a reference to the new vehicle";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "Spawn";
tmpDef.decl = "<entity> Entity Spawn(<Vector3>: origin, <Vector3>: angles): void";
tmpDef.desc = "Spawns this player at the specified position as if they are respawning";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SpawnPlane";
tmpDef.decl = "SpawnPlane(<Entity>: owner, <string>: classname, <Vector3>: origin, <string>: friendlyIcon, <string>: enemyIcon): entity";
tmpDef.desc = "Spawns a new plane entity\nReturns a reference to the new plane";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SpawnHelicopter";
tmpDef.decl = "SpawnHelicopter(<Entity>: owner, <Vector3>: pathStart, <Vector3>: forward, <string>: vehicle, <string>: model): entity";
tmpDef.desc = "Spawns a new helicopter entity\nReturns a reference to the new helicopter";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "CreateAttractorEnt";
tmpDef.decl = "CreateAttractorEnt(<Entity>: entity, <int>: strength, <int>: range): entity";
tmpDef.desc = "Creates a missile attractor on an enttiy\nReturns a reference to the new attractor";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "CreateAttractorOrigin";
tmpDef.decl = "CreateAttractorOrigin(<Vector3>: origin, <int>: strength, <int>: range): entity";
tmpDef.desc = "Creates a missile attractor on a world position\nReturns a reference to the new attractor";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "CreateRepulsorEnt";
tmpDef.decl = "CreateRepulsorEnt(<Entity>: entity, <int>: strength, <int>: range): entity";
tmpDef.desc = "Creates a missile repulsor on an entity\nReturns a reference to the new repulsor";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "CreateRepulsorOrigin";
tmpDef.decl = "CreateRepulsorOrigin(<Vector3>: origin, <int>: strength, <int>: range): entity";
tmpDef.desc = "Creates a missile repulsor on a world position\nReturns a reference to the new repulsor";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetSubStr";
tmpDef.decl = "GetSubStr(<string>: text, <int>: startIndex, <int>: endIndex?): string";
tmpDef.desc = "Gets the substring of characters >= startIndex and endIndex. endIndex is optional\nReturns the substring of characters >= startIndex and endIndex";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "IsSubStr";
tmpDef.decl = "IsSubStr(<string>: text, <string>: subString): bool";
tmpDef.desc = "Checks if subString is a substring of text. Case sensitive\nReturns true if the passed in subString is a substring of text";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "StrTok";
tmpDef.decl = "StrTok(<string>: text, <string>: delim): array";
tmpDef.desc = "Tokenizes 'text' by the delimiters 'delim'\nReturns the array of string tokens";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "ToLower";
tmpDef.decl = "ToLower(<string>: text): string";
tmpDef.desc = "Converts the passed in string to a lower case string\nReturns the passed in string in lower case";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "IsEndStr";
tmpDef.decl = "IsEndStr(<string>: text, <string>: endString): bool";
tmpDef.desc = "Checks if endString is the ending string of text. Case sensitive\nReturns true if the passed in endString is the ending string of text";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "StriCmp";
tmpDef.decl = "StriCmp(<string>: str1, <string>: str2): bool";
tmpDef.desc = "Compares two strings to see if they are the same\nReturns true if the two strings are equal";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "LogPrint";
tmpDef.decl = "LogPrint(<string>: text): void";
tmpDef.desc = "Prints to the server log file";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "LogString";
tmpDef.decl = "LogString(<string>: text): void";
tmpDef.desc = "Writes a string to the server log file";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "LogString_0";
tmpDef.decl = "LogString_0(<string>: text): void";
tmpDef.desc = "Writes a string to the server log file";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "ResetTimeout";
tmpDef.decl = "ResetTimeout(): void";
tmpDef.desc = "Resets the infinite loop check timer, to prevent an incorrect infinite loop error when a lot of script must be run";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetArchive";
tmpDef.decl = "SetArchive(): void";
tmpDef.desc = "Depricated function, does nothing";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetAssignedTeam";
tmpDef.decl = "GetAssignedTeam(<Entity>: player): int";
tmpDef.desc = "Gets the player's team as assigned by matchmaking\nReturns the player's assigned team. 0 = No Team, 1 = Axis, 2 = Allies, 3 = Spectator";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetTeamPlayersAlive";
tmpDef.decl = "GetTeamPlayersAlive(<string>: team): int";
tmpDef.desc = "Gets the number of players still alive on a given team\nReturns the number of players still alive on the given team";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetTeamRadar";
tmpDef.decl = "GetTeamRadar(<string>: team): bool";
tmpDef.desc = "Gets whether a team has radar or not\nReturns true if the given team has radar";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetTeamScore";
tmpDef.decl = "GetTeamScore(<string>: team): int";
tmpDef.desc = "Get a team's score\nReturns the given team's score";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetTeamRadar";
tmpDef.decl = "SetTeamRadar(<string>: team, <bool>: availability): void";
tmpDef.desc = "Set whether a team has radar or not";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetTeamScore";
tmpDef.decl = "SetTeamScore(<string>: team, <int>: score): void";
tmpDef.desc = "Set a team's score";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetPlayerTeamRank";
tmpDef.decl = "SetPlayerTeamRank(<Entity>: player, <int>: clientID, <int>: rank): void";
tmpDef.desc = "Sets a player's current team rank";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetTeamRadarStrength";
tmpDef.decl = "SetTeamRadarStrength(<string>: team, <int>: strength): void";
tmpDef.desc = "Sets a team's radar strength";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetTeamRadarStrength";
tmpDef.decl = "GetTeamRadarStrength(<string>: team): int";
tmpDef.desc = "Gets a team's radar strength\nReturns the team's radar strength";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "BlockTeamRadar";
tmpDef.decl = "BlockTeamRadar(<string>: team): void";
tmpDef.desc = "Blocks a team's radar";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "UnBlockTeamRadar";
tmpDef.decl = "UnBlockTeamRadar(<string>: team): void";
tmpDef.desc = "Unblocks a team's radar";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "IsTeamRadarBlocked";
tmpDef.decl = "IsTeamRadarBlocked(<string>: team): bool";
tmpDef.desc = "Checks if a team's radar is blocked\nReturns true if the team's radar is blocked";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "BulletTrace";
tmpDef.decl = "BulletTrace(<Vector3>: start, <Vector3>: end, <bool>: hitCharacters, <Entity>: ignore): array";
tmpDef.desc = "Allows script to do a point trace with MASK_SHOT\nReturns hit position, hit entity, and hit surface normal in an array";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "BulletTracePassed";
tmpDef.decl = "BulletTracePassed(<Vector3>: start, <Vector3>: end, <bool>: hitCharacters, <Entity>: ignore?): bool";
tmpDef.desc = "Allows script to do a point trace with MASK_SHOT\nReturns true if trace complete, else returns false";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "DamageConeTrace";
tmpDef.decl = "<entity> Entity DamageConeTrace(<Vector3>: origin, <Entity>: ignore?): float";
tmpDef.desc = "Determines how much the entity can be damaged from the given position, using the same check that is used by grenades. Performs multiple damage traces and returns an approximation to how much of the entity is damageable from the given point (between 0 and 1). In SinglePlayer this will always be 1 if the entity is partially damageable.\nReturns the approximation of how much of the entity is damageable as a float";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "PhysicsTrace";
tmpDef.decl = "PhysicsTrace(<Vector3>: start, <Vector3>: end): vector3";
tmpDef.desc = "Physics trace, ignoring characters\nReturns the endpos vector of the trace";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "PlayerPhysicsTrace";
tmpDef.decl = "PlayerPhysicsTrace(<Vector3>: start, <Vector3>: end): vector3";
tmpDef.desc = "Physics trace using player capsule size, ignoring characters\nReturns the endpos vector of the trace";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SightConeTrace";
tmpDef.decl = "<entity> Entity SightConeTrace(<Vector3>: position, <Entity>: ignore?): float";
tmpDef.desc = "Determines how much the entity can be seen from the given position, using the same check that is used by grenades. Performs multiple sight traces and returns an approximation to how much of the entity is visible from the given point (between 0 and 1). In SinglePlayer this will always be 1 if the entity is partially visible.\nReturns the approximation of how much of the entity is visible from the given position as a float";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SightTracePassed";
tmpDef.decl = "SightTracePassed(<Vector3>: start, <Vector3>: end, <bool>: hitCharacters, <params>: Entity[]): bool";
tmpDef.desc = "Allows script to do a point trace with MASK_OPAQUE_AI\nReturns true if trace complete, else returns false";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SpawnSightTrace";
tmpDef.decl = "SpawnSightTrace(<Entity>: spawnpoint, <Vector3>: origin, <Vector3>: end): float";
tmpDef.desc = "Traces sight from a spawnpoint to a location to determine how much of the location can be seen from the given spawn\nReturns the value of how much the player can be seen from this spawn as a float";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "PhysicsTraceNormal";
tmpDef.decl = "PhysicsTraceNormal(<Vector3>: start, <Vector3>: end): parameter";
tmpDef.desc = "Physics trace, ignoring characters\nReturns the hit normal of the trace";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "AverageNormal";
tmpDef.decl = "AverageNormal(<Array>: normals): float";
tmpDef.desc = "Calculates an average normal out of the given normals\nReturns the average normal of the given normals";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "WorldPointInReticle_Circle";
tmpDef.decl = "<entity> Entity WorldPointInReticle_Circle(<Vector3>: origin, <int>: width, <int>: height): bool";
tmpDef.desc = "Checks if the given origin is within the player's reticle circle\nReturns true if the given origin is within the player's reticle circle, false otherwise";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "ClientClaimTrigger";
tmpDef.decl = "<entity> Entity ClientClaimTrigger(<Entity>: trigger): void";
tmpDef.desc = "Claim a single user trigger";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "ClientReleaseTrigger";
tmpDef.decl = "<entity> Entity ClientReleaseTrigger(<Entity>: trigger): void";
tmpDef.desc = "Release a single user trigger";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "ReleaseClaimedTrigger";
tmpDef.decl = "<entity> Entity ReleaseClaimedTrigger(): void";
tmpDef.desc = "Release a currently claimed trigger";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "ClearTargetEntity";
tmpDef.decl = "<entity> Entity ClearTargetEntity(): void";
tmpDef.desc = "Clears the current target for this turret";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetTurretTarget";
tmpDef.decl = "<entity> Entity GetTurretTarget(): entity";
tmpDef.desc = "Gets the current target of this turret\nReturns the target entity of the turret";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "IsFiringTurret";
tmpDef.decl = "<entity> Entity IsFiringTurret(): bool";
tmpDef.desc = "Checks whether this turret is firing. Must be called on a turret\nReturns true if this turret is firing";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "RestoreDefaultDropPitch";
tmpDef.decl = "<entity> Entity RestoreDefaultDropPitch(): void";
tmpDef.desc = "Restores the pitch of the turret when it drops to the ground. Recalculates based on current collision environment. Use this if you move a turret and need to reconfigure.";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetAISpread";
tmpDef.decl = "<entity> Entity SetAISpread(<float>: spread): void";
tmpDef.desc = "Sets the spread of this turret when used by an AI";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetBottomArc";
tmpDef.decl = "<entity> Entity SetBottomArc(<int>: angle): void";
tmpDef.desc = "Set the amount that the turret can pivot down";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetConvergenceTime";
tmpDef.decl = "<entity> Entity SetConvergenceTime(<float>: time, <string>: type?): void";
tmpDef.desc = "Sets the time that a turret takes to converge to it's target, on either the pitch or yaw planes";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetDefaultDropPitch";
tmpDef.decl = "<entity> Entity SetDefaultDropPitch(<float>: pitch): void";
tmpDef.desc = "Set the default drop pitch that the turret attempts to return to when it is not in use";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetLeftArc";
tmpDef.decl = "<entity> Entity SetLeftArc(<int>: angle): void";
tmpDef.desc = "Set the amount that the turret can move to the left";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetMode";
tmpDef.decl = "<entity> Entity SetMode(<string>: mode): void";
tmpDef.desc = "Set the mode of a turret";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetPlayerSpread";
tmpDef.decl = "<entity> Entity SetPlayerSpread(<float>: spread): void";
tmpDef.desc = "Set the spread of this turret when used by the player";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetRightArc";
tmpDef.decl = "<entity> Entity SetRightArc(<int>: angle): void";
tmpDef.desc = "Set the amount that the turret can move to the right";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetSupressionTime";
tmpDef.decl = "<entity> Entity SetSupressionTime(<float>: time): void";
tmpDef.desc = "Sets the time that a turret uses supressing fire after losing sight of an enemy";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetTargetEntity";
tmpDef.decl = "<entity> Entity SetTargetEntity(<Entity>: target): void";
tmpDef.desc = "Sets the target of this turret";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetTopArc";
tmpDef.decl = "<entity> Entity SetTopArc(<int>: angle): void";
tmpDef.desc = "Set the amount that the turret can pivot up";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetTurretTeam";
tmpDef.decl = "<entity> Entity SetTurretTeam(<string>: team): void";
tmpDef.desc = "Sets the team of a turret";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "ShootTurret";
tmpDef.decl = "<entity> Entity ShootTurret(): void";
tmpDef.desc = "Shoots a turret";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "StartFiring";
tmpDef.decl = "<entity> Entity StartFiring(): void";
tmpDef.desc = "Starts a turret firing";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "StopFiring";
tmpDef.decl = "<entity> Entity StopFiring(): void";
tmpDef.desc = "Stops a turret firing";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "TurretFireDisable";
tmpDef.decl = "<entity> Entity TurretFireDisable(): void";
tmpDef.desc = "Disable a turret's ability to fire";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "TurretFireEnable";
tmpDef.decl = "<entity> Entity TurretFireEnable(): void";
tmpDef.desc = "Enable a turret's ability to fire";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "StartBarrelSpin";
tmpDef.decl = "<entity> Entity StartBarrelSpin(): void";
tmpDef.desc = "Starts spinning the barrel of a turret";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "StopBarrelSpin";
tmpDef.decl = "<entity> Entity StopBarrelSpin(): void";
tmpDef.desc = "Stops spinning the barrel of a turret";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetBarrelSpinRate";
tmpDef.decl = "<entity> Entity GetBarrelSpinRate(): float";
tmpDef.desc = "Gets the rate at which this turret's barrel is spinning\nReturns the rate at which this turret's barrel is spinning";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "RemoteControlTurret";
tmpDef.decl = "<entity> Entity RemoteControlTurret(<Entity>: turret): void";
tmpDef.desc = "Sets this player to start controlling a turret. Any player input will be directed to the turret";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "RemoteControlTurretOff";
tmpDef.decl = "<entity> Entity RemoteControlTurretOff(<Entity>: turret): void";
tmpDef.desc = "Sets this player to no longer control a currently controlled turret";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetTurretOwner";
tmpDef.decl = "<entity> Entity GetTurretOwner(): entity";
tmpDef.desc = "Gets the owner of this turret\nReturns the owner of this turret";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetSentryOwner";
tmpDef.decl = "<entity> Entity SetSentryOwner(<Entity>: owner): void";
tmpDef.desc = "Sets the owner of this sentry";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetSentryCarrier";
tmpDef.decl = "<entity> Entity SetSentryCarrier(<Entity>: carrier): void";
tmpDef.desc = "Sets the passed in player as the carrier of this sentry. This will cause the sentry to lock to the player for placement";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetTurretMinimapVisible";
tmpDef.decl = "<entity> Entity SetTurretMinimapVisible(<bool>: visible): void";
tmpDef.desc = "Sets whether this turret is visible on the minimap or not";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SnapToTargetEntity";
tmpDef.decl = "<entity> Entity SnapToTargetEntity(): void";
tmpDef.desc = "Snaps this turret to it's currently assigned target entity(TBD)";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetConvergenceHeightPercent";
tmpDef.decl = "<entity> Entity SetConvergenceHeightPercent(<float>: percent): void";
tmpDef.desc = "Sets the percent that a turret converges to it's target based on height(TBD)";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "MakeTurretSolid";
tmpDef.decl = "<entity> Entity MakeTurretSolid(): void";
tmpDef.desc = "Makes this turret solid so that players can collide with it";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "MakeTurretOperable";
tmpDef.decl = "<entity> Entity MakeTurretOperable(): void";
tmpDef.desc = "Makes this turret operable by players or AI";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "MakeTurretInOperable";
tmpDef.decl = "<entity> Entity MakeTurretInOperable(): void";
tmpDef.desc = "Makes this turret inoperable";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetTurretAccuracy";
tmpDef.decl = "<entity> Entity SetTurretAccuracy(<float>: accuracy): void";
tmpDef.desc = "Sets the accuracy of this turret while using it(TBD)";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetAutoRotationDelay";
tmpDef.decl = "<entity> Entity SetAutoRotationDelay(<float>: delay): void";
tmpDef.desc = "Sets the delay on the auto rotation of this turret(TBD)";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetTurretModeChangeWait";
tmpDef.decl = "<entity> Entity SetTurretModeChangeWait(<bool>: wait): void";
tmpDef.desc = "Sets whether this turret should wait for it's mode to change or not(TBD)";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "RemoteControlVehicle";
tmpDef.decl = "<entity> Entity RemoteControlVehicle(<Entity>: vehicle): void";
tmpDef.desc = "Sets this player to start controlling a vehicle. Any player input will be directed to the vehicle";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "RemoteControlVehicleOff";
tmpDef.decl = "<entity> Entity RemoteControlVehicleOff(<Entity>: vehicle): void";
tmpDef.desc = "Sets this player to stop controlling a vehicle";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "IsFiringVehicleTurret";
tmpDef.decl = "<entity> Entity IsFiringVehicleTurret(): bool";
tmpDef.desc = "Checks if this player is firing a vehicle's turret\nReturns true if the player is firing a vehicle's turret";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "DriveVehicleAndControlTurret";
tmpDef.decl = "<entity> Entity DriveVehicleAndControlTurret(<Entity>: vehicle): void";
tmpDef.desc = "Sets this player to start controlling a vehicle and be able to fire the vehicle's attached turret";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "DriveVehicleAndControlTurretOff";
tmpDef.decl = "<entity> Entity DriveVehicleAndControlTurretOff(<Entity>: vehicle): void";
tmpDef.desc = "Sets this player to stop controlling a vehicle and it's turret";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetMode";
tmpDef.decl = "<entity> Entity GetMode(): string";
tmpDef.desc = "Gets the current mode of this turret\nReturns this turret's current mode";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "CanSpawnTurret";
tmpDef.decl = "CanSpawnTurret(): bool";
tmpDef.desc = "Checks if the game can spawn another turret\nReturns true if the game can spawn another turret";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "IsDefined";
tmpDef.decl = "IsDefined(<Parameter>: variable): bool";
tmpDef.desc = "Checks whether this entity/variable is defined\nReturns true if this entity/variable is defined";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "IsString";
tmpDef.decl = "IsString(<Parameter>: variable): bool";
tmpDef.desc = "Checks whether this entity/variable is a string\nReturns true if this entity/variable is a string";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetArrayKeys";
tmpDef.decl = "GetArrayKeys(<Array>: array): array";
tmpDef.desc = "Gets an Array consisting of the keys in the input array\nReturns an array consisting of the keys in the given array";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetFirstArrayKey";
tmpDef.decl = "GetFirstArrayKey(<Array>: array): string";
tmpDef.desc = "Gets the first array keyin an array(TBD)\nReturns the first array key  in the array";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetNextArrayKey";
tmpDef.decl = "GetNextArrayKey(<Array>: array, <int>: index): string";
tmpDef.desc = "Gets the next array key after the given index in an array(TBD)\nReturns the next array key after the given index in the array";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SortByDistance";
tmpDef.decl = "SortByDistance(<Array>: array, <Vector3>: position): array";
tmpDef.desc = "Sorts the given array in accordance to distance from the given position\nReturns the newly sorted array";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "AnglesToForward";
tmpDef.decl = "AnglesToForward(<Vector3>: angles): vector3";
tmpDef.desc = "Calculates the forward vector corresponding to a set of angles\nReturns the forward vector corresponding to a set of angles";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "AnglesToRight";
tmpDef.decl = "AnglesToRight(<Vector3>: angles): vector3";
tmpDef.desc = "Calculates the right vector corresponding to a set of angles\nReturns the right vector corresponding to a set of angles";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "AnglesToUp";
tmpDef.decl = "AnglesToUp(<Vector3>: angles): vector3";
tmpDef.desc = "Calculates the up vector corresponding to a set of angles\nReturns the up vector corresponding to a set of angles";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "Closer";
tmpDef.decl = "Closer(<Vector3>: reference, <Vector3>: pointA, <Vector3>: pointB): bool";
tmpDef.desc = "Tests which of two points is the closest\nReturns true if pointA is closer to the reference than pointB";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "CombineAngles";
tmpDef.decl = "CombineAngles(<Vector3>: anglesA, <Vector3>: anglesB): vector3";
tmpDef.desc = "Reorients anglesB to anglesA\nReturns anglesB reoriented by anglesA";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "Distance";
tmpDef.decl = "Distance(<Vector3>: pointA, <Vector3>: pointB): float";
tmpDef.desc = "Calculates the distance between two points\nReturns the distance between the two points";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "Distance2D";
tmpDef.decl = "Distance2D(<Vector3>: pointA, <Vector3>: pointB): float";
tmpDef.desc = "Calculates the distance between two points, ignores height difference\nReturns the distance between the two points, ignoring height difference";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "DistanceSquared";
tmpDef.decl = "DistanceSquared(<Vector3>: pointA, <Vector3>: pointB): float";
tmpDef.desc = "Calculates the squared distance between two points. This is cheaper than the actual distance as it doesn't involve a square root\nReturns the squared distance between the two points";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "Length";
tmpDef.decl = "Length(<Vector3>: vector): float";
tmpDef.desc = "Calculates the length of the given vector\nReturns the length of the given vector";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "LengthSquared";
tmpDef.decl = "LengthSquared(<Vector3>: vector): float";
tmpDef.desc = "Calculates the squared length for the given vector. This is cheaper than the actual vector length as it doesn't involve a square root\nReturns the squared length of the given vector";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "VectorDot";
tmpDef.decl = "VectorDot(<Vector3>: pointA, <Vector3>: pointB): float";
tmpDef.desc = "Calculates the dot product of two vectors\nReturns the dot product of the two vectors";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "VectorLerp";
tmpDef.decl = "VectorLerp(<Vector3>: from, <Vector3>: to, <float>: fraction): vector3";
tmpDef.desc = "Linear interpolates between two vectors\nReturns the current interpolated position at fraction";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "VectorNormalize";
tmpDef.decl = "VectorNormalize(<Vector3>: vector): vector3";
tmpDef.desc = "Calculates a normalized copy of this vector\nReturns the normalized copy of the given vector";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "VectorToAngles";
tmpDef.decl = "VectorToAngles(<Vector3>: vector): vector3";
tmpDef.desc = "Calculates a set of angles corresponding to the given vector\nReturns the angles corresponding to the given vector";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "VectorToYaw";
tmpDef.decl = "VectorToYaw(<Vector3>: vector): float";
tmpDef.desc = "Calculates a yaw value corresponding to the given vector\nReturns the angles corresponding to the given vector";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetPointInBounds";
tmpDef.decl = "<entity> Entity GetPointInBounds(<Vector3>: point): vector3";
tmpDef.desc = "Gets the closest point in bounds of the entity from the passed in position\nReturns the closest point in bounds from the given position";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetGroundPosition";
tmpDef.decl = "GetGroundPosition(<Vector3>: origin, <float>: radius, <float>: traceDistance?, <float>: traceHeight?): vector3";
tmpDef.desc = "Gets the normal ground position of the given position\nReturns the ground position at the given coordinates";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "AveragePoint";
tmpDef.decl = "AveragePoint(<Array>: points): vector3";
tmpDef.desc = "Calculates an average point out of the given points\nReturns the average point of the given points";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "DisableGrenadeTouchDamage";
tmpDef.decl = "<entity> Entity DisableGrenadeTouchDamage(): void";
tmpDef.desc = "Disable grenade damage for damage triggers";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "EnableGrenadeTouchDamage";
tmpDef.decl = "<entity> Entity EnableGrenadeTouchDamage(): void";
tmpDef.desc = "Enable grenade damage for damage triggers";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetAmmoCount";
tmpDef.decl = "<entity> Entity GetAmmoCount(<string>: weapon): int";
tmpDef.desc = "Get the remaining ammo\nReturns the remaining ammo in the given weapon";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetWeaponModel";
tmpDef.decl = "GetWeaponModel(<string>: name?): int";
tmpDef.desc = "Get the name of the weapon model used for the given weapon\nReturns the name of the weapon model used for the given weapon";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetWeaponHideTags";
tmpDef.decl = "GetWeaponHideTags(<string>: weapon, <int>: variant?): int";
tmpDef.desc = "Get the names of the weapon's current hide tags.\nReturns the names of the weapon's current hide tags";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "IsWeaponClipOnly";
tmpDef.decl = "IsWeaponClipOnly(<string>: weapon): bool";
tmpDef.desc = "Checks if the weapon is clip only\nReturns true if the weapon is clip only";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "IsWeaponDetonationTimed";
tmpDef.decl = "IsWeaponDetonationTimed(<string>: weapon): bool";
tmpDef.desc = "Checks if the weapon has timed detonation (e.g. frag/smoke grenades)\nReturns true if the weapon has a timed detonation";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "ItemWeaponSetAmmo";
tmpDef.decl = "<entity> Entity ItemWeaponSetAmmo(<int>: clipAmmo, <int>: reserveAmmo, <int>: altWeapon?): void";
tmpDef.desc = "Sets the ammo amount for a weapon item entity (lying on the ground)";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "MagicBullet";
tmpDef.decl = "MagicBullet(<string>: weapon, <Vector3>: start, <Vector3>: end, <Entity>: owner?): entity";
tmpDef.desc = "Fire a 'magic bullet', from the source location towards the destination";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "WeaponAltWeaponName";
tmpDef.decl = "WeaponAltWeaponName(<string>: weapon): string";
tmpDef.desc = "Gets the name of the weapon this weapon has for its alternate mode. Subsequent alternate weapons can be retrieved by calling the function again with the new weapon names until it returns the original weapon.\nReturns the name of the weapon this weapon has for its alternate mode. Returns 'none' if there is no alt fire";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "WeaponClass";
tmpDef.decl = "WeaponClass(<string>: weapon): string";
tmpDef.desc = "Gets the class of weapon that this weapon is, such as 'rifle', 'smg', 'spread', 'pistol', etc.\nReturns the class of weapon that the weapon is";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "WeaponClipSize";
tmpDef.decl = "WeaponClipSize(<string>: weapon): int";
tmpDef.desc = "Gets the weapon clip size for the given weapon\nReturns the weapon clip size of the given weapon";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "WeaponFireTime";
tmpDef.decl = "WeaponFireTime(<string>: weapon): float";
tmpDef.desc = "Get the weapon fire time for the given weapon\nReturns the weapon fire time for the given weapon";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "WeaponInventoryType";
tmpDef.decl = "WeaponInventoryType(<string>: weapon): string";
tmpDef.desc = "Gets the way this weapon is stored, such as 'altmode', 'item', 'offhand', or 'primary'\nReturns the way this weapon is stored";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "WeaponIsBoltAction";
tmpDef.decl = "WeaponIsBoltAction(<string>: weapon): bool";
tmpDef.desc = "Get whether this weapon has a bolt action\nReturns true if the weapon has a bolt action";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "WeaponIsSemiAutomatic";
tmpDef.decl = "WeaponIsSemiAutomatic(<string>: weapon): bool";
tmpDef.desc = "Get whether this weapon is semi automatic\nReturns true if the weapon is semi automatic";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "WeaponMaxAmmo";
tmpDef.decl = "WeaponMaxAmmo(<string>: weapon): int";
tmpDef.desc = "Gets the max amount of ammo this weapon is meant to hold. Stockpile only, not the clip\nReturns the max amount of ammo this weapon is meant to hold";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "WeaponStartAmmo";
tmpDef.decl = "WeaponStartAmmo(<string>: weapon): int";
tmpDef.desc = "Gets the amount of ammo this weapon is meant to start with when first given to a player\nReturns the amount of ammo this weapon is meant to start with when first given to a player";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "WeaponType";
tmpDef.decl = "WeaponType(<string>: weapon): string";
tmpDef.desc = "Gets the type of weapon that this weapon is, such as 'bullet', 'projectile', or 'grenade'\nReturns the type of weapon that this weapon is";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "KC_RegWeaponForFxRemoval";
tmpDef.decl = "<entity> Entity KC_RegWeaponForFxRemoval(<string>: weapon): void";
tmpDef.desc = "TBD";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetWeaponHideTags";
tmpDef.decl = "GetWeaponHideTags(<string>: weapon): array";
tmpDef.desc = "Get the hide tags of the weapon model used for the given weapon(TBD)\nReturns the names of the hide tags of the weapon model used for the given weapon";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "WeaponIsAuto";
tmpDef.decl = "WeaponIsAuto(<string>: weapon): bool";
tmpDef.desc = "Get whether this weapon is fully automatic\nReturns true if the weapon is fully automatic";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "WeaponInheritsPerks";
tmpDef.decl = "WeaponInheritsPerks(<string>: weapon): bool";
tmpDef.desc = "Get whether this weapon inherits a perk(TBD)\nReturns true if the weapon has a perk";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "WeaponBurstCount";
tmpDef.decl = "WeaponBurstCount(<string>: weapon): int";
tmpDef.desc = "Gets the burst count of a weapon\nReturns the burst count of the weapon";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "WeaponHasThermalScope";
tmpDef.decl = "WeaponHasThermalScope(<string>: weapon): bool";
tmpDef.desc = "Get whether this weapon has a thermal scope\nReturns true if the weapon has a thermal scope";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetWeaponFlashTag";
tmpDef.decl = "GetWeaponFlashTag(<string>: weapon): string";
tmpDef.desc = "Get the name of the weapon's flash tag\nReturns the name of the weapon's flash tag";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "AttachPath";
tmpDef.decl = "<entity> Vehicle AttachPath(<Entity>: node): void";
tmpDef.desc = "Attaches this vehicle to the given path";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "ClearGoalYaw";
tmpDef.decl = "<entity> Vehicle ClearGoalYaw(): void";
tmpDef.desc = "Clear the goal yaw for this direction";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "ClearLookAtEnt";
tmpDef.decl = "<entity> Vehicle ClearLookAtEnt(): void";
tmpDef.desc = "Clear the entity the vehicle is orienting towards";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "ClearTargetYaw";
tmpDef.decl = "<entity> Vehicle ClearTargetYaw(): void";
tmpDef.desc = "Clear the target yaw direction for this vehicle";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "ClearTurretTarget";
tmpDef.decl = "<entity> Vehicle ClearTurretTarget(): void";
tmpDef.desc = "Clear the target for the vehicle turret";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "FireWeapon";
tmpDef.decl = "<entity> Vehicle FireWeapon(<string>: barrelTag?, <Entity>: targetEnt?, <Vector3>: targetOffset?): void";
tmpDef.desc = "Fire the vehicle's weapon";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "FreeVehicle";
tmpDef.decl = "<entity> Vehicle FreeVehicle(): void";
tmpDef.desc = "Frees this vehicle instance";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetAttachPos";
tmpDef.decl = "<entity> Vehicle GetAttachPos(<Entity>: node): entity";
tmpDef.desc = "Gets the origin and angles if the vehicle were to be attached to the path. The origin and angles are returned as a ScriptArray of size 2. Origin is 1st and angles is 2nd.\nReturns the origin and angles if the vehicle were to be attached to the path.";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetGoalSpeedMPH";
tmpDef.decl = "<entity> Vehicle GetGoalSpeedMPH(): float";
tmpDef.desc = "Gets the goal speed in miles per hour\nReturns the goal speed in miles per hour";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetSpeed";
tmpDef.decl = "<entity> Vehicle GetSpeed(): int";
tmpDef.desc = "Gets the current speed in inches per second\nReturns the current speed in inches per second";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetVehicleOwner";
tmpDef.decl = "<entity> Vehicle GetVehicleOwner(): entity";
tmpDef.desc = "Gets the owner of this particular vehicle\nReturns the owner of this particualr vehicle";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetWheelSurface";
tmpDef.decl = "<entity> Vehicle GetWheelSurface(<string>: wheel): string";
tmpDef.desc = "Gets the surface type of the given wheel\nReturns the surface type of the given wheel as a string";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "IsTurretReady";
tmpDef.decl = "<entity> Vehicle IsTurretReady(): bool";
tmpDef.desc = "Query whether this vehicle's turret is ready for firing\nReturns true if this vehicle's turret is ready to fire, false otherwise.";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "JoltBody";
tmpDef.decl = "<entity> Vehicle JoltBody(<Vector3>: joltPosition, <float>: intensity, <float>: fraction?, <float>: deceleration?): void";
tmpDef.desc = "Jolts this vehicle";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "ResumeSpeed";
tmpDef.decl = "<entity> Vehicle ResumeSpeed(<float>: acceleration): void";
tmpDef.desc = "Sets the vehile to resume it's path speed";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetAcceleration";
tmpDef.decl = "<entity> Vehicle SetAcceleration(<float>: acceleration): void";
tmpDef.desc = "Sets the acceleration for this vehicle";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetAirResistance";
tmpDef.decl = "<entity> Vehicle SetAirResistance(<float>: maxResistanceSpeed): void";
tmpDef.desc = "Sets the speed at which air resistance maxes out";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetDeceleration";
tmpDef.decl = "<entity> Vehicle SetDeceleration(<float>: deceleration): void";
tmpDef.desc = "Sets the deceleration for this vehicle";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetGoalYaw";
tmpDef.decl = "<entity> Vehicle SetGoalYaw(<float>: yaw): void";
tmpDef.desc = "Set the goal yaw direction for this vehicle.Goal yaw is ignored if vehicle doesn't stop at goal. Lookat entity has priority over goal yaw";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetHoverParams";
tmpDef.decl = "<entity> Vehicle SetHoverParams(<int>: radius, <float>: speed, <float>: accel): void";
tmpDef.desc = "Set the hovering parameters";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetJitterParams";
tmpDef.decl = "<entity> Vehicle SetJitterParams(<Vector3>: range, <float>: minPeriod, <float>: maxPeriod): void";
tmpDef.desc = "Set the jitter parameters. Set everything to 0 to stop jittering. Vehicle ignores jitter parameters when on ground";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetLookAtEnt";
tmpDef.decl = "<entity> Vehicle SetLookAtEnt(<Entity>: entity): void";
tmpDef.desc = "Set the entity this vehicle will orient towards";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetMaxPitchRoll";
tmpDef.decl = "<entity> Vehicle SetMaxPitchRoll(<float>: pitch, <float>: roll): void";
tmpDef.desc = "Sets max pitch and roll angle for this vehicle.";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetNearGoalNotifyDist";
tmpDef.decl = "<entity> Vehicle SetNearGoalNotifyDist(<float>: dist): void";
tmpDef.desc = "Set distance near goal at which near_goal notification should be sent once.";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetSpeed";
tmpDef.decl = "<entity> Vehicle SetSpeed(<int>: speed, <int>: acceleration?, <int>: deceleration?): void";
tmpDef.desc = "Sets the speed and acceleration for this vehicle.";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetSpeedImmediate";
tmpDef.decl = "<entity> Vehicle SetSpeedImmediate(<int>: speed, <int>: acceleration?, <int>: deceleration?): void";
tmpDef.desc = "Sets the speed and acceleration for this vehicle instantaneously. Direction will be toward the goal direction if there is a goal, otherwise the current direction.";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetSwitchNode";
tmpDef.decl = "<entity> Vehicle SetSwitchNode(<Entity>: sourceNode, <Entity>: destNode): void";
tmpDef.desc = "Sets a switch node for this vehicle";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetTargetYaw";
tmpDef.decl = "<entity> Vehicle SetTargetYaw(<float>: yaw): void";
tmpDef.desc = "Set the target yaw direction for this vehicle. Goal yaw has priority over target yaw.";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetTurningAbility";
tmpDef.decl = "<entity> Vehicle SetTurningAbility(<float>: ability): void";
tmpDef.desc = "If this is higher, helicopters can make sharper turns to match goal positions better.";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetTurretTargetEnt";
tmpDef.decl = "<entity> Vehicle SetTurretTargetEnt(<Entity>: target, <Vector3>: offset?): void";
tmpDef.desc = "Set the target entity for this vehicle turret.";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetTurretTargetVec";
tmpDef.decl = "<entity> Vehicle SetTurretTargetVec(<Vector3>: target): void";
tmpDef.desc = "Set the target position for this vehicle turret.";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetVehGoalPos";
tmpDef.decl = "<entity> Vehicle SetVehGoalPos(<Vector3>: goal, <bool>: stopAtGoal): void";
tmpDef.desc = "Set the target position for this vehicle";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetVehicleLookAtText";
tmpDef.decl = "<entity> Vehicle SetVehicleLookAtText(<string>: text1, <string>: text2?): void";
tmpDef.desc = "Set look at text for the vehicle";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetVehicleTeam";
tmpDef.decl = "<entity> Vehicle SetVehicleTeam(<string>: team): void";
tmpDef.desc = "Set which team a vehicle is on";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetVehWeapon";
tmpDef.decl = "<entity> Vehicle SetVehWeapon(<string>: weapon): void";
tmpDef.desc = "Set the vehicle's weapon";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetWaitSpeed";
tmpDef.decl = "<entity> Vehicle SetWaitSpeed(<int>: speed): void";
tmpDef.desc = "Sets a the wait speed for for this vehicle in miles per hour.";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetYawSpeed";
tmpDef.decl = "<entity> Vehicle SetYawSpeed(<int>: speed, <int>: acceleration, <int>: deceleration?, <float>: overshootPercent?): void";
tmpDef.desc = "Sets the yaw speed for this vehicle";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetYawSpeedByName";
tmpDef.decl = "<entity> Vehicle SetYawSpeedByName(<string>: name): void";
tmpDef.desc = "Sets the yaw speed for this vehicle using a name. Possible names are 'instant', 'faster', 'fast', and 'slow'";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "StartPath";
tmpDef.decl = "<entity> Vehicle StartPath(<Entity>: node): void";
tmpDef.desc = "Starts the vehicle following this path";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "HeliSetAI";
tmpDef.decl = "<entity> Vehicle HeliSetAI(): void";
tmpDef.desc = "Set a helicopter's AI(TBD)";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "CanTurretGetTargetPoint";
tmpDef.decl = "<entity> Vehicle CanTurretGetTargetPoint(<Vector3>: target): bool";
tmpDef.desc = "Checks whether a vehicle's turret can target a point\nReturns true if this vehicle's turret can get the point, false otherwise.";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "VehicleTurretControlOn";
tmpDef.decl = "<entity> Vehicle VehicleTurretControlOn(<Entity>: player): void";
tmpDef.desc = "Sets a player to control a vehicle's turret";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "VehicleTurretControlOff";
tmpDef.decl = "<entity> Vehicle VehicleTurretControlOff(<Entity>: player): void";
tmpDef.desc = "Sets a player to stop controlling a vehicle's turret";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "Vehicle_Teleport";
tmpDef.decl = "<entity> Vehicle Vehicle_Teleport(<Vector3>: pos): void";
tmpDef.desc = "Teleports a vehicle to a location";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetAttachPos";
tmpDef.decl = "<entity> Vehicle GetAttachPos(): vector3";
tmpDef.desc = "Gets the current position of the vehicle on it's attach path(TBD)";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "Vehicle_FinishDamage";
tmpDef.decl = "<entity> Vehicle Vehicle_FinishDamage(<Entity>: inflictor, <Entity>: attacker, <int>: damage, <int>: damageFlags, <string>: meansOfDeath, <string>: weapon, <Vector3>: point, <Vector3>: dir, <string>: hitLoc, <int>: timeOffset, <int>: modelIndex, <string>: partName): void";
tmpDef.desc = "Invokes damage on a vehicle";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "RotateYaw";
tmpDef.decl = "<entity> Vehicle RotateYaw(<int>: yaw, <int>: time, <int>: acceleration, <int>: deceleration): void";
tmpDef.desc = "Rotates the yaw of a vehicle";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "Vehicle_GetVelocity";
tmpDef.decl = "<entity> Vehicle Vehicle_GetVelocity(): vector3";
tmpDef.desc = "Gets the current velocity of a vehicle\nReturns the current velocity of the vehicle as a Vector3";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetBodyVelocity";
tmpDef.decl = "<entity> Vehicle GetBodyVelocity(): vector3";
tmpDef.desc = "Gets the current velocity of a vehicle's body\nReturns the current velocity of this vehicle's body as a Vector3";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetSteering";
tmpDef.decl = "<entity> Vehicle GetSteering(): float";
tmpDef.desc = "Gets the current steering fraction of a vehicle\nReturns the current steering fraction of this vehicle as a float";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetThrottle";
tmpDef.decl = "<entity> Vehicle GetThrottle(): float";
tmpDef.desc = "Gets the current throttle value of a vehicle\nReturns the current throttle value of this vehicle as a float";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "TurnEngineOff";
tmpDef.decl = "<entity> Vehicle TurnEngineOff(): void";
tmpDef.desc = "Turns the engine off in a vehicle";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "TurnEngineOn";
tmpDef.decl = "<entity> Vehicle TurnEngineOn(): void";
tmpDef.desc = "Turns the engine on in a vehicle";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "DriveTo";
tmpDef.decl = "<entity> Vehicle DriveTo(<Vector3>: position, <float>: speed): void";
tmpDef.desc = "Initiates a vehicle to drive to a specified location at a specified speed";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "DoSpawn";
tmpDef.decl = "<entity> Vehicle DoSpawn(<string>: targetName): void";
tmpDef.desc = "Spawns an actor from an actor spawner, if possible";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "IsPhysVeh";
tmpDef.decl = "<entity> Vehicle IsPhysVeh(): bool";
tmpDef.desc = "Checks if a vehicle is a physics-based vehicle\nReturns true if the given vehicle is a physics-based vehicle, false otherwise.";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "Phys_Crash";
tmpDef.decl = "<entity> Vehicle Phys_Crash(): void";
tmpDef.desc = "Crashes a physics-based vehicle";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "Phys_Launch";
tmpDef.decl = "<entity> Vehicle Phys_Launch(): void";
tmpDef.desc = "Launches a physics-based vehicle";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "Phys_DisableCrashing";
tmpDef.decl = "<entity> Vehicle Phys_DisableCrashing(): void";
tmpDef.desc = "Disables crashing for a physics-based vehicle";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "Phys_EnableCrashing";
tmpDef.decl = "<entity> Vehicle Phys_EnableCrashing(): void";
tmpDef.desc = "Enables crashing for a physics-based vehicle";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "Phys_SetSpeed";
tmpDef.decl = "<entity> Vehicle Phys_SetSpeed(<float>: speed): void";
tmpDef.desc = "Sets the speed of a physics-based vehicle";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "Phys_SetConveyerBelt";
tmpDef.decl = "<entity> Vehicle Phys_SetConveyerBelt(<float>: speed): void";
tmpDef.desc = "Sets the conveyer belt speed of a physics-based vehicle(TBD)";
gsc_functions.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "FreeHelicopter";
tmpDef.decl = "<entity> Vehicle FreeHelicopter(): void";
tmpDef.desc = "Frees this helicopter instance";
gsc_functions.push(tmpDef);