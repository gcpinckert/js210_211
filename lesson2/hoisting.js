// // Using var on the top level of a program creates a property on the global object
// var bar = 42;
// console.log(global.bar);  // 42 (only in Node REPL)

// // this is not the case for let
// let foo = 86;
// console.log(global.foo); // undefined

// // Using var inside a function does not create a property on any object
// function foo() {
//   var bar = 42;
//   console.log(global.bar); // undefined
// }

// foo();

// // let and var have different levels of scope
// function foo() {
//   if (true) {
//     var a = 1; // var has function level scope
//     let b = 2; // let has block level scope
//   }

//   console.log(a); // 1, the variable is visible within the function
//   console.log(b); // ReferenceError, the variable is only visible within the block
// }

// foo();

// // The scope of var can create weird side effects
// function foo() {
//   if (false) { // the code is never run, so the variable is not initialized
//     var a = 1; // this defines a function scoped variable
//   }

//   console.log(a); // => undefined, the variable is still visible, just has no value
// }

// foo();

// // the following code works because of hoisting
// console.log(getName());   // call the function before it is defined

// function getName() {      // works because the function declaration gets hoisted to the top of its scope
//   return 'Ginni';
// }

// // var gets treated differently when hoisted
// // before it is declared the variable will reference undefined
// console.log(bar);  // undefined
// var bar = 3;       // this gets hoisted to the top of it's scope
// console.log(bar);  // 3

// // let or const cannot be referenced before they are declared
// console.log(foo);  // ReferenceError: Cannot access 'foo' before initialization
// let foo;           // this gets hoisted but it doesn't have a value (not even undefined)

// console.log(qux);   // ReferenceError: Cannot access 'qux' before initialization
// const qux = 42;     // this gets hoisted but it doesn't have a value (not even undefined)

// // variables that have never been declared have a different error message
// console.log(baz);       // ReferenceError: baz is not defined

// JavaScript will hoist the entire function declaration, including the body
// Code that's written like this:
// console.log(hello());

// function hello() {
//   return 'hello world';
// }

// // Gets executed in this order:
// function hello() {
//   return 'hello world';
// }

// console.log(hello());  // => hello world

// // Hoisting also occurs with nested functions
// function foo() {
//   return bar();  // this executes the function declared below

//   function bar() { // this gets hoisted to the top of foo
//     return 42;
//   }
// }

// // Don't try to nest function declarations inside non-function blocks (i.e. if statements)
// // The resulting behavior can be inconsistent
// function foo() {
//   if (true) {
//     function bar() {
//       console.log('bar');
//     }
//   } else {
//     function qux() {
//       console.log('qux');
//     }
//   }

//   console.log(bar);
//   bar();

//   console.log(qux);
//   qux();
// }

// foo();

// // Only the variable declaration in a function expression is hoisted, not the value assigned to it
// // Therefore, function expressions cannot be called before they are defined
// console.log(hello()); // TypeError: hello is not a function (hello references undefined)

// var hello = function () {
//   return 'hello world';
// }

// // If both a variable declaration and function declaration are present
// // the function declaration is hoisted "above" the variable declaration
// bar(); // logs undefined

// var foo = 'hello';

// function bar() {
//   console.log(foo); // food is undefined when this is executed due to hoisting
// }

// // When a var variable and a function have the same name
// // The var variable declaration can become redundant

// // this works:
// bar(); // logs "world"
// var bar = "hello"; // comes after the invocation of bar

// function bar() { // gets hoisted above the variable declaration, `var bar;` is discarded
//   console.log("world");
// }

// // this doesn't work
// var bar = "hello"; // comes before the invocation of bar
// bar(); // raises "TypeError: bar is not a function" (because bar references 'hello')

// function bar() { // gets hoisted above the variable declaration, `var bar;` is discarded
//   console.log("world");
// }

// // You cant declare a let or const variable and a function with the same name
// let foo = 3;
// function foo() {}; // SyntaxError: Identifier 'foo' has already been declared

// function bar() {};
// let bar = 3;          // SyntaxError: Identifier 'bar' has already been declared

// ########## BEST PRACTICE RULES ##########

// Don't use var
// If you have to use var, declare all variables at the top of the scope
// function foo () {
//   var a = 1;
//   var b = 'hello';
//   var c;
// }

// Declare let and const variables as close to their first usage as possible
function foo(bar) {
  console.log('Hello world!');

  let result;
  if (bar) {
    let squaredBar = bar * bar;
    result = squaredBar + bar;
  } else {
    result = "bar hasn't been set";
  }

  return result;
}

console.log(foo(3));         // 12
console.log(foo(undefined)); // bar hasn't been set

// Declare functions before calling them