const students = [
    { name: 'João', grade: 7.9 },
    { name: 'Maria', grade: 9.2 }
]

// Imperative
let total1 = 0
for (let i = 0; i < students.length; i++) {
    total1 += students[i].grade
}
console.log(total1 / students.length)

// Declarative
const getGrade = student => student.grade
const sum = (total, current) => total + current

const total2 = students.map(getGrade).reduce(sum)
console.log(total2 / students.length)