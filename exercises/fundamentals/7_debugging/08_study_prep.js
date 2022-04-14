// The shopping cart is a list of items, where each item
// is an object { name: <string>, amount: <number> }.
let shoppingCart = [];

// Currently available products with prices.
const prices = {
  notebook: 9.99,
  pencil: 1.7,
  coffee: 3.0,
  smoothie: 2.1,
};

function price({ name }) {
  return prices[name];
}

// Adding an item to the shopping cart.
// The amount is optional and defaults to 1.
// If the item is already in the cart, its amount is updated.
function updateCart(name, amount) {
  // amount = amount || 1; we can't rely on the falsyness of amount to assign it
  // 0 is falsy, therefore if we try to update our car and change a items' quant
  // back to 0, it will evaluate to false and we will be charged for 1

  amount = (amount === undefined) ? 1 : amount;

  let alreadyInCart = false;

  for (let idx = 0; idx < shoppingCart.length; idx += 1) {
    let item = shoppingCart[idx];

    if (item.name === name) {
      item.amount = amount;
      alreadyInCart = true;
      break;
    }
  }

  if (!alreadyInCart) {
    shoppingCart.push({ name, amount });
  }
}

// Calculating the price for the whole shopping cart.
function total() {
  let total = 0;

  for (let idx = 0; idx < shoppingCart.length; idx += 1) {
    let item = shoppingCart[idx];

    total += item.amount * price(item);
  }

  return total.toFixed(2);
}

function pay() {
  // omitted

  console.log(`You have been charged $${total()}.`);
}

function checkout() {
  pay();
  shoppingCart = [];
}

// Example purchase.

updateCart('notebook');
updateCart('pencil', 2);
updateCart('coffee', 1);
// "Oh, wait, I do have pencils..."
updateCart('pencil', 0); // when we change the amount to 0 it defaults back to 1

checkout();
// You have been charged $14.69.
// We are charged for an extra pencil, see line 21