/*
input: an integer, representing any year greater than 0
output: boolean, true if that year is a leap year, false otherwise

Rules:
- leap years occur in all years divisible by 4
- leap years do not occur in years divisible by 4 and 100
- years divisible by 100 are not leap years
- years divisible by both 100 and 400 are leap years

Algorithm:
- If it is divisible by both 100 and 400 return true
- If it is divisible by 100 return false
- If it is divisible by 4 return true
  - years divisibly by 100 have already been caught
- Otherwise return false
*/

function isLeapYear(year) {
  if (year % 100 === 0 && year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isLeapYear(2016) === true);
console.log(isLeapYear(2015) === false);
console.log(isLeapYear(2100) === false);
console.log(isLeapYear(2400) === true);
console.log(isLeapYear(240000) === true);
console.log(isLeapYear(240001) === false);
console.log(isLeapYear(2000) === true);
console.log(isLeapYear(1900) === false);
console.log(isLeapYear(1752) === true);
console.log(isLeapYear(1700) === false);
console.log(isLeapYear(1) === false);
console.log(isLeapYear(100) === false);
console.log(isLeapYear(400) === true);