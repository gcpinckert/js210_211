// What will be output and why?

const myObject = {
  prop1: '123',
  prop2: '234',
  'prop 3': '345',
};

const prop2 = '456';
myObject['prop2'] = '456';
myObject[prop2] = '678';

console.log(myObject[prop2]); // '678'
console.log(myObject.prop2);  // '456'

/*
Above, we initialize a new object literal myObject. We also initialize a new
string literal and assign it to prop2. Both are constants.

On line 10, we change the value associated with the key 'prop2' in myObject
from '234' to '456'. This is akin to indexed reassignment, and mutates the
myObject object. 

Line 11 creates a new property on the myObject object with the key '456' and
assigns it the value '678'. This is because if we do not specify quotes for
a string with bracket notation, JS will assume we are trying to reference a
variable. Here, we have a variable prop2 that references the string '456'. This,
therefore, is assigned to be the key of the new object property.

When we log myObject[prop2] we will see the string '678'.
When we log myObject.prop2 we will see the string '456'. Here we are using dot
notation, and explicitly telling JS that we are looking for the object property
'prop2'.
*/