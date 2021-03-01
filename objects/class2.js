class Grandfather {
    constructor(surname = "") {
        this.surname = surname
    }
}

class Father extends Grandfather {
    constructor(surname, job = 'Professor') {
        super(surname)
        this.job = job
    }
}

class Son extends Father {
    constructor() {
        super('Silva')
    }
}

const son = new Son
console.log(son)