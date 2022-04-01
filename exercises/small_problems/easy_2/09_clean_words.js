/*
input: a string
  - consisting of words and some non-alphabetic characters
output: a string
  - all non-alphabetic characters should be replaced with spaces
  - If one or more non-alphabetic characters occur in a row, only have one space

Algorithm:
- Initialize a new empty string to hold the results
- Iterate over the given string
  - Check to see if the letter is alphabetical
    - If so, add it to the results string
  - Otherwise
    - If the char in the results string at index - 1 is a space
      - go to the next iteration
  - Otherwise
    - Add a single space to the results string.
- Return the results string
*/

function cleanUp(string) {
  let cleanString = '';

  for (let index = 0; index < string.length; index += 1) {
    if (/[A-Z]/i.test(string[index])) {
      cleanString += string[index];
    } else if (cleanString[cleanString.length - 1] === ' ') {
      continue;
    } else {
      cleanString += ' ';
    }
  }

  return cleanString;
}

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "