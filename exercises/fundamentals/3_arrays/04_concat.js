/*
refactor the function in 03_concat.js so that it can handle
two or more arrays or values
*/

function concat(array1, ...values) {
  let concatenated = array1.slice();

  for (let index  = 0; index < values.length; index += 1) {
    if (Array.isArray(values[index])) {
      for (let innerIndex = 0; innerIndex < values[index].length; innerIndex += 1) {
        concatenated.push(values[index][innerIndex]);
      }
    } else {
      concatenated.push(values[index]);
    }
  }

  return concatenated;
}

console.log(concat([1, 2, 3], [4, 5, 6], [7, 8, 9]));    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(concat([1, 2], 'a', ['one', 'two']));        // [1, 2, "a", "one", "two"]
console.log(concat([1, 2], ['three'], 4));               // [1, 2, "three", 4]