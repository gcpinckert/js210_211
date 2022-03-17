// Write a function that returns true if its argument is NaN, false otherwise
// Do not use Number.isNaN or Object.is

function isNotANumber(value) {
  if ((value === value) === false) {
    return true;
  } else {
    return false;
  }
}

// testing

console.log(isNotANumber('hello'));   // false
console.log(isNotANumber(0));         // false
console.log(isNotANumber(undefined)); // false
console.log(isNotANumber(NaN));       // true