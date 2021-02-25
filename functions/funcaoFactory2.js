function createProduct(name, price) {
    return {
        name,
        price,
        discount: 0.1
    }
}

console.log(createProduct('creme', 12.00))
console.log(createProduct('shampoo', 15.00))