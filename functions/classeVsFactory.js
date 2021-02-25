class Person {
    constructor (name){
        this.name = name
    }
    toSpeak(){
        console.log(`My name is ${this.name}`)
    }
}

const p1 = new Person(`João`)
p1.toSpeak()

//factory
const person = name => {
    return {
        toSpeak: () =>    console.log(`My name is ${this.name}`)
    }
}
const p2 = new Person(`Sarah`)