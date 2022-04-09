/*
input: a string argument representing 24-hour time
output: an integer representing the number of minutes before or after midnight
- integer between 0 and 1439
*/

const MILLISECONDS_PER_MINUTE = 60000;
const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

function afterMidnight(timeStr) {
  let midnight = new Date(2022, 0, 1, 0, 0);
  const timeComponents = timeStr.split(':');
  const hours = parseInt(timeComponents[0], 10);
  const minutes = parseInt(timeComponents[1], 10);
  let givenTime = new Date(2022, 0, 1, hours, minutes);

  return (givenTime.getTime() - midnight.getTime()) / MILLISECONDS_PER_MINUTE;
  
} // return the number of minutes after midnight

function beforeMidnight(timeStr) {
  let midnight = new Date(2022, 0, 2, 0, 0);
  const timeComponents = timeStr.split(':');
  const hours = parseInt(timeComponents[0], 10);
  const minutes = parseInt(timeComponents[1], 10);

  if ((hours === 0) && (minutes === 0)) return 0;

  let givenTime = new Date(2022, 0, 1, hours, minutes);

  return (midnight.getTime() - givenTime.getTime()) / MILLISECONDS_PER_MINUTE;
} // return the number of minutes after midnight

console.log(afterMidnight('00:00'));       // 0
console.log(beforeMidnight('00:00'));      // 0
console.log(afterMidnight('12:34'));       // 754
console.log(beforeMidnight('12:34'));      // 686