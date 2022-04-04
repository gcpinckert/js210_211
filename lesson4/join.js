/*
input: an array and a string
output: a string
  - coerce each value in the array to a string
  - join those values together with the second string argument as delimiter
  - a second argument will always be given
*/

function join(arr, separator) {
  let joinedStr = '';

  for (let index  = 0; index < arr.length; index += 1) {
    joinedStr += String(arr[index]);
    if (index !== arr.length - 1) {
      joinedStr += separator;
    }
  }

  return joinedStr;
}

console.log(join(['bri', 'tru', 'wha'], 'ck '));       // 'brick truck wha'
console.log(join([1, 2, 3], ' and '));                 // '1 and 2 and 3'