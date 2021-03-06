/**
 * @param {array} numbers
 */
 function sumNumbers(numbers) {
	let result = numbers.reduce(function(total, current){
        return total + current
    }, 0)

    return result
}

// Sample usage - do not modify
console.log(sumNumbers([10, 20, 30])) // 60
console.log(sumNumbers([2, 4, 2, 10])) // 18