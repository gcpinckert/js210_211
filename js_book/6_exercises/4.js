function barCodeScanner(serial) {
  switch (serial) {
    case '123':
      console.log('Product1');
    case '113':
      console.log('Product2');
    case '142':
      console.log('Product3');
    default:
      console.log('Product not found!');
  }
}

barCodeScanner('113');
// => Product 2
// => Product 3
// => Product not found!

/* The switch statement above has no break statements so we "fall through" each case clause and every option is output */

// With breaks:

function barCodeScanner2(serial) {
  switch (serial) {
    case '123':
      console.log('Product1');
      break;
    case '113':
      console.log('Product2');
      break;
    case '142':
      console.log('Product3');
      break;
    default:
      console.log('Product not found!');
      break;
  }
}

barCodeScanner2('113'); // => Product 2