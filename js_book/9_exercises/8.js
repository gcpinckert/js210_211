// Create a function that returns a copy of an object
// The function should take two arguments:
  // the object to copy
  // an array of the keys you want to copy
// Do not mutate the original object
// the array of keys argument is optional
// if omitted, the function should copy existing keys from object

function copyObj(ogObject, keys = Object.keys(ogObject)) {
  let objectCopy = {};
  keys.forEach (string => {
    objectCopy[string] = ogObject[string];
  });

  return objectCopy;
}

let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

let newObj = copyObj(objToCopy);
console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
console.log(newObj2);       // => { foo: 1, qux: 3 }

let newObj3 = copyObj(objToCopy, [ 'bar' ]);
console.log(newObj3);       // => { bar: 2 }