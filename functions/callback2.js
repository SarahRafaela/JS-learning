const grades = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

//without callback

const lowGrades = []
for (let i in grades) {
    if (grades[i] < 7) {
        lowGrades.push(grades)
    }
}

console.log(lowGrades)

//with callback
lowGrades2 = grades.filter(function (grade) {
    return grade < 7
})

console.log(lowGrades2)

const lowGrades3 = grades.filter(grade => grade < 7)
console.log(lowGrades3)

const gradesUnder7 = grade => grade < 7
const lowGrades4 = grades.filter(gradesUnder7)
console.log(lowGrades4)
