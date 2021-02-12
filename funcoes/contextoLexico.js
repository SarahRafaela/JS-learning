const valor = 'Global'
// funcao carrega o contexto que ela foi declarada
function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = 'local'
    minhaFuncao()
}

exec()