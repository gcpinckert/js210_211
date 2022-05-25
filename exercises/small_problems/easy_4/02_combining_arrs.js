// input: two arrays
// output: single array with all elements from input arrays
// - no duplicate values in the resulting array
// - arguments will always be arrays

// Example
// union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]

// Algorithm

// Initialize an empty array for results
// Iterate over the input arrays
// Is the current element already in the results array?
// If so - next
// Otherwise, push the current element to the results array
// Return the results array

function union(arr1, arr2) {
  let results = [];

  function addUniqueArrElements(allElements, arr) {
    for (let idx = 0; idx < arr.length; idx += 1) {
      if (allElements.includes(arr[idx])) continue;
      allElements.push(arr[idx]);
    }
  }

  addUniqueArrElements(results, arr1);
  addUniqueArrElements(results, arr2);

  return results;
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]