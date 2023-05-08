'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2023-05-02T17:01:17.194Z',
    '2023-05-04T23:36:17.929Z',
    '2023-05-08T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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

/////////////////////////////////
// Coding this Myself

////////////////////////////////////////
/////////////////////
/// FUNCTIONS
/// Creating a function Usernames for all accounts in the accounts object
const createUserName = function (acc) {
  acc.forEach(account => {
    account.userName = account.owner
      .split(` `)
      .map(name => name[0])
      .join('')
      .toLowerCase();
  });
};
// Calling the function to make usernames in the accounts 1 and 2 objects

// Creating a function to display movements
const displayMovemnts = function (acct,i) {
  containerMovements.textContent = '';
  acct.movements.forEach((mov,i) => {

    // IMPLEMENTING THE DATE OF MOVEMENR
    const movDate = new Date (acct.movementsDates[i]).getTime(); // TimeStamp of the movement date
    const now = new Date().getTime(); // This is the timpstamp of this moment
    const oneDay = 24 * 60 * 60 * 1000; // The number of millisecs in a day
    const timeElapsed = now - movDate;
    let date;
    console.log(timeElapsed);

    if(timeElapsed <=  oneDay) date = `Today`;
    else if(timeElapsed <= 2 * oneDay && timeElapsed > oneDay) date = `Yesterday`;
    else if(timeElapsed <= 7 * oneDay && timeElapsed > 2 * oneDay) date = `${Math.round(timeElapsed / (24 * 60 * 60 * 1000))} days ago`;
    else{
      date = Intl.DateTimeFormat().format(movDate);
    }
    
    const type = mov > 0 ? `deposit` : `withdrawal` // Movement type

    const html = `<div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
          <div class="movements__date">${date}</div>
          <div class="movements__value">${mov}</div>
        </div>`;

        containerMovements.insertAdjacentHTML(`afterbegin`, html);
        // console.log(now);
  });
};
displayMovemnts(account1)
console.log(account1.movements);

// createUserName(accounts);

let currentAccount;

////////////////////////////////////////////
///////////////////////
// EVENT HANDLERS
btnLogin.addEventListener(`click`, function (e) {
  e.preventDefault();
  // Collecting the pin and UserName
  const userName = inputLoginUsername.value;
  const pin = +inputLoginPin.value;

  containerApp.style.opacity = 100;

  // Clear the input fields
  inputLoginUsername.value = inputLoginPin.value = '';
  inputLoginUsername.blur();
  inputLoginPin.blur();
});

/////////////////////////////////////////////////
// Functions
/*
const formatCur = function (value, local, curr) {
  return new Intl.NumberFormat(local, {
    style: `currency`,
    currency: curr,
  }).format(value);
};

const formatMovementDate = function (date, local) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);
  console.log(daysPassed);

  if (daysPassed === 0) return `Today`;
  if (daysPassed === 1) return `Yesterday`;
  if (daysPassed <= 7) return `${daysPassed} days ago`;

  // const [day, month, year] = [
  //   `${date.getDate()}`.padStart(2, '0'),
  //   `${date.getMonth() + 1}`.padStart(2, '0'),
  //   date.getFullYear(),
  // ];
  // return `${day}/${month}/${year}`;

  return new Intl.DateTimeFormat(local).format(date);
};

const displayMovements = function (acc, sort) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[i]);

    const formattedMov = formatCur(mov, acc.locale, acc.currency);

    const displayDate = formatMovementDate(date, acc.locale);
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
    <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCur(Math.abs(out), acc.locale, acc.currency);

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

const startLogOutTimer = function () {
  // Set The time to 100s
  let time = 10;

  const tick = function () {
    // In each timer, print the corresponding time
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);
    labelTimer.textContent = `${min}:${sec}`;

    if (time === 0) {
      clearInterval(timer);
      containerApp.style.opacity = 0;
      labelWelcome.textContent = `Log in to get started`;
    }

    // Decrease the time by 1s after every call
    time--;
  };

  tick();
  const timer = setInterval(tick, 1000);
  return timer;
};

///////////////////////////////////////
// Event handlers
let currentAccount, timer;

////////////////////////////////////////
// FAKE ALWAYS LOGGED-IN
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

///////////////////////////////////////
// Experimenting

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Create Current Date
    const now = new Date();

    const options = {
      hour: `numeric`,
      minute: `numeric`,
      day: `numeric`,
      month: 'numeric',
      year: `numeric`,
    };

    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);

    // const now = new Date();
    // const [day, month, year, hour, minutes] = [
    //   `${now.getDate()}`.padStart(2, '0'),
    //   `${now.getMonth() + 1}`.padStart(2, '0'),
    //   now.getFullYear(),
    //   `${now.getHours()}`.padStart(2, '0'),
    //   `${now.getMinutes()}`.padStart(2, '0'),
    // ];
    // labelDate.textContent = `${day}/${month}/${year}, ${hour}:${minutes}`;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Timers
    if (timer) clearInterval(timer);
    timer = startLogOutTimer();

    startLogOutTimer();
    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Add Transfer Date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    setTimeout(() => {
      // Add movement
      currentAccount.movements.push(amount);

      // Add Loan Date
      currentAccount.movementsDates.push(new Date().toISOString());

      // Update UI
      updateUI(currentAccount);
    }, 2500);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});*/

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

////////////////////////////////////////////////////
// CONVERTING AND CHECKING NUMBERS
/*
console.log(23 === 23.0000);

// Base 10 0 to 9;
// Binary base 2 - 0;

console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);

// Conversion
console.log(+(`23`));
console.log(+`23`);

console.log(Number.parseInt(`30px`,10));
console.log(Number.parseInt(`e23`,10));

console.log(Number.parseFloat('2.5rem'));

console.log(Number.isNaN(+ `20x`));
console.log(Number.isNaN(+ 20/0));

console.log(NUmber.isFinite(20));
console.log(NUmber.isFinite(`20`));
*/

/*
console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(2 ** (1 / 3));

console.log(Math.max(5, 18, 23, 11, 2));
console.log(Math.min(5, 18, 23, 11, 2));

console.log(Math.PI * Number.parseFloat(`10px`) ** 2);

console.log(Math.floor(Math.random() * 90) + 1);

const randomInt = (min, max) =>w
  Math.trunc(Math.random() * (max - min) + 1) + min;

console.log(randomInt(100, 200));
console.log(`Trunc`);
console.log(Math.trunc(23.3));
console.log(Math.trunc(23.9))

console.log(`Round`);
console.log(Math.round(23.3));
console.log(Math.round(23.9));

console.log(`Ceil`);
console.log(Math.ceil(23.9));
console.log(Math.ceil(23.3));

console.log(`Floor`);
console.log(Math.floor(23.9));
console.log(Math.floor(23.9));

// Rounding Decimals
console.log(`----------------Rounding Decimals-------------------`);
console.log((2.7).toFixed(0));
console.log((2.7).toFixed(3));
console.log((2.345).toFixed(2));
console.log((2.345).toFixed(2));
*/

/////////////////////////////////////
// THE REMAINDER OPERATOR
/*
console.log(5 % 2);
console.log(5/2); // 5 = 2*2 + 1;

console.log(8 % 3);
console.log(8/3); // 8 = 2 * 3 + 2;

console.log(6 % 2 === 0);

const isEven = n => n % 2 === 0;
console.log(isEven(8));
console.log(isEven(23));
console.log(isEven(514));

labelBalance.addEventListener(`click`, function(){
  const [...movementsRow] = document.querySelectorAll(`.movements__row`);
movementsRow.forEach((row,i) => {
  if(i % 2 === 0){
    row.style.backgroundColor = `orangered`
  }
  if(i % 3 === 0){
    row.style.backgroundColor = `blue`
    
  }
})
})
*/

//////////////////////////////
// NUMBERIC SEPARATORS

// const diameter = 287_460_000_000;
// console.log(diameter);

// const priceCents = 345_99;
// console.log(priceCents);

// const PI = 3.14_15;

// console.log(Number(`202_2`));

//////////////////////////////////////
// Working With BigInt
/*
console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);


console.log(122222222222222909000000000000n);

// Operations
console.log(10000n + 10000n);

const huge = 202020102934320123294230122239201n;
const num = 23;

console.log(huge + BigInt(num));

*/

//////////////////////////////////////
// Dates and timer

// Create a date

// const now = new Date();
// console.log(now);
// console.log(
//   new Date('Oct 20 2021'),
// );

// console.log(new Date('Dec 24 2015'));

// console.log(new Date (account1.movementsDates.at(0)));

// console.log(new Date (2037 ,10 ,19 ,15 ,23,5));
// console.log(new Date(2037,1,1,12,5,70));

// console.log(new Date (3 * 24 * 60 * 60 * 1000));

// Working With Dates
/*
const future = new Date(2037, 10, 19, 15, 23, 5);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.getMilliseconds());
console.log(future.toISOString());
console.log(future.getTime());
 
console.log(Date.now());

future.setFullYear(2040)
console.log(future);
*/

//////////////////////////////////////////
// Operations With Dates
/*
const future = new Date(2037, 10, 19, 15, 23, 5);
console.log(+future);

const days1 = calcDaysPassed(new Date(2037, 3, 14), new Date(2023, 4, 5));

console.log(days1);
*/

////////////////////////////////////////////
// Intermationalizing NUMBERS
/*
const num = 2929393939.99;

const options = {
  style: `currency`,
  // unit: `celsius`,
  currency: `EUR`,
  // useGrouping: false,
};

console.log(`US`, new Intl.NumberFormat(`en-US`, options).format(num));
console.log(`Germany`, new Intl.NumberFormat(`pt-PT`, options).format(num));
console.log(`Syria`, new Intl.NumberFormat(`ar-SY`, options).format(num));
console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language, options).format(num)
);

console.log(navigator);
*/

//////////////////////////////////////////////
// Timers setTimeout and setInterval
/*
const ingrediants = [`olives`, `spinach`];
const pizzaTimer = setTimeout(
  (ing1, ing2) =>
    console.log(`Here is your Pizza 🍕🍕 with ${ing1} and ${ing2}`),
  3000,
  ...ingrediants
);
console.log(`Waiting for my pizza......`);
if (ingrediants.includes(`spinach`)) clearTimeout(pizzaTimer);

setInterval(() => {
  const now = new Date();
  console.log(
    `${now.getHours()}:${`${now.getMinutes()}`.padStart(
      2,
      0
    )}:${`${now.getSeconds()}`.padStart(2, 0)}`
  );
}, 1000);
*/
