// input: two arrays containing list of numbers
// output: single array
// - containing the numbers at same index in each input array multiplied
// - i.e. [ (arr1[0] * arr2[0]), (arr1[1] * arr2[1]), ...etc ]

// Example
// multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]
// 3 * 9 = 27, 5 * 10 = 50, 7 * 11 = 77

// Algorithm
// Initialize an empty array to hold the results
// Iterate a loop from 0 to the length of the first array
// If the element at current index in 2nd array is a number
// Multiply it with the element at current index in the 1st array
// Push the product into the results array
// Return the results array

function multiplyList(list1, list2) {
  let products = [];

  for (let idx = 0; idx < list1.length; idx += 1) {
    if (typeof list2[idx] === 'number') {
      products.push(list1[idx] * list2[idx]);
    }
  }

  return products;
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]