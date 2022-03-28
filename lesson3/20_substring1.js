/*
input: 3 args: a string and two integers
  - the string is what to pull the substring output from
  - the start argument (1st int) is the starting index of the substring
    - may be negative, in which case it works like a negative index (i.e -1 is last char)
  - the length argument (2nd int) is the length of the returned substring
    - this indicates the maximum length
    - If longer than the available characters, just use available characters
    - If 0, return an empty string
    - If negative, return an empty string
output: the substring from the given string
  - should start at index given and proceed according to above
- You can only use [] and length, no other string methods

Examples:
let string = 'hello world';

substr(string, 2, 4);      // "llo "
substr(string, -3, 2);     // "rl"
substr(string, 8, 20);     // "rld"
substr(string, 0, -20);    // ""
substr(string, 0, 0);      // ""

Algorithm:
- Check to see if start is negative
  - Convert to positive index (string.length - absolute value of negative index)
- Initialize an empty string variable to hold the substring results
- Iterate a for loop from 0 up to the given length - 1
  - increment the given index (start) by the counter
  - break out of the loop if the current index is greater than or equal to the length of the string
  - add the char at current index to the results substring
- Return the results substring
*/

function substr(string, start, length) {
  if (start < 0) {
    start += string.length;
  }

  let substring = '';

  for (let counter = 0; counter < length; counter += 1) {
    let index = start + counter;
    if (index >= string.length) break;
    substring += string[index];
  }

  return substring;
}

let string = 'hello world';

console.log(substr(string, 2, 4));      // "llo "
console.log(substr(string, -3, 2));     // "rl"
console.log(substr(string, 8, 20));     // "rld"
console.log(substr(string, 0, -20));    // ""
console.log(substr(string, 0, 0));      // ""