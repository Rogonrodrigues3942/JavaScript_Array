/*Estudos de métodos aplicados em array - páginas 137 e 138
concat()*/

console.log("\n\nEstudo de Métodos aplicados em arrays\n\n")

var arr = [10, 17, 50, 'S', "R"]

var exp1 = arr.concat("R", 40)

console.log(arr)
console.log (exp1)

arr = exp1
console.log(arr)
var exp2 = arr.concat(["gol"], 2000)
console.log(exp2)