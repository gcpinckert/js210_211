/*
input: an integer
  - assume an integer greater than 1
output: an integer
  - the sum of numbers between 1 and that number that are multiples of 3 or 5

Algorithm:
- Initialize a sum variable to 0
- Iterate from 1 to the given number
  - If the current number is evenly divisible by 3 or 5
    - Add it to the sum
- Return the sum
*/

function multisum(number) {
  let sum = 0;

  for (let iterator = 1; iterator <= number; iterator += 1) {
    if ((iterator % 3 === 0) || (iterator % 5 === 0)) {
      sum += iterator;
    }
  }

  return sum;
}

console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168