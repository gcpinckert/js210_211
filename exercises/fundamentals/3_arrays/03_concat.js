/*
input: an array and another value (can be an array or any other kind of value)
output: a new array containing all values from given array and the second array or value
- elements in new array should be in same order as they appear in the arguments
- if either array arguments or values have an object, the object reference should
  be copied into the new array (i.e. it should be a shallow copy)
- primitive values should copy the values rather than the object references

- Initialize a new array to a copy of the first array argument
- Is the second argument an array?
  - Iterate through the array and add each value to the copy
- If it's just a value
  - Add the value to the copy
- Return the copy
*/

function concat(array1, secondArgument) {
  let concatenated = array1.slice();

  if (Array.isArray(secondArgument)) {
    for (let index = 0; index < secondArgument.length; index += 1) {
      concatenated.push(secondArgument[index]);
    }
  } else {
    concatenated.push(secondArgument);
  }

  return concatenated;
}

console.log(concat([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]
console.log(concat([1, 2], 3)); // [1, 2, 3]
console.log(concat([2, 3], ['two', 'three'])); // [2, 3, "two", "three"]
console.log(concat([2, 3], 'four')); // [2, 3, "four"]
console.log('');

const obj = { a: 2, b: 3 };
const newArray = concat([2, 3], obj);
console.log(newArray); // [2, 3, { a: 2, b: 3 }]
obj.a = 'two';
console.log(newArray); // [2, 3, { a: "two", b: 3 }]
console.log('');

const arr1 = [1, 2, 3];
const arr2 = [4, 5, obj];
const arr3 = concat(arr1, arr2);
console.log(arr3);console.log() // [1, 2, 3, 4, 5, { a: "two", b: 3 }]
obj.b = 'three';
console.log(arr3); // [1, 2, 3, 4, 5, { a: "two", b: "three" }]

arr3[5].b = 3; // or, `arr3[5]['b'] = 3;`
console.log(obj); // { a: "two", b: 3 }
