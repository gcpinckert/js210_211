/* 
input: positive integer
output: logs all odd numbers from 1 to the number (inclusive)
- All numbers should be logged on separate lines

Example:
logOddNumbers(19);

// output on console
1
3
5
7
9
11
13
15
17
19

Algorithm:
- initialize a variable currentNumber to 1.
- Set up a loop that will execute until the currentNumber variable is > input
  - Check to see if the number is odd
  - If so, log the number

- Check to see if the number is odd
 - Get the remainder of the input number divided by 2
 - If the result is 1, return true, otherwise, return false.
*/

function logOddNumbers(num) {
  let currentNumber = 1;

  while (currentNumber <= num) {
    if (isOdd(currentNumber)) console.log(currentNumber);
    currentNumber += 1;
  }
}

function isOdd(num) {
  return num % 2 === 1;
}

logOddNumbers(19);
console.log('');

// Remove the conditional inside the loop and increment `currentNumber` by 2

function logOddNumbers2(num) {
  let currentNumber = 1;

  while (currentNumber <= num) {
    console.log(currentNumber);
    currentNumber += 2;
  }
}

logOddNumbers2(19);
console.log('');

// Write a conditional that checks for even numbers, and skip them

function logOddNumbers3(num) {
  for (let currentNumber = 1; currentNumber <= num; currentNumber += 1) {
    if (!isOdd(currentNumber)) continue;
    console.log(currentNumber);
  }
}

logOddNumbers3(19);