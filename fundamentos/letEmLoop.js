for (let i = 0; i < 10; i++) {
    console.log(i)
}
// i nao esta disponivel
//console.log('i =', i)


//exemplo 2

const funcs = []
for (let i = 0; i < 10; i++) {
    funcs.push(function () {
        console.log(i)
    })
}
// imprime pra todos o valor de dez que  é o valor final
funcs[2]()
funcs[8]()
