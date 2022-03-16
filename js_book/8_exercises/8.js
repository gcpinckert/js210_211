/* Write a function similar to oddLengths from 6.js, but use reduce instead
of map and filter */

function oddLengths(arr) {
  return arr.reduce((accumulator, string) => {
    if (string.length % 2 !== 0) {
      accumulator.push(string.length);
    };

    return accumulator;
  }, []);
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]