function foo() {
  console.log(bar);
}

foo();

/*
/home/gcpinckert/launch_school/js210_211/js_book/error.js:2
  console.log(bar);
              ^

ReferenceError: bar is not defined
    at foo (/home/gcpinckert/launch_school/js210_211/js_book/error.js:2:15)
    at Object.<anonymous> (/home/gcpinckert/launch_school/js210_211/js_book/error.js:5:1)
    at Module._compile (node:internal/modules/cjs/loader:1099:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1153:10)
    at Module.load (node:internal/modules/cjs/loader:975:32)
    at Function.Module._load (node:internal/modules/cjs/loader:822:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:77:12)
    at node:internal/main/run_main_module:17:47

Node.js v17.7.1
*/