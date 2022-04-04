/*
input: an array, start index, number of values to remove
output: a new array containing values removed from the original array
  - starting with the first index, remove the specified number of values
  - Make sure you are mutating the original array

- Initialize an empty array to hold the removed elements
- The last index of the removed elements will be (start index + times) - 1
- Iterate from start index to the end of the given array
  - If the current index is between start index and last index
    - Add the current element to the results array
  - Reassign the current element to the element at index + times
- Change the length of the original array to the original length - times
- Return the removed elements array
*/

function push(array, value) {
  array[array.length] = value;
  return array.length;
}

function splice(arr, start, times) {
  let slicedArr = [];
  let last = start + times;

  for (let index = start; index < arr.length; index += 1) {
    if (index >= start && index < last) {
      push(slicedArr, arr[index]);
    }

    arr[index] = arr[index + times];
  }

  arr.length = arr.length - times;
  return slicedArr;
}

let count = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(splice(count, 2, 5));                   // [ 3, 4, 5, 6, 7 ]
console.log(count);                                 // [ 1, 2, 8 ]