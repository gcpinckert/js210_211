function debugIt() {
  const status = 'debugging';
  function logger() {
    console.log(status); // can access the status variable (block scope of debugIt function)
  }

  logger(); // call the logger function which logs status
}

debugIt(); // logs "debugging"
