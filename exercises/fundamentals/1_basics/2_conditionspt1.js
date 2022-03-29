const MyBoolean = true;
const MyString = 'hello';
const MyArray = [];
const MyOtherString = '';

if (MyBoolean) {
  console.log('Hello'); // logs 'Hello' -> MyBoolean evaluates to true
}

if (!MyString) { // MyString is truthy, so with logical not it evaluates to false
  console.log('World'); // does not log anything
}

if (!!MyArray) { // MyArray is truthy, so first it is converted to false, then true
  console.log('World'); // logs 'World'
}

if (MyOtherString || MyArray) {
  console.log('!'); // logs !
}
// MyOtherString is falsy, it is an empty string, so this evaluates to false
// Logical Or moves to the next operand and evaluates it
// MyArray is truthy
// The whole expression then returns the value [], the result of the last evaluated expression
// This is a truthy value, the conditional evaluates to true