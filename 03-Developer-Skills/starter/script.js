// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// Write a function that reverses anything passed into it!

const reverse = function (value) {
    if (typeof value === 'string') {
    let placeHolder = '';
    for (let i = 1; i <= value.length; i++) {
      placeHolder += value.slice(value.length - i, value.length - i + 1);
    }
    return placeHolder;
  } else if (typeof value === 'number') {
    value = String(value);
    let placeHolder = '';
    for (let i = 1; i <= value.length; i++) {
      placeHolder += value.slice(value.length - i, value.length - i + 1);
    }
    return Number(placeHolder);
  } else if (value[0] !== undefined) {
    let placeHolder = [];
    for(let i = value.length - 1;i >= 0; i--){
        placeHolder.push(value[i]);
    }
    return placeHolder;
  }else {
    console.log(`This cannot be reversed it is a ${typeof value}.`);
    return value;
  }
};

console.log(reverse(Number));
/* const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (temps) {
  let maxTemp = temps[0];
  let minTemp = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];
    if (typeof currentTemp !== 'number') continue;
    if (currentTemp > maxTemp) maxTemp = currentTemp;
    if (currentTemp < minTemp) minTemp = currentTemp;
  }
  const amplitude = maxTemp - minTemp;
  return amplitude;
};


const calcTempAmplitude2 = function (t1, t2) {
  const temps = t1.concat(t2);
  
  let maxTemp = temps[0];
  let minTemp = temps[0];
  
  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];

    if (typeof currentTemp !== 'number') continue;
    if (currentTemp > maxTemp) maxTemp = currentTemp;
    if (currentTemp < minTemp) minTemp = currentTemp;
  }

  const amplitude = maxTemp - minTemp;
  return amplitude;
};

  console.log(calcTempAmplitude2([2,3,4],[334,5])); */

/* const measurementKelvin = function(){
      const measurement = {
        type: 'temp',
        unit: 'celsuis',
        value: 10,
      }
    console.table(measurement)
      const kelvin = Number(measurement.value) + 273;
      return kelvin;
  }
  console.log(measurementKelvin());
 */

// Loop over the array to get the data.
// Use the number of the array to get the number of days

// const printForecast = function (arr) {
//     let sentence = '';
//   for (let i = 0; i < arr.length; i++) {
//     sentence += `... ${arr[i]} in ${i + 1} days`
// }
// console.log(sentence);
// };
// printForecast([17, 21, 23]);
// printForecast([12,5,-5,0,4])
