let compareWithThis = function (param) {
    console.log(this === param)
}
// window in the browser is the global
// node is global 
compareWithThis(global)

const obj = {}
compareWithThis = compareWithThis.binf(obj)
compareWithThis(obj)

let compareWithThisArrow = param => console.log(this === param)
compareWithThisArrow(global)
compareWithThisArrow(module.exports)

// this on arrow function never varies