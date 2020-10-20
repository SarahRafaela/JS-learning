// entendendo escopo

{
    {
        {
            {
                var sera = 'Será??'
                console.log(sera)
            }
        }
    }
}

console.log(sera)
// var dentro de funcao so exxites no escopo local 
function teste() {
    var local = 123
    console.log(local)
}