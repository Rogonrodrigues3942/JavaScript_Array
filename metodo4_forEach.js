/*Estudando a function forEach, a função é executada para cada um elementos de um array e o retorno
ocorre em vetor resultado, o vetor inicial não é alterado. - 23/06/2021*/

console.log("Estudando function forEach()")

var mix = [21, 18, 3, 'a', 290]

const msg = (elem, ind) => console.log("arr[", ind,"] =", elem)

mix.forEach(msg)
console.log (msg)