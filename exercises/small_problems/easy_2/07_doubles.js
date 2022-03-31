/*
input: an integer
output: an integer
  - if the input number is not a double, return the input number * 2
  - If the input number is a double, return the input number

A double number:
- has an even length (i.e. 2, 4, 6, digits)
- the left-side digits are the same as the right side 
  - (44, 3333, 103103, 7676)
- mirror images don't count (334433 is not double)

Algorithm:
- Is it a double number?
  - convert the number to a string
  - if the length of the string is odd, return false
  - divide the length in half to get middle index
  - see if indexes 0 through (half - 1) is equal to indexes half - last index
  - if yes return true, false otherwise

- If the input number is a double number, return it
- Otherwise, return it divided by 2
*/

function doubleNumber(number) {
  let strNum = String(number);

  if (strNum.length % 2 !== 0) return false;

  let halfwayIndex = strNum.length / 2;

  return (strNum.slice(0, halfwayIndex) === strNum.slice(halfwayIndex));
}

function twice(number) {
  return (doubleNumber(number) ? number : number * 2);
}

console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676