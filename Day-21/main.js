"use strict";
//Day #21.
//Question # 61. Making Enums for vehicles..
var vehicleType;
(function (vehicleType) {
    vehicleType[vehicleType["Car"] = 0] = "Car";
    vehicleType[vehicleType["Truck"] = 1] = "Truck";
    vehicleType[vehicleType["Motorcycle"] = 2] = "Motorcycle";
})(vehicleType || (vehicleType = {}));
console.log(vehicleType.Car);
let student = {
    name: "Ahmed",
    age: 22,
    courses: ["Math", "Science", "Urdu"]
};
console.log(student);
let Circle = {
    kind: "Circle",
    radius: 5
};
let rectangle = {
    kind: "rectangle",
    width: 10,
    height: 20,
};
console.log(Circle);
console.log(rectangle);
