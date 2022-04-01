/*
input: an array, and some other value (can be any type)
output: the new length of the array (an integer)
- function should mutate the argument array by adding the second argument
  to the *end* of the array
*/

function push(array, value) {
  array[array.length] = value;
  return array.length;
}

let count = [0, 1, 2];
console.log(push(count, 3));         // 4
console.log(count);                  // [ 0, 1, 2, 3 ]