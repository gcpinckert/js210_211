function scream(words) {
  words = words + '!!!!';
  return; // Causes the function to return undefined
  console.log(words);  // This never gets run
}

scream('Yipeee');

// Nothing will be output by the above program, because the `return` statement
// on line 3 means the console.log invocation will never get run