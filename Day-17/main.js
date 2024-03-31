//Day:17 Question#49
//Function with Rest parameters...
function hobbies() {
    var hobbies = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        hobbies[_i] = arguments[_i];
    }
    hobbies.forEach(function (hobby) {
        console.log("I enjoy ".concat(hobby, "."));
    });
}
hobbies("coding, reading, cooking");
//Question# 50. Multiline Template Literals
var myIdealDay = "My ideal day would involve:\n1. Waking up early and going for a joging.\n2.Spend a few hours coding on  a project .\n3.Ending the day by reading a good book.";
console.log(myIdealDay);
//Question # 51. Refracting to Arrow Functions..
function calculateArea(width, height) {
    return width * height;
}
var calculateAreaArrow = function (width, height) { return width * height; };
console.log(calculateAreaArrow(5, 7));
