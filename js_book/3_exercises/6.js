const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);

// The program will not produce an error, because constants have block scope
// Therefore on like 3 we are declaring and initializing a separate constant `FOO`
// that is scoped to the block, and this will not interfere with the outer
// constant FOO initialized on line 1.