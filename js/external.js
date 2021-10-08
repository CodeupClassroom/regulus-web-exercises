console.log("Hello from external JavaScript");

alert('Welcome to my Website!');

var userFavColor = prompt("What is your favorite color?!");
alert("Neat-o! " + userFavColor + " is my favorite color too! ARE WE TWINS?!");

// 3.1 ---

alert("Welcome to Hollywood Video, where you can rent the greatest movies for the tidy sum of $3 per day.");

var littleMermaid = parseFloat(prompt("How many days would you like to rent The Little Mermaid?"));

var brotherBear = parseFloat(prompt("How many days would you like to rent Brother Bear?"));

var hercules = parseFloat(prompt("How many days would you like to rent Hercules?"));

var rentalTotal = (littleMermaid + brotherBear + hercules) * 3;

alert("Thank you for your patronage. Your total is $" + rentalTotal.toFixed(2)+".");

// 3.2 ---

var rateGoog = parseFloat(prompt("What do you get payed per hour by Google?"));

var hoursGoog = parseFloat(prompt("How many hours did you work for Google this pay period (be honest, I'll know)?"));

var rateAma = parseFloat(prompt("What do you get payed per hour by Amazon?"));

var hoursAma = parseFloat(prompt("How many hours did you work for Amazon this pay period (be honest, I'll know)?"));

var rateFB = parseFloat(prompt("What do you get payed per hour by Facebook?"));

var hoursFB = parseFloat(prompt("How many hours did you work for Facebook this pay period (be honest, I'll know)?"));

var totalWage = (rateGoog * hoursGoog) + (rateAma * hoursAma) + (rateFB * hoursFB);

alert("Wow you made $" + totalWage +" this pay period!");

// 3.3 --- Happy Path

var classHasSpace = confirm("Hey, is there room in Introduction to Mass Media at 8 AM w/ Professor Fluker?");

var scheduleClear = confirm("You don't have any other classes M/W at 8 AM, correct?");

alert("Student can register for class: " + (classHasSpace && scheduleClear));

// 3.3 --- Sad Path

var classFull = confirm("Hey, is Introduction to Mass Media at 8 AM w/ Professor Fluker full?");

var classConflict = confirm("Do you have any other classes M/W at 8 AM?");

alert("Student can register for class: " + (!classFull && !classConflict));

// 3.4 ---

var isMember = confirm("Do you have your Kroger card?");

var howManyItems = parseInt(prompt("How many items are in your cart?"));

var isOfferValid = confirm("[WAIT] IS THIS OFFER VALID? [MANAGER CONFIRMATION REQUIRED]");

var discountApplied = isOfferValid && (howManyItems > 2 || isMember);

alert("Discount Applied: " + discountApplied);