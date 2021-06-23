/*Estudos de métodos aplicados em array - páginas 137 e 138
every() - 23/06/2020*/

console.log("\n\tPraticando método every()\n\n")

var letras = [ 'q', 'a', 'z', 'w']
var numero = [12, 11, 23, 43]

function num(elem, ind)
{
    return ( typeof elem == 'number')
}

function caracter(ele, ind)
{
    return (typeof ele == "string")
}

var strg = letras.every(caracter)
var inteiro = letras.every(num)
console.log("O array letras é tipo string: ", strg)
console.log("O array letras é tipo number: ", inteiro)