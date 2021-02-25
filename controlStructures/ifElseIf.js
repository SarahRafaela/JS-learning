Number.prototype.between = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const showResult = function (grade) {
    if (grade.between(9, 10)) {
        console.log("Honor group")
    } else if (grade.between(7, 8.99)) {
        console.log("Aprovaded")
    } else if (grade.between(4, 6.99)) {
        console.log('Recovery')
    } else if (grade.between(0, 3.99)) {
        console.log('Rejected')
    } else {
        console.log('Invalid Grade')
    }
}

showResult(10)
showResult(8.9)
showResult(6.55)
showResult(2.3)
showResult(-1)
showResult(11)
