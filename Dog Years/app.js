// initializing the variable age as a constant with a value of the user's age
const myAge = 23;

//initializing the value of the early years with a value of 2
let earlyYears =  2;

//multiplying the initial variable of the early years by 10.5
earlyYears *= 10.5;

//
earlyYears = earlyYears

//accounted for the first two years
let laterYears = myAge - 2;

//calculate the number of dog years
laterYears *= 4;
//prints the early years on a new line
console.log(earlyYears);

//prints the later Years on a new line
console.log(laterYears);

//code used in calculating the years of Human in Dog years
let myAgeInDogYears = earlyYears + laterYears;

//prints the Dog Years on a new line
console.log(myAgeInDogYears);

//my name stores the name of the user
let myName = 'Fiifi Appiah'.toLowerCase();


console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);