// The closure points to surrounding in scope variables, not values
// Which allows it to see any reassignments that may occur

const { _DBG_clearHistory } = require("readline-sync");

console.log('Example 1:')
let numbers = [1, 2, 3];

function printNumbers() {
  console.log(numbers); // accessed through closure
}

printNumbers(); // => [1, 2, 3]

numbers = [4, 5];
printNumbers(); // => [4, 5]
console.log('');

// This is true for primitive values as well
// We need a pointer to the variable so the closure can see any changes

console.log('Example 2:')
let number = 42;

function printNumber() {
  console.log(number); // accessed through closure
}

printNumber(); // => 42

number = 3.1415;
printNumber(); // => 3.1415
console.log('');

// Since we can pass around a function like any other object, we don't have to execute it in the same scope 
// in which it is defined; we can call it from a completely different part of the program.
console.log('Example 3:')

// a higher-order function that returns a function object
function foo() {
  let name = 'Ginni';
  return function () {
    console.log(name);
  };
}

let printGinni = foo(); // returns anonymous function object
printGinni();           // invokes anonymous function object
// => Ginni | we have access to name variable in outer scope due to closure

console.log('');

// Each time you invoke a function, it sees the most recent version of variables 
// New reassigned values are accessible to the function
console.log('Example 4:')

function makeCounter() {
  let counter = 0;

  return function() {
    counter += 1;
    return counter;
  }
}

let incrementCounter = makeCounter();
console.log(incrementCounter()); // 1
console.log(incrementCounter()); // 2 - the new value is known to the second invocation

console.log('');
console.log('Example 5:')

// if we create two functions from makeCounter, each of the closures gets its own copy of counter
// each invocation of makeCounter creates a *new* local variable counter, independent to each returned function
let incrementCounter1 = makeCounter();
let incrementCounter2 = makeCounter();

console.log(incrementCounter1()); // 1
console.log(incrementCounter1()); // 2
console.log(incrementCounter1()); // 3
console.log('');

console.log(incrementCounter2()); // 1
console.log(incrementCounter2()); // 2
console.log('');

console.log(incrementCounter1()); // 4
console.log('');

// If we return two functions that close over the *same* variable, they will share that variable.
console.log("Example 6:")

function makeAnotherCounter() {
  let counter = 0;

  const fun1 = function() {
    counter += 1;
    return counter;
  }

  const fun2 = function() {
    counter += 2;
    return counter;
  }

  return [fun1, fun2]; // this is an array of two function objects, both share counter variable
}

let funs = makeAnotherCounter(); // returns an array of two function objects
let fun1 = funs[0];
let fun2 = funs[1];
console.log(fun1()); // invokes the function, counter is incremented by 1, outputs 1
console.log(fun2()); // invokes function, same counter is incremented by 2, outputs 3
console.log('');

// Callback functions also use closure
console.log('Example 7:')

let oddNumbers = [];
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

array.forEach(number => { // the callback function is invoked within the implementation of forEach
  if (number % 2 === 1) {
    oddNumbers.push(number); // we can access oddNumbers since it is in scope when the callback is defined
  }
});

console.log(oddNumbers); // => [ 1, 3, 5, 7, 9 ]
console.log('');


