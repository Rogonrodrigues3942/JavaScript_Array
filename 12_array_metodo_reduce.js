console.log('\n................\nArray - Método reduce(função(vAnt, vAtual, ind,arr)[,vInicial]) - página 145 \n.......................')
console.log('\n1º exemplo - com Valor incial')
let arr = [1,4,7,15]
console.log('arr = ',arr)
funcaoUm = (v1, v2, ind, arr) => v1 + v2
let x = arr.reduce(funcaoUm, 100)
console.log(x)

console.log('\n2º exemplo -  sem valor incial definido')
let z = arr.reduce(funcaoUm)
console.log(z)