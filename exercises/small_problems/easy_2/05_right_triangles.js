/*
input: a positive integer (n)
output: a triangle of * whose sides each have n stars
  - the hypotenuse should extend from lower left to upper right

Examples:
triangle(5);

    *
   **
  ***
 ****
*****

triangle(9);

        *
       **
      ***
     ****
    *****
   ******
  *******
 ********
*********

Algorithm:
- Repeat char helper function: takes char to repeat and number of times
  - initialize an empty string to hold repeated char
  - While the length of the repeat string is less than the given number of times
    - Add the char to the string
  - Return the repeat string

- Initialize a number of spaces to n - 1
- Initialize a number of stars to 1
- Iterate a loop until the number of stars is greater than n
  - Set a line string to the number of spaces repeated + the number of stars repeated
  - Log the line
  - Decrement the number of spaces by 1
  - Increment the number of stars by 1
*/

function repeatChar(char, n) {
  let repeated = '';

  while (repeated.length < n) {
    repeated += char;
  }

  return repeated;
}

function triangle(n) {
  let spacesNum = n - 1;
  
  for (let starsNum = 1; starsNum <= n; starsNum += 1) {
    console.log(`${repeatChar(' ', spacesNum)}${repeatChar('*', starsNum)}`);
    spacesNum -= 1;
  }
}

triangle(5);
triangle(9);