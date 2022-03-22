//it is a replacement of multiple if else condition
let day=7;
switch(day){
    case 0:
        console.log("sunday");
        break;
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wed");
        break;
    case 4:
        console.log("thur");
        break;
    case 5:
        console.log("fri");
        break;
    case 6:
        console.log("sat");
        break;
    default:
        console.log("invalid day");
}

//using break is imp if we dont write break then if day match with any of the day 
// it will be printed on the top and after that all day will be orinted exept days on top of it