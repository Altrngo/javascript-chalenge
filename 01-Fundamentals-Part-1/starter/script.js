/*let js = "Amazing";
console.log(40+29-8)

let country = "France"
let continent = "Europe"
let population = "67 million inhabitants"

console.log(country)
console.log(continent)
console.log(population)
*/

/* const now = 2021
const ageYoann = now - 1983
const ageAydan = now - 2017

console.log(ageAydan, ageYoann) */

//Coding Challenge 1

/* let markWeight = 78
let johnWeight = 92
let markHeight = 1.69
let johnHeight = 1.95 */

/* let markWeight = 95
let johnWeight = 85
let markHeight = 1.88
let johnHeight = 1.76 */

/* const markImc = markWeight / (markHeight**2)
const johnImc = johnWeight / (johnHeight**2)

let markHigherIMC = markImc > johnImc

console.log(markImc)
console.log(johnImc)
console.log(markHigherIMC)

if (markImc > johnImc) {
console.log(`Mark is a fat basterd, is even fatter than John, his BMI is ${markImc}`)
}else(
  console.log("John is a fat basterd, is even fatter than mark")
); */

/* const age = 15;
const isOldEnough = age >= 18;

if(isOldEnough) {
console.log("Sarah can start driving 🙌")
} else{
  const yearsLeft = 18 - age
  console.log(`you're too young lady, still ${yearsLeft} years to wait`)
}; */

/* const inputYear = "1991";
console.log(Number(inputYear))

const hasdrivingLicence = true;
const hasGoodVision = true;

const shouldDrive = hasdrivingLicence && hasGoodVision;
 */
/* if (shouldDrive) {
console.log("Sarah can drive")
} else {
  console.log("Someone else should drive")
}; */
/* 
const isTired = false;

console.log(hasdrivingLicence && hasGoodVision && isTired);

if (shouldDrive && hasGoodVision && !isTired) {
  console.log("Sarah can drive")
  } else {
    console.log("Someone else should drive")
  }; */

/*   const dolphinScore = 96+108+89;
  const koalaScore = 88+102+110;

  const dolphinAverage = dolphinScore / 3;
  const koalaAverage = koalaScore / 3;

  console.log(dolphinAverage, koalaAverage);

  if (dolphinAverage > koalaAverage && dolphinAverage >= 100) {
    console.log("Dolphins has won !")
  }
  else if (dolphinAverage < koalaAverage && koalaAverage >= 100) {
    console.log("Koalas has won!")
  }
  else if (dolphinAverage === koalaAverage && dolphinAverage >= 100) {
    console.log("it's a draw")
  }
  else {
    console.log("No one won the trophy! 🏆 ")
  } */

/* const day = 'thursday'
switch(day) {
  case 'monday':
    console.log("Plan course structure");
    console.log("go to coding meetup");
    break;
  case 'tuesday':
  console.log("Pepare theory videos");
    break;
  case 'wednesday':
  case 'thursday':
    console.log("Write code examples");
    break;
  case 'friday':
    console.log("Record videos");
    break;
  case 'saturday':
  case 'sunday':
    console.log("Enjoy the weekend :D");
    break;
  default:
  console.log("Not a vaild day!")
} */

/* const day = 'friday'
if (day === "monday") {
  console.log("Plan course structure");
  console.log("go to coding meetup");
}
else if (day === "tuesday") {
  console.log("Pepare theory videos");
}

else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
}

else if (day === "friday") {
  console.log("Record videos");
}

else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend :D");
}
else {  console.log("Not a vaild day!")} */

/* const age = 23 */
/* age >= 18 ? console.log("I'd like to drink wine🍷") : console.log("GTFOOMS ! Dirty Mowfow...");
 */
/* const drink = age >= 18 ?  "wine🍷" : "GTFOOMS ! Dirty Mowfow...";

console.log(drink); */

const bill = 430

const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(`Bill is ${bill}, tip is ${tip}, the total is ${bill + tip}`);