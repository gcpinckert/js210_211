/*
input: an array
output: the value of the last element in the array
- only use [] and the length property
*/

function lastInArray(array) {
  return array[array.length - 1];
}

// testing
console.log(lastInArray([1, 2, 3, 4])); // 4
console.log(lastInArray([4, 5, 6, 7])); // 7
console.log(lastInArray([0]));          // 0
console.log(lastInArray([]));           // undefined
console.log('');

/*
input: an array of first names
output: logs all the names to the console, one per line
- log the names in the same sequence they appear in the array
- use a for loop
*/

function rollCall(names) {
  for (let index = 0; index < names.length; index += 1) {
    console.log(names[index]);
  }
}

// testing
let roster = ['Alice', 'Bob', 'Caleb', 'Danielle'];
rollCall(roster);
console.log('');

/*
input: an array
output: a new array containing the values in reverse order
- use a for loop that iterates backwards over the input array
- push each element to the new output array
*/

function reverse(array) {
  let reversed = [];
  for (let index = (array.length - 1); index >= 0; index -= 1) {
    reversed.push(array[index]);
  }

  return reversed;
}

// testing
console.log(reverse([1, 2, 3, 4])); // [4, 3, 2, 1]
console.log(reverse([4, 5, 6, 7])); // [7, 6, 5, 4]
console.log(reverse([0]));          // [0]
console.log(reverse([]));           // []
console.log('');

/*
input: array
output: a string containing all values in the array
- use a for loop to process array elements
- coerce values to a String
- concatenate to returned results string
*/

function arrayToString(array) {
  let resultsStr = '';

  for (let index = 0; index < array.length; index += 1) {
    resultsStr += String(array[index]);
  }

  return resultsStr;
}

// testing
console.log(arrayToString([1, 'a', 4])); // 1a4
console.log(arrayToString(['a', true, NaN, undefined])); // atrueNaNundefined