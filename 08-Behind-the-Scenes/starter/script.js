'use strict';

function calcAge(birthYear) {
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
// console.log(age); Reference Error
