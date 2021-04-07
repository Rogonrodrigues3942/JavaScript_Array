console.log('\n................\nArray - Método every(função(elem, ind, obj)[,thisObjeto]) - página 136\n.......................')
/*O método destina-se a percorrer cada um dos elementos de um array e executar operação de comparação e
 retorna um resultado lógico true/false.*/
 console.log('1º exemplo - Verificando se todos os elementos do vetor são objetos Number')
let arr = [21,3,32,4,290,18]
const funcao1 = (a, b, c) => typeof a == 'number'
let x = arr.every(funcao1)
console.log('Resultado: ',x)

console.log('\n2º exemplo - Verificando se todos os elementos do vetor são objetos Number')
let arr1 = ['Rogério',1,2,21,290]
const funcao2 = (a,b,c) => typeof a == 'number'
let y =arr1.every(funcao2)
console.log('Resultado: ',y)