/*Estudos de métodos aplicados em array - páginas 137 e 138
every() - 23/06/2020*/
console.log ("\n\tTreinando a function every()\n\n")

var letras = ['a', 'q', 'w','z']
var num = [1, 2, 3 ,4, 5]

const numero = (elem, ind) => typeof elem == "number"
const caracter = (elem, ind) => typeof elem == "string"

console.log ("O array num é numérico: ", num.every(numero))
console.log ("O array letras é caracter: ", letras.every(caracter))
console.log ("O array num é caracter: ", num.every(caracter))
console.log ("O array letras é numérico", letras.every(numero))