// input: string representing a name
// - formatted like: firstName + ' ' + lastName
// output: new string representing the name
// - formatted like: lastName + ', ' + firstName

// Example
// swapName('Joe Roberts');    // "Roberts, Joe"

// Algorithm:
// Split the given name into an array, firstName and lastName
// Reverse the array
// Join the array with ', ' as delimiter

function swapName(name) {
  let names = name.split(' ');
  return names.reverse().join(', ');
}

console.log(swapName('Joe Roberts'));    // "Roberts, Joe"

// Refactor to deal with more than one first name

function swapName2(name) {
  let names = name.split(' ');
  let lastName = names.pop();
  let firstNames = names.join(' ');
  return `${lastName}, ${firstNames}`;
}

console.log(swapName2('Joe Bob Roberts'));    // "Roberts, Joe Bob"
console.log(swapName2('Joe Bob Jimmy Fred Jake Roberts'));    // "Roberts, Joe Bob Jimmy Fred Jake"