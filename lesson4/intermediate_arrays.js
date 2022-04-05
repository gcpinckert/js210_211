/*
input: an array
output: all values from the argument array who are at odd indices

- Initialize a new array to hold results
- Iterate over the given array
- If the index number is odd, add it to the results array
- Return the results array
*/

function oddElementsOf(arr) {
  let oddElements = [];

  for (let index = 0; index < arr.length; index += 1) {
    if (index % 2 === 0) continue;
    oddElements.push(arr[index]);
  }

  return oddElements;
}

let digits = [4, 8, 15, 16, 23, 42];

console.log(oddElementsOf(digits));    // returns [8, 16, 42]
console.log('');

/*
input: array
output: new array with all given elements in the original order
  followed by all given elements in reverse order

- Initialize a new array to a copy of the given array
- Reverse the copied array and add it to the original
- Return the result
*/

function forwardsBackwards(arr) {
  let backwards = arr.slice().reverse();
  return arr.concat(backwards);
}

digits = [1, 2, 3];

console.log(forwardsBackwards(digits));   // [1, 2, 3, 3, 2, 1]
console.log('');

/*
input: array of numbers
output: a new array of the numbers sorted in descending order
  - do not mutate the original array
  - use the array sort() method (mutating)
  - note that if no callback function is provided, all elements are converted
    to strings, and compared in ASCIIbetical order

- Initialize a copy of the original array
- Sort the original array, making sure to keep the elements as numbers
- Earlier elements should be larger than later ones
*/

function sortDescending(arr) {
  let sorted = arr.slice();
  return sorted.sort((a, b) => b - a);
}

let array = [23, 4, 16, 42, 8, 15];
let result = sortDescending(array);  // returns [42, 23, 16, 15, 8, 4]
console.log(result);                 // logs    [42, 23, 16, 15, 8, 4]
console.log(array);                  // logs    [23, 4, 16, 42, 8, 15]
console.log('');

/*
input: an array of arrays
output: a new array that contains the sums of each sub-arr

- Initialize a new array to hold results
- Iterate over the given array
  - For each sub_arr, reduce it to the sum of it's elements
  - Push the sum to the results array
- Return the results array
*/

function matrixSums(arr) {
  let sums = [];

  arr.forEach(subArr => {
    let total = subArr.reduce((sum, num) => sum + num, 0);
    sums.push(total);
  });

  return sums;
}

console.log(matrixSums([[2, 8, 5], [12, 48, 0], [12]]));  // returns [15, 60, 12]
console.log('');

/*
input: array
output: new array with all duplicate elements removed

- Initialize a new array to hold the results
- Iterate over the given array
  - If the element in question is included in the results array
  - Go to the next iteration
  - Otherwise, add it to the results array
- Return the results array
*/

function uniqueElements(arr) {
  let unique = [];

  arr.forEach(value => {
    if (!unique.includes(value)) {
    unique.push(value);
    }
  });

  return unique;
}

console.log(uniqueElements([1, 2, 4, 3, 4, 1, 5, 4]));  // returns [1, 2, 4, 3, 5]