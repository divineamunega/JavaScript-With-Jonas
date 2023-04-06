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
let job = `A good Job`;
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

/*-------------------------The This Keyword ------------------------*/

/* console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAge(2000);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAgeArrow(2023);

const jonas = {
  year: 1991,
  calcAge : function(){
    console.log(this);
    console.log(2037 - this.year);
  }
};

jonas.calcAge();

const matilda = {
  year:2017
}

matilda.calcAge = jonas.calcAge;
matilda.calcAge(1991)

const f = jonas.calcAge;

f() */


/** ------------------Regular Functions Vs Arrow Functions-------------------  */


/*  var firstName = `Matilda`;

const jonas = {
  year: 1991,
  firstName:`Jonas`,

  calcAge: function () {
    console.log(2037 - this.year);

    // const self = this; // Self or that
    // const isMillenial = function(){
    //   console.log(self)
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // }

    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillenial();
  },

  greet: function() {  console.log(`Hey ${this.firstName}`)},
  
};

jonas.greet();
jonas.calcAge();

const addExpr = function(a,b){
  console.log(arguments);
  return a + b;
}

var addArrow = (a,b) => {
  console.log(arguments)
  return a + b;
};
addExpr(2, 5, 5)


// When we try to accesss a property that does'nt exist from an object it returns undefined. */
