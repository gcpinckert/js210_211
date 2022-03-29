/* Write a function that takes a postive integer or 0
and converts it to a string

Do not use any of the standard conversion functions

Test Cases:
integerToString(4321);      // "4321"
integerToString(0);         // "0"
integerToString(5000);      // "5000"
*/

const Digits = [
  '0', '1', '2', '3', '4',
  '5', '6', '7', '8', '9',
]

function integerToString(int) {
  let string = '';
  let digits = [];
  let place = 1;

  while ((int % place) < int) {
    place *= 10;
  }
  place /= 10;

  while (place > 1) {
    digits.push((int - (int % place)) / place);
    int %= place;
    place /= 10;
  }

  digits.push(int);

  digits.forEach(digit => string += Digits[digit]);
  return string;
}

console.log(integerToString(4321));      // "4321"
console.log(integerToString(0));         // "0"
console.log(integerToString(5000));      // "5000"