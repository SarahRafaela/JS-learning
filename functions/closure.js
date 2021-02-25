// Closure is the scope created when a function is declared
// This scope allows the function to access and manipulate variables external to the function

// lexical context in action

const x = 'Global'

function outside() {
    const x = 'local'
    function inside() {
        return x
    }
    return inside
}

const myFunction = outside()
console.log(myFunction())