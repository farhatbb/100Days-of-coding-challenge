//Day:17 Question#49
//Function with Rest parameters...
function hobbies(...hobbies:string[]){
    hobbies.forEach(hobby =>
        {
            console.log(`I enjoy ${hobby}.`);
        })
}

hobbies("coding, reading, cooking")




//Question# 50. Multiline Template Literals
let myIdealDay = `My ideal day would involve:
1. Waking up early and going for a joging.
2.Spend a few hours coding on  a project .
3.Ending the day by reading a good book.`
console.log(myIdealDay);

//Question # 51. Refracting to Arrow Functions..
function calculateArea(width:number, height:number):number {
    return width * height


}
let calculateAreaArrow =(width:number, height:number): number =>width*height
console.log(calculateAreaArrow(5,7));