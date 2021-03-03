const almostArray = { 0: 'Rafael', 1: 'Romero', 3: 'Rennan' }

console.log(almostArray)
Object.defineProperty(almostArray, 'toString', {
    value: function () { return Object.values(this) },
    enumerable: false
})

console.log(almostArray[0])

const myArray = ['Rafael', 'Romero', 'Rennan']
console.log(almostArray.toString(),myArray)
