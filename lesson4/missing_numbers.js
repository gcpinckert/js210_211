/*
input: a sorted array of integers
output: an array that includes the "missing" numbers in order
  - may contain negative numbers
  - if there are no missing numbers, return an empty array

- Initialize an empty array to hold missing numbers
- Iterate a loop from the first element in the array to the last element
  - If the current number is included in the original array, go to the next iteration
  - Otherwise, add the current number to the missing numbers array
*/

function missing(numbers) {
  let missingNums = [];
  let last = numbers.length - 1

  for (let currentNum = numbers[0]; currentNum < numbers[last]; currentNum += 1) {
    if (numbers.includes(currentNum)) continue;
    missingNums.push(currentNum);
  }

  return missingNums;
}

console.log(missing([-3, -2, 1, 5]));                  // [-1, 0, 2, 3, 4]
console.log(missing([1, 2, 3, 4]));                    // []
console.log(missing([1, 5]));                          // [2, 3, 4]
console.log(missing([6]));                             // []