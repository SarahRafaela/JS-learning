const person = {
    greeting: 'Good morning !,',
    speak() {
        console.log (this.saudacao)
    }
}
person.speak ()
// conflict of functional paradigm and oo
const speak = person.speak
speak()

// create bind, this always points to the person, ties the object to be the owner of the execution when the object is used
const FaleDePessoa = person.falar.bind (person)