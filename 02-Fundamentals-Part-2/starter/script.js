'use strict';

/* let hasDriverLicence = false;
const passTest = true;

function logger() {
  console.log("My name is Yoann")
};

logger();
logger();
logger();

 */
/* function fruitProcessor(apples, oranges) {
  const juice = console.log(`Juice with ${apples} apples and ${oranges} oranges`);
  return juice;
};

fruitProcessor(5, 9);

const appleJuice = fruitProcessor(4, 0);
console.log(appleJuice);
 */

// fonction declaration
/* function calcAge1(birthyear) {
return 2037 - birthyear;
}

const age1 = calcAge1(1983); */


// fonction Expression
/* const calcAge2 = function (birthyear) {
  return 2037 - birthyear;
}

const age2 = calcAge2(1983);

console.log(age1, age2);

const calcAge3 = birthyear => 2037 - birthyear;
const age3 = calcAge3(1983);
console.log(age3);

const yearsUntilRetirement = (birthyear, firstName) => {
  const age = 2037 - birthyear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} will retire in ${retirement} years`
}

console.log(yearsUntilRetirement(1983, "Toto"))
 */

/* function cutFruitPoieces(fruit) {
return fruit * 4;
}

function fruitProcessor(apples, oranges) {
 const applePieces = cutFruitPoieces(apples)
 const orangePieces = cutFruitPoieces(oranges)

  const juice = console.log(`Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces`);
  return juice;
};

fruitProcessor(2, 3); */

/* const calcAge = function(birthyear) {
  return 2037 - birthyear;
}

const yearsUntilRetirement = function (birthyear, firstName) {
  const age = calcAge(birthyear);
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} will retire in ${retirement} years`
}
console.log(yearsUntilRetirement(1983, "Yoann")); */

// test Data 1
/* const dolphinScore = (44 + 23 + 71);
const koalaScore = (65 + 54 + 49); */

// test Data 2
/* const dolphinScore = (85 + 54 + 41);
const koalaScore = (23 + 34 + 27);

const calcAverage = score => score / 3;

const avgDolphins = calcAverage(dolphinScore);
const avgKoalas = calcAverage(koalaScore);

console.log(avgDolphins, avgKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= (avgKoalas * 2)) {
      console.log(`Dolphins Won 🏆 with ${avgDolphins} points`);
    }
    else if (avgKoalas >= (avgDolphins * 2)) {
      console.log(`Koalas Won 🏆 with ${avgKoalas} points`);
    }
    else {
      console.log("No one won");
    };
  };

  console.log(checkWinner(avgDolphins, avgKoalas));
 */


// Arrays

// Exercice

/*   const calcAge = function(birthyear) {
    return 2037 - birthyear;
  }

  const years = [1990, 1967, 2002, 2010, 2018];

  const age1 = calcAge(years[0]);
  const age2 = calcAge(years[1]);
  const age3 = calcAge(years[years.length - 1]);
  console .log(age1, age2, age3); */

/*   const friends = ["Miche", "Steven", "Peter"];
  const newLenght =  friends.push("Jay");
  console.log(friends)
  console.log(newLenght);

  friends.unshift("John")
  console.log(friends) */

  // remove element
  // pop removes the last onemptied, whereas shift removes the first one
/*   friends.pop();
  friends.pop();
  console.log(friends);

  friends.shift()
  console.log(friends);


  console.log(friends.indexOf("Steven"));
  // when does not exist
  console.log(friends.indexOf("Bob"));

  console.log(friends.includes("Steven"));
  // when does not exist
  console.log(friends.includes("Bob")); */

/*   const bill = 430

 const calcTip =  function (bill) 
   {return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

  console.log(calcTip(100));

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]),calcTip(bills[1]), calcTip(bills[2])];

const total =  [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
console.log(bills, tips);
console.log(total); */


// Object Methods

/* const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  birthYeah: 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: true, */

  // calcAge: function (birthYeah) {
  //   return 2037 - birthYeah;
  // }

  // calcAge: function () {
  //   // console.log(this);
  //   return 2037 - this.birthYeah;
  // }

/*   calcAge: function () {
    this.age = 2037 - this.birthYeah;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
  }
};

console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

// Challenge
// "Jonas is a 46-year old teacher, and he has a driver's license"
console.log(jonas.getSummary());

 */

/* const mark = {
  firstName: 'Mark',
  lastName: 'Miller',
  mass: 78,
  height: 1.69
};

const john = {
  firstName: 'John',
  lastName: 'Smith',
  mass: 92,
  height: 1.95
};
 
 const calcBMC = function (guy) {
  return guy.mass/(guy.height**2);
  }


  const markBMC = calcBMC(mark);
  const johnBMC = calcBMC(john);

  console.log(markBMC, johnBMC);

if (markBMC > johnBMC) {
  console.log(`${mark.firstName +" "+ mark.lastName} weight ${mark.mass} Kg and is ${mark.height}m. His BMC is ${markBMC}`);
}
else if (johnBMC > markBMC) {
  console.log(`${john.firstName +" "+ john.lastName} weight ${john.mass} Kg and is ${john.height}m. His BMC is ${johnBMC}`);
} */

// Loops and iteration
/* 
for (let rep = 1; rep <= 10; rep++ ) {
  console.log(`Lifting weight repetition ${rep} 💪`);
}

const jonasArray = [
  'Jonas',
  'Schemdtmann',
  2037 - 1991,
  'Teacher',
  ['Michel', 'Peter', 'Steven']
];

const types = [];

for (let i = 0; i < jonasArray.length; i++) {
console.log(jonasArray[i], typeof jonasArray[i]);

types[i] = typeof jonasArray[i];
}

console.log(types);
 */
/* const years = [1991, 2002, 1996, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
ages.push(2037 - years[i]);
}
console.log(ages);

// While loop

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
} */


const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];


const calcTip =  function (bill) 
{return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(bills[i] + tip);
}
console.log(bills);
console.log(tips);
console.log(totals);


const calcAverage = function(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  };
return sum / totals.length}

console.log(calcAverage(totals));
