"use strict";
//Day-24. Question #70
//understanding let  in loop...
function numbers() {
    for (let a = 1; a <= 5; a++) {
        console.log(a);
    }
}
numbers();
//Question # 71. 
//compare let and const..
let age = 25;
age = 26;
console.log(age);
const name1 = "momina";
try {
    name1 = "humana";
}
catch (error) {
    console.log("Error: Can't reassign a 'const-delared variable.");
}
//Question # 72.
// Block Scope with let and const.
{
    let blockLet = "visible inside the block";
    const blockConst = "also only inside the block";
    console.log(blockLet); // works..
    console.log(blockConst); //also works..
}
try {
    console.log(blockLet); //not working..error show
}
catch (error) {
    console.log("'blockLet' is not accessible outside the block.");
}
try {
    console.log(blockConst); // this is also fail
}
catch (error) {
    console.log("'blockConst' is not accessible outside the block.");
}
