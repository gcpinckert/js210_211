/*
input: an array and a value (of any type)
output: an integer, the last index and which the given value can be found
- return -1 if the given value is not present in the array
*/

function lastIndexOf(array, value) {
  let lastIndex = -1;

  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === value) {
      lastIndex = index;
    }
  }

  return lastIndex;
}

console.log(lastIndexOf([1, 2, 3, 3], 3));     // 3
console.log(lastIndexOf([1, 2, 3], 4));        // -1