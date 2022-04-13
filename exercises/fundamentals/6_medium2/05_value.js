// What is logged and why?

const array = ['Apples', 'Peaches', 'Grapes'];

array[3.4] = 'Oranges';                  // adds the property 3.4: 'Oranges' to the array (not an element)
console.log(array.length);               // 3, length is always largest index + 1
console.log(Object.keys(array).length);  // 4, the 3.4 key counts towards the object keys

array[-2] = 'Watermelon';                // adds the property -2: 'Watermelon' to the array (not an element)
console.log(array.length);               // 3, length is always largest index + 1
console.log(Object.keys(array).length);  // 5, both properties counts towards the number of keys in the array