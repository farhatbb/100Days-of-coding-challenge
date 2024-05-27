"use strict";
//Question # 79.
//creating and accessing object properties...
let Car = {
    make: "toyota",
    model: "Corolla",
    year: "2020",
    Color: ""
};
console.log(Car.model);
//Question #80.
//updating object properties..
Car.Color = "Grey";
Car.year = "2021";
console.log(Car);
//Question # 81.
//Iterating over object properties..
function logObject(obj) {
    for (let property in obj) {
        console.log(`${property}: ${obj[property]}`);
    }
}
logObject({ make: "Toyota", model: "Corolla", year: 2021, Color: "Grey" });
