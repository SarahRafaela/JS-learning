/** Destructuring tira da estrutura alguma coisa
 * */

const pessoa = {
    nome: 'sarah',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome: n, idade: i } = pessoa
const { endereco: { logradouro, numero} }= pessoa

console.log(n, i)
console.log(logradouro)