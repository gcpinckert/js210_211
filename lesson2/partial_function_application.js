// Partial function application is when a function only applies some of the
// function's argument's when called, and supplies the rest when the returned
// function is called.

console.log('Example 1:')

function add(first, second) {
  return first + second;
}

function makeAdder(firstNumber) {
  return function(secondNumber) {
    return add(firstNumber, secondNumber);
  };
}

let addFive = makeAdder(5); // first argument supplied here (assigned to firstNumber in makeAdder, assigned to first in add)
let addTen = makeAdder(10); // first argument supplied here (assigned to firstNumber in makeAdder, assigned to first in add)

console.log(addFive(3)); // second argument supplied (assigned to secondNumber in returned function, second in add) => 8
console.log(addFive(55));// second argument supplied (assigned to secondNumber in returned function, second in add) => 60
console.log(addTen(3));  // second argument supplied (assigned to secondNumber in returned function, second in add) => 13
console.log(addTen(55)); // second argument supplied (assigned to secondNumber in returned function, second in add) => 65
console.log('');

