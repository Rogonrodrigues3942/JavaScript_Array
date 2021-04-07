console.log('\n................\nArray - Método filter(função(elem, ind, obj)[,thisObjeto]) - página 138\n.......................')
/*O método  filtra elementos de um array e retorna em outro o resultado do filtro.*/
console.log('1º exemplo - elementos maior que 18')
const arr = [21, 3, 18,'a',290,'b',7]
const funcao1 = (el, id, ob) => el >= 18
const maior = arr.filter(funcao1)
console.log(maior)

console.log('\n2º exemplo - elementos String')

arr2 = ['Rogério','Rafael','Samuel',1,2,3,5,a = 1]
const funcao2 = (elm) => typeof elm == 'string'
let nomes = arr2.filter(funcao2)
console.log(nomes)

console.log('\n3º exemplo - mostra elementos abaixo de indice 4')
arr3 = [1,2,56,45,'a','b','c',23]
const funcao3 = (elm,ind) => ind < 4
const posmenor = arr3.filter(funcao3)
console.log(posmenor) 

console.log('\n4º exemplo - elemento acima de indice 4')
const funcao4 = (elm, ind) => ind > 4
const posmaior = arr3.filter(funcao4)
console.log(posmaior)

console.log('arr = ',arr.filter(funcao4), arr.length)
console.log('arr2 =',arr2.filter(funcao4), arr2.length)