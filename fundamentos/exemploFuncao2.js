// armazenada em variavel
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

// armazenando uma funcao arrow em uma variavel

const soma = (a, b) => {
    return a + b
}

// retonro implicito

const subtracao = (a, b) => a - b;

console.log(subtracao(2, 3))