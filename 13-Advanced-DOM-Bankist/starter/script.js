'use strict';
const nav = document.querySelector(`.nav`);
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector(`.btn--scroll-to`);
const tabs = document.querySelectorAll(`.operations__tab`);
const tabContainer = document.querySelector(`.operations__tab-container`);
const tabsContent = document.querySelectorAll(`.operations__content`);

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
tabContainer.addEventListener(`click`, function (e) {
  const clicked = e.target.closest(`button`);

  // Guard Clause
  if (!clicked) return;

  tabs.forEach(tab => tab.classList.remove(`operations__tab--active`));
  clicked.classList.add(`operations__tab--active`);

  // Activate content area
  tabsContent.forEach(tabcontent =>
    tabcontent.classList.remove(`operations__content--active`)
  );
  document
    .querySelector(`.operations__content--${+clicked.dataset.tab}`)
    .classList.add(`operations__content--active`);
});

const handleHover = function (e) {
  if (e.target.classList.contains(`nav__link`)) {
    const link = e.target;
    const siblings = link.closest(`.nav`).querySelectorAll(`.nav__link`);
    const logo = link.closest(`.nav`).querySelector(`img`);

    siblings.forEach(sib => {
      if (sib !== link) {
        sib.style.opacity = this;
      }
    });

    logo.style.opacity = this;
  }
};

// Menu Fade Animation
nav.addEventListener(`mouseover`, handleHover.bind(0.5));
nav.addEventListener(`mouseout`, handleHover.bind(1.0));

// Nav Sticky
const header = document.querySelector(`.header`);
const navHeight = nav.getBoundingClientRect().height;
const stickyNav = function (entries) {
  const [entry] = entries;
  entry.isIntersecting || nav.classList.add(`sticky`);
  entry.isIntersecting && nav.classList.remove(`sticky`);
};
const options = {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
};

const headerObserver = new IntersectionObserver(stickyNav, options);

headerObserver.observe(header);

// Reveal Sections

const sectionOptions = {
  root: null,
  threshold: 0.15,
};

const sectionCallback = function (entries, observer) {
  entries.forEach(ent => {
    if (!ent.isIntersecting) return;
    ent.target.classList.remove(`section--hidden`);
    observer.unobserve(ent.target);
  });
};
const sectionObserver = new IntersectionObserver(
  sectionCallback,
  sectionOptions
);
const allSections = document.querySelectorAll(`section`);

allSections.forEach(section => {
  section.classList.add(`section--hidden`);
  sectionObserver.observe(section);
});

// Lazy Loading Images
const allLazyImages = document
  .querySelector(`#section--1`)
  .querySelectorAll(`.features__img`);

const lazyLoad = function (entries, observer) {
  const [ent] = entries;
  if (!ent.isIntersecting) return;
  ent.target.src = ent.target.dataset.src;
  ent.target.addEventListener(`load`, function () {
    ent.target.classList.remove(`lazy-img`);
  });
  observer.unobserve(ent.target);
};

const lazyImgObserver = new IntersectionObserver(lazyLoad, {
  root: null,
  threshold: 0.8,
  rootMargin: `200px`,
});

allLazyImages.forEach(lazyImg => lazyImgObserver.observe(lazyImg));

// Slider Component
const slider = function () {
  const btnLeft = document.querySelector(`.slider__btn--left`);
  const btnRight = document.querySelector(`.slider__btn--right`);
  const slides = document.querySelectorAll(`.slide`);
  const dotContainer = document.querySelector(`.dots`);

  let currSlide = 0;
  const maxSlide = slides.length;

  // Functions
  const createDots = function () {
    slides.forEach((_, i) => {
      dotContainer.insertAdjacentHTML(
        `beforeend`,
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    const dots = document.querySelectorAll(`.dots__dot`);
    dots.forEach(dot => dot.classList.remove(`dots__dot--active`));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add(`dots__dot--active`);
  };

  const gotoSlide = function (slide) {
    slides.forEach((s, i) => {
      s.style.transform = `translateX(${[i - slide] * 100}%)`;
    });
    activateDot(slide);
  };

  // Next Slide
  const nextSlide = function () {
    currSlide = currSlide === maxSlide - 1 ? 0 : currSlide + 1;
    gotoSlide(currSlide);
  };

  // Previous Slide
  const prevSlide = function () {
    currSlide = currSlide === 0 ? maxSlide - 1 : currSlide - 1;
    gotoSlide(currSlide);
  };

  const init = function () {
    createDots();
    gotoSlide(0);
  };
  init();

  btnRight.addEventListener(`click`, nextSlide);

  btnLeft.addEventListener(`click`, prevSlide);

  document.addEventListener(`keydown`, function (e) {
    e.key === `ArrowRight` && nextSlide();
    e.key === `ArrowLeft` && prevSlide();
  });

  dotContainer.addEventListener(`click`, function (e) {
    if (e.target.classList.contains(`dots__dot`)) {
      const slide = e.target.dataset.slide;
      currSlide = +slide;
      gotoSlide(currSlide);
    }
  });
};
slider();

/*
// Sticky Navigation
const initialCoords = section1.getBoundingClientRect();
console.log(initialCoords);

window.addEventListener(`scroll`, function (e) {
  console.log(window.scrollY);

  if (this.window.scrollY > initialCoords.top) nav.classList.add(`sticky`);
  else nav.classList.remove(`sticky`);
});
*/
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
  // });`

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
/*
const observerCallback = function (entries, observer) {
  entries.forEach(ent => console.log(ent));
};

const obsOptions = {
  root: null,
  threshold: [0,0.2],
};

const observer = new IntersectionObserver(observerCallback, obsOptions);
observer.observe(``)
*/
// console.log(observer);

// const addNumber = num =>{
//   const strArr = `${num}`.split('');
//   const numArr = [];
//   let acc = 0;
//   for( const [i,num] of strArr.entries()){
//     numArr.push(+num);
//     acc = acc + numArr[i];
//   }
//   return acc;
// }

// console.log(addNumber(1002));

/*
document.addEventListener(`DOMContentLoaded`, function(e){
  console.log(`Dom event loaded`,e);
})

window.addEventListener(`load`, function(e){
  console.log(`page fully loaded`,e);
})
*/
// window.addEventListener(`beforeunload`,function(e){
//   e.preventDefault();
//   console.log(e);
//   e.returnValue = ``;
// })