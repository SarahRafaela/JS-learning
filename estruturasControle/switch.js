const showResult = function (grade) {
    switch (Math.floor(grade)) {
        case 10:
        case 9:
            console.log('Honor Group')
            break
        case 8: case 7:
            console.log('Aprovaded')
            break
        case 6: case 5: case 4:
            console.log('Recovery')
            break
        case 3: case 2: case 1: case 0:
            console.log('Rejected')
            break
        default:
            console.log('Invalid grade')
    }
}

showResult(10)
showResult(8.9)
showResult(6.55)
showResult(2.3)
showResult(-1)
showResult(11)
