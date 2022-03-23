// 1.

let a = "outer";

function testScope() {
  let a = "inner";
  console.log(a);
}

console.log(a); // => outer
testScope();    // => inner
console.log(a); // => outer

// the variable a is declared with `let` meaning it has block scope
// the a declared on line 3 is scoped to the main function, so will be accessible throughout the code
// however, we declare another variable a within the testScope function
// this creates a second variable a which is locally scoped to the function testScope
// it will shadow the outer variable a initialized on line 1
// it is not, however, accessible outside of the function body, and cannot be accessed on line 12
// therefore, line 12 still outputs the value of variable a initialized on line 1, 'outer'
console.log('');

// 2.

let b = 'outer';

function testScope2() {
  b = 'inner';
  console.log(b);
}

console.log(b); // => outer
testScope2();   // => inner
console.log(b); // => inner

/* The variable b is declared with `let` meaning is has block scope
the b declared on line 24 is scoped to the main function, so will be accessible throughout the code
it is accessible within the block that consists of the function body from lines 26-29
We reassign b on line 27 to the string inner Then we log b to the console on line 28, which will output 
'inner. When we output the value of b after the function completes execution, b has been
reassigned, so now points to the string inner, which is what is output. */
console.log('')

// 3.

let basket = 'empty'

function goShopping() {
  function shop1() {
    basket = 'tv';
  }

  console.log(basket); // => empty

  let shop2 = function () {
    basket = 'computer'
  };

  const shop3 = () => {
    let basket = 'play station';
    console.log(basket);
  };

  shop1();
  shop2();
  shop3(); // => play station

  console.log(basket); //= > computer
}

goShopping();

/* First we initialize the variable basket on line 46 which will have global scope and reference 'empty'.
Next, we call the goShopping function. Within goShopping, there are three nested functions.
shop1 is defined with a function declaration. Within this, we reassign basket to the string 'tv'. 
This reassigns the global basket variable permanently. However, the function has not yet been called, 
and so when we log the value of basket on line 53 it still references the string 'empty'.Next, shop2 is 
defined with a function expression. Within the block of the function expression, we reassign the basket variable 
to the string 'computer'. This reassigns the global basket variable permanently, although, there is no output. 
Next shop3 is defined with an arrow function expression. Within the block of the function expression body, 
we declare a new variable basket and initialize it ot the value 'play station'. This variable will have local scope
limited to the shop3 function. We output the value of this variable on line 61, which displays 'play station'. 
This does not, however, affect the global variable basket, which still references 'computer', which is output by line 68. */
console.log('');

// 4. 

function hello() {
  c = 'hi'; // c has not been declared, so this creates a new global variable
}

hello();
console.log(c); // c has global scope, so this logs 'hi'

// note that because c has not been declared, it is now a property on the global object
console.log('');

// 5. 

function anotherHello() {
  let d = 'hello'; // initializes a variable with local scope, limited to the anotherHello function
}

anotherHello();
// console.log(d); // raises a ReferenceError, d is not visible outside the anotherHello function
console.log('');

// 6. 

console.log(e); // logs undefined
var e = 1;

/* The var declaration var e; is "hoisted", and therefore e is available on line 110. Because the initialization
has not yet taken place, and we have declared e with var, e references undefined, which is output */
console.log('');

// 7. 

//console.log(f); // raises ReferenceError: Cannot access 'f' before initialization
let f = 1;

/* The let declaration let e; is "hoisted", however, we have declared 'e' with let, so it has not been assigned
any value, and therefore is not available on line 119, which raises a Reference Error */

// 8. 

console.log(g); // raises ReferenceError: g is not defined

function yetAnotherHello() {
  g = 1;
}

/* Because the function hello is never invoked, the variable assignment on line 130 never gets run. If it
had been run, this would initialize a global variable (since no keyword or variable declaration is used), which
would make it available on line 127. It is not executed, however, so there is no variable g visible on line
127, and a ReferenceError is raised */
