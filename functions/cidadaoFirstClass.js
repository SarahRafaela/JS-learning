// create on literal form
function fun1() {

}

//store into a variable
const fun2 = function () {

}

// astore into array
const array = [function (a, b) {

}, fun1, fun2]



console.log(array[0](2, 3))

//store into a object

const obj = {}
obj.speak = function () { return "Eita" }
console.log(obj.speak())

// pass a function as a parameter

function run(fun) {
    fun()
}
run(function () { console.log("Speaking") })

// fuction as a return

function sum (a,b){
    return function(c){
        console.log(a+b+c)
    }
}

sum(2,3)(4)