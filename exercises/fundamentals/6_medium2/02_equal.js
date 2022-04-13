// Why are we not getting the expected result?
// Fix the code

const person = { name: 'Victor' };
const otherPerson = { name: 'Victor' };

console.log(person === otherPerson);    // false -- expected: true
console.log(person.name === otherPerson.name); // true

// Objects in JS are compared for object equality, not value equality.
// Therefore, because person and otherPerson are two separate objects
// they are not considered equal. In order to get true, we will need to
// compare their properties to ensure they are the same. In this case
// there is only one property, `name`, so we can compare it's value
// (a String) and get the expected result.