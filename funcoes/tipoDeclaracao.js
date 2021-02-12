// a primeira eu posso chamar antes
console.log(soma(3, 4))
// function declaration
function soma(x, y) {
    return x + y
}
// aqui eu tenho que chamar depois pq ela é anonima
// functions expression
const sub = function (x, y) {
    return x - y
}
console.log(sub(3, 4))

// named function expression
const mult = function mult(x, y) {
    return x * y
}
console.log(mult(3, 4))