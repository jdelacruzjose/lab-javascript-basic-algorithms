// Iteration 1: Names and Input
let hacker1 = 'Jose'
console.log(`"The driver's name is ${hacker1}"`);

let hacker2 = 'Gianni'
console.log(`"The navigator's name is ${hacker2}"`);
console.log(' ');

// Iteration 2: Conditionals
if(hacker1.length < hacker2.length){
  console.log(`"The driver's has the longest name, it has ${hacker1.length} characters"`);
  } 
if(hacker2.length < hacker1.length){
  console.log(`"It seems that the navigator has the longest name, it has ${hacker2.length} characters"`);
  }
if(hacker1.length === hacker2.length){
  console.log(`'Wow, you both have equally long names, ${hacker1.length} characters!'`)
  }
console.log(' ')

// Iteration 3: Loops
// Print all the characters of the driver’s name, separated by a space and in capitals ie. "J O H N"
for(let i =0; i< 1; i++){
  let thisNewHacker= hacker1.split('').join(' ').toUpperCase()
  console.log(thisNewHacker);
};
console.log(' ');

// Print all the characters of the navigator’s name, in reverse order. ie. "nhoJ"
for(let i =0; i< 1; i++){
  let thisReverseHacker= hacker1.split('').reverse().join('')
  console.log(thisReverseHacker);
};
console.log(' ');


// Depending on the lexicographic order of the strings, print:
if(hacker1 > hacker2){
  console.log(''+ hacker1 +' goes first.')
}
else if (hacker2 < hacker1){console.log('"' + hacker1 + '" goes first definitely "' + hacker2 + '".') 
} 
else {
  console.log('What?! You both got the same name?')
}