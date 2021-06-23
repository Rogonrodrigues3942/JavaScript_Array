/*Estudos de métodos aplicados em array - páginas 137 e 138
every()*/

var num = [1, 2, 3, 4, 5]

function valor (elem, ind) 
{ 
    return (typeof elem == "number")
}

function caracter (elem, ind)
{
    return (typeof elem == "string")
}

var vale = num.every(valor)
console.log(vale)

var letr = num.every(caracter)
console.log(letr)