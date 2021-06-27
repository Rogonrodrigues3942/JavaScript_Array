/*Método map() - cap5: páginas 143 e 144 - 27/06/2021

Este método destina-se a percorre cada um dos elementos de um array e modificá-los conforme definido em uma 
função callback.

Não altera o array original e admite um argumento obrigatório, é a função callback. Retorna os novos valores 
em um novo array.*/

console.log("\tEstudando a função map()\n")

var arr = [21, 3, 18, 29]

const funcaoUm = (elem, ind, obj) => elem * 10
const funcaoDois = (elem, ind, obj) => elem + 10

var armazena = arr.map(funcaoUm)
var estoca = arr.map(funcaoDois)

console.log("novoArr = [" + armazena + "]")
console.log("arrNovo = [" + estoca + "]")