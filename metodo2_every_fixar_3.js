/*Estudos de métodos aplicados em array - páginas 137 e 138
every() - 22/06/2020*/

var letras = ['a', 'b', 'c','d', 'e']
var decimal = [0, 1, 2, 3, 4 , 5, 6]

function caracter (elem, ind)
{
    return (typeof elem == "string")
}

function num ( elem, ind)
{
    return (typeof elem == "number")
}



console.log("O array letras é tipo numérico: ", letras.every(num))
console.log("O array letras é tipo caracter: ", letras.every(caracter))