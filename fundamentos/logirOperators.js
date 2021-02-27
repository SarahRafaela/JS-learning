function buy(work1, work2) {
    const toBuyIceCream = work1 || work2
    const toBuyTv50 = work1 && work2
    const toBuyTv32 = work1 != work2
    const keepHealthy = !toBuyIceCream

    return { toBuyIceCream, toBuyTv50, toBuyTv32, keepHealthy }

}

console.log(buy(true, true))
console.log(buy(true, false))
console.log(buy(false, false))
console.log(buy(false, true))

