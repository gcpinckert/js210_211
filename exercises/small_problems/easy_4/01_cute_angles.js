// input: floating point number representing an angle (0 - 360 degrees)
// output: string representation of that angle
// - use a degree symbol (˚) to represent degrees
// - use ' to represent minutes
// - use " to represent seconds
// - 1 degree = 60 minute
// - 1 minute = 60 seconds

// Examples
// dms(30);           // 30°00'00"
// dms(76.73);        // 76°43'48"
// dms(254.6);        // 254°35'59"
// dms(93.034773);    // 93°02'05"
// dms(0);            // 0°00'00"
// dms(360);          // 360°00'00" or 0°00'00"

// Data Structure
// - use an object to represent degs, mins, secs

// Algorithm
// Convert the input number to a string
// Split the string with the `.` as delimiter
// Initialize a variable degrees with the first element in the resulting array
// Convert the second element back to a number and multiply by 60
// Convert the result back to a string and split with `.` as delimiter
// Initialize a variable minutes with the first element in the resulting array
// Convert the second element back to a number and multiply by 60
// Convert the result back to a string and split with `.` as delimiter
// Assign the first element to a new seconds variable
// Now we can use concatenation or string interpolation to return the results

const MINS_PER_DEGREE = 60;

function getDecimal(strNumsArr) {
  if (typeof (strNumsArr[1]) === 'string') {
    return parseFloat('0.' + strNumsArr[1]);
  } else {
    return 0;
  }
}

function getSecondsMinutes(decimal) {
  if (decimal === 0) {
    return '00';
  } else {
    decimal *= MINS_PER_DEGREE;
    decimal = String(decimal).split('.');
    return decimal;
  }
}

function formatSecondsMinutes(strNum) {
  if (strNum.length === 1) {
    return '0' + strNum;
  } else {
    return strNum;
  }
}

function dms(decimal) {
  decimal = String(decimal).split('.');
  let degrees = decimal[0];
  let secondsMinutes = getSecondsMinutes(getDecimal(decimal));
  let seconds;
  let minutes;
  if (secondsMinutes === '00') {
    minutes = secondsMinutes;
    seconds = secondsMinutes;
  } else {
    minutes = secondsMinutes[0];
    seconds = getSecondsMinutes(getDecimal(secondsMinutes));
  }

  if (Array.isArray(seconds)) {
    seconds = seconds[0];
  }

  minutes = formatSecondsMinutes(minutes);
  seconds = formatSecondsMinutes(seconds);
  return `${degrees}°${minutes}'${seconds}"`;
}

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"