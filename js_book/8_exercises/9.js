/* check wether the number 3 appears inside these arrays, return true
or false depending on each result */

let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

let arrays = [numbers1, numbers2, numbers3]

arrays.forEach(subarr => {
  console.log(subarr.includes(3));
});