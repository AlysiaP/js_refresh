//my age in human years
var myAge = 24;
//early years variable
let earlyYears = 2;
//converting the amount of dog years during initial 2 years per the formula of human to dog years
earlyYears *= 10.5;
//allocated the initial 2 years in dog years, must subtract the 2 initial early years from current age to determine appropriate dog years
var laterYears = myAge - 2;
//multiplying 4 years per year following initial 2 years per the human to dog years formula
laterYears *= 4;
//adding everything together now
myAgeInDogYears = earlyYears + laterYears;
//my name all lowercase
myName = 'Alysia'.toLowerCase();
//printing out the statement that shows my name, age, and dog age
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);