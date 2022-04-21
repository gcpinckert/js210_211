// input: get six numbers from the user
// output: log message that tells if 6th n is in n1-n5

// Examples:
// Enter the 1st number: 25
// Enter the 2nd number: 15
// Enter the 3rd number: 20
// Enter the 4th number: 17
// Enter the 5th number: 23
// Enter the last number: 17

// The number 17 appears in [25, 15, 20, 17, 23].

// -----

// Enter the 1st number: 25
// Enter the 2nd number: 15
// Enter the 3rd number: 20
// Enter the 4th number: 17
// Enter the 5th number: 23
// Enter the last number: 18

// The number 18 does not appear in [25, 15, 20, 17, 23].

// Initialize a Readline Sync object so we can get the input
// Initialize an array with our '1rst` - 'last' ordinals
// Initialize a numbers array
// Iterate over the ordinals array, for each element:
//  - Get the number input from the user with the appropriate message
//  - Do we need to validate the input?
//  - Convert the users input from a string to an integer
//  - Is it the last iteration?
//    - If so, save the current number to a variable we can evaluate later
//    - Otherwise, add the resulting integer to the numbers array
// Check to see if the last iteration's input exists in the numbers array
// Log the appropriate message based on the result of above

let rlSync = require('readline-sync');

const MESSAGE_NUMBER = ['1st', '2nd', '3rd', '4th', '5th', 'last'];
let numbers = [];
let lastNumber;

function getNumbers() {
  MESSAGE_NUMBER.forEach( messageNum => {
    let currentNum = Number(
      rlSync.question(`Enter the ${messageNum} number: `)
    );

    if (messageNum === 'last') {
      lastNumber = currentNum;
    } else {
      numbers.push(currentNum);
    }
  });
}

function logResult() {
  if (numbers.includes(lastNumber)) {
    console.log(`The number ${lastNumber} appears in [${numbers.join(', ')}].`);
  } else {
    console.log(`The number ${lastNumber} does not appear in [${numbers.join(', ')}].`);
  }
}

getNumbers();
logResult();