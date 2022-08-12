const input = 'turpentine and turtles';
const vowels = ['a', 'e', 'i', 'o', 'u'];
const resultArray = [];

for(let i = 0; i < input.length; i++){
  if(input[i] === 'e' || input[i] === 'u'){
    resultArray.push(input[i]);
  };
  for(let x = 0; x < vowels.length; x++){
    if(input[i] === vowels[x]){
      resultArray.push(input[i]);
    }
  }
}

let resultString = resultArray.join('').toUpperCase()
console.log(resultString);