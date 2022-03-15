function evenOrOdd(num) {
  if (Number.isInteger(num)) {
    (num % 2) === 0 ? console.log('even') : console.log('odd');
  } else {
    console.log("Please enter a number.");
  }
  
}

// Testing exercise 2

evenOrOdd(1);
evenOrOdd(2);
evenOrOdd(999);
evenOrOdd(1000);

// Testing exercise 3

evenOrOdd('not a number');
evenOrOdd(NaN);
