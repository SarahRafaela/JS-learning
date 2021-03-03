const students = [
    { name: 'João', grade: 7.3,colleger: false },
    { name: 'Maria', grade: 9.2,colleger: true },
    { name: 'Pedro', grade: 9.8,colleger: false },
    { name: 'Ana', grade: 8.7,colleger: true }
]

console.log(students.map(a => a.grade))
const result = students.map(a => a.grade).reduce(function(acumulator, current) {
    console.log(acumulator, current)
    return acumulator + current
}, 0)

console.log(result)