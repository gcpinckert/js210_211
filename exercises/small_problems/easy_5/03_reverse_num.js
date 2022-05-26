// input: positive integer
// output: positive integer
// - should have digits from input num in reverse order
// - no leading 0s

// Examples:
// reverseNumber(12345);    // 54321
// reverseNumber(12213);    // 31221
// reverseNumber(456);      // 654
// reverseNumber(12000);    // 21 -- Note that zeros get dropped!
// reverseNumber(1);        // 1

// Algorithm:
// - Convert the input num into a string
// - Convert the string into an array of digits
// - Reverse the array, join back into a string
// - Convert the string into a number with a base-10 radix

function reverseNumber(int) {
  let reversed = String(int).split('').reverse().join('');
  return parseInt(reversed, 10);
}

console.log(reverseNumber(12345));    // 54321
console.log(reverseNumber(12213));    // 31221
console.log(reverseNumber(456));      // 654
console.log(reverseNumber(12000));    // 21 -- Note that zeros get dropped!
console.log(reverseNumber(1));        // 1