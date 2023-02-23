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
const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;

const guessedNumber = function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'No number! ⛔️';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
  } else if (guess >= 21) {
    document.querySelector('.message').textContent = 'Not a valid number 👎';
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = 'Too High ⬆';
  } else {
    document.querySelector('.message').textContent = 'Too Low ⬇';
  }

  console.log(guess);
};

document.querySelector('.check').addEventListener('click', guessedNumber);
