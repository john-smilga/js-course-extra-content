// Fetch built-in
// promised based
// XHR is not wrong, you can complete all our upcoming examples and projects using XHR. Fetch is just alternative approach that has simpler and cleaner syntax. The end result is the same.Still get dynamically, behind the scenes.

const url = './api/people.json';

// there is an options, object will discuss later
// const response = fetch(url);
// console.log(response);

// fetch(url)
//   .then((resp) => {
//     // response object
//     // useful properties and methods
//     // console.log(resp);
//     // convert response into JSON data
//     // returns a promise
//     return resp.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => console.log(err));

fetch(url)
  .then((resp) => resp.json())
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err));

const promise = new Promise((resolve, reject) => {
  let value = false;
  if (value) {
    resolve([1, 2, 4]);
  } else {
    reject(`there was a error, value is false`);
  }
});

promise
  .then((taco) => {
    console.log(taco);
  })
  .catch((err) => {
    console.log(err);
  });
