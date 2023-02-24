'use strict';
/*
// For the 'Guess Number' Section -------------------------- //
console.log(document.querySelector('.message').textContent); //this is exactly like we'd select the same Element in CSS. The '.' is because it's a class, if it would be an ID then the '#' is needed.

document.querySelector('.message').textContent = '🎉 Correct Number!';

// For Correct Number Section -------------------------- //
document.querySelector('.number').textContent = 13;

// For the 'Score' Section -------------------------- //
document.querySelector('.score').textContent = 10;

// For the 'Input' Section -------------------------- //
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value); //with an input field, to get the actual value, we use the 'Value' property
*/

// For the 'Check' Button -------------------------- //
/*
const printNumber = function () {
  console.log(document.querySelector('.guess').value);
};

document.querySelector('.check').addEventListener('click', printNumber);
//the addEventListener requieres two arguments; first, the event that will triger the action, and the action, that is a function.  Due tue functions are values, they can by passed by to other functions as arguments. In this case we are using the 'printNumber' variable (which contains a function).
*/

// To define the random number ----------------------------------------------- //
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = secretNumber; //this should be commented out when finised

// To handle the score  ------------------------------------------------------ //
const initialScore = 20;
let score = 20;
let highScore = 0;

// Function that will handle the logic of the input number ------------------- //
const guessedNumber = function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'No number! ⛔️';

    //When player selects the correct number and wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = '30rem';

    //to handle Highscore
    if (highScore < score) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    //When player selects number outside of the range (1 to 20)
  } else if (guess >= 21 || guess == 0) {
    document.querySelector('.message').textContent = 'Not a valid number 👎';
    score--;
    document.querySelector('.score').textContent = score;

    //When player selects a wrong secret number
  } else {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? 'Too High ⬆' : 'Too Low ⬇';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😵 You lost!';
      document.querySelector('.score').textContent = 0;
    }
  }
};

// Function that will handle the logic of the Again button  ------------------- //
const resetGame = function () {
  //Reset initial Values
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  //Return background color
  document.querySelector('body').style.backgroundColor = '#222';

  //Return number box size and hide number again
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';

  //Return 'Start guessing' phrase
  document.querySelector('.message').textContent = 'Start guessing...';

  //Clear input box
  document.querySelector('.guess').value = '';

  //Return score to Maximum
  document.querySelector('.score').textContent = score;

  //Keep Highscore //BUG
};

// Buttons ------------------------------------------------------------------ //

// For the 'Again' Button --------------- //
document.querySelector('.again').addEventListener('click', resetGame);

// For the 'Check' Button -------------- //
document.querySelector('.check').addEventListener('click', guessedNumber);
