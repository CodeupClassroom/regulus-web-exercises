(function() {

    function returnsSeven() {
        return 7;
    }

    console.log(returnsSeven());

    if (34 < 23 === false) {
        console.log("Am I Seen?");
    } else {
        console.log("What about me?");
    }

    var hadBreakfast = Boolean(Math.round(Math.random()));

    var hadBreakfastMessage = (hadBreakfast) ? "Boy howdy, that was a good breakfast." : "My tummy is a-rumblin',";

    console.log(hadBreakfast);
    console.log(hadBreakfastMessage);

})();