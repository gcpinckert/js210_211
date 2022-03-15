let array = [3, 1, 5, 9, 2, 6, 4, 7];
let indexOfFive = -1;

for (let i = 0; i < array.length; ++i) {
  if (array[i] === 5) {
    indexOfFive = i;
    break; // terminate the loop once we find the desired element
  }
}

console.log(indexOfFive);