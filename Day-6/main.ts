//question# 16
let guestList: string[]=["usama","Abza","Tania"];
console.log("Good news! we found a bigger table");

//unshift()
guestList.unshift("sadaf");

//splice()
guestList.splice(Math.floor(guestList.length/2),0,"Ali");

//push()
guestList.push("Areeb");
guestList.forEach(gues =>{
    console .log(`Dear ${gues}, you all are invited to dinner.`);
})

//questio# 17
//shirking Guest,
let guestList2:string[]=["Sadaf","Osma","Ali","Abza","Tahiya","Areeb"];
//print messag.
console.log("Unfortuately the new  dinner table won't arrive so we can invite only two guest. ");
//remove guest from the list.
while(guestList.length > 2){
    let removeGuest:string | undefined = guestList.pop();
    if(removeGuest !== undefined){
        console.log(`sorry ${removeGuest}, we can't invite you.`);
    }
}
//message two people
guestList.forEach(guest =>{
    console.log(`Dear ${guest}, you are still invited for the dinner.`);
})
//remove last two names from the list
guestList.splice(0,guestList.length)
//print updated list
console.log("Updated list of guest:",guestList);

//question# 18
//Seeing the World.
let placeToVisit: string[] = ["Paris","Italy","Landon","China","Australia"];
//print in original order
console.log("Orginal order", placeToVisit);
//print array in alphabetical order
console.log("Alphabetical order:",placeToVisit.slice().sort());
//array is still in its original order.
console.log("Orginal order", placeToVisit);
//reverse alpha order
console.log(" Reversealphabetical order:",placeToVisit.slice().sort().reverse());
//print array in its origanal order
console.log("Original order after reverse sorting:", placeToVisit);
//Reverse the order of list
placeToVisit.reverse();
console.log("Reverse order:" , placeToVisit);
//Reverse the order of list again
console.log("Back to original order:" , placeToVisit);
console.log("Sorted in alphbetical order",placeToVisit.slice().sort());
//sort to change
console.log(" stored in reverse alphabetical order:",placeToVisit.slice().sort().reverse());







