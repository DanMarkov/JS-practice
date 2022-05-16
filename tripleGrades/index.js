/**
 * @param {array} grades
 */
 function tripleGrades(grades) {
    
	let result = grades.map(function(grade){
       return grade * 3
    })

    return result
}

// Sample usage - do not modify
console.log(tripleGrades([10, 20])) // [30, 60]
console.log(tripleGrades([5, 12, 20, 10])) // [15, 36, 60, 30]