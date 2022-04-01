/*
input: positive integer representing year
output: string representing century
  - begins with the century number and ends with `st` `nd` `rd` `th`

Rules:
- new centuries begin in years that end with 01
- 1901 - 2000 are the 20th century
- If the tens digit is 1, then apply `th` suffix
- If the tens digit is not 1, then:
  - units digit 0 or 4-9: `th`
  - units digit 1: `st`
  - units digit 2: `nd`
  - units digit 3: `rd`

Algorithm:
- Get the century number
  - If the input number is evenly divisible by 100
    - The century number is the number divided by 100
  - Otherwise
    - Divide the number by 100, get the integer versiun of the quotient
    - Add 1
  - Turn the resulting number (for both) into a string
- Add the appropriate suffix
  - If the digit at the second to last index is 1:
    - Append the `th` suffix
  - Otherwise:
    - If the last digit is 0 or 4-9, append `th`
    - If the last digit is 1, append `st`
    - If the last digit is 2, append `nd`
    - If the last digit is 3, append `rd` 
- Return the resulting string
*/

function centuryNum(year) {
  let century;

  if (year % 100 === 0) {
    century = year / 100;
  } else {
    century = Math.floor(year / 100);
    century += 1;
  }

  return String(century);
}

function century(year) {
  let century = centuryNum(year);

  if (/1[0-9]$/.test(century) || /[04-9]$/.test(century)) {
    century += 'th';
  } else if (/1$/.test(century)) {
    century += 'st';
  } else if (/2$/.test(century)) {
    century += 'nd';
  } else if (/3$/.test(century)) {
    century += 'rd';
  }

  return century;
}

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"