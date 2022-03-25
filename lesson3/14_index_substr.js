/*
### indexOf function ###
input: two strings
output: the index of the first character of a substring
- checks the first string for a substring matches the second string
- if there is a matching substring
- returns the index of the *first* character of that substring
- If there are more than one matching substrings, it should
  return the beginning index of the first matching substring
- If there are no matching substrings, return -1

### lastIndexOf ###
input: two strings
output: same as above, except for:
- returns the index of where the *last* matching substring begins

Rules:
- You can only use square brackets to access a character by index (i.e. [i])
- You may use the length property
- You cannot use any other built in String properties or methods

Examples:

indexOf('Some strings', 's');                      // 5
indexOf('Blue Whale', 'Whale');                    // 5
indexOf('Blue Whale', 'Blute');                    // -1
indexOf('Blue Whale', 'leB');                      // -1

lastIndexOf('Some strings', 's');                  // 11
lastIndexOf('Blue Whale, Killer Whale', 'Whale');  // 19
lastIndexOf('Blue Whale, Killer Whale', 'all');    // -1

indexOf Algorithm:
- Initialize a loop to iterate from 0 to the length of the first string - length of second string
  - Check and see if the char at current index in str1 matches the char at current index in str2
    - If so, generate a "substr to check"
    - Iterate a loop from current index to length of second string - 1
      - add the char at substr current index to the substr to check
    - Does the substr match the second string?
      - If yes, return the current index (from first string)
    - Otherwise, go to the next iteration

lastIndexOf Algorithm:
- Guard clause: if indexof(args) returns -1, return -1
- Initialize an array to hold indexes
- Initialize a counter to 0
- While the counter < the length of firstString - secondString
  - Get the indexOf for firstString and secondString
  - Add it to the indexes array
  - Reassign counter to this value as well
  - Reassign firstString to the length of counter -> the end of firstString
- Return the last element in the indexes array
*/

function indexOf(firstString, secondString) {
  for (
    let firstIndex = 0;
    firstIndex <= firstString.length - secondString.length;
    firstIndex += 1
  ) {
    if (firstString[firstIndex] === secondString[0]) {
      let substrToCheck = "";

      for (
        let secondIndex = firstIndex;
        secondIndex < firstIndex + secondString.length;
        secondIndex += 1
      ) {
        substrToCheck += firstString[secondIndex];
      }

      if (substrToCheck === secondString) {
        return firstIndex;
      }
    }
  }

  return -1;
}

function lastIndexOf(firstString, secondString) {
  if (indexOf(firstString, secondString) === -1) {
    return -1;
  }

  let indexes = [];

  for (
    let firstIndex = 0;
    firstIndex <= firstString.length - secondString.length;
    firstIndex += 1
  ) {
    if (firstString[firstIndex] === secondString[0]) {
      let substrToCheck = "";

      for (
        let secondIndex = firstIndex;
        secondIndex < firstIndex + secondString.length;
        secondIndex += 1
      ) {
        substrToCheck += firstString[secondIndex];
      }

      if (substrToCheck === secondString) {
        indexes.push(firstIndex);
      }
    }
  }

  return indexes.pop();
}


console.log(indexOf('Some strings', 's'));                      // 5
console.log(indexOf('Blue Whale', 'Whale'));                    // 5
console.log(indexOf('Blue Whale', 'Blute'));                    // -1
console.log(indexOf('Blue Whale', 'leB'));                      // -1

console.log(lastIndexOf('Some strings', 's'));                  // 11
console.log(lastIndexOf('Blue Whale, Killer Whale', 'Whale'));  // 19
console.log(lastIndexOf('Blue Whale, Killer Whale', 'all'));    // -1


// Further Exploration

// function lastIndexOf(firstString, secondString) {
//   if (indexOf(firstString, secondString) === -1) {
//     return -1;
//   }

//   let indexes = [];
//   let indexCounter = 0;
//   let stringToCheck = firstString;

//   while (indexCounter <= firstString.length - secondString.length) {
//     let currentIndex = indexOf(stringToCheck, secondString);
//     indexCounter += currentIndex;
//     indexes.push(indexCounter);
//     let newStringToCheck = "";

//     for (
//       let indexToAdd = currentIndex;
//       indexToAdd < firstString.length;
//       indexToAdd += 1
//     ) {
//       newStringToCheck += firstString[indexToAdd];
//     }

//     stringToCheck = newStringToCheck;
//   }

//   return indexes.pop();
// }
