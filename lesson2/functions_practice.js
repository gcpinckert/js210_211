function sayArguments() {
  for (let i = 0; i < arguments.length; i += 1) {
    console.log(arguments[i]);
  }
}

sayArguments('a', 'b', 'c');
sayArguments('Hello World');
sayArguments(1, 2, 3, 4, 5);
sayArguments();