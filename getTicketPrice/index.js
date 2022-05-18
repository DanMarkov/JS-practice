/**
 * @param {number} age
 */
 function getTicketPrice(age) {
	if (age < 18 || age > 60) {
        return 1000
    } else {
        return 2000
    }
}

// Sample usage - do not modify
console.log(getTicketPrice(15)) // 1000
console.log(getTicketPrice(30)) // 2000
console.log(getTicketPrice(45)) // 2000
console.log(getTicketPrice(75)) // 1000