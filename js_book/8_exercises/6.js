/* Use `map` and `filter` to determine the lengths of all the elements
in an array of string values, then discard the even values */

function oddLengths(array) {
  let lengths = array.map(string => {
    return string.length;
  });

  return lengths.filter(length => {
    return !(length % 2 === 0);
  })
}


let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]