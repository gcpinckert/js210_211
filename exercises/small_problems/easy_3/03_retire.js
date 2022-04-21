// input: 2 numbers:
//  - user's age
//  - desired retirement age for same user
// output: log message to the console that:
//  - contains the current yet
//  - contains the year at which the user will retire
//  - tells how many years are left until retirement

// Example
// What is your age? 30
// At what age would you like to retire? 70

// It's 2017. You will retire in 2057.
// You have only 40 years of work to go!

// Initialize a readline sync object to get the user's input
// Ask for the user's current age, save in variable
// Ask for desired retirement age, save in variable
// Calculate remainingYears (retirementAge - age)
// Get the current year:
//  - Initialize a new Date object to the current Date
//  - Get the full year from the Date object
//  - No need to convert, this is already a number
// Calculate retirementYear (currentYear + remainingYears)
// Log the appropriate message

const rlSync = require('readline-sync');
const currentAge = Number(rlSync.question('What is your age? '));
const retirementAge = Number(
  rlSync.question('At what age would you like to retire? ')
);

const remainingYears = retirementAge - currentAge;
const currentYear = new Date().getFullYear();
const retirementYear = currentYear + remainingYears;

console.log(`It's ${currentYear}. You will retire in ${retirementYear}.`);
console.log(`You only have ${remainingYears} years of work to go!`);
