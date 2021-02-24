//03) Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.

const potencia = function (x, y) {
    return x ** y
}

const imprimirResultado = function (a, b, operacao = potencia) {
    console.log(operacao(a, b))
}
imprimirResultado(3, 4)