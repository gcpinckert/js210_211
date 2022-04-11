function invoiceTotal(amount1, amount2, amount3, amount4) {
  return amount1 + amount2 + amount3 + amount4;
}

invoiceTotal(20, 30, 40, 50); // works as expected
invoiceTotal(20, 30, 40, 50, 40, 40); // does not work; how can you make it work?
// We can re-write the function using rest parameter syntax
// allows us to accept an indefinite number of arguments as an array

function invoiceTotalSolution(...amounts) {
  return amounts.reduce((amount, sum) => amount + sum, 0);
}

console.log(invoiceTotalSolution(20, 30, 40, 50));
console.log(invoiceTotalSolution(20, 30, 40, 50, 40, 40));