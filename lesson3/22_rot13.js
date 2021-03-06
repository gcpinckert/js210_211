/*
input: a string of text
output: an encoded string of text where each char is rotated 13 places
  - if the character is an English alphabetical letter, change it to the char 13 positions later in the alphabet
  - if you reach the end of the alphabet, return to the beginning
  - For example, a -> n and o -> b
  - Letter transformation preserves case, i.e. A -> N
  - Non-alphabetical characters should stay the same
  - Because 26 / 13 is 2, applying the cipher twice should result in the original string

Examples:
console.log(rot13('Teachers open the door, but you must enter by yourself.'));

// logs:
Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.

T -> G
e -> r
a -> n
c -> p
h -> u
e -> r
r -> e
s -> f

- For letters a - m, we want to add 13 (a becomes n and m becomes z)
- For letters n - z, we want to subtract 13 (n becomes a and z becomes m)

Algorithm: 
- Establish constants to represent:
  - A - M ascii code range beginning and end (65 - 76)
  - a - m ascii code range beginning and end ()
  - N - Z ascii code range beginning and end
  - n - z ascii code range beginning and end
- Initialize an empty string variable to represent the encoded string
- Iterate over the characters in the given string
  - Get the ascii code of the current char
  - If the ascii code of the current char is in the a-m or A-M range:
    - Add 13 to the ascii code and get the ensuing letter
    - Add the resulting letter to the encoded string
  - If the ascii code of the current char is in the n - z or the N - Z range:
    - Subtract 13 from the ascii code and get the ensuing letter
    - Add the resulting letter to the encoded string
  - Otherwise, just add the current char to the encoded string
- Return the encoded string
*/

const ROTATION = 13;
const alphaFirstHalf = (char) => /[A-Ma-m]/.test(char);

function rotateChar(char) {
  if (alphaFirstHalf(char)) {
    return String.fromCharCode(char.charCodeAt(0) + ROTATION);
  } else {
    return String.fromCharCode(char.charCodeAt(0) - ROTATION);
  }
}

function rot13(originalStr) {
  let encodedStr = "";

  for (let index = 0; index < originalStr.length; index += 1) {
    let currentChar = originalStr[index];
    if (/[A-Za-z]/.test(currentChar)) {
      encodedStr += rotateChar(currentChar);
    } else {
      encodedStr += currentChar;
    }
  }

  return encodedStr;
}

console.log(
  rot13("Teachers open the door, but you must enter by yourself.") ===
    "Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys."
);
console.log(
  rot13(rot13("Teachers open the door, but you must enter by yourself.")) ===
    "Teachers open the door, but you must enter by yourself."
);
console.log(rot13("Abc") == "Nop");
console.log(rot13("xYz") == "kLm");
console.log(rot13("EBG13 rknzcyr.") == "ROT13 example.");
console.log(
  rot13("This is my first ROT13 excercise!") ==
    "Guvf vf zl svefg EBG13 rkprepvfr!"
);