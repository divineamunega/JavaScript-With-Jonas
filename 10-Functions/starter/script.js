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


