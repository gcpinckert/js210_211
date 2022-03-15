function changeStringToCaps (text) {
  if (text.length > 10) {
    return text.toUpperCase();
  } else {
    return text;
  }
}

// Testing
console.log(changeStringToCaps('hello world'));
console.log(changeStringToCaps('goodbye'));