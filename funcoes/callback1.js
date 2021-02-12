const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {

    console.log(` ${indice + 1}. ${nome} `)
}
fabricantes.forEach(imprimir)
// para cada elemento ele chama um callback
fabricantes.forEach(fabricantes => console.log(fabricantes))