/*
input: a string, short line of text
output: that text represented in the given banner

Examples
logInBox('To boldly go where no one has gone before.');
+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+

logInBox('');
+--+
|  |
|  |
|  |
+--+

Algorithm:
- Build the top and bottom line:
  - Initialize a line variable to `+-`
  - Iterate from 0 up to string.length
    - Add a `-` to the line
  - Add `-+' to the line
  - Return the line
- Build the padding line:
  - Initialize a line variable to `| `
  - Iterate from 0 up to string.length
    - Add a ' ' to the line
  - Add a ` |` to the line
  - Return the line
- Build the text line:
  - `| ` + string _ ` |` (save this to a variable)
- Log the following to the console:
  - top bottom line
  - padding line
  - text line
  - padding line
  - top bottom line
*/

function topBottomLine(string) {
  let line = '+-';

  for (let index = 0; index < string.length; index += 1) {
    line += '-';
  }

  line += '-+';
  return line;
}

function paddingLine(string) {
    let line = '| ';

    for (let index = 0; index < string.length; index += 1) {
      line += ' ';
    }

    line += ' |';
    return line;
}

function logInBox(string) {
  let border = topBottomLine(string);
  let padding = paddingLine(string);
  let content = '| ' + string + ' |'

  console.log(border);
  console.log(padding);
  console.log(content);
  console.log(padding);
  console.log(border);
}

logInBox('To boldly go where no one has gone before.');
logInBox('');

