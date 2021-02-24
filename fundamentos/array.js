const values = [1,2,3,4]

console.log(values[1], values[3])

values[4] = 10

console.log(values)
console.log(values.lenght)
//heterogeneous typing
values.push({id:3}, false, null, 'teste' )
console.log(values)
// removing elements
console.log(values.pop())
console.log(values)
delete values[0]
console.log(values)
//type of objects
console.log(typeof values)