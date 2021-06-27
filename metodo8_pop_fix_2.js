/*Método pop () - remove o último elemento de um array e retorna o valor que foi removido - 
página 145 - 2ª versão*/

console.log("\tMétodo pop() - 2ª versão\n")

var arr = [1, 2, "a","B"]
let remove = arr.pop()
let tam = arr.length

console.log("arr = [" + arr + "]")
console.log("O elemento removido é: ", remove)
console.log("O tamanho do vetor arr é: ", tam)