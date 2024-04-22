"use strict";
//Question # 94.
Object.defineProperty(exports, "__esModule", { value: true });
//.map() method..
const words = ["Hello", "World", "Typescript", "Javascript"];
const lengths = words.map(word => word.length);
console.log(lengths);
//Question 95.
// .filter()method..
function filterGreaterThanTen(numbers) {
    return numbers.filter(number => number > 10);
}
const number = [5, 10, 15, 20, 25];
console.log(filterGreaterThanTen(number));
//Question 96.
//.reduce()method..
function calculateSum(numbers) {
    return numbers.reduce((accumulator, current) => accumulator + current, 0);
}
const numbers = [1, 2, 3, 4, 5];
console.log(calculateSum(numbers));
