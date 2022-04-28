// input: an array of numbers
// output: an array with the same number of elements
//  - each element represents the value of the "running total"
//  - i.e. [ele0, ele0 + ele1, ele0 + ele1 + ele2, ...etc]
//  - an empty array arg returns an empty array

// Examples:
// runningTotal([2, 5, 13]);
// [2, (2 + 5), (2 + 5 + 13)] | [2, 7, 20]
// runningTotal([14, 11, 7, 15, 20]);
// [14, (14 + 11), (14 + 11 + 7), ...etc ] | [14, 25, 32, 47, 67]
// runningTotal([3]);                    // [3]
// runningTotal([]);                     // []

// Algorithm
// Initialize a new empty array to hold totals
// Initialize a sum variable to 0
// Iterate over the array
//  Save sum + current element to sum
//  Add this value to the results array
// Return the results array

function runningTotal(numbers) {
  let totals = [];
  let sum = 0;

  numbers.forEach(number => {
    sum += number;
    totals.push(sum);
  });

  return totals;
}

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []

// Further Exploration -> rewrite with map

function runningTotal2(numbers) {
  let sum = 0;

  return numbers.map(number => {
    sum += number;
    return sum;
  });
}

console.log(runningTotal2([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal2([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal2([3]));                    // [3]
console.log(runningTotal2([]));                     // []