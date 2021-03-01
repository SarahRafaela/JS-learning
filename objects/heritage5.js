console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function (){
    return this.split('').reverse().join()
}

console.log("Cod3r School".reverse())

Array.prototype.first = function (){
    return this[0]
}

console.log([1,2,3,4,5].first())
// dont do this, take a default method and overwrite this 
//String.prototype.toString  = function () {    return "Its not working!"}

console.log("Cod3r School".reverse())


