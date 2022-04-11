// console.log("==========Snippet 1==========");

// var counter = 5; // var counter; gets hoisted
// var rate = 3;    // var counter; gets hoisted
// console.log('The total value is ' + String(counter * rate)); // logs 15

// function counter(count) { // this gets hoisted to the top
//   // ...
// }

/* Becomes
function counter(count) {};
var counter;
var rate;

counter = 5;
rate = 3;
console.log('The total value is String(counter * rate)`) // 3 * 5 = 15 */
// console.log('');

// console.log('==========Snippet 2==========');

// function counter(count) { // this is hoisted to the top
//   // ...
// }
// // var counter;
// // var rate;

// console.log('The total value is ' + String(counter * rate)); // logs NaN
// counter is undefined, rate is undefined
// undefined * undefined is NaN

// var counter = 5; // declaration is hoisted, assignment stays down here
// var rate = 3;    //  declaration is hoisted, assignment stays down here

// console.log('==========Snippet 3==========');

// var counter = 5; // declaration is hoisted, assignment stays
// var rate = 3;    // declaration is hoisted, assignment stays

// function counter(count) { // this goes to top
//   // ...
// }

// console.log('The total value is ' + String(counter * rate)); // logs 15
// // counter references 5, rate references 3, 3 * 5

// console.log('==========Snippet 4==========');

// let counter = 5;
// let rate = 3;

// function counter(count) { // syntax error, we can't declare a let variable and function of the same name
//   // ...
// }

// console.log('The total value is ' + String(counter * rate));