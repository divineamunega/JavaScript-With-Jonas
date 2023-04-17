'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

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
