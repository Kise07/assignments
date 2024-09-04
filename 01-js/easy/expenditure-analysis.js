/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  // initialize an empty object to store the total spend by category
  const totalSpentByCategory = {}

  // Iterate over the list of transactions, updating the total spent for each category in the object
  transactions.forEach(function (transactions) {
    const category = transactions.category;
    const price = transactions.price;

    // Update the total spent for the category
    if (totalSpentByCategory[category]) {
      totalSpentByCategory[category] += price;
    } else {
      totalSpentByCategory[category] = price;
    }
  })

  // Convert the totalSpentByCategory Object to an Array of Object
  const result = Object.keys(totalSpentByCategory).map(function (category) {
    return {
      category: category,
      totalSpent: totalSpentByCategory[category]
    }
  })
  
  return result;
}

module.exports = calculateTotalSpentByCategory;
