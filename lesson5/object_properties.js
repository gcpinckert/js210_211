/*
input: an object and a string
output: boolean
  - true if the Object contains a property with the given string name
  - false otherwise

- Get an array of all the property names
- See if the given string exists in that array
*/

function objectHasProperty(object, property) {
  let propertyNames = Object.keys(object);
  return propertyNames.includes(property);
}

let pets = {
  cat: 'Simon',
  dog: 'Dwarf',
  mice: null,
};

console.log(objectHasProperty(pets, 'dog'));       // true
console.log(objectHasProperty(pets, 'lizard'));    // false
console.log(objectHasProperty(pets, 'mice'));      // true
console.log('');

/*
input: an Object and a string (representing property name)
output: new value of the property that has the given name
  - if given Object already has that property, increment the value by 1
  - if not, add the new property with the value of 1

- Check to see if the object has the property
- If so, += it's value to 1
- Otherwise, set the value to 1
- Return the property value
*/

function incrementProperty(object, property) {
  if (objectHasProperty(object, property)) {
    object[property] += 1;
  } else {
    object[property] = 1;
  }

  return object[property];
}

let wins = {
  steve: 3,
  susie: 4,
};

console.log(incrementProperty(wins, 'susie'));   // 5
console.log(wins);                               // { steve: 3, susie: 5 }
console.log(incrementProperty(wins, 'lucy'));    // 1
console.log(wins);                               // { steve: 3, susie: 5, lucy: 1 }
console.log('');

/*
input: two Object arguments
output: integer, the number of copied properties
- copy all properties from the first object into the second.

- Initialize a counter to 0
- Iterate over the first object argument
  - For each property, assign the current name to the current value in 2nd object
  - Increment the counter
- Return the counter
*/

function copyProperties(object1, object2) {
  let copied = 0;

  for (let key in object1) {
    object2[key] = object1[key];
    copied += 1;
  }

  return copied;
}

let hal = {
  model: 9000,
  enabled: true,
};

let sal = {};
console.log(copyProperties(hal, sal));  // 2
console.log(sal);                       // { model: 9000, enabled: true }
console.log('');

/*
input: string
output: Object containing the number of times each word appears in the string
- words should be keys and counts should be values

- Initialize an empty object to hold word counts
- Split the string into an array of words
- Iterate over the array of words
  - For each word, add the word as a key in the word counts object
  - assign the length of the word as the associated value
- After iteration is complete, return the word counts object
*/

function wordCount(text) {
  let wordCounts = {};
  let words = text.split(' ');

  words.forEach(word => {
    let counts = words.filter(innerWord => word === innerWord).length;
    wordCounts[word] = counts;
  });

  return wordCounts;
}

console.log(wordCount('box car cat bag box'));  // { box: 2, car: 1, cat: 1, bag: 1 }

