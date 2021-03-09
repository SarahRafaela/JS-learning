Array.prototype.reduce2 = function(callback, inicialValue) {
    const inicialIndex = inicialValue ? 0 : 1
    let count = inicialValue || this[0]
    for (let i = inicialIndex; i < this.length; i++) {
        count = callback(count, this[i], i, this)
    }
    return count
}

const sum = (total, value) => total + value
const nums = [1, 2, 3, 4, 5, 6]
console.log(nums.reduce2(sum, 21))