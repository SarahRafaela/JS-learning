const factories = ["Mercedes", "Audi", "BMW"]

function show(name, index) {

    console.log(` ${index + 1}. ${name} `)
}
factories.forEach(show)
// for all elements call a callback
factories.forEach(factories => console.log(factories))