// 03) Create a function that takes two parameters, base and exponent, and returns the raised base to the exponent.

const pow = function (x, y) {
    return x ** y
}

const printResults = function (a, b, operation = pow) {
    console.log(operation(a, b))
}
printResults(3, 4)