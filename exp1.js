/*Capitulo 5 - Exemplo 1 - página 133*/

console.log("Construindo um novo array");

var meuArray = new Array();

var meuArray = new Array("casa", "rio", 123, "Joinville", 5)
console.log(meuArray)
console.log(meuArray[0])
console.log(meuArray[4])

var outroVetor = new Array({x: 1, y: 2}, "Rogério", "Rafael", "Samuel",{a:50, b: 17, c:10})
console.log(outroVetor)
console.log(outroVetor[0].x)
console.log(outroVetor[4].a)
console.log(outroVetor[3])
console.log(outroVetor[2])