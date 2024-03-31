//Day16-100 days of coding chellenge by sir Asharib Ali.
// Question#46;Enhanced laptop object....
//import {describe} from"node:test";
//let laptop ={
 //   make: "Dell",
    //model: "xps I5",
    //: 2020,
    //describe: function(){
       // console.log(`This laptop is a ${this.year} ${this.make}${this.model}.`);
    //}
    

    
//};
//laptop.describe();


//Question#47
//Advanced Array....Dstructuring:Given an array of object..
let laptops = [
    {make: "Dell", model: "abc I5", year: 2022},
    {make: "HP", model: "spectre x360", year: 2021},
    {make: "samsung", model: "xps e634", year: 2020},
    
];
let[laptop1 , laptop2] = laptops;
console.log(laptop1);
console.log(laptop2);

    





    
    
    
    
    
    



//Question#48:combining Array with spread operators...
let priceSet1 =[1200,1500,1100]
let priceSet2 =[1000,1600,1300]
let combinePrices =[...priceSet1,...priceSet2].sort((a,b) => a-b)
console.log(combinePrices);
