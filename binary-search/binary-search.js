'use strict';

// Complete this algo

// [2,4,6,8,10], 7
const binarySearch = (array, target) => {
	debugger;
	if (!Array.isArray(array)) {
		throw Error
	}

	let midpoint = Math.floor(array.length/2) // grab the midpoint of the array
	let midpointValue = array[midpoint]

	if (target===midpointValue) {
		return true
	}

	if ((array.length===1 && array[0]!== target) || (array.length===0)) {
		return false
	}

	if (target < midpointValue) { // if the target is less than the value at midpoint
		let newArray = array.slice(0, midpoint)
		return binarySearch(newArray, target)
	}

	if (target > array[midpoint]) {
		let newArray = array.slice(midpoint+1)
		return binarySearch(newArray, target)
	}

};
const test3 = [-0.5, 0.03, 2.6, 3, 3.5, 3.777777, 5];
binarySearch(test3, 5)

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch
