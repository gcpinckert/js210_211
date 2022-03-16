// Create an array from the keys of the given object
// All keys should be converted to uppercase
// You cannot mutate the given object

let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let myArr = Object.keys(obj).map(letter => {
  return letter.toUpperCase();
});

console.log(myArr);
console.log(obj);