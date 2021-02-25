function Car(velocidadeMaxima = 200, delta = 5) {
    // private attribute
    let currentSpeed = 0

    // public method
    this.speedUp = function () {
        if (currentSpeed + delta <= velocidadeMaxima) {
            currentSpeed += delta
        } else {
            currentSpeed = velocidadeMaxima
        }
    }
    // public method
    this.getCurrentSpeed = function () {
        return currentSpeed
    }
    // const ou let => private method
    const getSpeed = function () {
        return currentSpeed
    }
}
const uno = new Car
uno.speedUp()
console.log(uno.getCurrentSpeed())

const ferrari = new Car(350, 20)
ferrari.speedUp()
ferrari.speedUp()
ferrari.speedUp()
console.log(ferrari.getCurrentSpeed())

console.log(typeof Car)
console.log(typeof ferrari)
