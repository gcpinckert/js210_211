// change the function from 09_letter_counter.js
// it should exclude characters that are not letters in the counts

// Algorithm
// Create a function that only counters letters
// Count words with this function instead of using `length`

// Split the word into an array of characters
// Initialize a counter to 0
// Iterate over the characters
// If it is a letter, add one to the counter
// Return the counter

function countLetters(word) {
  let chars = word.split('');
  let counter = 0;

  chars.forEach(char => {
    if (/[a-z]/i.test(char)) {
      counter += 1;
    }
  });

  return counter;
}

function wordSizes(text) {
  let counts = {};

  if (text.length === 0) return counts;

  let wordCounts = text.split(' ').map((word) => String(countLetters(word)));

  wordCounts.forEach((count) => {
    if (!Object.keys(counts).includes(count)) {
      let times = wordCounts.filter(
        (potentialMatch) => count === potentialMatch
      ).length;

      counts[count] = times;
    }
  });

  return counts;
}


console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "5": 1, "2": 1, "3": 1 }
console.log(wordSizes(''));                                            // {}