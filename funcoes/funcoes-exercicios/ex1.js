//01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
//multiplicação e divisão desses valores.

function calcular(x = 0, y = 0) {

    console.log(x, " + ", y, " = ", somar(x, y),"\n",
        x, " * ", y, " = ", mutiplicar(x, y),"\n",
        x, " / ", y, " = ", dividir(x, y),"\n",
        x, " - ", y, " = ", subtrair(x, y),"\n")
}

function somar(x,y){
    return x+y
}

function mutiplicar(x,y){
    return x*y
}

function dividir(x,y){
    return x/y
}

function subtrair(x,y){
    return x-y
}

calcular(5,2)
calcular(5)
calcular(2,5)