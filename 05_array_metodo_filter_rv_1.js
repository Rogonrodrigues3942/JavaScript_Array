console.log('\n................\nArray - Método filter(função(elem, ind, obj)[,thisObjeto]) -1ª revisão - página 138\n.......................')
console.log('\n1º exemplo - Filtrando valor maior ou igual a 18')
let arr = [21,3,18,'a',290, 'b',7]
const maior18 = elem => elem >= 18
const result = arr.filter(maior18)
console.table(result)

console.log('\n2º exemplo - Filtrando string')
const caract = elem => typeof elem == 'string'
console.table(arr.filter(caract))

console.log('\n3º exemplo - Filtrando índices')
const indices = (elem, ind) => ind < 4
const ind = arr.filter(indices)
console.table(ind)
