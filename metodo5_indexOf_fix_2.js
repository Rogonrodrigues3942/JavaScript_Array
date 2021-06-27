/*Estudando método indexOf() páginas 141 e 142  - 2ª versão - 27/06/2021
Este método foi criado e inspirado de mesmo nome para Strings. Retornar o índice do elemento de um array 
Admite um argumento obrigatório, que é o elemento do array cujo índice se deseja saber.*/

console.log("\tMétodo indexOf() - 2ª versão\n")

var arr = [ 1, 2, "a", "b", "2", "c", 1, "a", "45"]

let a = arr.indexOf(1)
let b = arr.indexOf(2)
let c = arr.indexOf("b")
let d = arr.indexOf(2, 2, true)

console.log(a)
console.log(b)
console.log(c)
console.log(d)