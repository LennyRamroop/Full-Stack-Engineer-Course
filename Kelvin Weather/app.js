//This const variable is the forecast of today.
const kelvin = 0;

//The celsius variable holds the value of celsius which is kelvin(293) minus 273
let celsius = kelvin - 273;

//The fahrenheit variable holds to temp in fahrenheit based on the conversion from celsius below:
let fahrenheit = celsius * (9/5) + 32;

//Convert fahrenheit to a whole number, rounded down. reassign value to fahrenheit variable.
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);