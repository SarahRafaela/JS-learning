// restrictions to flexibility

// Object.preventExtensions

const product = Object.preventExtensions({
    name: "Any", price: 1.39, tag: "promotion"
})
console.log("Has Extension:", Object.isExtensible(product))


product.name = "Eraser"
product.description = " white school eraser"
delete product.tag
console.log(product)

//Object.seal
const person = { name: "Harry", age: 17 }
Object.seal(person)
console.log("is Seal:", Object.isSealed(person))

person.surname = "Potter" 
delete person.name
person.age= 40
console.log(person)

//Object.freeze = seal + constant

