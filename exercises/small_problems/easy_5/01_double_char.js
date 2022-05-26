// input: string
// output: new string
// - each character from the original string should be doubled

// Examples:
// repeater('Hello');        // "HHeelllloo"
// repeater('Good job!');    // "GGoooodd  jjoobb!!"
// repeater('');             // ""

// Algorithm:
// - Convert the input string to an array of chars
// - Iterate over the array of chars, using transformation
//   - for each char, concatenate it to itself
// - Join and return the resulting array

function repeater(string) {
  let characters = string.split('');
  return characters.map(char => char + char).join('');
}

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""