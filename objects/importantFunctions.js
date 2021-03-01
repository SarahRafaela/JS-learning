const Person = {
    name: 'Rebeca',
    age: 2,
    weight: 50
}

console.log(Object.keys(Person))

console.log(Object.values(Person))

console.log(Object.entries(Person))

Object.entries(Person).forEach(([key, value]) => {
    console.log(`${key}: ${value}`)
})

Object.defineProperty(Person, 'bornDate',{
    enumerable: true, 
    //like a freeze on variable
    writable: false,
    value: '01/01/2019'
})

Person.bornDate = '01/01/2021'
console.log(Person.bornDate)
console.log(Object.keys(Person))

// concat of all attr passed in parameter ... Object.assign (ECMAScript 2015)

const target = {a : 1}
const obj1 = {b: 2}
//overwrite
const obj2 = {c: 3, a :4}
const obj = Object.assign(target,obj1, obj2 )



Object.freeze(obj)
obj.c = 1234
console.log(obj)