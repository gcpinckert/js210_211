// input: string of words
//  - a word is separated by spaces
//  - string contains nothing but words or spaces
//  - no leading, trailing, or repeating spaces
// output: string of words where first and last letters are swapped
//  - swap the first letter with the last letter in each word
//  - case should not change or matter

// Examples:
// swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
// swap('Abcde');                          // "ebcdA"
// swap('a');                              // "a"

// Algorithm:
// Get an array of words from the given string
// Iterate over the array of words, transforming
//  - Return the word with first and last letters swapped
// Join and return the resulting array

// Swap first and last letters of a given word
//  - Split the string into an array of characters
//  - Save the values of the first and last letters into variables
//  - Assign the last to the first space in the array
//  - Assign the first to the last space in the array
//  - Join and return the resulting string

function swap(text) {
  let words = text.split(' ');

  return words.map(word => switchWordLetters(word)).join(' ');
}

function switchWordLetters(word) {
  let letters = [];

  for (let idx = 0; idx < word.length; idx += 1) {
    if (idx === 0) {
      letters.push(word[word.length - 1]);
    } else if (idx === word.length - 1) {
      letters.push(word[0]);
    } else {
      letters.push(word[idx]);
    }
  }

  return letters.join('');
}

console.log(
  swap('Oh what a wonderful day it is') === 'hO thaw a londerfuw yad ti si'
);  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde') === 'ebcdA');                          // "ebcdA"
console.log(swap('a') === 'a');                              // "a"
