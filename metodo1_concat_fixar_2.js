/*Estudos de métodos aplicados em array - páginas 137 e 138
concat()*/

console.log("\n\nEstudo de Métodos aplicados em arrays - fixação 1\n\n")

var letras = ['a', 'q', 'z', 'e']
var num = [ 1, 2, 3, 4]

console.log("Array letras tem tamanho: ", letras.length)
console.log("Array num tem tamanho: ", num.length)

console.log("\n\n\tConcatenção vetores\n")

letras = letras.concat(num)
console.log(letras)

num = num.concat(letras)
console.log(num)