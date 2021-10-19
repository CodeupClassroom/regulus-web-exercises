"use strict";

(function() {

    var userNum;

    while (true) {
        userNum = parseInt(prompt("Give me an odd number between 1 and 50!"));
        if (userNum >= 1 && userNum <= 50 && userNum % 2 !== 0) {
            break;
        }
    }

    // for (var b = 1; b <= 50; b++) {
    //     if (b % 2 === 0) {
    //         continue;
    //     }
    //     if (b === userNum) {
    //         console.log("We don't talk about " + userNum + " around these parts...");
    //         continue;
    //     }
    //     console.log("Here's an odd number: " + b);
    // }

    for (var b = 1; b <= 50; b += 2) {
        if (b === userNum) {
            console.log("We don't talk about " + userNum + " around these parts...");
            continue;
        }
        console.log("Here's an odd number: " + b);
    }

})();