let grades = [10, 40, 9, 4, 1,]

let sum = 0

grades.forEach(function(grade){
    if (grade > 10) {
        sum = sum + grade
    }
})

console.log(sum)