/*
input: 3 grade scores
  - will always be between 0 and 100
output: the letter associated with the average score

90 <= score <= 100: 'A'
80 <= score < 90: 'B'
70 <= score < 80: 'C'
60 <= score < 70: 'D'
0 <= score < 60: 'F'

Algorithm:
- Initialize an array of the scores
- Get the sum of all the scores in the array
- Divide this by the array length, and save to average variable
- Check average against the above score table
- Return the appropriate letter
*/

function getGrade(score1, score2, score3) {
  let grades = [score1, score2, score3];
  let sum = grades.reduce((sum, num) => sum + num, 0);
  let average = sum / grades.length

  if (average >= 90) {
    return 'A';
  } else if (average >= 80) {
    return 'B';
  } else if (average >= 70) {
    return 'C';
  } else if (average >= 60) {
    return 'D';
  } else {
    return 'F';
  }
}

console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"