const pessoa = {
    saudacao: 'Bom dia!,',
    falar() {
        console.log(this.saudacao)
    }
}
pessoa.falar()
//conflito de paradigma funcional e oo
const falar = pessoa.falar
falar()

// criar bind, o this sempre aponta para pessoa, amarra o objeto para ser o dono da execução quando o objeto for usado
const falarDePessoa = pessoa.falar.bind(pessoa)