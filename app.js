const prompt = require('prompt-sync')();

console.log('Welcome to the Number Guessing Game!');
console.log("I'm thinking of a nnumber between 1 and 100");

const difficulty = () => {
  console.log('');
  console.log('Please select the difficulty level:');
  console.log('1. Easy (10 chances)');
  console.log('2. Medium (5 chances)');
  console.log('3. Hard (3 chances)');
  console.log('');

  const selectDifficulty = prompt('Enter your choice: ');
  return selectDifficulty;
};

const game = () => {
  const selectedDifficulty = difficulty();
  const randomNum = Math.floor(Math.random() * 100) + 1;
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
  } else {
    game();
  }
};

game();
