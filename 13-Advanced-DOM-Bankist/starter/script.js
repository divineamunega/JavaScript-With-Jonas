'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector(`.btn--scroll-to`);

///////////////////////////////////////
// Modal window
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
  document.documentElement.style.overflow = 'hidden';
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
  document.documentElement.style.overflow = 'auto';
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

///////////////////////////////
// Button Scrolling

btnScrollTo.addEventListener(`click`, function (e) {
  const section1 = document.querySelector(`#section--1`);
  const s1coords = section1.getBoundingClientRect();
  section1.scrollIntoView({ behavior: `smooth` });
});

///////////////////////////////////
// Page Navigation

// document.querySelectorAll(`.nav__link`).forEach((el)=>{
//   el.addEventListener(`click`,function(e){
//     e.preventDefault();
//     const id = this.getAttribute(`href`);
//     document.querySelector(id).scrollIntoView({behavior:`smooth`})
//   })
// })

// 1. Add eventListener to common parent elements
// 2. Determine the element where that event originated
document.querySelector(`.nav__links`).addEventListener(`click`, function (e) {
  e.preventDefault();

  // Matching Strategy
  if (e.target.classList.contains(`nav__scroll`)) {
    const id = e.target.getAttribute(`href`);
    document.querySelector(id).scrollIntoView({ behavior: `smooth` });
  }
});

// Tabbed Components
const tabs = document.querySelectorAll(`.operations__tab`);
const tabContainer = document.querySelector(`.operations__tab-container`);
const tabsContent  = document.querySelectorAll(`.operations__content`);

// Event Delegation
tabContainer.addEventListener(`click`, function(e){
  const clicked = e.target.closest(`button`);

  // Guard Clause
  if(!clicked) return;

  tabs.forEach(tab => tab.classList.remove(`operations__tab--active`));
  clicked.classList.add(`operations__tab--active`);


  // Activate content area
  tabsContent.forEach(tabcontent => tabcontent.classList.remove(`operations__content--active`));
  document
    .querySelector(`.operations__content--${+clicked.dataset.tab}`)
    .classList.add(`operations__content--active`);
})
//////////////////////////////
// Creating Selecting and deleting elements
/*
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
*/

////////////////////////////////////////
// Set Attriibutes and Styles
/*
header.after(message);
document
  .querySelector(`.btn--close-cookie`)
  .addEventListener(`click`, function () {
    message.remove();
  });

// Styles
message.style.backgroundColor = `#37383d`;
message.style.width = `100%`;

console.log(message.style.height);

console.log(getComputedStyle(message).color);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + `px`;

document.documentElement.style.setProperty(`--color-primary`, `orangered`);

// Atributes
const logo = document.querySelector(`.nav__logo`);
console.log(logo.alt);
console.log(logo.className);
console.log(logo.getAttribute(`designer`));
logo.alt = `Beautiful Minimalist Logo`;
logo.setAttribute(`company`, `Bankist`);

console.log(logo.src);
console.log(logo.getAttribute(`src`));

const link = document.querySelector(`.nav__link--btn`);
console.log(link.href);
console.log(link.getAttribute(`href`));

// Data Attributes
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add(`c`, `j`);
logo.classList.remove(`c`, `j`);
logo.classList.toggle(`c`);
logo.classList.contains(`c`); // Not Includes

// Dont use
logo.className = `Jonas`;
*/
// section--1 btn--scroll-to

/*const btnScrollTo = document.querySelector(`.btn--scroll-to`);
btnScrollTo.addEventListener(`click`, function (e) {
  const section1 = document.querySelector(`#section--1`);
  const s1coords = section1.getBoundingClientRect();
  // console.log(section1.clie);
  // console.log(this.getBoundingClientRect());
  // console.log(s1coords);
  // console.log(window.scrollY);
  // console.log(window.pageYOffset);

  // console.log(`Current scroll (X/Y)`, window.scrollX, scrollY);

  // console.log(
  //   `ViewPort Height / Viewpoert Width`,
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  // );

  // Scrolling

  // window.scrollTo({
  //   left: s1coords.left + window.scrollX,
  //   top: s1coords.top + window.scrollY,
  //   behavior: `smooth`
  // });

  section1.scrollIntoView({ behavior: `smooth` });
});*/

//////////////////////////////////
// Types of Events and event handlers

/*
const h1 = document.querySelector(`h1`);

const alerth1 = function (e) {
  alert(
    `addEventListener: Great! You are reading the heading :D`
  );

  h1.removeEventListener(`mouseenter`, alerth1)
};

h1.addEventListener(`mouseenter`,alerth1);


// h1.onmouseenter = function (e) {
//   alert(
//     `addEventListener: Great! You are reading the heading :D ${this.textContent}`
//   );
// };
*/

// rgb(255,255,255)

//////////////////////////////////////////////////////
// Event Capturing and Bubling
/*
const randomInt = (min, max) => {
  const random = Math.random() * (max - min + 1) + min;
  return Math.floor(random);
};

const randomColor = () =>
  `rgba(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0,10)})`;
console.log(randomColor());

document.querySelector(`.nav__link`).addEventListener(`click`, function(e) {
  this.style.backgroundColor = randomColor();
  console.log(`Link`, e.target);
  // e.stopPropagation();
});

document.querySelector(`.nav__links`).addEventListener(`click`, function(e) {
  this.style.backgroundColor = randomColor();
  console.log(`Nav_container`, e.target);
});

document.querySelector(`.nav`).addEventListener(`click`, function(e) {
  this.style.backgroundColor = randomColor();
  console.log(`Navbar`, e.target);
});*/

/////////////////////////////////////////

//////////////////////////////////////////////////
// DOM Traversing
/*
const h1 = document.querySelector(`h1`);

// Going Downwards: child
console.log(h1.querySelectorAll(`.highlight`));
console.log(h1.childNodes);
console.log(h1.children);
console.log(h1.firstElementChild.style.color = `white`);
h1.lastElementChild.style.color = `orangered`

// Going Upwards
console.log(h1.parentNode);
console.log(h1.parentElement);

console.log(h1.closest(`.header`).style.background = `rgb(0,0,0)`);
console.log(h1.closest(`h1`).style.background = `rgb(0,0,0)`);

// Going SideWays
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach((el)=>{
  if(el !== h1){
    el.style.transform = 0.1;
  }
})
*/
