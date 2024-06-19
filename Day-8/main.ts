//quoestion#22
//Intentional Error.
let errorArray: string[] = ["A","B","C","D"]
//producing error : by accessing invalid index of array
console.log(errorArray[5]);
//errover  remove.
console.log(errorArray[3]);

//question#23
//Conditional Test;
let five = 5;
let ten = 10;
//Test 1
console.log("Test 1: five is equal to 5");
console.log(five == 5);
//Test 2
console.log("Test 2: ten is equal to 10");
console.log(ten== 10);
//Test 3
console.log("test 3: five is not equal  to 10");
console.log(five != 10);
//Test 4
console.log("Test 4: ten is greater then 5");
console.log(ten > 5);
//Test 5
console.log("Test 5:5 is less than 10");
console.log(5<10);
// Test 6
console.log("Test 6: 10 is less than 5")
console.log(ten< 5);
//Test 7
console.log("Test 7: 5 is  equal to 10");
console.log(five == ten);
//Test 8
console.log("Test 8: 10 is not equal to 10");
console.log(ten !==ten);
//Test 9
console.log("Test 9: 5 is greaater than 10");
console.log(five > ten);
//test 10
console.log("test 10: five is not equal to 5");
console.log(5 !== five);

//question # 24
//More Conditional Tests.

//creating a variable
let apple = "apple";
//Test for equality
console.log("apple is equal to apple");
console.log (apple == "apple");
//Test for inequality
console.log("apple is not equal to apple");
console.log(apple != "apple");
//test using  the lower case function
let upperCaseApple = "APPLE"

// Equal to
console.log("APPLE is equal to apple after converting to lowercase");
console.log(upperCaseApple.toLowerCase() == "apple");
//Not equal to
console.log("APPLE is not equal to apple after converting to lowercase");
console.log(upperCaseApple.toLowerCase() != "apple");
//equality and inequalit ,greater than and less than..
let ten1 = 10;
let twenty = 20;
// Equal to
console.log("ten1 is equal to twenty");
console.log(ten == twenty);
//Not equal to
console.log("ten1 is   not equal to twenty");
console.log(ten1!= twenty);
////Greater than >
console.log("twenty is greater than ten1");
console.log(20 >10);
//Less than <
console.log("twenty is less than ten1");
console.log(twenty < 10);
//Greater than or equal to
console.log("twenty is greater than or equal to ten1");
console.log(20 >= 10);
//Less than or equal to
console.log("twenty is less than or equal to ten1");
console.log(20 <= 10);
//Tests  using "and" and  "or" operaters
//&& and
console.log("twenty is not equal to ten1 and twenty is greater than ten1");
console.log(twenty != ten1 && twenty > ten1);

console.log("twenty is not equal to ten1 and ten1 is greater than twenty");
console.log(twenty != ten1 && ten1 > twenty);

//using || (or)
console.log("twenty is greater than  ten1 or twenty is not equal to twenty");
console.log(twenty> ten1 || twenty != twenty);

console.log("twenty is less than  ten1 or twenty is not equal to twenty");
console.log(twenty< ten1 || twenty != twenty);
//Test  an array
let fruits = ["apple" ,"orange", "banana"];
console.log("orange is include in my fruits array");
console.log(fruits.includes ("orange"));
//Test an item is not in array
console.log("orange is not include in my fruits array");
console.log(fruits.includes ("orange"));

























