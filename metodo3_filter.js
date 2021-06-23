/*Treinando a função filter - paginas 138 e 139 - 23/06/2021*/

console.log("\n\n\tPraticando a função filter\n\n")

var mix = [21, 3, 18, 'a', 290, 'b', 7]

const filtrarArray = (elem, ind) => elem >= 18

console.log("Retornar: ", mix.filter(filtrarArray))