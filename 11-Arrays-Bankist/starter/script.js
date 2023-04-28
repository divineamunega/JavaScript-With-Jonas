'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {

  containerMovements.innerHTML = ``;
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? `deposit` : `withdrawal`;

    const html = `
    <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__value">${Math.abs(mov)}</div>
        </div>`;


    containerMovements.insertAdjacentHTML(`afterbegin`,html);

  });
};
displayMovements(account1.movements);

// console.log(containerMovements.innerHTML);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

////////////////////////////////////////////
// SIMPLE ARRAY METHODS
/*
let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE
console.log(`--------------SLICE--------------------`);
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);
console.log(`----------SPLICE------------------`);
// console.log(arr.slice(1, -1));


// SPLICE 
// console.log(arr.splice(2));
arr.splice(-1)
console.log(arr);
arr.splice(1,2);
console.log(arr);

// REVERSE
arr =  [`a`,`b`,`c`,`d`,`e`];
const arr2 = [`j`, `i`, `h`, `g`, `f`];
console.log(arr2.reverse());
console.log(arr2);

// CONCAT
const letters = arr.concat(arr2);
console.log(letters);

console.log([...arr, ...arr2]);

// JOIN
console.log(letters.join(`>`));

*/

/////////////////////////////////
// The new at Method ES2022
/*
const arr = [23,11,64];
console.log(arr[0]);
console.log(arr.at(0));


// Getting the last array element
console.log(arr[arr.length -1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

console.log(`Jonas`.at(0));
console.log(`Jonas`.at(0-1));
*/

/////////////////////////////////////////////
// THE FOREACH METHOD

/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const move of movements) {
for (const [i, move] of movements.entries()) {
  console.log(
    `Movement ${i + 1}: ${
      move > 0 ? `You deposited ${move}` : `You withdew ${Math.abs(move)}`
    }`
  );
}

console.log(`---- FOREACH ------`); 
movements.forEach(function (move,i,array) {
  console.log(
    `Movement ${i + 1}: ${
      move > 0 ? `You deposited ${move}` : `You withdew ${Math.abs(move)}`
    }`
  );
});
*/

////////////////////////////////////
// FOREACH FOR MAPS AND SETS
// Map
/*
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// SET

const currenciesUnique = new Set([`USD`, `GBP`, `USD`, `Eur`, `Eur`]);

currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});
*/



/////////////////////////////////////////////
// Coding CHallenge 1

/*
let juliaDogs = [3, 5, 2, 12, 7];
let kateDogs = [4, 1, 15, 8, 3];

const checkDogs = (dogsJulia, dogKate) => {
  const correctDogsJulia = dogsJulia.slice(1,-2);
  
  const dogs = [...correctDogsJulia,...dogKate];
  dogs.forEach(function(age,i){
    console.log(`Dog number ${i + 1} is ${age >= 3 ? `an adult and is ${age} years old.` : `still a puppy 🐶`}`);
  })
};

checkDogs(juliaDogs,kateDogs);

juliaDogs = [9, 16, 6, 8, 3];
kateDogs = [10, 5, 6, 1, 4];
checkDogs(juliaDogs,kateDogs)
*/