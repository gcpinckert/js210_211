// Use node's built in require function to import readline-sync
// This returns the library as an object, which we assign to `rlSync`
let rlSync = require('readline-sync');

// Use `rlSync` to call the `question` method. This displays the string
// argument given, and waits for the user to respond.
// When the user types something and hits enter, it returns that text to the
// program. This is then assigned to the variable `name`
let name = rlSync.question("What's your name?\n");

console.log(`Good Morning, ${name}!`);