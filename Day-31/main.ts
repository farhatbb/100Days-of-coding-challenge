//Question #91.
//.push() method..
let favoriteFruits: string[] = ["apple","banana","orange"];
//add a new fruit to using a push()method
favoriteFruits.push("Cheery");
console.log(favoriteFruits);

//Question # 92.
//.pop() method..
function removedLastElement(arr:[]): undefined {
    return arr.pop();

}
const array: string[] = ["apple","banana","orange","cheery","grapes"];
const removedElement = removedLastElement([]);

console.log("removed element:",removedLastElement);

//Question # 93.
//indexof() method.
let fruits: string[] = ["Apple","Banana","Orange","Grapes"];
const index = fruits.indexOf("Banana");
if (index !== -1){
    fruits[index] = "Mango";
    console.log("Index of 'Banana' found at:", index);
    console.log("Updated fruits array:",fruits);
}else {
    console.log("Sorry, 'Banana' not found in the array.");
}

