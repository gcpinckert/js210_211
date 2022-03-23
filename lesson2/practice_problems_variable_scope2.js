// 1. 

function say() {
  if (false) {
    var a = 'hello from inside a block';
  }

  console.log(a);
}

say(); // => undefined

/* Above, we declare a function scoped variable with var on line 5. This is inside a conditional,
but because we've used var and not let, a is scoped to the say function, not the block of the if
statement. However, since the if statement is never run, a is not ever initialized to the string 
value 'hello from inside a block'. Rather, it references the value undefined, which is what is output
by line 8 when we invoke the say function on line 11 */
console.log('');

// 2. 

function sayAgain() {
  if (false) {
    let b = "hello from inside a block";
  }

  // console.log(b); // => raises ReferenceError: b is not defined
}

sayAgain();

/* On line 24 we declare a variable with let that has block scope. Therefore, the scope of variable a is
limited to the block of the if statement that runs from lines 23-25. If we try to reference it outside
of the block, such as on line 27, it will raise a ReferenceError */

// 3. 

function hello() {
  c = 'hello';
  console.log(c); // => hello

  if (false) {
    var c = 'hello again';
  }
}

hello();
// console.log(c); // raises ReferenceError

/* On line 43 we declare a variable c with var. This variable has function level scope, it is available throughout the
function. The variable declaration var c; is hoisted to the top of the function, and given the value undefined. Therefore, when we invoke hello and line 39 is run, we are initializing the value of c to 'hello'. This is what is output by line 40.
Because the conditional on lines 42-44 always evaluates to false, the reassignment to 'hello again' on line 43 is never
run. The variable c has function level local scope that is limited to the function hello. It is not available, therefore,
on line 48 in the top level of the program and a ReferenceError is raised. */
console.log('');

// 4. 

function helloAgain() {
  d = 'hello';
  console.log(d); // => hello

  if (false) {
    let d = 'hello again';
  }
}

helloAgain();
console.log(d); // => hello

/* On line 64 we declare a variable d with let. This variable has block level local scope, so when it is hoisted, it is only
hoisted to the top of the if conditional. Therefore, when line 60 is executed, there has been no variable d declared, and a
new variable d with global scope is initialized, and assigned to the value 'hello'. This value is output on line 61. The
conditional on line 63-65 always evaluates to false and is never run (even if it was it would raise an error). When we log the
value of d on line 69, outside the function, it outputs hello since d is a global variable with global scope, and visible here */
console.log('');

// 5. 

var e = 'hello';

for (var index = 0; index < 5; index += 1) {
  var e = index;
}

console.log(e); // => 4

/* We declare a variable with var on line 83. The variable declaration therefore gets hoisted to the top of its scope. Because
we have used var, the variable has a function scope. It was not declared inside a function, but rather a for loop block, so it
ostensibly has global scope. When hoisted, the variable declaration is ignored, since there is already a global variable declared with var on line 80. Therefore, within the block, we are reassigning the value of e to the value of index on each iteration of
the loop. When the loop breaks, e was reassigned to 4, which is what is output by line 86 */
console.log('');

// 6. 

let f = 'hello';

for (let index = 0; index < 5; index += 1) {
  let f = index;
}

console.log(f); // => hello

/* We declare a variable with let on line 99. The variable declaration therefore gets hoisted to the top of its scope. Because
we have used let, the variable is locally scoped to the block of the for loop. Therefore, it is a new variable f which shadows
the globally scoped variable f initialized on line 96. When the loop finishes iterating, therefore and we log the value of
f to the console, f remains pointing to the string 'hello', which is output */
console.log('');

// 7. 

let g = 1;

function foo() {
  g = 2;
  let bar = function() {
    g = 3;
    return 4;
  };

  return bar();
}

console.log(foo());  // => 4
console.log(g);      // => 3

/* We declare a variable g with global scope on line 111. Therefore, within the foo function, we have access to g, and are able
to reassign it on lines 114 and 116. On line 123 we invoke the foo function. This reassigns g to 2 on line 114, and defines a
nested function called bar. This function also has access to g, and is called on line 20. It first reassigns g to 3 and returns 
4, which is output by line 123. When we output the value referenced by g on line 124, we get 3 */
console.log('');

// 8. 

var h = 'global';

function checkScope() {
  var h = 'local';
  const nested = function() {
    var h = 'nested';
    let superNested = () => {
      h = 'superNested';
      return h;
    };

    return superNested();
  };

  return nested();
}

console.log(checkScope());
console.log(h);

/* On line 135 we declare a global variable h and assign it the string global. On line 152 we invoke the checkScope function. First we declare a local variable h which is scoped to the checkScope function. It does not affect the global variable h.
Then we invoke the nested function and return the return value. nested invokes the nested function superNested and returns
the ensuing return value. The superNested function returns the string 'superNested', which is ultimately returned by checkScope
and logged on line 152. None of the initializations or assignments within checkScope affect the global variable h, so line
153 outputs 'global'. */
console.log('');

// 9.

let i = 'outer';
let j = 'outer';

console.log(i); // outer
console.log(j); // outer
setScope(i);
console.log(i); // outer
console.log(j); // inner

function setScope(fib) {
  fib = 'inner';
  j = 'inner';
}

/* Above, first we initialize two variables with global scope, i and j. Then we log their values to the console, which
logs 'outer' and 'outer'. Next, we call the setScope function, defined on lines 172-175. This is available because it has
been hoisted. We pass the value referenced by i to the function parameter fib, which becomes the function local variable fib.
Reassigning this has no effect on the outer variable i. On line 74, however, we assign the outer variable j to 'inner'.
Because j has global scope, it is available inside the function. Therefore on lines 169 and 170 the values logged will be 
'outer' and 'inner'. */
console.log('');

// 10.

let total = 50;
let increment = 15;

function incrementBy(increment) {
  total += increment;
}

console.log(total);     // 50
incrementBy(10);
console.log(total);     // 60
console.log(increment); // 15

/* Above, we first initialize two variables with global scope, total which is initialized to the value 50 and increment which
is initialized to the value 15. Next we log the value of total, which will output 50. Then we call the incrementBy function 
defined on lines 190 - 192 and pass it the argument 10. This argument gets assigned to the function local variable
increment, which shadows the global variable increment initialized on line 188. Therefore, when we execute line 191,
total gets reassigned to the value 60, which is what is output by line 196. When we log the value of increment on line 197, we
are again in the global scope and have no access to the function local variable increment, so the value 15 is output. */
console.log('');

// 11.

let k = 'outer';

console.log(k);  // outer
setScopeAgain(); // TypeError: setScopeAgain is not a function
console.log(k);
var setScopeAgain = function () {
  k = 'inner';
};

/* Above, we first initialize a variable with global scope, k, to the value 'outer'. Then we log it's value, which outputs the
string 'outer'. Then we invoke the setScopeAgain function defined on line 215. This is defined with a var variable declaration
and a function expression. Therefore, only the var variable declaration will be hoisted, and the function expression has not
yet been processed. JavaScript considers the variable setScopeAgain to reference the value undefined, so trying to invoke it
as a function will result in an error. */