/* Convert either a positive or negative number to a string
  Do not use any of the standard conversion features
  We're going to make this one easier on ourselves and use
  the function from 8_num_to_str with a conditional
  If the number passes is negative, return the string with -` prepended
  otherwise just return the string */

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

function signedIntegerToString(int) {
  if (int > 0) {
    return '+' + integerToString(int);
  } else if (int < 0) {
    return '-' + integerToString(-int);
  } else {
    return "0";
  }
}

console.log(signedIntegerToString(4321));      // "+4321"
console.log(signedIntegerToString(-123));      // "-123"
console.log(signedIntegerToString(0));         // "0"