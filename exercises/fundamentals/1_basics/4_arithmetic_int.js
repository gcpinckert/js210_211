/* Expected Output:
==> Enter the first number:
23
==> Enter the second number:
17
==> 23 + 17 = 40
==> 23 - 17 = 6
==> 23 * 17 = 391
==> 23 / 17 = 1
==> 23 % 17 = 6
==> 23 ** 17 = 1.4105003956066297e+23
*/

function log(message) {
  console.log(`==> ${message}`);
}

let num1 = parseInt(prompt('==> Enter the first number:\n'), 10);
let num2 = parseInt(prompt('==> Enter the second number:\n'), 10);

log(`${num1} + ${num2} = ${num1 + num2}`);
log(`${num1} - ${num2} = ${num1 - num2}`);
log(`${num1} * ${num2} = ${num1 * num2}`);
log(`${num1} / ${num2} = ${Math.round(num1 / num2)}`);
log(`${num1} % ${num2} = ${num1 % num2}`);
log(`${num1} ** ${num2} = ${num1 ** num2}`); // if this is too large for Number we can use BigInt

