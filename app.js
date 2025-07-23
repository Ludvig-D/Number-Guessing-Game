const prompt = require('prompt-sync')();

let playing = true;
let selectedDifficulty = '';

console.log('Welcome to the Number Guessing Game!');
console.log("I'm thinking of a number between 1 and 100");

while (playing == true) {
  const randomNum = Math.floor(Math.random() * 100) + 1;

  console.log('');
  console.log('Please select the difficulty level:');
  console.log('1. Easy (10 chances)');
  console.log('2. Medium (5 chances)');
  console.log('3. Hard (3 chances)');
  console.log('');

  selectedDifficulty = prompt('Enter your choice: ');

  if (
    selectedDifficulty == 1 ||
    selectedDifficulty == 2 ||
    selectedDifficulty == 3
  ) {
    console.log(selectedDifficulty);
    let numberOfGuesses =
      selectedDifficulty == 1 ? 10 : selectedDifficulty == 2 ? 5 : 3;

    console.log('');
    console.log(
      `Great! You have selected the ${
        selectedDifficulty == 1
          ? 'Easy'
          : selectedDifficulty == 2
          ? 'Medium'
          : 'Hard'
      } difficulty level.`
    );
    console.log("Let's start the game!");
    console.log('');

    for (let i = 0; i < numberOfGuesses; i++) {
      guess = prompt('Enter your guess: ');
      if (guess < randomNum) {
        console.log(`Incorrect! The number is greater than ${guess}.`);
        console.log('');
      } else if (guess > randomNum) {
        console.log(`Incorrect! The number is less than ${guess}.`);
        console.log('');
      } else if (guess == randomNum) {
        console.log(
          `Congratulations! You guessed the correct number in ${
            i + 1
          } attempts.`
        );
        console.log('');
        break;
      } else {
        console.log('You failed!!!');
        console.log('');
        break;
      }
    }
    console.log('Want to play again? Yes or No');
    let play = prompt('');
    if (play == 'No' || play == 'no') {
      playing = false;
    }
  }
}
