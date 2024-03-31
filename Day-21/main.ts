//Day #21.
//Question # 61. Making Enums for vehicles..
enum vehicleType{
    Car,
    Truck,
    Motorcycle
}
console.log(vehicleType.Car);


//Question #62. Making a Student Template...


interface Student {
    name: string
    age: number
    courses: string[]
}
let student: Student={
    name: "Ahmed",
    age: 22,
    courses: ["Math","Science","Urdu"]

}
console.log(student);

//Question # 63. shape shifter..
type Shape ={
    kind: "Circle"| "rectangle"
    radius?: number
    width?: number
    height?: number
}
let Circle: Shape = {
    kind: "Circle",
    radius: 5

}
let rectangle: Shape ={
    kind: "rectangle",
    width: 10,
    height:20,
}
console.log(Circle);
console.log(rectangle);