/**
 * @typedef {{startYear: Number, grade: Number}} Course
 * @typedef {{name: String, age: Number, learnEnglish: Course}} Student
 *
 * @param {Student[]} students
 */
 function getSumGrades(students) {
	// let sum = 0;
  //   students.forEach(function(item){
  //       sum += item.learnEnglish.grade;
  //   });

  //   return sum;

  return students.reduce(function(total, current){
    return total + current.learnEnglish.grade;
  }, 0);
}

// Sample usage - do not modify
let students = [
  {
    name: "Sam Doe",
    age: 24,
    learnEnglish: {
      startYear: 2020,
      grade: 18
    }
  },
  {
    name: "Charlie Bron",
    age: 31,
    learnEnglish: {
      startYear: 2021,
      grade: 19
    }
  }
];
console.log(getSumGrades(students)); // 37