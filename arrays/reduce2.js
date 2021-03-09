const students = [
    { name: 'João', grade: 7.3, colleger: false },
    { name: 'Maria', grade: 9.2, colleger: true },
    { name: 'Pedro', grade: 9.8, colleger: false },
    { name: 'Ana', grade: 8.7, colleger: true }
]

// Desafio 1: all os students are colleger?
const allCollegers = (result, colleger) => result && colleger
console.log(students.map(a => a.colleger).reduce(allCollegers))

// Desafio 2: any student is a colleger?
const anyColleger = (result, colleger) => result || colleger
console.log(students.map(a => a.colleger).reduce(anyColleger))