function productOfSums(array1, array2) {
  let result = total(array1) * total(array2); // NaN
  return result; // NaN
}

function total(numbers) {
  let sum; // this is initialized to undefined instead of 0

  for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i]; // this returns NaN
  }

  sum; // NaN
}

