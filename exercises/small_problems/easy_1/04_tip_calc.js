/*
input: bill amount and tip rate (gathered from the user so they come in as strings)
output: the tip and total
  - You can ignore input validation

Example:
What is the bill? 200
What is the tip percentage? 15

The tip is $30.00
The total is $230.00

- Initialize the readline sync object
- Get the bill amount from the user (convert to a float)
- Get the tip percentage from the user (convert to a float)
- Multiply the bill by the tip percentage to get the tip (round to 2 decimal places)
- Add the tip to the bill to get the total (round to 2 decimal places)
- Output the result
*/

let rlSync = require('readline-sync');

let billAmount = parseFloat(rlSync.question('What is the bill? '));
let tipPercent = (parseFloat(rlSync.question('What is the tip percentage? ')) / 100);
let tip = (billAmount * tipPercent).toFixed(2);
let total = (billAmount + parseFloat(tip)).toFixed(2);

console.log(`The tip is $${tip}`);
console.log(`The total is $${total}`);