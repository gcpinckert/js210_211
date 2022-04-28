// input: string of words
//  - contains one or more space separated words
// output: an object showing number words and their size
//  - the keys of the object should be a string version of the number of letters
//  - the values are integers of the number of words (that have that length)
//  - any characters (i.e. punctuation) count as letters
//  - order doesn't matter

// Examples:
// wordSizes('Four score and seven.');
// { "3": 1, "4": 1, "5": 1, "6": 1 }
//  - Four = 4
//  - score = 5
//  - and = 3
//  - seven = 6
// wordSizes('Hey diddle diddle, the cat and the fiddle!');
// { "3": 5, "6": 1, "7": 2 }
// wordSizes("What's up doc?");
// { "2": 1, "4": 1, "6": 1 }
// wordSizes('');
// {}

// Algorithm
// Initialize an object to hold the counts
// Split the string up into an array of words
// Iterate over the words, transforming each word into it's length
// Iterate over the lengths
//  - Skip the current count if it already appears in the object
//  - For each length, get a count of how many times it appears in the array
//  - Add the length as key and the count as value to the object
// Return the object of counts

function wordSizes(text) {
  let counts = {};

  if (text.length === 0) return counts;

  let wordCounts = text.split(' ').map(word => String(word.length));

  wordCounts.forEach(count => {
    if (!Object.keys(counts).includes(count)) {
      let times = wordCounts.filter(
        (potentialMatch) => count === potentialMatch
      ).length;

      counts[count] = times;
    }
  });

  return counts;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}