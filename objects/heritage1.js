//learning about Object.prototype

 const ferrari = {
     model : 'F40',
     maxSpeed : 324
 }


 const volvo = {
    model : 'V40',
    maxSpeed : 200
}

console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)  
console.log(volvo.__proto__ === Object.prototype)  

// prototype of Object.prototype is null

function myObject () {
    
}

console.log(typeof Object, typeof myObject)
console.log(Object.prototype, myObject.prototype)