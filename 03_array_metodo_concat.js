console.log('\n................\nArray - Método concat(arg1,arg2,..., argn) - página 136\n.......................')
/*Adiciona elementos definidos nos parâmetros do método concat.*/
let arr = [1, 2, 'a','b']
console.log(arr)
console.log('\n1)Adicionando dados  com concat - array a1')
let a1 = arr.concat('m', 32)
console.log(a1)
console.log(arr)
console.log('\n1)Adicionando dados  com concat - array a2')
let a2 = arr.concat('gol', 456)
console.log(arr)
console.log(a1)
console.log(a2)
console.log('\n1)Adicionando dados  com concat - array arr')
arr = arr.concat(a1, a2)
console.log(arr)