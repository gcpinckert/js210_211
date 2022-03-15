let a = 5;

switch (a) {
  case 5:
    console.log('a is 5');
    break;
  case 6:
    console.log('a is 6');
    break;
  default:
    console.log('a is neither 5 nor 6');
    break;
} // => a is 5

console.log('');

let b = 5;

switch(b) {
  case 5:
  case 6:
  case 7:
    console.log('b is between 5 and 7');
    break;
  case 8:
  case 9:
    console.log('b is 8 or 9');
    break;
  default:
    console.log('b is not any number 5-9');
    break;
}