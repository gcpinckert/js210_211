// 1.
let apples = 3;
let bananas = 5;
if (apples == bananas) {
  console.log('There are the same amount of apples and bananas');
}

// 2. 
bananas = '3'
if (apples == bananas) {
  console.log("There are the same amount of apples and bananas");
} // this will execute, because we are using the loose equality operator
  // and 3 == '3' will evaluate to true due to implicit coercion

// 3.
if (apples === bananas) {
  console.log("There are the same amount of apples and bananas");
} // this will not execute, because we are using the strict equality operator
  // 3 === '3' will evaluate to false

// 4.
if (apples === bananas) {
  console.log("There are the same amount of apples and bananas");
} else {
  console.log("Apples and bananas are not equal"); // this will execute
}

// 5.
if (apples === bananas) {
  console.log("There are the same amount of apples and bananas");
} else if (apples == bananas) {
  console.log("There are the same amount of apples and bananas, but they are different types"); // this will execute
} else {
  console.log("Apples and bananas are not equal");
}

// 6.
if (apples === bananas) {
  console.log("There are the same amount of apples and bananas");
} else {
  if (apples == bananas) {
    console.log(
      "There are the same amount of apples and bananas, but they are different types"
    ); // this will execute (still)
  } else {
    console.log("Apples and bananas are not equal");
  }
}

// 7. 
apples = 3;
bananas = 3;
let areEqual = (apples === bananas);
console.log(areEqual); // true

// 8.
bananas = undefined;
let eitherOr = (apples || bananas);
console.log(eitherOr); // 3

// 9.
bananas = 1;
eitherOr = (apples || bananas);
console.log(eitherOr); // 3

eitherOr = (bananas || apples);
console.log(eitherOr); // 1

// 10.
let lastName = 'Pinckert';
let familyMessage = lastName === 'Pinckert' ? "You're part of the family!" : "You're not family.";
console.log(familyMessage);