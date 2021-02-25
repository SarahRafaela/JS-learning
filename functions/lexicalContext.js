const value = 'Global'

// function loads the context it was declared in
function myFunction() {
    console.log(value)
}

function exec() {
    const value = 'local'
    myFunction()
}

exec()