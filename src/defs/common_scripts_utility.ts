import { Def_Function } from './struct';

export var common_scripts_utility_defs = new Array<Def_Function>();
var tmpDef;

tmpDef = new Def_Function;
tmpDef.name = "scriptPrintln";
tmpDef.decl = "scriptPrintln( <channel>: string, <msg>: string ): void";
tmpDef.desc = "Prints a message to a specified channel.";
tmpDef.callon = "Level";
tmpDef.reqArgs = [
    "1 : <string> : the channel to print to",
    "2 : <string> : the message to print"
];
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "debugPrintln";
tmpDef.decl = "debugPrintln( <channel>: string, <msg>: string ): void";
tmpDef.desc = "Prints a message to the debug channel.";
tmpDef.callon = "Level";
tmpDef.reqArgs = [
    "1 : <string> : the channel to print to",
    "2 : <string> : the message to print"
];
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "draw_debug_line";
tmpDef.decl = "draw_debug_line( <start>: vector, <end>: vector, <timer>: float ): void";
tmpDef.desc = "Draws a debug line between two points over a specified time.";
tmpDef.callon = "Level";
tmpDef.reqArgs = [
    "1 : <vector> : the starting point of the line",
    "2 : <vector> : the ending point of the line",
    "3 : <float> : the duration of the line"
];
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "waittillend";
tmpDef.decl = "waittillend( <msg>: string ): void";
tmpDef.desc = "Waits until a specific message is received.";
tmpDef.callon = "Level";
tmpDef.reqArgs = [
    "1 : <string> : the message to wait for"
];
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "noself_func";
tmpDef.decl = "noself_func( <func>: string, <parm1>: any?, <parm2>: any?, <parm3>: any?, <parm4>: any? ): void";
tmpDef.desc = "Runs a function from level.func array if it exists, without self reference.";
tmpDef.callon = "Entity";
tmpDef.reqArgs = [
    "1 : <string> : String reference to level.func array",
    "2? : <any> : Optional parameter 1",
    "3? : <any> : Optional parameter 2",
    "4? : <any> : Optional parameter 3",
    "5? : <any> : Optional parameter 4"
];
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "self_func";
tmpDef.decl = "self_func( <func>: string, <parm1>: any?, <parm2>: any?, <parm3>: any?, <parm4>: any? ): void";
tmpDef.desc = "Runs a function from level.func array if it exists, with self reference.";
tmpDef.callon = "Entity";
tmpDef.reqArgs = [
    "1 : <string> : String reference to level.func array",
    "2? : <any> : Optional parameter 1",
    "3? : <any> : Optional parameter 2",
    "4? : <any> : Optional parameter 3",
    "5? : <any> : Optional parameter 4"
];
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "randomvector";
tmpDef.decl = "randomvector( <num>: any ): vector";
tmpDef.desc = "Returns a random vector centered on <num>.";
tmpDef.callon = "Level";
tmpDef.reqArgs = [
    "1 : <any> : the number around which the random vector will be centered"
];
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "randomvectorrange";
tmpDef.decl = "randomvectorrange( <num_min>: any, <num_max>: any ): vector";
tmpDef.desc = "Returns a random vector centered between <num_min> and <num_max>.";
tmpDef.callon = "Level";
tmpDef.reqArgs = [
    "1 : <any> : the minimum number",
    "2 : <any> : the maximum number"
];
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "angle_dif";
tmpDef.decl = "angle_dif( <oldangle>: any, <newangle>: any ): any";
tmpDef.desc = "Returns the difference between two yaw angles.";
tmpDef.callon = "Level";
tmpDef.reqArgs = [
    "1 : <any> : the old angle",
    "2 : <any> : the new angle"
];
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "sign";
tmpDef.decl = "sign( <x>: any ): any";
tmpDef.desc = "Returns the sign of a number.";
tmpDef.callon = "Level";
tmpDef.reqArgs = [
    "1 : <any> : the number to determine the sign of"
];
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "track";
tmpDef.decl = "track( <spot_to_track>: any ): void";
tmpDef.desc = "Tracks a spot.";
tmpDef.callon = "Entity";
tmpDef.reqArgs = [
    "1 : <any> : the spot to track"
];
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "get_enemy_team";
tmpDef.decl = "get_enemy_team( <team>: any ): any";
tmpDef.desc = "Gets the enemy team for a given team.";
tmpDef.callon = "Entity";
tmpDef.reqArgs = [
    "1 : <any> : the team to get the enemy team for"
];
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "clear_exception";
tmpDef.decl = "clear_exception( <type>: any ): void";
tmpDef.desc = "Clears an exception.";
tmpDef.callon = "Entity";
tmpDef.reqArgs = [
    "1 : <any> : the type of exception to clear"
];
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "set_exception";
tmpDef.decl = "set_exception( <type>: any, <func>: any ): void";
tmpDef.desc = "Sets an exception.";
tmpDef.callon = "Entity";
tmpDef.reqArgs = [
    "1 : <any> : the type of exception to set",
    "2 : <any> : the function to set as the exception"
];
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "set_all_exceptions";
tmpDef.decl = "set_all_exceptions( <exceptionFunc>: any ): void";
tmpDef.desc = "Sets all exceptions.";
tmpDef.callon = "Entity";
tmpDef.reqArgs = [
    "1 : <any> : the function to set as the exception for all types"
];
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "cointoss";
tmpDef.decl = "cointoss(): boolean";
tmpDef.desc = "Returns true with a 50% chance.";
tmpDef.callon = "Level";
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "choose_from_weighted_array";
tmpDef.decl = "choose_from_weighted_array( <values>: any[], <weights>: any[] ): any";
tmpDef.desc = "Chooses a value from a weighted array.";
tmpDef.callon = "Level";
tmpDef.reqArgs = [
    "1 : <any[]> : array of values",
    "2 : <any[]> : array of weights"
];
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "get_cumulative_weights";
tmpDef.decl = "get_cumulative_weights( <weights>: any[] ): any[]";
tmpDef.desc = "Calculates cumulative weights from an array of weights.";
tmpDef.callon = "Level";
tmpDef.reqArgs = [
    "1 : <any[]> : array of weights"
];
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "waittill_string";
tmpDef.decl = "waittill_string( <msg>: any, <ent>: any ): void";
tmpDef.desc = "Waits until a specific message is received.";
tmpDef.callon = "Level";
tmpDef.reqArgs = [
    "1 : <any> : the message to wait for",
    "2 : <any> : the entity to watch"
];
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "waittill_multiple";
tmpDef.decl = "waittill_multiple( <string1>: any?, <string2>: any?, <string3>: any?, <string4>: any?, <string5>: any? ): void";
tmpDef.desc = "Waits until multiple specific messages are received.";
tmpDef.callon = "Level";
tmpDef.reqArgs = [
    "1? : <any> : the first message to wait for",
    "2? : <any> : the second message to wait for",
    "3? : <any> : the third message to wait for",
    "4? : <any> : the fourth message to wait for",
    "5? : <any> : the fifth message to wait for"
];
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "waittill_multiple_ents";
tmpDef.decl = "waittill_multiple_ents( <ent1>: any?, <string1>: any?, <ent2>: any?, <string2>: any?, <ent3>: any?, <string3>: any?, <ent4>: any?, <string4>: any? ): void";
tmpDef.desc = "Waits until multiple specific messages are received from different entities.";
tmpDef.callon = "Level";
tmpDef.reqArgs = [
    "1? : <any> : the first entity to watch",
    "2? : <any> : the first message to wait for",
    "3? : <any> : the second entity to watch",
    "4? : <any> : the second message to wait for",
    "5? : <any> : the third entity to watch",
    "6? : <any> : the third message to wait for",
    "7? : <any> : the fourth entity to watch",
    "8? : <any> : the fourth message to wait for"
];
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "waittill_any_return";
tmpDef.decl = "waittill_any_return( <string1>: any?, <string2>: any?, <string3>: any?, <string4>: any?, <string5>: any? ): any";
tmpDef.desc = "Waits for any of several messages then returns what it was.";
tmpDef.callon = "Level";
tmpDef.reqArgs = [
    "1? : <any> : a string to wait on",
    "2? : <any> : a string to wait on",
    "3? : <any> : a string to wait on",
    "4? : <any> : a string to wait on",
    "5? : <any> : a string to wait on"
];
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "waittill_any_timeout";
tmpDef.decl = "waittill_any_timeout( <timeOut>: any?, <string1>: any?, <string2>: any?, <string3>: any?, <string4>: any?, <string5>: any? ): any";
tmpDef.desc = "";
tmpDef.callon = "Entity";
tmpDef.reqArgs = [
    "1 : <any> : ",
    "2? : <any> : ",
    "3? : <any> : ",
    "4? : <any> : ",
    "5? : <any> : ",
    "6? : <any> : "
];
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "waittill_any";
tmpDef.decl = "waittill_any( <string1>: any, <string2>: any?, <string3>: any?, <string4>: any?, <string5>: any?, <string6>: any?, <string7>: any?, <string8>: any? ): void";
tmpDef.desc = "";
tmpDef.callon = "Entity";
tmpDef.reqArgs = [
    "1 : <any> : a notify on which the entity should wait",
    "2? : <any> : optional other notifies to wait for",
    "3? : <any> : optional other notifies to wait for",
    "4? : <any> : optional other notifies to wait for",
    "5? : <any> : optional other notifies to wait for",
    "6? : <any> : optional other notifies to wait for",
    "7? : <any> : optional other notifies to wait for",
    "8? : <any> : optional other notifies to wait for"
];
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "waittill_any_ents";
tmpDef.decl = "waittill_any_ents( <ent1>: any, <string1>: any?, <ent2>: any?, <string2>: any?, <ent3>: any?, <string3>: any?, <ent4>: any?, <string4>: any?, <ent5>: any?, <string5>: any?, <ent6>: any?, <string6>: any?, <ent7>: any?, <string7>: any? ): void";
tmpDef.desc = "";
tmpDef.callon = "Entity";
tmpDef.reqArgs = [
    "1 : <any> : ",
    "2? : <any> : ",
    "3? : <any> : ",
    "4? : <any> : ",
    "5? : <any> : ",
    "6? : <any> : ",
    "7? : <any> : ",
    "8? : <any> : ",
    "9? : <any> : ",
    "10? : <any> : ",
    "11? : <any> : ",
    "12? : <any> : ",
    "13? : <any> : ",
    "14? : <any> : "
];
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "isFlashed";
tmpDef.decl = "isFlashed(): boolean";
tmpDef.desc = "Returns true if the player or an AI is flashed";
tmpDef.callon = "AI";
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "flag_exist";
tmpDef.decl = "flag_exist( <flagname>: any ): boolean";
tmpDef.desc = "Checks to see if a flag exists";
tmpDef.callon = "Flag";
tmpDef.reqArgs = [
    "1 : <any> : name of the flag to check"
];
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "flag";
tmpDef.decl = "flag( <flagname>: any ): boolean";
tmpDef.desc = "Checks if the flag is set. Returns true or false.";
tmpDef.callon = "Flag";
tmpDef.reqArgs = [
    "1 : <any> : name of the flag to check"
];
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "init_flags";
tmpDef.decl = "init_flags(): void";
tmpDef.desc = "";
tmpDef.callon = "Level";
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "flag_init";
tmpDef.decl = "flag_init( <flagname>: any ): void";
tmpDef.desc = "Initialize a flag to be used. All flags must be initialized before using flag_set or flag_wait";
tmpDef.callon = "Flag";
tmpDef.reqArgs = [
    "1 : <any> : name of the flag to create"
];
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "flag_set";
tmpDef.decl = "flag_set( <flagname>: any, <setter>: any? ): void";
tmpDef.desc = "Sets the specified flag, all scripts using flag_wait will now continue.";
tmpDef.callon = "Flag";
tmpDef.reqArgs = [
    "1 : <any> : name of the flag to set"
];
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "flag_wait";
tmpDef.decl = "flag_wait( <flagname>: any, <entity>: any? ): any";
tmpDef.desc = "Waits until the specified flag is set.";
tmpDef.callon = "Flag";
tmpDef.reqArgs = [
    "1 : <any> : name of the flag to wait on"
];
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "flag_clear";
tmpDef.decl = "flag_clear( <flagname>: any ): void";
tmpDef.desc = "Clears the specified flag.";
tmpDef.callon = "Flag";
tmpDef.reqArgs = [
    "1 : <any> : name of the flag to clear"
];
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "flag_waitopen";
tmpDef.decl = "flag_waitopen( <flagname>: any ): void";
tmpDef.desc = "Waits for the flag to open";
tmpDef.callon = "Flag";
tmpDef.reqArgs = [
    "1 : <any> : The flag"
];
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "waittill_either";
tmpDef.decl = "waittill_either( <msg1>: any, <msg2>: any ): void";
tmpDef.desc = "Waits until either message, on self";
tmpDef.callon = "Utility";
tmpDef.reqArgs = [
    "1 : <any> : First msg to wait on",
    "2 : <any> : Second msg to wait on"
];
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "array_thread";
tmpDef.decl = "array_thread( <entities>: any[], <process>: any, <var1>: any?, <var2>: any?, <var3>: any?, <var4>: any?, <var5>: any?, <var6>: any?, <var7>: any?, <var8>: any?, <var9>: any? ): void";
tmpDef.desc = "Threads the < process > function on every entity in the < entities > array. The entity will become 'self' in the specified function.";
tmpDef.callon = "Array";
tmpDef.reqArgs = [
    "1 : <any[]> : array of entities to thread the process",
    "2 : <any> : pointer to a script function"
];
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "array_call";
tmpDef.decl = "array_call( <entities>: any[], <process>: any, <var1>: any?, <var2>: any?, <var3>: any? ): void";
tmpDef.desc = "Runs the code < process > function on every entity in the < entities > array. The entity will become 'self' in the specified function.";
tmpDef.callon = "Array";
tmpDef.reqArgs = [
    "1 : <any[]> : array of entities to thread the process",
    "2 : <any> : pointer to a code function"
];
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "array_thread4";
tmpDef.decl = "array_thread4( <entities>: any[], <process>: any, <var1>: any?, <var2>: any?, <var3>: any?, <var4>: any? ): void";
tmpDef.desc = "";
tmpDef.callon = "Entity";
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "array_thread5";
tmpDef.decl = "array_thread5( <entities>: any[], <process>: any, <var1>: any?, <var2>: any?, <var3>: any?, <var4>: any?, <var5>: any? ): void";
tmpDef.desc = "";
tmpDef.callon = "Entity";
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "trigger_on";
tmpDef.decl = "trigger_on( <name>: any?, <type>: any? ): void";
tmpDef.desc = "Turns a trigger on. This only needs to be called if it was previously turned off";
tmpDef.callon = "Trigger";
tmpDef.reqArgs = [];
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "trigger_off";
tmpDef.decl = "trigger_off( <name>: any?, <type>: any? ): void";
tmpDef.desc = "Turns a trigger off so it can no longer be triggered.";
tmpDef.callon = "Trigger";
tmpDef.reqArgs = [];
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "set_trigger_flag_permissions";
tmpDef.decl = "set_trigger_flag_permissions( <msg>: any ): void";
tmpDef.desc = "turns triggers on or off depending on if they have the proper flags set, based on their shift-g menu settings";
tmpDef.callon = "Utility";
tmpDef.reqArgs = [
    "1 : <any> : "
];
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "update_trigger_based_on_flags";
tmpDef.decl = "update_trigger_based_on_flags(): void";
tmpDef.desc = "";
tmpDef.callon = "Utility";
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "getstruct";
tmpDef.decl = "getstruct( <name>: any, <type>: any ): any";
tmpDef.desc = "get a struct by target, targetname,script_noteworthy, or script_linkname types, must be called after maps\\_load::main();";
tmpDef.callon = "Level";
tmpDef.reqArgs = [
    "1 : <any> : name of key",
    "2 : <any> : key type"
];
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "getstructarray";
tmpDef.decl = "getstructarray( <name>: any, <type ): any[]";
tmpDef.desc = "gets an array of script_structs";
tmpDef.callon = "Entity";
tmpDef.reqArgs = [
    "1 : <any> : ",
    "2 : <any> : "
];
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "struct_class_init";
tmpDef.decl = "struct_class_init(): void";
tmpDef.desc = "";
tmpDef.callon = "Utility";
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "fileprint_start";
tmpDef.decl = "fileprint_start( <file>: any ): void";
tmpDef.desc = "";
tmpDef.callon = "Utility";
tmpDef.reqArgs = [
    "1 : <any> : "
];
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "fileprint_map_start";
tmpDef.decl = "fileprint_map_start(): void";
tmpDef.desc = "starts map export with the file trees\\cod3\\cod3\\map_source\\xenon_export\\ < filename > .map adds header / worldspawn entity to the map.  Use this if you want to start a .map export.";
tmpDef.callon = "Level";
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "fileprint_map_keypairprint";
tmpDef.decl = "fileprint_map_keypairprint( <key1>: any, <key2>: any ): void";
tmpDef.desc = "prints a pair of keys to the current open map( by fileprint_map_start() )";
tmpDef.callon = "Level";
tmpDef.reqArgs = [
    "1 : <any> : ",
    "2 : <any> : "
];
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "fileprint_map_entity_start";
tmpDef.decl = "fileprint_map_entity_start(): void";
tmpDef.desc = "prints entity number and opening bracket to currently opened file";
tmpDef.callon = "Level";
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "fileprint_map_entity_end";
tmpDef.decl = "fileprint_map_entity_end(): void";
tmpDef.desc = "close brackets an entity, required for the next entity to begin";
tmpDef.callon = "Level";
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "fileprint_radiant_vec";
tmpDef.decl = "fileprint_radiant_vec( <vector>: any ): any";
tmpDef.desc = "this converts a vector to a .map file readable format";
tmpDef.callon = "Entity";
tmpDef.reqArgs = [
    "1 : <any> : "
];
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "array_remove";
tmpDef.decl = "array_remove( <ents>: any[], <remover>: any ): any[]";
tmpDef.desc = "Returns < ents > array minus < remover > ";
tmpDef.callon = "Utility";
tmpDef.reqArgs = [
    "1 : <any[]> : array to remove < remover > from",
    "2 : <any> : entity to remove from the array"
];
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "array_remove_array";
tmpDef.decl = "array_remove_array( <ents>: any[], <remover_array>: any[] ): any[]";
tmpDef.desc = "";
tmpDef.callon = "Entity";
tmpDef.reqArgs = [
    "1 : <any[]> : ",
    "2 : <any[]> : "
];
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "array_removeUndefined";
tmpDef.decl = "array_removeUndefined( <array>: any[] ): any[]";
tmpDef.desc = "Returns a new array of < array > minus the undefined indicies";
tmpDef.callon = "Utility";
tmpDef.reqArgs = [
    "1 : <any[]> : The array to search for undefined indicies in."
];
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "array_levelthread";
tmpDef.decl = "array_levelthread( <entities>: any[], <process>: any, <var1>: any, <var2>: any, <var3>: any ): void";
tmpDef.desc = "Threads the < process > function for every entity in the < entities > array. The level calls the function and each entity of the array is passed as the first parameter to the process.";
tmpDef.callon = "Entity";
tmpDef.reqArgs = [
    "1 : <any[]> : array of entities to thread the process",
    "2 : <any> : pointer to a script function",
    "3 : <any> : parameter 1 to pass to the process",
    "4 : <any> : parameter 2 to pass to the process",
    "5 : <any> : parameter 3 to pass to the process"
];
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "array_levelcall";
tmpDef.decl = "array_levelcall( <entities>: any[], <process>: any, <var1>: any, <var2>: any, <var3>: any ): void";
tmpDef.desc = "Calls the < process > function for every entity in the < entities > array. The level calls the function and each entity of the array is passed as the first parameter to the process.";
tmpDef.callon = "Entity";
tmpDef.reqArgs = [
    "1 : <any[]> : array of entities to thread the process",
    "2 : <any> : pointer to a code function",
    "3 : <any> : parameter 1 to pass to the process",
    "4 : <any> : parameter 2 to pass to the process",
    "5 : <any> : parameter 3 to pass to the process"
];
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "add_to_array";
tmpDef.decl = "add_to_array( <array>: any[], <ent>: any ): any[]";
tmpDef.desc = "Adds < ent > to < array > and returns the new array.";
tmpDef.callon = "Utility";
tmpDef.reqArgs = [
    "1 : <any[]> : The array to add < ent > to.",
    "2 : <any> : The entity to be added."
];
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "flag_assert";
tmpDef.decl = "flag_assert( <msg>: string ): void";
tmpDef.desc = "Asserts that a flag is clear. Useful for proving an assumption of a flag's state";
tmpDef.callon = "Entity";
tmpDef.reqArgs = [
    "1 : <string> : flag name"
];
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "flag_wait_either";
tmpDef.decl = "flag_wait_either( <flagname1>: string, <flagname2>: string ): void";
tmpDef.desc = "Waits until either of the the specified flags are set.";
tmpDef.callon = "Utility";
tmpDef.reqArgs = [
    "1 : <string> : name of one flag to wait on",
    "2 : <string> : name of the other flag to wait on"
];
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "flag_wait_either_return";
tmpDef.decl = "flag_wait_either_return( <flagname1>: string, <flagname2>: string ): string";
tmpDef.desc = "Waits until either of the the specified flags are set, and returns the first one it found.";
tmpDef.callon = "Utility";
tmpDef.reqArgs = [
    "1 : <string> : name of one flag to wait on",
    "2 : <string> : name of the other flag to wait on"
];
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "flag_wait_any";
tmpDef.decl = "flag_wait_any( <flagname1>: string, <flagname2>: string, <flagname3>: string, <flagname4>: string, <flagname5>: string, <flagname6>: string ): void";
tmpDef.desc = "Waits until any of the the specified flags are set.";
tmpDef.callon = "Utility";
tmpDef.reqArgs = [
    "1 : <string> : name of a flag to wait on",
    "2 : <string> : name of a flag to wait on",
    "3 : <string> : name of a flag to wait on",
    "4 : <string> : name of a flag to wait on",
    "5 : <string> : name of a flag to wait on",
    "6 : <string> : name of a flag to wait on"
];
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "flag_wait_any_return";
tmpDef.decl = "flag_wait_any_return( <flagname1>: string, <flagname2>: string, <flagname3>: string, <flagname4>: string, <flagname5>: string ): string";
tmpDef.desc = "Waits until any of the the specified flags are set, and returns the first set flag that was found.";
tmpDef.callon = "Utility";
tmpDef.reqArgs = [
    "1 : <string> : name of a flag to wait on",
    "2 : <string> : name of a flag to wait on",
    "3 : <string> : name of a flag to wait on",
    "4 : <string> : name of a flag to wait on",
    "5 : <string> : name of a flag to wait on"
];
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "flag_wait_all";
tmpDef.decl = "flag_wait_all( <flagname1>: string, <flagname2>: string, <flagname3>: string, <flagname4>: string ): void";
tmpDef.desc = "Waits until all of the the specified flags are set.";
tmpDef.callon = "Utility";
tmpDef.reqArgs = [
    "1 : <string> : name of a flag to wait on",
    "2 : <string> : name of a flag to wait on",
    "3 : <string> : name of a flag to wait on",
    "4 : <string> : name of a flag to wait on"
];
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "flag_wait_or_timeout";
tmpDef.decl = "flag_wait_or_timeout( <flagname>: string, <timer>: int ): void";
tmpDef.desc = "Waits until either the flag gets set or the timer elapses.";
tmpDef.callon = "Utility";
tmpDef.reqArgs = [
    "1 : <string> : Name of one flag to wait on",
    "2 : <int> : Amount of time to wait before continuing regardless of flag."
];
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "flag_waitopen_or_timeout";
tmpDef.decl = "flag_waitopen_or_timeout( <flagname>: string, <timer>: int ): void";
tmpDef.desc = "Waits until either the flag gets cleared or the timer elapses.";
tmpDef.callon = "Utility";
tmpDef.reqArgs = [
    "1 : <string> : Name of one flag to wait on",
    "2 : <int> : Amount of time to wait before continuing regardless of flag."
];
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "delayCall";
tmpDef.decl = "delayCall( <delay>: int, <function>: function, <arg1>: any, <arg2>: any, <arg3>: any, <arg4>: any, <arg5>: any, <arg6>: any, <arg7>: any, <arg8>: any ): void";
tmpDef.desc = "delayCall is cool! It saves you from having to write extra script for once off commands. Note you don�t have to thread it off. delaycall is that smart!";
tmpDef.callon = "Utility";
tmpDef.reqArgs = [
    "1 : <int> : The delay before the function occurs",
    "2 : <function> : The function to run."
];
common_scripts_utility_defs.push(tmpDef);
tmpDef = new Def_Function;
tmpDef.name = "noself_delayCall";
tmpDef.decl = "noself_delayCall( <delay>: int, <function>: function, <arg1>: any, <arg2>: any, <arg3>: any, <arg4>: any ): void";
tmpDef.desc = "Calls a command with no self (some commands don't support having self).";
tmpDef.callon = "Utility";
tmpDef.reqArgs = [
    "1 : <int> : The delay before the function occurs",
    "2 : <function> : The function to run."
];
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "isSP";
tmpDef.decl = "isSP(): boolean";
tmpDef.desc = "Returns false if the level name begins with mp_";
tmpDef.callon = "Utility";
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "isSP_TowerDefense";
tmpDef.decl = "isSP_TowerDefense(): boolean";
tmpDef.desc = "Returns true if the level name begins with so_td_";
tmpDef.callon = "Utility";
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "string_starts_with";
tmpDef.decl = "string_starts_with( <string>: string, <start>: string ): boolean";
tmpDef.desc = "Returns true if the first string begins with the first string";
tmpDef.callon = "Utility";
tmpDef.reqArgs = [
    "1 : <string> : String to check",
    "2 : <start> : Beginning of string to check"
];
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "plot_points";
tmpDef.decl = "plot_points( <plotpoints>: any[], <r>: int, <g>: int, <b>: int, <timer>: float ): void";
tmpDef.desc = "";
tmpDef.callon = "Utility";
tmpDef.reqArgs = [
    "1 : <any[]> : ",
    "2 : <int> : ",
    "3 : <int> : ",
    "4 : <int> : ",
    "5 : <float> : "
];
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "draw_line_for_time";
tmpDef.decl = "draw_line_for_time( <org1>: any, <org2>: any, <r>: float, <g>: float, <b>: float, <timer>: float ): void";
tmpDef.desc = "Draws a line from < org1 > to < org2 > in the specified color for the specified duration";
tmpDef.callon = "Debug";
tmpDef.reqArgs = [
    "1 : <any> : starting origin for the line",
    "2 : <any> : ending origin for the line",
    "3 : <float> : red color value( 0 to 1 )",
    "4 : <float> : green color value( 0 to 1 )",
    "5 : <float> : blue color value( 0 to 1 )",
    "6 : <float> : time in seconds the line should last"
];
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "array_combine";
tmpDef.decl = "array_combine( <array1>: any[], <array2>: any[] ): any[]";
tmpDef.desc = "Combines the two arrays and returns the resulting array. This function doesn't care if it produces duplicates in the array.";
tmpDef.callon = "Array";
tmpDef.reqArgs = [
    "1 : <any[]> : first array",
    "2 : <any[]> : second array"
];
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "flat_angle";
tmpDef.decl = "flat_angle( <angle>: any ): any";
tmpDef.desc = "Returns the specified angle as a flat angle.( 45, 90, 30 ) becomes( 0, 90, 30 ). Useful if you just need an angle around Y - axis.";
tmpDef.callon = "Vector";
tmpDef.reqArgs = [
    "1 : <any> : angles to flatten"
];
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "flat_origin";
tmpDef.decl = "flat_origin( <org>: any ): any";
tmpDef.desc = "Returns a flat origin of the specified origin. Moves Z corrdinate to 0.( x, y, z ) becomes( x, y, 0 )";
tmpDef.callon = "Vector";
tmpDef.reqArgs = [
    "1 : <any> : origin to flatten"
];
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "draw_arrow_time";
tmpDef.decl = "draw_arrow_time( <start>: any, <end>: any, <color>: any, <duration>: any ): void";
tmpDef.desc = "Draws an arrow pointing at < end > in the specified color for < duration > seconds.";
tmpDef.callon = "Entity";
tmpDef.reqArgs = [
    "1 : <any> : starting coordinate for the arrow",
    "2 : <any> : ending coordinate for the arrow",
    "3 : <any> : ( r, g, b ) color array for the arrow",
    "4 : <any> : time in seconds to draw the arrow"
];
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "get_linked_ents";
tmpDef.decl = "get_linked_ents(): any[]";
tmpDef.desc = "Returns an array of entities that SELF is linked to";
tmpDef.callon = "Utility";
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "get_linked_vehicle_nodes";
tmpDef.decl = "get_linked_vehicle_nodes(): any[]";
tmpDef.desc = "";
tmpDef.callon = "Utility";
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "get_linked_ent";
tmpDef.decl = "get_linked_ent(): any";
tmpDef.desc = "Returns a single entity that SELF is linked to";
tmpDef.callon = "Utility";
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "get_linked_vehicle_node";
tmpDef.decl = "get_linked_vehicle_node(): any";
tmpDef.desc = "";
tmpDef.callon = "Utility";
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "get_links";
tmpDef.decl = "get_links( <get_links>: any ): any";
tmpDef.desc = "";
tmpDef.callon = "Entity";
tmpDef.reqArgs = [
    "1 : <any> : <get_links>"
];
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "run_thread_on_targetname";
tmpDef.decl = "run_thread_on_targetname( <msg>: any, <func>: any, <param1>: any, <param2>: any, <param3>: any ): void";
tmpDef.desc = "Runs the specified thread on any entity with that targetname";
tmpDef.callon = "Utility";
tmpDef.reqArgs = [
    "1 : <any> : The targetname",
    "2 : <any> : The function"
];
tmpDef.optArgs = [
    "<param1>: Optional argument",
    "<param2>: Optional argument",
    "<param3>: Optional argument"
];
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "run_thread_on_noteworthy";
tmpDef.decl = "run_thread_on_noteworthy( <msg>: any, <func>: any, <param1>: any, <param2>: any, <param3>: any ): void";
tmpDef.desc = "Runs the specified thread on any entity with that noteworthy";
tmpDef.callon = "Utility";
tmpDef.reqArgs = [
    "1 : <any> : The noteworthy",
    "2 : <any> : The function"
];
tmpDef.optArgs = [
    "<param1>: Optional argument",
    "<param2>: Optional argument",
    "<param3>: Optional argument"
];
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "draw_arrow";
tmpDef.decl = "draw_arrow( <start>: any, <end>: any, <color>: any ): void";
tmpDef.desc = "Draws an arrow pointing at < end > in the specified color for < duration > seconds.";
tmpDef.callon = "Entity";
tmpDef.reqArgs = [
    "1 : <any> : starting coordinate for the arrow",
    "2 : <any> : ending coordinate for the arrow",
    "3 : <any> : ( r, g, b ) color array for the arrow"
];
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "getfx";
tmpDef.decl = "getfx( <fx>: any ): any";
tmpDef.desc = "Gets the associated level._effect";
tmpDef.callon = "Utility";
tmpDef.reqArgs = [
    "1 : <any> : The effect"
];
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "fxExists";
tmpDef.decl = "fxExists( <fx>: any ): boolean";
tmpDef.desc = "Returns whether or not an fx exists";
tmpDef.callon = "Utility";
tmpDef.reqArgs = [
    "1 : <any> : The effect"
];
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "print_csv_asset";
tmpDef.decl = "print_csv_asset( <asset>: any, <type>: any ): void";
tmpDef.desc = "";
tmpDef.callon = "Utility";
tmpDef.reqArgs = [
    "1 : <any> : ",
    "2 : <any> : "
];
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "fileprint_csv_start";
tmpDef.decl = "fileprint_csv_start( <file>: any ): void";
tmpDef.desc = "";
tmpDef.callon = "Utility";
tmpDef.reqArgs = [
    "1 : <any> : "
];
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "_loadfx";
tmpDef.decl = "_loadfx( <effect>: any ): any";
tmpDef.desc = "";
tmpDef.callon = "Utility";
tmpDef.reqArgs = [
    "1 : <any> : "
];
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "getLastWeapon";
tmpDef.decl = "getLastWeapon( <getLastWeapon>: any ): any";
tmpDef.desc = "";
tmpDef.callon = "Entity";
tmpDef.reqArgs = [
    "1 : <any> : "
];
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "PlayerUnlimitedAmmoThread";
tmpDef.decl = "PlayerUnlimitedAmmoThread(): void";
tmpDef.desc = "";
tmpDef.callon = "Entity";
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "isUsabilityEnabled";
tmpDef.decl = "isUsabilityEnabled(): boolean";
tmpDef.desc = "";
tmpDef.callon = "Entity";
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "_disableUsability";
tmpDef.decl = "_disableUsability(): void";
tmpDef.desc = "";
tmpDef.callon = "Entity";
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "_enableUsability";
tmpDef.decl = "_enableUsability(): void";
tmpDef.desc = "";
tmpDef.callon = "Entity";
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "resetUsability";
tmpDef.decl = "resetUsability(): void";
tmpDef.desc = "";
tmpDef.callon = "Entity";
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "_disableWeapon";
tmpDef.decl = "_disableWeapon(): void";
tmpDef.desc = "";
tmpDef.callon = "Entity";
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "_enableWeapon";
tmpDef.decl = "_enableWeapon(): void";
tmpDef.desc = "";
tmpDef.callon = "Entity";
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "isWeaponEnabled";
tmpDef.decl = "isWeaponEnabled(): boolean";
tmpDef.desc = "";
tmpDef.callon = "Entity";
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "_disableWeaponSwitch";
tmpDef.decl = "_disableWeaponSwitch(): void";
tmpDef.desc = "";
tmpDef.callon = "Entity";
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "_enableWeaponSwitch";
tmpDef.decl = "_enableWeaponSwitch(): void";
tmpDef.desc = "";
tmpDef.callon = "Entity";
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "isWeaponSwitchEnabled";
tmpDef.decl = "isWeaponSwitchEnabled(): boolean";
tmpDef.desc = "";
tmpDef.callon = "Entity";
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "_disableOffhandWeapons";
tmpDef.decl = "_disableOffhandWeapons(): void";
tmpDef.desc = "";
tmpDef.callon = "Entity";
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "_enableOffhandWeapons";
tmpDef.decl = "_enableOffhandWeapons(): void";
tmpDef.desc = "";
tmpDef.callon = "Entity";
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "isOffhandWeaponEnabled";
tmpDef.decl = "isOffhandWeaponEnabled(): boolean";
tmpDef.desc = "";
tmpDef.callon = "Entity";
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "random";
tmpDef.decl = "random( <array> ): any";
tmpDef.desc = "chose a random element of an array";
tmpDef.callon = "Level";
tmpDef.reqArgs = ["1 : <array> : "];
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "spawn_tag_origin";
tmpDef.decl = "spawn_tag_origin(): entity";
tmpDef.desc = "Spawn a script model with tag_origin model";
tmpDef.callon = "Entity";
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "waittill_notify_or_timeout";
tmpDef.decl = "waittill_notify_or_timeout( <msg>: string, <timer>: float ): void";
tmpDef.desc = "";
tmpDef.callon = "Entity";
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "fileprint_launcher_start_file";
tmpDef.decl = "fileprint_launcher_start_file(): void";
tmpDef.desc = "Tells Launcher to start storing text to a file.";
tmpDef.callon = "Level";
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "fileprint_launcher";
tmpDef.decl = "fileprint_launcher( <string>: string ): void";
tmpDef.desc = "Tell launcher to append text to current open file.";
tmpDef.callon = "Level";
tmpDef.reqArgs = ["1 : <string> : "];
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "fileprint_launcher_end_file";
tmpDef.decl = "fileprint_launcher_end_file( <file_relative_to_game>: string, <bIsPerforceEnabled>: boolean ): boolean";
tmpDef.desc = "Tell launcher to write out Text that has been started and appended.";
tmpDef.callon = "Level";
tmpDef.reqArgs = ["1 : <file_relative_to_game>: string : relative to game ( c:\\trees\\iw5\\game )"];
tmpDef.optArgs = ["2 : <bIsPerforceEnabled>: boolean : Enabled will tell Perforce to check in the file."];
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "launcher_write_clipboard";
tmpDef.decl = "launcher_write_clipboard( <str>: string ): void";
tmpDef.desc = "send a string to your Connected PC's clipboard through launcher";
tmpDef.callon = "Entity";
tmpDef.reqArgs = ["1 : <str>: string : "];
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "isDestructible";
tmpDef.decl = "isDestructible(): boolean";
tmpDef.desc = "returns true if self is a destructible";
tmpDef.callon = "Entity";
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "pauseEffect";
tmpDef.decl = "pauseEffect(): void";
tmpDef.desc = "";
tmpDef.callon = "Entity";
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "activate_individual_exploder";
tmpDef.decl = "activate_individual_exploder(): void";
tmpDef.desc = "Activates an individual exploder, rather than all the exploders of a given number";
tmpDef.callon = "Entity";
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "waitframe";
tmpDef.decl = "waitframe(): void";
tmpDef.desc = "";
tmpDef.callon = "Entity";
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "brush_delete";
tmpDef.decl = "brush_delete(): void";
tmpDef.desc = "";
tmpDef.callon = "Entity";
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "brush_throw";
tmpDef.decl = "brush_throw(): void";
tmpDef.desc = "";
tmpDef.callon = "Entity";
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "get_target_ent";
tmpDef.decl = "get_target_ent( <target>: string ): entity";
tmpDef.desc = "Returns whatever SINGLE ent is targeted, be it node, struct, or entity";
tmpDef.callon = "Entity";
tmpDef.optArgs = ["<target>: Optional target override"];
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "brush_show";
tmpDef.decl = "brush_show(): void";
tmpDef.desc = "";
tmpDef.callon = "Entity";
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "exploder_earthquake";
tmpDef.decl = "exploder_earthquake(): void";
tmpDef.desc = "";
tmpDef.callon = "Entity";
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "do_earthquake";
tmpDef.decl = "do_earthquake( <name>: string, <origin>: vector ): void";
tmpDef.desc = "Play an earthquake that is defined by add_earthquake()";
tmpDef.callon = "Entity";
tmpDef.reqArgs = ["<name>: Name of the earthquake", "<origin>: Origin of the earthquake"];
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "exploder_rumble";
tmpDef.decl = "exploder_rumble(): void";
tmpDef.desc = "";
tmpDef.callon = "Entity";
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "exploder_delay";
tmpDef.decl = "exploder_delay(): void";
tmpDef.desc = "";
tmpDef.callon = "Entity";
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "exploder_damage";
tmpDef.decl = "exploder_damage(): void";
tmpDef.desc = "";
tmpDef.callon = "Entity";
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "stop_exploder";
tmpDef.decl = "stop_exploder( <num>: any ): void";
tmpDef.desc = "";
tmpDef.callon = "Entity";
tmpDef.reqArgs = ["<num>: Number identifying the exploder"];
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "effect_loopsound";
tmpDef.decl = "effect_loopsound(): void";
tmpDef.desc = "";
tmpDef.callon = "Entity";
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "play_loopsound_in_space";
tmpDef.decl = "play_loopsound_in_space( <alias>: string, <origin>: vector ): entity";
tmpDef.desc = "Use the PlayLoopSound command at a position in space. Unrelated to caller.";
tmpDef.callon = "Level";
tmpDef.reqArgs = ["<alias>: Sound alias to play", "<origin>: Origin of the sound"];
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "sound_effect";
tmpDef.decl = "sound_effect(): void";
tmpDef.desc = "";
tmpDef.callon = "Entity";
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "effect_soundalias";
tmpDef.decl = "effect_soundalias(): void";
tmpDef.desc = "";
tmpDef.callon = "Entity";
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "play_sound_in_space";
tmpDef.decl = "play_sound_in_space( <alias>: string, <origin>: vector, <master>: boolean ): void";
tmpDef.desc = "Play a sound at an origin, unrelated to caller";
tmpDef.callon = "Level";
tmpDef.reqArgs = ["<alias>: Sound alias to play", "<origin>: Origin of the sound"];
tmpDef.optArgs = ["<master>: Play this sound as a master sound. Defaults to false"];
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "cannon_effect";
tmpDef.decl = "cannon_effect(): void";
tmpDef.desc = "";
tmpDef.callon = "Entity";
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "exploder_playSound";
tmpDef.decl = "exploder_playSound(): void";
tmpDef.desc = "";
tmpDef.callon = "Entity";
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "fire_effect";
tmpDef.decl = "fire_effect(): void";
tmpDef.desc = "";
tmpDef.callon = "Entity";
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "loop_fx_sound";
tmpDef.decl = "loop_fx_sound( <alias>: string, <origin>: vector, <culled>: int, <ender>: string, <timeout>: float ): void";
tmpDef.desc = "";
tmpDef.callon = "Level";
tmpDef.reqArgs = ["<alias>: Sound alias to play", "<origin>: Origin of the sound"];
tmpDef.optArgs = ["<culled>: Flag indicating whether the sound should be culled (1) or not (0)", "<ender>: String specifying the ender condition", "<timeout>: Duration before stopping the sound"];
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "loop_fx_sound_interval";
tmpDef.decl = "loop_fx_sound_interval( <alias>: string, <origin>: vector, <ender>: string, <timeout>: float, <delay_min>: float, <delay_max>: float ): void";
tmpDef.desc = "";
tmpDef.callon = "Level";
tmpDef.reqArgs = ["<alias>: Sound alias to play", "<origin>: Origin of the sound", "<ender>: String specifying the ender condition", "<timeout>: Duration before stopping the sound", "<delay_min>: Minimum delay between sound plays", "<delay_max>: Maximum delay between sound plays"];
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "loop_sound_delete";
tmpDef.decl = "loop_sound_delete( <ender>: string, <ent>: entity ): void";
tmpDef.desc = "";
tmpDef.callon = "Entity";
tmpDef.reqArgs = ["<ender>: String specifying the ender condition", "<ent>: Entity to delete"];
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "exploder_before_load";
tmpDef.decl = "exploder_before_load( <num>: string ): void";
tmpDef.desc = "";
tmpDef.callon = "Entity";
tmpDef.reqArgs = ["<num>: String specifying the number"];
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "exploder_after_load";
tmpDef.decl = "exploder_after_load( <num>: string ): void";
tmpDef.desc = "";
tmpDef.callon = "Entity";
tmpDef.reqArgs = ["<num>: String specifying the number"];
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "activate_exploder";
tmpDef.decl = "activate_exploder( <num>: string ): void";
tmpDef.desc = "";
tmpDef.callon = "Entity";
tmpDef.reqArgs = ["<num>: String specifying the number"];
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "createLoopEffect";
tmpDef.decl = "createLoopEffect( <fxid>: string ): entity";
tmpDef.desc = "";
tmpDef.callon = "Entity";
tmpDef.reqArgs = ["<fxid>: ID of the effect"];
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "createOneshotEffect";
tmpDef.decl = "createOneshotEffect( <fxid>: string ): entity";
tmpDef.desc = "";
tmpDef.callon = "Entity";
tmpDef.reqArgs = ["<fxid>: ID of the effect"];
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "createExploder";
tmpDef.decl = "createExploder( <fxid>: string ): entity";
tmpDef.desc = "";
tmpDef.callon = "Entity";
tmpDef.reqArgs = ["<fxid>: ID of the effect"];
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "alphabetize";
tmpDef.decl = "alphabetize( <array>: array ): array";
tmpDef.desc = "";
tmpDef.callon = "Entity";
tmpDef.reqArgs = ["<array>: Array to alphabetize"];
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "is_later_in_alphabet";
tmpDef.decl = "is_later_in_alphabet( <string1>: string, <string2>: string ): bool";
tmpDef.desc = "";
tmpDef.callon = "Entity";
tmpDef.reqArgs = ["<string1>: First string to compare", "<string2>: Second string to compare"];
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "alphabet_compare";
tmpDef.decl = "alphabet_compare( <a>: string, <b>: string ): string";
tmpDef.desc = "";
tmpDef.callon = "Entity";
tmpDef.reqArgs = ["<a>: First string to compare", "<b>: Second string to compare"];
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "play_loop_sound_on_entity";
tmpDef.decl = "play_loop_sound_on_entity( <alias>: string, <offset>: vector ): void";
tmpDef.desc = "Play loop sound alias on an entity.";
tmpDef.callon = "Entity";
tmpDef.reqArgs = ["<alias>: Sound alias to loop", "<offset>: Offset for sound origin relative to the world from the models origin."];
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "stop_loop_sound_on_entity";
tmpDef.decl = "stop_loop_sound_on_entity( <alias>: string ): void";
tmpDef.desc = "Stop playing the loop sound alias on an entity.";
tmpDef.callon = "Entity";
tmpDef.reqArgs = ["<alias>: Sound alias to stop looping"];
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "delete_on_death";
tmpDef.decl = "delete_on_death( <ent>: entity ): void";
tmpDef.desc = "Delete the entity when 'self' dies.";
tmpDef.callon = "Entity";
tmpDef.reqArgs = ["<ent>: The entity you want to wait to die before deleting"];
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "exploder";
tmpDef.decl = "exploder( <num>: int ): void";
tmpDef.desc = "Sets off the desired exploder.";
tmpDef.callon = "Utility";
tmpDef.reqArgs = ["<num>: The exploder number"];
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "create_dvar";
tmpDef.decl = "create_dvar( <var>: string, <val>: string ): void";
tmpDef.desc = "Initialize a dvar with a given value.";
tmpDef.callon = "Utility";
tmpDef.reqArgs = ["<var>: Name of the dvar", "<val>: Default value"];
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "tag_project";
tmpDef.decl = "tag_project( <tagname>: string, <dist>: float ): vector";
tmpDef.desc = "Returns a point projected off a tag.";
tmpDef.callon = "Entity";
tmpDef.reqArgs = ["<tagname>: Name of the tag", "<dist>: Distance to project from the tag"];
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "ter_op";
tmpDef.decl = "ter_op( <statement>: boolean, <true_value>: any, <false_value>: any ): any";
tmpDef.desc = "Function that serves as a tertiary operator in C/C++.";
tmpDef.callon = "Utility";
tmpDef.reqArgs = ["<statement>: The statement to evaluate", "<true_value>: The value that is returned when the statement evaluates to true", "<false_value>: The value that is returned when the statement evaluates to false"];
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "create_lock";
tmpDef.decl = "create_lock( <msg>: string, <count>: int ): void";
tmpDef.desc = "Create a lock with a specified count.";
tmpDef.callon = "Utility";
tmpDef.reqArgs = ["<msg>: Message associated with the lock", "<count>: Number of times the lock can be acquired"];
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "lock";
tmpDef.decl = "lock( <msg>: string ): void";
tmpDef.desc = "Acquire a lock.";
tmpDef.callon = "Utility";
tmpDef.reqArgs = ["<msg>: Message associated with the lock"];
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "is_locked";
tmpDef.decl = "is_locked( <msg>: string ): boolean";
tmpDef.desc = "Check if a lock is acquired.";
tmpDef.callon = "Utility";
tmpDef.reqArgs = ["<msg>: Message associated with the lock"];
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "unlock_wait";
tmpDef.decl = "unlock_wait( <msg>: string ): void";
tmpDef.desc = "Unlock and wait for the specified message.";
tmpDef.callon = "Utility";
tmpDef.reqArgs = ["<msg>: Message associated with the unlock"];
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "unlock";
tmpDef.decl = "unlock( <msg>: string ): void";
tmpDef.desc = "Unlock without waiting for the specified message.";
tmpDef.callon = "Utility";
tmpDef.reqArgs = ["<msg>: Message associated with the unlock"];
common_scripts_utility_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "get_template_level";
tmpDef.decl = "get_template_level(): any";
tmpDef.desc = "Returns the templated level or level.script.";
tmpDef.callon = "Entity";
common_scripts_utility_defs.push(tmpDef);