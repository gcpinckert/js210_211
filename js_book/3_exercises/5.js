let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo); // => qux

// The above code outputs the string 'bar'.
// On line 1, the variable `foo` is declared and initialized to the string 'bar'
// On line 2, we have a block
// On lin 3, we declare a separate variable `foo` which is scoped to the block,
// and initialize it to the string 'qux'
// This is a separate variable that has no effect of the value of foo initialized
// on line 1
// On line 6, we pass 'foo' to `console.log`, because we are no longer in the scope
// of the block, this uses the variable 'foo' initialized on line 1, which points to 'bar'
