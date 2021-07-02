// Remember, we're gonna use strict mode in all scripts now!
"use strict";

/* const x = 23;
if (x === 23) console.log(23);

const calcAge = (birthyear) => 2037 - birthyear;

console.log(calcAge(1967));

 */

/* const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];
    if (typeof currentTemp !== "number") continue;
    if (currentTemp > max) max = currentTemp;
    if (currentTemp < min) min = currentTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// if there are 2 arrays tht needs to be merged

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];
    if (typeof currentTemp !== "number") continue;
    if (currentTemp > max) max = currentTemp;
    if (currentTemp < min) min = currentTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeNew = calcTempAmplitudeNew(
  [-5, 3, 6, 8, 18, 37],
  [-90, 3, 5, 22, 12]
);
console.log(amplitudeNew); */

// Debugging with the console and breakpoints
/* 
const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "vcelsius",
    value: Number(prompt("degree celsius")),
  };

  console.table(measurement);

  // console.log();
  // console.warn();
  // console.error();

  const kelvin = measurement.value + 273;
  return kelvin;
};
console.log(measureKelvin());
 */

// TEST DATA 1 = [17,21,23]
// TEST DATA 2 = [12,5,-5,0,4]

const printForecast = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`...${arr[i]}°C in ${arr.indexOf(arr[i]) + 1} days...`);
  }
};
printForecast([12, 5, -5, 0, 4]);
