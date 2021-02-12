function Pessoa(){
    this.idade = 0
    // driblar a variação do this
    //const self = this
    setInterval(function(){
        this.idade++
        console.log(this.idade)
    }/*.bind(this)*/, 1000)
}

new Pessoa 

