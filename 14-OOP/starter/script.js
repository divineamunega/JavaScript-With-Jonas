'use strict';
/*
const Person = function (firstName, birthYear) {
  // Instance Properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never Create a method inside a constructor function

  // this.calcAge = function () {
  //     const currentYear = new Date().getFullYear();
  //      return currentYear -  this.birthYear;
  // }
};

const jonas = new Person(`Jonas`, 1991);
// console.log(jonas);

// When we use the (new) opearator

// 1. A new Empty Object is created
// 2. The function is called with the this === Object created in 1
// 3. THis newly created object is linked to a prototype.
// 4. The function automaticslly returns {};

const matilda = new Person(`Matilda`, 2017);
const jack = new Person(`Jack`, 1975);
// console.log(jonas instanceof Person);

// Prototypes
// Each and every function automatically has a property called property.
/* Every object that is created by a certain constructor function will
 access to all methods and properties on the constructor's prototype property. */

//  console.log(Person.prototype);

/*
Person.prototype.calcAge = function () {
  return new Date().getFullYear() - this.birthYear;
};

// console.log(jonas.calcAge());
// console.log(matilda.calcAge());
// console.log(jack.calcAge());

// console.log(jonas.__proto__);

Person.prototype.species = `Homo Sapiens`;
// console.log(jonas.__proto__.species);

// console.log(jonas.hasOwnProperty(`firstName`));
// console.log(jonas.hasOwnProperty(`species`));

console.log(jonas.__proto__);
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [1,2,3,4,4,4,2,2];

 console.log(arr.__proto__);
 console.log(arr.__proto__.__proto__);

 Array.prototype.unique = function() {
    return [...new Set(this)];
 }

 console.log(arr.unique());

 const h1 = document.querySelector(`h1`);
 console.dir(h1);
 console.dir(v => v + 1); */