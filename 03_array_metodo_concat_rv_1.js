console.log('\n................\nArray - Método concat(arg1,arg2,..., argn) - página 136 - 1ª revisão\n.......................')
let arr = [1,2,'a','b']
let arr2 = [4,5,'r','s']

console.log('arr = ',arr,'\narr2 =',arr2)
console.log('\n1ª concatenção')
let a1 = arr.concat(arr2)
console.log('a1 = ',a1)

console.log('\n2ª concatenção')
let a2 = a1.concat('gol', 456)
console.log('a2 = ',a2)

console.log('\n3ª concatenção')
let a3 = a2.concat([7,9], [4,6])
console.log('a3 = ',a3)

console.log('\n4ª concatenção')
let a4 = a3.concat([[53,false]])
console.log('a4 = ',a4)

console.log('\n5ª concatenção - apresentada em tabela')
let a5 = a4.concat({x: 3, y: 'boi'})
console.table(a5)
console.log('a5 = ', a5)
console.table(arr)