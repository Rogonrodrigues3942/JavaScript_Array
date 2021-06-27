/*Estudos de métodos aplicados em array - páginas 137 e 138 every() - 27/06/2020 - Este método percorre cada
um dos elementos de um array e executa uma função callback. Ao encontrar um elemento que não satisfaça as  condições 
da funç~çao call back, retorna falso.*/
console.log ("\n\tTreinando a function every()\n\n")

console.log("Verificando tipos de dados de um array\n")
var nr = [21, 3, 18, 290]

const numb = (elem , ind, obj) => typeof elem == "number"
const carct = (elem, ind, obj) => typeof elem == "string"

var armazena = nr.every(numb)
var guarda = nr.every(carct)
console.log("nr = [" + nr + "]")
console.log("O array nr é numérico (true ou false):", armazena)
console.log("O array nr é string (true ou false):", guarda)

var letras = ['a', 'b', 'c', 'd']
var constata = letras.every(numb)
var confirma = letras.every(carct)
console.log("\nletras = [" + letras + "]")
console.log("O array letras é string (true or false):", confirma)
console.log("O array letras é numérico (true or false):", constata)