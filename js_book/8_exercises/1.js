// What are the final `length` values for each array?

let array1 = [1, 2, undefined, 4];    // length = 4

let array2 = [1];
array2.length = 5;                    // length = 5, assigning a new length overrides the original length

let array3 = [];
array3[-1] = [1];                      // length = 0, negative indexes are not taken into account for length

let array4 = [1, 2, 3, 4, 5];
array4.length = 3;                     // length = 3, assigning a new length truncates an original longer length

let array5 = [];
array5[100] = 3;                        // length = 101, length is highest index position plus 1

console.log(array1.length === 4);
console.log(array2.length === 5);
console.log(array3.length === 0);
console.log(array4.length === 3);
console.log(array5.length === 101);