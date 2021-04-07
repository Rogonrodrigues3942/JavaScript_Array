console.log('\n................\nArray - Método some(função(elem, ind, obj)[,thisObjeto]) - página 145 \n.......................')
console.log('1º exemplo - Validando dado tipo string')
let arr = [21, 3, 18,'a',290]
let arr2 = [21, 3, 18,290]

funcaoUm = (elem, ind,ob) => typeof elem === 'string'

console.log("Há alguma string no vetor arr: ",arr.some(funcaoUm))
console.log("Há alguma string no vetor arr2: ",arr2.some(funcaoUm))