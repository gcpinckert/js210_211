/*
input: two array arguments
output: a new array that contains the values from each of the original arrays
- Can we mutate the array arguments? Let's say no

- Initialize a new array to hold all the elements
- Initialize a counter to 0
- Iterate over the elements in the first array
  - Add each element to the new array at index counter
  - Increment counter
- Iterate over the elements in the second array
  - Add each element to the new array at index counter
  - increment counter
- Return the results array
*/

function concat(arr1, arr2) {
  let concatArr = [];
  let concatIndex = 0;

  for (let index = 0; index < arr1.length; index += 1) {
    concatArr[concatIndex] = arr1[index];
    concatIndex += 1;
  }

  for (let index = 0; index < arr2.length; index += 1) {
    concatArr[concatIndex] = arr2[index];
    concatIndex += 1;
  }

  return concatArr;
}

console.log(concat([1, 2, 3], [4, 5, 6]));       // [ 1, 2, 3, 4, 5, 6 ]