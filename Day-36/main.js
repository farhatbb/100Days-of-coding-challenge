"use strict";
//Day 36,   coding challenge. Question # 106
//leap year.
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    }
    else {
        return false;
    }
}
//example usage:
const year = 2024;
if (isLeapYear(year)) {
    console.log(`${year} is a leap year.`);
}
else {
    console.log(`${year} is not a leap year.`);
}
//question#107
function isDivisibleBy2And3(number) {
    return number % 2 === 0 && number % 3 === 0;
}
//example usage:
const num = 12;
if (isDivisibleBy2And3(num)) {
    console.log(`${num} is divisible by  both 2 and 3.`);
}
else {
    console.log(`${num} is not divisible by both 2 and 3.`);
}
// 12 is divisible by both 2 and 3.
//Question # 108
//compare two string..
function areStringIdenticalIgnoreCase(str1, str2) {
    return str1.toLocaleLowerCase() === str2.toLocaleLowerCase();
}
//example usage:
let string1 = "Hello";
let string2 = "hello";
if (areStringIdenticalIgnoreCase(string1, string2)) {
    console.log("The strings are identical ignoring case sensitivity.");
}
else {
    console.log("The strings are not identical ignoring case sensitivity.");
}
