/*Estudos de métodos aplicados em array - páginas 137 e 138
concat()*/

console.log("\n\nEstudo de Métodos aplicados em arrays - fixação 1\n\n")

var vetor = [ 1, 2, 3, 4, 'a', 's','c',{x: 10, y: 'd'}]

var tam = vetor.length
console.log("O vetor tem o tamanho: ", tam)

console.log("Concatenção vetores")

console.log(vetor)
vetor = vetor.concat(121, 141, 'z')
console.log(vetor)