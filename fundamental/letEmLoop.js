for (let i = 0; i < 10; i++) {
    console.log(i)
}
// i is unavailable
//console.log('i =', i)


//example 2

const funcs = []
for (let i = 0; i < 10; i++) {
    funcs.push(function () {
        console.log(i)
    })
}

funcs[2]()
funcs[8]()
