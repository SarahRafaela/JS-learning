// with var
// can access var before initialization but undefined
console.log('a = ', a)
var a = 2
console.log('a =', a)

// same as
var a
console.log('a = ', a)
a = 2
console.log('a =', a)

// this occurr inside of a function to 


// Cannot access 'b' before initialization
console.log('b = ', b)
let b = 2
console.log('b = ', b)