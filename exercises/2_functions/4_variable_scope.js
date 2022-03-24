function someFunction() {
  myVar = "This is global";
}

someFunction();
console.log(myVar); // => This is global

/* Above, we initialize a variable myVar within the local scope of someFunction. However
the variable is not declared with let, const, or var. Therefore, JavaScript creates the variable
as a property on the global object. This means it is globally accessible. Therefore when we log
it's value on line 6, "This is global" is output, since the variable has global scope and is
accessible here. */
