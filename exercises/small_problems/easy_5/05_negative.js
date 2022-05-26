// input: number
// output: negative version of that number
// - if input is positive, return negative
// - if input is negative, return negative

// Examples:
// negative(5);     // -5
// negative(-3);    // -3
// negative(0);     // -0

// Algorithm
// - get the absolute value of the input number
// - return the negative absolute value

function negative(num) {
  return -(Math.abs(num));
}

console.log(negative(5));     // -5
console.log(negative(-3));    // -3
console.log(negative(0));     // -0

// using ternary operator

function negative2(num) {
  return (num < 0) ? num : -num;
}

console.log(negative2(5));     // -5
console.log(negative2(-3));    // -3
console.log(negative2(0));     // -0