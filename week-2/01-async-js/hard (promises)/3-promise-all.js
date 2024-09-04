/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve();
    }, t * 1000); // Convert seconds to milliseconds
  })
}

function wait2(t) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve();
    }, t * 1000); // Convert seconds to milliseconds
  })
}

function wait3(t) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve();
    }, t * 1000); // Convert seconds to milliseconds
  })
}

function calculateTime(t1, t2, t3) {
  return new Promise(function (resolve) {
    const startTime = Date.now(); // Record the start time

    Promise.all([wait1(t1), wait2(t2), wait3(t3)]).then(function () {
      const endTime = Date.now(); // Record the end time
      const totalTime = endTime - startTime; // Calculate the total time taken
      resolve(totalTime); // resolve the promise with the total time
    })
  })
}

module.exports = calculateTime;
