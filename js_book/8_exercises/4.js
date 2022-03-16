// use map to create a new array that contains one element for each element
// in the original array. If the element is even, the corresponding element
// should be 'even'. If the element is odd, the corresponding element should
// be 'odd'.

let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];

let newArray = myArray.map(num => {
  if (num % 2 == 0) {
    return 'even';
  } else {
    return 'odd';
  }
});

console.log(newArray);
