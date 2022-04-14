function randomGreeting() {
  const words = [
    'Hello',
    'Howdy',
    'Hi',
    'Hey there',
    "What's up",
    'Greetings',
    'Salutations',
    'Good to see you',
  ];

  const idx = Math.floor(Math.random() * words.length);

  return words[idx]; // this needs an explicit return statement, currently randomGreenting returns undefined
}

function greet(...args) {
  const names = Array.prototype.slice.call(args);

  for (let index = 0; index < names.length; index++) {
    const name = names[index];
    const greeting = randomGreeting(); // to actually call the function we need to append ()

    console.log(`${greeting}, ${name}!`);
  }
}

greet('Hannah', 'Jose', 'Beatrix', 'Julie', 'Ian');
