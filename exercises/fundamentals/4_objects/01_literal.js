// Find the bug

const myObject = {
  a: 'name',
  b: 'test',
  123: 'c',
  1: 'd',
};

myObject[1];
// the line below throws a ReferenceError
// myObject[a]; // we need to wrap this in quotes and tell JS we are using a string with bracket notation
myObject['a'];  // this will work
myObject.a;