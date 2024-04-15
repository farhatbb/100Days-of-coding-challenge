//Question #82.
//Find the length of a string..
function countCharacters(inputString: String): number {
    return inputString.length;
}
console.log(countCharacters("Hello world"));


//Question # 83.
//Converting to Uppercase and Lowercase:
function convertCase(inputString:string): void {
    const upperCaseString = inputString.toUpperCase();
    const lowerCaseString = inputString.toLowerCase();
    console.log("Uppercase:", upperCaseString);
    console.log("LowerCase:",lowerCaseString);
}
convertCase("Hello,World!");

//Question # 84 .
//Replacing text in a string:
function replaceJavaScript(sentence: string): string {
    return sentence.replace(/JavaScript/g, "Typescript");
    //Example usage..
}
const inputSentence = "JavaScript is programming language. JavaScript.";
const modifiedSentence = replaceJavaScript(inputSentence);
console.log(modifiedSentence);