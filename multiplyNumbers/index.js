/**
 * @param {array} numbers
 */
 function multiplyNumbers(numbers) {
	let result = numbers.reduce(function(total, reduce){
        return total * reduce
    }, 1) 
    
    return result
}

// Sample usage - do not modify
console.log(multiplyNumbers([10, 20, 30])) // 6000
console.log(multiplyNumbers([2, 4, 2, 10])) // 160