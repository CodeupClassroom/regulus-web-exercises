// Conditionals: Code that runs when we meet certain requirements.

// Today we'll be covering if, if/else, if/else if/else statements, ternary expressions and switch statements.

// IF STATEMENTS - Code that runs when a condition is met.

// if (condition) {
//     this code will run if our condition is true;
// }

/** Consider the sentence: "When I run out of milk: I go to the store to get more." */
// Condition: When I Run Out Of Milk
// Action: I go to the store to get more milk.

// if (milk === 0) {
//     goToStore();
// }

/** TO-DO: I want to make a block of code that logs a message to the console when a variable is set to the number 5. */

var five = 55;

if (five === 5) {
    console.log("Hey, that's five.");
}


// We can also use our conditional logic in functions.

/** TO-DO: I want to build a function that returns a string when I pass a number as an argument.*/

// function isItANumber(parameter) {
//     var str = "Oi, that ain't a number."
//     if (typeof parameter === "number") {
//         str = "Hey. That's a number.";
//     }
//     return str;
// }


// IF/ELSE Statements: Code that runs when a condition is met, but will also run with a default state.

// if (condition) {
//     i run when the condition evaluates to true;
// } else {
//     otherwise i run;
// }

/** Consider the following sentence: "If I owned one, I'd get milk from my cow when I ran out. But since
 * I don't, I'll go to the store instead." */

// How would we write this as a if/else code block?

// if (hasCow) {
//     console.log("Goin' to go milk Bessie.");
// } else {
//     console.log("Going to H-E-B for milk. Need anything?");
// }

/** TO-DO: Let's expand our previous isItANumber function. Now I want to also return string when we aren't passed a number. How do I refactor our function? */

// function isItANumber(parameter) {
//     if (typeof parameter === "number") {
//         return "Hey. That's a number.";
//     } else {
//         return "Hey, you're not a number!";
//     }
// }

console.log(isItANumber(72));
console.log(isItANumber("Doug"));


// IF/ELSE IF/ELSE = A chain of if/else statements to give different results for different conditions.

// if (condition1) {
//     run this code;
// } else if (condition2) {
//     since the first condition wasn't met, and the second was, I run;
// } else {
//     since neither the first or second conditions were met, I run by default.
// }

/** Consider the following sentence: "If I owned a cow, I'd get milk from it when I ran out. If I owned a goat,
 * I could get my milk from it, but since I don't own either of those: I'll go to the store instead." */

// How would we write this as a if/else if/else code block?

var hasCow = true;
var hasGoat = true;

if (hasCow) {
    console.log("Miking Bessie");
} else if (hasGoat) {
    console.log("Milking Gertrude");
} else {
    console.log("Hey, I'm headed to Randall's for milk. You need anything?");
}


/** TO-DO: Let's make a function that takes in a number and will return three different strings for an
 * argument lesser than, greater than, or equal to 35. */

function isThisThirtyFive(parameter) {
    if (parameter === -35) {
        return "Well aren't you clever. Yes, I suppose negative 35 is 35... in a way..."
    } else if (parameter > 35) {
        return "No. " + parameter + " is greater than 35."
    } else if (parameter < 35) {
        return "No. " + parameter + " is less than 35."
    } else {
        return "Yep, that sure is 35."
    }
}

console.log(isThisThirtyFive(34));
console.log(isThisThirtyFive(35));
console.log(isThisThirtyFive(36));
console.log(isThisThirtyFive(-35));


// TERNARY EXPRESSION: A expression to set a value based on boolean evaluation.

// var message = (booleanValue) ? "Expression was true." : "Expression was false.";

/** Consider the following statement: "Are we out of milk? If we are out of milk: I'll head to the store, but if we
 * do have milk: I want to make a bowl of cereal." */

// How would we write this as a ternary expression?

var doWeHaveMilk = false;

var action = (doWeHaveMilk) ? "Time to eat me some corn pops." : "Headed to Giant Eagle for milk. Need anything?";

console.log(action);

/** TO-DO: Let's look back at the if/else version of our isItANumber function. Let's refactor our if/else as a ternary expression. */

function isItANumber(parameter) {
    return (typeof parameter === "number") ? "Hey. That's a number." : "Hey, you're not a number!";
}

// SWITCH STATEMENT: A statement with multiple conditions that will trigger based on the value of a variable.

var color = prompt("What is your favorite color?").toLowerCase();

switch(color) {
    case "blue":
    case "green":
        alert("What a coincidence, that's my favorite!");
        break;
    case "gray":
    case "grey":
        alert("Is it grey, or gray?");
        break;
    case "orange":
        alert("That's my brother's favorite color!");
        break;
    default:
        alert(color + " is a weird color, my dude.");
        break;
}

/** Consider the following sentence: "I don't have a cow, goat, or camel. I guess I'll have to go to the
 * store for milk." */

// How would we write this as a switch statement?

var animal = "skink";
switch (animal) {
    case "cow":
        console.log("Milking Bessie.");
        break;
    case "goat":
        console.log("Milking Gertrude.");
        break;
    case "camel":
        console.log("Milking Camille.");
        break;
    default:
        console.log("Headed to Kroger for milk, want anything?");
        break;
}

/** TO-DO: Let's make a switch statement with a prompt for the user to input their favorite sandwich meat. If they like 'olive loaf' we should return an alert to congratulate them on their bold choice, and if they choose 'brisket' we should return a different alert: this one for congratulating them on the 'right' answer. All other responses should trigger an alert stating apathy. */

var favoLunchMeat = prompt("What's our favorite lunch meat?");

switch (favoLunchMeat) {
    case "olive loaf":
        alert("You have a bolt palette; good for you.");
        break;
    case "brisket":
        alert("Ah, the correct choice.");
        break;
    default:
        alert("That's fine. Nothing wrong with a little " + favoLunchMeat);
        break;
}

// Let's work on the exercise!