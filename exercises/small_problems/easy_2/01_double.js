/*
input: string
output: string, 
  - all consecutive duplicate characters should be collapsed into a single character

Examples:
crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""

Algorithm:
- initialize a collapsed variable to hold the results to an empty string
- iterate through the given string, tracking index
  - if the character at current index is the same as the last character in collapsed
    - go to the next iteration
  - otherwise, add the current character to collapsed
- return the collapsed string
*/

function crunch(string) {
  let collapsed = '';

  for (let index = 0; index < string.length; index += 1) {
    let lastCollapsedIndex = collapsed.length - 1;
    if (string[index] === collapsed[lastCollapsedIndex]) continue;
    collapsed += string[index];
  }

  return collapsed;
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""