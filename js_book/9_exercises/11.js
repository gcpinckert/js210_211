// Replace 6 with 606 in the given object

let obj = {
  foo: { a: "hello", b: "world" },
  bar: ["example", "mem", null, { xyz: 6 }, 88],
  qux: [4, 8, 12],
};

obj['bar'][3]['xyz'] = 606;

console.log(obj);