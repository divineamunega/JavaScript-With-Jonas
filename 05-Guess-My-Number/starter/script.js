'use strict';

// console.log(document.querySelector('.message').
// textContent);
// document.querySelector('.message').textContent = 'Correct Number 🥳🎉'
// console.log(document.querySelector('.message').
// textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 'qw'
console.log(`We don't attain excellence without practice.`);

let secretNumber = Math.trunc(Math.random() * 20) + 1; // Creating A random number between 1 and 20
const initialScore = Number(document.querySelector('.score').textContent); //getting the score variable
let scoreValue = initialScore; // Getting the score variable

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = `⛔ No Number`;

    // when player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = `Correct Number 🎉🥳 `;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    // Guess is not equal to secret number
  } else if (guess !== secretNumber) {
    if (scoreValue > 1) {
      document.querySelector('.message').textContent = `${
        guess > secretNumber ? '📈 Too High' : '📉 Too Low'
      }`;
      scoreValue--;
      document.querySelector('.score').textContent = scoreValue;
    } else {
        document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent = `💥 You Lost`;
    }
  }
});

// game reset functionality

document.querySelector('.again').addEventListener('click', function () {
    scoreValue = initialScore;
    document.querySelector('.score').textContent = scoreValue;
    document.querySelector('')
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
