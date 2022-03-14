/* Chapter 2: The Basics Exercises */

// 1. 
console.log('------ PROBLEM #1 ------');

console.log('Ginni ' + 'Pinckert');
console.log('')

// 2.
console.log('------ PROBLEM #2 ------');

let num = 4936;

console.log(`The thousands place is ${parseInt(num / 1000)}`);
num = num % 1000;
console.log(`The hundreds place is ${parseInt(num / 100 )}`);
num = num % 100;
console.log(`The tens place is ${parseInt(num / 10 )}`);
num = num % 10;
console.log(`The ones place is ${num}`);
console.log('')

// 3.
console.log('------ PROBLEM #3 ------');

console.log(typeof 'true');           // string
console.log(typeof false);            // boolean
console.log(typeof 1.5);              // number
console.log(typeof 2);                // number
console.log(typeof undefined);        // undefined
console.log(typeof ({foo: 'bar'}));   // object
console.log('')

// 4.
console.log('------ PROBLEM #4------');

console.log('5' + 10);
/* The above outputs the string '510' because of JavaScripts implicit type coercion.
Whenever we use the string concatenation operator on a datatype that is not a string,
the operand that is not a string will be coerced into a string. In this case, the
integer 10 is being coerced into the string '10' which is concatenated to the string '5' */
console.log('');

// 5.
console.log('------ PROBLEM #5------');

console.log(Number('5') + 10);
console.log('');

// 6.
console.log('------ PROBLEM #6------');

console.log(`The value of 5 + 10 is ${Number('5') + 10}.`);
console.log('');

// 7.
console.log('------ PROBLEM #7------');

let foo = ['a', 'b', 'c'];
console.log(foo.length);      // 3
console.log(foo[3]);          // undefined
console.log('');

// 8.
console.log('------ PROBLEM #8------');

let names = [
  'asta',
  'butterscotch',
  'pudding',
  'neptune',
  'darwin',
];
console.log(names);
console.log('');

// 9. 
console.log('------ PROBLEM #9------');

let pets = {
  asta : 'dog',
  butterscotch : 'cat',
  pudding : 'cat',
  neptune : 'fish',
  darwin : 'lizard',
};
console.log(pets);
console.log('');

// 10.
console.log('------ PROBLEM #10------');

let a = 'foo' === 'Foo';        // => false
console.log(a);
console.log('');

// 11.
console.log('------ PROBLEM #11------');

let b = parseInt('3.1415');     // => 3
console.log(b);
console.log('');

// 12.
console.log('------ PROBLEM #12------');

let c = '12' > '9';             // => false
console.log(c);
