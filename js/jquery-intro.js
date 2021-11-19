// Write your code here!
$(document).ready(function() {
    // Returns the element with its content.
    // var family = document.getElementById('super-important');
    //
    // var titles = document.getElementsByClassName('headers');
    //
    // var listItems = document.getElementsByTagName('li');
    //
    // var firstHeader = document.querySelector('.headers');
    //
    // var allHeaders = document.querySelectorAll('.headers')
    //
    // var carImage = document.querySelector('#car-image');
    //
    // var answer = document.forms.fastSurvey.answer.value;
    //
    // var mainTitle = document.querySelector('#mainTitle');


    var family = $('#super-important');

    var titles = $('.headers');

    var listItems = $('li');

    var carImage = $('#car-image');

    var mainTitle = $('#mainTitle');

    var mainHeader = $('h1.headers');

    mainHeader.html('Hello There!');

    mainHeader.css({
        'color': 'white',
        'background-color': 'black'
    });

    // $('*').css('border', 'solid 1px black');

    $('h1, p, ol').css('font-family', 'Georgia, serif');



    // A forEach loop will not work because we are using an
    // HTMLCollection prototype, rather than an Array prototype.
    // titles.forEach(function(header){
    //     header.style = 'font-family: Impact, sans-serif;';
    // });

    // Let's change the font-family of each h3 element that has the class
    // of 'headers' to be Impact. Since we have a collection of elements,
    // we must use a loop to iterate through the HTML nodes, and change the style attribute.
    // for (var i = 0; i < titles.length; i++) {
    //     console.log("It's working!");
    //     titles[i].style = 'font-family: Impact, sans-serif';
    // }

    // carImage.setAttribute('src', 'img/actual-car.jpg');
    // The innerHTML property allows us to change the text content of the element, as well as add additional HTML elements.
    // mainTitle.innerHTML = 'The <b>DOM</b> Lecture';
    // The innerText property allows us to only change the text content of an element.
    // mainTitle.innerText = 'Hello World';
    // We can concatenate variables into our strings. So here, we are accessing our array of national park objects,
    // and concatenating in the name property of the object.
    // parksList.innerHTML = "<li>" + nationalParks[0].name +"</li><li>"+nationalParks[1].name +"</li><li>"+ nationalParks[2].name +"</li>"

    // family.style = 'background-color: yellow; color: red; font-weight: bolder;';

    // var colorChangingBG = setInterval(function(){
    //
    //     var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    //     var randomColor = colors[Math.floor(Math.random() * colors.length)];
    //
    //     document.querySelector('body').style.backgroundColor = randomColor;
    //
    // }, 2000)
})