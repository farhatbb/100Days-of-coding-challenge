"use strict";
//Question # 43.
//unchanged- Magicians...
let magicians = ["David", "Alice", "Charle"];
function make_great(magicians) {
    let show_magicians = [];
    magicians.forEach((magicians) => {
        greatMagicians.push(`${magicians} the Great`);
    });
    return greatMagicians;
}
function show_magicians(magicians) {
    magicians.forEach((magicians) => {
        console.log(show_magicians);
    });
}
let greatMagicians = make_great(magicians.slice()); //Creates new modified array
console.log("original magicians:");
show_magicians(magicians); //show original names.
console.log("Great magicians:");
show_magicians(greatMagicians); //show modified names.
//Question # 44.
// Sandwiches..
function orderSandwich(...items) {
    console.log("You ordered a sandwich with the following items:");
    items.forEach(item => console.log("-" + item));
    console.log("Enjoy your sandwich!");
}
//call the function with different number.
orderSandwich('Green-Oliv', 'Tomato', 'Mayo');
orderSandwich('Gralic', 'Lettuce', 'Onion');
orderSandwich('Mashroom', 'Butter', 'Cheese');
//Question # 45
//Cars..
function make_Car(manufacturer, model, ...options) {
    let car = { manufacturer, model };
    options.forEach(([key, value]) => ([car, key] = value));
    return car;
}
console.log(make_Car("toyota", "Carolla", ["color", "red"], ["year", 2020]));
console.log(make_Car("Ford", "Fiesta", ["color", "blue"], ["Sunroof", "true"]));
