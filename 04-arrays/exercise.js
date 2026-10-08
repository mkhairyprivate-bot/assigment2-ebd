// 04-arrays — your work goes in this file.
//
// The lesson is in example.js:  node 04-arrays/example.js
// Check your work with:         npm test 04

export function productNames(products) {
  return products.map((product) => product.name);
}

export function cheaperThan(products, maxPrice) {
  return products.filter((product) => product.price < maxPrice);
}

export function findById(products, id) {
  return products.find((product) => product.id === id);
}

export function totalPrice(products) {
  return products.reduce((total, product) => total + product.price, 0);
}

export function inStockNames(products) {
  return products
    .filter((product) => product.inStock)
    .map((product) => product.name);
}