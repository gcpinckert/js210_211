var myVar = "This is global";

function someFunction() {
  var myVar = "This is local";
  console.log(myVar); // => This is local
}

someFunction(); // => This is local

/* The above code creates two distinct scopes. A global scope and an inner local scope limited to the 
someFunction function. We declare a global variable myVar on line 1 and initialize it to the string 
"This is global". However, we also have a local variable with function scope called myVar declared within
someFunction. Because both variables have the same name, the global variable myVar initialized on line 1
is not available within the local scope of someFunction. It is "shadowed" by the local variable myVar.
This will be the variable referenced throughout the function, and therefore when the
function is invoked and line 5 is executed, 'This is local' will be output. */
