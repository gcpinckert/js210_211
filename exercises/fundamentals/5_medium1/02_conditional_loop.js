// The code is expected to log numbers between 0 and 9 that are multiples of 3
// Does it run as expected? Why or why not?
let i = 0;
while (i < 10) {
  if (i % 3 === 0) { // creates an infinite loop
    console.log(i);  // i is not incremented after it hits the first multiple of 3
  } else {
    i += 1;          // move this line out of the conditional to get the expected results
  }
}