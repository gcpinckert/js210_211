/*
input: an array and a value
output: the first index at which the value can be found
- if the value is not present, return -1
*/

function indexOf(array, value) {
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === value) {
      return index;
    }
  }

  return -1;
}

console.log(indexOf([1, 2, 3, 3], 3));         // 2
console.log(indexOf([1, 2, 3], 4));            // -1