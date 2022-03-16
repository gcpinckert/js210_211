let foo = {
  a: "hello",
  b: "world",
};

let qux = "hello";

function bar(argument1, argument2) {
  argument1.a = "hi";
  argument2 = "hi";
}

bar(foo, qux);

console.log(foo.a); // hi
console.log(qux);   // hello

// We call the bar function on line 13 and pass foo and qux as arguments
// foo references an object with two keys a with a value of 'hello' and b with a value of 'world'
// qux references the primitive string 'hello'
// in the bar function, the object foo is assigned to the parameter argument1
// and the string qux is assigned to the parameter argument2
// in the function body, we reassign the value of a in the argument1 object to 'hi'
// because objects are mutable, this is a destructive action that permanently mutates the object
// next, we reassign argument2 to the value 'hi'
// strings are primitive values and therefore immutable. This will not effect qux outside in the
// main program scope.
// Therefore when we pass foo.a to console.log, we will log the string 'hi'
// But when we pass qux to console.log we will log the string 'hello'