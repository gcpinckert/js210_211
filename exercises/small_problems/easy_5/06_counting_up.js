// input: integer
// output: an array
// - containing ints from 1-> input num
// - elements should be in ascending order
// - the range is inclusive
// - input num will always be positive

// Examples:
// sequence(5);    // [1, 2, 3, 4, 5]
// sequence(3);    // [1, 2, 3]
// sequence(1);    // [1]

// Algorithm:
// Initialize an empty array to hold the results
// Iterate a loop from 1 up to and including the input num
// Push the current iteration number to the results array
// Return the results array

function sequence(num) {
  let numbers = [];

  for (let idx = 1; idx <= num; idx += 1) {
    numbers.push(idx);
  }

  return numbers;
}

console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]