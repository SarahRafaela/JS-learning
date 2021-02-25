let double = function (a) {
    return 2 * a
}
// arrow is always a anonimous function, but we can store into a const or var 
double = (a) => {
    return 2 * a
}
// one single line function
double = a => 2 *  a // implicit return 
console.log(double(Math.PI))

let speak = function(){
    return 'hello'
}


speak = () => 'hello' // default form 
speak = _ => 'hello' // ignoring parameter
console.log(speak())