/*
input: integer between 0 and 100
output: logs all multiples of the argument between 0 and 100 (inclusive)
- logged multiples should also be odd numbers
- values should be logged in descending order
- Note that 0 is a special case, anything % 0 returns NaN

Examples:
logMultiples(17);
// output (5x, 3x and 1x)
85
51
17

logMultiples(21);
// output (3x and 1x)
63
21

Algorithm:
- If the input number is 0, return the function
- Set up a loop that iterates from 100 down to the current num (inclusive)
- (numbers less than the input num cannot be multiples of it)
  - If the current number is divisible by the input number and also odd
    - log the number

- is the number odd?
  - Use the isOdd function from previous exercise
- is the number divisible?
  - takes two arguments, the current number and the input number
  - the current number % the input number should be 0, otherwise, false
*/

function isOdd(num) {
  return num % 2 === 1;
}

function isMultiple(multiple, divisor) {
  return multiple % divisor === 0;
}

function logMultiples(num) {
  for (let currentNum = 100; currentNum >= num; currentNum -= 1) {
    if (isMultiple(currentNum, num) && isOdd(currentNum)) {
      console.log(currentNum);
    }
  }
}

// logMultiples(17); // 85, 51, 17
// console.log('');
// logMultiples(21); // 63, 21

// Make the function more efficient by iterating down from the largest
// multiple of the input number that is less than 100

function logMultiples(num) {
  let max = Math.floor(100 / num) * num;
  for (let currentNum = max; currentNum >= num; currentNum -= 1) {
    if (isMultiple(currentNum, num) && isOdd(currentNum)) {
      console.log(currentNum);
    }
  }
}

logMultiples(17); // 85, 51, 17
console.log('');
logMultiples(21); // 63, 21