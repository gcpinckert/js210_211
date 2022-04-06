/*
shift:
- remove the first element from a given array
- returns the removed element
- if given array is empty, return undefined
- mutates the given array

- Return undefined if the array is empty
- Save the first element in the array to a variable
- Iterate over the given array
  - Reassign the element at the current index to the element at index + 1
- Now we have an array where the last element is undefined
- Reset the length to the length of the array - 1
- Return the resulting array

unshift:
- adds one or more elements to the start of an array
- returns the new length of the array
- mutates the given array

- Get what the array should look like by concatenating values with the original array
- Iterate over this, and reassign the elements in array to those in the reference array
- Return the new length of the given array
*/

function shift(array) {
  if (array.length === 0) return;

  let shifted = array[0];

  for (let i = 0; i < array.length; i += 1) {
    array[i] = array[i + 1];
  }

  array.length -= 1;
  return shifted;
}

function unshift(array, ...values) {
  let reference = values.concat(array);

  for (let i = 0; i < reference.length; i += 1) {
    array[i] = reference[i];
  }

  return array.length;
}

console.log(shift([1, 2, 3]));                // 1
console.log(shift([]));                       // undefined
console.log(shift([[1, 2, 3], 4, 5]));        // [1, 2, 3]

console.log(unshift([1, 2, 3], 5, 6));        // 5
console.log(unshift([1, 2, 3]));              // 3
console.log(unshift([4, 5], [1, 2, 3]));      // 3

const testArray = [1, 2, 3];
console.log(shift(testArray));                // 1
console.log(testArray);                       // [2, 3]
console.log(unshift(testArray, 5));           // 3
console.log(testArray);                       // [5, 2, 3]