/*
input: numeric salary amount and boolean switch
output: 
  - if boolean is true, return 1/2 given salary
  - otherwise, no bonus return 0
*/


function calculateBonus() {
  return arguments[1] ? arguments[0] / 2 : 0;
}

console.log(calculateBonus(2800, true)); // 1400
console.log(calculateBonus(1000, false)); // 0
console.log(calculateBonus(50000, true)); // 25000

/*
Above, we need to access the values of passed in arguments in a function
that is defined without any parameters. To do so, we utilize the arguments
object. We can access each argument by using indices within bracket notation,
as we might expect with an array. The second argument is expected to be a boolean
so we use this as the conditional expression to be evaluated by the ternary operator.
If the boolean is true, we return the first argument (the numerical bonus) divided
by 2. Otherwise, we return 0.
*/
