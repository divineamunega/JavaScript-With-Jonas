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

  orderDelivery: function ({ starterIndex = 1, mainIndex = 0, time =`20:00`, address }) {
    console.log(
      `Order Recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delevered to ${address} at ${time}`
    );
  },
};




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
