// input: an array
// output: a nested array containing two sub-arrays
// - first nested array contains first half of elements from input array
// - second nested array contains second half of elements from input array
// - if input array is odd, the first nested array should be larger
// - if array is only one element, the second half is an empty array
// - an empty array returns a nested array of two empty arrays

// Examples:
// halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
// halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
// halvsies([5]);                // [[5], []]
// halvsies([]);                 // [[], []]

// Algorithm
// - Initialize an empty array to hold results
// - Divide the length of the input array in half, and round up
// - Slice the input array from 0 to half rounded up
// - Push the resulting slice into results
// - Slice the input array from half rounded up + 1 to the end of the array
// - Push the resulting slice into results
// - Return the results

function halvsies(array) {
  let halves = [];
  let half = Math.ceil(array.length / 2);
  halves.push(array.slice(0, half));
  halves.push(array.slice(half));
  return halves;
}

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]