/*
input: two array arguments
output: boolean
  - true if the arrays contain all the same values (in any order)
  - false otherwise

- Create a copy of each array and sort it
- Iterate over one of the sorted arrays
  - If the element at array1 index is not equal to the element at array2 index
    - Return false
- If we get through iteration, return true
*/

function areArraysEqual(array1, array2) {
  if (array1.length !== array2.length) return false;

  let sortedArr1 = array1.slice().sort();
  let sortedArr2 = array2.slice().sort();

  for (let index = 0; index < array1.length; index += 1) {
    if (sortedArr1[index] !== sortedArr2[index]) return false;
  }

  return true;
}

console.log(areArraysEqual([1, 2, 3], [1, 2, 3]));                  // true
console.log(areArraysEqual([1, 2, 3], [3, 2, 1]));                  // true
console.log(areArraysEqual(['a', 'b', 'c'], ['b', 'c', 'a']));      // true
console.log(areArraysEqual(['1', 2, 3], [1, 2, 3]));                // false
console.log(areArraysEqual([1, 1, 2, 3], [3, 1, 2, 1]));            // true
console.log(areArraysEqual([1, 2, 3, 4], [1, 1, 2, 3]));            // false
console.log(areArraysEqual([1, 1, 2, 2], [4, 2, 3, 1]));            // false
console.log(areArraysEqual([1, 1, 2], [1, 2, 2]));                  // false
console.log(areArraysEqual([1, 1, 1], [1, 1]));                     // false
console.log(areArraysEqual([1, 1], [1, 1]));                        // true