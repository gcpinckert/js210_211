// input: string (will not be empty)
// output: the "middle" character(s) from that string
// - if the string has odd number of characters, return single char
// - if the string has even number of characters, return 2 chars

// Examples:
// centerOf('I Love JavaScript'); // "a"
// centerOf('Launch School');     // " "
// centerOf('Launch');            // "un"
// centerOf('Launchschool');      // "hs"
// centerOf('x');                 // "x"

// Algorithm
// - Divide the length of the string in half
// - is the resulting number an integer or a float?
// - if integer, return the section of string from half - 1 to half + 1
// - if decimal, return the char at half rounded down

function centerOf(text) {
  let half = text.length / 2;
  if (half === Math.trunc(half)) {
    return text.slice((half - 1), (half + 1));
  } else {
    return text[Math.floor(half)];
  }
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"