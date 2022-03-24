/*
input: integer
output: true if number is prime, false otherwise

Examples:
isPrime(1);   // false
isPrime(2);   // true
isPrime(3);   // true
isPrime(43);  // true
isPrime(55);  // false
isPrime(0);   // false

Algorithm:
- Iterate a loop from 2 upto the input number (exclusive)
  - check to see if the input number can be divided evenly by the current num
  - If yes, break out of the function and return false
- If we get all the way through iteration, and never return, return true

- We can use the isMultiple function from a previous exercise
*/

function isMultiple(multiple, divisor) {
  return multiple % divisor === 0;
}

function isPrime(num) {
  if (num === 1 || num === 0) return false;

  for (let currentNum = 2; currentNum < num; currentNum += 1) {
    if (isMultiple(num, currentNum)) return false;
  }

  return true;
}

console.log(isPrime(1));   // false
console.log(isPrime(2));   // true
console.log(isPrime(3));   // true
console.log(isPrime(43));  // true
console.log(isPrime(55));  // false
console.log(isPrime(0));   // false