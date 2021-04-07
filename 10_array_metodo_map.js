console.log('\n................\nArray - Método map(função(elem, ind,obj)[,thisObjeto]) - página 143 \n.......................')
const arr = [21,3,18,290]
funcao1 = elem => elem*2
let a = arr.map(funcao1)
console.log(a)
console.log('\n2º exemplo')
funcao2 = (elem, ind) => elem * (ind-2)
let b = arr.map(funcao2)
console.log(b)