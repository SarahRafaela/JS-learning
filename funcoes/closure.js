// Closure é o escopo criado quando uma função é declarada 
// Esse escopo permite a função acessar e manipula variaveis externas a função

// contexto léxico em ação

const x = 'Global'

function fora() {
    const x = 'local'
    function dentro() {
        return x
    }
    return dentro
}

const minhaFunco = fora()
console.log(minhaFuncao())