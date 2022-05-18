/**
 * @param {number} temperature
 */
 function isReady(temperature) {
	if (temperature >= 10 && temperature <= 15) {
        return true
    }
    
    return false
}

// Sample usage - do not modify
console.log(isReady(5)) // false
console.log(isReady(13)) // true
console.log(isReady(20)) // false