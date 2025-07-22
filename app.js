const prompt = require('prompt-sync')();

console.log('Welcome to the Number Guessing Game!');
console.log("I'm thinking of a number between 1 and 100");

const game = () => {
  const selectedDifficulty = difficulty();
  if (
    selectedDifficulty === '1' ||
    selectedDifficulty === '2' ||
    selectedDifficulty === '3'
  ) {
    console.log('');
    console.log(
      `Great! You have selected the ${
        selectedDifficulty === '1'
          ? 'Easy'
          : selectedDifficulty === '2'
          ? 'Medium'
          : 'Hard'
      } difficulty level.`
    );
    console.log("Let's start the game!");
    console.log('');
    console.log(selectedDifficulty);
  } else {
    game;
  }
};

let difficulty = false;
let selectedDifficulty = null;

console.log('');
console.log('Please select the difficulty level:');
console.log('1. Easy (10 chances)');
console.log('2. Medium (5 chances)');
console.log('3. Hard (3 chances)');
console.log('');

selectedDifficulty = prompt('Enter your choice: ');
let numberOfGuesses =
  selectedDifficulty == 1 ? 10 : selectedDifficulty == 2 ? 5 : 3;

if (selectedDifficulty) {
  const randomNum = Math.floor(Math.random() * 100) + 1;
  console.log(randomNum);
  console.log('');
  console.log('Great! You have selected the Medium difficulty level.');
  console.log("Let's start the game!");
  console.log('');

  for (let I = 0; I < numberOfGuesses; I++) {
    guess = prompt('Enter your guess: ');
    if (guess < randomNum) {
      console.log(`Incorrect! The number is greater than ${guess}.`);
      console.log('');
      guess = prompt('Enter your guess: ');
    } else if (guess > randomNum) {
      console.log(`Incorrect! The number is less than ${guess}.`);
      console.log('');
    } else {
      console.log(`Correct number was ${guess}`);
      return;
    }
  }
  console.log('Want to play again?');
}

// while (difficulty === false) {
//   if (selectedDifficulty == null) {
//   } else {
//     console.log('Choose number between 1 and 3');
//     console.log('');
//     selectedDifficulty = prompt('Enter your choice: ');
//   }

//   if (
//     selectedDifficulty === '1' ||
//     selectedDifficulty === '2' ||
//     selectedDifficulty === '3'
//   ) {
//     difficulty = true;
//     return difficulty;
//   }
// }
// console.log(selectedDifficulty);
// console.log('2a');
