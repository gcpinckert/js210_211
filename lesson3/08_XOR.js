/*
input: two arguments of any datatype
output: true if exactly one argument is truthy, false otherwise
- should work with boolean values of true and false
- should also be able to evaluate other values based on thruthiness

Examples:
isXor(false, true);     // true
isXor(true, false);     // true
isXor(false, false);    // false
isXor(true, true);      // false


isXor(false, 3);        // true
isXor('a', undefined);  // true
isXor(null, '');        // false
isXor('2', 23);         // false

- If one argument is falsey and one argument is truthy, return true
- If both arguments are truthy, return false
- If both arguments are falsey, return false

- Set a result variable to false
- If the first argument is truthy
  - set the result variable to it's boolean opposite (this will be true)
- If the second argument is truthy
  - set the result variable to its boolean opposite
  - this will change result to false if the first arg was true
  - it will change result to true if the first arg was false
- Now we just return the results variable
  - If neither condition was triggered, it's still false
*/

function isXor(arg1, arg2) {
  let results = false;

  if (!!arg1) results = !results;
  if (!!arg2) results = !results;

  return results;
}

console.log(isXor(false, true));     // true
console.log(isXor(true, false));     // true
console.log(isXor(false, false));    // false
console.log(isXor(true, true));      // false


console.log(isXor(false, 3));        // true
console.log(isXor('a', undefined));  // true
console.log(isXor(null, ''));        // false
console.log(isXor('2', 23));         // false