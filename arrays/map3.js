Array.prototype.map2 = function(callback){
    const newArray = []
    for(let i =0; i <this.length; i++){
        newArray.push(callback(this[i],i,this))
    }
    return newArray
}

const shoppingCart = [
    '{"nome": "Eraser", "price": 3.94}',
    '{"nome" :"Notebook", "price": 14.94}',
    '{"nome" :"Pencils Kit", "price": 41.94}',
    '{"nome" :"Pen", "price": 7.50}'
]

// return a array with only prices
const toObject = json => JSON.parse(json)
const onlyPrice = product => product.price
const result = shoppingCart.map2(toObject).map2(onlyPrice)
console.log(result)