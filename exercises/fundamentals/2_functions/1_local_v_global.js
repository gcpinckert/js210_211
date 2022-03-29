var myVar = "This is global";

function someFunction() {
  var myVar = "This is local";
}

someFunction();
console.log(myVar); // => This is global

/* The above code creates two separate scopes. A global scope, and a local inner scope that is
limited to the someFunction function. The code will log 'This is global', because the variable 
`myVar` declared in the someFunction function shadows the global variable `myVar` initialized 
on line 1. Therefore, we have no way to access the global variable myVar inside the someFunction 
function, and it is not reassigned by line 4. */