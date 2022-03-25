/*
input: number of rows (greater than 1 and less than 10)
output: logs a square of numbers and asterisks

Example:
generatePattern(7);

// console output
1******
12*****
123****
1234***
12345**
123456*
1234567

Algorithm:
- Initialize a counter variable for nums to 1
- Iterate a loop until the number counter reaches the input number
  - Initialize an empty string to represent the row
  - Iterate a loop from 1 to the counter
    - For each iteration, add the current iteration number to the row string
  - Iterate a loop from 1 to the input number - the counter
    - For each iteration, add a star to the row string.
  - Log the row string
*/

function generatePattern(nStars) {
  for (let rowNumber = 1; rowNumber <= nStars; rowNumber += 1) {
    let row = '';

    for (let currentNum = 1; currentNum <= rowNumber; currentNum += 1) {
      row += String(currentNum);
    }

    for (let starCount = rowNumber + 1; starCount <= nStars; starCount += 1) {
      row += String(starCount).split('').map(ele => '*').join('');
    }

    console.log(row);
  }
}

generatePattern(7);
generatePattern(20);