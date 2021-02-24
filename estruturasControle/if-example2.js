function test1(num) {
    if(num > 7)
        console.log(num)
    
    console.log('Final')
}

test1(6)
test1(8)

// cuidado com o ';', não usar com as estruturas de controle

function test2(num) {
    if(num > 7); { 
        console.log(num)
    }
}

test2(6)
test2(8)