let a = 7;

function myValue(b) {
  b += 10;
}

myValue(a);
console.log(a); // => 7

/* Above, we initialize global variable a to the number value 7. Then we invoke the myValue function and pass a
as an argument. Since a references a primitive value, there is no way to mutate the argument, primitive values 
are immutable. We assign the value 7 to the variable b, and increment that value by 10. But this merely reassigns
the locally scoped variable b to the value 17, and does not affect the value global variable a was pointing to,
which remains 7. This is what is logged by line 8 */
