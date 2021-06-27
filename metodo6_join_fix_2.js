/*Metodo join() - página 143 - Método transformar o array em string - 27/06/2021

Admite um argumento opcional que se destina a criar um separador para os elementos, o separador
padarão criado é a vírgula.*/

console.log("\tEstudo o método join()\n")

var arr = [1, 2, 3, "a", "b"]
let a = arr.join()
let b = arr.join('/')
let c = arr.join("-")

console.log(a)
console.log(b)
console.log(c)