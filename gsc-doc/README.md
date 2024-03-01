## GSC
GSC Language, also known as "game script code," serves as Call of Duty's scripting language, heavily based on C++. While its syntax closely resembles that of C++, it incorporates distinct characteristics such as object mutability, this allowing modification after creation, and dynamic typing, meaning there's no need to specify variable data types upon declaration.

### How to start
To begin, we'll first need to place or create a .gsc file in `%localappdata%/plutonium/storage/iw5/scripts`. The game will then inspect these files and initialize the function named init within them. Therefore, to initialize our script, we must always start by creating this function.
```
init()
{

}
```

### Comments
Comments exist in two ways, one-line, or multi-line block comments.
```
//This is a one-line comment.
```

```
/*
This is a comment across
multiple lines!
*/
```

### Variables Types
Variables are used to store data for the duration of the game. They can be used in various ways and come in different types:
- **Integers:** Used to store whole numbers, such as `1, 2, -5` etc.
- **Floats:** Used to store decimal numbers, such as `3.14, 2.5, -0.75`, etc.
- **Strings:** Used to store text, such as `"hello", "game", "number one"`, etc.
- **Booleans:** Used to represent true/false values, such as `true or false`.
- **Arrays:** Structures that store multiple values `[1, 3.5, "hi", true]`
- **Associative array:** Structure that store a value in an ordered list by means of a key, internally the key is converted into a numerical index to access the corresponding element `Groups["Admin"], Groups["Moderator"]`
- **Vector:** Data structure that represents an ordered sequence of elements of the same type, are arranged in a single dimension and they are used to represent directional magnitudes or quantities that have magnitude and direction. GSC provides functions to perform specific operations with them. `(0, 0, 1)`
- **Struct:** It is a data construction that allows variables of different types to be grouped under the same name. `sentry.health`
- **Entities:** These are utilized to refer objects within the game environment, players and dynamic objects `player.health`. While similar to structures syntax, entities not only encompass multiple attributes but also behaviors.

### Variable declaration
To declare a variable simply type the name of your variable then a `=` with which you will assign the value you want.
```
num = 1; //int

num_2 = 0.5; //float

msg = "hello"; //string

game_start = true; //bool

data = [num, num2, msg]; //array

Groups["Admin"] = [player1, player2, player3]; //associative array

direction = (0, 0, 1000); //vector

explosion = spawnStruct(); //struct
explosion.fx = loadfx("explosions/tanker_explosion");
explosion.origin = (0, 0, 0);
explosion.sound = "cobra_helicopter_crash";

entity = spawnEnt((0, 0, 0), "com_plasticcase_friendly", (0, 0, 0)); //entity
entity.health = 999;
```
When a variable is declared but no value is assigned, its default value is `undefined`, it represents the absence of a value assigned to a variable. It can also be declared.
```
explosion.health // is undefined, at no previously did we declare it

my_var = undefined; // declared as undefined
```

### Variables Scopes
- **Local Variable:** Declared within a function and are only accessible within that function.
```
num = 0;
```
- **Global Variable:** Declared on any function and are accessible anywhere in the script.
```
level.num = 0;
```
- **Entity or struct Variable:** Associated to a specific object and are only accessible to that object.
```
self.num = 0;
```

### Persistent Variable
If you want to have persistent variables that do not change with each script initialization you will have to access data structures assigned in the following variables `self.pers` & `game`
```
self.pers["num"] = 0; //local entity
game["num"] = 0; //global
```

### Math operators
Mathematical operators are special symbols used to perform arithmetic operations on numerical values. These operators allow you to perform basic mathematical operations.

```
+  :: Addition
-  :: Subtraction
*  :: Multiplication
/  :: Division
%  :: Modulus
=  :: Equals
++ :: One Increment
-- :: One Decrement
+= :: Incrementation
-= :: Decrementation
``` 
Increment & decrement
```
var++;      // Set var to var + 1
var--;      // Set var to var - 1
var += 5;   // Set var to var + 5
var -= 5;   // Set var to var - 5
```
The `+` and `+=` operator can also be used to concatenate text
```
var = "hi";
var += "!"; // Set vat to concat var + "!"
```


### If Statements
An 'if' statement is used to verify whether some data satisfies certain conditions, and then to execute code depending on the outcome. To understand this section, you must first know the operators used to compare data: 
```
== :: Equal To
!= :: Not Equal To
!  :: Negation (Not equal to)
<  :: Less than
>  :: Greater than
<= :: Less or Equal to
>= :: Greater or Equal to
&& :: And
|| :: Or
``` 
Bitwise Information Example: 
```
if (3 < 5) 
{
    iprintln("Condition met"); //print a message in killing spree feed
} 
else 
{
    iprintln("Condition not met");
}
```
This can also be used to check the conditions of player variables or just variables. 
```
self.condition = false;

if (self.condition) 
{ 
    // is true?
    self iprintln("self.condition is true");
} 
else 
{
    self iprintln("self.condition is false");
}
``` 
You can also use an `else if` in the statement. This is used in a scenario where you want to check multiple comparisons.
```
if(var1 == var2)
{
  // If above arguement is true
}
else if(!var1 && var3)
{
  // If var1 is false but var3 is true
}
else
{
  // If all other if statements were false
}
``` 
Keep in mind that you will find different ways to write the code, for example, you can see that you can ignore the use of `{ }`, in case you consider unnecessary and messy only if there is a single line. `remember to check that the indentation is correct`
```
if (condicion)
{
    // A block with several lines of code
    iprintln("Condition met");
    iprintln("Condition met");
    iprintln("Condition met");
}

if (condicion)
    iprintln("Condition met"); // one line of code

if (condicion)
    iprintln("Condition met"); // one line of code
else 
    iprintln("Condition not met"); // one line of code


if (condicion) iprintln("Condition met"); // one line of code
else iprintln("Condition not met"); // one line of code
``` 
In GSC, you can check if a variable is defined as a condition. This function is called isDefined, it takes the variable as the only parameter, and returns `true/false.`
```
var = 5;
var2 = 6;

if (isDefined(var))
{
    // var is defined as 5
    iprintln("var is defined");
    var2 = undefined; // undefine var2
}

if (isDefined(var2))
{
    // this should not be met as var2 was undefined.
    iprintln("var2 is defined");
} 
else if (!isDefined(var2)) 
{
    iprintln("var2 is undefined");
}
```

### Loops
A loop in general, whether it is a for, while foreach, is a control flow structure in programming that is used to repeat a block of code according to certain conditions

- **While:** While is used to repeat a block of code while a specific condition is met.
```
number = 5;
while (number) 
{
    iprintln("Number equals: " + number);
    number--;
}

iprintln("The while loop has ended."); // this will only be seen if the loop ended

/*

5 prints should have been made:
"Number equals: 5"
"Number equals: 4"
"Number equals: 3"
"Number equals: 2"
"Number equals: 1"
"The while loop has ended."

*/
```

- **For:** For loops can be infinite or loops that only run until a condition of some kind is met, the latter is used when the exact number of iterations to be performed is known.
```
for(;;) 
{
    iprintln("Infinite loop!");
    wait 0.05; // If this `wait` is called on a non-threaded function, it will hold the server/entity. 
}
```
A loop that will stop after `i` is no longer less than `var`, which equals `10`. 
```
var = 10;
for(i = 0; i < var; i++) 
{
    iprintln("Looping! " + i);
}
```
A loop that will stop after `i` is no longer greater than `var`, which is equal to `0`.
```
var = 0;
for(i = 10; i > var; i--) 
{
    iprintln("Looping! " + i);
}
```
- **Foreach:** Used specifically to iterate over elements of a collection, eliminating the need to use an index to access each element in the collection.
```
foreach(something in array)
{
  // Do something
}
``` 
An example would look something like this: 
```
foreach(player in level.players) // "For every player in the game"
{
    player giveWeapon("iw5_usp45_mp"); // Give a usp
}
```
Within the loops you can also use reserved words such as `break` or `continue`
- **break:** is used to immediately exit the loop and continue code execution after the loop.
```
i = 0;
for (i; i < 10; i++) 
{
    if (i == 5)
        break;
}

iprintln("i is equal to 5, not 10: " + i);
```
- **continue:** is used inside a loop to jump to the next iteration, skipping the rest of the code inside the loop for the current iteration.
```
for (i = 0; i < 10; i++) 
{
    //print only even numbers

    if (i % 2 != 0)
        continue; //skip odd

    iprintln(i); 
}
``` 

### Switch: 
Switch cases are useful for checking the case of a lot of values. This is usually seen to be faster and recommended to use than a if statement. 
```
value = 3;
switch (value)
{
    case 1:
        iprintln("Value was 1");
        break;
    case 2:
        iprintln("Value was 2");
        break;
    case 3:
        iprintln("Value was 3");
        break;
    default:
        iprintln("Value was not found");
        break;
}
```
***Caution: If you use a `switch` inside a loop, using `break` will terminate the entire flow, not just the switch.***

### Declaring Functions: 
You can declare functions in GSC by giving it a name, followed by a `()` and a closing `{ }` at the end of your function.
```
myFunction()
{
	print("^2My First Function!"); // print message on console
}
``` 
You can also declare functions associated with an entity, to reference it within the function `self` will be used.
```
myFunction()
{
	self iprintlnbold("^2My First Function!"); // print message in center of player screen
}
```
When declaring functions we can also define the need to pass values when calling it to perform various operations, the `arguments`.
```
sum(a, b)
{
    print(a + b);
}
```
For certain cases for practical reasons we may need arguments that can be undefined. In this case, if we do not add a second argument when `calling` the function, the function will get it as `undefined` and assign it a default value.
```
getRandomAttachs(weapon, attachs_count)
{
    if (!isDefined(attachs_count)) 
        attachs_count = 2;

	// Function logic
}
```
Functions using `return` can return a value or interrupt their execution.
```
sum(a, b) //when calling it it will return the value
{
    return a + b;
}

function()
{
    if (!isPlayer(self) || self.team == "axis") //If this condition is met we directly interrupt the execution
        return;

    // Do something
}
```
### Calling Functions: 
To call a function, there are different ways to go about it.
- **Sequential Call:** When a function is called sequentially, the script waits for the function to complete before continuing to execute the next command. This means that script execution temporarily stops at the line where the function is called and does not continue until the function has finished executing.
```
myFunction(); // The script stops here and executes the() function before continuing to the next line.
```
- **Thread Call:** In contrast, when a thread function is called, script execution does not stop at the line where the function call is made. Instead, the script continues to run at the same time as the function runs in the background. This allows the script to continue execution without waiting for the function to finish.
```
thread myFunction(); // This will start the() function but continue executing the next line.
```
- **Function associated with entity:** Functions can also be associated with entities that can help organize code in a clearer and more modular way. This makes it easier to understand what actions or behaviors are related to each entity and makes the code easier to maintain.
```
ent myFunction();
```
```
ent thread myFunction();
```
To send arguments we will simply write the values separated by `,`
```
sum(5, 10); //sending arguments to declared function
```
You can also declare a variable and assign a function to it and then call the function from the variable
```
level.myVarFunction = ::myFunction; //global var
```
To call the function assigned to the variable you have to use the following syntax where the variable has to be inside `[[ ]]` followed by ()
```
[[level.myVarFunction]](); //function called from another script file
```
To call functions defined in other gsc file we need to write `path\filename` followed by `::` and the function
```
common_scripts\utility::cointoss(); // 50/50 return true
```

### Notify / Endon / Waittill:
The Notify, Endon, and Waittill functions are used together to monitor events and wait for certain game actions to occur. These triggers must be associated with the `level` or an `entity` to be called from different parts or different scripts.
- **Notify:** It is used to notify a specific event so that it can be detected by other parts of the code that are waiting for it. As the first argument, a string will be assigned that will serve as a key to identify it. 
```
level Notify("game_ended");
```
If necessary, we can also send other parameters.
```
self Notify("damage", 100, attacker);
```
- **Endon:** Used to interrupt the execution of the code block in case the specified event is notified.
```
level endon("game_ended"); //If level are notified of a "game_ended", the entire block will be interrupted

for(;;)
{
    iprintln("test");
    wait 0.5;
}
```
- **Waittill:** is used to wait for the notification, so `waittill` will pause the script until the notification occurs.
```
self waittill("spawned_player"); //The entity in this case player waits "spawned_player" notify
self iprintln("You are spawned"); //If the entity is notified it will allow the continuation of this line
```
Remember that `notify` can send multiple parameters, so `waittill` can receive them
```
level waittill("connected", player); //We wait for the notify and receive the player parameter.
player iprintln("You has connected");
```
You can use `waittill_any` to wait for up to 8 notifications simultaneously, but it will not be able to receive parameters
```
self waittill_any( "joined_team", "joined_spectators" );
```
If you need to know what notification is being receive, you can use `waittill_any_return`, this only accepts a maximum of 5 notify
```
result = self waittill_any_return( "bomb_planted", "bomb_defused" );
```
If you need to wait for a certain time or notifications, you can use `waittill_any_timeout`, the first argument is `float` for the timeout and then a maximum of 5 notifications.
```
self waittill_any_timeout( 5, "goal" );
```

### Including other GSC
You can include another GSC file into your existing GSC file, using the `#include path\filename;` This is used to access functions already defined in different files, being able to reuse code.

```
#include common_scripts\utility;

init()
{
    print(cointoss()); cointoss is in utility function
}
```