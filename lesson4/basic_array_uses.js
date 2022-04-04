/*
Return the first element of an array passed in as an argument
*/

function firstElementOf(arr) {
  return arr[0];
}

console.log(firstElementOf(['U', 'S', 'A']));  // returns "U"
console.log('');

/*
Return the last element of an array passed as argument
*/

function lastElementOf(arr) {
  return arr[arr.length - 1];
}

console.log(lastElementOf(['U', 'S', 'A']));  // returns "A"
console.log('');

/*
input: an array and integer representing index
output: the element at the specified index
*/

function nthElementOf(arr, index) {
  if (index < 0) {
    return arr[arr.length + index];
  } else {
    return arr[index];
  }
}

let digits = [4, 8, 15, 16, 23, 42];

console.log(nthElementOf(digits, 3));   // returns 16
console.log(nthElementOf(digits, 8));   // undefined
console.log(nthElementOf(digits, -1));  // 42
console.log('');

/* We can insert data into an array at a negative index. The added element becomes a part of the
"array object", but not technically an array element. It just becomes the value associated with the
string key representation of the negative number provided as index */

/*
input: array and integer value representing `count`
output: new array containing first `count` elements of the array
*/

function firstNOf(arr, count) {
  let results = [];

  for (let index = 0; index < count; index += 1) {
    results.push(arr[index]);
  }

  return results;
}

digits = [4, 8, 15, 16, 23, 42];
console.log(firstNOf(digits, 3));    // returns [4, 8, 15]
console.log('');

/*
input: array and integer value representing `count`
output: last `count` elements as a new array
*/

function lastNOf(arr, count) {
  let results = [];

  for (let index = arr.length - count; index < arr.length; index += 1) {
    results.push(arr[index]);
  }

  return results;
}

digits = [4, 8, 15, 16, 23, 42];
console.log(lastNOf(digits, 3));    // returns [16, 23, 42]
console.log('');

/*
Fix the previous function so that if a `count` is passed that is greater than the length of the array
it returns a new instance of the entire array
*/

function lastNOf2(arr, count) {
  if (count > arr.length) {
    return arr.slice();
  } else {
    return arr.slice(arr.length - count);
  }
}

/*
input: two arrays
output: a new array containing
  - the first element from the first array
  - the last element from the second array
*/

function endsOf(beginningArr, endingArr) {
  return [ beginningArr[0], endingArr[endingArr.length - 1]];
}

console.log(endsOf([4, 8, 15], [16, 23, 42]));  // returns [4, 42]