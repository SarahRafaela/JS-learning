let comparaComThis = function (param) {
    console.log(this === param)
}
// window no browser é o global
// node é global 
comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.binf(obj)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

// this numa função arrow não varia nunca