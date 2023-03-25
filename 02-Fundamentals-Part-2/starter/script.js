// Javascript Strictmode
'use strict';

// let hasDriversLicense = false;
// const passTest = true;
// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can Drive'); 
// const interface = 'Audio'
// const private = 534;

// Functions

// function logger () {
//     console.log('My Name is Divine');
// }

// // Calling / Running  / Invoking the function
// logger();
// logger();
// logger();

// function fruitProccessor (apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//     return juice;
// }

// const appleJuice = fruitProccessor (5,0);
// console.log(appleJuice);


// const appleOrangeJuice = fruitProccessor(2,4);
// console.log(appleOrangeJuice);
// const num = Number('23');

// Function declaration and Expression

// const age1 = calcAge1(1991);
// console.log(age1)

// function calcAge1 (birthYear) {
//     return 2037 - birthYear;
// }


// const calculate2 = function (birthYear) {
//     return 2037 - birthYear;
// }; 
// const age2 = calculate2(1991);

// console.log(age1,age2)


// Arrow Functions
 
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);

// console.log(age3)

// const yearsUntilRetirement = (birthYear,firstName) => {
//     const age = calcAge3(birthYear);
//     const retirment = 65 - age;
//     return `${firstName} retires in ${retirment} years`;
// }

// console.log(yearsUntilRetirement(1991,'Jonas'));
// console.log(yearsUntilRetirement(1980,'Bob'));


// Functions Calling Other Functions

// function cutFriutPieces (fruit) {
//     return fruit * 3;
// }

// function fruitProccessor (apples, oranges) {
//     const applepeices = cutFriutPieces(apples);
//     const orangespeices = cutFriutPieces(oranges);

//         const juice = `Juice with ${applepeices} pieces of apples and ${orangespeices} pieces of oranges`;
//         return juice;
//     }
// console.log(fruitProccessor(2,3));


// Reviewing fnctions

// const calcAge = function (birthYear) {
//     return 2022 - birthYear;
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirment = 65 - age;

//     if (retirment > 0) {
//         console.log(`${firstName} retires in ${retirment} years`);
//         return retirment;
//     } else {
//         console.log(`${firstName} has already retired 🎉🥳`)
//         return -1;
//     }
// }

// console.log(yearsUntilRetirement(1950, 'Divine'));


// Coding Challenge 1
// const calcAverage = (x,y,z) =>  (x + y + z)/3;

// const averageDolphins = calcAverage(85,54,41);
// const averageKoalas = calcAverage(23,34,27);

// const checkWinner = function(averageDolphins,averageKoalas) {
//     if(averageDolphins >= (2*averageKoalas)) {
//         console.log(`The Dolphins win the trophy 🏆 \n {${averageDolphins} vs ${averageKoalas}}`);
//     } else if (averageKoalas >= (2*averageDolphins)) {
//         console.log(`The Koalas win the trophy 🏆 \n {${averageKoalas} vs ${averageDolphins}}`);
//     } else {
//         console.log('Nobody Wins 😭');
        
//     }
    
// }
//     checkWinner(averageDolphins,averageKoalas);
    


// Arrays

// const freind1 = 'Micheal';
// const freind2 = 'Steven';
// const freind3 = 'Peter';

// const friends = ['Micheal', 'Steven', 'Peter'];
// console.log(friends);

// const years = new Array(1991,1984,208,2020);


// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]); 

// friends[2] = 'Jay';
// console.log(friends);

// const jonas = ['Jonas','Schmedtman',2022-1991,'Teacher',friends];
// console.log(jonas);
// console.log(jonas.length);

// const calcAge = function (birthYear) {
//     return 2023 - birthYear;
// }

// const year = [1990,1967,2002,2010,2018];


// const ages = [calcAge(year[0]),
// calcAge(year[1]),
// calcAge(year[year.length - 1])];

// console.log(ages);

// Array Methods


// Add Elements
// const friends = ['Micheal', 'Steven', 'Peter'];
// const newLenght = friends.push('Jay');
// console.log(friends);
// console.log(newLenght);

// friends.unshift('John');
// console.log(friends);


// // Remove Elements

// friends.pop();
// const popped = friends.pop();
// console.log(friends);
// console.log(popped);

// friends.shift();
// console.log(friends);


// console.log(friends.indexOf('Steven'));
// console.log(friends.indexOf('Steve'));

// console.log(friends.includes('Bob'));
// console.log(friends.includes('Steven'));
// friends.push('Peter');
// if (friends.includes('Peter')) {
//     console.log('You have a freind called peter');
// }


// Coding Challenge 2
// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 :
//     bill * 0.2;
// }

// const calcTip = bill => bill >=50 && bill <= 300 ? bill * 0.15 : bill * 0.2;


// const bills = [125,555,44];

// const tips = [
//     calcTip(bills[0]),
//     calcTip(bills[1]),
//     calcTip(bills[2])
// ]

// const total = [
//     tips[0] + bills[0],
//     tips[1] + bills[1],
//     tips[2] + bills[2],
// ]

// console.log(tips);
// console.log(total);


// Objects 

// const jonasArray = [
//     'Jonas',
//     'Schmedtman',
//     2037,
//     'Teacher',
//     ['Micheal', 'Peter', 'Steven']
// ];

// 

// const jonas = {
//         firstName : 'Jonas',
//         lastName : 'Schmedtman',
//         age : 2037 - 1991,
//         job : 'Teacher',
//         friends : ['Micheal', 'Peter', 'Steven']
// };

// console.log(jonas.lastName);
// console.log(jonas['lastName']);

// const nameKey  =  'Name';
// console.log(jonas[`first${nameKey}`]);
// console.log(jonas[`last${nameKey}`]);
 
// const interestedIn = prompt('What do you want to know about Jonas? Choose between firstname, lastename , age , job and freinds');

// if(jonas[interestedIn]) {
//     console.log(jonas[interestedIn]);
// } else {
//     console.log('Wrong Request!🤦‍♀️');
// }

// jonas.location = 'Nigeria';
// jonas['twitter'] = '@divineamunega';


// // Challenge
// console.log(
//     `${jonas.firstName}  has ${jonas.friends.length} friends, and his best  friend is ${jonas.friends[0]}`
// );

// Objects Methods


// const jonas = {
//     firstName : 'Jonas', 
//     lastName : 'Schmedtman',
//     birthYear : 1991,
//     job : 'Teacher',
//     friends : ['Micheal', 'Peter', 'Steven'],
//     hasDriversLicense: true,

//     // calcAge: function(birthYear) {
//     //     return 2037 - birthYear
//     // }

//     // calcAge: function() {
//     //     return 2037 - this.birthYear;
//     // }

//     calcAge: function() {
//         this.age =  2037 - this.birthYear;
//         return this.age;
//     },
//     getSummary : function() {
//             return `${this.firstName} is a ${this.calcAge()} year old ${this.job}, and he has ${this.hasDriversLicense=== true ? 'a' : 'no'} Drivers Licence `
//     }
// };

// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);



// // Chalenge 
// // Jonas Is a 46 years Old teacher and he has a/no drivers licence

// console.log(jonas.getSummary()); 



// Coding Challenge 3

// const mark = {
//     fullName :'Mark Miller',
//     mass : 78,
//     height: 1.69,
//     calcBMI: function(){
//         this.bmi = (this.mass)/(this.height ** 2);
//         return this.bmi;
//     }
// }

// const john = {
//     fullName :'John Smith',
//     mass : 92,
//     height: 1.95,
//     calcBMI: function(){
//         this.bmi = (this.mass)/(this.height ** 2);
//         return this.bmi;
//     }
// }

// if(mark.calcBMI() > john.calcBMI()) {
//     console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})`);
// }else {
//       console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})`);
// }




// Loops

//  console.log('Lifting Weight repetition 1 🏋️‍♀️');
//  console.log('Lifting Weight repetition 2 🏋️‍♀️');
//  console.log('Lifting Weight repetition 3 🏋️‍♀️');
//  console.log('Lifting Weight repetition 4 🏋️‍♀️');
//  console.log('Lifting Weight repetition 5 🏋️‍♀️');
//  console.log('Lifting Weight repetition 6 🏋️‍♀️');
//  console.log('Lifting Weight repetition 7 🏋️‍♀️');
//  console.log('Lifting Weight repetition 8 🏋️‍♀️');
//  console.log('Lifting Weight repetition 9 🏋️‍♀️');
//  console.log('Lifting Weight repetition 10 🏋️‍♀️');


 // For loops keeps running while condition is true
//  for (let rep = 1; rep <= 30; rep++) {
//     console.log(`Lifting Weight repetition ${rep} 🏋️‍♀️`);
//  }


// const jonas = [
//     "Jonas",
//     'Schmedtman',
//     2037,
//     'Teacher',
//     ['Micheal', 'Peter', 'Steven'],
//     true,
// ];

// const types = [];

// for(let i = 0; i < jonas.length; i++) {
//     /* Reading from jonas array*/
//     console.log( jonas[i],typeof(jonas[i]));

//     // Filling types Array
//     // types[i] = typeof(jonas[i]);

//     types.push(typeof(jonas[i]));
// }
// console.log(types)

// const years = [1991, 2007, 1969, 2028];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//     ages.push(2037 - years[i])
// }
// console.log(ages);

// Continue and Break Statement

// console.log('---- ONLY STRINGS --------')
// for(let i = 0; i < jonas.length; i++) {
//     if(typeof jonas[i] !== 'string') continue;
//     console.log( jonas[i],typeof(jonas[i]))
// }

// console.log('----- BREAK WITH NUMBER ---------')
// for(let i = 0; i < jonas.length; i++) {
//     if (typeof jonas[i] === 'number') break; 
//     console.log( jonas[i],typeof(jonas[i]));
// }
 

// const jonas = [
//     "Jonas",
//     'Schmedtman',
//     2037,
//     'Teacher',
//     ['Micheal', 'Peter', 'Steven'],
// ];

// for(let i = jonas.length - 1; i >= 0; i--) {
//     console.log(i,jonas[i]);
// }

// for (let exercise = 1; exercise <= 3; exercise++) {
//     console.log(`------ Starting exercise ${exercise}`);
//     for (let rep = 1; rep <= 5; rep++) {
//         console.log(`Lifting weight repetiton ${rep} 🏋️‍♀️`);
//     }
// }

// While Loops
// for (let rep = 1; rep <= 10; rep++) {
//         console.log(`Lifting Weight repetition ${rep} 🏋️‍♀️`);
// }

// let rep = 1
// while (rep <= 10) {
//     // console.log(`WHILE: Lifting weights repetiton ${rep} 🏋️‍♀️`);
//     rep++;
// } 


// let dice = Math.trunc(Math.random() * 6) + 1;
// while (dice !== 6) {
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if (dice === 6) console.log('Loop is about to end');
// }


// Coding Challenge 4


const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const total = [];
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 :
    bill * 0.2;
}
for (let i = 0; i < bills.length; i++) {
   let tip = (calcTip(bills[i]));
   tips.push(tip)
    total.push(tip + bills[i]);
}
console.log(bills);
console.log(tips);
console.log(total);

// Bonus


const calcAverage = function (array) {
    let sum = 0;
    const arrayLength = array.length
    for(let i = 0; i < arrayLength; i++) {
         sum = sum + array[i];
    }
    const average = sum/array.length;
    return average;
}
console.log(calcAverage(bills) + calcAverage(tips));
console.log(calcAverage(total));
