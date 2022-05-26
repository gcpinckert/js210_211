// input: string
// output: new string with the words from input in reverse order
// - empty string returns empty string

// Examples:
// reverseSentence('');                       // ""
// reverseSentence('Hello World');            // "World Hello"
// reverseSentence('Reverse these words');    // "words these Reverse"

// Algorithm:
// Split the input string into an array of words
// Reverse the array
// Join and return the results

function reverseSentence(text) {
  let words = text.split(' ');
  return words.reverse().join(' ');
}

console.log(reverseSentence(''));                       // ""
console.log(reverseSentence('Hello World'));            // "World Hello"
console.log(reverseSentence('Reverse these words'));    // "words these Reverse"
