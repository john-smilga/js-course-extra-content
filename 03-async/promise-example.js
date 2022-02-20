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
