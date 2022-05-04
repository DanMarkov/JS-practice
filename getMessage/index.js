// /**
//  *@param {array} items
//  */
 function getMessage(items) {
	return `You have ${items.length} items`
}

// Sample usage - do not modify
console.log(getMessage([-5, 12, 15])) // "You have 3 items"
console.log(getMessage([13, 10])) // "You have 2 items"
console.log(getMessage([])) // "You have 0 items"