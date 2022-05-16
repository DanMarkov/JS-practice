/**
 * @param {array} items
 */
 function addBanana(items) {
	items.push("Banana")
    return items
}

// Sample usage - do not modify
console.log(addBanana(["Milk"])) // ["Milk", "Banana"]
console.log(addBanana(["Tomato", "Cheese"])) // ["Tomato", "Cheese", "Banana"]
console.log(addBanana([])) // ["Banana"]