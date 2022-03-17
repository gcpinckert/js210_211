// Declare a variable numerator and set it to 10
let numerator = 10;

// Declare a constant DENOMINATOR and set it to 2
const DENOMINATOR = 2;

// Declare a variable answer
// Set it to the result of numerator divided by denominator
// Log the value of the answer
let answer = numerator / DENOMINATOR;
console.log(answer);

// Declare a variable incrementor and set it to 1
let incrementor = 1;

// Declare a variable start and set it to incrementor
let start = incrementor;

// Declare variables end and difference
let end;
let difference;

// Increment the incrementor variable three times by 1
while (incrementor < 4) {
  incrementor += 1;
  console.log('this should print three times');
}

// Increment the incrementor variable by 1 twice
while (incrementor < 6) {
  incrementor++;
  console.log('this should print twice');
}

// Set the value of end to incrementor
// Set the value of difference to end minus start
end = incrementor;
difference = end - start;
console.log(end);        // 6
console.log(difference); // 5

// Declare a variable answer
// Initialize it to 11 + 31 * 3 as one statement
// The result should be 126, so make sure the expression is evaluated correctly
let second_answer = (11 + 31) * 3;
console.log(second_answer);