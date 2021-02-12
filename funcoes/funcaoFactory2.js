function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('creme', 12.00))
console.log(criarProduto('shampoo', 15.00))