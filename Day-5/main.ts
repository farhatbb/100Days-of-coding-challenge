//Question # 13
//favorite transportation...
let favTransportation = [
    {brand: "Toyota Corolla",type: "Car"},
    {brand: "BMX",type:"Bicycle"},
    {brand: "Vespa",type: "Scooter"}
];
let message = "I would like to"
favTransportation.forEach(transport =>{
    console.log(`${message} ${transport.type},${transport.brand}.`);
});


//Question #14