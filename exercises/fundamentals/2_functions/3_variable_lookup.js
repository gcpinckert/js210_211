var myVar = "This is global";

function someFunction() {
  console.log(myVar);
}

someFunction(); // => This is global

/* This code creates two scopes, a global outer scope and a local inner scope limited to the body
of the someFunction function. We initialize a global variable myVar on line 1 and assign it the
string 'This is global'. Because the variable has global scope, it is visible inside the someFunction
function. Therefore, on line 4 when we log it's value, 'This is global' is output.  */