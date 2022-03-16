// use object literal syntax to create an object that behaves like an array in a for statement
// the object should contain at least three elements

let myArray = {
  0: 'one',
  1: 'two',
  2: 'three',
  length: 3,
};

for (let i = 0; i < myArray.length; ++i) {
  console.log(myArray[i]);
}