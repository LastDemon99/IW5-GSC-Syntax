import { CompletionItem } from 'vscode';
import { CompletionItemKind } from 'vscode';

export var defs = new Array<CompletionItem>();
export var common_scripts_utility = new Array<CompletionItem>();
var tmpDef;

tmpDef = new CompletionItem("scriptPrintln");
tmpDef.detail = "scriptPrintln( <channel>: string, <msg>: string ): void";
tmpDef.documentation = "Prints a message to a specified channel.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("debugPrintln");
tmpDef.detail = "debugPrintln( <channel>: string, <msg>: string ): void";
tmpDef.documentation = "Prints a message to the debug channel.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("draw_debug_line");
tmpDef.detail = "draw_debug_line( <start>: vector, <end>: vector, <timer>: float ): void";
tmpDef.documentation = "Draws a debug line between two points over a specified time.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("waittillend");
tmpDef.detail = "waittillend( <msg>: string ): void";
tmpDef.documentation = "Waits until a specific message is received.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("noself_func");
tmpDef.detail = "noself_func( <func>: string, <parm1>: any?, <parm2>: any?, <parm3>: any?, <parm4>: any? ): void";
tmpDef.documentation = "Runs a function from level.func array if it exists, without self reference.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("self_func");
tmpDef.detail = "self_func( <func>: string, <parm1>: any?, <parm2>: any?, <parm3>: any?, <parm4>: any? ): void";
tmpDef.documentation = "Runs a function from level.func array if it exists, with self reference.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("randomvector");
tmpDef.detail = "randomvector( <num>: any ): vector";
tmpDef.documentation = "Returns a random vector centered on <num>.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("randomvectorrange");
tmpDef.detail = "randomvectorrange( <num_min>: any, <num_max>: any ): vector";
tmpDef.documentation = "Returns a random vector centered between <num_min> and <num_max>.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("angle_dif");
tmpDef.detail = "angle_dif( <oldangle>: any, <newangle>: any ): any";
tmpDef.documentation = "Returns the difference between two yaw angles.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("sign");
tmpDef.detail = "sign( <x>: any ): any";
tmpDef.documentation = "Returns the sign of a number.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("track");
tmpDef.detail = "track( <spot_to_track>: any ): void";
tmpDef.documentation = "Tracks a spot.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("get_enemy_team");
tmpDef.detail = "get_enemy_team( <team>: any ): any";
tmpDef.documentation = "Gets the enemy team for a given team.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("clear_exception");
tmpDef.detail = "clear_exception( <type>: any ): void";
tmpDef.documentation = "Clears an exception.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("set_exception");
tmpDef.detail = "set_exception( <type>: any, <func>: any ): void";
tmpDef.documentation = "Sets an exception.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("set_all_exceptions");
tmpDef.detail = "set_all_exceptions( <exceptionFunc>: any ): void";
tmpDef.documentation = "Sets all exceptions.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("cointoss");
tmpDef.detail = "cointoss(): boolean";
tmpDef.documentation = "Returns true with a 50% chance.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("choose_from_weighted_array");
tmpDef.detail = "choose_from_weighted_array( <values>: any[], <weights>: any[] ): any";
tmpDef.documentation = "Chooses a value from a weighted array.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("get_cumulative_weights");
tmpDef.detail = "get_cumulative_weights( <weights>: any[] ): any[]";
tmpDef.documentation = "Calculates cumulative weights from an array of weights.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("waittill_string");
tmpDef.detail = "waittill_string( <msg>: any, <ent>: any ): void";
tmpDef.documentation = "Waits until a specific message is received.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("waittill_multiple");
tmpDef.detail = "waittill_multiple( <string1>: any?, <string2>: any?, <string3>: any?, <string4>: any?, <string5>: any? ): void";
tmpDef.documentation = "Waits until multiple specific messages are received.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("waittill_multiple_ents");
tmpDef.detail = "waittill_multiple_ents( <ent1>: any?, <string1>: any?, <ent2>: any?, <string2>: any?, <ent3>: any?, <string3>: any?, <ent4>: any?, <string4>: any? ): void";
tmpDef.documentation = "Waits until multiple specific messages are received from different entities.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("waittill_any_return");
tmpDef.detail = "waittill_any_return( <string1>: any?, <string2>: any?, <string3>: any?, <string4>: any?, <string5>: any? ): any";
tmpDef.documentation = "Waits for any of several messages then returns what it was.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("waittill_any_timeout");
tmpDef.detail = "waittill_any_timeout( <timeOut>: any?, <string1>: any?, <string2>: any?, <string3>: any?, <string4>: any?, <string5>: any? ): any";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("waittill_any");
tmpDef.detail = "waittill_any( <string1>: any, <string2>: any?, <string3>: any?, <string4>: any?, <string5>: any?, <string6>: any?, <string7>: any?, <string8>: any? ): void";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("waittill_any_ents");
tmpDef.detail = "waittill_any_ents( <ent1>: any, <string1>: any?, <ent2>: any?, <string2>: any?, <ent3>: any?, <string3>: any?, <ent4>: any?, <string4>: any?, <ent5>: any?, <string5>: any?, <ent6>: any?, <string6>: any?, <ent7>: any?, <string7>: any? ): void";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("isFlashed");
tmpDef.detail = "isFlashed(): boolean";
tmpDef.documentation = "Returns true if the player or an AI is flashed";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("flag_exist");
tmpDef.detail = "flag_exist( <flagname>: any ): boolean";
tmpDef.documentation = "Checks to see if a flag exists";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("flag");
tmpDef.detail = "flag( <flagname>: any ): boolean";
tmpDef.documentation = "Checks if the flag is set. Returns true or false.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("init_flags");
tmpDef.detail = "init_flags(): void";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("flag_init");
tmpDef.detail = "flag_init( <flagname>: any ): void";
tmpDef.documentation = "Initialize a flag to be used. All flags must be initialized before using flag_set or flag_wait";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("flag_set");
tmpDef.detail = "flag_set( <flagname>: any, <setter>: any? ): void";
tmpDef.documentation = "Sets the specified flag, all scripts using flag_wait will now continue.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("flag_wait");
tmpDef.detail = "flag_wait( <flagname>: any, <entity>: any? ): any";
tmpDef.documentation = "Waits until the specified flag is set.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("flag_clear");
tmpDef.detail = "flag_clear( <flagname>: any ): void";
tmpDef.documentation = "Clears the specified flag.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("flag_waitopen");
tmpDef.detail = "flag_waitopen( <flagname>: any ): void";
tmpDef.documentation = "Waits for the flag to open";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("waittill_either");
tmpDef.detail = "waittill_either( <msg1>: any, <msg2>: any ): void";
tmpDef.documentation = "Waits until either message, on self";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("array_thread");
tmpDef.detail = "array_thread( <entities>: any[], <process>: any, <var1>: any?, <var2>: any?, <var3>: any?, <var4>: any?, <var5>: any?, <var6>: any?, <var7>: any?, <var8>: any?, <var9>: any? ): void";
tmpDef.documentation = "Threads the < process > function on every entity in the < entities > array. The entity will become 'self' in the specified function.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("array_call");
tmpDef.detail = "array_call( <entities>: any[], <process>: any, <var1>: any?, <var2>: any?, <var3>: any? ): void";
tmpDef.documentation = "Runs the code < process > function on every entity in the < entities > array. The entity will become 'self' in the specified function.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("array_thread4");
tmpDef.detail = "array_thread4( <entities>: any[], <process>: any, <var1>: any?, <var2>: any?, <var3>: any?, <var4>: any? ): void";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("array_thread5");
tmpDef.detail = "array_thread5( <entities>: any[], <process>: any, <var1>: any?, <var2>: any?, <var3>: any?, <var4>: any?, <var5>: any? ): void";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("trigger_on");
tmpDef.detail = "trigger_on( <name>: any?, <type>: any? ): void";
tmpDef.documentation = "Turns a trigger on. This only needs to be called if it was previously turned off";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("trigger_off");
tmpDef.detail = "trigger_off( <name>: any?, <type>: any? ): void";
tmpDef.documentation = "Turns a trigger off so it can no longer be triggered.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("set_trigger_flag_permissions");
tmpDef.detail = "set_trigger_flag_permissions( <msg>: any ): void";
tmpDef.documentation = "turns triggers on or off depending on if they have the proper flags set, based on their shift-g menu settings";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("update_trigger_based_on_flags");
tmpDef.detail = "update_trigger_based_on_flags(): void";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("getstruct");
tmpDef.detail = "getstruct( <name>: any, <type>: any ): any";
tmpDef.documentation = "get a struct by target, targetname,script_noteworthy, or script_linkname types, must be called after maps\\_load::main();";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("getstructarray");
tmpDef.detail = "getstructarray( <name>: any, <type ): any[]";
tmpDef.documentation = "gets an array of script_structs";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("struct_class_init");
tmpDef.detail = "struct_class_init(): void";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("fileprint_start");
tmpDef.detail = "fileprint_start( <file>: any ): void";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("fileprint_map_start");
tmpDef.detail = "fileprint_map_start(): void";
tmpDef.documentation = "starts map export with the file trees\\cod3\\cod3\\map_source\\xenon_export\\ < filename > .map adds header / worldspawn entity to the map.  Use this if you want to start a .map export.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("fileprint_map_keypairprint");
tmpDef.detail = "fileprint_map_keypairprint( <key1>: any, <key2>: any ): void";
tmpDef.documentation = "prints a pair of keys to the current open map( by fileprint_map_start() )";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("fileprint_map_entity_start");
tmpDef.detail = "fileprint_map_entity_start(): void";
tmpDef.documentation = "prints entity number and opening bracket to currently opened file";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("fileprint_map_entity_end");
tmpDef.detail = "fileprint_map_entity_end(): void";
tmpDef.documentation = "close brackets an entity, required for the next entity to begin";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("fileprint_radiant_vec");
tmpDef.detail = "fileprint_radiant_vec( <vector>: any ): any";
tmpDef.documentation = "this converts a vector to a .map file readable format";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("array_remove");
tmpDef.detail = "array_remove( <ents>: any[], <remover>: any ): any[]";
tmpDef.documentation = "Returns < ents > array minus < remover > ";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("array_remove_array");
tmpDef.detail = "array_remove_array( <ents>: any[], <remover_array>: any[] ): any[]";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("array_removeUndefined");
tmpDef.detail = "array_removeUndefined( <array>: any[] ): any[]";
tmpDef.documentation = "Returns a new array of < array > minus the undefined indicies";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("array_levelthread");
tmpDef.detail = "array_levelthread( <entities>: any[], <process>: any, <var1>: any, <var2>: any, <var3>: any ): void";
tmpDef.documentation = "Threads the < process > function for every entity in the < entities > array. The level calls the function and each entity of the array is passed as the first parameter to the process.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("array_levelcall");
tmpDef.detail = "array_levelcall( <entities>: any[], <process>: any, <var1>: any, <var2>: any, <var3>: any ): void";
tmpDef.documentation = "Calls the < process > function for every entity in the < entities > array. The level calls the function and each entity of the array is passed as the first parameter to the process.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("add_to_array");
tmpDef.detail = "add_to_array( <array>: any[], <ent>: any ): any[]";
tmpDef.documentation = "Adds < ent > to < array > and returns the new array.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("flag_assert");
tmpDef.detail = "flag_assert( <msg>: string ): void";
tmpDef.documentation = "Asserts that a flag is clear. Useful for proving an assumption of a flag's state";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("flag_wait_either");
tmpDef.detail = "flag_wait_either( <flagname1>: string, <flagname2>: string ): void";
tmpDef.documentation = "Waits until either of the the specified flags are set.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("flag_wait_either_return");
tmpDef.detail = "flag_wait_either_return( <flagname1>: string, <flagname2>: string ): string";
tmpDef.documentation = "Waits until either of the the specified flags are set, and returns the first one it found.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("flag_wait_any");
tmpDef.detail = "flag_wait_any( <flagname1>: string, <flagname2>: string, <flagname3>: string, <flagname4>: string, <flagname5>: string, <flagname6>: string ): void";
tmpDef.documentation = "Waits until any of the the specified flags are set.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("flag_wait_any_return");
tmpDef.detail = "flag_wait_any_return( <flagname1>: string, <flagname2>: string, <flagname3>: string, <flagname4>: string, <flagname5>: string ): string";
tmpDef.documentation = "Waits until any of the the specified flags are set, and returns the first set flag that was found.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("flag_wait_all");
tmpDef.detail = "flag_wait_all( <flagname1>: string, <flagname2>: string, <flagname3>: string, <flagname4>: string ): void";
tmpDef.documentation = "Waits until all of the the specified flags are set.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("flag_wait_or_timeout");
tmpDef.detail = "flag_wait_or_timeout( <flagname>: string, <timer>: int ): void";
tmpDef.documentation = "Waits until either the flag gets set or the timer elapses.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("flag_waitopen_or_timeout");
tmpDef.detail = "flag_waitopen_or_timeout( <flagname>: string, <timer>: int ): void";
tmpDef.documentation = "Waits until either the flag gets cleared or the timer elapses.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("delayCall");
tmpDef.detail = "delayCall( <delay>: int, <function>: function, <arg1>: any, <arg2>: any, <arg3>: any, <arg4>: any, <arg5>: any, <arg6>: any, <arg7>: any, <arg8>: any ): void";
tmpDef.documentation = "delayCall is cool! It saves you from having to write extra script for once off commands. Note you don�t have to thread it off. delaycall is that smart!";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("noself_delayCall");
tmpDef.detail = "noself_delayCall( <delay>: int, <function>: function, <arg1>: any, <arg2>: any, <arg3>: any, <arg4>: any ): void";
tmpDef.documentation = "Calls a command with no self (some commands don't support having self).";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("isSP");
tmpDef.detail = "isSP(): boolean";
tmpDef.documentation = "Returns false if the level name begins with mp_";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("isSP_TowerDefense");
tmpDef.detail = "isSP_TowerDefense(): boolean";
tmpDef.documentation = "Returns true if the level name begins with so_td_";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("string_starts_with");
tmpDef.detail = "string_starts_with( <string>: string, <start>: string ): boolean";
tmpDef.documentation = "Returns true if the first string begins with the first string";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("plot_points");
tmpDef.detail = "plot_points( <plotpoints>: any[], <r>: int, <g>: int, <b>: int, <timer>: float ): void";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("draw_line_for_time");
tmpDef.detail = "draw_line_for_time( <org1>: any, <org2>: any, <r>: float, <g>: float, <b>: float, <timer>: float ): void";
tmpDef.documentation = "Draws a line from < org1 > to < org2 > in the specified color for the specified duration";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("array_combine");
tmpDef.detail = "array_combine( <array1>: any[], <array2>: any[] ): any[]";
tmpDef.documentation = "Combines the two arrays and returns the resulting array. This function doesn't care if it produces duplicates in the array.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("flat_angle");
tmpDef.detail = "flat_angle( <angle>: any ): any";
tmpDef.documentation = "Returns the specified angle as a flat angle.( 45, 90, 30 ) becomes( 0, 90, 30 ). Useful if you just need an angle around Y - axis.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("flat_origin");
tmpDef.detail = "flat_origin( <org>: any ): any";
tmpDef.documentation = "Returns a flat origin of the specified origin. Moves Z corrdinate to 0.( x, y, z ) becomes( x, y, 0 )";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("draw_arrow_time");
tmpDef.detail = "draw_arrow_time( <start>: any, <end>: any, <color>: any, <duration>: any ): void";
tmpDef.documentation = "Draws an arrow pointing at < end > in the specified color for < duration > seconds.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("get_linked_ents");
tmpDef.detail = "get_linked_ents(): any[]";
tmpDef.documentation = "Returns an array of entities that SELF is linked to";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("get_linked_vehicle_nodes");
tmpDef.detail = "get_linked_vehicle_nodes(): any[]";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("get_linked_ent");
tmpDef.detail = "get_linked_ent(): any";
tmpDef.documentation = "Returns a single entity that SELF is linked to";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("get_linked_vehicle_node");
tmpDef.detail = "get_linked_vehicle_node(): any";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("get_links");
tmpDef.detail = "get_links( <get_links>: any ): any";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("run_thread_on_targetname");
tmpDef.detail = "run_thread_on_targetname( <msg>: any, <func>: any, <param1>: any, <param2>: any, <param3>: any ): void";
tmpDef.documentation = "Runs the specified thread on any entity with that targetname";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("run_thread_on_noteworthy");
tmpDef.detail = "run_thread_on_noteworthy( <msg>: any, <func>: any, <param1>: any, <param2>: any, <param3>: any ): void";
tmpDef.documentation = "Runs the specified thread on any entity with that noteworthy";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("draw_arrow");
tmpDef.detail = "draw_arrow( <start>: any, <end>: any, <color>: any ): void";
tmpDef.documentation = "Draws an arrow pointing at < end > in the specified color for < duration > seconds.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("getfx");
tmpDef.detail = "getfx( <fx>: any ): any";
tmpDef.documentation = "Gets the associated level._effect";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("fxExists");
tmpDef.detail = "fxExists( <fx>: any ): boolean";
tmpDef.documentation = "Returns whether or not an fx exists";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("print_csv_asset");
tmpDef.detail = "print_csv_asset( <asset>: any, <type>: any ): void";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("fileprint_csv_start");
tmpDef.detail = "fileprint_csv_start( <file>: any ): void";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("_loadfx");
tmpDef.detail = "_loadfx( <effect>: any ): any";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("getLastWeapon");
tmpDef.detail = "getLastWeapon( <getLastWeapon>: any ): any";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("PlayerUnlimitedAmmoThread");
tmpDef.detail = "PlayerUnlimitedAmmoThread(): void";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("isUsabilityEnabled");
tmpDef.detail = "isUsabilityEnabled(): boolean";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("_disableUsability");
tmpDef.detail = "_disableUsability(): void";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("_enableUsability");
tmpDef.detail = "_enableUsability(): void";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("resetUsability");
tmpDef.detail = "resetUsability(): void";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("_disableWeapon");
tmpDef.detail = "_disableWeapon(): void";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("_enableWeapon");
tmpDef.detail = "_enableWeapon(): void";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("isWeaponEnabled");
tmpDef.detail = "isWeaponEnabled(): boolean";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("_disableWeaponSwitch");
tmpDef.detail = "_disableWeaponSwitch(): void";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("_enableWeaponSwitch");
tmpDef.detail = "_enableWeaponSwitch(): void";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("isWeaponSwitchEnabled");
tmpDef.detail = "isWeaponSwitchEnabled(): boolean";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("_disableOffhandWeapons");
tmpDef.detail = "_disableOffhandWeapons(): void";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("_enableOffhandWeapons");
tmpDef.detail = "_enableOffhandWeapons(): void";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("isOffhandWeaponEnabled");
tmpDef.detail = "isOffhandWeaponEnabled(): boolean";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("random");
tmpDef.detail = "random( <array> ): any";
tmpDef.documentation = "chose a random element of an array";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("spawn_tag_origin");
tmpDef.detail = "spawn_tag_origin(): entity";
tmpDef.documentation = "Spawn a script model with tag_origin model";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("waittill_notify_or_timeout");
tmpDef.detail = "waittill_notify_or_timeout( <msg>: string, <timer>: float ): void";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("fileprint_launcher_start_file");
tmpDef.detail = "fileprint_launcher_start_file(): void";
tmpDef.documentation = "Tells Launcher to start storing text to a file.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("fileprint_launcher");
tmpDef.detail = "fileprint_launcher( <string>: string ): void";
tmpDef.documentation = "Tell launcher to append text to current open file.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("fileprint_launcher_end_file");
tmpDef.detail = "fileprint_launcher_end_file( <file_relative_to_game>: string, <bIsPerforceEnabled>: boolean ): boolean";
tmpDef.documentation = "Tell launcher to write out Text that has been started and appended.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("launcher_write_clipboard");
tmpDef.detail = "launcher_write_clipboard( <str>: string ): void";
tmpDef.documentation = "send a string to your Connected PC's clipboard through launcher";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("isDestructible");
tmpDef.detail = "isDestructible(): boolean";
tmpDef.documentation = "returns true if self is a destructible";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("pauseEffect");
tmpDef.detail = "pauseEffect(): void";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("activate_individual_exploder");
tmpDef.detail = "activate_individual_exploder(): void";
tmpDef.documentation = "Activates an individual exploder, rather than all the exploders of a given number";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("waitframe");
tmpDef.detail = "waitframe(): void";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("brush_delete");
tmpDef.detail = "brush_delete(): void";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("brush_throw");
tmpDef.detail = "brush_throw(): void";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("get_target_ent");
tmpDef.detail = "get_target_ent( <target>: string ): entity";
tmpDef.documentation = "Returns whatever SINGLE ent is targeted, be it node, struct, or entity";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("brush_show");
tmpDef.detail = "brush_show(): void";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("exploder_earthquake");
tmpDef.detail = "exploder_earthquake(): void";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("do_earthquake");
tmpDef.detail = "do_earthquake( <name>: string, <origin>: vector ): void";
tmpDef.documentation = "Play an earthquake that is defined by add_earthquake()";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("exploder_rumble");
tmpDef.detail = "exploder_rumble(): void";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("exploder_delay");
tmpDef.detail = "exploder_delay(): void";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("exploder_damage");
tmpDef.detail = "exploder_damage(): void";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("stop_exploder");
tmpDef.detail = "stop_exploder( <num>: any ): void";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("effect_loopsound");
tmpDef.detail = "effect_loopsound(): void";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("play_loopsound_in_space");
tmpDef.detail = "play_loopsound_in_space( <alias>: string, <origin>: vector ): entity";
tmpDef.documentation = "Use the PlayLoopSound command at a position in space. Unrelated to caller.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("sound_effect");
tmpDef.detail = "sound_effect(): void";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("effect_soundalias");
tmpDef.detail = "effect_soundalias(): void";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("play_sound_in_space");
tmpDef.detail = "play_sound_in_space( <alias>: string, <origin>: vector, <master>: boolean ): void";
tmpDef.documentation = "Play a sound at an origin, unrelated to caller";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("cannon_effect");
tmpDef.detail = "cannon_effect(): void";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("exploder_playSound");
tmpDef.detail = "exploder_playSound(): void";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("fire_effect");
tmpDef.detail = "fire_effect(): void";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("loop_fx_sound");
tmpDef.detail = "loop_fx_sound( <alias>: string, <origin>: vector, <culled>: int, <ender>: string, <timeout>: float ): void";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("loop_fx_sound_interval");
tmpDef.detail = "loop_fx_sound_interval( <alias>: string, <origin>: vector, <ender>: string, <timeout>: float, <delay_min>: float, <delay_max>: float ): void";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("loop_sound_delete");
tmpDef.detail = "loop_sound_delete( <ender>: string, <ent>: entity ): void";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("exploder_before_load");
tmpDef.detail = "exploder_before_load( <num>: string ): void";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("exploder_after_load");
tmpDef.detail = "exploder_after_load( <num>: string ): void";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("activate_exploder");
tmpDef.detail = "activate_exploder( <num>: string ): void";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("createLoopEffect");
tmpDef.detail = "createLoopEffect( <fxid>: string ): entity";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("createOneshotEffect");
tmpDef.detail = "createOneshotEffect( <fxid>: string ): entity";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("createExploder");
tmpDef.detail = "createExploder( <fxid>: string ): entity";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("alphabetize");
tmpDef.detail = "alphabetize( <array>: array ): array";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("is_later_in_alphabet");
tmpDef.detail = "is_later_in_alphabet( <string1>: string, <string2>: string ): bool";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("alphabet_compare");
tmpDef.detail = "alphabet_compare( <a>: string, <b>: string ): string";
tmpDef.documentation = "";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("play_loop_sound_on_entity");
tmpDef.detail = "play_loop_sound_on_entity( <alias>: string, <offset>: vector ): void";
tmpDef.documentation = "Play loop sound alias on an entity.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("stop_loop_sound_on_entity");
tmpDef.detail = "stop_loop_sound_on_entity( <alias>: string ): void";
tmpDef.documentation = "Stop playing the loop sound alias on an entity.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("delete_on_death");
tmpDef.detail = "delete_on_death( <ent>: entity ): void";
tmpDef.documentation = "Delete the entity when 'self' dies.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("exploder");
tmpDef.detail = "exploder( <num>: int ): void";
tmpDef.documentation = "Sets off the desired exploder.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("create_dvar");
tmpDef.detail = "create_dvar( <var>: string, <val>: string ): void";
tmpDef.documentation = "Initialize a dvar with a given value.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("tag_project");
tmpDef.detail = "tag_project( <tagname>: string, <dist>: float ): vector";
tmpDef.documentation = "Returns a point projected off a tag.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("ter_op");
tmpDef.detail = "ter_op( <statement>: boolean, <true_value>: any, <false_value>: any ): any";
tmpDef.documentation = "Function that serves as a tertiary operator in C/C++.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("create_lock");
tmpDef.detail = "create_lock( <msg>: string, <count>: int ): void";
tmpDef.documentation = "Create a lock with a specified count.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("lock");
tmpDef.detail = "lock( <msg>: string ): void";
tmpDef.documentation = "Acquire a lock.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("is_locked");
tmpDef.detail = "is_locked( <msg>: string ): boolean";
tmpDef.documentation = "Check if a lock is acquired.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("unlock_wait");
tmpDef.detail = "unlock_wait( <msg>: string ): void";
tmpDef.documentation = "Unlock and wait for the specified message.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("unlock");
tmpDef.detail = "unlock( <msg>: string ): void";
tmpDef.documentation = "Unlock without waiting for the specified message.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);

tmpDef = new CompletionItem("get_template_level");
tmpDef.detail = "get_template_level(): any";
tmpDef.documentation = "Returns the templated level or level.script.";
tmpDef.kind = CompletionItemKind.Function;
common_scripts_utility.push(tmpDef);