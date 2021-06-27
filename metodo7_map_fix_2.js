/*Método map(), percorre cada elemento e executa a função callback - cria um novo array e mantém 
o original.*/

console.log("\n\tMétodo Map\n")

var nr = ['a', 'b', 12, 32, 45, 9]

const x = elem => elem * 10
const d = elem => elem / 10
const s = elem => elem + 10
const m = elem => elem - 10

var mul = nr.map(x)
var div = nr.map(d)
var sum = nr.map(s)
var sub = nr.map(m)

console.log("Multiplicação = ", mul)
console.log("Divisão = ", div)
console.log("Soma = ", sum)
console.log("Diferença = ", sub)