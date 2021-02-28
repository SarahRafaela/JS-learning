//littal notation

const object1 = {}
console.log(object1)

//object in JS
console.log(typeof Object, typeof new Object)
const object2 = new Object
console.log(object2)


// build functions

function Product(name, price, discount){
    this.name = name
    this.getDiscountPrice = () =>  {
        return price * (1 -discount)
    }
}
const product1 = new Product('Caneta', 7.99, 0.15)

const product2 = new Product('Notebook', 3000.25, 0.15)

console.log(product1.getDiscountPrice(),product2.getDiscountPrice())


//factory function
function createEmployee(name, salary,faults){
    return{
        name,
        salary,
        faults,
        getSalary(){
            return(salary/30) *(30-faults)
        }
    }
}

const employee1 = createEmployee('João', 6000, 4)
const employee2 = createEmployee('Joana', 8000, 1)
console.log(employee1.getSalary(),employee2.getSalary())

//object.create
const daughter = Object.create(null)
daughter.name = 'Ana'
console.log(daughter)

//JSON

const fromJSON = JSON.parse('{"info": "I am a JSON"}')
console.log(fromJSON.info)