/*
input: 2 strings
  - 1rst string is the string to be split
  - 2nd string is the character along which to split the string
output: should log each "chunk" of the split string
  - You can only use [] and length, no other string functions
  - If no delimiter is provided, should log an error message indicating that

Examples:

splitString('abc,123,hello world', ',');
// logs:
// abc
// 123
// hello world

splitString('hello');
// logs:
// ERROR: No delimiter

splitString('hello', '');
// logs:
// h
// e
// l
// l
// o

splitString('hello', ';');
// logs:
// hello

splitString(';hello;', ';');
// logs:
//  (this is a blank line)
// hello

Algorithm:
- Guard clause: if delimiter argument is not a string, log the error message
- Empty String as delimiter guard clause
- If the delimiter is an empty string
  - Iterate over the characters in the given string
  - Log each character
- Initialize an empty string variable to hold each string "chunk"
- Iterate over the characters in the string to split
  - Is the current character the same as the delimiter character?
    - Log the current string "chunk" to the console
    - Reset the chunk variable to an empty string
  - Otherwise, add the current character to the current chunk
*/

function splitString(string, delimiter) {
  if (typeof(delimiter) != 'string') {
    console.log('ERROR: No delimiter');
    return;
  }

  let chunk = '';

  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === delimiter) {
      console.log(chunk);
      chunk = "";
    } else if (delimiter === '') {
      console.log(string[index]);
    } else {
      chunk += string[index];
    }
  }

  if (chunk) { // an empty string is falsy, will not output
    console.log(chunk);
  }
}

splitString('abc,123,hello world', ',');
// logs:
// abc
// 123
// hello world

splitString('hello');
// logs:
// ERROR: No delimiter

splitString('hello', '');
// logs:
// h
// e
// l
// l
// o

splitString('hello', ';');
// logs:
// hello

splitString(';hello;', ';');
// logs:
//  (this is a blank line)
// hello