// Correct the calculation to produce a numeric result
let x = '13';
let y = 9;

console.log(Number(x) + y);

// Change the addition operator to a multiplication operator
// Leave x as a string
// Predict the result
console.log(x * y); // gets converted to 13 * 9, logs 117

// Convert the three parts to strings and produce a valid phone number
let npa = 212;
let nxx = 555;
let num = 1212;

console.log(npa + '-' + nxx + '-' + num);

// Do the same thing as above, but use the String constructor
console.log(String(npa) + String(nxx) + String(num));

// Use toString to convert a boolean and array to a String
let bool = true;
let arr = [1, 2, 3];

bool = bool.toString();
arr = arr.toString();

console.log(bool);
console.log(arr);