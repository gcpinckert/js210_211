
sayHello();            // raises ReferenceError: Cannot access 'sayHello' before initialization

let sayHello = function () {
  console.log('Hello');
};
