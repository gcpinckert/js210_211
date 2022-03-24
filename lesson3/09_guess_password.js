/*
Write a password guessing program that tracks how many times a user enters
the wrong password.
- If the user enters the password wrong 3 times, log:
  "You have been denied access"
  and terminate the program
- If the password is correct, log
  "You have successfully logged in"
  and end the program

Example:
// password = 'password'

// The program displays a dialog that asks the user to enter a password.
// If the user enters the wrong password, keep asking up to three times. After
// three failures, log the access denied.

What is the password: 123
What is the password: opensesame
What is the password: letmein

// message on the console
You have been denied access.

// If the user enters the right password, report login success.
What is the password: password

// message on the console
You have successfully logged in.
*/

function getGuess() {
  return prompt('What is the password:');
}

let attempts = 0;
const PASSWORD = 'password';

while (attempts < 3) {
  let guess = getGuess();
  if (guess === PASSWORD) {
    console.log('You have successfully logged in.');
    break;
  }
  attempts += 1;
}

if (attempts === 3) {
  console.log('You have been denied access.')
}