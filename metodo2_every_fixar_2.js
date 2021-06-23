/*Estudos de métodos aplicados em array - páginas 137 e 138
every()*/
console.log("\n\n\tFixando Conceitos function every")

var num = [1, 2, 3, 44, 30,2]
var letras = ['a', 'b', 'c', 'd']

function numero (elem, pos)
{
    return (typeof elem == 'number')
}

function caracter (elem, pos)
{
    return (typeof elem == "string")
}

var confirmar = num.every(numero)
console.log("O array num é number: ",confirmar)

confirmar = num.every(caracter)
console.log("O array num é string: ", confirmar)

confirmar = console.log("O array letras é tipo number: ", letras.every(numero))
confirmar = console.log("O array letras é do tipo string: ", letras.every(caracter))