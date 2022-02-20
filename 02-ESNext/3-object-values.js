// Three methods to convert objects into arrays
// Object.keys() - converts property names into array
// Object.values() - converts property values into array
// Object.entries() - converts both

const person = {
  name: 'john',
  age: 25,
  status: 'student',
};

const values = Object.values(person);
console.log(values);
