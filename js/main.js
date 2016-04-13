// Display Goodbye World to another developer
var GBWorld = "Goodbye World"
console.log(GBWorld);
document.write(GBWorld);
alert(GBWorld);

// Ask the user for their name
var username = prompt("What is your name?");

// Create 4 different variables of different types
var mattVar1 = 5;
console.log(mattVar1);

var mattVar2 = "Matt's Variable 2";
console.log(mattVar2);

var mattVar3 = (3 > 5);
console.log(mattVar3);

var mattVar4 = [1,2,3,4,5];
console.log(mattVar4);

// Concatenate all 4 of the above variables and write it to the console.
var combineMattVars = mattVar1 + mattVar2 + mattVar3 + mattVar4;
console.log(combineMattVars);

// Write an if else statement
if (mattVar2.length > mattVar1) {
	console.log("The length of mattVar2 is greater than the value of mattVar1, which is 5");
}
else {
	console.log("The length of mattVar2 is not greater than the value of mattVar1, which is 5");
}

// Display 5 to 24 using 2 different kinds of loops.
for (i=5; i < 25; i++) {
	console.log(i);
}

while (mattVar1 <= 24) {
	console.log(mattVar1);
	mattVar1++;
}

// Write a function that takes two arguments and concatenates them into one big term.
function mattConcat (a, b) {
	return a + " " + b;
}

// Calling the function on two of the variables I created above
var superConcatBro = mattConcat (mattVar3, mattVar4);
console.log(superConcatBro);