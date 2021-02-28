let isActive = false

isActive = true

isAtivo = 1 
console.log(!isActive)
// all numbers are true except 0
isAtivo = 0
console.log(!!isActive)
// true
console.log(!!3)
console.log(!!-1)
console.log(!![])
console.log(!!(isActive = true))

//false

console.log(!!'')
console.log(!!0)
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isActive=false))


//various types can be resolved to true or false
let name =  ''
console.log (name || 'Unknow')
