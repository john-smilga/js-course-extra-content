// Array includes() - checks if a string contains another string.
// Array includes - checks if the item is an array

const groceries = ['milk', 'bread', 'meat'];

let randomItem = 'lemon';
randomItem = 'milk';

const isIncluded = groceries.includes(randomItem);

// console.log(isIncluded);

if (groceries.includes(randomItem, 1)) {
  console.log(`Yeah! it's on the list`);
}
