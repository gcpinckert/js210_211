/*
input: an integer, greater than 0, provided by user
  - Because this is user input we will have to convert from string
output: either the sum or product of all numbers between 1 and given integer, inclusive
  - The user will determine whether the program outputs sum or product

Examples:
Please enter an integer greater than 0: 5
Enter "s" to compute the sum, or "p" to compute the product. s

The sum of the integers between 1 and 5 is 15.

Please enter an integer greater than 0: 6
Enter "s" to compute the sum, or "p" to compute the product. p

The product of the integers between 1 and 6 is 720.

Algorithm:
- Initialize the readline sync object
- Prompt the user to enter a number (do we have to validate?)
- Convert the string number to a number and save to a variable
- Prompt the user to choose either the sum or product
- Check to see what the user chose, if it was sum:
  - Initialize a sum variable to 0
  - Iterate from 1 to the given number (inclusive)
    - Add the current number to the sum
  - Return the sum
- If it was product
  - Initialize a product variable to 1
  - Iterate from 1 to the given number (inclusive)
    - Multiply the current number to the product
  - Return the product
- Output either the sum or product as specified
*/

function calcSum(num) {
  let sum = 0;
  for (let numToAdd = 1; numToAdd <= num; numToAdd += 1) {
    sum += numToAdd;
  }

  return sum;
}

function calcProduct(num) {
  let product = 1;
  for (let numToMultiply = 1; numToMultiply <= num; numToMultiply += 1) {
    product *= numToMultiply;
  }

  return product;
}

function sumOrProduct() {
  let rlSync = require('readline-sync');

  let number = parseInt(
    rlSync.question('Please enter an integer greater than 0: ')
  );

  let choice = rlSync.question(
    'Enter "s" to compute the sum, or "p" to compute the product. '
  );

  if (choice === "s") {
    console.log(
      `The sum of the integers between 1 and ${number} is ${calcSum(number)}`
    );
  } else if (choice === "p") {
    console.log(
      `The product of the integers between 1 and ${number} is ${calcProduct(
        number
      )}`
    );
  } else {
    console.log('Error: Invalid choice');
  }
}

sumOrProduct();