const promise1 = new Promise((resolve) => {
  // We call resolve(...) when what we were doing asynchronously was successful, and reject(...) when it failed.
  // In this example, we use setTimeout(...) to simulate async code.
  // In reality, you will probably be using something like XHR or an HTML API.
  setTimeout(() => {
    resolve("Success #1!"); // Yay! Everything went well!
  }, 250);
});

const promise2 = new Promise((resolve, reject) => {
  // We call resolve(...) when what we were doing asynchronously was successful, and reject(...) when it failed.
  // In this example, we use setTimeout(...) to simulate async code.
  // In reality, you will probably be using something like XHR or an HTML API.
  setTimeout(() => {
    resolve("Success #2!"); // Yay! Everything went well!
  }, 250);
  reject('Fail #2!');
});

const body = document.body;

promise1.then((successMessage) => {
  // successMessage is whatever we passed in the resolve(...) function above.
  // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
  body.innerHTML += `Yay! ${successMessage}\n<br />\n`;
}).catch((errorMessage) => {
  body.innerHTML += `Oops! ${errorMessage}\n<br />\n`;
});

promise2.then((successMessage) => {
  // successMessage is whatever we passed in the resolve(...) function above.
  // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
  body.innerHTML += `Yay! ${successMessage}\n<br />\n`;
}).catch((errorMessage) => {
  body.innerHTML += `Oops! ${errorMessage}\n<br />\n`;
});