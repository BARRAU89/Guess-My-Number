'use strict';
// To define the random number ----------------------------------------------- //
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = secretNumber; //this should be commented out when finised

// To handle the score  ------------------------------------------------------ //
const initialScore = 20;
let score = 20;
let highScore = 0;

// Functions set message, reduce score and update score ------------------------//
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const reduceScore = function () {
  score--;
};

const updateScore = function (score) {
  document.querySelector('.score').textContent = score;
};

// Function that will handle the logic of the input number ------------------- //
const guessedNumber = function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('No number! ⛔️');

    //When player selects the correct number and wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
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
    displayMessage('Not a valid number 👎');
    reduceScore();
    updateScore(score);

    //When player selects a wrong secret number
  } else {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too High ⬆' : 'Too Low ⬇');
      reduceScore();
      updateScore(score);
    } else {
      displayMessage('😵 You lost!');
      updateScore(0);
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
  displayMessage('Start guessing...');

  //Clear input box
  document.querySelector('.guess').value = '';

  //Return score to Maximum
  updateScore(score);
};

// Buttons ------------------------------------------------------------------ //

// For the 'Again' Button --------------- //
document.querySelector('.again').addEventListener('click', resetGame);

// For the 'Check' Button -------------- //
document.querySelector('.check').addEventListener('click', guessedNumber);
