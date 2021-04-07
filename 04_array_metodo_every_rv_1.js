console.log('\n................\nArray - Método every(função(elem, ind, obj)[,thisObjeto]) - página 136 - 1ª Revisão\n.......................')
/*O método destina-se a percorrer cada um dos elementos de um array e executar operação de comparação e
 retorna um resultado lógico true/false.*/
 console.log('1º exemplo - Verificando se todos os elementos do vetor são objetos Number')
 let arr1 = [2,3,6,89,21,34,213]
 const funcao1 = (elem, ind, obj) => typeof elem == 'number'
 let y = arr1.every(funcao1)
 console.log('Resultado é:',y)

 console.log('\n2º exemplo - Verificando se todos os elementos do vetor são objetos Number')
 let arr2 = ['a','c',1,2,3]
const funcao2 = (elem, ind, obj) => typeof elem == 'number'
let z = arr2.every(funcao2)
console.log('Resultado é:',z)