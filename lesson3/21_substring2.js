/*
input: three args, a string and two integers
  - the string is the string to pull the substring from
  - the first integer, start, is the starting index for the returned substring
  - the second integer, end, is the ending index for the returned substring (not inclusive)
rules:
  - if both start and end are positive and start < end:
    - return the substring that starts and starts up to the index before end 
  - if start > end, treat start as end and end as start
  - if start === end, return an empty string
  - if end is ommitted, return a substring that starts at starts and completes the given string
  - if start or end is less than 0 or NaN, reassign to 0
  - if start of end is greater than the length of the string, treat as equal to the string length
output: a substring according to the above rules

Algorithm:
- Check to see that end is given (i.e. that it is not undefined)
  - If it is not given (i.e. undefined), reassign to string.length(not -1 because end is exclusive).
- If either start or end is not a number, reassign to 0
- If either start or end is negative, reassign to 0
- If start is greater than end, swap their values
- Initialize a substr results variable as an empty string
- Iterate over the characters in the given string, starting with starting index, up to (not including) ending index
  - break the loop if the current index is equal to or greater than the length of the string
  - Add the character at the current index in string to the substring to return
- Return the substring
*/

function substring(string, start, end) {
  if (end === undefined)  end = string.length;

  if ((typeof(start) !== 'number') || (start < 0)) {
    start = 0;
  }

  if (typeof(end) !== "number" || end < 0) {
    end = 0;
  }

  if (start > end) {
    [start, end] = [end, start];
  }

  let substr = '';

  for (let index = start; index < end; index += 1) {
    if (index >= string.length) break;
    substr += string[index];
  }

  return substr;
}

let string = 'hello world';

console.log(substring(string, 2, 4));    // "ll"
console.log(substring(string, 4, 2));    // "ll"
console.log(substring(string, 0, -1));   // ""
console.log(substring(string, 2));       // "llo world"
console.log(substring(string, 'a'));     // "hello world"
console.log(substring(string, 8, 20));   // "rld"