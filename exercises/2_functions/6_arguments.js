let a = 7;

function myValue(a) {
  a += 10;
}

myValue(a);
console.log(a); // => 7

/* First we declare a global variable a and initialize it to the value 7. Then we call the
myValue function and pass a as an argument. The value 7, then, is assigned to the local variable
a within the function. This local variable is scoped locally to the function, and is distinct
and separate from the global variable a. In fact, it shadows the global variable, so we
have no way to access the global variable a within the function. Therefore, when we reassign the
value of local variable a to the value 17 (7 + 10), it does not affect the value of global variable
a, which remains 7. This is what is logged to the console on line 8, since we cannot access the
local variable a from the top-level scope. */

