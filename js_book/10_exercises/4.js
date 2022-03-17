// Display the largest numeric value in the given list

function largestNum(array) {
  let answer = array[0];
  array.forEach (num => {
    if (num > answer) {
      answer = num;
    }
  });

  return answer;
}

// Tests
console.log(largestNum([1, 6, 3, 2]));    // 6
console.log(largestNum([-1, -6, -3, -2])) // -1
console.log(largestNum([2, 2]));          // 2
console.log('');

// Also, using Math
console.log(Math.max(1, 6, 3, 2));      // => 6
console.log(Math.max(-1, -6, -3, -2));  // => -1
console.log(Math.max(2, 2));            // => 2