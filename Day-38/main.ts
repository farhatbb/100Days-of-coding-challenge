//Question #112
let cuntryCapitalMap = new Map<string, string>();
// countries names with capital..
cuntryCapitalMap.set("USA","Washington,D.C.");
cuntryCapitalMap.set("Germany", "Berlin");
cuntryCapitalMap.set("Japan", "Tokyo");
console.log(cuntryCapitalMap);
//Question #113
function checkForCanada(map:Map<string,string>):void{
    if (map.has("Canada")){
        console.log(`The capital of Canada is ${map.get("Canada")}.`);
    }else {
        console.log("Canada is not in the map.");
    }
    
}
checkForCanada(cuntryCapitalMap);
//Question #114.
let studentMap = new Map<number, string>();
studentMap.set(1,"Ahmed");
studentMap.set(2,"Aban");
studentMap.set(3,"Frass");
studentMap.forEach((name, id) =>{
    console.log(`Student ID: ${id}, Name: ${name}`);
    
});