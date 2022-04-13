function makeDoubler(caller) {
  const doubler = function(num) {
    console.log(`This function was called by ${caller}`);
    return num + num;
  };

  return doubler;
}

const doubler = makeDoubler('Ginni');
console.log(doubler(5));