const sequency = {
    _value: 1, // convenção
    get value() { return this._value++ },
    set value(value) { 
        if(value > this._value) {
            this._value = value
        }
    }
}

console.log(sequency.value, sequency.value)
sequency.value = 1000
console.log(sequency.value, sequency.value)
sequency.value = 900
console.log(sequency.value, sequency.value)