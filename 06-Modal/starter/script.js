'use strict';

const modal = document.querySelector('.modal'); // Selecting the modal window
const overlay = document.querySelector('.overlay'); // Selecting the overlay
const btnCloseModal = document.querySelector('.close-modal'); // Selcting the close btn for the modal
const btnsShowModal = document.querySelectorAll('.show-modal'); // selceting the open modals btn

// console.log(btnsShowModal);

// A function to show Items
const showItems = function (element) {
  element.classList.remove('hidden');
};

// A function to Hide Items
const hideItems = function (element) {
  element.classList.add('hidden');
};

// A function to open the modal
const openModal = function () {
  showItems(modal);
  showItems(overlay);
};

// A function to close the modal
const closeModal = function () {
  hideItems(modal);
  hideItems(overlay);
};

//Running a loop on each btnsShowModal
for (let i = 0; i < btnsShowModal.length; i++) {
  // Opening the modal on clic of the btnsShowModal
  btnsShowModal[i].addEventListener('click', openModal);
}

// Closing the modal on click of the overlay and the btnCloseModal
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// Adding a keypress event listener to the key 'esc'
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
 