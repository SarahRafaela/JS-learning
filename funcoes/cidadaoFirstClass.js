// criar de forma literal
function fun1() {

}

//armazenar em variavel
const fun2 = function () {

}

// armazenar em um array
const array = [function (a, b) {

}, fun1, fun2]



console.log(array[0](2, 3))

//armazenar num obj

const obj = {}
obj.falar = function () { return "Eita" }
console.log(obj.falar())

// passar função como paramteo

function run(fun) {
    fun()
}
run(function () { console.log("Falando") })

// retorna uma função

function soma (a,b){
    return function(c){
        console.log(a+b+c)
    }
}

soma(2,3)(4)