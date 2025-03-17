// IW5 GSC SOURCE
// Decompiled by https://github.com/xensik/gsc-tool

main( model, type, classname )
{
    maps\_vehicle::build_template( "c130", model, type, classname );
    maps\_vehicle::build_localinit( ::init_local );
    maps\_vehicle::build_deathmodel( "vehicle_ac130_low" );
    maps\_vehicle::build_deathfx( "explosions/large_vehicle_explosion", undefined, "explo_metal_rand" );
    maps\_vehicle::build_life( 999, 500, 1500 );
    maps\_vehicle::build_team( "allies" );
    maps\_vehicle::build_treadfx();
    lightmodel = maps\_vehicle::get_light_model( model, classname );
    maps\_vehicle::build_light( lightmodel, "wingtip_green", "tag_light_L_wing", "misc/aircraft_light_wingtip_green", "running", 0.0 );
    maps\_vehicle::build_light( lightmodel, "wingtip_red", "tag_light_R_wing", "misc/aircraft_light_wingtip_red", "running", 0.05 );
    maps\_vehicle::build_light( lightmodel, "tail_red", "tag_light_tail", "misc/aircraft_light_white_blink", "running", 0.05 );
    maps\_vehicle::build_light( lightmodel, "white_blink", "tag_light_belly", "misc/aircraft_light_red_blink", "running", 1.0 );
}

init_local()
{
    maps\_vehicle::lights_on( "running" );
    self hidepart( "tag_25mm" );
    self hidepart( "tag_40mm" );
    self hidepart( "tag_105mm" );
}

_id_3A9C( var_0 )
{
    return var_0;
}

_id_3A9D()
{
    var_0 = [];

    for ( var_1 = 0; var_1 < 1; var_1++ )
        var_0[var_1] = spawnstruct();

    return var_0;
}
