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
  owner: 'Divine Amunega',
  movements: [200, 200, 340, 300, -20, 50, 400, -460],
  interestRate: 2.0,
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

const displayMovements = function (movements, sort = false) {
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  containerMovements.innerHTML = ``;
  movs.forEach(function (mov, i) {
    const type = mov > 0 ? `deposit` : `withdrawal`;

    const html = `
    <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__value">${Math.abs(mov).toFixed(2)} €</div>
        </div>`;

    containerMovements.insertAdjacentHTML(`afterbegin`, html);
  });
};

const createUserName = accs => {
  accs.forEach(val => {
    val.username = val.owner
      .toLowerCase()
      .split(' ')
      .map(name => name.at(0))
      .join('');
  });
};

createUserName(accounts);

const calcDisplaySummary = function (account) {
  const incomes = account.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes.toFixed(2)} €`;

  const out = account.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out).toFixed(2)}€`;

  const interest = account.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * account.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)} €`;
};

const calcDisplayBalance = acc => {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
};

const updateUI = function (acct) {
  // Display movements
  displayMovements(acct.movements);

  // Display Balance
  calcDisplayBalance(acct);

  // Display Summarry
  calcDisplaySummary(acct);
};

// Event Handler

let currentAccount;
btnLogin.addEventListener(`click`, function (e) {
  e.preventDefault();
  console.log(`Login`);

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and Welcome Message
    labelWelcome.textContent = `Welcome Back ${currentAccount.owner
      .split(` `)
      .at(0)}`;
    containerApp.style.opacity = 100;

    // Clear Input Fields
    inputLoginPin.value = inputLoginUsername.value = '';
    inputLoginPin.blur();
    inputLoginUsername.blur();

    // Update Ui
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener(`click`, function (e) {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const reciverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );

  inputTransferAmount.value = inputTransferTo.value = ``;

  if (
    amount > 0 &&
    currentAccount.balance > amount &&
    reciverAcc &&
    reciverAcc?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    reciverAcc.movements.push(amount);

    // Update Ui
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener(`click`, function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add the movements
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }

  inputLoanAmount.value = '';
});

btnClose.addEventListener(`click`, function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);

    // Delete Account
    accounts.splice(index, 1);
    containerApp.style.opacity = 0;
    console.log(accounts);
    inputClosePin.value = '';
    inputCloseUsername.value = '';
  }
});

let sorted = false;
btnSort.addEventListener(`click`, function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

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

//////////////////////////////
// The Filter Method
/*
const deposits  = account1.movements.filter(function(mov){
  return mov > 0;
});

console.log(deposits);

const withdrawals = account1.movements.filter(function(val){
  return val < 0;
})
console.log(withdrawals);
*/

/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;

const movementsToUsd = movements.map(mov => mov * eurToUsd);
console.log(movements);
console.log(movementsToUsd);

const movementsUsdfor = [];
for (const mov of movements) {
  movementsUsdfor.push(mov * eurToUsd);
}
console.log(movementsUsdfor);

const movmentDescriptions = movements.map((mov, i) => {
  return `Movement ${i + 1}: You ${
    mov > 0 ? ` deposited ${mov}` : ` withdew ${Math.abs(mov)}`
  }`;
});

console.log(movmentDescriptions);
*/

///////////////////////////////////
// THe Reduce Method
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
/*


// Accumulator => Snowball
const balance = movements.reduce((acc,current) => acc + current,0);
console.log(balance);

let balance2 = 0;
for(const mov of movements){
  balance2 += mov;
}
console.log(balance2);

// Maximum value
const max = movements.reduce((acc,mov) => {
  if(acc > mov){
    return acc;
  }else{
    return mov;
  }
}, movements[0])

console.log(max);
*/

//////////////////////////
// CODING CHALLENGE 2
/*
const calcAverageHumanAge = function (arr) {
  const humanAgeArr = arr
    .map(dogAge => {
      const humanAge = dogAge <= 2 ? dogAge * 2 : 176 + dogAge * 4;
      return humanAge;
    })
    .filter(humanAge => humanAge > 18);

    console.log(humanAgeArr);

  const average = humanAgeArr.reduce((acc, val, i, el) => {
    return acc + val /  el.length;
  },0);

  console.log(average);
};

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
*/

/*
const eurToUsd = 1.1;
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositsUSD);
*/

//////////////////////////////
// CODING CHALLENGE 3

/*
const calcAverageHumanAge = function (arr) {
  const humanAge = arr
    .map(dogAge => {
      const humanAge = dogAge <= 2 ? dogAge * 2 : 176 + dogAge * 4;
      return humanAge;
    })
    .filter(humanAge => humanAge > 18)
    .reduce((acc, val, i, el) => {
      return acc + val / el.length;
    }, 0);

  return humanAge;
};

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
*/
/////////////////////////////
// The Find Method
/*
const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawal);

console.log(accounts);

const account = accounts.find(acc => (acc.owner = `Jessica Davies`));

for (let i = 0; i < accounts.length; i++) {
  if ((accounts[i].owner === `Jessica Davies`)) console.log(account[i]);
  break;
}

console.log(account);
*/
/*
// Equality
console.log(movements);
console.log(movements.includes(-130));


/////////////////////////////////
//THE SOME AND EVERY METHOD
// SOME: CONDITION
const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits);


// EVERY

console.log(movements.every(mov => mov >0));
console.log(account4.movements.every(mov => mov >0));

const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));
*/

/*
//////////////////////////////////////
// THE FLAT AND FLAT-MAP METHODS

const arr = [[1, 2, 3], [4, 5, 6], 7, 8];

console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2));

// Flat
const overallBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
  console.log(overallBalance);

  
  
  // FlatMap
  const overallBalance1 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
  
  console.log(overallBalance1);

  */

/*
//////////////////////////////////
// SORTING ARRAYS

// STRINGS
const owners = [`Jonas`, `Zach`, `Adan`, `Martha`];
console.log(owners.sort());
console.log(owners);

console.log(movements);

// Return < 0 a,b
// Return > 0 b,a

// Ascending
// movements.sort((a,b) => {
//   if(a > b){
//     return 2;
//   }
//   if(a < b){
//     return -3;
//   }
// })

movements.sort((a, b) => a - b);
console.log(movements);

// Descending
// movements.sort((a, b) => {
//   if (a > b) {
//     return -1;
//   }
//   if (a < b) {
//     return 3;
//   }
// });

movements.sort((a, b) => a + b);

console.log(movements);
*/

// Empty Array + Fill Method

/*
const arr = [1, 2, 3, 4, 5, 6, 7];

const x = new Array(7);
console.log(x);

// x.fill(1);

x.fill(1, 3, 5);
console.log(x);
arr.fill(23, 2, 6);
console.log(arr);

const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 100 }, () => {
  return Math.trunc(Math.random() * 6) + 1;
});
console.log(z);

labelBalance.addEventListener(`click`, () => {
  const movementsUi = Array.from(
    document.querySelectorAll(`.movements__value`),
    el => Number(el.textContent.replace('€', ''))
  );
  console.log(movementsUi);

  const movementsUi2 = document.querySelectorAll(`.movements__value`);
});
*/

////////////////////////////////////////////
// Array Methods Practice

// 1.
// const bankDepositSum = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov > 0)
//   .reduce((acc, mov) => acc + mov, 0);
/*
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, curr) => {
    return curr > 0 ? acc + curr : acc;
  }, 0);
console.log(bankDepositSum);

// 2.
const bankDepositsGreater1000 = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov >= 1000).length;
console.log(bankDepositsGreater1000);

const numDeposits100 = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, curr) => (curr >= 1000 ? count + 1 : count), 0);
console.log(numDeposits100);

// 3.
const { deposit, withdrawls } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, curr) => {
      //  curr > 0 ? sums.deposit += curr : sums.withdrawls += curr;

      sums[curr > 0 ? `deposit` : `withdrawls`] += curr;
      return sums;
    },
    { deposit: 0, withdrawls: 0 }
  );

console.log(deposit, withdrawls);

// 4.

const convertTitleCase = function (title) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1);
  const exceptions = [`a`, `an`, `the`, `and`, `but`, `on`, `in`, `with`];

  const titleCase = capitalize(
    title
      .toLowerCase()
      .split(' ')
      .map(word =>
        exceptions.includes(word) ? word : capitalize(word)
      )
      .join(' ')
  );

  return titleCase;
};
console.log(convertTitleCase(`this is a title case`));
console.log(convertTitleCase(`this is a LONG title but not too long`));
console.log(convertTitleCase(`and here is another title with an EXAMPLE`));
*/

///////////////////////////////////////
// Coding CHallenge 4
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
  { weight: 32, curFood: 376, owners: ['Divine'] },
];

// 1.
dogs.forEach(curr => (curr.recommendedFood = curr.weight ** 0.75 * 28));
console.log(dogs);

// 2.
const sarahDog = dogs.find(dog => dog.owners.includes(`Sarah`));
console.log(
  sarahDog.curFood > sarahDog.recommendedFood
    ? `Sarah's dog eats too much 😝🤮`
    : `Sarah's dog doesn't eat enough 🥹😭`
);

const ownersEatTooMuch = dogs.reduce((acc, dog) => {
  // acc.push(dog.curFood > dog.recommendedFood ? dog : );
  if (dog.curFood > dog.recommendedFood) {
    acc.push(dog);
  }
  return acc;
}, []);
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs.reduce((acc, dog) => {
  // acc.push(dog.curFood > dog.recommendedFood ? dog : );
  if (dog.curFood < dog.recommendedFood) {
    acc.push(dog);
  }
  return acc;
}, []);
console.log(ownersEatTooLittle);

const ownersEatTooMuchString = `${ownersEatTooMuch
  .flatMap(curr => curr.owners)
  .join(` and `)}'s dogs eat too much.`;
console.log(ownersEatTooMuchString);

const ownersEatTooLittleString = `${ownersEatTooLittle
  .flatMap(curr => curr.owners)
  .join(` and `)}'s dogs eat too little.`;
console.log(ownersEatTooLittleString);

const eatingOkay = dog => {
  return dog.curFood > dog.recommendedFood * 0.9 &&
    dog.curFood < dog.recommendedFood * 1.1;
};
console.log(dogs.some(dog => eatingOkay(dog)));

const dogOkay = dogs.filter(dog => eatingOkay(dog));
console.log(dogOkay);

const dogsCopy = [...dogs];

dogsCopy.sort((a,b) => a.recommendedFood - b.recommendedFood);
console.log(dogsCopy);
