/*Método push(): capítulo 5 - página 145
Este método acrescenta os argumentos no final do array e retorna a nova quantidade de 
elementos no array*/

console.log("\tEstudo do método push() - 27/06/2021")

var arr = [1, 2, "a", "b"]
console.log("arr = [" + arr + "]")

var brr = [5 , 6, 7, "m"]

let a = arr.push(brr) // retorna o tamanho + 1 (5) - o array neste processo é tratado como um elemento
console.log("\nO novo tamanho do arr é: ", a)
console.log("arr = [" + arr + "]")

let b = brr.push(1 , 2, "a", "b") // retornar 8 por os 4 quatro parâmetros são tratados como  cada sendo um elemento.
console.log("\nbrr = [" + brr + "]")
console.log("O novo tam de brr é: ", b)