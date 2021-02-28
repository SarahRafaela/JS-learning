// understanding the scope

{
    {
        {
            {
                var willBe = 'Will Be??'
                console.log(willBe)
            }
        }
    }
}

console.log(willBe)
// var inside of a function only exists into local scope  
function test() {
    var local = 123
    console.log(local)
}