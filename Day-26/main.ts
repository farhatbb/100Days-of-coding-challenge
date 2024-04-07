//Question # 76. Function  Parameters and Return Values...
function addNum(num1: number,num2: number): number {
    return num1 + num2
}
console.log(addNum(5,9))

//Question # 77.
//Default Parameters..
function greetUser(name: string ="anonymous") {
    console.log(`Hello! ${name}!`);
}

greetUser("Farahat")
greetUser()

//Question #78 .
//Function Expression vs Function Declarations
function squareDeclaration(number: number): number {
    return number * number;
}

const squareExpression =function(number: number): number{
    return  number * number; 

}
console.log(squareDeclaration(4));
console.log(squareExpression(4));