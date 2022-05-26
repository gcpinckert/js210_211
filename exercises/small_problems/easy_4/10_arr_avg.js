// input: an array containing integers
// output: the average of all integers from the array
// - round down to the nearest integer
// - the array will always contain positive integers

// Examples
// average([1, 5, 87, 45, 8, 8]);       // 25
// average([9, 47, 23, 95, 16, 52]);    // 40

// Algorithm
// - get the sum of all the integers in the array
// - divide the sum by the length of the array
// - round down to the nearest integer

function average(numbers) {
  let sum = numbers.reduce((num, sum) => num + sum, 0);
  let avg = Math.floor(sum / numbers.length);
  return avg;
}

console.log(average([1, 5, 87, 45, 8, 8]));       // 25
console.log(average([9, 47, 23, 95, 16, 52]));    // 40