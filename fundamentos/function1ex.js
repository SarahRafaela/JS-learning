// function without return

function showSum(a, b) {
    console.log(a + b)
}

showSum(2 + 3)
//undefined
showSum(2)
//only sum the first and the second one
showSum(2, 3, 4, 5)

//function with return
function sum(a, b = 0) {
    return a + b
}
console.log(sum(2))
console.log(sum(4, 6))