/* 
setTimeout - runs function once after specific time

- pass function reference 
- duration in ms (1000 ms = 1 second)
- default 0, will cover more extensively in async/await section
- returns unique identifier
- clearTimeout to cancel
*/

function sayHello() {
  console.log('hello john');
}

// setTimeout(sayHello, 1000);

// will not work
// setTimeout(sayHello(), 3000);

// alternative approach, especially with ES6 arrow functions
// setTimeout(function () {
//   console.log(`hello john`);
// }, 3000);

// pass arguments

function showScore(name, score) {
  console.log(`hello ${name}, your score is ${score}`);
}

// setTimeout(showScore, 3000, 'john', 34);

const firstID = setTimeout(showScore, 3000, 'john', 34);
const secondID = setTimeout(showScore, 3000, 'peter', 88);
console.log(firstID);
console.log(secondID);

clearTimeout(firstID);
