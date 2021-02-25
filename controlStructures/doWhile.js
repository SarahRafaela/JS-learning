function getIntegerRandomicBetween(min, max) {
    const value = Math.random() * (max - min) + min
    return Math.floor(value)
}

let option = -1

do {
    option = getIntegerRandomicBetween(-1, 10)
    console.log(`The choosen option is ${option}.`)
} while (option != -1)

console.log('See you soon!') 
