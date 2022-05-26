// input: string
// output: new string
// - each consonant in the string should be doubled
// - do not double vowels
// - do not double digits
// - do not double whitespace
// - do not double punctuation

// Examples:
// doubleConsonants('String');          // "SSttrrinngg"
// doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
// doubleConsonants('July 4th');        // "JJullyy 4tthh"
// doubleConsonants('');                // ""

// Algorithm
// - Split the string into an array of characters
// - Iterate over the array of characters, transforming
//   - Is the current character a consonant?
//   - If yes, double it, if not, leave as is
// - Join and return the resulting array

function isConsonant(char) {
  return (/[a-z]/i.test(char)) && (/[^aeiou]/i.test(char));
}

function doubleConsonants(string) {
  let chars = string.split('');
  chars = chars.map(char => {
    if (isConsonant(char)) {
      return char + char;
    } else {
      return char;
    }
  });

  return chars.join('');
}

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""