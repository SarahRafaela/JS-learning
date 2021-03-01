// prototype chain

// dont work with __proto__  global like:
// Object.prototype.attr0 = '0' => impact all objects 


// example 1
const grandFather = { attr1: 'A' }
const father = { __proto__: grandFather, attr2: 'B' }
const son = { __proto__: father, attr3: 'C' }

console.log(father.attr1)
console.log(son.attr1)
console.log(son.attr0, son.attr1, son.attr2, son.attr3)

// other example

const car = {
    maxSpeed: 200,
    currentSpeed: 0,
    speedUp(delta) {
        if (this.currentSpeed + delta <= this.maxSpeed) {
            this.currentSpeed = this.maxSpeed
        }
    },
    status() {
        return `${this.currentSpeed}Km/h of ${this.maxSpeed}km/h`
    }

}

const ferrari = {
    model: 'F40',
    maxSpeed: 324 // shadowing

}


const volvo = {
    model: 'V40',
    status() {
        return `${this.model} : ${super.status()} `
    }

}

Object.setPrototypeOf(ferrari, car)
Object.setPrototypeOf(volvo, car)
console.log(ferrari)
console.log(volvo)

volvo.speedUp(100)
console.log(volvo.status())

volvo.speedUp(300)
console.log(volvo.status())

ferrari.speedUp(100)
console.log(ferrari.status())