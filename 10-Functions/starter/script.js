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

