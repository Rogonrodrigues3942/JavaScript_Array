/*Fixando o conceito function forEach() - paginas 139 e 140*/

var letra = ['a', 'b', 'c', 'd', 'e']
var num = [1, 2, 3, 4, 5]

const mostrar = (elem, ind) => console.log("arr[" + ind + "] = " + elem)
const verif = (elem, ind) =>  typeof elem == "number"

letra.forEach(mostrar)
console.log(letra.forEach(verif))
num.forEach(mostrar)
num.forEach(verif)