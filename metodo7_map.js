/*Método map(), percorre cada elemento e executa a função callback - cria um novo array e mantém 
o original.*/

console.log("\n\tMétodo Map\n")

var nr = [29, 1, 10, 24, 8]

const x = elem => elem * 10
const d = elem => elem / 10
const p = elem => elem + 10
const s = elem => elem - 10

var mult = nr.map(x)
var div = nr.map(d)
var sum = nr.map(p)
var sub = nr.map(s)

console.log("Multiplicação = ",mult)
console.log("Divisão = ",div)
console.log("Adição = ", sum)
console.log("Subtracao = ",sub)