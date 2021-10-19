"use strict";

(function() {

    function showMultiplicationTable(num) {
        for (var j = 1; j <= 10; j++) {
            var result = num * j;
            console.log(num + " x " + j + " = " + result);
        }
    }

    showMultiplicationTable(7);

    for (var k = 1; k <= 10; k++) {
        var randomNumber = Math.floor((Math.random() * 181) + 20);
        if (randomNumber % 2 === 0) {
            console.log(randomNumber + " is an even number.");
        } else {
            console.log(randomNumber + " is an odd number.");
        }
    }
 // 4 as one string (Andrawes's Solution)
    var str = "";
    for (var h = 1; h <= 9; h += 1) {
        for (var g = 1; g <= h; g += 1) {
            str += h;
        }
        str += "\n";
    }

    console.log(str);

// 4 with multiple strings
    for (var u = 1; u <= 9; u += 1) {
        var str2 = "";
        for (var w = 1; w <= u; w += 1) {
            str2 += u;
        }
        console.log(str2)
    }

// 4 leveraging string concatenation and parsing to multiply the number pyramid (Eloys's Solution)
    var numberMultiplier = 0;
    for (var number = '1'; number.length < 10; number +='1') {
        numberMultiplier++;
        console.log(number * numberMultiplier);
    }

    for (var p = 100; p > 0; p -= 5) {
        console.log(p);
    }

})();