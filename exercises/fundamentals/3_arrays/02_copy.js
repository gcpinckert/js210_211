/*
Implement two ways of ensuring that only the values of the array
get copied, rather than the value of the reference.
*/

let myArray = [1, 2, 3, 4];
const myOtherArray = myArray.slice(); // generates a copy of myArray

myArray.pop();
console.log(myOtherArray); // [1, 2, 3, 4]

myArray = [1, 2];
console.log(myOtherArray); // [1, 2, 3, 4]

// We can do the same thing with a loop

myArray = [1, 2, 3, 4];
const anotherArray = [];

for (let index = 0; index < myArray.length; index += 1) {
  anotherArray.push(myArray[index]);
}

myArray.pop();
console.log(myOtherArray); // [1, 2, 3, 4]

myArray = [1, 2];
console.log(myOtherArray); // [1, 2, 3, 4]

