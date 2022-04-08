/*
Use `Math.PI` to create a function that converts radians to degrees.
- radians are used rather than degrees for Math methods that deal with angle measurements
- a radian is a measurement based on the radius of a circle
- it refers to the angle made when we take the length of the radius and wrap it
  around the circumference of the circle
- The circumference of any circle consists of pi * 2 number of radians
- The circumference of the circle is also 360 degrees
- Thus 2 * pi * number of radians = 360 degrees
- pi * number of radians = 180 (we divide each side of the equation by 2)
- 1 radian, therefore = 180 / pi (we divide each side of the equation by pi)
- Given the number of radians, we need to multiply by 180 and divide by pi
- then return the number of degrees
*/

function radiansToDegrees(radians) {
  return (radians * 180) / Math.PI;
}

/*
- Create a variable with value -180
- use Math.abs to log the positive value
*/

let value = -180;
console.log(Math.abs(value));
console.log('');

/*
Find the square root of 16777216
*/

console.log(Math.sqrt(16777216)); // 4096
console.log('');

// Compute and log the value of 16 ^ 6

console.log(Math.pow(16, 6)); // 16777216
console.log('');

/*
Use each of the rounding methods on the appropriate variable to get a value of 50
*/

let a = 50.72;
let b = 49.2;
let c = 49.86;

console.log(Math.floor(a)); // 50
console.log(Math.ceil(b));  // 50
console.log(Math.round(c)); // 50

/*
- input: two number arguments, a minimum and maximum value
- output: an integer, randomly generated value between the two arguments
- handle it if the user "swaps" min and max value
- the range of acceptable values to return includes both arguments
- handle it if the min and max values are equal

- check to see if min is bigger than max, and if so, switch them
- round min down to the nearest integer
- round max up to the nearest integer
- if min and max are equal, return min
- return a randomly generated number between min and max
*/

function randomInt(min, max) {
  if (min > max) {
    [min, max] = [max, min]; // switch the values if reversed
  }

  min = Math.floor(min);     // round down to closest int
  max = Math.ceil(max);      // round up to closest int

  if (min === max) return min;

  return Math.floor(Math.random() * ((max - min) + min));
}



