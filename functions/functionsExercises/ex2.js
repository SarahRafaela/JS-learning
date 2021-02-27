/* 02) Triangles can be classified into 3 types as to the size of their sides:
Equilateral: The three sides are equal. Isosceles: Two equal sides. Scalene: All sides are different.
Create a function that takes the lengths of the three sides of a triangle and returns its classification as to
to the size of its sides. (In this example, abstract the mathematical conditions for the existence of a
triangle).*/


function isTriangle(ladoA, ladoB, ladoC) {

    if (ladoA == ladoB == ladoC) {
        return "is equilateral"
    } else if (ladoA == ladoB && ladoA != ladoC || ladoA != ladoB && ladoA == ladoC || ladoA != ladoB && ladoB == ladoC) {
        return "is isosceles"
    } else if (ladoA != ladoB && ladoA != ladoC & ladoB != ladoC) {
        return "is scalen"
    }

}

console.log(isTriangle(1, 2, 3))
console.log(isTriangle(1, 1, 3))
console.log(isTriangle(1, 1, 1))