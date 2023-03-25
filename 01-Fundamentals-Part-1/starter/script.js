/* Coding Challenge 1 */
// // const markMass = 78;
// // const markHeight = 1.69;
// // const johnMass = 92;
// // const johnHeight = 1.88;
// // const bmiJohn = markMass/(markHeight**2);
// // const bmiMark = johnMass/(markHeight**2);
// // const markHigherBmi = bmiMark>bmiJohn;
// // console.log(markHigherBmi)

// // /* Coding Challenge 2 */

// // const markMass = 78;
// // const markHeight = 1.69;
// // const johnMass = 92;
// // const johnHeight = 1.88;
// // const bmiJohn = markMass/(markHeight**2);
// // const bmiMark = johnMass/(markHeight**2);
// // if(bmiMark> bmiJohn){
// //     console.log(`Mark's BMI:(${bmiMark}) is higher than John's Bmi:(${bmiJohn})`);
// // }else{
// //     console.log(`John's BMI:(${bmiJohn}) is higher than Mark's Bmi:(${bmiMark})`);
// // }


// // type Conversion
// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);


// console.log(Number('Jonas'));
// console.log(typeof(NaN));

// console.log(String(23),23);


// // Type Coehrsion
// console.log('I am '+ 23 + ' years old'); 
// console.log('23' - '10' -3);
// console.log('23'*'2');
// console.log('23'/'2');


// let  n = '1' + 1;
// n = n -1;
// console.log(n);


// Truthy and Falsey values

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean(''));
// console.log(Boolean({}));

// const money = 00;
// if(money){
//     console.log('Dont spend it all!');
// } else{
//     console.log('You should get a job!🤦‍♀️🤦‍♂️🤦');
// }

// let height = 0;
// if(height){
//     console.log('YAY height is defined');
// }else{
//     console.log('Height is UNDEFINED');
// }



// Equality Operators

// const age = '18';
// if (age === 18) console.log('You just became an adult(strict)'); 
// if (age == 18) console.log('You just became an adult(loose)'); 

// const favourite = Number(prompt('What is your favourite number'));
// console.log(favourite);
// console.log(typeof favourite);

// if(favourite === 23){
//     console.log('Cool 23 is an amazing number');
// }else if(favourite === 7){
//     console.log('7 is also a great number')
// }else if(favourite === 9){
//     console.log('9 is also a great number')
// }else{
//     console.log('Number is neither 23 7 or 9');
// }


// if(favourite !== 23){
//     console.log('Why not 23');
// }



// Logical operators

// const hasDriversLicense = true;
// const hasGoodVision = true;

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);


// // if(hasDriversLicense && hasGoodVision){
// //     console.log('Sarah is able to drive');
// // }
// const isTired = false;

// console.log(hasDriversLicense || isTired || hasGoodVision);


// if(hasDriversLicense && hasGoodVision && !isTired){
//     console.log('Sarah is able to drive');
// }else{
//     console.log('Someoe Else should drive...')
// }


// Coding Challenge 3

// Test Data 1

// const dolphinsScore = (96+108+89)/3;
// const koalasScore = (88+91+110)/3;
// if(dolphinsScore>koalasScore){
//     console.log(`The dolphins win with a score of \n Dolphins:${dolphinsScore} -  Koalas${koalasScore}`);
// }else if (koalasScore > dolphinsScore){
//     console.log(`The Koalas win with a score of \n Dolphins:${dolphinsScore} - Koalas${koalasScore}`);
// }else{
//     console.log(`The match ended in a draw with a score of \n Dolphins:${dolphinsScore} -  Koalas${koalasScore}`);
// }



// Bonus 1
// const dolphinsScore = (97+112+101)/3;
// const koalasScore = (109+95+123)/3;

// if(dolphinsScore>koalasScore && dolphinsScore>=100){

//     console.log(`The dolphins win with a score of \n Dolphins:${dolphinsScore} -  Koalas ${koalasScore}`);

// }
// else if (koalasScore > dolphinsScore && koalasScore>=100){
    
//     console.log(`The Koalas win with a score of \n Dolphins:${dolphinsScore} - Koalas ${koalasScore}`);

// }else if(dolphinsScore === koalasScore){
    
//     console.log(`The match ended in a draw with a score of \n Dolphins:${dolphinsScore} -  Koalas ${koalasScore}`);

// }else{
    
//     console.log("Both teams did not meet the minimum requirements, they both lost");

// }



// Bonus 2

// const dolphinsScore = (97+112+101)/3;
// const koalasScore = (109+95+106)/3;

// if(dolphinsScore>koalasScore && dolphinsScore>=100){

//     console.log(`The dolphins win with a score of \n Dolphins:${dolphinsScore} -  Koalas ${koalasScore}`);

// }
// else if (koalasScore > dolphinsScore && koalasScore>=100){
    
//     console.log(`The Koalas win with a score of \n Dolphins:${dolphinsScore} - Koalas ${koalasScore}`);

// }else if(dolphinsScore === koalasScore && dolphinsScore>=100 && koalasScore >= 100){
    
//     console.log(`The match ended in a draw with a score of \n Dolphins:${dolphinsScore} -  Koalas ${koalasScore}`);

// }else{
    
//     console.log("Both teams did not reach the minimum score, they both lost");
    
// }



// Swtch Statement

// const day = 'monday';

// switch(day){
//     case 'monday': // (day === 'monday')
//         console.log('Plan My course Structure');
//         console.log('Go to coding meetup');
//         break;
//         case 'tuesday':
//             console.log('Prepare theory videos');
//             break;
//             case 'wednesday':
//             case 'thursday':    
//                 console.log('Write code examples');
//                 break;
//             case 'friday':
//                 console.log('Record videos');
//                 break;
//             case 'saturday':
//             case 'sunday':
//                 console.log('Enjoy the weekend');
//                 break;
//             default:
//                 console.log('Not a valid day!')
// }

// if(day === 'monday'){

//     console.log('Plan My course Structure');
//     console.log('Go to coding meetup');

// }else if (day ===  'tuesday'){

//     console.log('Prepare theory videos');

// }else if (day === 'wednesday' || day === 'thursday'){

//     console.log('Write code examples');

// }else if (day === 'friday'){

//     console.log('Record Videos');

// }else if (day === 'saturday'|| day === 'sunday'){

//     console.log('Enjoy the weekend ');

// }else {
//     console.log('This is an invalid day! 🙄🙄');
// }


// Statements And Expressions
// 3 + 4;
// 1991;
// true && false && !false;
//  if (23>10){
//     const str = '23 is bigger';
// }
// const me = 'Divine'
// console.log(`I'm ${2023 - 2007} years old ${me}`);



// The conditional (Ternary) Operator

// const age = 23;
// age >= 18 ? console.log('I like to drink wine 🍷😁😊😋') :
//      console.log('I like to drink water 💦😁😊😋');
    


// const drink = age >= 18? 'wine 🍷': 'water 💦💧';
// console.log(drink);

// let drink2;
// if(age >= 18){
//     drink2 = 'Wine:🍷';
// }else{
//     drink2 = 'Water:💦💧';
// }
// console.log(drink2);

// console.log(`I like to drink ${ age >= 18? 'wine 🍷': 'water 💦💧'}`)



// Coding Challenge 3

// const bill = 438;
// const tip = bill <= 300 && bill >= 50 ? (15/100) * bill: (20/100) * bill;
// console.log(`The Bill was ${bill}, the tip was ${tip}, and the total value ${tip + bill}`);

 