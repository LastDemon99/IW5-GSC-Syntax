import { Def_Function } from './struct';

export var game_defs = new Array<Def_Function>();
var tmpDef;

tmpDef = new Def_Function;
tmpDef.name = "cmdexec";
tmpDef.decl = "cmdexec( <command>: string ): void";
tmpDef.desc = "Run a console command.";
tmpDef.callon = "Level";
tmpDef.reqArgs = [	"1 : <string> : command to execute"];
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "print";
tmpDef.decl = "print( <message>: string ): void";
tmpDef.desc = "Prints a message on console.";
tmpDef.callon = "Level";
tmpDef.reqArgs = [	"1 : <string> : value to print."];
game_defs.push(tmpDef);

tmpDef = new Def_Function;
tmpDef.name = "logprint";
tmpDef.decl = "logprint( <message>: string ): void";
tmpDef.desc = "Prints a message on log file.";
tmpDef.callon = "Level";
tmpDef.reqArgs = [	"1 : <string> : value to print"];
game_defs.push(tmpDef);