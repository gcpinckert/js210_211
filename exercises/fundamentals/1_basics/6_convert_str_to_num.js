/* Write a function that takes a string of digits as an argument
Return the digits as a number
Don't use any of the built in functions for converting a string to a number
Don't worry about leading + or -
Assume all characters will be valid digits

Expected Output:
stringToInteger('4321');      // 4321
stringToInteger('570');       // 570
*/

const DigitToNum = {
  '0': 0, '1': 1, '2': 2, '3': 3, '4': 4, 
  '5': 5, '6': 6, '7': 7, '8': 8, '9': 9,
}

function stringToInteger(str) {
  let digits = str.split('').reverse(); // i.e. ['1', '2', '3', '4']
  let place = 1;
  let number = 0;

  digits.forEach(digit => {
    number += (DigitToNum[digit] * place);
    place *= 10;
  });
  
  return number;
}


console.log(stringToInteger('4321'));      // 4321
console.log(stringToInteger('570'));       // 570
