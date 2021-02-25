function sum() {
    //arguments
    let sum = 0
    for (i in arguments) {
      // internal array of a function that has all parameters
        sum += arguments[i]
    }
    return sum
}

console.log(sum())
console.log(sum(1))
console.log(sum(3.1, 2, 2))
console.log(sum("test", 'b', 1))