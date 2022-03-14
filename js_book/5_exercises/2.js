function getName(type) {
  let rlSync = require('readline-sync');
  return rlSync.question(`What is your ${type} name? `);
}

let firstName = getName('first');
let lastName = getName('last');
console.log(`Hello, ${firstName} ${lastName}!`);