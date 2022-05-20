/**
 * @param {Object} student
 * @param {string} student.name
 * @param {number} student.age
 * @param {number[]} student.grades
 */
 function getLastGrade(student) {
    console.log(student.grades[student.grades.length - 1]);
    // return student.grades;
    return student.grades[student.grades.length - 1];
}

// Sample usage - do not modify
let student = {
  name: "Sam Doe",
  age: 24,
  grades: [13, 15, 15, 14, 18]
};

getLastGrade(student); // 18