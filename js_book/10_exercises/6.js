// Search an array of strings for every element that matches the regex
// given as argument. It should return all matching elements in an array

function allMatches(words, regex) {
  return words.filter(word => word.match(regex));
}

// Tests
let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']