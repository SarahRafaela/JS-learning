function Pessoa(){
    this.idade = 0
    // aqui nao preciso do bind, o this não varia 
    setInterval(()=> {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa