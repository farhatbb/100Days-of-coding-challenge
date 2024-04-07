"use strict";
//Question # 76. Function  Parameters and Return Values...
function addNum(num1, num2) {
    return num1 + num2;
}
console.log(addNum(5, 9));
//Question # 77.
//Default Parameters..
function greetUser(name = "anonymous") {
    console.log(`Hello! ${name}!`);
}
greetUser("Farahat");
greetUser();
//Question #78 .
//Function Expression vs Function Declarations
function squareDeclaration(number) {
    return number * number;
}
const squareExpression = function (number) {
    return number * number;
};
console.log(squareDeclaration(4));
console.log(squareExpression(4));
