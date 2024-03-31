//Day-19 Question # 55.Double Numbers in an array...
let numbers= [1,2,3,4,5]

let doubleNumbers = numbers.map(number => number *2)
console.log(doubleNumbers);

//Question # 56. Keep Only Strings...
let mixedArray = [1,"apple", "banana",3, true, "carrot"]
let stringsArray = mixedArray.filter(item => typeof item === "string")
console.log(stringsArray);

//Question # 57. Find the Average Grade...
let grades =[88,74,93,64,59,75]
let average_grade = grades.reduce((total, grade) => total + grade,0)/grades.length
console.log(average_grade);