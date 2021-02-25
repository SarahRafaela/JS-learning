function Person () {
    this.ity = 0
    // circumvent this variation
    // const self = this
    setInterval (function () {
        this.idade ++
        console.log (this.idade)
    } /*. bind (this) */, 1000)
}

new Person