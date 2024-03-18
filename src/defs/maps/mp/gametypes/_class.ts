import { CompletionItem } from 'vscode';
import { CompletionItemKind } from 'vscode';

export var defs = new Array<CompletionItem>();
export var maps_mp_gametypes__class = new Array<CompletionItem>();
var tmpDef;

tmpDef = new CompletionItem("Init");
tmpDef.detail = "Init()";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__class.push(tmpDef);

tmpDef = new CompletionItem("Getclasschoice");
tmpDef.detail = "Getclasschoice( response )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__class.push(tmpDef);

tmpDef = new CompletionItem("Getweaponchoice");
tmpDef.detail = "Getweaponchoice( response )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__class.push(tmpDef);

tmpDef = new CompletionItem("Logclasschoice");
tmpDef.detail = "Logclasschoice( class, primaryWeapon, specialType, perks )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__class.push(tmpDef);

tmpDef = new CompletionItem("Cac_getcustomclassloc");
tmpDef.detail = "Cac_getcustomclassloc()";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__class.push(tmpDef);

tmpDef = new CompletionItem("Cac_getweapon");
tmpDef.detail = "Cac_getweapon( classIndex, weaponIndex )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__class.push(tmpDef);

tmpDef = new CompletionItem("Cac_getweaponattachment");
tmpDef.detail = "Cac_getweaponattachment( classIndex, weaponIndex )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__class.push(tmpDef);

tmpDef = new CompletionItem("Cac_getweaponattachmenttwo");
tmpDef.detail = "Cac_getweaponattachmenttwo( classIndex, weaponIndex )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__class.push(tmpDef);

tmpDef = new CompletionItem("Cac_getweaponbuff");
tmpDef.detail = "Cac_getweaponbuff( classIndex, weaponIndex )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__class.push(tmpDef);

tmpDef = new CompletionItem("Cac_getweaponcamo");
tmpDef.detail = "Cac_getweaponcamo( classIndex, weaponIndex )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__class.push(tmpDef);

tmpDef = new CompletionItem("Cac_getweaponreticle");
tmpDef.detail = "Cac_getweaponreticle( classIndex, weaponIndex )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__class.push(tmpDef);

tmpDef = new CompletionItem("Cac_getperk");
tmpDef.detail = "Cac_getperk( classIndex, perkIndex )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__class.push(tmpDef);

tmpDef = new CompletionItem("Cac_getkillstreak");
tmpDef.detail = "Cac_getkillstreak( class_num, streakType, streakIndex )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__class.push(tmpDef);

tmpDef = new CompletionItem("Cac_getdeathstreak");
tmpDef.detail = "Cac_getdeathstreak( classIndex )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__class.push(tmpDef);

tmpDef = new CompletionItem("Cac_getammotype");
tmpDef.detail = "Cac_getammotype( classIndex )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__class.push(tmpDef);

tmpDef = new CompletionItem("Cac_getoffhand");
tmpDef.detail = "Cac_getoffhand( classIndex )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__class.push(tmpDef);

tmpDef = new CompletionItem("Recipe_getkillstreak");
tmpDef.detail = "Recipe_getkillstreak( teamName, classIndex, streakType, streakIndex )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__class.push(tmpDef);

tmpDef = new CompletionItem("Table_getweapon");
tmpDef.detail = "Table_getweapon( tableName, classIndex, weaponIndex )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__class.push(tmpDef);

tmpDef = new CompletionItem("Table_getweaponattachment");
tmpDef.detail = "Table_getweaponattachment( tableName, classIndex, weaponIndex, attachmentIndex )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__class.push(tmpDef);

tmpDef = new CompletionItem("Table_getweaponbuff");
tmpDef.detail = "Table_getweaponbuff( tableName, classIndex, weaponIndex )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__class.push(tmpDef);

tmpDef = new CompletionItem("Table_getweaponcamo");
tmpDef.detail = "Table_getweaponcamo( tableName, classIndex, weaponIndex )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__class.push(tmpDef);

tmpDef = new CompletionItem("Table_getweaponreticle");
tmpDef.detail = "Table_getweaponreticle( tableName, classIndex, weaponIndex )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__class.push(tmpDef);

tmpDef = new CompletionItem("Table_getequipment");
tmpDef.detail = "Table_getequipment( tableName, classIndex, perkIndex )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__class.push(tmpDef);

tmpDef = new CompletionItem("Table_getperk");
tmpDef.detail = "Table_getperk( tableName, classIndex, perkIndex )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__class.push(tmpDef);

tmpDef = new CompletionItem("Table_getteamperk");
tmpDef.detail = "Table_getteamperk( tableName, classIndex )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__class.push(tmpDef);

tmpDef = new CompletionItem("Table_getoffhand");
tmpDef.detail = "Table_getoffhand( tableName, classIndex )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__class.push(tmpDef);

tmpDef = new CompletionItem("Table_getkillstreak");
tmpDef.detail = "Table_getkillstreak( tableName, classIndex, streakIndex )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__class.push(tmpDef);

tmpDef = new CompletionItem("Table_getdeathstreak");
tmpDef.detail = "Table_getdeathstreak( tableName, classIndex )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__class.push(tmpDef);

tmpDef = new CompletionItem("Table_getammotype");
tmpDef.detail = "Table_getammotype( tableName, classIndex )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__class.push(tmpDef);

tmpDef = new CompletionItem("Getclassindex");
tmpDef.detail = "Getclassindex( className )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__class.push(tmpDef);

tmpDef = new CompletionItem("Cloneloadout");
tmpDef.detail = "Cloneloadout()";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__class.push(tmpDef);

tmpDef = new CompletionItem("Loadoutfakeperks");
tmpDef.detail = "Loadoutfakeperks( loadoutStreakType, loadoutAmmoType )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__class.push(tmpDef);

tmpDef = new CompletionItem("Getloadoutstreaktypefromstreaktype");
tmpDef.detail = "Getloadoutstreaktypefromstreaktype( streakType )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__class.push(tmpDef);

tmpDef = new CompletionItem("Giveloadout");
tmpDef.detail = "Giveloadout( team, class, allowCopycat, setPrimarySpawnWeapon )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__class.push(tmpDef);

tmpDef = new CompletionItem("_detachall");
tmpDef.detail = "_detachall()";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__class.push(tmpDef);

tmpDef = new CompletionItem("Isperkupgraded");
tmpDef.detail = "Isperkupgraded( perkName )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__class.push(tmpDef);

tmpDef = new CompletionItem("Getperkupgrade");
tmpDef.detail = "Getperkupgrade( perkName )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__class.push(tmpDef);

tmpDef = new CompletionItem("Loadoutallperks");
tmpDef.detail = "Loadoutallperks( loadoutEquipment, loadoutPerk1, loadoutPerk2, loadoutPerk3, loadoutPrimaryBuff, loadoutSecondaryBuff )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__class.push(tmpDef);

tmpDef = new CompletionItem("Trackriotshield");
tmpDef.detail = "Trackriotshield()";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__class.push(tmpDef);

tmpDef = new CompletionItem("Tryattach");
tmpDef.detail = "Tryattach( placement )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__class.push(tmpDef);

tmpDef = new CompletionItem("Trydetach");
tmpDef.detail = "Trydetach( placement )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__class.push(tmpDef);

tmpDef = new CompletionItem("Buildweaponname");
tmpDef.detail = "Buildweaponname( baseName, attachment1, attachment2, camo, reticle )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__class.push(tmpDef);

tmpDef = new CompletionItem("Buildweaponnamecamo");
tmpDef.detail = "Buildweaponnamecamo( weaponName, camo )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__class.push(tmpDef);

tmpDef = new CompletionItem("Buildweaponnamereticle");
tmpDef.detail = "Buildweaponnamereticle( weaponName, reticle )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__class.push(tmpDef);

tmpDef = new CompletionItem("Makeletterstonumbers");
tmpDef.detail = "Makeletterstonumbers()";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__class.push(tmpDef);

tmpDef = new CompletionItem("Setkillstreaks");
tmpDef.detail = "Setkillstreaks( streak1, streak2, streak3 )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__class.push(tmpDef);

tmpDef = new CompletionItem("Replenishloadout");
tmpDef.detail = "Replenishloadout()";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__class.push(tmpDef);

tmpDef = new CompletionItem("Onplayerconnecting");
tmpDef.detail = "Onplayerconnecting()";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__class.push(tmpDef);

tmpDef = new CompletionItem("Fadeaway");
tmpDef.detail = "Fadeaway( waitDelay, fadeDelay )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__class.push(tmpDef);

tmpDef = new CompletionItem("Setclass");
tmpDef.detail = "Setclass( newClass )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__class.push(tmpDef);

tmpDef = new CompletionItem("Getperkforclass");
tmpDef.detail = "Getperkforclass( perkSlot, className )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__class.push(tmpDef);

tmpDef = new CompletionItem("Classhasperk");
tmpDef.detail = "Classhasperk( className, perkName )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__class.push(tmpDef);

tmpDef = new CompletionItem("Isvalidprimary");
tmpDef.detail = "Isvalidprimary( refString, showAssert )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__class.push(tmpDef);

tmpDef = new CompletionItem("Isvalidsecondary");
tmpDef.detail = "Isvalidsecondary( refString, perk2, perk3, showAssert )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__class.push(tmpDef);

tmpDef = new CompletionItem("Isvalidattachment");
tmpDef.detail = "Isvalidattachment( refString, shouldAssert )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__class.push(tmpDef);

tmpDef = new CompletionItem("Isattachmentunlocked");
tmpDef.detail = "Isattachmentunlocked( weaponRef, attachmentRef )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__class.push(tmpDef);

tmpDef = new CompletionItem("Isvalidweaponbuff");
tmpDef.detail = "Isvalidweaponbuff( refString )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__class.push(tmpDef);

tmpDef = new CompletionItem("Isweaponbuffunlocked");
tmpDef.detail = "Isweaponbuffunlocked( weaponRef, buffRef )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__class.push(tmpDef);

tmpDef = new CompletionItem("Isvalidcamo");
tmpDef.detail = "Isvalidcamo( refString )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__class.push(tmpDef);

tmpDef = new CompletionItem("Isvalidreticle");
tmpDef.detail = "Isvalidreticle( refString )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__class.push(tmpDef);

tmpDef = new CompletionItem("Iscamounlocked");
tmpDef.detail = "Iscamounlocked( weaponRef, camoRef )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__class.push(tmpDef);

tmpDef = new CompletionItem("Isvalidequipment");
tmpDef.detail = "Isvalidequipment( refString )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__class.push(tmpDef);

tmpDef = new CompletionItem("Isvalidoffhand");
tmpDef.detail = "Isvalidoffhand( refString )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__class.push(tmpDef);

tmpDef = new CompletionItem("Isvalidperk1");
tmpDef.detail = "Isvalidperk1( refString )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__class.push(tmpDef);

tmpDef = new CompletionItem("Isvalidperk2");
tmpDef.detail = "Isvalidperk2( refString, perk1 )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__class.push(tmpDef);

tmpDef = new CompletionItem("Isvalidperk3");
tmpDef.detail = "Isvalidperk3( refString, perk1 )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__class.push(tmpDef);

tmpDef = new CompletionItem("Isvaliddeathstreak");
tmpDef.detail = "Isvaliddeathstreak( refString )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__class.push(tmpDef);

tmpDef = new CompletionItem("Isvalidweapon");
tmpDef.detail = "Isvalidweapon( refString )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__class.push(tmpDef);

tmpDef = new CompletionItem("Isvalidkillstreak");
tmpDef.detail = "Isvalidkillstreak( refString )";
tmpDef.kind = CompletionItemKind.Function;
maps_mp_gametypes__class.push(tmpDef);