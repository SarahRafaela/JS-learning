const grades = [6.7, 7.4, 9.8, 8.1, 7.7]

for (let i in grades) {
    console.log(i, grades[i])
}

const Person = {
    name: 'Ana',
    surname: 'Silva',
    age: 29,
    weight: 64
}

for (let atribute in person) {
    console.log(`${atribute} = ${Person[atribute]}`)
}
