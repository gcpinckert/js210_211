let name = "Bob";
const saveName = name;
name = "Alice";
console.log(name, saveName);
// Alice Bob

const name2 = "Bob";
const saveName2 = name2;
name2.toUpperCase();
console.log(name2, saveName2);
// Bob Bob
// Strings are primitive values that cannot be mutated. To capture
// the return value of toUpperCase() we'd need to assign it to a variable
// We cannot reassign it to name2, however as this is a constant
// name2 = name2.toUpperCase(); -> throws an error

name3 = name2.toUpperCase();
console.log(name3, saveName2);
// BOB Bob