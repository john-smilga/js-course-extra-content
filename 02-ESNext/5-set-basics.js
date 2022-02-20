// Set object - stores a collection of unique values of any type

// new Set()
// add(value)
// delete(value)
// clear()
// has(value)

// iterators
// entries(),keys(),values(), forEach()

const unique = new Set();

const random = 'third';

unique.add('first');
unique.add('second');
unique.add(random);
unique.add('first');
unique.add(4);

// const result = unique.delete('third');
// console.log(result);

const result = unique.delete('five');
// console.log(result);

const isValue = unique.has(4);
console.log(isValue);

console.log(unique);
