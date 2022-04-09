/*
input: string
output: the next to last word in the string
- assume "words" are any sequence of non-whitespace characters
- assume the input string always contains at least two words
- fix the function so we get the expected results
*/

// function penultimate(string) {
//   return string.split(' ')[-2]; // we can't use negative indices in JS, this returns undefined
// }

// console.log(penultimate('last word'));                    // expected: "last", actual: undefined
// console.log(penultimate('Launch School is great!'));      // expected: "is", actual: undefined

// instead we need to find the second to last index 
// of the array of words by using the length property

function penultimate(string) {
  let words = string.split(' ');
  let penultimateIndex = words.length - 2;
  return words[penultimateIndex];
}

console.log(penultimate('last word'));                    // "last"
console.log(penultimate('Launch School is great!'));      // "is"