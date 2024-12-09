import { CompletionItem, CompletionItemKind } from 'vscode';

export const defs: CompletionItem[] = [];

export const KEYWORDS = [
    "if", "else", "switch", "case", "while", "for", "foreach", "return", "break", "default", "include", "define", "undef", "continue", "true", "false", "undefined", "level", "self", "thread", "wait", "waittillframeend"
];

KEYWORDS.forEach(keyword => defs.push(new CompletionItem(keyword, CompletionItemKind.Keyword)));

export const IW5_FUNCTIONS = [
	"cmdexec",
	"replacefunc",
	"isTestClient",
	"isWeaponClipOnly",
	"print3D",
	"print",
	"line",
	"printLn",
	"assert",
	"botAction",
	"botStop",
	"botMovement",
	"botMeleeParams",
	"botRemoteAngles",
	"botAngles",
	"exp",
	"log",
	"closer",
	"isEmped",
	"addTestClient",
	"toUpper",
	"abs",
	"acos",
	"addPitch",
	"addRoll",
	"addYaw",
	"adsButtonPressed",
	"allowJump",
	"allowSpectateTeam",
	"ambientStop",
	"angleClamp180",
	"anglesToForward",
	"anglesToRight",
	"anglesToUp",
	"animHasNoteTrack",
	"anyAmmoForWeaponModes",
	"attach",
	"attachPath",
	"attachShieldModel",
	"attackButtonPressed",
	"autoSpotOverlayOff",
	"autoSpotOverlayOn",
	"averageNormal",
	"averagePoint",
	"beginLocationSelection",
	"blockTeamRadar",
	"bulletTrace",
	"bulletTracePassed",
	"buttonPressed",
	"cameraLinkTo",
	"cameraUnlink",
	"canPlayerPlaceSentry",
	"canPlayerPlaceTank",
	"canSpawn",
	"ceil",
	"changeFontScaleOverTime",
	"clamp",
	"clearAllTextAfterHudElem",
	"clearGoalYaw",
	"clearLookAtEnt",
	"clearPerks",
	"clearTargetEnt",
	"clearTargetEntity",
	"clearTargetYaw",
	"clientClaimTrigger",
	"clientReleaseTrigger",
	"cloneBrushModelToScriptModel",
	"clonePlayer",
	"closeInGameMenu",
	"closeMenu",
	"closePopupMenu",
	"controlsLinkTo",
	"controlsUnlink",
	"cos",
	"damageConeTrace",
	"delete",
	"destroy",
	"detach",
	"detachAll",
	"detachShieldModel",
	"detonate",
	"disableOffhandWeapons",
	"disablePlayerUse",
	"disableUsability",
	"disableWeaponPickup",
	"disableWeapons",
	"disableWeaponSwitch",
	"distance",
	"distance2d",
	"distanceSquared",
	"doSpawn",
	"dropItem",
	"dropScavengerBag",
	"earthquake",
	"enableGrenadeTouchDamage",
	"enableOffhandWeapons",
	"enablePlayerUse",
	"enableUsability",
	"enableWeaponPickup",
	"enableWeapons",
	"enableWeaponSwitch",
	"endLobby",
	"endLocationSelection",
	"endon",
	"endParty",
	"exitLevel",
	"fadeOverTime",
	"finishPlayerDamage",
	"fireWeapon",
	"flagDescriptor",
	"float",
	"floor",
	"forceUseHintOff",
	"forceUseHintOn",
	"fragButtonPressed",
	"freezeControls",
	"getAmmoCount",
	"getAnimLength",
	"getArrayKeys",
	"getAttachModelName",
	"getAttachSize",
	"getAttachTagName",
	"getBuildNumber",
	"getBuildVersion",
	"getClientMatchData",
	"getCorpseAnim",
	"getCurrentPrimaryWeapon",
	"getCurrentWeapon",
	"getDvar",
	"getDvarFloat",
	"getDvarInt",
	"getDvarVector",
	"getEnt",
	"getEntArray",
	"getEntityNumber",
	"getEntityVelocity",
	"getEye",
	"getGroundPosition",
	"getGuid",
	"getLightIntensity",
	"getMapCustom",
	"getMatchData",
	"getMatchRulesData",
	"getMissileOwner",
	"getMode",
	"getNormalizedMovement",
	"getNorthYaw",
	"getNoteTrackTimes",
	"getOffhandSecondaryClass",
	"getOrigin",
	"getPlayerAngles",
	"getPlayerData",
	"getPointInBounds",
	"getRestedTime",
	"getSpectatingPlayer",
	"getStance",
	"getSubStr",
	"getSystemTime",
	"getTagAngles",
	"getTagOrigin",
	"getTeamPlayersAlive",
	"getTeamRadar",
	"getTeamScore",
	"getThirdPersonCrosshairOffset",
	"getTime",
	"getTurretTarget",
	"getUavStrengthLevelNeutral",
	"getUavStrengthLevelShowEnemyDirectional",
	"getUavStrengthLevelShowEnemyFastSweep",
	"getUavStrengthMax",
	"getUavStrengthMin",
	"getVehicleNode",
	"getVehicleNodeArray",
	"getVelocity",
	"getWeaponAmmoClip",
	"getWeaponAmmoStock",
	"getWeaponsList",
	"getWeaponsListAll",
	"getWeaponsListExclusives",
	"getWeaponsListItems",
	"getWeaponsListOffhands",
	"getWeaponsListPrimaries",
	"getXuid",
	"giveMaxAmmo",
	"giveStartAmmo",
	"giveWeapon",
	"glassRadiusDamage",
	"hasWeapon",
	"hide",
	"hidePart",
	"incrementCounter",
	"int",
	"iPrintln",
	"iPrintlnBold",
	"isAlive",
	"isDefined",
	"isExplosiveDamageMod",
	"isFiringTurret",
	"isFiringVehicleTurret",
	"isHost",
	"isItemUnlocked",
	"isLinked",
	"isMantling",
	"isOnGround",
	"isOnLadder",
	"isPlayer",
	"isRagdoll",
	"isSpawner",
	"isSplitScreen",
	"isSplitScreenPlayer",
	"isSplitScreenPlayerPrimary",
	"isString",
	"isSubStr",
	"isTouching",
	"isUsingMatchRulesData",
	"isUsingOnlineDataOffline",
	"isUsingTurret",
	"itemWeaponSetAmmo",
	"kcRegWeaponForFxRemoval",
	"kick",
	"laserOff",
	"laserOn",
	"lastStandRevive",
	"length",
	"lengthSquared",
	"linkTo",
	"loadFx",
	"logPrint",
	"logString",
	"magicBullet",
	"makeDvarServerInfo",
	"makePortableRadar",
	"makeScrambler",
	"makeTurretInoperable",
	"makeTurretSolid",
	"makeUnusable",
	"makeUsable",
	"makeVehicleSolidCapsule",
	"mapRestart",
	"max",
	"meleeButtonPressed",
	"min",
	"missileCreateAttractorEnt",
	"missileSetFlightModeDirect",
	"missileSetTargetEnt",
	"missileSetTargetPos",
	"moveGravity",
	"moveOverTime",
	"moveShieldModel",
	"moveTo",
	"newClientHudElem",
	"newHudElem",
	"newTeamHudElem",
	"notify",
	"notifyOnPlayerCommand",
	"notSolid",
	"obituary",
	"objectiveAdd",
	"objectiveDelete",
	"objectiveIcon",
	"objectiveOnEntity",
	"objectivePlayer",
	"objectivePlayerEnemyTeam",
	"objectivePlayerTeam",
	"objectivePosition",
	"objectiveState",
	"objectiveTeam",
	"openMenu",
	"openPopupMenu",
	"physicsExplosionSphere",
	"physicsLaunchClient",
	"physicsLaunchServer",
	"physicsTrace",
	"pingPlayer",
	"placeSpawnPoint",
	"playerRecoilScaleOff",
	"playerRecoilScaleOn",
	"playerAds",
	"playerForceDeathAnim",
	"playerHide",
	"playerLinkedOffsetEnable",
	"playerLinkedSetUseBaseAngleForViewClamp",
	"playerLinkedSetViewZNear",
	"playerLinkTo",
	"playerLinkWeaponViewToDelta",
	"playerPhysicsTrace",
	"playFx",
	"playFxOnTag",
	"playFxOnTagForClients",
	"playLocalSound",
	"playLoopedFx",
	"playLoopSound",
	"playRumbleOnEntity",
	"playRumbleOnPosition",
	"playSound",
	"playSoundAsMaster",
	"playSoundAtPos",
	"playSoundToPlayer",
	"playSoundToTeam",
	"pointOnSegmentNearestToPoint",
	"positionWouldTelefrag",
	"precacheFxOnTag",
	"precacheFxTeamThermal",
	"precacheHeadIcon",
	"precacheItem",
	"precacheLeaderboards",
	"precacheLocationSelector",
	"precacheMenu",
	"precacheMinimapIcon",
	"precacheModel",
	"precacheMpAnim",
	"precacheRumble",
	"precacheShader",
	"precacheShellshock",
	"precacheSound",
	"precacheStatusIcon",
	"precacheString",
	"precacheTag",
	"precacheTurret",
	"precacheVehicle",
	"predictStreamPos",
	"radarJamOff",
	"radarJamOn",
	"radiusDamage",
	"randomFloat",
	"randomFloatRange",
	"randomInt",
	"randomIntRange",
	"releaseClaimedTrigger",
	"remoteCameraSoundscapeOff",
	"remoteControlTurret",
	"remoteControlTurretOff",
	"remoteControlVehicle",
	"remoteControlVehicleOff",
	"resetSpreadOverride",
	"return",
	"rotatePitch",
	"rotateRoll",
	"rotateTo",
	"rotateVelocity",
	"rotateYaw",
	"sayAll",
	"sayTeam",
	"scaleOverTime",
	"scriptModelPlayAnim",
	"secondaryOffhandButtonPressed",
	"sendClientMatchData",
	"sendMatchData",
	"setAc130Ambience",
	"setActionSlot",
	"setAimSpreadMovementScale",
	"setBlurForPlayer",
	"setBottomArc",
	"setCanDamage",
	"setCanRadiusDamage",
	"setCardDisplaySlot",
	"setCardIcon",
	"setCardNamePlate",
	"setCardTitle",
	"setClientDvar",
	"setClientDvars",
	"setClientMatchData",
	"setClientMatchDataDef",
	"setClientNameMode",
	"setContents",
	"setCursorHint",
	"setDamageState",
	"setDefaultDropPitch",
	"setDepthOfField",
	"setDvar",
	"setDvarIfUninitialized",
	"setDynamicDvar",
	"setEmpJammed",
	"setExpFog",
	"setGameEndTime",
	"setGoalYaw",
	"setHintString",
	"setHoverParams",
	"setLeftArc",
	"setLightIntensity",
	"setLookAtEnt",
	"setMapCenter",
	"setMatchClientIp",
	"setMatchData",
	"setMatchDataDef",
	"setMatchDataId",
	"setMaxPitchRoll",
	"setMinimap",
	"setMode",
	"setModel",
	"setMoveSpeedScale",
	"setNearGoalNotifyDist",
	"setOffhandPrimaryClass",
	"setOffhandSecondaryClass",
	"setOrigin",
	"setPerk",
	"setPlayerAngles",
	"setPlayerData",
	"setPlayerNameString",
	"setPlayerTeamRank",
	"setPulseFx",
	"setRank",
	"setReverb",
	"setRightArc",
	"setScriptMoverKillCam",
	"setSentryCarrier",
	"setSentryOwner",
	"setShader",
	"setSlowMotion",
	"setSpawnWeapon",
	"setSpectateDefaults",
	"setSpreadOverride",
	"setStance",
	"setTargetEnt",
	"setTargetEntity",
	"setTargetYaw",
	"setTeamForTrigger",
	"setTeamRadar",
	"setTeamRadarStrength",
	"setTeamScore",
	"setTenthsTimer",
	"setText",
	"setThermalBodyMaterial",
	"setTimer",
	"setTopArc",
	"setTurningAbility",
	"setTurretMinimapVisible",
	"setTurretModeChangeWait",
	"setTurretTargetEnt",
	"setTurretTeam",
	"setValue",
	"setVehGoalPos",
	"setVehWeapon",
	"setViewKickScale",
	"setViewModel",
	"setWaypoint",
	"setWeaponAmmoClip",
	"setWeaponAmmoStock",
	"setWeaponHudIconOverride",
	"setWhizByRadii",
	"setWhizBySpreads",
	"setWinningTeam",
	"setYawSpeed",
	"shellShock",
	"shootTurret",
	"show",
	"showHudSplash",
	"showPart",
	"showToPlayer",
	"sightConeTrace",
	"sightTracePassed",
	"sin",
	"solid",
	"sortByDistance",
	"soundExists",
	"spawn",
	"spawnFx",
	"spawnHelicopter",
	"spawnLoopingSound",
	"spawnPlane",
	"spawnSightTrace",
	"spawnStruct",
	"spawnTurret",
	"spawnVehicle",
	"sqrt",
	"startAc130",
	"startPath",
	"startRagdoll",
	"stopAc130",
	"stopFxOnTag",
	"stopLocalSound",
	"stopLoopSound",
	"stopRumble",
	"stopShellShock",
	"strIcmp",
	"strTok",
	"stunPlayer",
	"suicide",
	"switchToWeapon",
	"switchToWeaponImmediate",
	"tableLookup",
	"tableLookupByRow",
	"tableLookupIString",
	"tableLookupRowNum",
	"takeAllWeapons",
	"takeWeapon",
	"thermalVisionFofOverlayOff",
	"thermalVisionFofOverlayOn",
	"thermalVisionOff",
	"thermalVisionOn",
	"toLower",
	"triggerFx",
	"tSetDevDvar",
	"tSetExpFog",
	"turretFireDisable",
	"turretFireEnable",
	"unblockTeamRadar",
	"unlink",
	"unsetPerk",
	"updateDmScores",
	"updateScores",
	"updateSkill",
	"useButtonPressed",
	"usingAnimTree",
	"vectorDot",
	"vectorFromLineToPoint",
	"vectorNormalize",
	"vectorToAngles",
	"vectorToYaw",
	"vehicleCanTurretTargetPoint",
	"vehicleFinishDamage",
	"vehicleGetSpawnerArray",
	"vehicleGetSpeed",
	"vehicleSetSpeed",
	"vehicleTurretControlOff",
	"vehicleTurretControlOn",
	"viewKick",
	"visionSetMissileCam",
	"visionSetMissileCamForPlayer",
	"visionSetNaked",
	"visionSetNakedForPlayer",
	"visionSetNight",
	"visionSetPain",
	"visionSetThermal",
	"visionSetThermalForPlayer",
	"visionSyncWithPlayer",
	"wait",
	"waitTill",
	"waitTillMatch",
	"weaponAltWeaponName",
	"weaponClass",
	"weaponClipSize",
	"weaponFireTime",
	"weaponInheritsPerks",
	"weaponInventoryType",
	"weaponLockFinalize",
	"weaponLockFree",
	"weaponLockNoClearance",
	"weaponLockStart",
	"weaponLockTargetTooClose",
	"weaponMaxAmmo",
	"weaponType",
	"willNeverChange",
	"worldPointInReticleCircle",
	"addAiEventListener",
	"allowAds",
	"allowCrouch",
	"allowedStances",
	"allowFire",
	"allowLean",
	"allowMelee",
	"allowProne",
	"allowSprint",
	"allowStand",
	"ambientPlay",
	"angleClamp",
	"animCustom",
	"animMode",
	"animRelative",
	"animScripted",
	"asin",
	"atan",
	"atDangerousNode",
	"badPlace_arc",
	"badPlace_brush",
	"badPlace_cylinder",
	"badPlace_delete",
	"bios",
	"boot",
	"bulletSpread",
	"bulletTracer",
	"calcRockingAngles",
	"canAttackEnemyNode",
	"canSee",
	"canShoot",
	"canShootEnemy",
	"canSpawnTurret",
	"canUseTurret",
	"castle_aud_msg_handler",
	"castShadows",
	"changeLevel",
	"checkCoverExitPosWithPath",
	"checkGrenadeThrow",
	"checkGrenadeThrowPos",
	"cinematic",
	"cinematicInGame",
	"cinematicInGameLoop",
	"cinematicInGameLoopResident",
	"cinematicInGameSync",
	"clearAllCorpses",
	"clearAnim",
	"clearEnemy",
	"clearEntityTarget",
	"clearFixedNodeSafeVolume",
	"clearGoalVolume",
	"clearPitchOrient",
	"clearTurretTarget",
	"combineAngles",
	"commitSave",
	"commitWouldBeValid",
	"compareNodeDirToPathDir",
	"connectPaths",
	"createThreatBiasGroup",
	"custom_battleChatter",
	"deactivateEq",
	"deactivateOcclusion",
	"deactivateReverb",
	"deleteGlass",
	"destroyGlass",
	"digitalDistortSetParams",
	"disableAimAssist",
	"disableBreaching",
	"disableForcedSunShadows",
	"disableInvulnerability",
	"disableSlowAim",
	"disableTurretDismount",
	"disconnectPaths",
	"dismountVehicle",
	"doDamage",
	"doesNodeAllowStance",
	"dontCastShadows",
	"dontInterpolate",
	"doppler",
	"driveVehicleAndControlTurret",
	"driveVehicleAndControlTurretOff",
	"dropWeapon",
	"enableAimAssist",
	"enableBreaching",
	"enableDeathShield",
	"enableForcedSunShadows",
	"enableHealthShield",
	"enableInvulnerability",
	"enableLinkTo",
	"enableMouseSteer",
	"enableOuterSpaceModelLighting",
	"enableSlowAim",
	"enableTurretDismount",
	"enterProne",
	"eqOff",
	"eqOn",
	"exitProne",
	"fadeOutShellShock",
	"findBestCoverNode",
	"findReacquireDirectPath",
	"findShuffleCoverNode",
	"flag_descriptor",
	"flagEnemyUnattackable",
	"flare",
	"forceSharedAmmo",
	"forceTeleport",
	"forceViewModelAnimation",
	"freeVehicle",
	"get_item_ent",
	"getAiArray",
	"getAiCount",
	"getAimAngle",
	"getAiSpeciesArray",
	"getAllNodes",
	"getAllVehicleNodes",
	"getAngleDelta",
	"getAnglesToLikelyEnemyPath",
	"getAnimTime",
	"getAttachPos",
	"getBarrelSpinRate",
	"getCentroid",
	"getClosestEnemySqDist",
	"getClosestNodeInSight",
	"getCommandFromKey",
	"getCorpseArray",
	"getCurrentOffhand",
	"getCurrentWeaponClipAmmo",
	"getDoorPathNode",
	"getDropToFloorPosition",
	"getEnemyInfo",
	"getFractionMaxAmmo",
	"getFxVisibility",
	"getGlass",
	"getGlassArray",
	"getGlassOrigin",
	"getGoalVolume",
	"getGunAngles",
	"getHighestNodeStance",
	"getKeyBinding",
	"getLevelTicks",
	"getLightColor",
	"getLocalPlayerProfileData",
	"getMapSunDirection",
	"getMapSunLight",
	"getMotionAngle",
	"getMoveDelta",
	"getMuzzleAngle",
	"getMuzzlePos",
	"getMuzzleSideOffsetPos",
	"getNegotiationEndNode",
	"getNegotiationStartNode",
	"getNode",
	"getNodeArray",
	"getNodesInRadius",
	"getNodesInRadiusSorted",
	"getNormalHealth",
	"getNormalizedCameraMovement",
	"getOffhandPrimaryClass",
	"getPartName",
	"getPlayerIntelIsFound",
	"getPlayerSetting",
	"getPlayerViewHeight",
	"getShootAtPos",
	"getSpawnerArray",
	"getSpawnerTeamArray",
	"getStartAngles",
	"getStartOrigin",
	"getSticksConfig",
	"getThreatBias",
	"getThreatBiasGroup",
	"getTurret",
	"getTurretOwner",
	"getValidCoverPeekOuts",
	"getVehicleOwner",
	"getWeaponArray",
	"getWeaponClipModel",
	"getWeaponHideTags",
	"getWeaponHudIconOverride",
	"getWeaponModel",
	"getWheelSurface",
	"giveAchievement",
	"hamburg_aud_msg_handler",
	"hasPerk",
	"hideAllParts",
	"hideHud",
	"hideOnClient",
	"hidePart_allInstances",
	"hideViewModel",
	"initRiotShieldHealth",
	"invisibleNotSolid",
	"isAi",
	"isArray",
	"isBadGuy",
	"isCinematicPlaying",
	"isCoverValidAgainstEnemy",
	"isEndStr",
	"isEnemyTeam",
	"isFiring",
	"isGodMode",
	"isGrenadePosSafe",
	"isIndoor",
	"isInGoal",
	"isInScriptedState",
	"isKnownEnemyInRadius",
	"isKnownEnemyInVolume",
	"isLookingAt",
	"isMeleeing",
	"isMoveSuppressed",
	"isOcclusionEnabled",
	"isPhysVeh",
	"isReloading",
	"isSaveRecentlyLoaded",
	"isSaveSuccessful",
	"isSentient",
	"isStanceAllowed",
	"isSuppressed",
	"isSwitchingWeapon",
	"isThrowingGrenade",
	"isTurretActive",
	"isTurretReady",
	"isWaitingOnSound",
	"isWeaponDetonationTimed",
	"joltBody",
	"kc_regWeaponForFxRemoval",
	"kill",
	"laserAltOn",
	"laserForceOff",
	"laserForceOn",
	"lastKnownPos",
	"lastKnownTime",
	"lerpFov",
	"lerpSunAngles",
	"lerpSunDirection",
	"lerpViewAngleClamp",
	"levelSoundFade",
	"linkToBlendToTag",
	"localToWorldCoords",
	"magicGrenade",
	"magicGrenadeManual",
	"makeEntitySentient",
	"makeFakeAi",
	"map_restart",
	"mayMoveFromPointToPoint",
	"mayMoveToPoint",
	"melee",
	"missile_clearTarget",
	"missile_createAttractorEnt",
	"missile_createAttractorOrigin",
	"missile_createRepulsorEnt",
	"missile_deleteAttractor",
	"missile_setFlightModeDirect",
	"missile_setFlightModeTop",
	"missile_setTargetEnt",
	"missile_setTargetPos",
	"missionFailed",
	"missionSuccess",
	"mountVehicle",
	"moveSlide",
	"moveX",
	"moveY",
	"moveZ",
	"music_msg_handler",
	"musicPlay",
	"musicStop",
	"nearClaimNode",
	"nearClaimNodeAndAngle",
	"nearNode",
	"newPip",
	"nightVisionGogglesForceOff",
	"nightVisionGogglesForceOn",
	"notifyOnCommand",
	"objective_add",
	"objective_additionalEntity",
	"objective_additionalPosition",
	"objective_current",
	"objective_current_noMessage",
	"objective_delete",
	"objective_icon",
	"objective_onEntity",
	"objective_player",
	"objective_playerEnemyTeam",
	"objective_playerTeam",
	"objective_position",
	"objective_setPointerTextOverride",
	"objective_state",
	"objective_state_noMessage",
	"objective_string",
	"objective_string_noMessage",
	"objective_team",
	"orientMode",
	"painVisionOff",
	"painVisionOn",
	"pauseCinematicInGame",
	"payback_aud_msg_handler",
	"perlinNoise2D",
	"phys_crash",
	"phys_disableCrashing",
	"phys_setSpeed",
	"physicsExplosionCylinder",
	"physicsJitter",
	"physicsJolt",
	"physicsLaunchServerItem",
	"pickupGrenade",
	"player_recoilScaleOff",
	"player_recoilScaleOn",
	"playerClearStreamOrigin",
	"playerLinkedTurretAnglesEnable",
	"playerLinkToAbsolute",
	"playerLinkToBlend",
	"playerLinkToDelta",
	"playerSetExpFog",
	"playerSetGroundReferenceEnt",
	"playerSetStreamOrigin",
	"playRumbleLoopOnEntity",
	"playRumbleLoopOnPosition",
	"playSoundAtViewHeight",
	"precacheDigitalDistortCodeAssets",
	"precacheMinimapSentryCodeAssets",
	"precacheNightVisionCodeAssets",
	"prefetchSound",
	"pushPlayer",
	"reacquireMove",
	"reacquireStep",
	"reconEvent",
	"reconSpatialEvent",
	"refreshHudAmmoCounter",
	"remapStage",
	"remoteCameraSoundscapeOn",
	"removeAiEventListener",
	"resetSunDirection",
	"resetSunLight",
	"restoreDefaultDropPitch",
	"resumeSpeed",
	"rolling_object_trigger",
	"safeTeleport",
	"saveGame",
	"saveGameNoCommit",
	"scalePitch",
	"scaleVolume",
	"seeRecently",
	"setAcceleration",
	"setAirResistance",
	"setAiSpread",
	"setAnim",
	"setAnimKnob",
	"setAnimKnobAll",
	"setAnimKnobAllRestart",
	"setAnimKnobLimited",
	"setAnimKnobLimitedRestart",
	"setAnimKnobRestart",
	"setAnimLimited",
	"setAnimRestart",
	"setAnimTime",
	"setAutoRotationDelay",
	"setBlur",
	"setChannelVolume",
	"setClock",
	"setConvergenceHeightPercent",
	"setConvergenceTime",
	"setCorpseRemoveTimer",
	"setCullDist",
	"setDeceleration",
	"setDefaultAimLimits",
	"setDistributed2dSound",
	"setEngagementMaxDist",
	"setEngagementMinDist",
	"setEntityTarget",
	"setEq",
	"setEqLerp",
	"setFixedNodeSafeVolume",
	"setFlaggedAnim",
	"setFlaggedAnimKnob",
	"setFlaggedAnimKnobAll",
	"setFlaggedAnimKnobAllRestart",
	"setFlaggedAnimKnobLimited",
	"setFlaggedAnimKnobLimitedRestart",
	"setFlaggedAnimKnobRestart",
	"setFlaggedAnimLimited",
	"setFlaggedAnimRestart",
	"setFlashbanged",
	"setFriendlyChain",
	"setGoalEntity",
	"setGoalNode",
	"setGoalPos",
	"setGoalVolume",
	"setGoalVolumeAuto",
	"setHalfResParticles",
	"setHudDynLight",
	"setHudLighting",
	"setIgnoreMeGroup",
	"setJitterParams",
	"setLaserMaterial",
	"setLightColor",
	"setLightFovRange",
	"setLightRadius",
	"setLocalPlayerProfileData",
	"setLookAtEntity",
	"setLookAtText",
	"setNormalHealth",
	"setNorthYaw",
	"setOcclusion",
	"setPhysicsGravityDir",
	"setPitch",
	"setPlayerIgnoreRadiusDamage",
	"setPlayerIntelFound",
	"setPlayerSpread",
	"setPotentialThreat",
	"setProneAnimNodes",
	"setRunToPos",
	"setSavedDvar",
	"setSoundBlend",
	"setSpawnerTeam",
	"setStableMissile",
	"setSunDirection",
	"setSunFlarePosition",
	"setSunLight",
	"setSuppressionTime",
	"setSwitchNode",
	"setTalkToSpecies",
	"setTenthsTimerStatic",
	"setTenthsTimerUp",
	"setThreatBias",
	"setThreatBiasGroup",
	"setTimerUp",
	"setTimeScale",
	"setTurretAnim",
	"setTurretCanAiDetach",
	"setTurretDismountOrg",
	"setTurretFov",
	"setTurretIgnoreGoals",
	"setTurretTargetVec",
	"setVehicleLookAtText",
	"setVehicleTeam",
	"setVelocity",
	"setViewModelDepthOfField",
	"setVolMod",
	"setVolume",
	"setWaitSpeed",
	"setWaterSheeting",
	"setWaypointEdgeStyle_rotatingIcon",
	"setWaypointIconOffscreenOnly",
	"setWhizByOffset",
	"setWhizByProbabilities",
	"setYawSpeedByName",
	"shoot",
	"shootBlank",
	"shouldFaceMotion",
	"showHud",
	"showOnClient",
	"showViewModel",
	"snapToTargetEntity",
	"soundSetTimeScaleFactor",
	"spawnDrone",
	"squared",
	"stalingradSpawn",
	"startBarrelSpin",
	"startCoverArrival",
	"startFiring",
	"startRagdollFromImpact",
	"startScriptedAnim",
	"startUsingHeroOnlyLighting",
	"startUsingLessFrequentLighting",
	"stopAllRumbles",
	"stopAnimScripted",
	"stopBarrelSpin",
	"stopCinematicInGame",
	"stopFiring",
	"stopMoveSlide",
	"stopSoundChannel",
	"stopSounds",
	"stopUseAnimTree",
	"stopUseTurret",
	"switchToOffhand",
	"tan",
	"target_drawCornersOnly",
	"target_drawSquare",
	"target_getArray",
	"target_hideFromPlayer",
	"target_isInCircle",
	"target_isInRect",
	"target_isTarget",
	"target_remove",
	"target_set",
	"target_setAttackMode",
	"target_setJavelinOnly",
	"target_setOffscreenShader",
	"target_setScaledRenderMode",
	"target_setShader",
	"target_showToPlayer",
	"teleport",
	"thermalDrawDisable",
	"thermalDrawEnable",
	"threatBiasGroupExists",
	"throwGrenade",
	"tick_doppler",
	"transformMove",
	"traverseMode",
	"updateGamerProfile",
	"updateGamerProfileAll",
	"updatePlayerModelWithWeapons",
	"updatePlayerSightAccuracy",
	"updateProne",
	"uploadLeaderboards",
	"uploadScore",
	"useAnimTree",
	"useBy",
	"useCoverNode",
	"useTriggerRequireLookAt",
	"useTurret",
	"using_animTree",
	"vectorLerp",
	"vehicle_canTurretTargetPoint",
	"vehicle_finishDamage",
	"vehicle_getArray",
	"vehicle_getBodyVelocity",
	"vehicle_getSpawnerArray",
	"vehicle_getSpeed",
	"vehicle_getSteering",
	"vehicle_getThrottle",
	"vehicle_getVelocity",
	"vehicle_heliSetAi",
	"vehicle_setSpeed",
	"vehicle_setSpeedImmediate",
	"vehicle_teleport",
	"vehicle_turnEngineOff",
	"vehicle_turnEngineOn",
	"vehicleAttackButtonPressed",
	"vehicleDriveTo",
	"vehicleUseAltBlendedAudio",
	"vibrate",
	"visibleSolid",
	"visionSetNakedForPlayer_lerp",
	"weaponBurstCount",
	"weaponHasThermalScope",
	"weaponIsAuto",
	"weaponIsBoltAction",
	"weaponIsSemiAuto",
	"weaponStartAmmo",
	"worldPointInReticle_circle",
	"zonem_start_zone"
];

IW5_FUNCTIONS.forEach(keyword => defs.push(new CompletionItem(keyword, CompletionItemKind.Function)));
