//Question # 88.
//Rounding to the Nearest Integer:
function roundToNearestInteger(number: number) : number {
    return Math.round(number);
}
const result: number = roundToNearestInteger(2.7);
console.log(result);

//Question # 89
//Converting String Numbers:
function stringToNumber(str: string): number | null {
    const num = parseInt(str,10);
    if (isNaN(num)){
        return null

    }
    return num;
}
const numberString = "123";
const result2 = stringToNumber(numberString);
console.log(result2);

//Question#90.
//Checking if a value is NaN:
function  isNotANumber(value: any): boolean {
    return isNaN(value);
}
const result3 = isNotANumber(NaN);
console.log(result3);
