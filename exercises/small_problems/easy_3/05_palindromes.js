// input: string argument
// output: boolean
//  - true if string is a palindrome
//  - false otherwise
// palindromes are case insensitive
// all non-alphanumeric characters are ignored
// (both letters and digits count, however)

// initialize an array to hold alphanumeric lowercase characters
// initialize a copy of that array and reverse it
// join both arrays and compare them
// are they equal? return the result

function isRealPalindrome(string) {
  let forwardsChars = string
    .toLowerCase()
    .split('')
    .filter((char) => /[A-Z0-9]/i.test(char))
    .join('');
  let backwardsChars = forwardsChars.split('').reverse().join('');

  return (forwardsChars === backwardsChars);
}

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false