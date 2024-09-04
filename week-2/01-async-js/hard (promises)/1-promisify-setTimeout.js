/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

// Return a new promise
function wait(n) {
  return new Promise(function (resolve) {
    // use setTimeout to wait for n seconds
    setTimeout(function () {
      // Resolve the promise after n seconds
      resolve();
    }, n * 1000); // n is in seconds, convert it into milliseconds
  })
}

wait(3).then(function () {
  console.log("3 seconds has passed");
})

module.exports = wait;
