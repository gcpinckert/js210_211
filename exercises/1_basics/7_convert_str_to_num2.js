/* Write a function that takes a string of digits as an argument
Return the digits as a number
Don't use any of the built in functions for converting a string to a number
If first char is `+` number should be positive
If first char is `-` number should be negative
Assume all characters will be valid digits

Expected Output:
stringToSignedInteger('4321');      // 4321
stringToSignedInteger('-570');      // -570
stringToSignedInteger('+100');      // 100
*/

const DigitToNum = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
};

function stringToSignedInteger(str) {
  let digits = str.split("").reverse(); // i.e. ['1', '2', '3', '4']
  let sign;

  if (digits[digits.length - 1].match(/(\+|-)/)) {
    sign = digits.pop();
  }

  let place = 1;
  let number = 0;

  digits.forEach((digit) => {
    number += DigitToNum[digit] * place;
    place *= 10;
  });

  if (sign === '-') {
    return -number;
  } else {
    return number;
  }
}

console.log(stringToSignedInteger('4321'));      // 4321
console.log(stringToSignedInteger('-570'));      // -570
console.log(stringToSignedInteger('+100'));      // 100
