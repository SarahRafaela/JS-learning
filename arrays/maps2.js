const shoppingCart = [
    '{"nome": "Eraser", "price": 3.94}',
    '{"nome" :"Notebook", "price": 14.94}',
    '{"nome" :"Pencils Kit", "price": 41.94}',
    '{"nome" :"Pen", "price": 7.50}'
]

// return a array with only prices
const toObject = json => JSON.parse(json)
const onlyPrice = product => product.price
const result = shoppingCart.map(toObject).map(onlyPrice)
console.log(result)