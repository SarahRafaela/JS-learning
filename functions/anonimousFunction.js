const sum = function (x, y) {
    return x + y
}

const show = function (a, b, operation = sum) {
    console.log(operation(a, b))
}
show(3, 4)

show(3, 4, sum)

show(3, 4, function (x, y) {
    return x - y
})
show(3, 4, (x, y) => x * y)