function average(arr) {
  return sum(arr) / arr.length;
}

function sum(arr) {
  return arr.reduce((total, num) => total + num, 0);

  /* Alternatively, we can use a for loop:
  total = 0
  for (index = 0; index < arr.length; index++) {
    total += arr[index];
  } */
}

console.log(average([25, 26, 27, 25, 28]));  // 26.2

let temperatures = [77, 88, 89, 86, 87];
console.log(average(temperatures)); // 85.4