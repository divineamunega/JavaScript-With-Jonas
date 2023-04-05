'use strict';

/*------------------------ Scoping In Practice -----------------------*/

/*  function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in birth ${birthYear}`;
    console.log(output);


    if (birthYear >= 1981 && birthYear <= 1996) {
      const firstName = `Steven`;
      const str = `Oh, and you are a minnenial, ${firstName}`;
      console.log(str);
      var minnenial = true;

      function add(a, b) {
        return a + b;
      }

      const output = `New Output`
    }

    console.log(output)
  }

  

//   console.log(add(2,3));  reference error

//   console.log(str); Reference Error

//   console.log(minnenial) Reference Error
  printAge();
  return age;
}

const firstName = `Jonas`;

calcAge(1991);

// console.log(printAge()); Reference Error
// console.log(age); Reference Error */




/* -------------------------- Hoisting------------------ */

/*
// Hoisting with variables
console.log(me);
// console.log(job);
// console.log(year);
// console.log(divine);

var me = `Divine`;
let job = `😭😭`;
const year = 2007;

// Hoisting with functions

console.log(addDecl(10, 2));
// console.log(adddExpr(10, 2));
// console.log(adddExpr(10, 2));

function addDecl(a, b) {
  return a + b;
}

var adddExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;



if(!numProducts) deleteShoppingCart();
var numProducts = 10;

function deleteShoppingCart(){
    console.log(`All Products deleted`)
}

var x = 1;
let y = 2;
const z = 3;

console.log(x ===  window.x);
console.log(y === window.y);
console.log(z === window.z);
*/