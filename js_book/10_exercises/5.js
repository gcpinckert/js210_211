// What does the function do?
function doSomething(string) {
  return string
    .split(" ")
    .reverse()
    .map((value) => value.length);
}

/*
- takes a string value as argument
- splits the string into an array of words (wherever there is a space)
- reverses the order of the words in the array
- transforms the array such that each element will be an integer representing
  the length of the word
- returns the resulting (new) array of integers
*/