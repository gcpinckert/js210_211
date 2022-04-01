/*
input: an array and a value (can be any type)
output: return the updated length of the array
- add the given value to the *start* of the given array
*/

function unshift(array, value) {
  for (let index = array.length; index >= 0; index -= 1) {
    array[index] = array[index - 1];
  }

  array[0] = value;
  return array.length;
}

let count = [1, 2, 3];
console.log(unshift(count, 0));      // 4
console.log(count);                  // [ 0, 1, 2, 3 ]