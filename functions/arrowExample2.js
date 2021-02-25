function Person(){
    this.age = 0
    // no need of bind because this is constant
    setInterval(()=> {
        this.age++
        console.log(this.age)
    }, 1000)
}

new Person