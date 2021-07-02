'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    const output = `${firstName}, You are ${age} years old born in ${birthYear}`;
    console.log(output);
  }

  if (birthYear >= 1981 && birthYear <= 1996) {
    var millenial = true;
    const str = `oh and you're a Millenial ${firstName}`;
    console.log(str);
    function add(a, b) {
      return a + b;
    }
  }
  // console.log(str);
  console.log(millenial);
  // console.log(add(3, 2));
  printAge();
  return age;
}

const firstName = 'Jonas';
calcAge(1991);
