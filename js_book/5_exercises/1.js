let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);

// The call to `foo` does not affect the value assigned to `bar` on line 1
// This is because the `bar` variable declared on line 3 is a local variable
// It is scoped to the `foo` function, and does not exist outside of it.
// Leaving out `let` would cause `bar` the global variable to be reassigned.