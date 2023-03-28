'use strict';

// Selecting Elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const score = document.querySelectorAll('.score');

const player = document.querySelectorAll('.player');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const currentScore0 = document.getElementById('current--0');
const currentScore1 = document.getElementById('current--1');

let scores,activeValue,currentScore,playing;

const init = function(){
  playing = true;
  scores = [0, 0];
  currentScore = 0;
  document.getElementById(`current--1`).textContent = currentScore;
  document.getElementById(`current--0`).textContent = currentScore;
  player[0].classList.remove('player--winner');
  player[1].classList.remove('player--winner');
  for (let i = 0; i < player.length; i++) {
    score[i].textContent = scores[i];
  }
  activeValue = 0;
  player[0].classList.add('player--active');
  score0El.textContent = 0;
  score1El.textContent = 0;
  diceEl.classList.add('hidden')

}

init()

// Switch Player Functionality
const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activeValue}`).textContent = currentScore;
  activeValue === 0 ? (activeValue = 1) : (activeValue = 0);
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Rolling Dice Functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generate a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    //   console.log(dice);

    // 2 Display the dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    //3. Check if rolled 1; If true switch to the next player
    if (dice !== 1) {
      // Add dice to current Score
      currentScore += dice;
      document.getElementById(`current--${activeValue}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

// User Holds Score Functionality
btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activeValue] += currentScore;
    score[activeValue].textContent = scores[activeValue];

    if (scores[activeValue] >= 100) {
      // Finish the game
      playing = false;
      player[activeValue].classList.remove('player--active');
      player[activeValue].classList.add('player--winner');
      diceEl.classList.add('hidden')
    } else {
      switchPlayer();
    }
  }
});


btnNew.addEventListener('click', init);