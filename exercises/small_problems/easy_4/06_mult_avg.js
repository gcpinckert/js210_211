// input: an array of integers
// output: multiplicative average of the integers
// - first multiply all ints together
// - divide product by total number of ints
// - return result as a *string*
// - should be rounded to three decimal places

// Examples
// showMultiplicativeAverage([3, 5]);                   // "7.500"
// showMultiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"

// Algorithm:
// - Reduce the given array to the product of all it's elements
// - Divide the product by the length of the array
// - Round to three decimal places
// - Convert to a string
// - Return the result

function showMultiplicativeAverage(numbers) {
  let avg = numbers.reduce((num, product) => num * product);
  avg /= numbers.length;
  return avg.toFixed(3);
}

console.log(showMultiplicativeAverage([3, 5]));                   // "7.500"
console.log(showMultiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"