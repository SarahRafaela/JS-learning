/*Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.*/


const modulo = function (x, y) {
    return x % y
}

const printResults = function (a, b, operation = modulo) {
    console.log(operation(a, b))
}
printResults(4, 4)