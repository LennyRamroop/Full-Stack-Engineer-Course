let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = false;
const age = 18;

if (age > 18 && registeredEarly){
  raceNumber += 1000;
}

if (age > 18 && registeredEarly){
  console.log(`You will be begin your race at 9:30am, your race number is ${raceNumber}.`)
} else if (age > 18 && !registeredEarly) {
  console.log(`You will be begin your race at 11:00am, your race number is ${raceNumber}.`)
} else if (age < 18) {
  console.log(`You will be begin your race at 12:30pm, your race number is ${raceNumber}.`)
} else {
  console.log('Please see registration desk!')
}