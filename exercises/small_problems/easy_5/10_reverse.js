// input: string
// output: new string containing all words from input string
// - if the word has 5 or more chars, reverse the letters in the word
// - only alphabetical characters and whitespace will be in the string

// Examples:
// reverseWords('Professional');             => "lanoisseforP"
// reverseWords('Walk around the block');    => "Walk dnuora the kcolb"
// reverseWords('Launch School');            => "hcnuaL loohcS"

// Algorithm:
// Split the string into an array of words
// Iterate over the array using transformation
// - Does the current word have 5 or more letters?
// - If so, reverse the letters, otherwise, leave it alone
// Join (with a ' ') and return the resulting array

// Reverse the letters in a word
// split the word into an array of characters
// reverse the array and join back into a string

function reverseWords(text) {
  let words = text.split(' ');
  return words.map(word => {
    if (word.length >= 5) {
      return word.split('').reverse().join('');
    } else {
      return word;
    }
  });
}

console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"