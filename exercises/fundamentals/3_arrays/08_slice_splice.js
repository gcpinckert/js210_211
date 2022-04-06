/*
slice:
  input: an array, two integers representing beginning and ending index
  output: a new array containing extracted elements from beginning up to ending (exclusive)
  - does not mutate the original array
  - begin and end will always be integers greater than or equal to 0
  - if begin or end is > length of given array, it defaults to the length

- Initialize an empty array to hold results
- If begin or end is greater than the length of the given array, set it to length
- Iterate over the given array, from begin to end (exclusive)
  - Add each element to the results array
- Return the results array

splice:
  input:
    - an array
    - starting index - where to start removing elements
    - deleteCount - number of elements to be removed from the array
    - optional number of elements to be added (beginning at starting index)
  output: 
    - a new array containing the deleted elements
    - an empty array if no elements are deleted
  - mutates the given array
  - start and deleteCount will always be integers >= 0
  - if start is > length of given array it defaults to the length
  - if deleteCount is > number of elements between start and end of array, it
    defaults to array length - start
  - takes optional arguments for elements to add to the array, element1 -> elementN
  - if no elements are provided, splice only removes elements from the array

- Initialize an empty array to hold the deleted elements
- If start is greater than the length of the array set it to length
- If deleteCount > array.length - start, set it to array.length - start
- Set end equal to start + deleteCount
- Iterate over the given array, from start to end (exclusive)
  - Add the current element to the deleted elements array
- Make a reference array which will be:
  - [beginning of original array to start index - 1] +
    [array of elements to add] +
    [end index to the end of the original array]
- Iterate over the reference array
  - Set the value at current index as the value at current index in the original array
- Return the array of deleted elements
*/

function slice(array, begin, end) {
  let sliced = [];
  
  if (begin > array.length) {
    begin = array.length;
  } else if (end > array.length) {
    end = array.length;
  }

  for (let index = begin; index < end; index += 1) {
    sliced.push(array[index]);
  }

  return sliced;
}

// console.log(slice([1, 2, 3], 1, 2));               // [2]
// console.log(slice([1, 2, 3], 2, 0));               // []
// console.log(slice([1, 2, 3], 5, 1));               // []
// console.log(slice([1, 2, 3], 0, 5));               // [1, 2, 3]

// const arr1 = [1, 2, 3];
// console.log(slice(arr1, 1, 3));                     // [2, 3]
// console.log(arr1);                                  // [1, 2, 3]

function splice(array, start, deleteCount, ...elementsToAdd) {
  let deletedElements = [];
  
  if (start > array.length) {
    start = array.length;
  } else if (deleteCount > (array.length - start)) {
    deleteCount = array.length - start;
  }

  let end = start + deleteCount;

  for (let index = start; index < end; index += 1) {
    deletedElements.push(array[index]);
  }

  let leftElements = slice(array, 0, start);
  let rightElements = slice(array, end, array.length);
  let referenceArr = leftElements.concat(elementsToAdd).concat(rightElements);
  array.length = referenceArr.length;

  for (let index = 0; index < referenceArr.length; index += 1) {
    array[index] = referenceArr[index];
  }

  return deletedElements;
}

console.log(splice([1, 2, 3], 1, 2));              // [2, 3]
console.log(splice([1, 2, 3], 1, 3));              // [2, 3]
console.log(splice([1, 2, 3], 1, 0));              // []
console.log(splice([1, 2, 3], 0, 1));              // [1]
console.log(splice([1, 2, 3], 1, 0, 'a'));         // []

const arr2 = [1, 2, 3];
console.log(splice(arr2, 1, 1, 'two'));             // [2]
console.log(arr2);                                  // [1, "two", 3]

const arr3 = [1, 2, 3];
console.log(splice(arr3, 1, 2, 'two', 'three'));    // [2, 3]
console.log(arr3);                                  // [1, "two", "three"]

const arr4 = [1, 2, 3];
console.log(splice(arr4, 1, 0));                    // []
console.log(splice(arr4, 1, 0, 'a'));               // []
console.log(arr4);                                  // [1, "a", 2, 3]

const arr5 = [1, 2, 3];
console.log(splice(arr5, 0, 0, 'a'));               // []
console.log(arr5);                                  // ["a", 1, 2, 3]

const arr6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(splice(arr6, 0, 2));                     
console.log(arr6);                                  // [3, 4, 5, 6, 7, 8, 9, 0]