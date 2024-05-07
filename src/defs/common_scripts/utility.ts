import { CompletionItem } from 'vscode';
import { CompletionItemKind } from 'vscode';

export var common_scripts_utility = new Array<CompletionItem>();
var tmpDef;

tmpDef = new CompletionItem("Scriptprintln");
tmpDef.detail = "Scriptprintln( channel, msg )";
tmpDef.documentation = "Prints a message to a specified channel.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Debugprintln");
tmpDef.detail = "Debugprintln( channel, msg )";
tmpDef.documentation = "Prints a message to the debug channel.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Draw_debug_line");
tmpDef.detail = "Draw_debug_line( start, end, timer )";
tmpDef.documentation = "Draws a debug line between two points over a specified time.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Waittillend");
tmpDef.detail = "Waittillend( msg )";
tmpDef.documentation = "Waits until a specific message is received.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Noself_func");
tmpDef.detail = "Noself_func( func, parm1, parm2, parm3, parm4 )";
tmpDef.documentation = "Runs a function from level.func array if it exists, without self reference.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Self_func");
tmpDef.detail = "Self_func( func, parm1, parm2, parm3, parm4 )";
tmpDef.documentation = "Runs a function from level.func array if it exists, without self reference.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Randomvector");
tmpDef.detail = "Randomvector( num )";
tmpDef.documentation = "Returns a random vector centered on <num>.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Randomvectorrange");
tmpDef.detail = "Randomvectorrange( num_min, num_max )";
tmpDef.documentation = "Returns a random vector centered between <num_min> and <num_max>.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Angle_dif");
tmpDef.detail = "Angle_dif ( oldangle, newangle )";
tmpDef.documentation = "Returns the difference between two yaw angles.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Sign");
tmpDef.detail = "Sign( x )";
tmpDef.documentation = "Returns the sign of a number.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Track");
tmpDef.detail = "Track( spot_to_Track )";
tmpDef.documentation = "Tracks a spot.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Get_enemy_team");
tmpDef.detail = "Get_enemy_team( team )";
tmpDef.documentation = "Gets the enemy team for a given team.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Clear_exception");
tmpDef.detail = "Clear_exception( type )";
tmpDef.documentation = "Clears an exception.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Set_exception");
tmpDef.detail = "Set_exception( type, func )";
tmpDef.documentation = "Sets an exception.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Set_all_exceptions");
tmpDef.detail = "Set_all_exceptions( exceptionFunc )";
tmpDef.documentation = "Sets all exceptions.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Cointoss");
tmpDef.detail = "Cointoss()";
tmpDef.documentation = "Returns true with a 50% chance.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Choose_from_weighted_array");
tmpDef.detail = "Choose_from_weighted_array( values, weights )";
tmpDef.documentation = "Chooses a value from a weighted array.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Get_cumulative_weights");
tmpDef.detail = "Get_cumulative_weights( weights )";
tmpDef.documentation = "Calculates cumulative weights from an array of weights.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Waittill_string");
tmpDef.detail = "Waittill_string( msg, ent )";
tmpDef.documentation = "Waits until a specific message is received.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Waittill_multiple");
tmpDef.detail = "Waittill_multiple( string1, string2, string3, string4, string5 )";
tmpDef.documentation = "Waits until multiple specific messages are received.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Waittill_multiple_ents");
tmpDef.detail = "Waittill_multiple_ents( ent1, string1, ent2, string2, ent3, string3, ent4, string4 )";
tmpDef.documentation = "Waits until multiple specific messages are received from different entities.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Waittill_any_return");
tmpDef.detail = "Waittill_any_return( string1, string2, string3, string4, string5 )";
tmpDef.documentation = "Waits for any of several messages then returns what it was.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Waittill_any_timeout");
tmpDef.detail = "Waittill_any_timeout( timeOut, string1, string2, string3, string4, string5 )";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("_timeout");
tmpDef.detail = "_timeout( delay )";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Waittill_any");
tmpDef.detail = "Waittill_any( string1, string2, string3, string4, string5, string6, string7, string8 )";
tmpDef.documentation = "Waits for any of several messages then returns what it was.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Waittill_any_ents");
tmpDef.detail = "Waittill_any_ents( ent1, string1, ent2, string2, ent3, string3, ent4, string4, ent5, string5, ent6, string6, ent7, string7 )";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Isflashed");
tmpDef.detail = "Isflashed()";
tmpDef.documentation = "Returns true if the player or an AI is flashed";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Flag_exist");
tmpDef.detail = "Flag_exist( message )";
tmpDef.documentation = "Checks to see if a flag exists";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Flag");
tmpDef.detail = "Flag( message )";
tmpDef.documentation = "Checks to see if a flag exists";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Init_flags");
tmpDef.detail = "Init_flags()";
tmpDef.kind = CompletionItemKind.Function;
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Flag_init");
tmpDef.detail = "Flag_init( message )";
tmpDef.documentation = "Initialize a flag to be used. All flags must be initialized before using flag_set or flag_wait";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Empty_init_func");
tmpDef.detail = "Empty_init_func( empty )";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Issuffix");
tmpDef.detail = "Issuffix( msg, suffix )";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Flag_set");
tmpDef.detail = "Flag_set( message, setter )";
tmpDef.documentation = "Sets the specified flag, all scripts using flag_wait will now continue.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Assign_unique_id");
tmpDef.detail = "Assign_unique_id()";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Flag_wait");
tmpDef.detail = "Flag_wait( msg, entity )";
tmpDef.documentation = "Waits until the specified flag is set.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Flag_clear");
tmpDef.detail = "Flag_clear( message )";
tmpDef.documentation = "Clears the specified flag.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Flag_waitopen");
tmpDef.detail = "Flag_waitopen( msg )";
tmpDef.documentation = "Waits for the flag to open";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Waittill_either");
tmpDef.detail = "Waittill_either( msg1, msg2 )";
tmpDef.documentation = "Waits until either message, on self";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Array_thread");
tmpDef.detail = "Array_thread( entities, process, var1, var2, var3, var4, var5, var6, var7, var8, var9 )";
tmpDef.documentation = "Threads the < process > function on every entity in the < entities > array. The entity will become 'self' in the specified function.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Array_call");
tmpDef.detail = "Array_call( entities, process, var1, var2, var3 )";
tmpDef.documentation = "Runs the code < process > function on every entity in the < entities > array. The entity will become 'self' in the specified function.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Array_thread4");
tmpDef.detail = "Array_thread4( entities, process, var1, var2, var3, var4 )";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Array_thread5");
tmpDef.detail = "Array_thread5( entities, process, var1, var2, var3, var4, var5 )";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Trigger_on");
tmpDef.detail = "Trigger_on( name, type )";
tmpDef.documentation = "Turns a trigger on. This only needs to be called if it was previously turned off";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Trigger_on_proc");
tmpDef.detail = "Trigger_on_proc()";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Trigger_off");
tmpDef.detail = "Trigger_off( name, type )";
tmpDef.documentation = "Turns a trigger off so it can no longer be triggered.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Trigger_off_proc");
tmpDef.detail = "Trigger_off_proc()";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Set_trigger_flag_permissions");
tmpDef.detail = "Set_trigger_flag_permissions( msg )";
tmpDef.documentation = "turns triggers on or off depending on if they have the proper flags set, based on their shift-g menu settings";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Update_trigger_based_on_flags");
tmpDef.detail = "Update_trigger_based_on_flags()";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Create_flags_and_return_tokens");
tmpDef.detail = "Create_flags_and_return_tokens( flags )";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Init_trigger_flags");
tmpDef.detail = "Init_trigger_flags()";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Getstruct");
tmpDef.detail = "Getstruct( name, type )";
tmpDef.documentation = "get a struct by target, targetname,script_noteworthy, or script_linkname types, must be called after maps\\_load::main();";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Getstructarray");
tmpDef.detail = "Getstructarray( name, type )";
tmpDef.documentation = "gets an array of script_structs";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Struct_class_init");
tmpDef.detail = "Struct_class_init()";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Fileprint_start");
tmpDef.detail = "Fileprint_start( file )";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Fileprint_map_start");
tmpDef.detail = "Fileprint_map_start()";
tmpDef.documentation = "starts map export with the file trees\\cod3\\cod3\\map_source\\xenon_export\\ < filename > .map adds header / worldspawn entity to the map.  Use this if you want to start a .map export.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Fileprint_map_header");
tmpDef.detail = "Fileprint_map_header( bInclude_blank_worldspawn )";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Fileprint_map_keypairprint");
tmpDef.detail = "Fileprint_map_keypairprint( key1, key2 )";
tmpDef.documentation = "prints a pair of keys to the current open map( by fileprint_map_start() )";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Fileprint_map_entity_start");
tmpDef.detail = "Fileprint_map_entity_start()";
tmpDef.documentation = "prints entity number and opening bracket to currently opened file";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Fileprint_map_entity_end");
tmpDef.detail = "Fileprint_map_entity_end()";
tmpDef.documentation = "close brackets an entity, required for the next entity to begin";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Fileprint_radiant_vec");
tmpDef.detail = "Fileprint_radiant_vec( vector )";
tmpDef.documentation = "this converts a vector to a .map file readable format";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Array_remove");
tmpDef.detail = "Array_remove( ents, remover )";
tmpDef.documentation = "Returns < ents > array minus < remover > ";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Array_remove_array");
tmpDef.detail = "Array_remove_array( ents, remover_array )";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Array_removeundefined");
tmpDef.detail = "Array_removeundefined( array )";
tmpDef.documentation = "Returns a new array of < array > minus the undefined indicies";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Array_levelthread");
tmpDef.detail = "Array_levelthread( array, process, var1, var2, var3 )";
tmpDef.documentation = "Threads the < process > function for every entity in the < entities > array. The level calls the function and each entity of the array is passed as the first parameter to the process.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Array_levelcall");
tmpDef.detail = "Array_levelcall( array, process, var1, var2, var3 )";
tmpDef.documentation = "Calls the < process > function for every entity in the < entities > array. The level calls the function and each entity of the array is passed as the first parameter to the process.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Add_to_array");
tmpDef.detail = "Add_to_array( array, ent )";
tmpDef.documentation = "Adds < ent > to < array > and returns the new array.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Flag_assert");
tmpDef.detail = "Flag_assert( msg )";
tmpDef.documentation = "Asserts that a flag is clear. Useful for proving an assumption of a flag's state";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Flag_wait_either");
tmpDef.detail = "Flag_wait_either( flag1, flag2 )";
tmpDef.documentation = "Waits until either of the the specified flags are set.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Flag_wait_either_return");
tmpDef.detail = "Flag_wait_either_return( flag1, flag2 )";
tmpDef.documentation = "Waits until either of the the specified flags are set, and returns the first one it found.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Flag_wait_any");
tmpDef.detail = "Flag_wait_any( flag1, flag2, flag3, flag4, flag5, flag6 )";
tmpDef.documentation = "Waits until any of the the specified flags are set.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Flag_wait_any_return");
tmpDef.detail = "Flag_wait_any_return( flag1, flag2, flag3, flag4, flag5 )";
tmpDef.documentation = "Waits until any of the the specified flags are set, and returns the first set flag that was found.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Flag_wait_all");
tmpDef.detail = "Flag_wait_all( flag1, flag2, flag3, flag4 )";
tmpDef.documentation = "Waits until all of the the specified flags are set.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Flag_wait_or_timeout");
tmpDef.detail = "Flag_wait_or_timeout( flagname, timer )";
tmpDef.documentation = "Waits until either the flag gets set or the timer elapses.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Flag_waitopen_or_timeout");
tmpDef.detail = "Flag_waitopen_or_timeout( flagname, timer )";
tmpDef.documentation = "Waits until either the flag gets cleared or the timer elapses.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Wait_for_flag_or_time_elapses");
tmpDef.detail = "Wait_for_flag_or_time_elapses( flagname, timer )";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Delaycall");
tmpDef.detail = "Delaycall( timer, func, param1, param2, param3, param4, param5, param6, param7, param8 )";
tmpDef.documentation = "delayCall is cool! It saves you from having to write extra script for once off commands. Note you don�t have to thread it off. delaycall is that smart!";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Delaycall_proc");
tmpDef.detail = "Delaycall_proc( func, timer, param1, param2, param3, param4, param5, param6, param7, param8 )";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Noself_delaycall");
tmpDef.detail = "Noself_delaycall( timer, func, param1, param2, param3, param4 )";
tmpDef.documentation = "Calls a command with no self (some commands don't support having self).";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Noself_delaycall_proc");
tmpDef.detail = "Noself_delaycall_proc( func, timer, param1, param2, param3, param4 )";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Issp");
tmpDef.detail = "Issp()";
tmpDef.documentation = "Returns false if the level name begins with mp_";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Issp_towerdefense");
tmpDef.detail = "Issp_towerdefense()";
tmpDef.documentation = "Returns true if the level name begins with so_td_";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("String_starts_with");
tmpDef.detail = "String_starts_with( string, start )";
tmpDef.documentation = "Returns true if the first string begins with the first string";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Plot_points");
tmpDef.detail = "Plot_points( plotpoints, r, g, b, timer )";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Draw_line_for_time");
tmpDef.detail = "Draw_line_for_time( org1, org2, r, g, b, timer )";
tmpDef.documentation = "Draws a line from < org1 > to < org2 > in the specified color for the specified duration";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Array_combine");
tmpDef.detail = "Array_combine( array1, array2 )";
tmpDef.documentation = "Combines the two arrays and returns the resulting array. This function doesn't care if it produces duplicates in the array.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Flat_angle");
tmpDef.detail = "Flat_angle( angle )";
tmpDef.documentation = "Returns the specified angle as a flat angle.( 45, 90, 30 ) becomes( 0, 90, 30 ). Useful if you just need an angle around Y - axis.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Flat_origin");
tmpDef.detail = "Flat_origin( org )";
tmpDef.documentation = "Returns a flat origin of the specified origin. Moves Z corrdinate to 0.( x, y, z ) becomes( x, y, 0 )";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Draw_arrow_time");
tmpDef.detail = "Draw_arrow_time( start, end, color, duration )";
tmpDef.documentation = "Draws an arrow pointing at < end > in the specified color for < duration > seconds.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Get_linked_ents");
tmpDef.detail = "Get_linked_ents()";
tmpDef.documentation = "Returns an array of entities that SELF is linked to";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Get_linked_vehicle_nodes");
tmpDef.detail = "Get_linked_vehicle_nodes()";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Get_linked_ent");
tmpDef.detail = "Get_linked_ent()";
tmpDef.documentation = "Returns an array of entities that SELF is linked to";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Get_linked_vehicle_node");
tmpDef.detail = "Get_linked_vehicle_node()";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Get_links");
tmpDef.detail = "Get_links()";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Run_thread_on_targetname");
tmpDef.detail = "Run_thread_on_targetname( msg, func, param1, param2, param3 )";
tmpDef.documentation = "Runs the specified thread on any entity with that targetname";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Run_thread_on_noteworthy");
tmpDef.detail = "Run_thread_on_noteworthy( msg, func, param1, param2, param3 )";
tmpDef.documentation = "Runs the specified thread on any entity with that noteworthy";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Draw_arrow");
tmpDef.detail = "Draw_arrow( start, end, color )";
tmpDef.documentation = "Draws an arrow pointing at < end > in the specified color for < duration > seconds.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Getfx");
tmpDef.detail = "Getfx( fx )";
tmpDef.documentation = "Gets the associated level._effect";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Fxexists");
tmpDef.detail = "Fxexists( fx )";
tmpDef.documentation = "Returns whether or not an fx exists";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Print_csv_asset");
tmpDef.detail = "Print_csv_asset( asset, type )";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Fileprint_csv_start");
tmpDef.detail = "Fileprint_csv_start( file )";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("_loadfx");
tmpDef.detail = "_loadfx( effect )";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Getlastweapon");
tmpDef.detail = "Getlastweapon()";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Playerunlimitedammothread");
tmpDef.detail = "Playerunlimitedammothread()";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Isusabilityenabled");
tmpDef.detail = "Isusabilityenabled()";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("_disableusability");
tmpDef.detail = "_disableusability()";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("_enableusability");
tmpDef.detail = "_enableusability()";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Resetusability");
tmpDef.detail = "Resetusability()";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("_disableweapon");
tmpDef.detail = "_disableweapon()";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("_enableweapon");
tmpDef.detail = "_enableweapon()";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Isweaponenabled");
tmpDef.detail = "Isweaponenabled()";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("_disableweaponswitch");
tmpDef.detail = "_disableweaponswitch()";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("_enableweaponswitch");
tmpDef.detail = "_enableweaponswitch()";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Isweaponswitchenabled");
tmpDef.detail = "Isweaponswitchenabled()";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("_disableoffhandweapons");
tmpDef.detail = "_disableoffhandweapons()";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("_enableoffhandweapons");
tmpDef.detail = "_enableoffhandweapons()";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Isoffhandweaponenabled");
tmpDef.detail = "Isoffhandweaponenabled()";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Random");
tmpDef.detail = "Random( array )";
tmpDef.documentation = "Returns a random vector centered on <num>.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Spawn_tag_origin");
tmpDef.detail = "Spawn_tag_origin()";
tmpDef.documentation = "Spawn a script model with tag_origin model";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Waittill_notify_or_timeout");
tmpDef.detail = "Waittill_notify_or_timeout( msg, timer )";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Fileprint_launcher_start_file");
tmpDef.detail = "Fileprint_launcher_start_file()";
tmpDef.documentation = "Tells Launcher to start storing text to a file.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Fileprint_launcher");
tmpDef.detail = "Fileprint_launcher( string )";
tmpDef.documentation = "Tells Launcher to start storing text to a file.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Fileprint_launcher_end_file");
tmpDef.detail = "Fileprint_launcher_end_file( file_relative_to_game, bIsPerforceEnabled )";
tmpDef.documentation = "Tell launcher to write out Text that has been started and appended.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Launcher_write_clipboard");
tmpDef.detail = "Launcher_write_clipboard( str )";
tmpDef.documentation = "send a string to your Connected PC's clipboard through launcher";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Isdestructible");
tmpDef.detail = "Isdestructible()";
tmpDef.documentation = "returns true if self is a destructible";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Pauseeffect");
tmpDef.detail = "Pauseeffect()";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Activate_individual_exploder");
tmpDef.detail = "Activate_individual_exploder()";
tmpDef.documentation = "Activates an individual exploder, rather than all the exploders of a given number";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Waitframe");
tmpDef.detail = "Waitframe()";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Brush_delete");
tmpDef.detail = "Brush_delete()";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Brush_throw");
tmpDef.detail = "Brush_throw()";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Get_target_ent");
tmpDef.detail = "Get_target_ent( target )";
tmpDef.documentation = "Returns whatever SINGLE ent is targeted, be it node, struct, or entity";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Brush_show");
tmpDef.detail = "Brush_show()";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Exploder_earthquake");
tmpDef.detail = "Exploder_earthquake()";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Do_earthquake");
tmpDef.detail = "Do_earthquake( name, origin )";
tmpDef.documentation = "Play an earthquake that is defined by add_earthquake()";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Exploder_rumble");
tmpDef.detail = "Exploder_rumble()";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Exploder_delay");
tmpDef.detail = "Exploder_delay()";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Exploder_damage");
tmpDef.detail = "Exploder_damage()";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Stop_exploder");
tmpDef.detail = "Stop_exploder( num )";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Effect_loopsound");
tmpDef.detail = "Effect_loopsound()";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Play_loopsound_in_space");
tmpDef.detail = "Play_loopsound_in_space( alias, origin )";
tmpDef.documentation = "Use the PlayLoopSound command at a position in space. Unrelated to caller.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Sound_effect");
tmpDef.detail = "Sound_effect()";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Effect_soundalias");
tmpDef.detail = "Effect_soundalias()";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Play_sound_in_space");
tmpDef.detail = "Play_sound_in_space( alias, origin, master )";
tmpDef.documentation = "Play a sound at an origin, unrelated to caller";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Ent_wait_for_flag_or_time_elapses_cs");
tmpDef.detail = "Ent_wait_for_flag_or_time_elapses_cs( flagname, timer )";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Cannon_effect");
tmpDef.detail = "Cannon_effect()";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Exploder_playsound");
tmpDef.detail = "Exploder_playsound()";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Fire_effect");
tmpDef.detail = "Fire_effect()";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Loop_fx_sound");
tmpDef.detail = "Loop_fx_sound( alias, origin, culled, ender, timeout )";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Loop_fx_sound_interval");
tmpDef.detail = "Loop_fx_sound_interval( alias, origin, ender, timeout, delay_min, delay_max )";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Loop_sound_delete");
tmpDef.detail = "Loop_sound_delete( ender, ent )";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Exploder_before_load");
tmpDef.detail = "Exploder_before_load( num )";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Exploder_after_load");
tmpDef.detail = "Exploder_after_load( num )";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Activate_exploder");
tmpDef.detail = "Activate_exploder( num )";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Createloopeffect");
tmpDef.detail = "Createloopeffect( fxid )";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Createoneshoteffect");
tmpDef.detail = "Createoneshoteffect( fxid )";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Createexploder");
tmpDef.detail = "Createexploder( fxid )";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Alphabetize");
tmpDef.detail = "Alphabetize( array )";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Is_later_in_alphabet");
tmpDef.detail = "Is_later_in_alphabet( string1, string2 )";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Alphabet_compare");
tmpDef.detail = "Alphabet_compare( a, b )";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Play_loop_sound_on_entity");
tmpDef.detail = "Play_loop_sound_on_entity( alias, offset )";
tmpDef.documentation = "Play loop sound alias on an entity.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Stop_loop_sound_on_entity");
tmpDef.detail = "Stop_loop_sound_on_entity( alias )";
tmpDef.documentation = "Stop playing the loop sound alias on an entity.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Delete_on_death");
tmpDef.detail = "Delete_on_death( ent )";
tmpDef.documentation = "Delete the entity when 'self' dies.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Error");
tmpDef.detail = "Error( msg )";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Exploder");
tmpDef.detail = "Exploder( num )";
tmpDef.documentation = "Activates an individual exploder, rather than all the exploders of a given number";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Create_dvar");
tmpDef.detail = "Create_dvar( var, val )";
tmpDef.documentation = "Initialize a dvar with a given value.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Void");
tmpDef.detail = "Void()";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Tag_project");
tmpDef.detail = "Tag_project( tagname, dist  )";
tmpDef.documentation = "Returns a point projected off a tag.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Ter_op");
tmpDef.detail = "Ter_op( statement, true_value, false_value )";
tmpDef.documentation = "Function that serves as a tertiary operator in C/C++.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Create_lock");
tmpDef.detail = "Create_lock( msg, count )";
tmpDef.documentation = "Create a lock with a specified count.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Lock");
tmpDef.detail = "Lock( msg )";
tmpDef.documentation = "Create a lock with a specified count.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Is_locked");
tmpDef.detail = "Is_locked( msg )";
tmpDef.documentation = "Check if a lock is acquired.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Unlock_wait");
tmpDef.detail = "Unlock_wait( msg )";
tmpDef.documentation = "Unlock and wait for the specified message.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Unlock");
tmpDef.detail = "Unlock( msg )";
tmpDef.documentation = "Unlock and wait for the specified message.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Unlock_thread");
tmpDef.detail = "Unlock_thread( msg )";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("Get_template_level");
tmpDef.detail = "Get_template_level()";
tmpDef.documentation = "Returns the templated level or level.script.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);