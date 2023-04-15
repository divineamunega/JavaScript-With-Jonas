'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (stareterIndex, mainIndex) {
    return [this.starterMenu[stareterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = `20:00`,
    address,
  }) {
    console.log(
      `Order Recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delevered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your deleciuos pasta with ${ing1}, ${ing2} and ${ing3}`
    );

  },
  orderPizza : function(mainIngredient,...otherIngredient){
    console.log(`You ordered a pizza which had a main ingredeint of ${mainIngredient} and other ingredeint of ${otherIngredient}`);
  }
};

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
