/*
input: two strings
  - first string, the string to search
  - second string, the candidate for start of the other string
output: boolean
  - true if the first string starts with the second string
  - false otherwise
- If the second argument is an empty string, the result should always be true
- If the second argument is longer than the first argument, it should always return false
- Only use the [] and length property, no other string methods

Examples:
let str = 'We put comprehension and mastery above all else';
startsWith(str, 'We');              // true
startsWith(str, 'We put');          // true
startsWith(str, '');                // true
startsWith(str, 'put');             // false

let longerString = 'We put comprehension and mastery above all else!';
startsWith(str, longerString);      // false

Algorithm:
- Guard clause, if second argument is an empty string return true
- Guard clause if second argument is longer than first argument return false
- Iterate over each character in the second string
  - Check to see if the character at current index in first string matches that in second string
  - If so, go to the next iteration
  - If not, return false
- If we iterate over the entire second string and always match, return true
*/

function startsWith(string, searchString) {
  if (searchString === '') {
    return true;
  } else if (searchString > string) {
    return false;
  }

  for (let index = 0; index < searchString.length; index += 1) {
    if (searchString[index] === string[index]) {
      continue;
    } else {
      return false;
    }
  }

  return true;
}

let str = 'We put comprehension and mastery above all else';
console.log(startsWith(str, 'We'));              // true
console.log(startsWith(str, 'We put'));          // true
console.log(startsWith(str, ''));                // true
console.log(startsWith(str, 'put'));             // false

let longerString = 'We put comprehension and mastery above all else!';
console.log(startsWith(str, longerString));      // false