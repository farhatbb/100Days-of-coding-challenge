"use strict";
//Day-13.
//Question # 37. large Shirts.
function make_shirt(size = "Large", message = "I love TypeScript") {
    console.log(`Making a ${size} t-shirt with the message"${message}" printed on it.`);
}
make_shirt();
make_shirt("medium");
make_shirt("small", "Dive into coding");
//Question # 38 . Cities..
function describe_City(city, Country = "Paistan") {
    console.log(`${city} is in ${Country}`);
}
describe_City("Karachi");
describe_City("Islamabad");
describe_City("Lahore");
//Question #39. 
//City Names..
function City_Country(City, Country) {
    return `${City},${Country}`;
}
console.log(City_Country("Lahore", "Pakistan"));
console.log(City_Country("Tokyo", "Japan"));
console.log(City_Country("New-Yark", "America"));
