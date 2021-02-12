let dobro = function (a) {
    return 2 * a
}
// arrow sempre é uma função anonima, mas podemos armazenar numa const ou var
dobro = (a) => {
    return 2 * a
}
// função de uma unica linha
dobro = a => 2 *  a // return implicito
console.log(dobro(Math.PI))

let ola = function(){
    return 'Olá'
}


ola = () => 'olá' // forma padrão 
ola = _ => 'olá' // mesma coisa mas pode ignorar o parametro
console.log(ola())