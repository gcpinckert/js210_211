// Write a function that will return `true` if the argument is -0
// false if it is 0 or any other number


function isNegZero(num) {
  if (num === 0) {
    return 1 / num === -Infinity;
  } else {
    return false;
  }
}

// tests

console.log(isNegZero(0));  // false
console.log(isNegZero(1));  // false
console.log(isNegZero(-1)); // false
console.log(isNegZero(-0)); // true