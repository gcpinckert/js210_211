// not a pure function
let tipPercent = .15;

function calculateTotal(subtotal) {
  let tip = tipPercent * subtotal;
  return subtotal + tip;
}

console.log(calculateTotal(100));     // => 115
tipPercent = .20;
console.log(calculateTotal(100));     // => 120
