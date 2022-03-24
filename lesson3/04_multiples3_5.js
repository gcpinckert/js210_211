/*
input: none
output: log the integers 1-100 (inclusive) that are multiples of either 3 or 5
- if the number is divisible by both 3 and 5, add an ! to the number
- the numbers should be output as strings (so we can add !)

- set up a loop that iterates from 1-100 inclusive
  - check to see if the number is divisible by both 3 and 5
    - if so, convert to str, append an !, and log it to the console
  - check to see if the number is divisible by 3 or 5
    - if so, convert to str and log it to the console
  - otherwise: go to the next iteration

- check to see if the number is divisible by both 3 and 5
  - See if the remainder of the number divided by 3 is 0
  - See if the remainder of the number divided by 5 is 0
  - Both of the above must be true
- check to see if the number is divisible by 3 or 5
  - See if the remainder of the number divided by 3 is 0
  - See if the remainder of the number divided by 5 is 0
  - Only one of the above must be true
*/

function divisibleByThreeAndFive(number) {
  return !!((number % 3 === 0) && (number % 5 === 0));
}

function divisibleByThreeOrFive(number) {
  return !!(number % 3 === 0 || number % 5 === 0);
}

function multiplesOfThreeAndFive() {
  for (let currentNumber = 1; currentNumber <= 100; currentNumber += 1) {
    if (divisibleByThreeAndFive(currentNumber)) {
      console.log(`${currentNumber}!`);
    } else if (divisibleByThreeOrFive(currentNumber)) {
      console.log(`${currentNumber}`);
    }
  }
}

multiplesOfThreeAndFive();

// Change the function so it takes the range of numbers it should check as arguments

function multiplesOfThreeAndFive2(num1, num2) {
  for (let currentNumber = num1; currentNumber <= num2; currentNumber += 1) {
    if (divisibleByThreeAndFive(currentNumber)) {
      console.log(`${currentNumber}!`);
    } else if (divisibleByThreeOrFive(currentNumber)) {
      console.log(`${currentNumber}`);
    }
  }
}

multiplesOfThreeAndFive2(1, 15);