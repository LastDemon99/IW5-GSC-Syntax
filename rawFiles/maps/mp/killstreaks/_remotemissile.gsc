// IW5 GSC SOURCE
// Decompiled by https://github.com/xensik/gsc-tool

init()
{
    mapname = getdvar("mapname");

    if (mapname == "mp_suburbia")
    {
        level.missileremotelaunchvert = 7000;
        level.missileremotelaunchhorz = 10000;
        level.missileremotelaunchtargetdist = 2000;
    }
    else if (mapname == "mp_mainstreet")
    {
        level.missileremotelaunchvert = 7000;
        level.missileremotelaunchhorz = 10000;
        level.missileremotelaunchtargetdist = 2000;
    }
    else
    {
        level.missileremotelaunchvert = 14000;
        level.missileremotelaunchhorz = 7000;
        level.missileremotelaunchtargetdist = 1500;
    }

    precacheitem("remotemissile_projectile_mp");
    precacheshader("ac130_overlay_grain");
    
    level.rockets = [];
    level.killstreakfuncs["predator_missile"] = ::tryusepredatormissile;
    level.missilesforsighttraces = [];
    level.remotemissile_fx["explode"] = loadfx("explosions/aerial_explosion");
}

tryusepredatormissile(lifeId)
{
    if (isdefined(level.civilianjetflyby))
    {
        self iprintlnbold(&"MP_CIVILIAN_AIR_TRAFFIC");
        return 0;
    }

    self maps\mp\_utility::setusingremote("remotemissile");

    result = self maps\mp\killstreaks\_killstreaks::initridekillstreak();

    if (result != "success")
    {
        if (result != "disconnect")
            self maps\mp\_utility::clearusingremote();

        return 0;
    }

    level thread _fire(lifeId, self);
    return 1;
}

getbestspawnpoint(remoteMissileSpawnPoints)
{
    validEnemies = [];

    foreach (spawnPoint in remoteMissileSpawnPoints)
    {
        spawnPoint.validplayers = [];
        spawnPoint.spawnscore = 0;
    }

    foreach (player in level.players)
    {
        if (!maps\mp\_utility::isreallyalive(player))
            continue;

        if (player.team == self.team)
            continue;

        if (player.team == "spectator")
            continue;

        bestDistance = 999999999;
        bestSpawnPoint = undefined;

        foreach (spawnPoint in remoteMissileSpawnPoints)
        {
            spawnPoint.validplayers[spawnPoint.validplayers.size] = player;
            potentialBestDistance = distance2d(spawnPoint.targetent.origin, player.origin);

            if (potentialBestDistance <= bestDistance)
            {
                bestDistance = potentialBestDistance;
                bestSpawnPoint = spawnPoint;
            }
        }

        bestSpawnPoint.spawnscore += 2;
    }

    bestSpawn = remoteMissileSpawnPoints[0];

    foreach (spawnPoint in remoteMissileSpawnPoints)
    {
        foreach (player in spawnPoint.validplayers)
        {
            spawnPoint.spawnscore += 1;

            if (bullettracepassed(player.origin + (0.0, 0.0, 32.0), spawnPoint.origin, 0, player))
                spawnPoint.spawnscore += 3;

            if (spawnPoint.spawnscore > bestSpawn.spawnscore)
            {
                bestSpawn = spawnPoint;
                continue;
            }

            if (spawnPoint.spawnscore == bestSpawn.spawnscore)
            {
                if (common_scripts\utility::cointoss())
                    bestSpawn = spawnPoint;
            }
        }
    }

    return spawnPoint;
}

drawline(start, end, timeSlice, color)
{
    drawTime = int(timeSlice * 20);

    for (time = 0; time < drawTime; time++)
        wait 0.05;
}

_fire(lifeId, player)
{
    remoteMissileSpawnArray = getentarray("remoteMissileSpawn", "targetname");

    foreach (spawn in remoteMissileSpawnArray)
    {
        if (isdefined(spawn.target))
            spawn.targetent = getent(spawn.target, "targetname");
    }

    if (remoteMissileSpawnArray.size > 0)
        remoteMissileSpawn = player getbestspawnpoint(remoteMissileSpawnArray);
    else
        remoteMissileSpawn = undefined;

    if (isdefined(remoteMissileSpawn))
    {
        startPos = remoteMissileSpawn.origin;
        targetPos = remoteMissileSpawn.targetent.origin;
        vector = vectornormalize(startPos - targetPos);
        startPos = vector * 14000 + targetPos;
        rocket = magicbullet("remotemissile_projectile_mp", startPos, targetPos, player);
    }
    else
    {
        upVector = (0, 0, level.missileremotelaunchvert);
        backDist = level.missileremotelaunchhorz;
        targetDist = level.missileremotelaunchtargetdist;
        forward = anglestoforward(player.angles);
        startPos = player.origin + upVector + forward * backDist * -1;
        targetPos = player.origin + forward * targetDist;
        rocket = magicbullet("remotemissile_projectile_mp", startPos, targetPos, player);
    }

    if (!isdefined(rocket))
    {
        player maps\mp\_utility::clearusingremote();
        return;
    }

    rocket thread maps\mp\gametypes\_weapons::addmissiletosighttraces(player.team);
    rocket thread handledamage();
    rocket.lifeid = lifeId;
    rocket.type = "remote";
    missileeyes(player, rocket);
}

handledamage()
{
    self endon("death");
    self endon("deleted");
    self setcandamage(1);

    for (;;)
        self waittill("damage");
}

missileeyes(player, rocket)
{
    player endon("joined_team");
    player endon("joined_spectators");
    rocket thread rocket_cleanupondeath();
    player thread player_cleanupongameended(rocket);
    player thread player_cleanuponteamchange(rocket);
    player visionsetmissilecamforplayer("black_bw", 0);
    player endon("disconnect");

    if (isdefined(rocket))
    {
        player visionsetmissilecamforplayer(game["thermal_vision"], 1.0);
        player thermalvisionon();
        player thread delayedfofoverlay();
        player cameralinkto(rocket, "tag_origin");
        player controlslinkto(rocket);

        if (getdvarint("camera_thirdPerson"))
            player maps\mp\_utility::setthirdpersondof(0);

        rocket waittill("death");
        player thermalvisionoff();

        if (isdefined(rocket))
            player maps\mp\_matchdata::logkillstreakevent("predator_missile", rocket.origin);

        player controlsunlink();
        player maps\mp\_utility::freezecontrolswrapper(1);

        if (!level.gameended || isdefined(player.finalkill))
            player thread staticeffect(0.5);

        wait 0.5;
        player thermalvisionfofoverlayoff();
        player cameraunlink();

        if (getdvarint("camera_thirdPerson"))
            player maps\mp\_utility::setthirdpersondof(1);
    }

    player maps\mp\_utility::clearusingremote();
}

delayedfofoverlay()
{
    self endon("death");
    self endon("disconnect");
    level endon("game_ended");
    wait 0.15;
    self thermalvisionfofoverlayon();
}

staticeffect(duration)
{
    self endon("disconnect");

    staticBG = newclienthudelem(self);
    staticBG.horzalign = "fullscreen";
    staticBG.vertalign = "fullscreen";
    staticBG setshader("white", 640, 480);
    staticBG.archive = 1;
    staticBG.sort = 10;

    static = newclienthudelem(self);
    static.horzalign = "fullscreen";
    static.vertalign = "fullscreen";
    static setshader("ac130_overlay_grain", 640, 480);
    static.archive = 1;
    static.sort = 20;

    wait(duration);
    static destroy();
    staticBG destroy();
}

player_cleanuponteamchange(rocket)
{
    rocket endon("death");
    self endon("disconnect");
    self common_scripts\utility::waittill_any("joined_team", "joined_spectators");

    if (self.team != "spectator")
    {
        self thermalvisionfofoverlayoff();
        self controlsunlink();
        self cameraunlink();

        if (getdvarint("camera_thirdPerson"))
            self maps\mp\_utility::setthirdpersondof(1);
    }

    self maps\mp\_utility::clearusingremote();
    level.remotemissileinprogress = undefined;
}

rocket_cleanupondeath()
{
    entityNumber = self getentitynumber();
    level.rockets[entityNumber] = self;
    self waittill("death");
    level.rockets[entityNumber] = undefined;
}

player_cleanupongameended(rocket)
{
    rocket endon("death");
    self endon("death");
    level waittill("game_ended");

    self thermalvisionfofoverlayoff();
    self controlsunlink();
    self cameraunlink();

    if (getdvarint("camera_thirdPerson"))
        self maps\mp\_utility::setthirdpersondof(1);
}
