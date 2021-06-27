/*Método reduce() - capítulo 5: páginas 145, 146 e 147

Este método destina-se a precorre cada um dos elementos de um array e executar um função callback. 
Não altera o array original e admite um argumento obrigatório, que é a função callback, e um argumento 
inicial.

A função é executada para cada um dos elementos do array e é retornado um valor único da aplicação da 
função sucessivamente para cada elemento do array. a função requer quatro argumentos do array e é 
retornado um valor único resultante da aplicação da função sucessivamente para cada elemento do array.*/

console.log("\tEstudo do método reduce()\n")

var arr = [1, 4, 7, 15, 36]

const funUm = (v1, v2, ind, arr) => v1 + v2
const funDois = (v1, v2, ind, arr) => v1 * v2

var soma = arr.reduce(funUm)
var mult = arr.reduce(funDois)

console.log("O valor da soma dos elementos de arr é:", soma)
console.log("O valor da multiplicaçção dos elementos do arr é: ", mult)