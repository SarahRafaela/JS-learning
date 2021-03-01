// class is convert to function

// oo in js is centralized on function

class FinancialRelase {
    constructor(name = "Generic", value = 0) {
        this.name = name
        this.value = value
    }

}

class FinancialCicle {
    constructor(month, year) {
        this.month = month
        this.year = year
        this.financialRelases = []
    }
    addFinancialRelases(...financialRelases) {
        financialRelases.forEach(fR => this.financialRelases.push(fR))
    }
    sumary() {
        let valueConsolidated = 0
        this.financialRelases.forEach(fR => {
            valueConsolidated += fR.value
        })
        return valueConsolidated
    }
}

const salary= new FinancialRelase('salary', 45000)
const eletricityBill = new FinancialRelase('light', -220)

const bills = new FinancialCicle(6, 2018)
bills.addFinancialRelases(salary,eletricityBill)
console.log(bills.sumary())

