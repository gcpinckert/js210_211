const totalPages = 364;
let currentPage = 1; // setting this outside the function allows us to progress through the book
let energy = 100;

function read() {


  while (energy > 0 && currentPage < totalPages) {
    currentPage += 1;
    energy -= 5 + (currentPage * 0.1);
  }

  console.log(`Made it to page ${String(currentPage)}.`);

  // Drink a cup of coffee.
  energy = 100;

  // Continue reading.
  if (currentPage < totalPages) {
    read(); // we reset the current page to 1 each time the function is recursively called
  } else {
    console.log('Done!');
  }
}

read();
