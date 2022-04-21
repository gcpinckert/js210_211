// generate a random number between 20 and 200 (inclusive)
// log this to the console as Teddy's age

// Example -> Teddy is 69 years old!
// The number should be an integer (?)

// Math.random() -> returns random floating point between 0 and 1
// this number is then scaled to the desired range
// the return value of random() is the *initial seed*

// Take two numerical arguments, min and max
// Check to make sure min is less than max
//  - If not, switch them
// Generate a random number between 0 and range (min - max)
//  - Get the initial seed from Math.random
//  - Multiply this by range + 1 to get the seed (+1 makes it inclusive)
//  - Round down to the nearest integer to get rid of fractional portion
// Now add the min to this number

function generateAge(min, max) {
  if (min > max) {
    [min, max] = [max, min];
  }
  const RANGE = max - min;

  let seed = Math.random();
  let age = Math.floor(seed * (RANGE + 1));
  age += min;
  return age;
}

console.log(`Teddy is ${generateAge(20, 200)} years old!`);

