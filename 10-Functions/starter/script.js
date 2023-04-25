'use strict';

////////////////////////////////////////////////
// Default Parameters
/*
const bookings = [];

const createBooking = function(flightNum,numPassengers = 1, price = 199 * numPassengers){
    // ES5
    // numPassengers = numPassengers || 1;
    // price = price || 199;


    const booking = {
        flightNum,
        numPassengers,
        price,
    }
    console.log(booking);
    bookings.push(booking);
    console.log(bookings);
}

createBooking(`LH23`);
createBooking(`LH123`,2,800);
createBooking(`LH123`,2);
createBooking(`LH123`,5);

createBooking(`LH123`, undefined, 1000);
*/

////////////////////////////////////////
// How Passing Arguments Work
/*
const flight = `LH234`;
const jonas = {
  name: `Jonas Schmedtmann`,
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = `LH999`;
  passenger.name = `Mr.` + passenger.name;

  if (passenger.passport === 24739479284) {
    alert(`Check In`);
  } else {
    alert(`Wrong Password`);
  }
};
checkIn(flight, jonas);

// It is the same as doing...
console.log(flight);
console.log(jonas);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000000000);
};

newPassport(jonas);
checkIn(flight, jonas);

*/

///////////////////////////////////////////
// Functions Accepting Callback Functions
/*
const oneWord = function (str) {
  return str.replaceAll(` `, ``).toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(` `);
  return [first.toUpperCase(), ...others].join(` `);
};

// Higher Order Function
const transformer = function (str, fn) {
  console.log(`Original String: ${str}`);
  console.log(`Transformed String: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
  console.log(typeof fn);
};

transformer(`JavaScript is the best`, upperFirstWord);
transformer(`JavaScript is the best`, oneWord);

// JS uses call backs all the time 🥲
const high5 = function () {
  console.log(`👋`);
};

document.body.addEventListener(`click`, high5);

[`Jonas`, `Martha`, `Adam`].forEach(high5);

// Write a function that takes a callback as an argument and calls that callback with the string "hello" when invoked.

const callback1 = function(str){
  console.log(str);
}
const callWithHello = function (callback) {
  callback('hello');
};

callWithHello(callback1);

// Write a function that takes two numbers and a callback, and calls the callback with the result of adding the two numbers together.

const callBack2 = function(a){
  console.log(a);
}
const addNumbers = function (a, b, callback) {
  callback(a + b);
}

addNumbers(2,3,callBack2);
*/

//////////////////////////////////
// Functions Returning Functions 😪

/*
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greet = greeting => {
//   return name => {
//     console.log(`${greeting} ${name}`);
//   };
// };

const greet = greeting => name => console.log(`${greeting}, ${name}`);

 
const greeterHey = greet(`Hey`);
console.log(greeterHey);
greeterHey(`Jonas`);
greeterHey(`Steven`);

greet(`Hello`)(`Divine`);
*/

/////////////////////////////
// The call and apply Methods
/*
const luftahansa = {
  airline: `Luftahansa`,
  iataCode: `LH`,
  bookings: [],

  book(flightNum, name) {
    // console.log(this);
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    console.log(this.bookings);
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
    // console.log(this.bookings);
  },
};

luftahansa.book(239, `Jonas Schmedtmann`);
luftahansa.book(635, `John Smith`);

// console.log(luftahansa);
const eurowings = {
  airline: `Eurowings`,
  iataCode: `EW`,
  bookings: [],
};

const book = luftahansa.book;

// Does Not Work
// book(23,`Sarah Williams`)

// Call Method
book.call(eurowings, 23, `Sarah Williams`);
// console.log(eurowings);

book.call(luftahansa, 239, `Mary Cooper`);

const swiss = {
  airline: `Swiss Air Lines`,
  iataCode: `LX`,
  bookings: [],
};

book.call(swiss, 583, `Mary Cooper`);

// Apply Method
const flightData = [283, `George Cooper`];
book.apply(swiss, flightData);
// console.log(swiss);

book.call(swiss, ...flightData);
*/

/////////////////////////////////////
// Bind Method
/*
const bookEW = book.bind(eurowings);
const bookLH = book.bind(luftahansa);
const bookSW = book.bind(swiss);
bookEW(23, `Steven Williams`);

const bookEW23 = book.bind(eurowings, 23);
bookEW23(`Divine Amunega`);
bookEW23(`Martha Cooper`);


// With Event Listeners
luftahansa.planes = 300;
luftahansa.buyPlane = function() {
  console.log(this);

  this.planes++;
  console.log(this.planes);
}

document.querySelector(`.buy`).addEventListener(`click`, luftahansa.buyPlane.bind(luftahansa));


// Partial Application

const addTax = (rate, value) => value + value * rate;
const addVAT = addTax.bind(null,0.23);

console.log(addVAT(100));

const addTax1 = function(rate,value){
  
  const addVAT = addTax1.bind(null, rate)
  return addVAT;
}
const addVat1 = addTax1(12,2);
*/

////////////////////////////////////
// Coding Challenge 1 😪
/*
const poll = {
  question: `What is your favourute programming language?`,
  options: [`0 : JavaScript`, `1: Python`, `2: Rust`, `3: C++`],
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    const optionPrompt = prompt(
      `What is your favourite programming language? \n 0:  JavaScript \n 1:  Python \n 2:  Rust \n 3:  C++ \n (Write Option Number)`
    );
    const option = Number(optionPrompt)

    if (isNaN(option) || option > 3 || option < 0) {
      alert(`Input A valid option`);
    } else {
      this.answers[Number(option)]++;
    }

    this.displayResults(`string`);
  },

  displayResults(type = `array`){
    type === `array` && console.log(this.answers);
    type === `string` && console.log(`Poll results are ${[this.answers.join(`, `)]}.`);

    console.log(bonusTestData1);
  }
};

const bonusTestData1 = [5, 2, 3];
document.querySelector(`.poll`).addEventListener(`click`, poll.registerNewAnswer.bind(poll));
*/

/////////////////////////////////////
// Immediately Invoked Functions

/*
const runOnce = function () {
  console.log(`THis will never run again`);
};
runOnce();

(function () {
  console.log(`This will never run again.`);
})();

(() => console.log(`This will also never run again.`))();
*/




/////////////////////////////////////////
// Closures

/*
const secureBooking = function(){
  let passengerCount = 0;
  return function(){
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
}
const booker  = secureBooking();
booker()
booker()
booker()

console.dir(booker);
*/

//////////////////////////////////////
// More Closure Examples

/*
// Exammple 1
let f;

const g = function(){
  const a = 23;

  f = function () {
    console.log(a * 2);
  }
}

const h = function() {
  const b = 777;
  f = function () {
    console.log(b * 2);
  }
}
g();
f();
console.dir(f);

// Re-assigning f function
h();
f();
console.dir(f);

// Example 2
const boardPassengers = function (n,wait) {
  const perGroup = n/3;

  setTimeout(function(){
    console.log(`We are now boarding all ${n} passengers.`);
    console.log(`There are 3 gruops, each with ${perGroup} passengers`);
  }, wait * 1000)
  console.log(`Will start boarding in ${wait} seconds.`);
}

const perGroup = 1000;
boardPassengers(180, 3);
*/

//////////////////////////////////////
// Coding Challenge 2

(function (){
  const header = document.querySelector(`h1`);
  header.style.color = `red`;

  document.querySelector('body').addEventListener(`click`, function(){
    header.style.color = `blue`;
  })
}())

