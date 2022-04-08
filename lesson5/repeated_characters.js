/*
input: string
output: object containing a count of any character that is repeated more than once in the string
- determine the count for each character
- return an object that contains character counts, limited to characters that have a count
  of at least 2
- Character counts should be case insensitive (i.e. 'Pp' -> { p: 2 })

- get a downcased version of the string
- Initialize an empty object to hold counts
- Iterate over the characters in the string
  - If the count of the current character is at least 2:
    - Add the current character as key and the count as value to the object
- Return the object

- Count the number of times a character appears in a string (case insensitive)
 - accept a character and string argument
 - initialize a counter to 0
 - iterate over each character in the string
 - If the current character is equal to the given character:
  - Increment the counter
 - Return the counter
*/

function charCount(char, string) {
  let count = 0;

  for (let index  = 0; index < string.length; index += 1) {
    if (char === string[index]) {
      count += 1;
    }
  }

  return count;
}

function repeatedCharacters(string) {
  string = string.toLowerCase();
  let counts = {};

  for (let index = 0; index < string.length; index += 1) {
    if (Object.keys(counts).includes(string[index])) continue;

    let currentCharCount = charCount(string[index], string);

    if (currentCharCount >= 2) {
      counts[string[index]] = currentCharCount;
    }
  }

  return counts;
}

console.log(repeatedCharacters('Programming'));    // { r: 2, g: 2, m: 2 }
console.log(repeatedCharacters('Combination'));    // { o: 2, i: 2, n: 2 }
console.log(repeatedCharacters('Pet'));            // {}
console.log(repeatedCharacters('Paper'));          // { p: 2 }
console.log(repeatedCharacters('Baseless'));       // { s: 3, e: 2 }

