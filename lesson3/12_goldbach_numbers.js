/*
input: positive integer
output: every pair of prime numbers that sums to the given number
- log the prime pairs with the smaller number first
- if the given number is odd or less than 4, log null

Examples:
checkGoldbach(3);
// logs: null

checkGoldbach(4);
// logs: 2 2

checkGoldbach(12);
// logs: 5 7

checkGoldbach(100);
// logs:
// 3 97
// 11 89
// 17 83
// 29 71
// 41 59
// 47 53

Algorithm:
- Generate a list of prime numbers less than the given number
- Initialize an empty array to hold pairs
- Iterate through the list, saving first_num (this will be the smaller number)
  - Iterate through the rest of the list (i.e. current index + 1 through last index), saving second_num
  - To be more efficient, we want to do this iteration backwards (so we start with the bigger nums)
    - If the second_num is less than the first num, break out of the inner loop
    - If the first_num + the second_num === the given num
    - Add them both like this : [first_num, second_num] to the pairs array
- Now we should have a nested array of prime pairs
- Iterate through the pairs, and log each number to the console as shown in the examples

- Generate a list of prime numbers less than a given number
  - Initialize an array with the number 2 (the first prime num) to hold primes
  - Iterate up from 3 to the currentNum - 1, adding 2 each time so we only use odd nums
    (an even number will never be prime)
  - If the current number isPrime, add it to the primes array
*/

function isOdd(num) {
  return num % 2 === 1;
}

function isMultiple(multiple, divisor) {
  return multiple % divisor === 0;
}

function isPrime(num) {
  if (num === 1 || num === 0) return false;

  for (let currentNum = 2; currentNum < num; currentNum += 1) {
    if (isMultiple(num, currentNum)) return false;
  }

  return true;
}

function getPrimes(num) {
  let primes = [2];

  for (let currentNum = 3; currentNum < num; currentNum += 2) {
    if (isPrime(currentNum)) {
      primes.push(currentNum);
    }
  }

  return primes;
}

function checkGoldbach(expectedSum) {
  if (isOdd(expectedSum) || (expectedSum < 4)) {  // guard clause
    console.log(null);
    return;
  }

  let primes = getPrimes(expectedSum);
  let pairs = [];
  
  for (let firstIndex = 0; firstIndex < primes.length; firstIndex += 1) {
    let firstNum = primes[firstIndex];

    for (let secondIndex = primes.length - 1; secondIndex >= firstIndex; secondIndex -= 1) {
      let secondNum = primes[secondIndex];
      if (secondNum < firstNum) break; // stops iteration so we don't go the other way around (i.e 97 + 3)

      if ((firstNum + secondNum) === expectedSum) {
        pairs.push([firstNum, secondNum]);
      }
    }
  }

  pairs.forEach(pair => console.log(pair[0], pair[1]));
}

checkGoldbach(3);
// logs: null

checkGoldbach(4);
// logs: 2 2

checkGoldbach(12);
// logs: 5 7

checkGoldbach(100);
// logs:
// 3 97
// 11 89
// 17 83
// 29 71
// 41 59
// 47 53