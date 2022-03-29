// How many unique execution paths are possible?

// 1) all conditions are falsy
console.log('path 1');
console.log('');
let condition1;
let condition2;
let condition4;
let condition5;

if (condition1) {
  console.log('branch 1'); 
  if (condition2) {
    console.log("branch 2");
  } else {
    console.log("branch 3");
  }
} else {
  console.log("branch 4"); // output because the first condition evaluted to false
  if (condition4) {
    console.log("branch 5");
    if (condition5) {
      console.log("branch 6");
    }
  } 
}
console.log('');

// 2) condition 1 is truthy, all others falsy
console.log("path 2");
console.log("");
condition1 = true;

if (condition1) {
  console.log("branch 1"); // output
  if (condition2) {
    console.log("branch 2");
  } else {
    console.log("branch 3"); // output because condition2 is falsy
  }
} else {
  console.log("branch 4");
  if (condition4) {
    console.log("branch 5");
    if (condition5) {
      console.log("branch 6");
    }
  }
}
console.log("");

// 3) condition1 and condition2 are truthy, condition4 and condition5 are falsy
console.log("path 3");
console.log("");
condition2 = true;

if (condition1) {
  console.log("branch 1"); // output
  if (condition2) {
    console.log("branch 2"); // output
  } else {
    console.log("branch 3"); 
  }
} else {
  console.log("branch 4");
  if (condition4) {
    console.log("branch 5");
    if (condition5) {
      console.log("branch 6");
    }
  }
}
console.log("");

// 4) condition4 is truthy, condition1 and condition5 are falsy
// note: condition2 doesn't matter here, will only execute if condition1 is true
console.log("path 4");
console.log("");
condition4 = true;
condition1 = false;

if (condition1) {
  console.log("branch 1");
  if (condition2) {
    console.log("branch 2");
  } else {
    console.log("branch 3");
  }
} else {
  console.log("branch 4"); // output because condition1 is false
  if (condition4) {
    console.log("branch 5"); // output
    if (condition5) {
      console.log("branch 6");
    }
  }
}
console.log("");

// 5) condition1 is falsy, both condition4 and condition5 are truthy
// note: condition2 is not effected here
console.log("path 5");
console.log("");
condition5 = true;

if (condition1) {
  console.log("branch 1");
  if (condition2) {
    console.log("branch 2");
  } else {
    console.log("branch 3");
  }
} else {
  console.log("branch 4"); // output because condition1 is false
  if (condition4) {
    console.log("branch 5"); // output
    if (condition5) {
      console.log("branch 6"); // output
    }
  }
}