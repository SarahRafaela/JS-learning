// the first one i can call before
console.log (sum (3, 4))
// function declaration
function sum (x, y) {
    return x + y
}
// here I have to call later because she is anonymous
// functions expression
const sub = function (x, y) {
    return x - y
}
console.log (sub (3, 4))

// named function expression
const mult = function mult (x, y) {
    return x * y
}
console.log (mult (3, 4))