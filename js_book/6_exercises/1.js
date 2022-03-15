false || (true && false); //false
true || (1 + 2); // true
(1 + 2) || true; // 3 - returns last truthy value evaluated in expression
true && (1 + 2); // 3 - returns last truthy value evaluated in expression
false && (1 + 2); // false
(1 + 2) && true;  // true
(32 * 4) >= 129; // false
false !== !true; // false
true === 4; // false
false === (847 === '847'); // true
false === (847 == '847'); // false
(!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false; // true

// Checking:

console.log(false || (true && false));
console.log(true || (1 + 2));
console.log((1 + 2) || true);
console.log(true && (1 + 2));
console.log(false && (1 + 2));
console.log((1 + 2) && true);
console.log((32 * 4) >= 129);
console.log(false !== !true);
console.log(true === 4);
console.log(false === (847 === '847'));
console.log(false === (847 == '847'));
console.log((!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false);