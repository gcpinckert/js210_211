/*
input: an array and an object
- the array will contain two or more elements
- the elements represent a person's name (i.e. first, last or first, middle, last)
- the object will contain two keys `title` and `occupation`
- the values for each key will represent the persons title and occupation
output: log a greeting to the console that uses the person's fill name
  as well as mentioned the person's title and occupation
*/

function greetings(names, jobInfo) {
  let name = names.join(' ');
  let job = Object.values(jobInfo).join(' ');

  console.log(`Hi, ${name}! Sure is nice to have a ${job} around!`);
}

greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' });