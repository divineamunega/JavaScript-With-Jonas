'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

console.log(document.documentElement);
// document.documentElement.style.backgroundColor = `blue`;
console.log(document.body);
const header = document.querySelector(`header`);

document.querySelector(`.header`);
const allSection = document.querySelectorAll(`.section`);
console.log(allSection);

document.getElementById(`#section--1`);
const allButtons = document.getElementsByTagName(`button`);
console.log(allButtons);

console.log(document.getElementsByClassName(`btn`));

const message = document.createElement(`div`);
message.classList.add(`cookie-message`);
// message.textContent = `We use cookies for improved functionalities and analytics.`;
message.innerHTML = `We use cookies for improved functionalities and analytics. <button class='btn btn--close-cookie'>Got It</button>`;
// header.prepend(message);
// header.append(message);

// header.append(message.cloneNode(true)); 

// header.before(message);
header.after(message);
document.querySelector(`.btn--close-cookie`).addEventListener(`click`, function(){
  message.remove();
})