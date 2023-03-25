'use strict';
/*
 console.log(document.querySelector('.message').
 textContent);
 document.querySelector('.message').textContent = 'Correct Number 🥳🎉'
 console.log(document.querySelector('.message').
 textContent);

 document.querySelector('.number').textContent = 13;
 document.querySelector('.score').textContent = 10;
 console.log(document.querySelector('.guess').value);
 document.querySelector('.guess').value = 'qw'
*/
console.log(`We attain excellence with practice.`);

const body = document.querySelector('body'); // Selecting the body

let secretNumber = Math.trunc(Math.random() * 20) + 1; // Creating A random number between 1 and 20
const number = document.querySelector('.number'); // Selecting the unkown number parent element

const score = document.querySelector('.score'); // selecting the score's Parent element
const initialScore = Number(score.textContent); //getting the score variable
let scoreValue = initialScore; // Getting the score variable

const message = document.querySelector('.message'); // selecting the message's parent
const initialMessage = message.textContent;

let highScore = 0; // Setting the initial highscore to 0.

const againBtn = document.querySelector('.again'); // Selecing the again btn
const guess = document.querySelector('guess');

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // When there is no input
  if (!guess) {
    message.textContent = `⛔ No Number`;

    // when player wins
  } else if (guess === secretNumber) {
    message.textContent = `Correct Number 🎉🥳 `;
    body.style.backgroundColor = '#60b347';
    number.style.width = '30rem';
    number.textContent = secretNumber;
    if (scoreValue > highScore) {
      highScore = scoreValue;
      document.querySelector('.highscore').textContent = highScore;
    }

    // Guess is not equal to secret number
  } else if (guess !== secretNumber) {
    if (scoreValue > 1) {
      message.textContent = `${
        guess > secretNumber ? '📈 Too High' : '📉 Too Low'
      }`;
      scoreValue--;
      score.textContent = scoreValue;
    } else {
      score.textContent = 0;
      message.textContent = `💥 You Lost`;
      body.style.backgroundColor = 'red';
    }
  }
});

// game reset functionality

againBtn.addEventListener('click', function () {
  scoreValue = initialScore; // Setting the score back to the initial score
  score.textContent = scoreValue; // Modifying the DOM with the current score.
  secretNumber = Math.trunc(Math.random() * 20) + 1; // Making another Random number
  body.style.backgroundColor = '#222'; // Changing the background color back to #222;
  message.textContent = initialMessage; // Changing the message back to the initial message
  number.style.width = '15rem'; // Reducing the width back to 15rem
  number.textContent = '?'; // Changing the the guessed number back to unkown
  guess.value = '';
});
