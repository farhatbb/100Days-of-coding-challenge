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
