// The code is expected to log a multiplication table for 1-10
// What is the result and why?

function padLeft(number) {
  const stringNumber = String(number);
  switch (stringNumber.length) {
    case 1:
      return `  ${stringNumber}`;
    case 2:
      return ` ${stringNumber}`;
    default:
      return stringNumber;
  }
}

for (let i = 1; i < 10; i += 1) { // this loop does not go all the way up to 10, only 9
  let row = '';
  for (let j = 1; j <= 10; j += 1) {
    row += `${padLeft(i * j)} `;
  }

  console.log(row);
}

// we will be missing the 10 row, although we have a 10 column.
// change i < 10 to i <= 10 in the outer for loop to fix the problem.