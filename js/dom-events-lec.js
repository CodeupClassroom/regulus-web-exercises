"use strict";

// The Document Object Model provides us with an Event Model (or interface) which allows us to listen to events that happen.

// addEventListener syntax
// target.addEventListener(type, listener);

(function(){
    var moonText = document.querySelector('#moon-travel');
    var mainContent = document.querySelector('#main-content');


    // CLICK EVENT: When I click on the h1 text, the background will change, as well as the text of the element.
    moonText.addEventListener('click', function() {
        mainContent.style.backgroundImage = 'url(img/moon-surface.png)';
        this.innerHTML = 'Do I have to wear a mask on the moon?';
    });

    // MOUSE EVENT
    var goku = document.querySelector('#goku');

    var gokuListener = function() {
        // goku.setAttribute('src', 'img/goku-mad.png')
        this.src = 'img/goku-mad.png';
        this.addEventListener('mouseout', function() {
            this.src = 'img/goku-normal.png';
        })
    }

    goku.addEventListener('mouseenter', gokuListener);

    var gokuChill = function() {
        goku.removeEventListener('mouseenter', gokuListener);
    }

    document.querySelector('.goku-chill').addEventListener('click', gokuChill);

    // KEYBOARD EVENTS: keyup, keydown, keypress
    mainContent.addEventListener('keydown', function(){
        console.log(event.keyCode);
        if(event.key === " ") {
            document.querySelector('.space-bar').style.display = 'inline';
        }
    });

    // CHANGE EVENT
    var dropdown = document.querySelector('#travel-items');

    dropdown.addEventListener('change', function(event){
        // console.log(event.target);
        // template string syntax ${javascript code goes in here}
        document.querySelector('.result').innerHTML = `I agree that ${event.target.value} is important!`
    });

    // MINI EXERCISE
    // When the user clicks on the Change Font Color button, the font of the entire webpage should change to the users input.

    var colorBtn = document.querySelector('#color-btn');

    colorBtn.addEventListener('click', function() {

        mainContent.style.color = document.querySelector('#text-color').value;
    })

})();