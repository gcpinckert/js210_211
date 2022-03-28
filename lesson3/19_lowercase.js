/*
input: a single string argument
output: the string argument converted to lowercase
  - Only alphabetical characters should be converted, the rest should remain the same
approach:
  - uppercase to lowercase conversion via ASCII
  - get the ASCII number for the uppercase letter (string.charCodeAt())
    - we call charCodeAt on the string in question and pass the index number for the char as argument
  - Add 32 to the chars ASCII code
  - Get the car at the resulting number (String.fromCharCode(asciiNumber))

Examples:
toLowerCase('ALPHABET');    // "alphabet"
toLowerCase('123');         // "123"
toLowerCase('abcDEF');      // "abcdef"

Algorithm:
- Initialize an empty string varaible to be the lowercase result
- Iterate through the given string
  - Is the character an uppercase alphabetical?
    - If so, add it's lowercase equivalent to the string
  - Otherwise, just add the character
- Return the lowercase result string

- Is the character an uppercase alphabetical?
  - It's ASCII number will be in the range 65-90
  - We can also use a Regex: /[A-Z]/.test(character)

- Get the lowercase equivalent
  - Get the ASCII number for the uppercase letter
  - Add 32
  - Get the char at the resulting number
*/

const isUpper = char => /[A-Z]/.test(char);

function toLowerCase(string) {
  const CONVERSION_TO_LOWER = 32;
  let lowercased = '';

  for (let index = 0; index < string.length; index += 1) {
    if (isUpper(string[index])) {
      let asciiNumber = string.charCodeAt(index) + CONVERSION_TO_LOWER;
      lowercased += String.fromCharCode(asciiNumber);
    } else {
      lowercased += string[index];
    }
  }

  return lowercased;
}

console.log(toLowerCase('ALPHABET'));    // "alphabet"
console.log(toLowerCase('123'));         // "123"
console.log(toLowerCase('abcDEF'));      // "abcdef"