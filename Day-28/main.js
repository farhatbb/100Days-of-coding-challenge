"use strict";
//Question #82.
//Find the length of a string..
function countCharacters(inputString) {
    return inputString.length;
}
console.log(countCharacters("Hello world"));
//Question # 83.
//Converting to Uppercase and Lowercase:
function convertCase(inputString) {
    const upperCaseString = inputString.toUpperCase();
    const lowerCaseString = inputString.toLowerCase();
    console.log("Uppercase:", upperCaseString);
    console.log("LowerCase:", lowerCaseString);
}
convertCase("Hello,World!");
//Question # 84 .
//Replacing text in a string:
function replaceJavaScript(sentence) {
    return sentence.replace(/JavaScript/g, "Typescript");
    //Example usage..
}
const inputSentence = "JavaScript is programming language. JavaScript.";
const modifiedSentence = replaceJavaScript(inputSentence);
console.log(modifiedSentence);
