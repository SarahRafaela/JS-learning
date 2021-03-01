function Class (name, videoID)  {
    this.name = name
    this.videoID = videoID
}


const class1 = new Class("First Class", 123)
const class2 = new Class("Last Class", 123)


console.log(class1, class2)

// simulating new

function novo (f, ...params){
    const ob = {}
    obj3.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
    }

    const class3 = novo(Class, "welcome", 123)
    const class4 = novo(Class,"the end", 234 )

    console.log(class3, class4)