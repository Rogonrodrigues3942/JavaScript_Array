console.log('\n................\nArray - Método reduceRight(função(vAnt, vAtual, ind, arr)[,vInicial]) - página 145 \n.......................\n')
let arr = [1,4,7,15]
funcaoUm = (v1,v2, ind, arr) => v1 +v2
console.log('1º exemplo - sem valor inicial')
let x = arr.reduceRight(funcaoUm)
console.log('O valor de retorno é: ',x)
console.log('\n2º exemplo - com valor inicial')
let z = arr.reduceRight(funcaoUm, 100)
console.log('O valor de retorno com 100 de valor inicial é: ',z)