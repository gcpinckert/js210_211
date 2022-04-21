// input: an integer
// output: boolean
//  - true if palindromic number, false otherwise
// palindromic numbers read the same forwards and backwards
// all 1 digit numbers are palindromic

// Convert the number to a string
// Check to see if the string is a palindrome

function isPalindrome(string) {
  return (string === string.split('').reverse().join(''));
}

function isPalindromicNumber(int) {
  return (isPalindrome(String(int)));
}

console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true