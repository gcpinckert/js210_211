/*
input: either a string or an array
output: a new string or array with the chars/elements in reverse order

- Initialize a new array to hold reversed elements
- Iterate over the argument backwards using index (this will work for both str and arr)
  - push each element into the results array
- If the original argument was a string, join the array and return the results
- otherwise, just return the results array
*/

function reverse(inputForReversal) {
  let reversed = [];
  let lastIndex = inputForReversal.length - 1

  for (let i = lastIndex; i >= 0 ; i -= 1) {
    reversed.push(inputForReversal[i]);
  }

  if (Array.isArray(inputForReversal)) {
    return reversed;
  } else {
    return reversed.join('');
  }
}

console.log(reverse('Hello'));           // "olleH"
console.log(reverse('a'));               // "a"
console.log(reverse([1, 2, 3, 4]));      // [4, 3, 2, 1]
console.log(reverse([]));                // []

const array = [1, 2, 3];
console.log(reverse(array));             // [3, 2, 1]
console.log(array);                      // [1, 2, 3]