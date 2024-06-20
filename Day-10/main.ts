//question# 28
//Stages of life an if else chain
let age = 24;
//if the person is less than 2 yeras  print message person is baby
if( age < 2){
    console.log(" You are a baby!");
    // if a person at least 2 years old but less than 4,  print  a message person is toddler.


}else if(age >=2 && age < 4){
    console.log("You are a toddler");
}
//if the person is  at least 4 years old but less than 13 ,person is a kid.
else if(age >= 4 && age <13){
    console.log("You are a kid");

} 
// if the person is at least  13 years old  less than 20 . message person is teen ager.
else if (age >= 13 && age < 20){
    console.log("You are  a teenager");
}
//if person is  at least 20 years old but less than 65, message person is a adult.
else if (age >=20 && age < 65){
    console.log("You are an adult");

}
// if person is age 65 or older  message person is  an elder
else if ( age>= 65){
    console.log("You are an elder");

}
//question#29
//favorite fruits.array
let favorite_fruits = ["Mango", "Orange","Strawberry"];
if(favorite_fruits.includes("Mango")){
    console.log("I realy like Mango");
}
if(favorite_fruits.includes("Orange")){
    console.log("I realy like Orange ");

}
if(favorite_fruits.includes("Apple")){


console.log("I realy like Apple");
}
if(favorite_fruits.includes("Strawberry")){
    console.log("I realy like Strawberry");
}
if(favorite_fruits.includes("Banana")){
    console.log("I realy like Banana");
}
//question#30
let userNames = ["Ali","Ayesha", "Admin", " Farhat", "Ahmed"];

userNames.forEach(oneUser =>{
    if(oneUser === "Admin"){
        console.log(`Hello ${oneUser}, would you like to see a status report?`);
    } else {
        console.log(`Hello ${oneUser}, Thank you for logging  in again.`);
    };
});


