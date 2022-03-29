let a = [1, 2, 3];

function myValue(b) {
  b[2] += 7;
}

myValue(a);
console.log(a); // => [1, 2, 7]

/* Above, we declare and initialize global variable a to the array object [1, 2, 3]. Then we call the
myValue function and pass a as an argument. Within the function, the array object referenced by a is assigned
to the locally scoped parameter b. We then reassign the element at index 2 in the array to 3 + 7. Element reassignment
in an array object is mutating. Therefore, this will also be reflected in global variable a, which references
the same object being mutated. When we log the value of a to the console, [1, 2, 10] is output. */

