/*
input: none
output: all even numbers between 1 and 99 inclusive, 
  - each number should be logged on a separate line

Algorithm:
- Iterate a loop beginning at 2 and stop once we go past 99
  - log the current number
  - increment the iterator by 2
*/

for (let iterator = 2; iterator < 100; iterator += 2) {
  console.log(iterator);
}