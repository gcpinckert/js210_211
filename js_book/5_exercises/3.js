function getNumber(type) {
  let rlSync = require('readline-sync');
  return Number(rlSync.question(`Enter the ${type} number: `));
}

function multiply(num1, num2) {
  return num1 * num2;
}

let num1 = getNumber('first');
let num2 = getNumber('second');

console.log(`${num1} * ${num2} = ${multiply(num1, num2)}`);