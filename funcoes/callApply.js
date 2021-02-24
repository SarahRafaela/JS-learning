function getPreco(imposto = 0, moeda = "R$") {
    return `${moeda} ${this.preco * (1- this.desc )* (1 + imposto)}`

 }

 const produto = {
      nome: 'Notebook',
      desc: 0.15, 
      preco: 4589,
      getPreco
 }

 globalThis.preco = 20
 globalThis.desc = 0.1
 console.log(getPreco())
console.log(produto.getPreco())

const carro = {
    desc: 0.20, 
    preco: 49990,
}
 
console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))
 
console.log(getPreco.call(carro, 0.17, 'U$'))
console.log(getPreco.apply(carro, [0.17, 'U$']))