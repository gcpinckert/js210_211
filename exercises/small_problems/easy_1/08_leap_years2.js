/*
Update the function from the previous exercise to determine leap years before
and after the Gregorian Calendar update of 1752.

Gregorian rules (1752 and afterwards)
- leap years occur in all years divisible by 4
- leap years do not occur in years divisible by 4 and 100
- years divisible by 100 are not leap years
- years divisible by both 100 and 400 are leap years

Julian rules (1751 and previous)
- Any year that is evenly divisible by 4 is a leap year

Algorithm:
- Is the year between 0-1751?
  - Return true if it is divisble by 4, false otherwise
- Is the year after 1751?
  - Use previous leapyear function
*/

function isGregorianLeapYear(year) {
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

function isLeapYear(year) {
  if (year < 1752) {
    return (year % 4 === 0);
  } else {
    return isGregorianLeapYear(year);
  }
}

console.log(isLeapYear(2016) == true);
console.log(isLeapYear(2015) == false);
console.log(isLeapYear(2100) == false);
console.log(isLeapYear(2400) == true);
console.log(isLeapYear(240000) == true);
console.log(isLeapYear(240001) == false);
console.log(isLeapYear(2000) == true);
console.log(isLeapYear(1900) == false);
console.log(isLeapYear(1752) == true);
console.log(isLeapYear(1700) == true);
console.log(isLeapYear(1) == false);
console.log(isLeapYear(100) == true);
console.log(isLeapYear(400) == true);
