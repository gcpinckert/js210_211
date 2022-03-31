/*
input: an integer, representing number of digits
  - will always be >= 2
output: an integer, representing an index
  - it should be the index of the first Fibonacci number that has the number 
    of digits specified by the input argument
  - note that the first Fibonacci number has an index of 1 (not 0)

Rules:
- The first two numbers of the Fibonacci sequence are 1 and 1
- Each subsequent number is calculated: (n - 1) + (n - 2)
- This means the third number is 2 (1 + 1), and the fourth 3 (2 + 1)
- We'll be dealing with large numbers so we need to use `BigInt` integers
- To do so, append the letter `n` to any numbers in the code
  - i.e. 1n, 100n, etc

Examples:
findFibonacciIndexByLength(2n) === 7n;    // 1 1 2 3 5 8 13
findFibonacciIndexByLength(3n) === 12n;   // 1 1 2 3 5 8 13 21 34 55 89 144
findFibonacciIndexByLength(10n) === 45n;
findFibonacciIndexByLength(16n) === 74n;
findFibonacciIndexByLength(100n) === 476n;
findFibonacciIndexByLength(1000n) === 4782n;
findFibonacciIndexByLength(10000n) === 47847n;

// The last example may take a minute or so to run.

Algorithm:

- Initialize an array [1, 1] (first two numbers by definition)
- Initialize a counter to 3 (we already have 1 and 2)
- Iterate a loop
  - Generate the next fibonacci number
  - Convert it to a string and compare the length to the input num
  - If they are equal, return the counter
  - Otherwise, increment the counter and keep going

- Generate the nth fibonacci number
  - If n is less than 2, return the number (0 and 1 by definition)
  - Otherwise, recursively call the function until we get to 0 or 1
*/

// If we use recursion to calculate the next one it takes too long
function fibonacci(num) {
  if (num < 2n) return num;
  return fibonacci(num - 1n) + fibonacci(num - 2n);
}

function findFibonacciIndexByLength(digits) {
  let fibonacci = [1n, 1n]; // we have to save each one into an array to use instead

  for (let counter = 3n; ;) {
    let nextFibonacci = fibonacci[counter - 2n] + fibonacci[counter - 3n]

    if (String(nextFibonacci).length == digits) {
      return counter;
    } else {
      fibonacci.push(nextFibonacci);
      counter += 1n;
    }
  }
}


console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);
console.log(findFibonacciIndexByLength(100n) === 476n);
console.log(findFibonacciIndexByLength(1000n) === 4782n);
console.log(findFibonacciIndexByLength(10000n) === 47847n);

// The last example may take a minute or so to run.