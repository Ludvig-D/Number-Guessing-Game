const readline = require('readline');

console.log('Welcome to the Number Guessing Game!');
console.log("I'm thinking of a nnumber between 1 and 100");
console.log('');

console.log('Please select the difficulty level:');
console.log('1. Easy (10 chances)');
console.log('2. Medium (5 chances)');
console.log('3. Hard (3 chances)');

console.log('');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
