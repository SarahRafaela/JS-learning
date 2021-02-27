const name = "Sarah"
const concat = 'Hi ' + name + "!"

const template = 
`Hi 
       ${name}! `

console.log(concat, template)

// expressions
console.log(`1+1 = ${1+1}`)

const up = text => text.toUpperCase()
console.log(`oh.. ${up(`be careful`)}!`)