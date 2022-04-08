// What side effects are present in foo?

const bar = 42;
let qux = [1, 2, 3];
let baz = 3;

function foo(arr) {
  let value = arr.pop(); // side effect, we mutate array referenced by qux
  console.log(`popped ${value} from the array`) // side effect, output to console
  return value + bar + baz;
}

foo(qux);

// Which of the following are pure functions?

// not pure, has a side effect
function sum1(a, b) {
  console.log(a + b); // side effect, output to console
  return a + b;
}

// not pure, always returns `undefined`, which is not dependant on the arguments
function sum2(a, b) {
  a + b;
}

// pure, no side effects and consistently returns meaningful value dependant on the arguments
function sum3(a, b) {
  return a + b;
}

// not pure, has a side effect, and will not consistently return same value for same arguments
function sum4(a, b) {
  return a + b + Math.random(); // side effect, access system random number generator
}

// not pure, always returns same value which is not dependant on the arguments
function sum(a, b) {
  return 3.1415;
}