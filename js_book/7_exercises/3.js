// The following code creates an infinite loop

let counter = 0;

while (counter = 1) { // This is assignment not equality comparison, always returns a truthy value
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}
