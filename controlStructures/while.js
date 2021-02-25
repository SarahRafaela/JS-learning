function getIntegerRandomicBetween(min, max) {
    const value = Math.random() * (max - min) + min
    return Math.floor(value)
}

let option = 0

while (option != -1) {
    option = getIntegerRandomicBetween(-1, 10)
    console.log(`The choosen option was ${option}.`)
}

console.log('See you soon!')
