"use strict";
// Loops allow us to use repeating logic. Today we'll be talking about three different kinds of loops:
// - While loops
// - Do/While loops
// - For loops

// While loops will run while our condition is true.

// The basic structure of a while loop:
// while (condition) {
//  code runs.
// }

// var areWeThereYet;
//
// while(!areWeThereYet) {
//     areWeThereYet = confirm("Are we there yet?");
// }

// In the above example, we'll continue to prompt the user asking if we're there yet until we finally get
// a positive confirmation.

// var haveEmail = confirm("Hey, wanna sign up for discounts?");
// var userEmail;
//
// while(!haveEmail) {
//     haveEmail = confirm("Please?!");
// }
//
// if (haveEmail) {
//     userEmail = prompt("Please input email:");
// }
//
// console.log("Sucker...." + userEmail);
// Notice that much like an if statement, our while loop will only run if the initial condition is met.

/**
 * Audience: "But David, how might I use this loop within a function?"
 * */

// incrementUntilTen will take in a number and loop, incrementing the passed number until it is at least
// equal to 10, returning the number of times the loop was run. If the passed number is greater than or
// equal to 10, it will return the number 0;

function incrementUntilTen(num) {
    var iterations = 0;
    while (num < 10) {
        num++;
        iterations++;
    }
    return iterations;
}

// console.log(incrementUntilTen(7), "Expected 3"); // 3
// console.log(incrementUntilTen(27), "Expected 0"); // 0

/**
 * Audience: "But David, surely there are yet more loops to cover?"
 */

// A do/while loop is quite similar to a while loop. The biggest difference is that a do/while loop will
// run at least once.

// do {
//  Code to be run.
// } while (condition)

// Consider:

// while (false) {
//     console.log("will you ever see me?");
// }
//
// do {
//     console.log("But what about me?");
// } while (false);

// Notice that even with a condition that has a boolean value of false, the do while loop will run one time before stopping. *** See diagram in curriculum.

// let's refactor an earlier loop:

// WHILE VERSION
var areWeThereYetHuh = false;

// while(areWeThereYetHuh === false) {
//     areWeThereYetHuh = confirm("Are we there yet?");
// }
////////////////////////////////////////////////////////////////
// DO/WHILE VERSION

// do {
//     areWeThereYetHuh = confirm("What about now?");
// } while (areWeThereYetHuh === false)


// Notice with our do/while loop that we're able to ask if we're there yet at least once inside the loop
// without having to define the variable outside the loop.

// We can continue to use this logic within a function.

// like our previous function, we are returning the number of times a number was multiplied by the number two to get to greater than 100. This function will always return 1 or greater, as it will always multiply the number by 2 at least once.

function countIterationsMultiplyByTwoUntilGreaterThan100(num) {
    var iterations = 0;
    do {
        num *= 2;
        iterations++;
    } while (num <= 100);
    return iterations;
}


// console.log(countIterationsMultiplyByTwoUntilGreaterThan100(25), "expect 3");
// console.log(countIterationsMultiplyByTwoUntilGreaterThan100(250), "expect 1");

// For loops: Loops that are designed to run a given number of times. Think more math thinking.
// for (var incrementer = 1; incrementer < 10; incrementer++) {
//     console.log("This loop has run " + incrementer + " time(s).");
// }

// The for loop is a bit more verbose as you can see. Let's break down the pieces:
// - iterator initialization - Here we are declaring the variable for our incrementer, as well as it's
//      value.
// - condition - The loop will continue to run until this condition is no longer true.
// - iterator change - what happens to the incrementer in once the loop has finished executing the
//      code for a given iteration.

// Once again, we can use this in a function.

// function sayHelloXTimes(num) {
//     for (var j = num; j >= 1; j--) {
//         console.log("Hello!");
//     }
// }

function sayHelloXTimes(num) {
    for (var k = 1; k <= num; k++) {
        console.log("Hello! This loop has ran " + k + " time(s).");
    }
}

// sayHelloXTimes(18);


// Below is a funky example that works, but will rely on moving between different data types.
// for (var i = 1; i < 8; i++) {
//     console.log("This is a bit of a tricky way to run a for loop, but hey, it works...");
// }

/**
 * Audience: "But David, there simply must be a way I can get a loop to stop this crazy thing!"
 */

// We can get a loop to stop using break;

// var x = 0;
//
// while (true) {
//     alert("This is the song that never ends. It just goes on and on my friends. Somebody started singing not knowing what it was, and now we'll all just keep on singing this because");
//     x++;
//     if (x === 5) {
//         break;
//     }
// }

// while (true) {
//     var ticketsToMtSplashmore = confirm("Can we get tickets to Mt. Splashmore?");
//     if (ticketsToMtSplashmore){
//         break;
//     }
// }
//
// alert("Thanks Homer, you're the best!");

// for (var j = 5; j < 100000; j += 5) {
//     if (j === 25) {
//         break;
//     }
//     console.log(j);
// }

// Notice that by having the break, we're able to get out of the loop that would otherwise run forever.

/**
 * "But David, what if I don't want it to stop, but merely skip a round"
 */

// we can also use continue to allow a loop to skip an iteration.

function allOddNumbersToX (x) {
    for(var num = 1; num <= x; num++) {
        if (num % 2 === 0) {
            continue;
        }
        console.log(num);
    }
}
// How'd i'd start a function like the one above without continue. Notice that it doesn't allow for odd numbers to appear when we pass it an even number.
function allOddNumbersFromX (x) {
    for (var num = x; num >= 1; num--) {
        if (num % 2 === 0) {
            continue;
        }
        console.log(num);
    }
}
allOddNumbersToX(17);
allOddNumbersToX(18);
allOddNumbersFromX(18);

// The above function will only log the odd numbers until the argument passed.