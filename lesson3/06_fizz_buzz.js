/*
input: none
output: log all the numbers between 1-100 inclusive
- multiples of three should output the string "fizz" instead of the number
- multiples of five should output the string "buzz" instead of the number
- multiples of both three and five should output the string "fizzbuzz"

Algorithm
- Iterate a loop from 1 to 100 inclusive
- Check to see if the current number is a multiple of three and five
  - If so, log FizzBuzz
- Check to see if the current number is a multiple of three
  - If so, log Fizz
- Check to see if the current number is a multiple of five
  - If so, log Buzz
- Otherwise, just log the number

- We can use the previously defined isMultiple function here
*/

function isMultiple(multiple, divisor) {
  return multiple % divisor === 0;
}

function fizzbuzz() {
  for (let currentNum = 1; currentNum <= 100; currentNum += 1) {
    if (isMultiple(currentNum, 3) && isMultiple(currentNum, 5)) {
      console.log('FizzBuzz');
    } else if (isMultiple(currentNum, 3)) {
      console.log('Fizz');
    } else if (isMultiple(currentNum, 5)) {
      console.log('Buzz');
    } else {
      console.log(currentNum);
    }
  }
}

fizzbuzz();