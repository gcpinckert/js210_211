let myArray = [1, 2, 3, 4];
const myOtherArray = myArray;

myArray.pop();
console.log(myArray);
console.log(myOtherArray); // [1, 2, 3]

myArray = [1, 2];
console.log(myArray);
console.log(myOtherArray); // [1, 2, 3]

/*
Above, when we call the destructive pop() method on myArray, the variable myOtherArray
is pointing to the same object, so the change is reflected in both.

On line 8, we create a new array literal and reassign myArray to it. Now myArray and 
myOtherArray are pointing to different objects, which is what we see when we log
each to the console.
*/
