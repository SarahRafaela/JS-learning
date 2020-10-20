// funcao sem retorno

function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2 + 3)
//undefined
imprimirSoma(2)
//so soma os primeiros
imprimirSoma(2, 3, 4, 5)

//funcao com retorno
function soma(a, b = 0) {
    return a + b
}
console.log(soma(2))
console.log(soma(4, 6))