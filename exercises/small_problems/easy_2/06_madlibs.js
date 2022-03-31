/*
input: a noun, a verb, an adverb, an adjective
  - Should be gotten from the user
output: the parts of speech injected into a story

Sentence tDoes your *adjective* *noun* *verb* *adverb*? That's hilarious!
*/

let rlSync = require('readline-sync');

let noun = rlSync.question('Enter a noun: ');
let verb = rlSync.question('Enter a verb: ');
let adjective = rlSync.question('Enter an adjective: ');
let adverb = rlSync.question('Enter an adverb: ');

console.log(`Does your ${adjective} ${noun} ${verb} ${adverb}? That's hilarious!`)