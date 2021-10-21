"use strict";

(function () {

    // What is an object?
    // An object is a grouping of data and functionality. Data items contained in an
    // object are referred to as properties, and functions on an object are referred
    // to as methods.


    // Properties we've worked with so far:
    // length

    var str = 'hello';
    str.length;


    // SOME methods we've seen so far:
    // .toLowerCase()
    // .toUpperCase()
    // .substring()
    // .toFixed
    // .random()
    // .forEach()
    // .push()
    // .slice()
    // .indexOf()


    // These properties and methods are built into Javascript, meaning they have already been defined.


    // ***Strings and numbers are automatically converted to String objects and Number objects,
    // so that we can utilize these methods and properties.***


    // What is an instance of an object?
    // When we create objects, we are creating an instance of an object.
    // An "instance" is a reference to an "object".


    // Later, we will be instantiating objects in Java using the "new" keyword,
    // For now, we will be creating objects using object literals.


    // Object Literal Notation
    // var myDog = {};
    // console.log(typeof myDog);
    // console.log(myDog);

    // Her name is Kali
    // She is a Australian Cattle Dog mix
    // Her birthday is October 31st, 2018
    // She can sit
    // She can stay
    // She can recall

    // myDog.name = 'Kali';
    // myDog.breed = 'Australian Cattle Dog mix';
    // myDog.dateOfBirth = '10/31/2018';
    // myDog.sit = function () {
    //     return 'Kali is now sitting';
    // }
    //
    // console.log(myDog);
    // console.log(myDog.name);
    // console.log(myDog.sit())


    var myDog = {
        name: 'Kali',
        breed: 'Australian Cattle Dog mix',
    };

    console.log(myDog.name);


    // When would I know to use an object?
    // Most likely, you will be using objects to describe an entity.


    // Mini-Exercise
    // Create an object with various properties and methods for the objects below.
    // 1. Company
    // 2. Shape
    // 3. Animal

    // Company

    // *Properties*
    // address
    // phone #
    // name
    // numberOfEmployees
    // *Methods*
    // .getSales()
    // .open()
    // .close()
    // .getInventory
    // .getCashOnHand()

    // *Properties*

    // name
    // numberOfWorkers
    // numberOfClients

    // *Methods*
    // .closing()

    // *Properties*
    // name
    // location
    // numberOfEmployees
    // industry
    // founder


    // Shape

    // *Properties*
    // Triangle
    // color
    // texture
    // size
    // lineWidth
    // shapeOfCorners


    // *Properties*
    // type
    // numberOfSides
    // numberOfAngles
    // dimension

    //  *Methods*
    // getArea()
    // getCircumference()
    // getPerimeter()

    // Animal

    // *Properties*
    // type
    // location
    // age
    // food
    // weight
    // gender
    // isHunting (either true or false)

    // *Methods*
    // hunt()

    // *Properties*

    // age
    // breed
    // isDomestic

    //*Methods*
    // hunt()
    // eat()
    // sleep()
    // walk()
    // run()

    var dogs = [myDog];
    var peridot = {
        name: "Peridot",
        breed: "Pit Bull Terrier Mix",
        birthday: "08/30/2017",
        sit: function (hasTreat) {
            if (hasTreat === true) {
                return "Peridot is now sitting";
            } else {
                return "Peridot is now ignoring you";
            }
        }
    }
    // adding periot objecto the the dogs array.
    dogs.push(peridot);


    console.log(dogs);

    // Logging breed of first object in array
    console.log(dogs[0].breed)


    // Iterate through each dog in the dogs array and log the number of
    // dogs with the breed 'Australian Cattle Dog mix'.
    var numberOfAustralianCattleDogMixes = 0;
    dogs.forEach(function (dog) {
        if (dog.breed === 'Australian Cattle Dog mix') {
            numberOfAustralianCattleDogMixes += 1;
        }
    })
    console.log(numberOfAustralianCattleDogMixes)


    // Reassigning the name property
    // myDog.name = 'Princess';
    //
    // console.log(dogs)
    //
    // dogs[0].name = 'Bubbles';
    //
    // console.log(dogs)

    myDog.owner = {
        name: 'Jay',
        address: '600 Navarro St. San Antonio, TX'
    }

    console.log(myDog);

    console.log(myDog.owner)
    console.log(myDog.owner.name)

    peridot.owner = {
        name: 'David',
        address: '600 Navarro St. San Antonio, TX'
    }

    console.log(dogs);

    myDog.intro = function () {
        console.log("Hi my name is " + this.name + ", my owners name is " + this.owner.name);
    }

    myDog.intro();


})();