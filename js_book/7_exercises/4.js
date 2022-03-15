for (let i = 0; i < 5;) {
  console.log(i += 1);
}

// It does not throw an error, because all 3 components of the for loop are optional
// And the `i` variable is initialized and scoped to the block by the for loop
// It does not create an infinite loop as the incrementation component of the loop is accomplished
// within the body of the block.