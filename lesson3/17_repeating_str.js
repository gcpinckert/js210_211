/*
input: a string and an integer
  - the string is the string to repeat
  - the integer is the number of times the string should be repeated
output: a string
  - output consists of the input string repeated the given number of times
  - If times is not a number, return undefined
  - If times is a negative number, return undefined
  - If times is 0, return an empty string
  - Don't worry about floating point numbers

Rules:
 - You cannot use any string methods other than concatenation

Examples:
repeat('abc', 1);       // "abc"
repeat('abc', 2);       // "abcabc"
repeat('abc', -1);      // undefined
repeat('abc', 0);       // ""
repeat('abc', 'a');     // undefined
repeat('abc', false);   // undefined
repeat('abc', null);    // undefined
repeat('abc', '  ');    // undefined

Algorithm
- Check the times argument
  - If it is not a number, return undefined
  - If it is a negative number, return undefined
- Initialize an empty string to be the result
- Iterate a loop the given number of times
  - Concatenate the string to be repeated to the results string
- Return the results string
*/

function repeat(string, times) {
  if ((typeof(times) !== 'number') || (times < 0)) {
    return undefined;
  } else {
    let repeated = '';

    for (let index = 0; index < times; index += 1) {
      repeated += string;
    }

    return repeated;
  }
}

console.log(repeat('abc', 1));       // "abc"
console.log(repeat('abc', 2));       // "abcabc"
console.log(repeat('abc', -1));      // undefined
console.log(repeat('abc', 0));       // ""
console.log(repeat('abc', 'a'));     // undefined
console.log(repeat('abc', false));   // undefined
console.log(repeat('abc', null));    // undefined
console.log(repeat('abc', '  '));    // undefined