(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray = planetsString.split("|");

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an unordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    var planetsWithBreakTags = planetsArray.join("<br>");
    console.log(planetsWithBreakTags);

    var unorderedListOfPlanets = "<ul><li>" + planetsArray.join("</li><li>") + "</li></ul>"

    console.log(unorderedListOfPlanets);


    var listOfPlanets;

    planetsArray.unshift("<ul>");
    planetsArray.push("</ul>");
    listOfPlanets = planetsArray.join(" <li> ");

    document.write(listOfPlanets);
})();
