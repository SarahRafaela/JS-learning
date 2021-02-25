function getPrice(taxes = 0, currency = "R$") {
    return `${currency} ${this.price * (1- this.discount )* (1 + taxes)}`

 }

 const Product = {
      name: 'Notebook',
      discount: 0.15, 
      price: 4589,
      getPrice
 }

 globalThis.price = 20
 globalThis.discount = 0.1
 console.log(getPrice())
console.log(Product.getPrice())

const Car = {
    discount: 0.20, 
    price: 49990,
}
 
console.log(getPrice.call(Car))
console.log(getPrice.apply(Car))
 
console.log(getPrice.call(Car, 0.17, 'U$'))
console.log(getPrice.apply(Car, [0.17, 'U$']))