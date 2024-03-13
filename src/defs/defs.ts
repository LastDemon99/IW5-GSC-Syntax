import { Def_Function } from './struct';

export var game_defs = new Array<Def_Function>();
var tmpDef;

tmpDef = new Def_Function;
tmpDef.name = "if";
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "else";
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "switch";
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "case";
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "while";
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "for";
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "foreach";
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "return";
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "break";
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "continue";
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "wait";
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "true";
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "false";
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "undefined";
game_defs.push(tmpDef);


//#region Player
tmpDef = new Def_Function;
tmpDef.name = "GetViewmodel";
tmpDef.decl = "<player>: entity GetViewmodel(): string";
tmpDef.desc = "Gets the viewmodel name for the given player.";
tmpDef.callon = "Player"
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "FragButtonPressed";
tmpDef.decl = "<player>: entity FragButtonPressed(): bool";
tmpDef.desc = "Checks if the player is pressing the 'frag' button.";
tmpDef.callon = "Player"
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SecondaryOffhandButtonPressed";
tmpDef.decl = "<player>: entity SecondaryOffhandButtonPressed(): bool";
tmpDef.desc = "Checks if the player is pressing the 'secondary offhand' button.";
tmpDef.callon = "Player"
tmpDef.reqArgs = [];
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SecondaryOffhandButtonPressed";
tmpDef.decl = "<player>: entity SecondaryOffhandButtonPressed(): bool";
tmpDef.desc = "Check if the player is pressing the 'secondary offhand' button";
tmpDef.callon = "Player"
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetCurrentWeaponClipAmmo";
tmpDef.decl = "<player>: entity GetCurrentWeaponClipAmmo(): int";
tmpDef.desc = "Gets the amount of ammo left in the player's clip";
tmpDef.callon = "Player"
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetVelocity";
tmpDef.decl = "<player>: entity SetVelocity(<velocity>: vector3): void";
tmpDef.desc = "Set the player's velocity";
tmpDef.callon = "Player"
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetPlayerViewHeight";
tmpDef.decl = "<player>: entity GetPlayerViewHeight(): float";
tmpDef.desc = "Gets the player's view height";
tmpDef.callon = "Player"
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetNormalizedMovement";
tmpDef.decl = "<player>: entity GetNormalizedMovement(): vector3";
tmpDef.desc = "Gets the player's normalized movement vector";
tmpDef.callon = "Player"
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetNormalizedCameraMovement";
tmpDef.decl = "<player>: entity GetNormalizedCameraMovement(): vector3";
tmpDef.desc = "Gets the player's camera's normalized movement vector";
tmpDef.callon = "Player"
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "TakeWeapon";
tmpDef.decl = "<player>: entity TakeWeapon(<weapon>: string): void";
tmpDef.desc = "Take a weapon from the player";
tmpDef.callon = "Player"
tmpDef.reqArgs = [
    "1 : <string> : The weapon name."
];
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "TakeAllWeapons";
tmpDef.decl = "<player>: entity TakeAllWeapons(): void";
tmpDef.desc = "Remove all the weapons from the player";
tmpDef.callon = "Player"
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetCurrentWeaponClipAmmo";
tmpDef.decl = "<player>: entity GetCurrentWeaponClipAmmo(): int";
tmpDef.desc = "Gets the amount of ammo left in the player's clip";
tmpDef.callon = "Player"
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetCurrentPrimaryWeapon";
tmpDef.decl = "<player>: entity GetCurrentPrimaryWeapon(): string";
tmpDef.desc = "Gets the player's weapon that is in the primary slot";
tmpDef.callon = "Player"
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetCurrentOffhand";
tmpDef.decl = "<player>: entity GetCurrentOffhand(): string";
tmpDef.desc = "Gets the player's current off-hand weapon";
tmpDef.callon = "Player"
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "HasWeapon";
tmpDef.decl = "<player>: entity HasWeapon(<weapon>: string): bool";
tmpDef.desc = "Checks whether the player has the given weapon";
tmpDef.callon = "Player"
tmpDef.reqArgs = [
    "1 : <string> : The weapon name."
];
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SwitchToWeapon";
tmpDef.decl = "<player>: entity SwitchToWeapon(<weapon>: string): void";
tmpDef.desc = "Switch to a different weapon";
tmpDef.callon = "Player"
tmpDef.reqArgs = [
    "1 : <string> : The weapon name."
];
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SwitchToWeaponImmediate";
tmpDef.decl = "<player>: entity SwitchToWeaponImmediate(<weapon>: string): void";
tmpDef.desc = "Switch to a different weapon immediately, skipping any animations";
tmpDef.callon = "Player"
tmpDef.reqArgs = [
    "1 : <string> : The weapon name."
];
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SwitchToOffhand";
tmpDef.decl = "<player>: entity SwitchToOffhand(): void";
tmpDef.desc = "Switch to the player's offhand weapon";
tmpDef.callon = "Player"
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GiveStartAmmo";
tmpDef.decl = "<player>: entity GiveStartAmmo(<weapon>: string): void";
tmpDef.desc = "Sets the player's ammunition to the weapon's default starting ammunition";
tmpDef.callon = "Player"
tmpDef.reqArgs = [
    "1 : <string> : The weapon name."
];
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GiveMaxAmmo";
tmpDef.decl = "<player>: entity GiveMaxAmmo(<weapon>: string): void";
tmpDef.desc = "Sets the player's ammunition to the weapon's maximum ammunition";
tmpDef.callon = "Player"
tmpDef.reqArgs = [
    "1 : <string> : The weapon name."
];
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetFractionStartAmmo";
tmpDef.decl = "<player>: entity GetFractionStartAmmo(<weapon>: string): float";
tmpDef.desc = "Gets the player's current ammunition amount as a fraction of the weapon's starting ammunition";
tmpDef.callon = "Player"
tmpDef.reqArgs = [
    "1 : <string> : The weapon name."
];
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetFractionMaxAmmo";
tmpDef.decl = "<player>: entity GetFractionMaxAmmo(<weapon>: string): float";
tmpDef.desc = "Gets the player's current ammunition amount as a fraction of the weapon's maximum ammunition";
tmpDef.callon = "Player"
tmpDef.reqArgs = [
    "1 : <string> : The weapon name."
];
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "IsDualWielding";
tmpDef.decl = "<player>: entity IsDualWielding(): bool";
tmpDef.desc = "Checks if the player is currently holding a dual wield weapon";
tmpDef.callon = "Player"
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "IsReloading";
tmpDef.decl = "<player>: entity IsReloading(): bool";
tmpDef.desc = "Checks if the player is currently reload a weapon";
tmpDef.callon = "Player"
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "IsSwitchingWeapon";
tmpDef.decl = "<player>: entity IsSwitchingWeapon(): bool";
tmpDef.desc = "Checks if the player is currently switch a weapon";
tmpDef.callon = "Player"
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetOrigin";
tmpDef.decl = "<player>: entity SetOrigin(<origin>: vector3): void";
tmpDef.desc = "Set the player's origin";
tmpDef.callon = "Player"
tmpDef.reqArgs = [
    "1 : <vector3> : The new origin."
];
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetVelocity";
tmpDef.decl = "<player>: entity GetVelocity(): vector3";
tmpDef.desc = "Gets the player's cvelocity";
tmpDef.callon = "Player"
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetPlayerAngles";
tmpDef.decl = "<player>: entity SetPlayerAngles(<angles>: vector3): void";
tmpDef.desc = "Set the player's angles";
tmpDef.callon = "Player"
tmpDef.reqArgs = [
    "1 : <vector3> : The new angles."
];
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetPlayerAngles";
tmpDef.decl = "<player>: entity GetPlayerAngles(): vector3";
tmpDef.desc = "Gets the player's angles";
tmpDef.callon = "Player"
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "UseButtonPressed";
tmpDef.decl = "<player>: entity UseButtonPressed(): bool";
tmpDef.desc = "Checks if the player is pressing the 'use' button";
tmpDef.callon = "Player"
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "AttackButtonPressed";
tmpDef.decl = "<player>: entity AttackButtonPressed(): bool";
tmpDef.desc = "Check if the player is pressing the 'attack' button";
tmpDef.callon = "Player"
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "AdsButtonPressed";
tmpDef.decl = "<player>: entity AdsButtonPressed(): bool";
tmpDef.desc = "Check if the player is pressing the 'ads' button";
tmpDef.callon = "Player"
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "MeleeButtonPressed";
tmpDef.decl = "<player>: entity MeleeButtonPressed(): bool";
tmpDef.desc = "Check if the player is pressing the 'melee' button";
tmpDef.callon = "Player"
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "PlayerAds";
tmpDef.decl = "<player>: entity PlayerAds(): float";
tmpDef.desc = "Gets the player's weapon position fraction";
tmpDef.callon = "Player"
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "IsOnGround";
tmpDef.decl = "<player>: entity IsOnGround(): bool";
tmpDef.desc = "Checks if the player is on the ground";
tmpDef.callon = "Player"
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "IsUsingTurret";
tmpDef.decl = "<player>: entity IsUsingTurret(): bool";
tmpDef.desc = "Checks if the player is currently manning a turret";
tmpDef.callon = "Player"
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetViewModelDepthOfField";
tmpDef.decl = "<player>: entity SetViewModelDepthOfField(<start>: float, <end>: float): void";
tmpDef.desc = "Set the depth of field values for the player's viewmodel when at hip. If start >= end, depth of field is disabled";
tmpDef.callon = "Player"
tmpDef.reqArgs = [
    "1 : <float> : The start value.",
    "2 : <float> : The end value."
];
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetOffhandPrimaryClass";
tmpDef.decl = "<player>: entity SetOffhandPrimaryClass(<name>: string): void";
tmpDef.desc = "Sets the player's current primary offhand class";
tmpDef.callon = "Player"
tmpDef.reqArgs = [
    "1 : <string> : The class name."
];
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetOffhandPrimaryClass";
tmpDef.decl = "<player>: entity GetOffhandPrimaryClass(): string";
tmpDef.desc = "Gets the name that primary offhand toggle is set to";
tmpDef.callon = "Player"
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetOffhandSecondaryClass";
tmpDef.decl = "<player>: entity SetOffhandSecondaryClass(<name>: string): void";
tmpDef.desc = "Set whether the player can use smoke grenades or flashbangs";
tmpDef.callon = "Player"
tmpDef.reqArgs = [
    "1 : <string> : The class name."
];
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetOffhandSecondaryClass";
tmpDef.decl = "<player>: entity GetOffhandSecondaryClass(): string";
tmpDef.desc = "Gets the name that toggle is set to";
tmpDef.callon = "Player"
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "BeginLocationSelection";
tmpDef.decl = "<player>: entity BeginLocationSelection(locationSelector: string, directionality: bool, selectorSize: int): void";
tmpDef.desc = "Causes the player to begin selecting a location. A map HUD element should be visible for them to see where they're selecting. When the user confirms or cancels, they will recieve a 'confirm_location' or 'cancel_location'. The former notify contains the location they selected, as a Vector3.";
tmpDef.reqArgs = [
    "1 : <string> : The location selector name.",
    "2 : <bool> : Whether the selection has directionality.",
    "3 : <int> : The size of the selection."
];
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "EndLocationSelection";
tmpDef.decl = "<player>: entity EndLocationSelection(): void";
tmpDef.desc = "Causes the player to leave location selection mode.";
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "DisableWeapons";
tmpDef.decl = "<player>: entity DisableWeapons(): void";
tmpDef.desc = "Disable the player's weapon.";
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "EnableWeaponSwitch";
tmpDef.decl = "<player>: entity EnableWeaponSwitch(): void";
tmpDef.desc = "Enables weapon switching for the player";
tmpDef.callon = "Player"
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "DisableOffhandWeapons";
tmpDef.decl = "<player>: entity DisableOffhandWeapons(): void";
tmpDef.desc = "Disables the use of offhand weapons (grenades, flashes)";
tmpDef.callon = "Player"
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "EnableOffhandWeapons";
tmpDef.decl = "<player>: entity EnableOffhandWeapons(): void";
tmpDef.desc = "Enables the use of offhand weapons (grenades, flashes)";
tmpDef.callon = "Player"
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "DisableWeaponSwitch";
tmpDef.decl = "<player>: entity DisableWeaponSwitch(): void";
tmpDef.desc = "Disables weapon switching for the player";
tmpDef.callon = "Player"
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "EnableWeaponSwitch";
tmpDef.decl = "<player>: entity EnableWeaponSwitch(): void";
tmpDef.desc = "Enables weapon switching for the player";
tmpDef.callon = "Player"
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "OpenPopUpMenu";
tmpDef.decl = "<player>: entity OpenPopUpMenu(<menu>: string): void";
tmpDef.desc = "Opens a pop up menu over the current menu/screen";
tmpDef.callon = "Player"
tmpDef.reqArgs = [
    "1 : <string> : The menu name."
];
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "OpenPopUpMenuNoMouse";
tmpDef.decl = "<player>: entity OpenPopUpMenuNoMouse(<menu>: string): void";
tmpDef.desc = "Opens a pop up menu over the current menu/screen, with no mouse control";
tmpDef.callon = "Player"
tmpDef.reqArgs = [
    "1 : <string> : The menu name."
];
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "ClosePopUpMenu";
tmpDef.decl = "<player>: entity ClosePopUpMenu(<menu>: string): void";
tmpDef.desc = "Closes the specified pop up menu if it is currently open";
tmpDef.callon = "Player"
tmpDef.reqArgs = [
    "1 : <string> : The menu name."
];
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "OpenMenu";
tmpDef.decl = "<player>: entity OpenMenu(<menu>: string): void";
tmpDef.desc = "Opens a menu over the current menu/screen";
tmpDef.callon = "Player"
tmpDef.reqArgs = [
    "1 : <string> : The menu name."
];
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "CloseMenu";
tmpDef.decl = "<player>: entity CloseMenu(<menu>: string): void";
tmpDef.desc = "Closes the current player menu";
tmpDef.callon = "Player"
tmpDef.reqArgs = [
    "1 : <string> : The menu name."
];
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "FreezeControls";
tmpDef.decl = "<player>: entity FreezeControls(<state>: bool): void";
tmpDef.desc = "Blocks or unblocks control input from this player";
tmpDef.callon = "Player"
tmpDef.reqArgs = [
    "1 : <bool> : The state to set (true to freeze, false to unfreeze)."
];
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "DisableUsability";
tmpDef.decl = "<player>: entity DisableUsability(): void";
tmpDef.desc = "Makes the player unable to use things such as triggers, turrets, etc.";
tmpDef.callon = "Player"
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "EnableUsability";
tmpDef.decl = "<player>: entity EnableUsability(): void";
tmpDef.desc = "Makes the player able to use things such as triggers, turrets, etc.";
tmpDef.callon = "Player"
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetWhizBySpreads";
tmpDef.decl = "<player>: entity SetWhizBySpreads(<x>: float, <y>: float, <z>: float): void";
tmpDef.desc = "TBD";
tmpDef.callon = "Player"
tmpDef.reqArgs = [
    "1 : <float> : X spread value.",
    "2 : <float> : Y spread value.",
	"3 : <float> : Z spread value."
];
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetWhizByRadii";
tmpDef.decl = "<player>: entity SetWhizByRadii(<x>: float, <y>: float, <z>: float): void";
tmpDef.desc = "TBD";
tmpDef.callon = "Player"
tmpDef.reqArgs = [
    "1 : <float> : X radius value.",
    "2 : <float> : Y radius value.",
	"3 : <float> : Z radius value."
];
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetReverb";
tmpDef.decl = "<player>: entity SetReverb(<priority>: string, <roomType>: string, <dryLevel>: float?, <wetLevel>: float?, <fade>: float?): void";
tmpDef.desc = "Set the sound reverbation for the player";
tmpDef.callon = "Player"
tmpDef.reqArgs = [
    "1 : <string> : The priority level of the reverbation.",
    "2 : <string> : The type of room for the reverbation."
];
tmpDef.optArgs = [
    "3 : <float> : The dry level of the reverbation.",
    "4 : <float> : The wet level of the reverbation.",
    "5 : <float> : The fade level of the reverbation."
];
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "DeactivateReverb";
tmpDef.decl = "<player>: entity DeactivateReverb(<priority>: string, <fade>: int): void";
tmpDef.desc = "Deactivates the sound reverbation for the player on the given priority level";
tmpDef.callon = "Player"
tmpDef.reqArgs = [
    "1 : <string> : The priority level of the reverbation to deactivate.",
    "2 : <int> : The fade time for deactivating the reverbation."
];
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetVolMod";
tmpDef.decl = "<player>: entity SetVolMod(<vol>: float, <overrideVol>: float): void";
tmpDef.desc = "TBD";
tmpDef.callon = "Player"
tmpDef.reqArgs = [
    "1 : <float> : TBD.",
    "2 : <float> : TBD."
];
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetChannelVolume";
tmpDef.decl = "<player>: entity SetChannelVolume(): void";
tmpDef.desc = "Set the channel volume for the player(TBD)";
tmpDef.callon = "Player"
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetChannelVolumes";
tmpDef.decl = "<player>: entity SetChannelVolumes(<priority>: string, <shockName>: string, <fade>: float?): void";
tmpDef.desc = "Sets the channel volumes for the player (a way of fading volumes by type)";
tmpDef.callon = "Player"
tmpDef.reqArgs = [
    "1 : <string> : The priority level of the channel volume.",
    "2 : <string> : The shock name for the channel volume."
];
tmpDef.optArgs = [
    "3 : <float> : The fade level for the channel volume."
];
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "DeactivateChannelVolumes";
tmpDef.decl = "<player>: entity DeactivateChannelVolumes(<priority>: string, <fade>: int): void";
tmpDef.desc = "Deactivates the channel volumes for the player on the given priority level";
tmpDef.callon = "Player"
tmpDef.reqArgs = [
    "1 : <string> : The priority level of the channel volumes to deactivate.",
    "2 : <int> : The fade time for deactivating the channel volumes."
];
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "PlayLocalSound";
tmpDef.decl = "<player>: entity PlayLocalSound(<sound>: string): void";
tmpDef.desc = "Plays a sound locally to the player";
tmpDef.callon = "Player"
tmpDef.reqArgs = [
    "1 : <string> : The sound to play locally."
];
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "StopLocalSound";
tmpDef.decl = "<player>: entity StopLocalSound(<sound>: string): void";
tmpDef.desc = "Stops all instances of a local soundalias running on a player";
tmpDef.callon = "Player"
tmpDef.reqArgs = [
    "1 : <string> : The sound to stop."
];
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetWeaponAmmoClip";
tmpDef.decl = "<player>: entity SetWeaponAmmoClip(<weapon>: string, <ammo>: int, <clipSide>: string?): void";
tmpDef.desc = "Set the weapon clip ammunition for the given weapon";
tmpDef.callon = "Player"
tmpDef.reqArgs = [
    "1 : <string> : The name of the weapon.",
    "2 : <int> : The amount of ammunition for the weapon's clip."
];
tmpDef.optArgs = [
    "3 : <string> : The side of the clip"
];
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetWeaponAmmoStock";
tmpDef.decl = "<player>: entity SetWeaponAmmoStock(<weapon>: string, <ammo>: int): void";
tmpDef.desc = "Set the ammunition stockpile for the given weapon";
tmpDef.callon = "Player"
tmpDef.reqArgs = [
    "1 : <string> : The name of the weapon.",
    "2 : <int> : The amount of ammunition for the weapon's stockpile."
];
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetWeaponAmmoClip";
tmpDef.decl = "<player>: entity GetWeaponAmmoClip(<weapon>: string, <clipSide>: string?): int";
tmpDef.desc = "Gets the amount of ammo left in the player's weapon's current clip";
tmpDef.callon = "Player"
tmpDef.reqArgs = [
    "1 : <string> : The name of the weapon."
];
tmpDef.optArgs = [
    "2 : <string> : The side of the clip (default: null)."
];
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetWeaponAmmoStock";
tmpDef.decl = "<player>: entity GetWeaponAmmoStock(<weapon>: string): int";
tmpDef.desc = "Gets the ammunition stockpile for the given weapon";
tmpDef.callon = "Player"
tmpDef.reqArgs = [
    "1 : <string> : The name of the weapon."
];
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "AnyAmmoForWeaponModes";
tmpDef.decl = "<player>: entity AnyAmmoForWeaponModes(<weapon>: string): bool";
tmpDef.desc = "Checks if the player has any ammo available for the weapon or any of its alt-modes (grenade launcher, etc)";
tmpDef.callon = "Player"
tmpDef.reqArgs = [
    "1 : <string> : The name of the weapon."
];
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetClientDvar";
tmpDef.decl = "<player>: entity SetClientDvar(<dvar>: string, <value>: parameter): void";
tmpDef.desc = "Set the values of a dvar which are specific to each client";
tmpDef.callon = "Player"
tmpDef.reqArgs = [
    "1 : <string> : The name of the dvar.",
    "2 : <parameter> : The value to set."
];
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetClientDvars";
tmpDef.decl = "<player>: entity SetClientDvars(<[<dvar>, <value>, <dvar>, <value>...]>: array[]): void";
tmpDef.desc = "Set the values of a list of dvars which are specific to each client";
tmpDef.callon = "Player"
tmpDef.reqArgs = [
    "1 : <array> : The array with formar <dvar>:string, <value>:parameter."
];
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "AllowAds";
tmpDef.decl = "<player>: entity AllowAds(<ads>: bool): void";
tmpDef.desc = "Sets whether the player can switch to ADS.";
tmpDef.callon = "Player"
tmpDef.reqArgs = [
    "1 : <bool> : Whether the player can switch to ADS."
];
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "AllowJump";
tmpDef.decl = "<player>: entity AllowJump(<jump>: bool): void";
tmpDef.desc = "Sets whether the player can jump.";
tmpDef.callon = "Player"
tmpDef.reqArgs = [
    "1 : <bool> : Whether the player can jump."
];
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "AllowSprint";
tmpDef.decl = "<player>: entity AllowSprint(<sprint>: bool): void";
tmpDef.desc = "Sets whether the player can sprint.";
tmpDef.callon = "Player"
tmpDef.reqArgs = [
    "1 : <bool> : Whether the player can sprint."
];
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetSpreadOverride";
tmpDef.decl = "<player>: entity SetSpreadOverride(<spread>: int): void";
tmpDef.desc = "Sets the player fixed spread value.";
tmpDef.callon = "Player"
tmpDef.reqArgs = [
    "1 : <int> : The player fixed spread value."
];
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "ResetSpreadOverride";
tmpDef.decl = "<player>: entity ResetSpreadOverride(): void";
tmpDef.desc = "Resets the player spread value to the ones of the weapon in use.";
tmpDef.callon = "Player"
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetWeaponsListPrimaries";
tmpDef.decl = "<player>: entity GetWeaponsListPrimaries(): string[]";
tmpDef.desc = "Gets an array of all primary weapons that the player has";
tmpDef.callon = "Player"
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetWeaponsListOffhands";
tmpDef.decl = "<player>: entity GetWeaponsListOffhands(): string[]";
tmpDef.desc = "Gets an array of all offhand weapons that the player has";
tmpDef.callon = "Player"
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetWeaponsListItems";
tmpDef.decl = "<player>: entity GetWeaponsListItems(): string[]";
tmpDef.desc = "Gets an array of all item weapons that the player has";
tmpDef.callon = "Player"
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetWeaponsListExclusives";
tmpDef.decl = "<player>: entity GetWeaponsListExclusives(): string[]";
tmpDef.desc = "Gets an array of all exclusive weapons that the player has";
tmpDef.callon = "Player"
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetWeaponsList";
tmpDef.decl = "<player>: entity GetWeaponsList(): string[]";
tmpDef.desc = "Gets an array of all weapons that the player has. Includes any alt-mode weapons";
tmpDef.callon = "Player"
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "CanPlayerPlaceSentry";
tmpDef.decl = "<player>: entity CanPlayerPlaceSentry(): vector[]";
tmpDef.desc = "Get placement array data to checks whether the player can place a sentry in front of them as a valid position";
tmpDef.callon = "Player"
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "CanPlayerPlaceTank";
tmpDef.decl = "<player>: entity CanPlayerPlaceTank(<placement_radius>: float, <placement_height>: float, <placement_forward_distance>: float, <placement_up_distance>: float, <placement_sweep_distance>: float, <placement_min_normal>: float): array";
tmpDef.desc = "Get placement array data to checks whether the player can place a tank in front of them as a valid position";
tmpDef.callon = "Player"
tmpDef.reqArgs = [
    "1 : <float> : The placement radius.",
    "2 : <float> : The placement height.",
    "3 : <float> : The placement forward distance.",
    "4 : <float> : The placement up distance.",
    "5 : <float> : The placement sweep distance.",
    "6 : <float> : The placement minimum normal."
];
game_defs.push(tmpDef);


tmpDef = new Def_Function;
tmpDef.name = "VisionSetNakedForPlayer";
tmpDef.decl = "<player>: entity VisionSetNakedForPlayer(<vision>: string, <fade>: float?): void";
tmpDef.desc = "Sets the 'naked' vision for this player";
tmpDef.callon = "Player"
tmpDef.reqArgs = [
    "1 : <string> : The vision to set as naked.",
];
tmpDef.optArgs = [
    "2 : <float> : The fade duration."
];
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "VisionSetNightForPlayer";
tmpDef.decl = "<player>: entity VisionSetNightForPlayer(<vision>: string, <fade>: float?): void";
tmpDef.desc = "Sets the visionset for this player when they have nightvision goggles equipped";
tmpDef.callon = "Player"
tmpDef.reqArgs = [
    "1 : <string> : The vision to set for night vision.",
];
tmpDef.optArgs = [
    "2 : <float> : The fade duration."
];
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "VisionSetMissileCamForPlayer";
tmpDef.decl = "<player>: entity VisionSetMissileCamForPlayer(<vision>: string, <fade>: float?): void";
tmpDef.desc = "Sets the visionset for this player while they are controlling a missile";
tmpDef.callon = "Player"
tmpDef.reqArgs = [
    "1 : <string> : The vision to set for missile cam.",
];
tmpDef.optArgs = [
    "2 : <float> : The fade duration."
];
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "VisionSetThermalForPlayer";
tmpDef.decl = "<player>: entity VisionSetThermalForPlayer(<vision>: string, <fade>: float?): void";
tmpDef.desc = "Sets the visionset for this player when they are scoped into a thermal scope";
tmpDef.callon = "Player"
tmpDef.reqArgs = [
    "1 : <string> : The vision to set for thermal vision.",
];
tmpDef.optArgs = [
    "2 : <float> : The fade duration."
];
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "VisionSetPainForPlayer";
tmpDef.decl = "<player>: entity VisionSetPainForPlayer(<vision>: string, <fade>: float?): void";
tmpDef.desc = "Sets the visionset for this player when they are in pain/near death";
tmpDef.callon = "Player"
tmpDef.reqArgs = [
    "1 : <string> : The vision to set for pain vision.",
];
tmpDef.optArgs = [
    "2 : <float> : The fade duration."
];
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetBlurForPlayer";
tmpDef.decl = "<player>: entity SetBlurForPlayer(<blur>: float, <time>: float): void";
tmpDef.desc = "Sets the players' naked-eye vision. Optionally give a transition time from the current vision.";
tmpDef.callon = "Player"
tmpDef.reqArgs = [
    "1 : <float> : The blur amount.",
    "2 : <float> : The transition time."
];
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetPlayerWeaponModel";
tmpDef.decl = "<player>: entity GetPlayerWeaponModel(): string";
tmpDef.desc = "Gets the weapon model of the player's current weapon";
tmpDef.callon = "Player"
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetPlayerKnifeModel";
tmpDef.decl = "<player>: entity GetPlayerKnifeModel(): string";
tmpDef.desc = "Gets the weapon model of the player's knife";
tmpDef.callon = "Player"
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "UpdatePlayerModelWithWeapons";
tmpDef.decl = "<player>: entity UpdatePlayerModelWithWeapons(): void";
tmpDef.desc = "Updates the player's current player model according to their current loadout";
tmpDef.callon = "Player"
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "NotifyOnPlayerCommand";
tmpDef.decl = "<player>: entity NotifyOnPlayerCommand(<notify>: string, <command>: string): void";
tmpDef.desc = "Whenever the console command processor encounters <command> for any reason, it will notify script with the string <notify> on the player entity. Additionally, it will pass the arguments to the notify as strings, where the first argument is the initiating command.";
tmpDef.callon = "Player"
tmpDef.reqArgs = [
    "1 : <string> : The notification string.",
    "2 : <string> : The command to listen for."
];
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "CanMantle";
tmpDef.decl = "<player>: entity CanMantle(): bool";
tmpDef.desc = "Checks if the player can mantle at their current location";
tmpDef.callon = "Player"
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "ForceMantle";
tmpDef.decl = "<player>: entity ForceMantle(): void";
tmpDef.desc = "Forces the player to mantle in their current spot regardless if they can";
tmpDef.callon = "Player"
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "IsMantling";
tmpDef.decl = "<player>: entity IsMantling(): bool";
tmpDef.desc = "Returns true if the player is mantling, false otherwise.";
tmpDef.callon = "Player"
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "PlayFX";
tmpDef.decl = "<player>: entity PlayFX(<effect>: int, <position>: vector3, <forward>: vector3?, <up>: vector3?): void";
tmpDef.desc = "Play an effect so that it is attached to this entity";
tmpDef.callon = "Player"
tmpDef.reqArgs = [
    "1 : <int> : The effect to play.",
    "2 : <vector3> : The position to play the effect."
];
tmpDef.optArgs = [
    "3 : <vector3> : The forward direction of the effect.",
    "4 : <vector3> : The up direction of the effect."
];
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "Player_RecoilScaleOn";
tmpDef.decl = "<player>: entity Player_RecoilScaleOn(<scale>: int): int";
tmpDef.desc = "Turns on recoil scaling if off and sets the player's current recoil scaling factor";
tmpDef.callon = "Player"
tmpDef.reqArgs = [
    "1 : <int> : The recoil scaling factor to set."
];
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "Player_RecoilScaleOff";
tmpDef.decl = "<player>: entity Player_RecoilScaleOff(): void";
tmpDef.desc = "Turns off recoil scaling so that they use default values";
tmpDef.callon = "Player"
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "WeaponLockStart";
tmpDef.decl = "<player>: entity WeaponLockStart(): void";
tmpDef.desc = "Begins player's weapon lockon sequence (hud effects, etc). Will clear any existing hard lock. Use WeaponLockFinalize(this Entity entity, ) to complete lock";
tmpDef.callon = "Player"
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "WeaponLockFinalize";
tmpDef.decl = "<player>: entity WeaponLockFinalize(<entity>: entity): void";
tmpDef.desc = "Locks player's weapon onto an entity. Implies WeaponLockStart(), so this may be called to jump to a hard lock";
tmpDef.callon = "Player"
tmpDef.reqArgs = [
    "1 : <entity> : The entity to lock onto."
];
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "WeaponLockFree";
tmpDef.decl = "<player>: entity WeaponLockFree(): void";
tmpDef.desc = "Clear the player's weapon lock";
tmpDef.callon = "Player"
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "WeaponLockTargetTooClose";
tmpDef.decl = "<player>: entity WeaponLockTargetTooClose(<tooClose>: bool): void";
tmpDef.desc = "When set true, the player will be unable to fire their lockon weapons, and will recieve a hint print telling them that they are too close";
tmpDef.callon = "Player"
tmpDef.reqArgs = [
    "1 : <bool> : Whether the player is too close or not."
];
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "WeaponLockNoClearance";
tmpDef.decl = "<player>: entity WeaponLockNoClearance(<noClearance>: bool): void";
tmpDef.desc = "When set true, the player will be unable to fire thair lockon weapon, and will recieve a hint print telling them that there is an obstruction";
tmpDef.callon = "Player"
tmpDef.reqArgs = [
    "1 : <bool> : Whether there is an obstruction or not."
];
game_defs.push(tmpDef);


tmpDef = new Def_Function;
tmpDef.name = "VisionSyncWithPlayer";
tmpDef.decl = "<player>: entity VisionSyncWithPlayer(<player>: entity): void";
tmpDef.desc = "Syncs this player's vision with another player's";
tmpDef.callon = "Player"
tmpDef.reqArgs = [
    "1 : <entity> : The player to sync vision with."
];
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "ShowHudSplash";
tmpDef.decl = "<player>: entity ShowHudSplash(<splash>: string, <slot>: int, <optionalNum>: int): void";
tmpDef.desc = "Shows a splash notification to this player";
tmpDef.callon = "Player"
tmpDef.reqArgs = [
    "1 : <string> : The splash notification to show.",
    "2 : <int> : The slot to display the splash in.",
];
tmpDef.optArgs = [
    "3 : <int> : An optional number."
];
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetPerk";
tmpDef.decl = "<player>: entity SetPerk(<perk>: string, <codePerk>: bool?, <useSlot>: bool?): void";
tmpDef.desc = "Give the specified perk";
tmpDef.callon = "Player"
tmpDef.reqArgs = [
    "1 : <string> : The perk to give."
];
tmpDef.optArgs = [
    "2 : <bool> : Whether the perk is a code perk.",
    "3 : <bool> : Whether to use a slot for the perk."
];
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "HasPerk";
tmpDef.decl = "<player>: entity HasPerk(<perk>: string): bool";
tmpDef.desc = "Test if a player has a perk";
tmpDef.callon = "Player"
tmpDef.reqArgs = [
    "1 : <string> : The perk to test for."
];
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "ClearPerks";
tmpDef.decl = "<player>: entity ClearPerks(): void";
tmpDef.desc = "Removes all perks for a player";
tmpDef.callon = "Player"
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "UnSetPerk";
tmpDef.decl = "<player>: entity UnSetPerk(<perk>: string, <useSlot>: bool?): void";
tmpDef.desc = "Takes the specified perk from the player";
tmpDef.callon = "Player"
tmpDef.reqArgs = [
    "1 : <string> : The perk to remove."
];
tmpDef.optArgs = [
    "2 : <bool> : Whether to use a slot for the perk."
];
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "PingPlayer";
tmpDef.decl = "<player>: entity PingPlayer(): void";
tmpDef.desc = "Flashes a player on their teammate's compasses";
tmpDef.callon = "Player"
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "ButtonPressed";
tmpDef.decl = "<entity>: entity ButtonPressed(<key>: string): bool";
tmpDef.desc = "Check if the host is pressing the button/key";
tmpDef.callon = "Player"
tmpDef.reqArgs = [
    "1 : <string> : The key to check if pressed."
];
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SayAll";
tmpDef.decl = "<player>: entity SayAll(<message>: string): void";
tmpDef.desc = "Write a client chat message from this client to everybody.";
tmpDef.callon = "Player"
tmpDef.reqArgs = [
    "1 : <string> : The message to send to all players."
];
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SayTeam";
tmpDef.decl = "<player>: entity SayTeam(<message>: string): void";
tmpDef.desc = "Write a client chat message from this client to everybody on their team.";
tmpDef.callon = "Player"
tmpDef.reqArgs = [
    "1 : <string> : The message to send to the team."
];
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "ShowScoreBoard";
tmpDef.decl = "<player>: entity ShowScoreBoard(): void";
tmpDef.desc = "Updates the scoreboard data on a given client.";
tmpDef.callon = "Player"
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetSpawnWeapon";
tmpDef.decl = "<player>: entity SetSpawnWeapon(<weapon>: string): void";
tmpDef.desc = "Sets the weapon that this player will spawn with.";
tmpDef.callon = "Player"
tmpDef.reqArgs = [
    "1 : <string> : The weapon name."
];
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "DropItem";
tmpDef.decl = "<player>: entity DropItem(<itemName>: string): entity";
tmpDef.desc = "Drop an item with the given item name.";
tmpDef.callon = "Player"
tmpDef.reqArgs = [
    "1 : <string> : The name of the item to drop."
];
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "DropScavengerBag";
tmpDef.decl = "<player>: entity DropScavengerBag(<item>: string): entity";
tmpDef.desc = "Creates a scavenger bag from this entity and drops it.";
tmpDef.callon = "Player"
tmpDef.reqArgs = [
    "1 : <string> : The item name for the scavenger bag."
];
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "FinishPlayerDamage";
tmpDef.decl = "<player>: entity FinishPlayerDamage(<inflictor>: entity?, <attacker>: entity?, <damage>: int, <damageFlags>: int, <meansOfDeath>: string, <weapon>: string, <point>: vector3, <direction>: vector3, <hitLocation>: string, <offsetTime>: float): void";
tmpDef.desc = "Does damage to the player.";
tmpDef.callon = "Player"
tmpDef.optArgs = [
    "1 : <entity> : The entity causing the damage.",
    "2 : <entity> : The entity attacking.",
    "3 : <int> : The amount of damage.",
    "4 : <int> : Flags indicating the type of damage.",
    "5 : <string> : The means of death.",
    "6 : <string> : The weapon causing the damage.",
    "7 : <vector3> : The point at which the damage occurred.",
    "8 : <vector3> : The direction of the damage.",
    "9 : <string> : The location where the player was hit.",
    "10 : <float> : The time offset for the damage."
];
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "Suicide";
tmpDef.decl = "<player>: entity Suicide(): void";
tmpDef.desc = "Kills the player immediately as a suicide.";
tmpDef.callon = "Player"
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "CloseInGameMenu";
tmpDef.decl = "<player>: entity CloseInGameMenu(): void";
tmpDef.desc = "Closes the in-game menu for this client.";
tmpDef.callon = "Player"
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "IPrintLn";
tmpDef.decl = "IPrintLn(<message>: string): void";
tmpDef.desc = "Write a line to the screen.";
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "IPrintLnBold";
tmpDef.decl = "<player>: entity IPrintLnBold(<message>: string): void";
tmpDef.desc = "Write a bold line to this player's screen.";
tmpDef.callon = "Player"
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "Spawn";
tmpDef.decl = "<player>: entity Spawn(<origin>: vector3, <angles>: vector3): void";
tmpDef.desc = "Spawns this player at the specified position as if they are respawning.";
tmpDef.callon = "Player"
tmpDef.reqArgs = [
    "1 : <vector3> : The position to spawn at.",
    "2 : <vector3> : The angles to spawn with."
];
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetEnterTime";
tmpDef.decl = "<player>: entity SetEnterTime(): void";
tmpDef.desc = "TBD";
tmpDef.callon = "Player"
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "ClonePlayer";
tmpDef.decl = "<player>: entity ClonePlayer(<duration>: int?): entity";
tmpDef.desc = "Clone the player's model for death animations.";
tmpDef.callon = "Player"
tmpDef.optArgs = [
    "1 : <int> : The duration for which to clone the player's model. Default is -1."
];
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "IsTalking";
tmpDef.decl = "<player>: entity IsTalking(): bool";
tmpDef.desc = "Returns true if the player is talking via voice chat.";
tmpDef.callon = "Player"
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "AllowSpectateTeam";
tmpDef.decl = "<player>: entity AllowSpectateTeam(<team>: string, <canSpectate>: bool): void";
tmpDef.desc = "Sets whether the player can spectate the given team.";
tmpDef.callon = "Player"
tmpDef.reqArgs = [
    "1 : <string> : The team to allow spectating for.",
    "2 : <bool> : Whether the player can spectate the team."
];
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetGUID";
tmpDef.decl = "<player>: entity GetGUID(): string";
tmpDef.desc = "Gets this player's GUID";
tmpDef.callon = "Player"
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetXUID";
tmpDef.decl = "<player>: entity GetXUID(): string";
tmpDef.desc = "Gets this player's XUID";
tmpDef.callon = "Player"
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "IsHost";
tmpDef.decl = "<player>: entity IsHost(): bool";
tmpDef.desc = "Checks if this player is the host of the current game";
tmpDef.callon = "Player"
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetSpectatingPlayer";
tmpDef.decl = "<player>: entity GetSpectatingPlayer(): entity";
tmpDef.desc = "Gets the player that this player is currently spectating";
tmpDef.callon = "Player"
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "PredictStreamPos";
tmpDef.decl = "<player>: entity PredictStreamPos(<origin>: vector3, <angles>: vector3): void";
tmpDef.desc = "TBD";
tmpDef.callon = "Player"
tmpDef.reqArgs = [
    "1 : <vector3> : The position to predict stream for.",
    "2 : <vector3> : The angles to predict stream with."
];
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "UpdateScores";
tmpDef.decl = "<player>: entity UpdateScores(): void";
tmpDef.desc = "Updates the client's knowledge of team scores.";
tmpDef.callon = "Player"
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "UpdateDMScores";
tmpDef.decl = "<player>: entity UpdateDMScores(): void";
tmpDef.desc = "Updates the client's knowledge of scores for theirself and the (next) best player in the game. For use in Free-For-All.";
tmpDef.callon = "Player"
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetRank";
tmpDef.decl = "<player>: entity SetRank(<rank>: int, <prestige>: int?): void";
tmpDef.desc = "Sets the player's rank and prestige level.";
tmpDef.callon = "Player"
tmpDef.reqArgs = [
    "1 : <int> : The player's rank.",
    "2 : <int?> : The player's prestige level. Optional."
];
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetCardTitle";
tmpDef.decl = "<player>: entity SetCardTitle(<title>: string): void";
tmpDef.desc = "Sets this player's playercard title";
tmpDef.callon = "Player"
tmpDef.reqArgs = [
    "1 : <string> : The title for the playercard."
];
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetCardIcon";
tmpDef.decl = "<player>: entity SetCardIcon(<icon>: string): void";
tmpDef.desc = "Sets this player's playercard icon";
tmpDef.callon = "Player"
tmpDef.reqArgs = [
    "1 : <string> : The icon for the playercard."
];
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetCardNamePlate";
tmpDef.decl = "<player>: entity SetCardNamePlate(<nameplate>: string): void";
tmpDef.desc = "Sets this player's playercard nameplate(unused)";
tmpDef.callon = "Player"
tmpDef.reqArgs = [
    "1 : <string> : The nameplate for the playercard."
];
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetCardDisplaySlot";
tmpDef.decl = "<player>: entity SetCardDisplaySlot(<player>: entity, <slot>: int): void";
tmpDef.desc = "Sets display slot info for this player, used for card splashes such as 'YOU KILLED', 'KILLED YOU','SPECTATING'";
tmpDef.callon = "Player"
tmpDef.reqArgs = [
    "1 : <entity> : The player entity for whom the display slot info is being set.",
    "2 : <int> : The display slot number."
];
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "KC_RegWeaponForFxRemoval";
tmpDef.decl = "<player>: entity KC_RegWeaponForFxRemoval(<weapon>: string): void";
tmpDef.desc = "TBD";
tmpDef.callon = "Player"
tmpDef.reqArgs = [
    "1 : <string> : The weapon to register for FX removal."
];
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "LastStandRevive";
tmpDef.decl = "<player>: entity LastStandRevive(): void";
tmpDef.desc = "Revives this player if they are in last stand or final stand";
tmpDef.callon = "Player"
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "SetSpectateDefaults";
tmpDef.decl = "<player>: entity SetSpectateDefaults(<origin>: vector3, <angles>: vector3): void";
tmpDef.desc = "Sets the default spectator starting position for this player";
tmpDef.callon = "Player"
tmpDef.reqArgs = [
    "1 : <vector3> : The origin position.",
    "2 : <vector3> : The angles."
];
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "GetThirdPersonCrosshairOffset";
tmpDef.decl = "<player>: entity GetThirdPersonCrosshairOffset(): float";
tmpDef.desc = "Gets the offset for the player's crosshair when in a third person view";
tmpDef.callon = "Player"
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "DisableWeaponPickup";
tmpDef.decl = "<player>: entity DisableWeaponPickup(): void";
tmpDef.desc = "Disables weapon pickup for this player";
tmpDef.callon = "Player"
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "EnableWeaponPickup";
tmpDef.decl = "<player>: entity EnableWeaponPickup(): void";
tmpDef.desc = "Enables weapon pickup for this player";
tmpDef.callon = "Player"
game_defs.push(tmpDef);
//#endregion