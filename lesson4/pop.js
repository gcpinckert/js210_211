/*
input: an array
output: the last element of the array
- remove (destructively) the last element from the given array and return it
*/

function pop(array) {
  if (array.length === 0) return;

  let lastElement = array[array.length - 1];
  array.length = array.length - 1;
  return lastElement;
}

let count = [1, 2, 3];
console.log(pop(count));             // 3
console.log(count);                  // [ 1, 2 ]
console.log(pop([]));                // undefined