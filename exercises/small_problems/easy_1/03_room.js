/*
input: length and width of a room in meters
  - this is provided by a user
output: area of the room in square meters and square feet

rules:
- don't worry about validating the input
- Use realineSync.prompt to collect user input
- conversion: 1 sq meter === 10.7639 sq feet

Example:
Enter the length of the room in meters:
10
Enter the width of the room in meters:
7
The area of the room is 70.00 square meters (753.47 square feet).

Algorithm:
- Initialize a constant to represent the conversion number
- Initialize the readline sync object
- Ask the user for the length of the room (m)
- Save the input into a variable
- Ask the user for the width of the room (m)
- Save the input into a variable
- Multiply the length and width and save the result into a variable (sq m)
- Multiply the sq m by the conversion number, save the result into a variable (sq ft)
- Output both area values as shown in the example
*/

const SQ_FEET_PER_SQ_METER = 10.7639;
let rlSync = require("readline-sync");

let length = Number(rlSync.question('Enter the length of the room in meters: '));
let width = Number(rlSync.question('Enter the width of the room in meters: '));
let areaMeters = (length * width).toFixed(2);
let areaFeet = (areaMeters * SQ_FEET_PER_SQ_METER).toFixed(2);

console.log(`The area of the room is ${areaMeters} square meters (${areaFeet} square feet).`);