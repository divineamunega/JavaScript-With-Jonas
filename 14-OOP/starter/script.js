'use strict';

const Person  =  function (firstName, birthYear) {
    // Instance Properties
    this.firstName = firstName;
    this.birthYear = birthYear;

    // Never Create a method inside a constructor function
    
    // this.calcAge = function () {
    //     const currentYear = new Date().getFullYear();
    //      return currentYear -  this.birthYear;
    // }
} 

const jonas  = new Person(`Jonas`,1991);
console.log(jonas);

// When we use the (new) opearator

// 1. A new Empty Object is created
// 2. The function is called with the this === Object created in 1
// 3. THis newly created object is linked to a prototype.
// 4. The function automaticslly returns {};


const matilda = new Person(`Matilda`, 2017);
const jack = new Person(`Jack`,1975);
console.log(matilda.calcAge());
console.log(jonas instanceof Person);
