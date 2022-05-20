/**
 * @param {Object} student
 * @param {string} student.name
 * @param {number} student.age
 * @param {number[]} student.grades
 */
 function getSumOfGrades(student) {
	return student.grades.reduce(function(total, current){
        return total + current;
    }, 0);
}

// Sample usage - do not modify
let student = {
  name: "Sam Doe",
  age: 24,
  grades: [13, 15, 15, 14, 18]
};

console.log(getSumOfGrades(student)); // 75