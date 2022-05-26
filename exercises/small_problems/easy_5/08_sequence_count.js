// input: two integers
// - first integer represents a count (always a postive integer or 0)
// - second integer is the starting number (any integer)
// output: an array
// - containing count elements (if 0, return empty array)
// - each element is multiple of the starting number

// Examples:
// sequence(5, 1);          => [1, 2, 3, 4, 5]
// sequence(4, -7);         => [-7, -14, -21, -28]
// sequence(3, 0);          => [0, 0, 0]
// sequence(0, 1000000);    => []

// Algorithm
// Initialize an empty array to hold the sequence
// Iterate a loop from 1 to count (inclusive)
// Multiply the current iteration number by the starting number
// Push the product into the array
// Return the array

function sequence(count, startingNum) {
  let multiples = [];

  for (let idx = 1; idx <= count; idx += 1) {
    multiples.push(idx * startingNum);
  }

  return multiples;
}

console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
console.log(sequence(4, -7));         // [-7, -14, -21, -28]
console.log(sequence(3, 0));          // [0, 0, 0]
console.log(sequence(0, 1000000));    // []
