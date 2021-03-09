const school = [{
    name: 'Turma M1',
    students: [{
        name: 'Gustavo',
        grade: 8.1
    }, {
        name: 'Ana',
        grade: 9.3
    }]
}, {
    name: 'Turma M2',
    students: [{
        name: 'Rebeca',
        grade: 8.9
    }, {
        name: 'Roberto',
        grade: 7.3
    }]
}]

const getStudentsGrade = student => student.grade
const getGroupGrades = turma => turma.students.map(getStudentsGrade)

const grades1 = school.map(getGroupGrades)
console.log(grades1)

console.log([].concat([ 8.1, 9.3 ], [ 8.9, 7.3 ]))

Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const grades2 = school.flatMap(getGroupGrades)
console.log(grades2)