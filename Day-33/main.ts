//Question # 97.
//function() "DD-MM-YYY".
function getCurrentDate(): string {
    let currentDate: Date = new Date();
    //get day,month,and year.
    let day: string = String( currentDate.getDate()).padStart(2,'0')
    let month :string=  String(currentDate.getDate() + 1).padStart(2,'0')
    let year : string =  String(currentDate.getDate());

    //format the date.
    let formattedDate: string = `${day}- ${month}-${year}`;
    return formattedDate;
}
let currentDateFormatted: string = getCurrentDate();
console.log(currentDateFormatted); //out put: "22-04-2024"

//Question#98
// create a javascript snippet that calculates and log...
function remainingDays(){
    let now = new Date()
    let newYear = new Date(now.getFullYear()+1,0,1)
    let subtraction = newYear.getTime()-now.getTime()
    let days = Math.floor(subtraction/(1000*60*60*24))
    return days;
        
    
}
console.log("Days left untill new year are"+ remainingDays());

//Question # 99..
//Generate a date object representing your next birthday and log it to the console.
function birthdayDate(month:number , day:number){
    let now = new Date();
    let year=now.getFullYear();
    let birthday = new Date(year,month-1, day)
    if (birthday<now){
        birthday.setFullYear(year+1)
    }
    return birthday
}
let mybirthday = birthdayDate(11,27)
console.log('upcoming Birthday :' +mybirthday.toLocaleDateString());