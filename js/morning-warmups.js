(function() {

    /**
     * Write a function that returns the number 7
     */

    function returnsSeven() {
        return 7;
    }

    // console.log(returnsSeven());

    // if (34 < 23 === false) {
    //     console.log("Am I Seen?");
    // } else {
    //     console.log("What about me?");
    // }

    /**
     * Write a ternary expression for if you've had breakfast
     */

    var hadBreakfast = Boolean(Math.round(Math.random()));

    var hadBreakfastMessage = (hadBreakfast) ? "Boy howdy, that was a good breakfast." : "My tummy is a-rumblin',";

    // console.log(hadBreakfast);
    // console.log(hadBreakfastMessage);

    /**
     * Write a program that console.logs the numbers from 1 to 100. But for multiples of three console.log “Fizz” instead of the number
     * and for the multiples of five console.log “Buzz”. For numbers which are multiples of both three and five console.log “FizzBuzz”.
     */

    for(var i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i)
        }
    }

    /**
     * secondToLast
     */

    function secondToLast(arr) {
        return arr[arr.length - 2];
    }

    console.log(secondToLast(["First", "Second", "Not Last", "Last"]));


    // Write a function named ‘moveToEnd’ that takes in an array, and returns
    // the array with the original first index moved to the last index of the array.

    // moveToEnd([1, 2, 3, 4]) 		  // returns [2, 3, 4, 1];
    // moveToEnd(['roll', 'rock', 'and']  // returns ['rock', 'and', 'roll'];

    function moveToEnd(arr) {
        var removedElement = arr.shift();
        arr.push(removedElement);
        return arr;
    }

    console.log(moveToEnd([1, 2, 3, 4]));
    console.log(moveToEnd(['roll', 'rock', 'and']));


    var gyarados = {
        name: 'Gyarados',
        description: 'It has an extremely aggressive nature. The Hyper Beam it shoots from its mouth totally incinerates all targets.',
        height: {
            feet: 21,
            inches: 4
        },
        type: ['water', 'flying']
    };


    var circle = {
        radius: 36
    }

    // Area of a circle = PI * radius^2

    var area = Math.round(Math.PI * (Math.pow(circle.radius, 2)));

    console.log(area);



})();