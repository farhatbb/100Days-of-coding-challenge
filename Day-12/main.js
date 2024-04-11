"use strict";
//Question # 34 Pizzas...
let pizzas = ["Mashroom", "Pepporni", "Margertia"];
pizzas.forEach(pizza => {
    console.log(`I like ${pizza} pizza.`);
});
console.log("Irealy love pizza!");
//Question # 35: Animals..
let animals = ["Dog", "Cat", "Rabbit"];
animals.forEach(animal => {
    console.log(`A ${animal} would make a great pet.`);
});
console.log("Any of these animals would make a great pet!");
//Question # 36: Shirt
function make_shirt(size, message) {
    console.log(`Making a ${size} t-shirt with the message"${message}"printed on it.`);
}
make_shirt("medium", "Code is life!");
