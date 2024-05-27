//Day # 39
//switch statement.Q# 115
function logDayOfWeek(dayNumber:number): void {
   switch (dayNumber) {
    case 1:
        console.log("Sunday");
        break;
        case 2:
            console.log("Moday");
            break;
            case 3:
                console.log("Tuesday");
                break;
                case 4:
                    console.log("Wednesday");
                    break;
                    case 5:
                        console.log("Thursday");
                        break;
                        case 6:
                            console.log("Friday");
                            break;
                            case 7:
                                console.log("Saturday");
                                default:
                                    console.log("Invalid day number");
                                    break;

    }
}
logDayOfWeek(1);//logs sunday.
logDayOfWeek(5);// logs "Thursday"
logDayOfWeek(8);// logs invalid day number.

//question#116.
function  repSeason(monthNumber:number):void{
    switch (monthNumber){
        case  12 :
        case   1:
        case   2:
            console.log("winter");
            break;
            case 3:
            case 4:
            case 5:
                console.log("Spring");
                break;
                case 6:
                case 7:
                case 8:
                    console.log("Summer");
                    break;
                    case 9:
                    case 10:
                    case 11:
                        console.log("Fall");
                        default:
                            console.log("Invalid month number.")
                            break;



    }
}
repSeason(1);//log winter
repSeason(4);//logspring
repSeason(7);//log summer.
repSeason(10);//log fall.
repSeason(13);//log invalid month number


//question#117
function evaluateExpression(expression:string):  string {
    let result:string;
    switch (expression){
        case 'a':
            result = 'Expression  is A';
            break;
            case 'b':
                result = 'Expression is B';
                break;
                case 'c':
                    result = 'Expression is C';
                    break;
                    default:
                        result = 'Expression does not match  any case';
                        break;


    }
    return result;
}
console.log(evaluateExpression('a'));//output ex-A
console.log(evaluateExpression('b'));//  ex -B
console.log(evaluateExpression('c'));// C


