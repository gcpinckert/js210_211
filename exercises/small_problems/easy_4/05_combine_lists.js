// input: two arrays
// output: array containing all elements from input arrays
// - each element should be alternating from the input arrays
// - i.e. [arr1, arr2, arr1, arr2... etc]
// - input arrays will not be empty
// - input arrays will have the same number of elements

// Examples:
// interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]

// Algorithm:
// - Initialize an empty array to hold results
// - Iterate a loop from 0 to the length of the array, tracking idx
// - Push the element at current index in first array to results
// - Push the element at current index in second array to results
// - Return the results

function interleave(arr1, arr2) {
  let alternatingElements = [];

  for (let idx = 0; idx < arr1.length; idx += 1) {
    alternatingElements.push(arr1[idx], arr2[idx]);
  }

  return alternatingElements;
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]
