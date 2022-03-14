/* Because question always returns a string, we may have to explicitly
coerce into a different data type we want to use, such as Number */

let rlSync = require('readline-sync');

let number1 = rlSync.question('Enter the first number\n');
let number2 = rlSync.question('Enter the second number\n');
let sum = number1 + number2; // Performs string concatenation

console.log(`The numbers ${number1} and ${number2} add up to ${sum}`);

// With values coerced to the number data type

number1 = Number(rlSync.question('Enter the first number\n'));
number2 = Number(rlSync.question('Enter the second number\n'));
sum = number1 + number2; // Performs addition, since we have coerced string values to Number

console.log(`The numbers ${number1} and ${number2} add up to ${sum}`);