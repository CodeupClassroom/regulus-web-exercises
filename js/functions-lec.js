"use strict";

// A function is a block of reusable code that performs a specific task.
// Functions typically take in an input, and produce an output.

// Functions we have used so far:
// - prompt();
// - alert();
// - Number();
// - parseFloat();
// - parseInt();
// - .toFixed();
// - .toUpperCase();

// When executing a function, we call the name of the function, following any input
// inside of the parenthesis known as arguments.

// prompt("What is your name?"); // returns a string;

// Function Structure

// function todaysDate(parameter1, parameter2, ect...) {
//     // Do something
//     // return something
// }

function todaysDate(greeting) {
    return greeting + Date();
}

// Execute function
var date = todaysDate("Today's date is: ");
console.log(date);


// Function declaration
function echo(phrase) {
    return phrase + " " + phrase
}

// console.log(echo("hello!"))
console.log(echo(echo('hello!')));

// (hello! hello!) - > echo('hello! hello!') -> hello! hello! hello! hello!

// Function expression / anonymous function
var sayBye = function (name) {
    var localVar = 'I be a local one.'
    console.log(localVar);
    return 'Goodbye ' + name;
}


console.log(sayBye('Jay'));
// console.log(localVar);
// Example:

// Create a function which takes in two
// number parameters to find the Hypotenuse angle.

// Parameters are the placeholders stated in the function definition.
function findHypotenuse(a, b) {
    var result;
    result = Math.sqrt((a * a) + (b * b))
    return result;
}

// Have a triangle with the sides of 4 and 5.
// Execute our function to find the hypotenuse.


// Arguments are the values that are put into the function when executed.
console.log(findHypotenuse(4, 5));
console.log(findHypotenuse(5, 5));
console.log(findHypotenuse(14, 9));
console.log(findHypotenuse(4, 0));

// Functions do not REQUIRE parameters, here we just want to print the word 'four', for example.
function printFour() {
    return 'four';
}

console.log(printFour());

// FUNCTION SCOPE

// Scope is a term to describe where a variable can be accessed.

// With my global variable that exists in the HTML document,
// I can console.log its value.
console.log(global);

function greeting() {
    var firstName = 'David';
    var lastName = 'Stephens';
    return 'Hello, ' + firstName + lastName;
}

console.log(greeting());
console.log(firstName, lastName);

// Immediately Invoked Function Expression (IIFE)

(function () {
    var ifyVar = 'I am local to the IIFE'
    var info = 'hi';
    function myFunction() {
        // var of info can still be accessed here because it was defined
        // "globally" (inside the iffe).
        return info;
    }
})();

// console.log(ifyVar);
