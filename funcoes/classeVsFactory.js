class Pessoa {
    constructor (nome){
        this.nome = nome
    }
    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa(`João`)
p1.falar()

//factory
const pessoa = nome => {
    return {
        falar: () =>    console.log(`Meu nome é ${this.nome}`)
    }
}
const p2 = new Pessoa(`Sarah`)