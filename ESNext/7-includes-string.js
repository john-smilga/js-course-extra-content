// String includes() - checks if a string contains another string.

const products = [
  { title: 'Modern Poster' },
  { title: 'Bar Stool' },
  { title: 'Armchair' },
  { title: 'Leather Chair' },
];

const text = 'ad';

const filteredProducts = products.filter((item) =>
  item.title.toLowerCase().includes(text)
);

console.log(filteredProducts);

const firstName = 'john';

// console.log(firstName.includes('jo'));

const product = {
  title: 'Leather Chair',
};

// console.log(product.title.includes('Lea'));

// console.log(product.title.includes('t', 3));
