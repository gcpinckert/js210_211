/*
input: an integer
output: a string of 1s and 0s that matches the length given as argument
  - the string should always start with a 1

Examples:
stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"

Algorithm:
- Initialize an empty string to hold results
- Iterate from 0 upto the given number (length)
  - If the current iteration number is even
    - Add 1 to the results string
  - If the current iteration number is odd
    - Add 0 to the results string
- Return the results string
*/

function stringy(length) {
  let results = '';

  for (let index = 0; index < length; index += 1) {
    if (index % 2 === 0) {
      results += '1';
    } else {
      results += '0';
    }
  }

  return results;
}

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"