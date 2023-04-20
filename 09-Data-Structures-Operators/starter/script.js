'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

const weekdays = [`mon`, `tue`, `wed`, `thu`, `fri`, `sat`, `sun`];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order(stareterIndex, mainIndex) {
    return [this.starterMenu[stareterIndex], this.mainMenu[mainIndex]];
  },

  openingHours,

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = `20:00`, address }) {
    console.log(
      `Order Recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delevered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your deleciuos pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  orderPizza(mainIngredient, ...otherIngredient) {
    console.log(
      `You ordered a pizza which had a main ingredeint of ${mainIngredient} and other ingredeint of ${otherIngredient}`
    );
  },
};

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// Strings Methods Practice

const getCode = str => str.slice(0,3).toUpperCase();
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const flightsArr = flights.split(`+`);

for (const [i, flight] of flightsArr.entries()) {
  const [type, from, to, time] = flight.split(`;`);

  const output = `${
    type.startsWith('_Delayed') ? '🛑 Delayed' : '' + type.replaceAll(`_`, ` `)
  } ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(36);  
  console.log(output);
}

/** ----------------------- Coding Challenge 4-------------------- */
/*
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector(`button`).addEventListener(`click`, function () {
  const string = document.querySelector(`textarea`).value;
  const str1LineArr = string.split('\n');

  let counter = 0;
  for (const str of str1LineArr) {
    if (str.includes(`_`)) {
      counter++;
      const underScoreIndex = str.indexOf(`_`);
      const b4UnderScore = str.slice(0, underScoreIndex).toLowerCase();
      const underscoreLetter = str[underScoreIndex + 1].replace(
        str[underScoreIndex + 1],
        str[underScoreIndex + 1].toUpperCase()
      );
      const afterUnderScore = str.slice(underScoreIndex + 2).toLowerCase();
      let strToPas = b4UnderScore + underscoreLetter + afterUnderScore;
      // console.log(counter);
      const strsemi = strToPas.padEnd(17, ' ');
      const strFinal = strsemi.padEnd(strsemi.length + counter, `✅`);
      console.log(strFinal);
    }else{
      console.log(`This is not in camel case`);
    }
  }
});
*/

/** ---------- Working With Strings Part 3---------------------- */
/*
// Split and Join
console.log(`a+very+nice+string`.split(`+`));
console.log(`Jonas Schmedtmann`.split(` `));

const [firstName, lastName] = `Jonas Schedtmann`.split(` `);
const newName = [`Mr`, firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const captalizeName = function(name){
  const names = name.split(` `);
  const namesUpper = [];
  for(const n of names){
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(` `));
}
const passenger = `jessica ann smith davis`;
captalizeName(passenger);
captalizeName(`divine amunega`);

// Padding a String

const message = `Go to gate 23`
console.log(message.padStart(30, ' ').padEnd(35,'*'));

const maskCreditCar = function(number){
  const str = number + ``;
  const last = str.slice(-4);
  return last.padStart(str.length, '*')
}

console.log(maskCreditCar(1234464783920102983));


// Repeat 

const message2 = `bad weather... All departures delayed`;
console.log(message2.repeat(1));

const planesInLine = function(n){
   console.log(`THere are ${n} planes in line ${`✈🛫`.repeat(n)}`);
}

planesInLine(10)
*/
/** ---------- Working With Strings Part 2---------------------- */
/*
const airline = `TAP Air Portugal`;
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());
console.log(`Divine`.toUpperCase());

// Fix Capitilzation in email
const passengerName = (passenger) => {
  const passengerLower = String(passenger).toLowerCase();
  const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
  return (passengerCorrect);
}

console.log(passengerName(44));

// Comparing emails
const email = `hello@jonas.io`;
const loginEmail = ` Hello@jonas.Io \n`

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);


// Replacing
const priceGB = `200,97₤`;
const priceUS = priceGB.replace(`₤`, `$`).replace(`,`,`.`);
console.log(priceUS);

const announcment = `All passengers come to boarding door 23. Boarding door 23`;
console.log(announcment.replace(/door/g, `gate`));
console.log(announcment.replaceAll(`door`, `gate`));

// Booleans

const plane = `Airbus A320neo`;
console.log(plane.includes(`A320`));
console.log(plane.includes(`Boen `));
console.log(plane.startsWith(`Air`));


if(plane.startsWith(`Airbus`) && plane.endsWith(`neo`)){
  console.log(`Part of the NEW airbus family`);
}

const checkBaggage = function(items){
  const baggage = items.toLowerCase();
  if(baggage.includes(`knife`) || baggage.includes(`gun`)){
    console.log(`You are not Welcome on board`);
  }else{
    console.log(`Welcome Aboard`);
  }
}

checkBaggage(`I have a laptop, some Food and a pocket knife`);
checkBaggage(`Socks and Camera`);
checkBaggage(`Got some snacks annd a gun for protection`);

*/

/** ---------- Working With Strings Part 1---------------------- */
/*const airline = `TAP Air Portugal`;
const plane = `A320`;
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log(`B737`[1]);

console.log(airline.length);
console.log(`B737`.length);

console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf(`Portugal`));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are the middle seats
  const s = seat.slice(-1);
  s === `B` || s === `C`
    ? console.log(`YOu Got the middle Seat 🥱😪`)
    : console.log(`You got Lucky 😁 `);
};

checkMiddleSeat(`11B`);
checkMiddleSeat(`23C`);
checkMiddleSeat(`3E`);

*/
/*------------- Coding Challenge 3----------------------------------*/
/*

/// 1.
const events = [...new Set(gameEvents.values())];
console.log(events);

gameEvents.delete(64);
console.log(gameEvents);
const gameTrack = [...gameEvents.values()];

const eventsObj = {};
for (const events of gameEvents.values()) {
  eventsObj[events] ? (eventsObj[events] += 1) : (eventsObj[events] = 1);
}
const objectKeyVal = Object.entries(eventsObj);
console.log(objectKeyVal);

for(const [key, value] of objectKeyVal){
  console.log(`A ${key} happened on average every ${90/value} minutes.`);
}

for(const [time, ev] of gameEvents){
  time < 45 && console.log(`[FIRST HALF] ${time}: ${ev}`);
  time > 45 && console.log(`[SECOND HALF] ${time}: ${ev}`);
}
 */

/** --------------- Maps Iteration */
// console.log(gameTrack.has('GOAL ⚽'));

/// 2.

/*
const question = new Map([
  [`question`, `What is the best programming language in the world`],
  [1, `C`],
  [2, `Java`],
  [3, `JavaScript`],
  [`correct`, 3],
  [true, `Correct`],
  [false, `Try again`],
]);

console.log(question);

// Conver Object to Map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Quiz
console.log(question.get(`question`));

for (const [key, value] of question) {
  typeof key === `number` && console.log(`Answer ${key}: ${value}`);
}

const answer = 3;
console.log(question.get(question.get(`correct`) === answer));


// Convert a map to an array
console.log(...question);
console.log(...question.entries());
console.log(...question.keys());
console.log(...question.values());

*/
/**---------------------- Maps Fundamentals---------------------------------- */

/* const rest = new Map();
rest.set(`name`, `Clissico Italiano`);
rest.set(1, `Firenze Italy`);
rest.set(2, `Lisbon , Portugal`);

console.log(rest.set(10, `Divine`));

rest
  .set(`catergories`, [`Italian`, `Pizzeria`, `Vegetarian`, `Organic`])
  .set(`open`, 11)
  .set(`close`, 23)
  .set(true, `We are open :D`)
  .set(false, `We are closed :(`);

console.log(rest.get(`name`));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;
console.log(rest.get((time > rest.get('close') && time < rest.get('close'))));

console.log(rest.has(`categories`));
rest.delete(2);


const arr = [1,2];
rest.set(arr, `Test`);

rest.set(document.querySelector(`h1`), 'Heading');
console.log(rest.size);
console.log(rest);
*/

/** --------------------- Sets -------------------------- */

/*const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Resoto',
  'Pizza',
  'Pasta',
]);

console.log(orderSet);

console.log(new Set('Jonas'));

console.log(orderSet.size);
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Bread'));

orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
orderSet.delete('Re soto');

// orderSet.clear();
console.log(orderSet);

for (const order of orderSet) console.log(order);


// Example 

const staff = [`Waiter`,`Chef`, `Waiter`, `Manager`, `Chef`, `Waiter`];

const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(new Set(staff).size);

console.log(new Set ('jonasschmedtmann').size);

*/

/**------------- Coding Chalenge 2------------------- */
/*
for (const [goalNum, player] of game.scored.entries())
  console.log(`Goal ${goalNum + 1}: ${player}`); // Excercise 1

const oddObject = Object.entries(game.odds);
const odds = Object.values(game.odds);
let counter = 0;
for (const odd of odds) {
  counter += odd;
}
const average = counter / odds.length;
console.log(average); // Exercise 2

console.log();
for (const [team, odd] of oddObject) {
  game[team] && console.log(`Odd of Victory of ${game[team]}: ${odd}`);
  game[team] ?? console.log(`Odd of draw: ${odd}`);
} // Exercise 3

// Bonus
const scored = {};
for (const players of game.scored) {
  console.log(players);
  scored[players] ? scored[players]++ : (scored[players] = 1);
}
console.log(scored); 
*/

/**-------------Looping Objects--------------------- */
/*
// property NAMES
const properties = Object.keys(openingHours);
console.log(properties);
let openStr = (`We open ${properties.length} days a week`);
for(const day of Object.keys(openingHours)) {
  openStr+=` ${day},`;
}
console.log(openStr);

// property VAKUES
const values = Object.values(openingHours);
console.log(values);

// Entire Object
const entries = Object.entries(openingHours);
console.log(entries);

for(const [key, {open,close}] of entries){
  console.log(`On ${key} we open at ${open} and close at ${close}.`);
}

*/

/**---------------Optional Chaining------------------ */
/*if (restaurant.openingHours && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}
// console.log(restaurant.openingHours.mon.open);

//With Optional Chaining
console.log(restaurant.openingHours.mon?.open);
// Example
const days = [`mon`, `tue`, `wed`, `thu`, `fri`, `sat`, `sun`];

for(const day of days){
  console.log(day);
  const open = restaurant.openingHours[day]?.open ?? `closed`;
  console.log(`On ${day} we open at ${open}`);
}

// Methods 
console.log(restaurant.orderRisoto?.(0,1) ?? `Method does not exist`);

// Arrays
const users =  [{name:`Jonas`, email:`hellojonas.io`,}];

console.log(users[0  ]?.name ?? `User array Empty`);
*/

/** ---------Looping Arrays the for of Loop-------------- */
/*
const menu = [...restaurant.starterMenu,...restaurant.mainMenu];

for(const item of menu) console.log(item);

for (const [i,el] of menu.entries()) {
  console.log(`${i + 1}:${el}`);
}
*/

/*  ------------------Coding Challenge 1 -----------------*/
/*
const [players1,players2] = game.players;

const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const players1Final = [...players1,`Thiago`,`Coutinho`, `Periscic`]
console.log(players1Final);

const {team1,x:draw,team2} = game.odds;
console.log(team1,draw,team2);

const printGoals =  function(...players){
  console.log(`The total goals scored was ${players.length}`);
  for(let i = 0; i < players.length; i++)console.log(players[i]);
}

team1 < team2 && console.log(`Team 1 is more likely to win`);
team1 > team2 && console.log(`Team 2 is more likely to win`);
*/
/*----------Logical Assignment Operators------------------*/
/*
const rest1 = {
  name: `Capri`,
  numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: `Capri`,
  owner: `Glovans Rossi`,
};

// The Or assignment Operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest2.numGuests ||= 10;
// rest1.numGuests ||= 10;


rest1.numGuests ??= 10;
rest2.numGuests ??= 10; 


// The AND assingment operator

// rest1.owner = rest2.owner && `<ANONYMOUS>`;
// rest2.owner = rest1.owner && `<ANONYMOUS>`;

rest1.owner &&=  `<ANONYMOUS>`;
rest2.owner &&=  `<ANONYMOUS>`;


console.log(rest1);
console.log(rest2);

*/

/**--------------The Nullish Coalesing Operator--------------------- */
/*
restaurant.numGuests = 0;
const guests = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests);

// nullish values are null and undefined
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect); 
*/

/**---------------- Short Circuiting ------------------------------ */

/*
console.log(`---------OR----------`);
//  Logical operators can use ANY data type, Return ANY datatype, and they perform short Circuiting
console.log(3 || `Jonas`);
console.log(`` || `Jonas`);
console.log(true || 0);
console.log(undefined || null);

restaurant.numGuests = 23;
const guests1  = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);


const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log(`---------AND---------`);
console.log(0 && `Jonas`);
console.log(7 && `Jonas`);

restaurant.orderPizza && restaurant.orderPizza(`mushroom`,`spinach `)
*/

/** ---------------The Rest Operator------------------------------ */
/*
// (1) Destructuring
// The rest operator is used to pack elements into an array

// Spread becauuse of on the RHS of the = (assingment operator)
const arr = [1, 2, ...[3, 4, 4]];

//REST because of left of the = (assignement operator)
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risoto, ...otherFoods] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza, risoto, otherFoods);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// (2) Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  return sum;
};

add(2, 3, 4, 5, 5);
add(6, 8, 7, 6);

const x = [23,5,7];
add(...x);

restaurant.orderPizza(`mushroom`,`onion`,`olives`,`spinach`);
restaurant.orderPizza(`Mushroom`);
*/
/** -------------------- The Spread Operator   -------------------------- */
// The spread operator s to unpack an array

/*
const arr = [7,8,9];
const badNewArr = [1,2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1,2, ...arr];
console.log(newArr);

console.log(...newArr);
const newMenu = [...restaurant.mainMenu, `Ghacci`];
console.log(newMenu);




// Copy Arrays

const mainMenuCopy = [...restaurant.mainMenu];

//Join 2 Arrays

const menu = [...restaurant.mainMenu ,...restaurant.starterMenu];
console.log(menu);


// Iterables are arrays, strings, maps sets, NOT objects. 

const str = `Jonas`;
const letters = [...str, '', 'S.'];
console.log(letters);

console.log(...str);


// Real world Example
// const ingredients = [
//   prompt(`Let's Make Pasta! Ingredient 1!`),
//   prompt(`Ingredient 2`),
//   prompt(`Ingredient 3`),
// ];

// restaurant.orderPasta(...ingredients);

// Objects
const newResturant = {...restaurant, foundedIn:1998, founder: `Divine`};
console.log(newResturant);

const restaurantCopy = {...restaurant};
restaurantCopy.name = `Ristorato Rom`;
console.log(restaurant);
console.log(restaurantCopy);

*/

/* -------- Destructuring Objects ---------*/
/*
restaurant.orderDelivery({
  time: `22:30`,
  address: `Via del Sale 21`,
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address:'Ewupe',
  starterIndex:1,
})

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// Default Variables
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//Mutating Variables
const obj = { a: 23, b: 7, c: 24 };
let a = 111;
let b = 999;

({ a, b } = obj);
console.log(a, b);

// Nested Objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

*/

/** ///////////////// Destructuring Arrays*/
/*
const arr = [2,3,4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x , ,z] = arr;
console.log(x,z);
console.log(arr);

// let [main, secondary]  = restaurant.categories;


// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main,secondary);
// console.log(main,secondary); 
// [main, secondary] = [secondary , main];

// console.log(restaurant.order(2,0 ));
const [stater, main] =  restaurant.order(2,0);
console.log(stater,main);


// Nested destructuring
const neseted = [2,4,   [5,6] ];
// const [i, , j] = neseted;
// console.log(i,j);

const [i, ,[j,k]] = neseted;
console.log(i,j,k);

// default values

const [p=1,q=1,r=1] = [8,9];

console.log(p,q,r);
*/
