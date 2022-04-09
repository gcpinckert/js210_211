// What will be output and why?

const array1 = [
  'Moe',
  'Larry',
  'Curly',
  'Shemp',
  'Harpo',
  'Chico',
  'Groucho',
  'Zeppo',
];
const array2 = [];

for (let i = 0; i < array1.length; i += 1) {
  array2.push(array1[i]);
}

for (let i = 0; i < array1.length; i += 1) {
  if (array1[i].startsWith('C')) {
    array1[i] = array1[i].toUpperCase();
  }
}

console.log(array2);
// ["Moe", "Larry", "Curly", "Shemp", "Harpo", "Chico", "Groucho", "Zeppo"]

/*
Above, we initialize two array constants: `arr1` contains a list of names and
`arr2` is empty. We iterate a for loop over the indices of arr1. For each
element within, we push that element to array2. This is a destructive method
that mutates the array in place. Therefore, by the end of the iteration, we
will have two arrays both of which contain the same list of names.

Next we have another for look, which also iterates over the indices of array1.
Within there is an if statement, that checks to see if the current element starts
with C. If so, that element is reassigned to an uppercase version of the original element.

Indexed reassignment is mutating, so this will mutate the array referenced by array1.
However, strings are primitive datatypes, and immutebale, so it is impossible to mutate
the string in place. Therefore, none of the names in array2 will be changes, and 
instead we will see an array of all lowercase names logged to the console.
*/