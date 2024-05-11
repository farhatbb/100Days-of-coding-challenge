//Question#109
//"Good Morning" statement..
let currentTime = new Date();
let currentHour = currentTime.getHours();
if (currentHour < 12){
    console.log("GoodMorning")
}

//Question #110
// function that assign grade A,B,C...
function assignGrade(score:number): string {
    if (score >= 90){
        return 'A';
    }else if(score >= 80){
        return 'B';
    }else if(score >= 70){
        return 'C';
    }else if(score >= 60){
        return 'D';
    } else {
        return 'F';
    }
    
}
//example usage:
let studentScore = 85;
let grade = assignGrade(studentScore)
console.log(`The grade for  the student with a score of ${studentScore} is: ${grade}`);

//Question#111.
//use an if-else...
function categorizeAge(age: number): string {
    if (age < 13) {
        return 'Child';

    }else if (age >= 13 && age <= 19){
        return 'Teenager';
    }else {
        return 'Adult';
    }
}

let personAge = 25;
let ageCategory = categorizeAge(personAge);
console.log(`The person, aged ${personAge},falls into the  category: ${ageCategory}`);