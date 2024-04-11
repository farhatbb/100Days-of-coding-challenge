//Question # 31 : No User..
let usernames: string[]=[]
if(usernames.length === 0) {
    console.log("We need to find some users!")

} else {
    //Greet users
}

//Question # 32: 
//checking usernames..
let current_users: string[] = ["user1","admin","user3","user4","user5"]
let new_users: string[] = ["user1","user6","user7","admin","user9"]
new_users.forEach(new_users =>
    {
        if
        (current_users.some(current_users =>
            current_users.toLowerCase()===new_users.toLowerCase())) {
                console.log(`${new_users}will need to enter a new username.`)
            } else {
                console.log(`${new_users} is available.`);
            }
        
    })
    
//Question # 33 
// Ordinal Numbers:
let numbers: number[] = [1,2,3,4,5,6,7,8,9]
numbers.forEach(number => {
    let suffix = "th"
    if (number === 1){
        suffix = "st"

    }else if (number === 2){
        suffix = "nd"
} else if (number === 3)
    {
        suffix = "rd"
    }
    console.log(`${number} ${suffix}`);

})