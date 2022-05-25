// input: an array of any kind of elements
// output: the element with the number of times it occurs in the array
// - note this should be logged not returned

// Examples:
// const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
//                 'motorcycle', 'motorcycle', 'car', 'truck'];

// countOccurrences(vehicles);

// console output
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2

// Algorithm:
// Initialize an object to hold elements and their count
// Iterate through the given array, for each element
// Does the element already exist as an object property? if so, skip
// Add the element as an object property
// Count the number of times it occurs in the array and add this as the value
// Iterate through the properties of the object
// Output each along with it's count according to the given format

// Count the number of times a given element occurs in an array
// Iterate through the array, selecting only those elements that match the input
// Return the length of the selected elements

function numOfOccurrences(array, elementToCount) {
  let matches = array.filter(value => value === elementToCount);
  return matches.length;
}

function countOccurrences(items) {
  let counts = {};
  items.forEach(item => {
    if (!Object.keys(counts).includes(item)) {
      counts[item] = numOfOccurrences(items, item);
    }
  });

  Object.keys(counts).forEach(item => console.log(`${item} => ${counts[item]}`));
}

const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
  'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2