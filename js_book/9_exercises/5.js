// Create a new object that uses the given object as a prototype

let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);

// Testing inheritance

console.log(myObj.foo); // 1
console.log(myObj.bar); // 2