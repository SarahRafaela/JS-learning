Array.prototype.filter2 = function(callback){
    const newArray = []
    for (let i=0; i< this.length; i++){
        if (callback(this[i], i, this)){
            newArray.push(this[i])
        }
    }
}


const products = [
    {name: 'Notebook', price : 2499, fragile: true},
    {name: 'Ipad Pro', price : 4199, fragile: true},
    {name: 'Glass Cup', price : 15.60, fragile: true},
    {name: 'Plastic cup', price : 18.99, fragile: false},
]

console.log(products.filter2(function(p){
    return p.price > 2500
}))

console.log(products.filter2(function(p){
    return false
}))

console.log(products.filter2(function(p){
    return true
}))

console.log(products.filter2(function(p){
    return p.fragile === true
}).filter2(function(p){
    return  p.price > 2500
}))