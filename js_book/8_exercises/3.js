// log all the even numbers to the console

let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

myArray.forEach(subArr => {
  subArr.forEach(num => {
    if (num % 2 === 0) {
      console.log(num);
    }
  });
});