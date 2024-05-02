"use strict";
//Question #103.
// write a function that returens  a random boolean value,
function randomBoolean() {
    return Math.random() < 0.5;
}
const result = randomBoolean();
console.log(result);
//Question #104
// Hexadecimal color code..
function randomHexColor() {
    const characters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += characters[Math.floor(Math.random() * 16)];
    }
    return color;
}
const randomColor = randomHexColor();
console.log(randomColor);
//Question # 105 
//simulate a diceroll...
function rollDice() {
    //generate a random number between 1 and 6
    return Math.floor(Math.random() * 6) + 1;
}
const number = rollDice();
console.log("The dice rolled:", result);
