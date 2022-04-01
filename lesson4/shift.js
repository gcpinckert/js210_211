/*
input: an array
output: the first value from the beginning of the array
- remove the first value from the start of the array and return it
*/

function shift(array) {
  if (array.length === 0) return;
  
  let firstElement = array[0];

  for (let index = 0; index < array.length; index += 1) {
    array[index] = array[index + 1];
  }

  array.length -= 1;
  return firstElement;
}

let count = [1, 2, 3];
console.log(shift(count));           // 1
console.log(count);                  // [ 2, 3 ]
console.log(shift([]));              // undefined