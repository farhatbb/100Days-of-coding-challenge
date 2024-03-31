"use strict";
//Day # 23.
//Question # 67.
//Arithmatic with Mixed Types...
function addNumberAndString(number1, numberString) {
    return number1 + Number(numberString);
}
console.log(addNumberAndString(10, "5"));
//Question # 68.
//Multiplying Decimals...
function multiplyDecimals(num1, num2) {
    return Math.round((num1 * num2) * 100) / 100;
}
console.log(multiplyDecimals(0.1, 0.2));
//Question # 69. Dividing & Finding the Remainder...
function divide_and_remainder(dividend, divisor) {
    let quotient = Math.floor(dividend / divisor);
    let remainder = dividend % divisor;
    return {
        quotient,
        remainder
    };
}
console.log(divide_and_remainder(10, 3));
