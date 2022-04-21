// input: a string argument
// output: return true or false
//  - true if the string is a palindrome
//  - false otherwise
// palindromes are the same forwards and backwards
// palindromes are case sensitive
//  - i.e. 'madam' is a palindrome but 'Madam' is not
// all characters count (spaces, punctuation, etc)
//  - i.e. madam i'm adam is not a palindrome

// Initialize an array to hold reversed characters of the string
// Iterate over the given string backwards
//  - push the current character into the array
// Join the array (with empty string as delimiter)
// Compare the given string and the reversed string
// Return the result

function isPalindrome(string) {
  let reversedChars = [];
  let idx = string.length - 1;

  while (idx >= 0) {
    reversedChars.push(string[idx]);
    idx -= 1;
  }

  return (string === reversedChars.join(''));
}

console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true

