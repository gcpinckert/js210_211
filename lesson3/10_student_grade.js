/*
Write a program to determine the student's grade
- Based on the average of three scores you get from user
- If the average score is >= 90, the grade is A
- If the average score is >= 70 and less than 90 the grade is B
- If the average score is >= 50 and less than 70 the grade is C
- If the average score is < 50 the grade is F
- all inputs will be valid positive integers

Example:
// prompts to get the 3 scores
Enter score 1: 90
Enter score 2: 50
Enter score 3: 78

// log to the console
Based on the average of your 3 scores your letter grade is "B".

- Initialize an empty array to hold scores

- Get the 3 scores from the user
  - Use a getScore function and run it in a loop that executes 3 times
  - Each time we get a score, we need to add it to the scores array

- Set a variable average to the average of all the scores in the array
  - We can move this to another function
  - Reduce the array to get the sum
  - Divide the sum by the size of the input array

- Determine what the letter grade is
  - Compare the average to the correct ranges
  - If the average matches a given range, return the appropriate letter

- Log the results to the console

Further Exploration, modify the program so it can accept any number of scores
*/

function getScore(count) {
  return prompt(`Enter score ${count}: `);
}

let scoreCount = parseInt(
  prompt("How many scores would you like to enter?"),
  10
);

let scores = [];
for (let index = 1; index <= scoreCount; index += 1) {
  scores.push(parseInt(getScore(index), 10));
}

function average(arrayNums) {
  let sum = arrayNums.reduce((sum, num) => sum + num, 0);
  return sum / arrayNums.length;
}

let avgScore = average(scores);
let letterGrade;

if (avgScore >= 90) {
  letterGrade = 'A';
} else if (avgScore >= 70) {
  letterGrade = 'B';
} else if (avgScore >= 50) {
  letterGrade = 'C';
} else {
  letterGrade = 'F';
}

console.log(
  `Based on the average of your 3 scores your letter grade is "${letterGrade}".`
);