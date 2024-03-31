//day:20 Question # 58.
//Average Score Calculator...
function average_Score(...Scores: number[]): number{
    let total = Scores.reduce((Sum, Score ) => Sum + Score,0)
    return total / Scores.length


}
console.log(average_Score(80,90,100,70));

//Question # 59: Add aspecial number...
function makeAdder(valueToAdd : number): ( number:number) => number { 
    return function(number:number) : number{
        return number + valueToAdd
    }
}
let addFive = makeAdder(5)
console.log(addFive(10));

//Question # 60.
//Self-Running User Profile...
let userProfile = (function() {
    let name = "Farhat";
    let age = 20;
    return{
        displayInfo: function(){
            console.log(`Name: ${name}, Age:${age}`);
        }
    }
})   ()
userProfile.displayInfo()




