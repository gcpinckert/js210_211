console.log(a); // => undefined

var a = 1;

/* The above code is executed in the following order. First, due to hoisting, the variable declaration
var a; is executed. The global variable a is therefore declared, and references the value undefined.
Because the initialization is not hoisted with it, it references undefined when it is passed
to console.log, and this is what is output. After we log it's value, variable a is assigned to 1. */