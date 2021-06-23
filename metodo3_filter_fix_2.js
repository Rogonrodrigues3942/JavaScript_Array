/*Treinando a função filter - paginas 138 e 139 - 23/06/2021*/

console.log("\n\n\tPraticando e fixando a function filter\n\n")

var mix = [1, 2, 3, 'a', 'q', 'c', 50, 19, 11 ]

const maior = (elem, ind) => elem >= 18
const car = (elem, ind) => typeof elem == "string"
const num = (elem) => typeof elem == "number"
const menor = (elem) => elem < 18

console.log("Quais os elementos que são caracteres do array mix:", mix.filter(car))
console.log("Quais são os elementos númericos maiores ou iguais a 18 do array mix:", mix.filter(maior))
console.log("Quais os elementos do array mix são numéricos:", mix.filter(num))
console.log("Quais são os elementos do array mix menores que 18: ", mix.filter(menor))