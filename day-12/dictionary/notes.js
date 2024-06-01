// API - application programming interface

// PROMISE in javascript
// promise is an object that may produce a single value some time in the future
// variable but for future value
//
// 3 states of promise
// 1. Pending: initial state, neither fulfilled nor rejected
// 2. Fulfilled / Resolved: meaning that the operation completed successfully
// 3. Rejected: meaning that the operation failed

// handling promise
// 1. then() method - to handle the resolved promise
// 2. catch() method - to handle the rejected promise

const testValue = "Hello World";
const testPromise = new Promise((resolve, reject) => {
  if (testValue === "Hello") {
    //   resolve will trigger the then() method and value will be passed to the then() method
    resolve("Success");
  } else {
    //   reject will trigger the catch() method and error will be passed to the catch() method
    reject("Failed");
  }
});

// IMPORTANT: mostly used in API calls
testPromise
  .then(function (value) {
    console.log(value);
  })
  .catch(function (error) {
    console.log(error);
  });
