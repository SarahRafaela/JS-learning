function soma() {
    //arguments
    let soma = 0
    for (i in arguments) {
        //array interno de uma função que possui todos os parametos
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(3.1, 2, 2))
console.log(soma("teste", 'b', 1))