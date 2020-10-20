for (var i = 0; i < 10; i++) {
    console.log(i)
}

console.log('i =', i)


//exemplo 2

var funcs = []
for (var i = 0; i < 10; i++) {
    funcs.push(function () {
        console.log(i)
    })
}
// imprime pra todos o valor de dez que  é o valor final
funcs[2]()
funcs[8]()

