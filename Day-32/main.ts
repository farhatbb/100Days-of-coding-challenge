//Question # 94.

import { log } from "console";

//.map() method..
const words: string[] = ["Hello", "World", "Typescript", "Javascript"]
const lengths: number[] = words.map(word => word.length)
console.log(lengths);

//Question 95.
// .filter()method..
function filterGreaterThanTen(numbers: number[]): number[]{
    return numbers.filter(number=> number> 10)
}
const number: number[] = [5,10,15,20,25]
console.log(filterGreaterThanTen(number))

//Question 96.
//.reduce()method..
function calculateSum(numbers: number[]): number {
    return numbers.reduce((accumulator,current) => accumulator+current,0)
}
const numbers: number[] = [1,2,3,4,5]
console.log(calculateSum(numbers));