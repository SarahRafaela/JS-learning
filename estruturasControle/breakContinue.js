const numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in numbs) {
    if (x == 5) {
        break
    }
    console.log(`${x} = ${numbs[x]}`)
}

for (y in numbs) {
    if (y == 5) {
        continue
    }
    console.log(`${y} = ${numbs[y]}`)
}

extern:
for (a in numbs) {
    for (b in numbs) {
        if (a == 2 && b == 3) break extern
        console.log(`Par = ${a},${b}`)
    }
}