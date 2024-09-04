/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
   
    // Check if the array is empty
    if (numbers.length === 0) {
        return undefined; // or throw an error, depending on the requirements
    }

    // Initialize the largest number with the first element
    let largest = numbers[0];

    // Iterate through the array starting from the second element
    for (let i = 0; i < numbers.length; i++) {
        // Update the largest number if the current element is greater
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }

    return largest;
}

module.exports = findLargestElement;