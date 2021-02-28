function treatErrorThrow(erro) {
    throw new Error('error message')

}
function showUpperCase(obj) {
    try {
        console.log(obj.name.toUpperCase())
    } catch (e) {
        treatErrorThrow(e)
    } finally {
        console.log('final')
    }
}
const obj = { name: 'Roberto' }
showUpperCase(obj)