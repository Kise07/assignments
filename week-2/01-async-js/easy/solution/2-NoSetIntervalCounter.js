let counter = 0;

function incrementCounter() {
  counter++;
  console.log(counter);
  // Recursive setTimeout()
  setTimeout(incrementCounter, 1000);
}

incrementCounter();
