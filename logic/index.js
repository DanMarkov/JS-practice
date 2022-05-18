function getRaisedGrades(grades) {
    return grades.map(function(grade) {
      return grade + 2;
    });
  }

console.log(getRaisedGrades([25]));