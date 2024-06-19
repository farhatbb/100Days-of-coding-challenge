//question#19
//indicating the number of people you are inviting to dinner.
let guestList : string[] = ["Rehma", "Osama","Abza"]

let lengthGuests:number = guestList.length

console.log(`currently, we are inviting ${guestList.length} geuest.`);
//question#20
let countries: string[] = ["USA","Canada", "Germany", "france","Japan"]
//print list of countries.
countries.forEach(country =>{
    console.log(country);
});

//question#21
//write a program in object.
interface itCourse {
    name: string;
    location: string;
    onsiteStudents: number;

}
let itCourse ={
    name: "Typescript and Javascript",
    location: "Governor House Sindh",
    onsiteStudents: 50000
};
console.log(itCourse);

