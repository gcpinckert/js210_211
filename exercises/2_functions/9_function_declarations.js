logValue(); // => Hello, world!

function logValue() {
  console.log("Hello, world!");
}

/* Above, we have a function invocation before a function declaration. The function invocation will log
the string "Hello, world!". This is because the function declaration is hoisted, that is, the function declaration
in it's entirety, along with the body of the function, is processed before the function call. Therefore, when we 
invoke the function on line 1, JavaScript knows what to execute, and 'Hello, world!' is logged. */