// While loop

let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];
let upperNames = [];
let index = 0;

while (index < names.length) {
  let upperCaseName = names[index].toUpperCase();
  upperNames.push(upperCaseName);
  index += 1;
}

console.log(upperNames);

// for loop

upperNames = [];

for (let index = 0; index < names.length; ++index) {
  let upperCaseName = names[index].toUpperCase();
  upperNames.push(upperCaseName);
}

console.log(upperNames);

// using `continue` to skip an element

upperNames = [];

for (let index = 0; index  < names.length; ++index) {
  if (names[index] === 'Naveed') continue;

  let upperCaseName = names[index].toUpperCase();
  upperNames.push(upperCaseName);
}

console.log(upperNames);

// forEach method

names.forEach(function(name) {
  console.log(name);
});