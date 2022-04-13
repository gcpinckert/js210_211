// What will be logged?
function one() {
  function log(result) { // define log function, logs the given argument to the console
    console.log(result); // returns undefined
  }

  function anotherOne(...args) { // define anotherOne, creates a string of the ASCII code chars passed as argument & logs it
    let result = '';
    for (let index = 0; index < args.length; index += 1) {
      result += String.fromCharCode(args[index]);
    }

    log(result); // returns undefined
  }

  function anotherAnotherOne() { // logs "Welcome" then "to"
    console.log(String.fromCharCode(87, 101, 108, 99, 111, 109, 101)); // 'Welcome'
    anotherOne(116, 111); // logs 'to'
  }

  anotherAnotherOne(); // logs "Welcome to" (2 lines?)
  anotherOne(116, 104, 101); // logs "the"
  return anotherOne; // We return the function itself
}

one()(77, 97, 116, 114, 105, 120, 33); // the extra parenthesis call the function with the given arguments
// logs "Matrix"

// Full output: Welcome to the Matrix!