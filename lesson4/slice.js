/*
input: an array, a start index, and an end index
output: new array consisting of values from start index up to end index (exclusive)
- Do not modify the original array
- Don't use any built-in array methods
- You can use functions you previously built
*/

function push(array, value) {
  array[array.length] = value;
  return array.length;
}

function slice(arr, startIndex, endIndex) {
  let slicedArr = [];

  for (index = startIndex; index < endIndex; index += 1) {
    push(slicedArr, arr[index]);
  }

  return slicedArr;
}

console.log(slice([1, 2, 3, 4, 5], 0, 2));                      // [ 1, 2 ]
console.log(slice(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 1, 3));  // [ 'b', 'c' ]