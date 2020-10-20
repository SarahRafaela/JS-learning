function tratarErroLancar(erro) {
    throw new Error('mensagem de erro')

}
function imprimirNomeCaixaAlta(obj) {
    try {
        console.log(obj.name.toUpperCase())
    } catch (e) {
        tratarErroLancar(e)
    } finally {
        console.log('final')
    }
}
const obj = { nome: 'Roberto' }
imprimirNomeCaixaAlta(obj)