let array1 = [1, 2, 3];
let array2 = array1;
array1[1] = 4;
console.log(array2); // [1, 4, 3]

/*
The above code logs the array [1, 4, 3]. This is because element assignment is mutating.
When we assign the element at array1 index 1 to point to the integer 4, we are changing
the object referenced by the variable array1. The variable array2 also points to this
object, therefore the change will be reflected there as well. */
