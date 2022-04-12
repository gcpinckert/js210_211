# Style Guide Practice Problems

Fix the code that violates the Airbnb JS style guide

```javascript
let title = "The Three-Body Problem";
```

violation: use single quotes instead of double quotes

solution:

```javascript
let title = 'The Three-Body Problem';
```

___

```javascript
let title = 'The Three-Body Problem',
    author = 'Cixin Liu',
    page_count = 400;
```

violation: use one `const` or `let` declaration per variable or assignment. This makes it easier to add new declarations and assignments, and means we don't have to worry about keeping track of ending lines with `;` or `,`. We just consistently use `;`.

We also have a variable named with snake_case, when we want to use camelCase instead.

solution:

```javascript
let title = 'The Three-Body Problem';
let author = 'Cixin Liu';
let pageCount = 400;
```

___

```javascript
let completed = lastPageRead == 400;
```

violation: when mixing operators, in this case assignment and equality, use parenthesis to show the order of precedence that is intended.

Also, always use strict equality (`===`) to prevent implicit type coercion.

solution:

```javascript
let completed = (lastPageRead === 400);
```

___

```javascript
if (finishedBook())
  console.log('You have finished reading this book');
```

violation: always use braces for multiline blocks.

solution:

```javascript
if (finishedBook()) {
  console.log('You have finished reading this book');
}
```

___

```javascript
function read(pages) {
      console.log('You started reading.');
      for (let page=0; page<pages; page += 1) {
              let message = 'You read page '+page;
              console.log(message);
      }
}

read(400);
```

violation: there should be spaces between the operator and the operands. We are also not indenting properly (use two spaces). We are relying on implicit rather than explicit coercion. Instead of using function declarations, we should use named function expressions.

solution:

```javascript
let read = function read(pages) {
  console.log('You started reading.');
  for (let page = 0; page < pages; page += 1) {
    let message = 'You read page ' + String(page);
    console.log(message);
  }
};

read(400);
```
