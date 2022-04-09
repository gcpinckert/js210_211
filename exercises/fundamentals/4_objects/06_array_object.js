// the average function is expected to return 5
// what is actually returned and why?

const myArray = [5, 5];
myArray[-1] = 5;  // [5, 5, -1: 5]
myArray[-2] = 5;  // [5, 5, -1: 5, -2: 5]

function average(array) {
  let sum = 0;

  for (let i = -2; i < array.length; i += 1) { // this iterates from -2 -> 1
    sum += array[i]; // sum += 5 4 times, sum is 20 after iteration
  }

  return sum / array.length; // 20 / 2 (length only counts positive indices)
}

console.log(average(myArray)); // 10

