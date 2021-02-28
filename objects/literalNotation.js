const a = 1 
const b = 2
const c = 3

const object1 = {a :a ,b :b , c:c}
// same and better 
const object2 = {a,b,c}
console.log(object1,object2)

const nameAttr = 'grade'
const valueAttr = '7.94'

const object3 = {}
object3[nameAttr] = valueAttr
console.log(object3)

const object4 = {[nameAttr]: valueAttr}
console.log(object3)

const object5 = {
    function1 : function(){
        // ...
    }, 
    function2(){
        // ...
    }
}

console.log(object5)