"use strict";
// Question # 85.
//Finding the position of a substring..
function findCodePosition(inputString) {
    const regex = /\bcode\b/;
    const match = regex.exec(inputString);
    if (match) {
        return match.index;
    }
    else {
        return -1;
    }
}
const input = "This is  a word 'code' in this string";
const position = findCodePosition(input);
console.log("position of 'code':", position);
//Question #86.
//Checking for text presence...
function containsJavaScript(inputString) {
    const regex = /\bJavaScript\b/;
    return regex.test(inputString);
}
const input1 = "I love  JavaScript!";
const input2 = "Typescript is my favorite language.";
console.log(containsJavaScript(input1)); //output: true
console.log(containsJavaScript(input2)); //output: false
//Question #87.
//Extracting a Substring
function extractingFirstTenCharacters(inputString) {
    return inputString.substring(0, 10);
}
const inputString = "this is a sample string.";
const firstTenChars = extractingFirstTenCharacters(input);
console.log("First 10 characters:", firstTenChars);
