// Create a variable that references the current date and time

let today = new Date();

/*
Log a string, "Today is day n" where n is the current day of the week as a number
between 0 and 6 (Sunday is 0, Saturday is 6).
- use the getDay method to get the number.
*/

console.log(`Today is day ${today.getDay()}`);
console.log('');

// use the day number as an index to log the name of today's day

let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
console.log(`Today is ${daysOfWeek[today.getDay()]}`);
console.log('');

// include the calendar date in the message
console.log(`Today is ${daysOfWeek[today.getDay()]}, the ${today.getDate()}th`);
console.log('');

/*
input: an integer representing the day of the month
output: a string representing the formatted day of the month with the correct suffix
- Convert the given number into a string
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

function dateSuffix(date) {
  date = date.getDate()

  if (/1[0-9]$/.test(date) || /[04-9]$/.test(date)) {
    date += 'th';
  } else if (/1$/.test(date)) {
    date += 'st';
  } else if (/2$/.test(date)) {
    date += 'nd';
  } else if (/3$/.test(date)) {
    date += 'rd';
  }

  return date;
}

console.log(
  `Today is ${daysOfWeek[today.getDay()]}, the ${dateSuffix(today)}`
);
console.log('');

// Include the numerical value of the month

console.log(
  `Today is ${daysOfWeek[today.getDay()]}, ${today.getMonth()} ${dateSuffix(today)}`
);
console.log('');

// Use the 0 based index to make the month more readable

let months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

console.log(
  `Today is ${daysOfWeek[today.getDay()]}, ${
    months[today.getMonth()]
  } ${dateSuffix(today)}`
);
console.log('');

// create some formatting functions to clean things up in the console.log statement

function formattedMonth(date) {
  let months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  return months[date.getMonth()];
}

function formattedDay(date) {
  let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return daysOfWeek[date.getDay()];
}

function formattedDate(date) {
  return formattedDay(date) + ' ' +
   formattedMonth(date) + ' ' +
   dateSuffix(date);
}

console.log(`Today is ${formattedDate(today)}`);
console.log('');

// Look at the difference in getFullYear and getYear
console.log(today.getFullYear());
console.log(today.getFullYear());

// Log the result of the getTime() method

console.log(today.getTime()); // 1649447850267
// returns number of milliseconds since Jan 1 1970
console.log('');

/*
create a new date object tomorrow. Initialize is to today's value.
Change the date on the tomorrow's object to tomorrow
you can use setDate()
Log tomorrow with the formatted Date function
*/

let tomorrow = new Date(today.getTime());
tomorrow.setDate(today.getDate() + 1);

console.log(`Tomorrow is ${formattedDate(tomorrow)}`);
console.log('');

// Create a copy of today called nextWeek and compare them for equality

let nextWeek = new Date(today.getTime());
console.log(today === nextWeek); // false, they are different objects
console.log('');

/*
- Compare the values returned by `toDateString()` for equality
- Add 7 days to `nextWeek`
- Compare again
*/

console.log(today.toDateString() === nextWeek.toDateString()); // true, strings can be compared for value equality
nextWeek.setDate(today.getDate() + 7);
console.log(today.toDateString() === nextWeek.toDateString()); // false, they have different values
console.log('');

/*
input: date object
output: string formatted with the hours and minutes (i.e. "15:30")
- handle the case where hours and minutes only has one digit:
  - we will need a leading zero, i.e. 03:04
- use getHours and getMinutes to obtain hours and minutes
*/

function formatTimeDigits(timeDigits) {
  if (timeDigits.length === 1) {
    timeDigits = '0' + timeDigits
  }

  return timeDigits;
}

function formatTime(date) {
  let hours = String(date.getHours());
  let minutes = String(date.getMinutes());

  return `${formatTimeDigits(hours)}:${formatTimeDigits(minutes)}`
}

console.log(formatTime(today));