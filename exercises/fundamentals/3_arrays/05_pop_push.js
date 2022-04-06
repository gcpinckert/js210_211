/*
pop:
- takes an array as argument
- removes the last element from the array
- returns that element
- if passed an empty array, returns undefined

push:
- takes an array and any number of values as argument
- adds the values passed to the end of the given array
- returns the new length of the array
*/

function pop(array) {
  if (array.length === 0) return;

  let lastElement = array[array.length - 1];
  array.length -= 1;

  return lastElement;
}

function push(array, ...values) {
  let length = array.length;
  for (let index = 0; index < values.length; index += 1) {
    let arrayIndex = length + index;
    array[arrayIndex] = values[index];
  }

  return array.length;
}

// pop
const array1 = [1, 2, 3];
console.log(pop(array1));                       // 3
console.log(array1);                            // [1, 2]
console.log(pop([]));                           // undefined
console.log(pop([1, 2, ['a', 'b', 'c']]));      // ["a", "b", "c"]
console.log('');

// push
const array2 = [1, 2, 3];
console.log(push(array2, 4, 5, 6));             // 6
console.log(array2);                            // [1, 2, 3, 4, 5, 6]
console.log(push([1, 2], ['a', 'b']));          // 3
console.log(push([], 1));                       // 1
console.log(push([]));                          // 0