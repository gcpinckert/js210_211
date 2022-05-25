// input: positive integer
// output: array, list of digits in the integer

// Examples:
// digitList(12345);       // [1, 2, 3, 4, 5]
// digitList(7);           // [7]
// digitList(375290);      // [3, 7, 5, 2, 9, 0]
// digitList(444);         // [4, 4, 4]

// Algorithm
// Initialize an empty array to hold the digits
// Convert the integer into a string
// Iterate a loop from 0 to the length of the string
// Push the character at current index in the string to the array as a number
// Return the digits array

function digitList(number) {
  let digits = [];
  number = String(number);

  for (let idx = 0; idx < number.length; idx += 1) {
    digits.push(Number.parseInt(number[idx], 10));
  }

  return digits;
}

console.log(digitList(12345));       // [1, 2, 3, 4, 5]
console.log(digitList(7));           // [7]
console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList(444));         // [4, 4, 4]

// Refactored to use map

function digitList2(number) {
  let digits = String(number).split('');
  return digits.map(digit => parseInt(digit, 10));
}

console.log(digitList2(12345));       // [1, 2, 3, 4, 5]
console.log(digitList2(7));           // [7]
console.log(digitList2(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList2(444));         // [4, 4, 4]