let isActive = false

isActive = true

isAtivo = 1 
console.log(!isActive)
// todos os numeros sao verdadeiros exceto o 0
isAtivo = 0
console.log(!!isActive)
// verdadeiro
console.log(!!3)
console.log(!!-1)
console.log(!![])
console.log(!!(isActive = true))

//falso

console.log(!!'')
console.log(!!0)
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isActive=false))


// varios tipos podem ser resolvidos para true ou false
let nome =  ''
console.log (nome || 'Desconhecido')
