{
  let foo = 'bar';
}

console.log(foo); // ReferenceError: foo is not defined

// Line 5, above, will raise an error, because the variable `foo` is declared
// in the block, and therefore, is out of scope and cannot be accessed