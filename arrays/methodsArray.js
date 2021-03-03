const pilots = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilots.pop() // massa broken the car!
console.log(pilots)

pilots.push('Verstappen')
console.log(pilots)

pilots.shift() // remove first!
console.log(pilots)

pilots.unshift('Hamilton')
console.log(pilots)

// splice can add or remove elements

// add
pilots.splice(2, 0, 'Bottas', 'Massa')
console.log(pilots)

// remove
pilots.splice(3, 1) // massa broken :(
console.log(pilots)

const anypilots1 = pilots.slice(2) // new array
console.log(anypilots1)

const anypilots2 = pilots.slice(1, 4)
console.log(anypilots2)