/**
 * @param {boolean} hasPaid
 * @param {number} completedChallenges
 */
 function getUserPlan(hasPaid, completedChallenges) {
	if (hasPaid && completedChallenges >= 10){
        return "Pro"
    } else {
        return "Trial"
    }
}

// Sample usage - do not modify
console.log(getUserPlan(true, 5)) // "Trial"
console.log(getUserPlan(true, 20)) // "Pro"
console.log(getUserPlan(false, 5)) // "Trial"
console.log(getUserPlan(false, 20)) // "Trial"