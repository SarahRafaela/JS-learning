/* 02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).*/


function isTriangle(ladoA, ladoB, ladoC) {

    if (ladoA == ladoB == ladoC) {
        return "é equilátero"
    } else if (ladoA == ladoB && ladoA != ladoC || ladoA != ladoB && ladoA == ladoC || ladoA != ladoB && ladoB == ladoC) {
        return "é isósceles"
    } else if (ladoA != ladoB && ladoA != ladoC & ladoB != ladoC) {
        return "é escaleno"
    }

}

console.log(isTriangle(1, 2, 3))
console.log(isTriangle(1, 1, 3))
console.log(isTriangle(1, 1, 1))