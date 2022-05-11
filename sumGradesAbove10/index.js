/**
 * @param {array} grades
 */
 function sumGradesAbove10(grades) {
	let sum = 0
    grades.forEach(function awesomeTool(grade){
        if (grade >= 10) {
            sum = sum + grade
        }
    })
    return sum
}

// Sample usage - do not modify
console.log(sumGradesAbove10([10, 5, 18, 3, 14, 19])) // 61
console.log(sumGradesAbove10([18, 4, 9, 20, 8, 45])) // 38