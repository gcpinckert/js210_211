// input:
//  - price: mandatory
//  - quantity: optional, default 1
//  - discount: optional, default 0
//  - serviceCharge: optional, default 10%
//  - tax: optional, default 15%

// Solution using conditional statements
function processOrder(price, quantity, discount, serviceCharge, tax) {
  if (!quantity) {
    quantity = 1;
  }

  if (!discount) {
    discount = 0;
  }

  if (!serviceCharge) {
    serviceCharge = 0.1;
  }

  if (!tax) {
    tax = 0.15;
  }

  return (price * quantity) * (1 - discount) * (1 + serviceCharge) * (1 + tax);
}

console.log(processOrder(100));            // 126.5
console.log(processOrder(10, 3, 0, 0, 0)); // expected: 30, actual: 37.94999....

// Solution using more condensed syntax to do the same thing
function processOrder2(price, quantity, discount, serviceCharge, tax) {
  quantity = quantity || 1;
  discount = discount || 0;
  serviceCharge = serviceCharge || 0.1;
  tax = tax || 0.15;

  return price * quantity * (1 - discount) * (1 + serviceCharge) * (1 + tax);
}

console.log(processOrder2(100));           // 126.5
console.log(processOrder(10, 3, 0, 0, 0)); // expected: 30, actual: 37.9499999.....

// What is the limitation and how does it lead to an incorrect result?
// 0 is a falsy value, so when we pass it as argument, the default value
// is assigned to the value we wanted to be 0, leading to an incorrect
// result. To avoid this we can make our conditionals more explicit and
// check for a value of undefined rather than any falsy value.
