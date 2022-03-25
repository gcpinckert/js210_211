/*
input: two positive integers
output: the greatest common divisor of the two given integers
- a divisor is a number that can be divided evenly into another number

Examples:
gcd(12, 4);   // 4
  - divisors of 12: 12, 6, 4, 3, 2, 1
  - divisors of 4: 4, 2, 1
  - greatest one that lives in both is 4
gcd(15, 10);  // 5
  - divisors of 15: 15, 5, 3, 1
  - divisors of 10: 10, 5, 2, 1
  - greatest one that lives in both is 5
gcd(9, 2);    // 1
  - divisors of 9: 9, 3, 1
  - divisors of 2: 2, 1
  - greatest one that lives in both is 1

Algorithm:
- Iterate from the smaller number down to 1
- Return the first number that can be evenly divided into both nums
- This works because the way we find our divisors is in descending order,
  so it should return the greatest one they have in common
- When dealing with edge cases like prime numbers, the result will always be 1
  which will always be the last number evaluated in the iteration

Useful Helper Method?
- Get the divisors for a given number
  - Initialize an empty array to hold divisors
  - Iterate a loop from the input number down to 1
    - Check and see if the current number is a divisor of the input num
    - If it is, push it into the results array
  - Return the results array
*/

function gcd(num1, num2) {
  let smallerNum = num1 < num2 ? num1 : num2;

  for (let currentNum = smallerNum; currentNum > 0; currentNum -= 1) {
    if ((num1 % currentNum === 0) && (num2 % currentNum === 0)) {
      return currentNum;
    }
  }
}

console.log(gcd(12, 4));   // 4
console.log(gcd(15, 10));  // 5
console.log(gcd(9, 2));    // 1