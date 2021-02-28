
// dinamic colection of key/value pair
const product = new Object
product.name =  'Chair'
product['brand'] = 'generic'
product.price = 220

console.log(product)
delete product.price
delete product['brand']
// other example
const car = {
    model : 'A4',
    value: 60000,
    owner: {
        name: "Raul",
        age: 32,
        address : {
            streetName: "Jackson Street",
            number: 21
    }},
        vehicleDrivers:[{
            nome: 'Junior',
            age: 19},
            {
                name: 'Ana',
                age:42
            }
        ],
        calculateInsuranceValue: function (){
            //..
        }

    
}
car.owner.address.number = 1000
car['owner']['address']['streetName'] = 'New Flower Avenue'
console.log(car)
console.log(car.vehicleDrivers.length)