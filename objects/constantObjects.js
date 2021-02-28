const person = { name : 'John' }
person.name = 'Peter'
console.log(person)

//error on memory address : Assignment to constant variable.
//person = {name: 'Ana'}
//console.log(person)

Object.freeze(person)
person.name ='Mary'
console.log(person)