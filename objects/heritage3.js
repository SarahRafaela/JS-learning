const father = { name : 'Carlisle' , hairColor : 'blonde' }

const daughter1 = Object.create(father)
daughter1.name = 'Rosalie'
console.log(daughter1.hairColor)


const daughter2 = Object.create(father, {
    name : { value: 'Alice' , writable : false, enumerable: true}
})

console.log(daughter2.name)
daughter2.name = 'Tanya'
daughter2.hairColor = 'black'
console.log(daughter2.name, ' has a ', daughter2.hairColor, " hair")

console.log(Object.keys(daughter1))
console.log(Object.keys(daughter2))

for (let key in daughter2) {
     daughter2.hasOwnProperty(key) ?
     console.log(key) : console.log(` Por herança: ${key}`)
}