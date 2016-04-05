#include "function.h"

Function::Function(void) : identifier(NULL)
{
	this->type = S_TYPE_FUNCTION_DECL;
}

Function::Function(Identifier* identifier, YYLTYPE loc)
{
	this->type = S_TYPE_FUNCTION_DECL;
	
	this->identifier = identifier;
	this->location = loc;
	
	this->AddChild(identifier);
}

Function::~Function()
{
	delete this->identifier;
}

void Function::PrintInfo()
{
	printf("%s with %d children at %d(%d) - %d(%d), name '%s'\n",
		SYMBOL_TYPE_STRING(type),
		this->children ? this->children->Size() + 1 : 0,
		location.start.line,
		location.start.character,
		location.end.line,
		location.end.character,
		this->identifier->value);
}




Call::Call(void) : flags(CALL_FLAG_NULL), identifier(NULL)
{
	this->type = S_TYPE_FUNCTION_CALL;
}

Call::Call(YYLTYPE loc, int flags) : flags(flags), identifier(NULL)
{
	this->type = S_TYPE_FUNCTION_CALL;
	this->location = loc;
}

Call::~Call()
{
	delete this->identifier;
}

void Call::PrintInfo()
{
	printf("%s with %d children at %d(%d) - %d(%d), flags 0x%X\n",
		SYMBOL_TYPE_STRING(type),
		this->children ? this->children->Size() + 1 : 0,
		location.start.line,
		location.start.character,
		location.end.line,
		location.end.character,
		this->flags);
}