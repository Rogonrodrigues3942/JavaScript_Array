console.log('\n................\nArray - Método every(função(elem, ind, obj)[,thisObjeto]) - 2ª revisão - página 136\n.......................')
/*O método destina-se a percorrer cada um dos elementos de um array e executar operação de comparação e
 retorna um resultado lógico true/false.*/
 console.log('\n1º exemplo - método every()')
 let arr = [21,3,18,290]
 const check = elem => typeof elem == 'number'
 console.log('Todos os elementos do array são números: ',arr.every(check))

 console.log('\n2º exemplo - método every()')

 let arr1 = [21,3,18,'a',290]
 const check2 = elem => typeof elem == 'number'
 console.log('Todos os elementos do array são números: ',arr1.every(check2))