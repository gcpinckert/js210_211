// What does the code log and why?

let startingBalance = 1;
const chicken = 5;
const chickenQuantity = 7;

function totalPayable(item, quantity) {
  return startingBalance + (item * quantity); // We have access to startingBalance via closure
}

startingBalance = 5;
console.log(totalPayable(chicken, chickenQuantity)); // 40

startingBalance = 10;
console.log(totalPayable(chicken, chickenQuantity)); // 45
