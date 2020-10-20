const valores = [1,2,3,4]

console.log(valores[1], valores[3])

valores[4] = 10

console.log(valores)
console.log(valores.lenght)
//tipagem heterogenea mas  é porco
valores.push({id:3}, false, null, 'teste' )
console.log(valores)
// retirando elementos
console.log(valores.pop())
console.log(valores)
delete valores[0]
console.log(valores)
//tipagem
console.log(typeof valores)