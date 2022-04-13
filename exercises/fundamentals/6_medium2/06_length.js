// What is logged and why?

const languages = ['JavaScript', 'Ruby', 'Python'];
console.log(languages);         // ['JavaScript', 'Ruby', 'Python']
console.log(languages.length);  // 3, length is always largest index (2) + 1

languages.length = 4;           // changed length and adds "empty slots" to array with index of 3
console.log(languages);         // ['JavaScript', 'Ruby', 'Python', <1 empty space> ]
console.log(languages.length);  // 4, length is always largest index (3) + 1

languages.length = 1;           // changes length to 1, and gets rid of extra elements (and their indices)
console.log(languages);         // ['JavaScript']
console.log(languages.length);  // 1, length is always largest index (0) + 1

languages.length = 3;           // changes length to 3, adds "empty slots" to array up to index 2
console.log(languages);         // ['JavaScript', <2 empty spaces> ]
console.log(languages.length);  // 3, length is always largest index (2) + 1

languages.length = 1;           // changes length to 1, gets rid of extra indices with empty slots
languages[2] = 'Python';        // Adds value at index 2, will also have empty space at index 1
console.log(languages);         // ['JavaScript', <1 empty space>, 'Python']
console.log(languages[1]);      // undefined, empty spaces are considered empty and return undefined
console.log(languages.length);  // 3, length is always largest index (2) + 1