
// 01) Create a function that gives two values ​​(passed as parameters) to show the sum, subtraction,
// multiplication and division of these values.

function calculate(x = 0, y = 0) {

    console.log(x, " + ", y, " = ", sum(x, y),"\n",
        x, " * ", y, " = ", mutiply(x, y),"\n",
        x, " / ", y, " = ", divide(x, y),"\n",
        x, " - ", y, " = ", subtract(x, y),"\n")
}

function sum(x,y){
    return x+y
}

function mutiply(x,y){
    return x*y
}

function divide(x,y){
    return x/y
}

function subtract(x,y){
    return x-y
}

calculate(5,2)
calculate(5)
calculate(2,5)