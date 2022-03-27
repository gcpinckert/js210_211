/*
input: a string
output: the same string, with all spaces removed from the beginning and end
- do not remove any internal spaces
- You may use [] to access a characters and the length property
- Do not use any other built-in properties or methods

Examples:

trim('  abc  ');  // "abc"
trim('abc   ');   // "abc"
trim(' ab c');    // "ab c"
trim(' a b  c');  // "a b  c"
trim('      ');   // ""
trim('');         // ""

Algorithm:
- Initialize a counter for leadingSpaces to 0
- Iterate from 0 up to the length of the string - 1
  - Check to see if the current character is a space
    - If it is increment the leadingSpaces counter
  - Otherwise, break out of the loop
- Initialize a counter for trailingSpaces to 0
- Iterate from length of str - 1 down to 0
  - Check to see if the current character is a space
    - If it is, increment the trailingSpaces counter
  - Otherwise, break out of the loop
- Initialize a results variable to an array
- Iterate from leadingSpaces up to the length of string - trailingSpaces (exclusive)
  - Add the current character to the results array
- Join and return the results array
*/

function trim(string) {
  let leadingSpaces = 0;

  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === ' ') {
      leadingSpaces += 1;
    } else {
      break;
    }
  }

  let trailingSpaces = 0;

  for (let index = string.length - 1; index >= 0; index -= 1) {
    if (string[index] === ' ') {
      trailingSpaces += 1;
    } else {
      break;
    }
  }

  let trimmed = [];

  for (let index = leadingSpaces; index < string.length - trailingSpaces; index += 1) {
    trimmed.push(string[index]);
  }

  return trimmed.join('');
}

console.log(trim('  abc  '));  // "abc"
console.log(trim('abc   '));   // "abc"
console.log(trim(' ab c'));    // "ab c"
console.log(trim(' a b  c'));  // "a b  c"
console.log(trim('      '));   // ""
console.log(trim(''));         // ""