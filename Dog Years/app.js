//This variable holds my age
let myAge = 28;

//This variable holds the earlyYears value of 2
let earlyYears = 2;

earlyYears *= 10.5;

//This variable holds my age minus 2 years
let laterYears = myAge - 2;

//Calculating the number of dog years in my later years
laterYears *= 4;

console.log(earlyYears);
console.log(laterYears);

//This is the value of my age in dog years
let myAgeInDogYears = earlyYears + laterYears;

//My name in lowercase letters
let myName = 'Lenny'.toLowerCase();
console.log(myName);

//This statement prints out my name, age and how old I would be in dog years
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)