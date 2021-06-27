/*Método reduceRight() - capítulo 5: páginas 147, 148 e 149 - 27/06/2021
*/

console.log("\tEstudo do método reduceRight()\n")

var arr = [1, 4, 7, 15, 36]

const funcUm = (v1, v2, ind, arr) => v1 - v2
const funcDois = (v1, v2, ind, arr) => v1 / v2

var sub = arr.reduceRight(funcUm)
var div = arr.reduceRight(funcDois)

console.log("A diferença de todos os elementos de arr é: ", sub)
console.log("A divisão de todos os elementos de arr é: ", div)