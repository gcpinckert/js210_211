// Add a 2qux property with a value of 3 to myObj

let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);

myObj.qux = 3;

// This will only log qux, it does not include inherited properties
let objKeys = Object.keys(myObj);
objKeys.forEach(function(key) {
  console.log(key);
});

// This will log qux, foo, bar it includes inherited properties
for (let key in myObj) {
  console.log(key);
}